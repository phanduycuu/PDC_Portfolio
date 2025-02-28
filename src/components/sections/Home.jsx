import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaFileDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"; // Import icons đẹp hơn

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Duy Cuu
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a Full Stack Developer passionate about creating innovative and
            efficient solutions. With a seamless blend of smooth Frontend and
            powerful Backend, I turn ideas into real-world products.
          </p>

          {/* Các nút chính */}
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>

            {/* Nút Download Resume - thay icon đẹp hơn */}
            <a
              href="#"
              download="QuangHa_Resume.pdf"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 flex items-center"
            >
              <FaFileDownload className="mr-2 text-xl" /> Resume
            </a>
          </div>

          {/* Các nút mạng xã hội */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 p-3 rounded-full transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              <FaFacebookF className="text-xl" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 p-3 rounded-full transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 p-3 rounded-full transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
