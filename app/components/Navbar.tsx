'use client';
import { Sun, Moon } from 'lucide-react';
import { DATA } from '../data/portfolio-data';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Navbar({
  isDark,
  onToggleTheme,
  onScrollToSection,
}: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md z-40 border-b transition-colors duration-500 h-16 ${
        isDark
          ? 'bg-neutral-950/80 border-neutral-800'
          : 'bg-[#FDFDFD]/80 border-neutral-200/50'
      }`}
    >
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
                className={`transition-colors hover-target ${
                  isDark
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex gap-4 items-center pl-4 border-l border-neutral-200/20">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg transition-colors cursor-none hover-target ${
                isDark
                  ? 'hover:bg-neutral-800 text-neutral-400 hover:text-yellow-300'
                  : 'hover:bg-neutral-100 text-neutral-500 hover:text-orange-500'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="flex gap-2">
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
                    className={`p-2 rounded-lg transition-colors cursor-none hover-target ${
                      isDark
                        ? 'text-neutral-400 hover:text-indigo-400 hover:bg-neutral-900'
                        : 'text-neutral-400 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    <s.icon size={18} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
