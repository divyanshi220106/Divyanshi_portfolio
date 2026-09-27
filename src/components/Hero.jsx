import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/Divyanshi.jpg";

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "React Engineer",
    "AI Developer",
    "Data Enthusiast",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          if (charIndex === current.length) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setText(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          if (charIndex === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-10"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        {/* Left: photo + config card + socials */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative">
            <div
              className="w-56 h-56 rounded-full p-1"
              style={{
                background: "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src={profile}
                  alt="Divyanshi Agarwal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0a0f] border border-teal-400/40 text-teal-300 text-xs font-medium whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
              </span>
              Available for hire
            </span>
          </div>

          {/* Fake code editor card */}
          <div className="w-full max-w-xs rounded-xl overflow-hidden border border-violet-500/20 bg-white/5 mt-4">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-violet-500/10 bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 text-[11px] text-slate-500">
                divyanshi.config.js
              </span>
            </div>
            <div className="px-4 py-3 text-[11px] leading-relaxed font-mono">
              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-teal-300">dev</span> = {"{"}
              </p>
              <p className="pl-4">
                name:{" "}
                <span className="text-amber-300">"Divyanshi Agarwal"</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-amber-300">"Full-Stack Dev"</span>
                ,
              </p>
              <p className="pl-4">
                stack: [<span className="text-amber-300">"React"</span>,{" "}
                <span className="text-amber-300">"Node"</span>]
              </p>
              <p className="pl-4">
                status:{" "}
                <span className="text-amber-300">"open to work"</span>
              </p>
              <p>{"};"}</p>
              <p className="text-slate-500">
                $ ready <span className="text-violet-400">&amp;&amp;</span>{" "}
                hiring
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            <a
              href="https://github.com/divyanshi220106"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-violet-500/25 flex items-center justify-center text-slate-300 hover:text-violet-400 hover:border-violet-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/divyanshi-agarwal-95911827a"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-violet-500/25 flex items-center justify-center text-slate-300 hover:text-violet-400 hover:border-violet-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="mailto:divyanshiagarwal22@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-violet-500/25 flex items-center justify-center text-slate-300 hover:text-violet-400 hover:border-violet-400 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right: intro text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-teal-300 bg-clip-text text-transparent">
              Divyanshi Agarwal
            </span>
          </h1>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-teal-400 mb-5" />

          <p className="text-lg text-slate-300 mb-4 h-7">
            I'm a{" "}
            <span className="text-violet-400 font-semibold">
              {text}
              <span className="text-teal-400 animate-pulse">|</span>
            </span>
          </p>

          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl">
            I build{" "}
            <span className="text-teal-300 font-medium">
              full-stack web applications
            </span>{" "}
            with React.js, Node.js, Express.js and MongoDB, blending clean
            UI with AI-powered features using the Gemini API — for real,
            working products, not just demos.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
              }}
            >
              View Projects →
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-colors"
            >
              ⬇ View Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-teal-400/40 text-teal-300 hover:bg-teal-400/10 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 bg-white/5 text-sm">
              <span className="text-violet-400">{"</>"}</span>
              <span className="font-bold text-white">3+</span>
              <span className="text-slate-400">Projects Built</span>
            </span>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-violet-500/20 bg-white/5 text-sm">
              <span className="text-violet-400">★</span>
              <span className="font-bold text-white">6+</span>
              <span className="text-slate-400">Certifications</span>
            </span>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-teal-400/20 bg-white/5 text-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="font-bold text-teal-300">Open</span>
              <span className="text-slate-400">to Work</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 flex flex-col items-center gap-2 text-slate-500 text-xs tracking-[0.2em]"
      >
        SCROLL
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-violet-500/30 flex items-start justify-center p-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;