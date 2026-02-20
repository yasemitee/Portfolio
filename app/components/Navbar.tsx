'use client';
import { DATA } from '../data/portfolio-data';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-40 border-b bg-neutral-950/80 border-neutral-800 h-16">
      <div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-between">
        <span className="font-bold tracking-tight text-xl flex items-center gap-1">
          YG<span className="text-indigo-500">.</span>
        </span>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {['Projects'].map((item) => (
              <button
                key={item}
                onClick={() => onScrollToSection(item.toLowerCase())}
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex gap-2 items-center pl-4 border-l border-neutral-200/20">
            {DATA.socials.map((s) => {
              const isCV = s.name === 'CV';
              const linkProps = isCV
                ? { download: 'Yassine_Gourram_CV.pdf' }
                : { target: '_blank', rel: 'noopener noreferrer' };

              return (
                <a
                  key={s.name}
                  href={s.url}
                  {...linkProps}
                  className="p-2 rounded-lg transition-colors text-neutral-400 hover:text-indigo-400 hover:bg-neutral-900"
                >
                  <s.icon size={18} strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
