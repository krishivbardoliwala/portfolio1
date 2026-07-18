import React, { useEffect, useState } from 'react';

export default function BackgroundEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle interactive glow that follows the mouse cursor slightly delayed or directly
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 40 - 20,
        y: (e.clientY / window.innerHeight) * 40 - 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="background-glow-container" className="fixed inset-0 -z-50 overflow-hidden bg-[#030014] pointer-events-none">
      {/* Deep dark mesh gradient backing */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,10,33,0.8),rgba(3,0,20,1))]" />
      
      {/* Glowing Blob 1 - Purple/Lavender (Top Left) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-float-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
        }}
      />

      {/* Glowing Blob 2 - Indigo/Deep Violet (Bottom Right) */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-indigo-600/15 blur-[140px] animate-float-reverse"
        style={{
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
        }}
      />

      {/* Glowing Blob 3 - Electric Blue/Cyan (Middle Left-ish) */}
      <div 
        className="absolute top-[30%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-blue-500/10 blur-[130px] animate-pulse-glow"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
        }}
      />

      {/* Glowing Blob 4 - Dark Magenta (Middle Right) */}
      <div 
        className="absolute top-[50%] right-[15%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-fuchsia-600/10 blur-[120px] animate-float-slow"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
        }}
      />

      {/* Subtle Starfield or Grid lines Overlay for developer texture */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" 
      />
    </div>
  );
}
