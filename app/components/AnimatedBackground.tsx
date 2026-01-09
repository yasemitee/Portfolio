'use client';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  isDark: boolean;
}

export default function AnimatedBackground({
  isDark,
}: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Static Grid */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(${
            isDark ? '#444' : '#ccc'
          } 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      ></div>

      {/* Floating Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className={`absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] ${
          isDark ? 'bg-indigo-900/30' : 'bg-indigo-200/40'
        }`}
      />
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
        className={`absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${
          isDark ? 'bg-blue-900/20' : 'bg-cyan-200/40'
        }`}
      />
    </div>
  );
}
