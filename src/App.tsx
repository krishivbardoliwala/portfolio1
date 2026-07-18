import React, { useState, useEffect } from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -45% 0px', // Trigger activation near viewport center
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-gray-200 antialiased overflow-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Immersive Floating Mesh Background */}
      <BackgroundEffect />

      {/* Dynamic Shrinking Navbar */}
      <FloatingNavbar activeSection={activeSection} />

      {/* Main Content Modules */}
      <main id="main-content">
        <Hero />
        
        {/* Subtle separating blur bands */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <About />
        
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <Skills />
        
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <Experience />
        
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <Projects />
        
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <Achievements />
        
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
