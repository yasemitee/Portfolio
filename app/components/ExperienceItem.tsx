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
  isDark: boolean;
}

export default function ExperienceItem({
  exp,
  isLast,
  isDark,
}: ExperienceItemProps) {
  const accentClasses = {
    dotHover: 'group-hover:bg-indigo-500 group-hover:scale-125',
    accentText: {
      dark: 'text-indigo-300',
      light: 'text-indigo-700',
    },
  };

  const researchBadge =
    exp.type === 'research' ? (
      <span
        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
          isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
        }`}
      >
        R&D
      </span>
    ) : null;

  return (
    <TimelineItem
      title={exp.company}
      label={exp.role}
      period={exp.period}
      description={exp.desc}
      accentClasses={accentClasses}
      badge={researchBadge}
      isLast={isLast}
      isDark={isDark}
    />
  );
}
