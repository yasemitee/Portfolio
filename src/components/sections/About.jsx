import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    "Figma",
  ];

  const backendSkills = ["Java", "Python", "Golang", "PHP", "Node.js", "Express.js", "MongoDB", "PostgreSQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            Hi, I’m Yassine Gourram, a passionate Software Engineer based near Milan, with a strong interest in software development and artificial intelligence. I earned my Bachelor’s degree in Computer Science from the University of Milan.
              <br />
              <br />
              My journey in tech began in childhood, when my curiosity was sparked by every new technological advancement. This led me to explore various fields, from mobile jailbreaking to networking. As I grew older, I discovered the areas that truly fascinated such as developing complex software systems and analyzing large-scale data to extract meaningful insights.
              <br />
              <br />
              I am always eager to learn and explore new technologies. I thrive in collaborative environments, where I can acquire new skills and share my knowledge with others.
              <br />
              <br />  
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-400/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at PwC Italy (2025 - Present){" "}
                  </h4>
                  <p>
                    Work in progress..
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Thesis student at CONNETS LAB (Communication networks and Network science), UniMi (2024 - 2025){" "}
                  </h4>
                  <p>
                  Simulation and analysis of a platooning system for autonomous driving, evaluating the reliability of V2V
                  communication using DSRC technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - University of Milan
                </li>
                <li>
                  Relevant Coursework: Software Engineering, Algorithms and Data Structures, Database, Artificial intelligence, Statistics and Data Analysis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
