'use client';
import { Github, ExternalLink, Lock } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  website?: string;
  isPrivate?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative p-6 md:p-8 rounded-2xl w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:-translate-y-1 transition-all duration-200">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
        <h3 className="text-xl font-bold leading-tight text-white">
          {project.title}
        </h3>

        <div className="flex gap-2 shrink-0">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors border border-neutral-700 text-neutral-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30"
              title="Live Site"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.isPrivate ? (
            <div
              title="Private Repo"
              className="p-2 rounded-lg cursor-help border bg-neutral-800/50 border-neutral-800 text-neutral-600"
            >
              <Lock size={18} />
            </div>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors border border-neutral-700 text-neutral-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30"
              title="GitHub Repo"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-6 max-w-2xl text-neutral-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-md font-medium border bg-neutral-800/50 border-neutral-700 text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
