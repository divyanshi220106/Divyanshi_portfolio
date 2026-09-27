import Reveal from "./Reveal";
import { motion } from "framer-motion";
import profile from "../assets/Divyanshi.jpg";

const About = () => {
  const stats = [
    { value: "3+", label: "Projects" },
    { value: "6+", label: "Certifications" },
    { value: "1", label: "Internship" },
  ];

  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "JWT",
  ];

  const journey = [
    {
      year: "2023",
      title: "Started B.Tech IT",
      desc: "Joined ABES Engineering College, Ghaziabad (AKTU).",
    },
    {
      year: "2025",
      title: "Naukri Young Turks — Top 3%",
      desc: "Ranked in the top 3% (97.64 percentile) among 5,00,000+ participants.",
    },
    {
      year: "2026",
      title: "AI Web Developer Intern",
      desc: "Built and deployed responsive apps at InAmigos Foundation.",
    },
    {
      year: "2026",
      title: "Built VedaAI & Prescripto",
      desc: "Shipped an AI evaluation pipeline and a full-stack healthcare platform.",
    },
    {
      year: "2026",
      title: "Gemini Student Ambassador",
      desc: "Selected as a Google Gemini Student Ambassador.",
    },
  ];

  return (
    <Reveal>
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-teal-400 mb-2">
              Get to know me
            </p>
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-[0.9fr_1.3fr] gap-10 items-start">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-violet-500/20 rounded-3xl p-4"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img
                  src={profile}
                  alt="Divyanshi Agarwal"
                  className="w-full h-72 object-cover"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-teal-400/30 text-teal-300 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  Open to Work
                </span>
              </div>

              <div className="flex items-center justify-between px-1 mb-4">
                <div>
                  <p className="font-semibold text-white">
                    Divyanshi Agarwal
                  </p>
                  <p className="text-slate-400 text-xs">
                    Full-Stack Developer
                  </p>
                </div>
                <p className="text-slate-400 text-xs text-right">
                  📍 Ghaziabad
                  <br />
                  Uttar Pradesh
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-violet-500/10 rounded-xl py-3 text-center"
                  >
                    <p className="text-xl font-bold text-violet-300">
                      {s.value}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right content */}
            <div>
              <p className="text-slate-300 leading-relaxed text-lg mb-5">
                Hi — I'm{" "}
                <span className="text-violet-400 font-semibold">
                  Divyanshi
                </span>
                , a B.Tech IT student who builds full-stack web apps with
                React.js, Node.js, Express.js and MongoDB — and enjoys
                pushing further with AI-powered features using the Gemini
                API. I'm currently pursuing my degree at{" "}
                <span className="text-teal-400 font-semibold">
                  ABES Engineering College
                </span>
                .
              </p>

              <p className="text-slate-400 leading-relaxed mb-6">
                My toolkit: React, Node.js, Express, MongoDB, Tailwind CSS
                and Git, with a strong foundation in DSA and OOP. I focus on
                clean, functional interfaces and real, working products —
                not just demos.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {techStack.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-violet-500/30 bg-violet-500/10 text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-teal-400 mb-6">
                Journey
              </p>

              <div className="relative pl-6 border-l border-violet-500/20 space-y-8">
                {journey.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative"
                  >
                    <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-teal-400" />
                    <p className="text-teal-400 text-xs font-semibold mb-1">
                      {item.year}
                    </p>
                    <p className="font-semibold text-white text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default About;