import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <Reveal>
      <footer className="border-t border-violet-500/20 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
                Divyanshi Agarwal
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Built with React + Tailwind CSS
              </p>
            </div>

            <div className="flex gap-4 text-slate-400">
              <a
                href="https://linkedin.com/in/divyanshi-agarwal-95911827a"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-violet-400 transition-colors"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://github.com/divyanshi220106"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-violet-400 transition-colors"
              >
                <FaGithub size={22} />
              </a>
            </div>

            <a
              href="#home"
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-teal-500 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <FaArrowUp />
            </a>
          </div>

          <div className="text-center text-slate-500 text-sm mt-8">
            © 2026 Divyanshi Agarwal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </Reveal>
  );
};

export default Footer;