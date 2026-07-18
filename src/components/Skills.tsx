import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Blocks, Wrench, ShieldAlert } from 'lucide-react';

interface TechSkill {
  name: string;
  logoUrl: string;
  color: string;
}

export default function Skills() {
  const languages: TechSkill[] = [
    { name: "C", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "from-blue-600/20 to-blue-400/10" },
    { name: "C++", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "from-blue-700/20 to-indigo-500/10" },
    { name: "Java", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "from-orange-600/20 to-red-500/10" },
    { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-yellow-600/20 to-blue-500/10" },
    { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-500/20 to-yellow-300/10" },
    { name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500/20 to-red-500/10" },
    { name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-500/20 to-sky-500/10" }
  ];

  const frameworks: TechSkill[] = [
    { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-500/20 to-blue-500/10" },
    { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-600/20 to-emerald-500/10" },
    { name: "Express.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-slate-600/20 to-slate-400/10" },
    { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "from-teal-500/20 to-cyan-400/10" },
    { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "from-purple-600/20 to-indigo-500/10" },
    { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-500/20 to-emerald-600/10" },
    { name: "MySQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-blue-600/20 to-sky-500/10" }
  ];

  const tools: TechSkill[] = [
    { name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-600/20 to-red-500/10" },
    { name: "GitHub", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "from-gray-700/20 to-slate-500/10" },
    { name: "VS Code", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "from-blue-500/20 to-indigo-500/10" },
    { name: "Figma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "from-fuchsia-500/20 to-pink-500/10" },
    { name: "Postman", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "from-orange-500/20 to-amber-500/10" }
  ];

  // Helper to render the skill list
  const SkillGroup = ({ title, icon: Icon, skills }: { title: string, icon: any, skills: TechSkill[] }) => {
    // Keep track of loaded state for fallback icons
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    const handleImageError = (name: string) => {
      setImageErrors(prev => ({ ...prev, [name]: true }));
    };

    return (
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/15 flex flex-col h-full shadow-lg hover:border-purple-500/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-400">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-lg sm:text-xl text-white">{title}</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 flex-1">
          {skills.map((skill) => {
            const hasError = imageErrors[skill.name];
            return (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br ${skill.color} border border-white/5 hover:border-purple-500/20 transition-all duration-300`}
              >
                <div className="w-9 h-9 rounded-lg bg-black/30 flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                  {hasError || !skill.logoUrl ? (
                    <div className="text-xs font-bold font-mono text-purple-400">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  ) : (
                    <img
                      src={skill.logoUrl}
                      alt={`${skill.name} icon`}
                      className="w-full h-full object-contain"
                      onError={() => handleImageError(skill.name)}
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-200 truncate">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          A collection of languages, frameworks, and developer tools representing my tech stack.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <SkillGroup title="Languages" icon={Code2} skills={languages} />
        <SkillGroup title="Frameworks & DBs" icon={Blocks} skills={frameworks} />
        <SkillGroup title="Tools & Workflows" icon={Wrench} skills={tools} />
      </div>
    </section>
  );
}
