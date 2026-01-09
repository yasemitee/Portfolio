'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock, LucideIcon } from 'lucide-react';
import { itemVariants } from '../utils/animations';

interface Project {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  website?: string;
  isPrivate?: boolean;
  icon: LucideIcon;
}

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
}

export default function ProjectCard({ project, isDark }: ProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={itemVariants}
      whileHover={{ y: -2, scale: 1.01, transition: { duration: 0.2 } }}
      style={{ willChange: 'transform, opacity' }}
      className={`group relative flex flex-col md:flex-row p-6 md:p-8 rounded-3xl overflow-hidden hover-target transition-all duration-500 w-full ${
        isDark
          ? 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700'
          : 'bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-200/50'
      }`}
    >
      {/* Background Graphic */}
      <div
        className={`absolute -right-8 -top-8 md:-right-12 md:-top-12 opacity-[0.03] md:opacity-5 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-12 ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        <project.icon size={280} strokeWidth={0.5} />
      </div>

      {/* Hover Gradient Overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${
          isDark
            ? 'from-indigo-500/5 via-transparent to-transparent'
            : 'from-indigo-500/5 via-transparent to-transparent'
        }`}
      />

      {/* Icon Column */}
      <div className="md:w-auto md:shrink-0 mb-6 md:mb-0 md:mr-8 relative z-10 flex flex-col items-start">
        <div
          className={`p-4 rounded-2xl inline-block transition-colors duration-300 ${
            isDark
              ? 'bg-neutral-800 text-indigo-400 group-hover:bg-neutral-700 group-hover:text-white'
              : 'bg-neutral-100 text-indigo-600 group-hover:bg-indigo-50 group-hover:text-indigo-700'
          }`}
        >
          <project.icon size={32} strokeWidth={1.5} />
        </div>
      </div>

      {/* Content Column */}
      <div className="flex flex-col flex-grow relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
          <div>
            <h3
              className={`text-2xl font-bold mb-2 leading-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {project.title}
            </h3>
          </div>

          <div className="flex gap-2 shrink-0">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors border ${
                  isDark
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-700'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-300'
                }`}
                title="Live Site"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.isPrivate ? (
              <div
                title="Private Repo"
                className={`p-2 rounded-lg cursor-help border ${
                  isDark
                    ? 'bg-neutral-800/50 border-neutral-800 text-neutral-600'
                    : 'bg-neutral-100 border-neutral-100 text-neutral-400'
                }`}
              >
                <Lock size={18} />
              </div>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors border ${
                  isDark
                    ? 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-700'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-300'
                }`}
                title="GitHub Repo"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>

        <p
          className={`text-base leading-relaxed mb-6 max-w-2xl ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1 rounded-md font-medium border ${
                isDark
                  ? 'bg-neutral-800/50 border-neutral-700 text-neutral-400 group-hover:border-neutral-600'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-600 group-hover:border-neutral-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
