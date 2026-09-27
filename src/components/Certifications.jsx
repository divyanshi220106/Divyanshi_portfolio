import Reveal from "./Reveal";
import { motion } from "framer-motion";

const certifications = [
  {
    icon: "💡",
    border: "border-l-pink-400",
    iconBg: "bg-pink-500/15 text-pink-300",
    title: "McKinsey Forward Learning Program",
    issuer: "McKinsey & Company",
    detail:
      "Selected participant, 2025 Cohort — professional and leadership development track.",
    tags: ["Leadership", "2025 Cohort"],
    tagColor: "border-pink-500/40 text-pink-300",
  },
  {
    icon: "🤖",
    border: "border-l-violet-400",
    iconBg: "bg-violet-500/15 text-violet-300",
    title: "Build & Deploy AI Apps with Google AI Studio",
    issuer: "GUVI & Google for Education",
    detail:
      "Hands-on program covering building and deploying AI-powered applications with Google AI Studio.",
    tags: ["AI Apps", "Google Studio"],
    tagColor: "border-violet-500/40 text-violet-300",
  },
  {
    icon: "✍️",
    border: "border-l-teal-400",
    iconBg: "bg-teal-500/15 text-teal-300",
    title: "60-Day Prompt Engineering Challenge with Claude",
    issuer: "Anthropic",
    detail:
      "Completed a 60-day structured challenge on prompt design and working with Claude models.",
    tags: ["Prompt Engineering", "Claude"],
    tagColor: "border-teal-500/40 text-teal-300",
  },
  {
    icon: "🌐",
    border: "border-l-sky-400",
    iconBg: "bg-sky-500/15 text-sky-300",
    title: "Cisco Networking Basics",
    issuer: "Cisco Networking Academy",
    detail:
      "Covered foundational networking concepts — protocols, IP addressing, and network devices.",
    tags: ["Networking", "Fundamentals"],
    tagColor: "border-sky-500/40 text-sky-300",
  },
  {
    icon: "✅",
    border: "border-l-emerald-400",
    iconBg: "bg-emerald-500/15 text-emerald-300",
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    detail:
      "Verified certification in basic algorithmic problem solving and coding fundamentals.",
    tags: ["DSA", "Coding"],
    tagColor: "border-emerald-500/40 text-emerald-300",
  },
  {
    icon: "☁️",
    border: "border-l-cyan-400",
    iconBg: "bg-cyan-500/15 text-cyan-300",
    title: "AWS Academy Graduate",
    issuer: "AWS Academy — Cloud Architecting",
    detail:
      "Completed AWS Academy's Cloud Architecting curriculum covering core AWS services and design patterns.",
    tags: ["Cloud", "AWS"],
    tagColor: "border-cyan-500/40 text-cyan-300",
  },
];

const CertCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="relative group"
  >
    {/* Base card */}
    <div
      className={`bg-white/5 border border-violet-500/10 border-l-2 ${item.border} rounded-2xl p-6`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${item.iconBg}`}
      >
        {item.icon}
      </div>

      <h3 className="font-semibold text-white mb-1 leading-snug">
        {item.title}
      </h3>
      <p className="text-slate-400 text-xs mb-4">{item.issuer}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium border bg-black/20 ${item.tagColor}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-xs text-slate-500 group-hover:text-violet-400 transition-colors">
        Hover for details →
      </p>
    </div>

    {/* Floating popup on hover */}
    <div
      className={`absolute top-0 left-0 w-full bg-[#111018] border border-l-2 ${item.border} border-violet-400/50 rounded-2xl p-6 shadow-2xl shadow-black/60 z-30 origin-top
      opacity-0 scale-[0.97] pointer-events-none
      transition-all duration-200 ease-out
      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${item.iconBg}`}
      >
        {item.icon}
      </div>

      <h3 className="font-semibold text-white mb-1 leading-snug">
        {item.title}
      </h3>
      <p className="text-slate-400 text-xs mb-3">{item.issuer}</p>

      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        {item.detail}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium border bg-black/30 ${item.tagColor}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <Reveal>
      <section id="certifications" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-teal-400 mb-2">
              Learning &amp; Credentials
            </p>
            <h2 className="text-4xl font-bold">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {certifications.map((item, index) => (
              <CertCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Certifications;