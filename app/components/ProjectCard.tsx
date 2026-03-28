'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Github, ExternalLink, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: readonly string[];
  link: string;
  website?: string;
  image?: string;
  isPrivate?: boolean;
  icon?: LucideIcon;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [screenshotError, setScreenshotError] = useState(false);
  const ProjectIcon = project.icon;
  const manualImage = project.image?.trim();
  const screenshotUrl = manualImage
    ? manualImage
    : project.website
      ? `https://image.thum.io/get/width/1200/noanimate/${project.website}`
      : null;

  return (
    <article className="group relative overflow-hidden rounded-2xl w-full border border-neutral-800/80 bg-neutral-900/80 hover:border-neutral-700 transition-all duration-300">
      <div className="relative h-44 sm:h-52 border-b border-neutral-800/80 bg-neutral-950">
        {screenshotUrl && !screenshotError ? (
          <>
            <Image
              src={screenshotUrl}
              alt={`Screenshot di ${project.title}`}
              fill
              unoptimized={!manualImage && Boolean(project.website)}
              className="object-cover object-[50%_0%] opacity-80 transition-[object-position,opacity] duration-[2400ms] ease-in-out group-hover:object-[50%_28%]"
              onError={() => setScreenshotError(true)}
              sizes="(max-width: 768px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />
          </>
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),_transparent_52%),linear-gradient(to_bottom,_rgba(24,24,27,0.85),_rgba(10,10,10,0.95))]">
            <div className="text-center px-4">
              {ProjectIcon && (
                <ProjectIcon
                  size={24}
                  className="mx-auto mb-2 text-neutral-500"
                />
              )}
              <p className="text-xs font-medium tracking-[0.18em] text-neutral-500">
                PROJECT OVERVIEW
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
          <div className="flex items-start gap-3">
            {ProjectIcon && (
              <div className="mt-0.5 p-2 rounded-lg border border-neutral-700 bg-neutral-800/70 text-neutral-300">
                <ProjectIcon size={16} />
              </div>
            )}
            <h3 className="text-xl font-bold leading-tight text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex gap-2 shrink-0">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20 transition-colors"
                title="Live Site"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
            {project.isPrivate ? (
              <div
                title="Private Repo"
                className="p-2 rounded-lg cursor-help border bg-neutral-800/60 border-neutral-700 text-neutral-500"
              >
                <Lock size={18} />
              </div>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 hover:bg-indigo-500/20 transition-colors"
                title="GitHub Repo"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-6 max-w-2xl text-neutral-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-md font-medium border bg-neutral-800/60 border-neutral-700 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
