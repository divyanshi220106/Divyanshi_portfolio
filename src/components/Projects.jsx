import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Brain, Stethoscope, FileText } from "lucide-react";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      badge: "NEW",
      type: "Full-Stack",
      number: "01",
      title: "Prescripto",
      subtitle: "Full-Stack Healthcare Management Platform",
      description:
        "End-to-end healthcare platform with Patient, Doctor and Admin workflows for doctor discovery, availability, and appointment booking. JWT-based role access, Razorpay for payments, and Cloudinary for doctor image management.",
      tech: [
        { name: "React.js", color: "text-sky-300 border-sky-500/40" },
        { name: "Node.js", color: "text-green-300 border-green-500/40" },
        { name: "Express.js", color: "text-slate-200 border-slate-500/40" },
        { name: "MongoDB", color: "text-emerald-300 border-emerald-500/40" },
        { name: "JWT", color: "text-amber-300 border-amber-500/40" },
      ],
      icon: Stethoscope,
      gradient: "from-teal-500/25 to-cyan-500/10",
      iconColor: "text-teal-300",
      githubBg: "bg-teal-600 hover:bg-teal-500",
      github: "#",
      demo: "#",
    },
    {
      type: "Full-Stack",
      number: "02",
      title: "VedaAI",
      subtitle: "AI-Powered Assessment Evaluation & Answer Mapping",
      description:
        "AI evaluation platform that extracts handwritten answers and maps them to the correct question — including multi-part and out-of-order responses — through a 4-stage pipeline, with a positional-mapping system that highlights the exact answer region in real time.",
      tech: [
        { name: "Next.js", color: "text-slate-200 border-slate-500/40" },
        { name: "React", color: "text-sky-300 border-sky-500/40" },
        { name: "Gemini API", color: "text-violet-300 border-violet-500/40" },
      ],
      icon: Brain,
      gradient: "from-violet-500/25 to-fuchsia-500/10",
      iconColor: "text-violet-300",
      githubBg: "bg-violet-600 hover:bg-violet-500",
      github: "https://github.com/divyanshi220106/vedaai-assessment-mapper",
      demo: "https://vedaai-assessment-mapper-psi.vercel.app/",
    },
    {
      type: "Frontend",
      number: "03",
      title: "Smart Resume Builder",
      subtitle: "ATS-Friendly Resume Builder",
      description:
        "Responsive resume builder with dynamic forms, real-time preview and one-click PDF export, built with reusable React components and an interface optimized for both desktop and mobile.",
      tech: [
        { name: "React.js", color: "text-sky-300 border-sky-500/40" },
        { name: "JavaScript", color: "text-amber-300 border-amber-500/40" },
        { name: "HTML/CSS", color: "text-orange-300 border-orange-500/40" },
      ],
      icon: FileText,
      gradient: "from-amber-500/25 to-orange-500/10",
      iconColor: "text-amber-300",
      githubBg: "bg-amber-600 hover:bg-amber-500",
      github: "https://github.com/divyanshi220106/Resume-builder-final",
      demo: "https://smart-resume-builder-virid.vercel.app/",
    },
  ];

  return (
    <Reveal>
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-4 flex items-center gap-2 text-xs text-amber-300">
            <span>⭐</span>
            <span>Featured project appears first</span>
          </div>

          <div className="mb-10">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-teal-400 mb-2">
              My Work
            </p>
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-violet-500/20 rounded-2xl overflow-hidden hover:border-violet-400 flex flex-col"
                >
                  {/* Banner */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-white/10`}
                  >
                    <div className="absolute top-3 left-3 flex gap-2">
                      {project.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500 text-white">
                          {project.badge}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/50 text-white backdrop-blur-sm">
                        {project.type}
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-[11px] font-semibold text-white">
                      {project.number}
                    </span>

                    <Icon className={`w-14 h-14 ${project.iconColor}`} strokeWidth={1.5} />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-xs text-violet-300/80 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 text-xs rounded-full border bg-white/5 ${t.color}`}
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors ${project.githubBg}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-violet-500/40 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
                      >
                        ↗ Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Projects;