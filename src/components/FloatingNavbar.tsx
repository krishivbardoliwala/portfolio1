import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingNavbarProps {
  activeSection: string;
}

export default function FloatingNavbar({ activeSection }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 90; // Adjust for navbar height
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
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out flex justify-center px-4 ${
          isScrolled ? 'pt-2' : 'pt-6'
        }`}
      >
        <div
          id="navbar-container"
          className={`flex items-center justify-between glass-panel transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'w-full max-w-4xl py-2.5 px-6 rounded-full border-purple-500/30 shadow-lg shadow-purple-500/5 bg-[#0d0a21]/80'
              : 'w-full max-w-6xl py-4 px-8 rounded-2xl border-white/10 bg-[#0d0a21]/45'
          }`}
        >
          {/* Logo / Brand */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 group-hover:bg-purple-500/20 group-hover:border-purple-500/60 transition-all duration-300">
              <Terminal className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
            </div>
            <span className="font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-white text-base sm:text-lg">
              Krishiv.dev
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  id={`nav-link-${item.name.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full hover:text-white ${
                    isActive ? 'text-purple-400' : 'text-gray-400'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-purple-500/10 border border-purple-500/20 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              id="nav-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full overflow-hidden border border-purple-500/40 text-purple-200 transition-all duration-300 bg-purple-500/5 hover:bg-purple-500/20 hover:border-purple-500/80 group shadow-sm hover:shadow-purple-500/20"
            >
              Let's Connect
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-30 md:hidden glass-panel rounded-2xl p-6 border-purple-500/20 shadow-2xl bg-[#090615]/95 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    id={`mobile-nav-link-${item.name.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                        : 'border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-purple-400 rotate-90' : 'text-gray-500'}`} />
                  </a>
                );
              })}
              <div className="h-px bg-white/10 my-2" />
              <a
                id="mobile-nav-cta"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 shadow-md shadow-purple-900/40 border border-purple-500/30"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
