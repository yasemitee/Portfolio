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
}

export default function EducationItem({
  edu,
  isLast,
}: EducationItemProps) {
  const accentClasses = {
    dotHover: 'group-hover:bg-emerald-500 group-hover:scale-125',
    accentText: 'text-emerald-300',
  };

  return (
    <TimelineItem
      title={edu.institution}
      label={edu.degree}
      period={edu.period}
      description={edu.desc}
      accentClasses={accentClasses}
      isLast={isLast}
    />
  );
}
