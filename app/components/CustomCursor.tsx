'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = -100, ry = -100;
    let visible = false;
    let hovering = false;
    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.15);
      ry = lerp(ry, my, 0.15);
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      raf = requestAnimationFrame(tick);
    };

    let mx = -100, my = -100;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;

      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      const target = e.target as HTMLElement;
      const isHover = !!target.closest(
        'a, button, [role="button"], input, textarea, .hover-target'
      );
      if (isHover !== hovering) {
        hovering = isHover;
        ring.style.width = ring.style.height = hovering ? '48px' : '32px';
        ring.style.borderColor = hovering
          ? 'rgba(129, 140, 248, 0.4)'
          : 'rgba(129, 140, 248, 0.25)';
      }
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const base = 'hidden md:block fixed top-0 left-0 rounded-full pointer-events-none';

  return (
    <>
      <div
        ref={dotRef}
        className={`${base} w-3 h-3 bg-indigo-400 z-[100] opacity-0`}
        style={{ willChange: 'transform', transition: 'opacity .2s' }}
      />
      <div
        ref={ringRef}
        className={`${base} w-8 h-8 border border-indigo-400/25 z-[99] opacity-0`}
        style={{
          willChange: 'transform',
          transition: 'width .2s, height .2s, border-color .2s, opacity .2s',
        }}
      />
    </>
  );
}
