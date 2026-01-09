'use client';
import { motion } from 'framer-motion';
import { itemVariants } from '../utils/animations';

interface BadgeProps {
  text: string;
  isDark: boolean;
}

export default function Badge({ text, isDark }: BadgeProps) {
  return (
    <motion.span
      variants={itemVariants}
      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-default ${
        isDark
          ? 'bg-neutral-800/50 text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600'
          : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'
      }`}
    >
      {text}
    </motion.span>
  );
}
