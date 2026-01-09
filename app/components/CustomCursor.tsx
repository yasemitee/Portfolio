'use client';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CustomCursorProps {
  isDark: boolean;
}

export default function CustomCursor({ isDark }: CustomCursorProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest(
          'a, button, [role="button"], input, textarea, .hover-target'
        )
      );
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100] transition-opacity duration-300 ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${isDark ? 'bg-indigo-400' : 'bg-indigo-600'}`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className={`hidden md:block fixed top-0 left-0 border rounded-full pointer-events-none z-[99] transition-opacity duration-300 ${
          !isVisible ? 'opacity-0' : 'opacity-100'
        } ${isDark ? 'border-indigo-400/40' : 'border-indigo-600/40'}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          backgroundColor: isHovering
            ? isDark
              ? 'rgba(129, 140, 248, 0.1)'
              : 'rgba(79, 70, 229, 0.05)'
            : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </>
  );
}
