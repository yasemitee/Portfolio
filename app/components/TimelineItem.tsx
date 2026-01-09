'use client';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { itemVariants } from '../utils/animations';

interface AccentClasses {
  dotHover: string;
  accentText: {
    dark: string;
    light: string;
  };
}

interface TimelineItemProps {
  title: string;
  label: string;
  period: string;
  description: string;
  accentClasses: AccentClasses;
  badge?: React.ReactNode;
  isLast: boolean;
  isDark: boolean;
}

export default function TimelineItem({
  title,
  label,
  period,
  description,
  accentClasses,
  badge,
  isLast,
  isDark,
}: TimelineItemProps) {
  return (
    <motion.div variants={itemVariants} className="relative pl-8 md:pl-0 group">
      <div
        className={`hidden md:block absolute left-[29.5%] top-2 bottom-0 w-px -z-10 transition-colors duration-500 ${
          isDark
            ? 'bg-neutral-800 group-hover:bg-neutral-700'
            : 'bg-neutral-200 group-hover:bg-neutral-300'
        }`}
      >
        {!isLast && <div className="absolute inset-y-0 w-full"></div>}
      </div>

      <div className="md:flex gap-10 relative">
        <div
          className={`hidden md:flex absolute left-[29.5%] -translate-x-1/2 top-1.5 h-3 w-3 rounded-full border-2 transition-all duration-300 z-10 ${
            isDark
              ? `border-neutral-900 bg-neutral-700 ${accentClasses.dotHover}`
              : `border-white bg-neutral-300 ${accentClasses.dotHover}`
          }`}
        ></div>

        <div className="md:w-[30%] md:text-right md:pr-8 mb-2 md:mb-0">
          <p
            className={`text-sm font-bold ${
              isDark ? 'text-neutral-100' : 'text-neutral-900'
            }`}
          >
            {title}
          </p>
          <div
            className={`flex items-center md:justify-end gap-1.5 text-xs mt-1 font-mono ${
              isDark ? 'text-neutral-500' : 'text-neutral-500'
            }`}
          >
            <Calendar size={12} />
            <span>{period}</span>
          </div>
        </div>

        <div
          className={`md:w-[70%] relative border-l-2 md:border-l-0 pl-4 md:pl-0 pb-12 ${
            isDark ? 'border-neutral-800' : 'border-neutral-100'
          }`}
        >
          <div
            className={`md:hidden absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 z-10 ${
              isDark
                ? 'border-neutral-900 bg-neutral-700'
                : 'border-white bg-neutral-300'
            }`}
          ></div>

          <p
            className={`text-sm font-medium mb-3 flex items-center gap-2 ${
              isDark
                ? accentClasses.accentText.dark
                : accentClasses.accentText.light
            }`}
          >
            {label}
            {badge}
          </p>
          <p
            className={`text-sm leading-relaxed max-w-lg ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
