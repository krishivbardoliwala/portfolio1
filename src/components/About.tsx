import React from 'react';
import { MapPin, GraduationCap, Laptop, Cpu, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { icon: GraduationCap, label: "Education", value: "BE-2 CSE student", detail: "MSU Baroda" },
    { icon: Laptop, label: "Club Roles", value: "President & Web Lead", detail: "Dev Infinity & Code Vimarsh" },
    { icon: Cpu, label: "Core Focus", value: "Full Stack Dev", detail: "React, Node.js, Express" },
    { icon: MapPin, label: "Location", value: "Vadodara, Gujarat", detail: "India" }
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Avatar / Interactive Passport Card (5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/20 relative overflow-hidden flex flex-col items-center text-center h-full justify-between shadow-lg shadow-purple-500/5 group"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Corner visual decorations */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-purple-400/40 tracking-widest uppercase">ID: KB-CS-2026</div>

            {/* Avatar block with glow */}
            <div className="relative w-40 h-40 rounded-full mb-6 p-1 bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-xl shadow-purple-500/10">
              <div className="w-full h-full rounded-full bg-[#0d0a21] flex items-center justify-center overflow-hidden relative">
                {/* Visual tech avatar */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 animate-pulse-glow" />
                <div className="font-display font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-indigo-200">
                  KB
                </div>
                {/* Scanning line animation */}
                <div className="absolute left-0 right-0 h-0.5 bg-purple-400/50 shadow-md shadow-purple-400 animate-[bounce_4s_infinite]" />
              </div>
            </div>

            {/* Student metadata info */}
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-purple-300 transition-colors">
                Krishiv Bardoliwala
              </h3>
              <p className="font-mono text-xs text-purple-400 font-semibold mb-4 tracking-wider uppercase">
                Undergrad CS Engineer
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                "Code is the canvas where imagination meets logic. I build full-stack interfaces with responsive feedback loops."
              </p>
            </div>

            {/* Mini metadata list */}
            <div className="w-full text-left space-y-2.5 pt-4 border-t border-white/5 font-mono text-xs text-gray-400">
              <div className="flex justify-between">
                <span>UNIVERSITY:</span>
                <span className="text-purple-300 font-semibold">MSU Baroda</span>
              </div>
              <div className="flex justify-between">
                <span>YEAR:</span>
                <span className="text-purple-300 font-semibold">BE-2 (Sophomore)</span>
              </div>
              <div className="flex justify-between">
                <span>SPECIALIZATION:</span>
                <span className="text-purple-300 font-semibold">Computer Science</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Introduction & Stats (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/15 flex-1 shadow-md">
            <h3 className="font-display font-semibold text-2xl text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-purple-400" />
              The Journey
            </h3>
            
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hello! I am a passionate, self-driven Computer Science Engineering student currently in my second year at 
                <span className="text-purple-300 font-semibold"> The Maharaja Sayajirao University of Baroda</span>. I dedicate myself to exploring the infinite layers of modern full-stack web architectures and algorithm optimization.
              </p>
              <p>
                My deep curiosity about development led me to build a strong foundation in <span className="text-purple-300 font-semibold">C, C++, Java, and modern JavaScript</span> ecosystems. 
                As the <span className="text-indigo-300 font-semibold">President of Dev Infinity Club</span> and active member of the <span className="text-indigo-300 font-semibold">Code Vimarsh Web Team</span>, 
                I mentor peers, coordinate developer events, and actively maintain production-level student hub resources.
              </p>
              <p>
                Whether it's deploying Express APIs, configuring clean MongoDB schemas, or crafting glassmorphic user interfaces like this portfolio, I love building clean code bases that solve real-world student and community problems.
              </p>
            </div>
          </div>

          {/* Stats Bento Box Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="glass-panel p-4 rounded-2xl border-purple-500/10 flex items-center gap-3.5 group hover:border-purple-500/35 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-medium text-gray-500 tracking-wider uppercase">{stat.label}</p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{stat.value}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{stat.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
