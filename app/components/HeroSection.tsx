'use client';
import { motion } from 'framer-motion';
import { itemVariants, fadeInUp } from '../utils/animations';

interface HeroSectionProps {
  name: string;
}

export default function HeroSection({ name }: HeroSectionProps) {
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
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white"
      >
        {name}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-2xl leading-relaxed max-w-2xl mb-10 font-light text-neutral-400"
      >
        <span className="font-medium text-neutral-200">
          Software Engineer
        </span>{' '}
        Based in Milan. I like understanding how things actually work. Currently
        pursuing an MSc in Computer Science at the University of Milan.
      </motion.p>
    </motion.div>
  );
}
