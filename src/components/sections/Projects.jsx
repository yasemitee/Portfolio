import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Social Network for Music</h3>
              <p className="text-gray-400 mb-4">
              Web application that enables users to create and share playlists, integrating the Spotify API
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["REST API", "Node.js", "Express.js", "Bootstrap", "Mongodb"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/yasemitee/SNM"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-orange-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">University Portal</h3>
              <p className="text-gray-400 mb-4">
              Platform for university administrative management, providing a personalized interface for secretaries, teachers, and students.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "CSS", "PostgreSQL", "ER-Schema"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-orange-500/10 text-orange-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-orange-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/yasemitee/Portale-universitario"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
