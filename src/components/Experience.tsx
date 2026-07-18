import React from 'react';
import { Briefcase, Calendar, MapPin, Users, Globe2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      id: "exp-1",
      role: "Club President",
      organization: "Dev Infinity Club",
      subTitle: "The Maharaja Sayajirao University of Baroda",
      duration: "Aug 2025 - Present",
      location: "Vadodara, Gujarat",
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      description: [
        "Elected as President to lead a community of 250+ aspiring software developers, orchestrating workshops on Web 2.0/3.0 development, C++, Java, and algorithms.",
        "Curated standard hands-on programming curricula, mentoring 1st and 2nd-year computer science students to bridge the gap between academic theory and active software engineering.",
        "Organized large-scale university hackathons and internal code-submission contests, coordinating speaker panels, platform integrations, and grading pipelines."
      ],
      tags: ["Leadership", "Community Building", "Technical Mentoring", "Event Coordination"]
    },
    {
      id: "exp-2",
      role: "Web Team Member",
      organization: "Code Vimarsh Club",
      subTitle: "The Maharaja Sayajirao University of Baroda",
      duration: "Oct 2024 - Present",
      location: "Vadodara, Gujarat",
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
      description: [
        "Co-developed the main event registration portals and high-traffic interactive leaderboards for 'Code Vimarsh' - the flagship inter-college programming contest.",
        "Collaborated with UI/UX designers to implement fully responsive glassmorphic assets, lowering registration bounce rates by 25% across mobile screen profiles.",
        "Implemented secure front-end form controls and API integration paths with real-time feedback elements for hundreds of live competitors."
      ],
      tags: ["Frontend Engineering", "UI/UX Integration", "API Integration", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Experience</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
          Academic club roles and community leadership highlights at MSU Baroda.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline Thread */}
      <div className="relative border-l-2 border-purple-500/20 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Bullet Ring */}
              <div className={`absolute left-[-45px] sm:left-[-61px] top-1 w-8 h-8 rounded-full border flex items-center justify-center bg-[#0d0a21] shadow-md shadow-purple-500/10 ${exp.iconColor}`}>
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Glassmorphic Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/15 hover:border-purple-500/35 hover:bg-purple-500/[0.04] transition-all duration-300 shadow-lg relative group overflow-hidden">
                {/* Visual accent background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm">
                      <span className="font-semibold text-purple-400">{exp.organization}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400 font-mono text-xs">{exp.subTitle}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 pl-1 sm:pl-0">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bulleted Points */}
                <ul className="space-y-3 mb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                  {exp.description.map((point, pIndex) => (
                    <li key={pIndex} className="flex gap-2.5 items-start">
                      <span className="text-purple-400 mt-1.5 text-sm shrink-0">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags block */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#030014]/40 border border-white/5 text-gray-400 hover:text-purple-300 hover:border-purple-500/20 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
