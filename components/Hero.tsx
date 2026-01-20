'use client';

import { PixelDino } from './PixelDino';
import { PixelCloud } from './PixelCloud';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center bg-transparent overflow-hidden border-b-4 border-black dark:border-white">
      {/* Pixel Clouds */}
      <div className="absolute top-20 left-4 md:left-10 opacity-40">
        <PixelCloud size="md" animate />
      </div>
      <div className="absolute top-32 right-4 md:right-20 opacity-30">
        <PixelCloud size="lg" animate />
      </div>
      <div className="absolute top-40 left-1/3 opacity-25 hidden sm:block">
        <PixelCloud size="sm" animate />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-20 text-center">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-black" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.15em', wordSpacing: '0.3em' }}>
            {'> DEVELOPER_'}
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black/80">
            <span className="animate-pulse">▮</span>
            <p className="font-mono" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.1em', wordSpacing: '0.25em' }}>
              Building the future  application by application
            </p>
          </div>
          
          <div className="pt-4 sm:pt-8 space-y-3 sm:space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-black/70">
            <p style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.1em', wordSpacing: '0.25em' }}>
              $ whoami
            </p>
            <p className="text-black max-w-2xl mx-auto px-4" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.08em', wordSpacing: '0.2em', lineHeight: '1.8' }}>
  Software Engineer crafting full stack products  competing in hackathons  and building in the open
</p>

          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <a 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-mono text-lg sm:text-xl md:text-2xl border-4 border-black hover:bg-white hover:text-black transition-colors duration-200" 
            style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.1em', wordSpacing: '0.2em' }}
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <div className="absolute inset-0 border-2 border-black translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200" />
          </a>
          
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-mono text-lg sm:text-xl md:text-2xl border-4 border-black hover:bg-black hover:text-white transition-colors duration-200" 
            style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.1em', wordSpacing: '0.2em' }}
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 border-2 border-black translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200" />
          </a>
        </div>
      </div>
      
      {/* Ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black dark:bg-white" />
      <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-black dark:bg-white opacity-50" />
    </section>
  );
}
