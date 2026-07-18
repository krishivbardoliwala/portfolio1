import React from 'react';
import { Award, Trophy, Calendar, Sparkles, BookOpen, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Achievement } from '../types';

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "ach-1",
      title: "Elected President of Dev Infinity Club",
      date: "July 2025",
      description: "Elected as President of MSU Baroda's primary computer science development club to guide peer-to-peer programming pipelines and manage large student events.",
      category: "club"
    },
    {
      id: "ach-2",
      title: "Smart India Hackathon (SIH) Internal Nominee",
      date: "September 2024",
      description: "Co-engineered a digital offline-first face matching scanner platform, achieving the runner-up position in internal campus qualifying trials.",
      category: "competition"
    },
    {
      id: "ach-3",
      title: "Appointed to Code Vimarsh Core Web Team",
      date: "October 2024",
      description: "Inducted into the premier Web Team of Code Vimarsh, contributing responsive registration dashboards and animated socket panels for 300+ live regional contestants.",
      category: "club"
    },
    {
      id: "ach-4",
      title: "Commenced CS Engineering Degree @ MSU Baroda",
      date: "August 2023",
      description: "Admitted into the Bachelor of Engineering (Computer Science & Engineering) curriculum at The Maharaja Sayajirao University of Baroda based on excellent state merit ranking.",
      category: "academic"
    }
  ];

  const getIcon = (category: string) => {
    switch(category) {
      case 'competition':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'club':
        return <UserCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Achievements</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          A dated chronicle of key accomplishments, leadership milestones, and tech awards.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid Timeline Layout */}
      <div className="space-y-6">
        {achievements.map((ach, index) => {
          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel p-5 sm:p-6 rounded-2xl border-purple-500/10 hover:border-purple-500/35 hover:bg-purple-500/[0.03] transition-all duration-300 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
            >
              {/* Left Side: Category Icon + Details */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#030014]/60 border border-white/5 group-hover:border-purple-500/30 transition-colors flex items-center justify-center shrink-0">
                  {getIcon(ach.category)}
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-purple-300 transition-colors mb-1">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                    {ach.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Date badge */}
              <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 bg-purple-500/5 border border-purple-500/15 rounded-full text-[11px] font-mono font-medium text-purple-300 self-end sm:self-center">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>{ach.date}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Micro quote block to complete achievements section visually */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/5 font-mono text-[11px] text-gray-500">
          <Sparkles className="w-3.5 h-3.5 text-purple-500/40" />
          <span>MORE MILESTONES BEING COMPILED CONTINUOUSLY</span>
        </div>
      </div>
    </section>
  );
}
