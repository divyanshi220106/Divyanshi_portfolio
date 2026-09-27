import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Skills = () => {
  // icon: devicon class name, or emoji as a fallback when no devicon exists
  const languages = [
    { name: "C", icon: "devicon-c-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "SQL", icon: "devicon-mysql-plain colored" },
  ];

  const frameworks = [
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "JWT", emoji: "🔐" },
  ];

  const tools = [
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "MS Excel", emoji: "📗" },
    { name: "Power BI", emoji: "📊" },
  ];

  const SkillCard = ({ item }) => (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center justify-center gap-3 bg-white/5 border border-violet-500/20 rounded-2xl p-6 hover:border-violet-400 transition-all"
    >
      {item.icon ? (
        <i className={`${item.icon} text-5xl`}></i>
      ) : (
        <span className="text-5xl leading-none">{item.emoji}</span>
      )}
      <span className="text-sm font-medium text-slate-200 text-center">
        {item.name}
      </span>
    </motion.div>
  );

  const Group = ({ title, items }) => (
    <div className="mb-12">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <SkillCard key={index} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <Reveal>
      <section id="skills" className="py-24 bg-violet-500/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-teal-400 mb-2">
              What I work with
            </p>

            <h2 className="text-4xl font-bold">Skills</h2>
          </div>

          <Group title="Languages" items={languages} />
          <Group title="Frameworks & Technologies" items={frameworks} />
          <Group title="Developer Tools" items={tools} />
        </div>
      </section>
    </Reveal>
  );
};

export default Skills;