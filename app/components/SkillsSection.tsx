'use client';
import { motion } from 'framer-motion';
import { Terminal, Layers, Wrench } from 'lucide-react';
import Badge from './Badge';
import { containerVariants, itemVariants } from '../utils/animations';

interface Skills {
  languages: readonly string[];
  frameworks: readonly string[];
  tools: readonly string[];
}

interface SkillsSectionProps {
  skills: Skills;
  isDark: boolean;
}

export default function SkillsSection({ skills, isDark }: SkillsSectionProps) {
  const skillGroups = [
    {
      title: 'Languages',
      icon: Terminal,
      items: skills.languages,
      color: 'text-indigo-500',
    },
    {
      title: 'Frameworks & Tech',
      icon: Layers,
      items: skills.frameworks,
      color: 'text-emerald-500',
    },
    {
      title: 'Tools',
      icon: Wrench,
      items: skills.tools,
      color: 'text-orange-500',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="mb-32"
    >
      <motion.h2
        variants={itemVariants}
        className={`text-xs font-bold uppercase tracking-widest mb-10 flex items-center gap-3 ${
          isDark ? 'text-neutral-500' : 'text-neutral-400'
        }`}
      >
        <span className="w-8 h-[1px] bg-current"></span> Core Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skillGroups.map((skillGroup, idx) => (
          <motion.div key={idx} variants={containerVariants}>
            <h3
              className={`text-sm font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}
            >
              <skillGroup.icon size={18} className={skillGroup.color} />{' '}
              {skillGroup.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((t) => (
                <Badge key={t} text={t} isDark={isDark} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
