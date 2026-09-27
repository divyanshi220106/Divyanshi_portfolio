import Reveal from "./Reveal";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Projects Built", color: "text-sky-400" },
  { value: "1", label: "National Finalist", color: "text-teal-400" },
  { value: "97.64%", label: "Best Percentile", color: "text-cyan-400" },
  { value: "7.93", label: "B.Tech CGPA", color: "text-amber-400" },
];

const achievements = [
  {
    icon: "🌟",
    border: "border-l-violet-400",
    iconBg: "bg-violet-500/15 text-violet-300",
    title: "Google Gemini Student Ambassador",
    summary: "Selected as a Student Ambassador for Google Gemini.",
    detail:
      "Recognized by Google for representing the Gemini platform on campus — supporting AI learning, workshops and student outreach, 2026.",
    tags: ["Gemini", "Ambassador", "Google AI"],
    tagColor: "border-violet-500/40 text-violet-300",
  },
  {
    icon: "🏆",
    border: "border-l-teal-400",
    iconBg: "bg-teal-500/15 text-teal-300",
    title: "Reliance Foundation Scholar",
    summary: "Selected among the Top 5000 Undergraduate Scholars.",
    detail:
      "Chosen nationwide under the Reliance Foundation Undergraduate Scholarship Program, recognizing academic merit and potential.",
    tags: ["Scholarship", "Top 5000", "National"],
    tagColor: "border-teal-500/40 text-teal-300",
  },
  {
    icon: "📈",
    border: "border-l-sky-400",
    iconBg: "bg-sky-500/15 text-sky-300",
    title: "Naukri Campus Young Turks 2025",
    summary: "Secured Top 3% (97.64 percentile).",
    detail:
      "Ranked in the top 3% among 5,00,000+ participants nationwide in Naukri's Campus Young Turks assessment, 2025.",
    tags: ["Top 3%", "97.64 %ile", "5L+ Participants"],
    tagColor: "border-sky-500/40 text-sky-300",
  },
  {
    icon: "📊",
    border: "border-l-amber-400",
    iconBg: "bg-amber-500/15 text-amber-300",
    title: "Genesis 2.0 — Data Analytics Finalist",
    summary: "Top 15 Teams at the Grand Finale.",
    detail:
      "Selected among the Top 15 Teams nationwide for the Genesis 2.0 National Data Analytics Event Grand Finale, hosted at IMI Bhubaneswar.",
    tags: ["Data Analytics", "Top 15 Teams", "IMI Bhubaneswar"],
    tagColor: "border-amber-500/40 text-amber-300",
  },
];

const AchievementCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
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

      <h3 className="font-semibold text-white mb-2 leading-snug">
        {item.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {item.summary}
      </p>

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

      <h3 className="font-semibold text-white mb-2 leading-snug">
        {item.title}
      </h3>

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

const Achievements = () => {
  return (
    <Reveal>
      <section id="achievements" className="py-24 bg-violet-500/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-teal-400 mb-2">
              Milestones
            </p>
            <h2 className="text-4xl font-bold">Achievements</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/5 border border-violet-500/20 rounded-2xl py-6 text-center"
              >
                <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
            {achievements.map((item, index) => (
              <AchievementCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Achievements;