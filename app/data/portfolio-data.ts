import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Database,
  Gamepad2,
  Bot,
  Music,
} from 'lucide-react';

export const DATA = {
  profile: {
    name: 'Yassine Gourram',
    role: 'Software Engineer',
    location: 'Milan, Italy',
    avatar_initials: 'YG',
  },
  socials: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/yasemitee' },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/yassine-gourram-68930424a/',
    },
    { name: 'Email', icon: Mail, url: 'mailto:yassinegourram02@gmail.com' },
    { name: 'CV', icon: FileText, url: '/Yassine_Gourram_CV.pdf' },
  ],
  skills: {
    languages: [
      'Java',
      'Python',
      'TypeScript',
      'JavaScript',
      'SQL',
      'C++',
      'PHP',
      'Go',
    ],
    frameworks: [
      'Spring Boot',
      'Angular',
      'React',
      'Next.js',
      'Kafka',
      'JPA/Hibernate',
    ],
    tools: ['Docker', 'ArgoCD', 'AWS', 'PostgreSQL', 'MongoDB', 'Git', 'Linux'],
  },
  education: [
    {
      institution: 'University of Milan',
      degree: 'BSc in Computer Science',
      period: 'Feb 2025',
      desc: 'Thesis awarded full marks. Research focused on optimizing autonomous vehicle platooning in urban environments using DSRC, 5G, and ML technologies.',
    },
  ],
  experience: [
    {
      company: 'PwC Italy',
      role: 'Associate Software Engineer',
      period: 'Mar 2025 - Aug 2025',
      desc: 'Contributed to the modernization of an internal Wealth Management system for a major Italian banking group. Migrated legacy backend services to Microservices using Java Spring Boot and developed Angular dashboards for financial advisors.',
      type: 'work',
    },
    {
      company: 'Connects Lab (UniMi)',
      role: 'Research Internship',
      period: 'Oct 2024 - Feb 2025',
      desc: 'Conducted simulation and analysis of a platooning system for autonomous driving. Evaluated V2V communication reliability using DSRC and 5G technologies as part of thesis research.',
      type: 'research',
    },
  ],
  projects: [
    {
      title: 'The Negotiation Arena',
      description:
        'Research project investigating how LLMs behave as autonomous agents in negotiation. Analyzing emergent strategies like persuasion, concession, and deception in multi-agent scenarios.',
      tags: ['Python', 'LLMs', 'Multi-Agent Systems', 'NLP'],
      link: 'https://github.com/yasemitee/negotiation-arena',
      icon: Bot,
    },
    {
      title: 'GamesToShare',
      description:
        'Web platform designed for sharing video game libraries. Under the hood uses Steam API to manage game ownership and facilitate posts creation.',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      link: 'https://github.com/yasemitee/gamestoshare',
      website: 'https://gamestoshare.com/',
      icon: Gamepad2,
    },
    {
      title: 'SNM (Social Network for Music)',
      description:
        'Playlist sharing platform that features a recommendation system based on user preferences and social interactions. Interacts directly with Spotify backend services.' ,
      tags: ['Express.js', 'JWT', 'MongoDB', 'Bootstrap'],
      link: 'https://github.com/yasemitee/SNM',
      icon: Music,
    },
    {
      title: 'University Portal',
      description:
        'Academic management system for university services. Developed a web-based portal to manage student data and exams, ensuring compliance with university constraints.',
      tags: ['PHP', 'PostgreSQL', 'Bootstrap'],
      link: 'https://github.com/yasemitee/Portale-universitario',
      icon: Database,
    },
  ],
} as const;
