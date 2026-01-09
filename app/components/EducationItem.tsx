'use client';
import TimelineItem from './TimelineItem';

interface Education {
  institution: string;
  degree: string;
  period: string;
  desc: string;
}

interface EducationItemProps {
  edu: Education;
  isLast: boolean;
  isDark: boolean;
}

export default function EducationItem({
  edu,
  isLast,
  isDark,
}: EducationItemProps) {
  const accentClasses = {
    dotHover: 'group-hover:bg-emerald-500 group-hover:scale-125',
    accentText: {
      dark: 'text-emerald-300',
      light: 'text-emerald-700',
    },
  };

  return (
    <TimelineItem
      title={edu.institution}
      label={edu.degree}
      period={edu.period}
      description={edu.desc}
      accentClasses={accentClasses}
      isLast={isLast}
      isDark={isDark}
    />
  );
}
