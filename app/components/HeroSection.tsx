'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { itemVariants, fadeInUp } from '../utils/animations';

interface HeroSectionProps {
  name: string;
  isDark: boolean;
  onContactClick: () => void;
}

export default function HeroSection({
  name,
  isDark,
  onContactClick,
}: HeroSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-24"
    >
      <motion.h1
        variants={itemVariants}
        className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight ${
          isDark ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {name}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className={`text-lg md:text-2xl leading-relaxed max-w-2xl mb-10 font-light ${
          isDark ? 'text-neutral-400' : 'text-neutral-500'
        }`}
      >
        <span
          className={`font-medium ${
            isDark ? 'text-neutral-200' : 'text-neutral-800'
          }`}
        >
          Software Engineer
        </span>{' '}
        Based in Milan. I like understanding how things actually work. Currently
        pursuing an MSc in Computer Science at the University of Milan.
      </motion.p>

      <motion.button
        variants={itemVariants}
        onClick={onContactClick}
        className={`group whitespace-nowrap px-8 py-4 rounded-full text-sm font-bold transition-all shadow-xl hover:scale-105 cursor-none hover-target flex items-center gap-2 ${
          isDark
            ? 'bg-white text-neutral-900 hover:bg-neutral-200'
            : 'bg-neutral-900 text-white hover:bg-neutral-800'
        }`}
      >
        Contact Me{' '}
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </motion.button>
    </motion.div>
  );
}
