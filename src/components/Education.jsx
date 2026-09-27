import { useState } from "react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

const ScoreRing = ({ value, max = 10, label = "CGPA" }) => {
  const numeric = parseFloat(value);
  const pct = Math.min((numeric / max) * 100, 100);
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="rgba(139,92,246,0.15)"
          strokeWidth="5"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="url(#ringGradient)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{value}</span>
      </div>
      <p className="text-center text-[10px] text-slate-500 mt-1">{label}</p>
    </div>
  );
};

const Education = () => {
  const education = [
    {
      icon: "🎓",
      title: "B.Tech in Information Technology",
      place: "ABES Engineering College, Ghaziabad",
      period: "2023 – 2027 (AKTU)",
      score: "7.93",
      scoreLabel: "CGPA",
      scoreMax: 10,
      details: [
        "1st Semester — 8.27 SGPA",
        "2nd Semester — 7.73 SGPA",
        "3rd Semester — 7.76 SGPA",
        "4th Semester — 7.87 SGPA",
        "5th Semester — 7.83 SGPA",
        "6th Semester — 8.10 SGPA",
        "Overall Average: 7.93 CGPA",
      ],
    },
    {
      icon: "🏫",
      title: "Class 12th (CBSE)",
      place: "SD Public School, Muzaffarnagar",
      period: "Completed 2023",
      score: "86.2%",
      scoreLabel: "Score",
      scoreMax: 100,
      details: ["Percentage: 86.2%"],
    },
    {
      icon: "🏫",
      title: "Class 10th (CBSE)",
      place: "SD Public School, Muzaffarnagar",
      period: "Completed 2021",
      score: "89.2%",
      scoreLabel: "Score",
      scoreMax: 100,
      details: ["Percentage: 89.2%"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Reveal>
      <section id="education" className="py-24 bg-violet-500/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-teal-400 mb-2">
              Academic Path
            </p>
            <h2 className="text-4xl font-bold">Education Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-teal-400/40 to-transparent hidden md:block" />

            <div className="space-y-10">
              {education.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`relative flex ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-teal-400 border-2 border-[#0a0a0f]" />

                    <div className="w-full md:w-[46%] bg-white/5 border border-violet-500/20 rounded-2xl p-6 hover:border-violet-400 transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-xl shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                              {item.place}
                            </p>
                            <p className="text-slate-500 text-xs mt-1">
                              {item.period}
                            </p>
                          </div>
                        </div>

                        <ScoreRing
                          value={item.score}
                          max={item.scoreMax}
                          label={item.scoreLabel}
                        />
                      </div>

                      <button
                        onClick={() => toggle(index)}
                        className="mt-4 flex items-center gap-1 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors"
                      >
                        {isOpen ? "Hide Details" : "View Details"}
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ⌄
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-3 space-y-2"
                          >
                            {item.details.map((line, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm text-slate-300"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                                {line}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Education;