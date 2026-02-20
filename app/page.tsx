'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Cpu,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// Data & Utils
import { DATA } from './data/portfolio-data';
import { containerVariants, itemVariants, fadeInUp } from './utils/animations';

// Components
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceItem from './components/ExperienceItem';
import EducationItem from './components/EducationItem';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const visibleProjects = showAllProjects
    ? DATA.projects
    : DATA.projects.slice(0, 2);

  return (
    <div className="min-h-screen font-sans bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <AnimatedBackground />
      <Navbar onScrollToSection={scrollToSection} />

      <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 relative z-10">
        <HeroSection
          name={DATA.profile.name}
        />

        <SkillsSection skills={DATA.skills} />

        {/* EXPERIENCE SECTION */}
        <motion.section
          id="experience"
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-12"
          >
            <div className="p-2 rounded-lg bg-neutral-900">
              <Briefcase size={20} className="text-neutral-300" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-4">
            {DATA.experience.map((exp, i) => (
              <ExperienceItem
                key={i}
                exp={exp}
                isLast={i === DATA.experience.length - 1}
              />
            ))}
          </div>
        </motion.section>

        {/* EDUCATION SECTION */}
        <motion.section
          id="education"
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-12"
          >
            <div className="p-2 rounded-lg bg-neutral-900">
              <GraduationCap size={20} className="text-neutral-300" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Education
            </h2>
          </motion.div>

          <div className="space-y-4">
            {DATA.education.map((edu, i) => (
              <EducationItem
                key={i}
                edu={edu}
                isLast={i === DATA.education.length - 1}
              />
            ))}
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-12"
          >
            <div className="p-2 rounded-lg bg-neutral-900">
              <Cpu size={20} className="text-neutral-300" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Selected Projects
            </h2>
          </motion.div>

          <div className="space-y-6">
            {visibleProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          {DATA.projects.length > 2 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              >
                {showAllProjects ? (
                  <>
                    Show Less <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    View All Projects <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </motion.section>
      </main>

      <footer className="text-center py-12 text-xs border-t mt-12 relative z-10 bg-neutral-950 border-neutral-800 text-neutral-600">
        <p className="flex items-center justify-center gap-2 mb-4">
          <MapPin size={12} /> Milan, Italy
        </p>
        <p>© 2026 Yassine Gourram. Built with React & Tailwind.</p>
      </footer>

    </div>
  );
}
