'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-950/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-blue-950/8 blur-[100px]" />
    </div>
  );
}
