import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="py-12 border-t border-white/5 relative overflow-hidden bg-[#050218]/80">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[20vh] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left: Brand name */}
        <div className="flex items-center gap-2 group">
          <div className="p-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-display font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-200 text-sm">
            Krishiv Bardoliwala
          </span>
        </div>

        {/* Center: Message */}
        <div className="text-center font-mono text-[10px] sm:text-xs text-gray-500 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-purple-500/40" />
          <span>Crafted with React, Tailwind CSS, & Motion</span>
        </div>

        {/* Right: Copyright */}
        <div className="font-mono text-[10px] sm:text-xs text-gray-500">
          &copy; {currentYear} KRISHIV_BARDOLIWALA. ALL_RIGHTS_RESERVED.
        </div>
      </div>
    </footer>
  );
}
