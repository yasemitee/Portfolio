'use client';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { itemVariants } from '../utils/animations';

interface AccentClasses {
  dotHover: string;
  accentText: string;
}

interface TimelineItemProps {
  title: string;
  label: string;
  period: string;
  description: string;
  accentClasses: AccentClasses;
  badge?: React.ReactNode;
  isLast: boolean;
}

export default function TimelineItem({
  title,
  label,
  period,
  description,
  accentClasses,
  badge,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.div variants={itemVariants} className="relative pl-8 md:pl-0 group">
      <div
        className={`hidden md:block absolute left-[29.5%] top-3 w-px -z-10 transition-colors duration-500 bg-neutral-800 group-hover:bg-neutral-700 ${isLast ? 'h-full' : 'bottom-0'}`}
      />

      <div className="md:flex gap-10 relative">
        <div
          className={`hidden md:flex absolute left-[29.5%] -translate-x-1/2 top-1.5 h-3 w-3 rounded-full border-2 transition-all duration-300 z-10 border-neutral-900 bg-neutral-700 ${accentClasses.dotHover}`}
        />

        <div className="md:w-[30%] md:text-right md:pr-8 mb-2 md:mb-0">
          <p className="text-sm font-bold text-neutral-100">
            {title}
          </p>
          <div className="flex items-center md:justify-end gap-1.5 text-xs mt-1 font-mono text-neutral-500">
            <Calendar size={12} />
            <span>{period}</span>
          </div>
        </div>

        <div className={`md:w-[70%] relative border-l-2 md:border-l-0 pl-4 md:pl-0 border-neutral-800 ${!isLast ? 'pb-12' : 'pb-2'}`}>
          <div className={`md:hidden absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 z-10 border-neutral-900 bg-neutral-700 ${accentClasses.dotHover}`} />

          <p className={`text-sm font-medium mb-3 flex items-center gap-2 ${accentClasses.accentText}`}>
            {label}
            {badge}
          </p>
          <p className="text-sm leading-relaxed max-w-lg text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
