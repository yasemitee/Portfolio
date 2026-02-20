'use client';
import { motion } from 'framer-motion';
import { itemVariants } from '../utils/animations';

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <motion.span
      variants={itemVariants}
      className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-default bg-neutral-800/50 text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600"
    >
      {text}
    </motion.span>
  );
}
