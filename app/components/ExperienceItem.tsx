'use client';
import TimelineItem from './TimelineItem';

interface Experience {
  company: string;
  role: string;
  period: string;
  desc: string;
  type?: string;
}

interface ExperienceItemProps {
  exp: Experience;
  isLast: boolean;
}

export default function ExperienceItem({
  exp,
  isLast,
}: ExperienceItemProps) {
  const accentClasses = {
    dotHover: 'group-hover:bg-indigo-500 group-hover:scale-125',
    accentText: 'text-indigo-300',
  };

  null;

  return (
    <TimelineItem
      title={exp.company}
      label={exp.role}
      period={exp.period}
      description={exp.desc}
      accentClasses={accentClasses}
      badge={null}
      isLast={isLast}
    />
  );
}
