import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Sparkles, FolderGit, MessageSquare } from 'lucide-react';

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Club President @ Dev Infinity",
    "Web Team @ Code Vimarsh",
    "CS Engineering Student"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Determine state transitions
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, targetSelector: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Local decorative floating mesh element for Hero accentuation */}
      <div className="absolute top-[20%] left-[25%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[25%] w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center">
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-semibold font-mono mb-6 shadow-sm shadow-purple-500/5 hover:border-purple-500/50 transition-colors duration-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>Available for Internships & Projects</span>
        </motion.div>

        {/* Large Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white"
        >
          <span className="block text-gray-200 text-3xl sm:text-4xl md:text-5xl font-medium tracking-normal mb-1 font-sans">
            Hey, I'm
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 drop-shadow-sm">
            Krishiv Bardoliwala
          </span>
        </motion.h1>

        {/* Typing Cycle Animation Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center font-mono text-lg sm:text-2xl md:text-3xl text-purple-300 mb-8 font-medium"
        >
          <span className="text-gray-400 mr-2">&gt;</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
            {currentText}
          </span>
          <span className="w-1.5 h-6 sm:h-8 ml-1 bg-purple-400 animate-[ping_1s_infinite] inline-block" />
        </motion.div>

        {/* Brief Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10 px-4"
        >
          Passionate second-year Computer Science Engineering student at <span className="text-purple-300 font-semibold">MSU Baroda</span>. 
          Leader of Dev Infinity, builder of full-stack ecosystems, and developer focused on creating immersive glassmorphic user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md px-4"
        >
          <button
            id="hero-cta-projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-purple-500/20 group border border-purple-400/20 active:scale-[0.98] cursor-pointer"
          >
            <FolderGit className="w-5 h-5 text-purple-200 group-hover:scale-110 transition-transform" />
            View Projects
            <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button
            id="hero-cta-contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold glass-panel border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-white transition-all duration-300 hover:bg-purple-500/5 active:scale-[0.98] group cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            Get In Touch
          </button>
        </motion.div>

        {/* Floating tech stack micro-badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex flex-wrap gap-x-6 gap-y-3 justify-center items-center text-xs font-mono text-gray-500"
        >
          <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
            <Code className="w-4 h-4" /> MERN STACK
          </span>
          <span className="text-gray-700">•</span>
          <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
            C++ / JAVA
          </span>
          <span className="text-gray-700">•</span>
          <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
            EXPRESS / MONGO
          </span>
          <span className="text-gray-700">•</span>
          <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
            GLASSMORPHISM UI
          </span>
        </motion.div>
      </div>
    </section>
  );
}
