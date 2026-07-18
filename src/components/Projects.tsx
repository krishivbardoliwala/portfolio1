import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "proj-1",
      title: "Infinity Dev-Portal",
      description: "A collaborative student learning hub and portal engineered for the Dev Infinity Club. It supports real-time event schedules, interactive peer forums, resource directories, and live administration controls.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/KrishivBardoliwala",
      liveUrl: "https://ais-pre-fnz6t22rqumx3l5be57vvs-552747479376.asia-east1.run.app", // Fallback to Dev App URL for a real link experience
      featured: true,
      category: "web"
    },
    {
      id: "proj-2",
      title: "Vimarsh Code Arena",
      description: "A real-time practice dashboard and playground created for Code Vimarsh competitors, featuring dynamic competitive programming problem listings, instant custom styling, and live socket scoreboards.",
      techStack: ["React", "Motion", "Tailwind CSS", "Socket.io", "Figma"],
      githubUrl: "https://github.com/KrishivBardoliwala",
      liveUrl: "https://ais-pre-fnz6t22rqumx3l5be57vvs-552747479376.asia-east1.run.app",
      featured: true,
      category: "app"
    },
    {
      id: "proj-3",
      title: "MSU Academics Hub",
      description: "A secure repository of reference papers, syllabus files, and student study templates for Computer Science undergraduates at MSU Baroda, supporting robust multi-param query matching and download pipelines.",
      techStack: ["Node.js", "Express.js", "MySQL", "Tailwind CSS", "Bootstrap"],
      githubUrl: "https://github.com/KrishivBardoliwala",
      featured: false,
      category: "web"
    },
    {
      id: "proj-4",
      title: "Glass Portfolio Generator",
      description: "An open-source interactive toolkit enabling engineering students to compile custom portfolios using simple JSON profiles, compiling deep purple glassmorphic styles automatically.",
      techStack: ["TypeScript", "React", "Vite", "Motion", "Git"],
      githubUrl: "https://github.com/KrishivBardoliwala",
      liveUrl: "https://ais-pre-fnz6t22rqumx3l5be57vvs-552747479376.asia-east1.run.app",
      featured: false,
      category: "other"
    }
  ];

  const categories = [
    { value: "all", label: "All Work" },
    { value: "web", label: "Full Stack" },
    { value: "app", label: "UI & Interactive" },
    { value: "other", label: "Tooling" }
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          A showcase of real-world responsive applications built with modern engineering workflows.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Categories Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <span className="text-xs font-mono text-gray-500 flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5" /> FILTER:
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              id={`project-filter-${cat.value}`}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 text-xs font-mono font-medium rounded-full border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-purple-500/15 text-purple-300 border-purple-500/45 shadow-sm shadow-purple-500/10"
                  : "bg-[#0d0a21]/45 text-gray-400 border-white/5 hover:text-white hover:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Projects with Animation */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/15 hover:border-purple-500/35 hover:bg-purple-500/[0.04] transition-all duration-300 shadow-md flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Corner tech visual decoration */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-2xl group-hover:from-purple-500/10 pointer-events-none transition-colors" />

              <div>
                {/* Top icon and badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  {project.featured && (
                    <span className="px-2.5 py-0.5 text-[9px] font-mono font-semibold rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 uppercase tracking-widest">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/5 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>SOURCE_CODE</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE_DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
