import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import pfp from '../../assets/images/pfp.jpeg';
import cv from '../../assets/cv.pdf';


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="w-40 h-40 md:w-60 md:h-60 flex-shrink-0 rounded-full overflow-hidden">
          <img
            src= { pfp }
            alt="Yassine Gourram"
            className="w-full h-full object-cover"
          />
        </div>

        <RevealOnScroll>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Yassine Gourram
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Software Engineer | Web Developer | AI Enthusiast
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/yasemitee" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-white hover:text-orange-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/yassine-gourram-68930424a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-white hover:text-orange-400 transition" />
              </a>
              <a href="mailto:yassine.gourram02@gmail.com">
                <FaEnvelope className="text-3xl text-white hover:text-orange-400 transition" />
              </a>
              <a href={ cv } download>
                <FaDownload className="text-3xl text-white hover:text-orange-400 transition" />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};