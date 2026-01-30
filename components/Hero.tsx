'use client';

import { PixelDino } from './PixelDino';
import { PixelCloud } from './PixelCloud';
import Image from 'next/image';

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative border effect */}
              <div className="absolute inset-0 border-4 border-black translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              <div className="relative border-4 border-black bg-white overflow-hidden">
                <Image
                  src="/taha.png"
                  alt="Taha Raouf - Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                {/* Pixel corner decorations */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-black" />
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-black" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 border-4 border-black font-mono text-sm whitespace-nowrap">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                AVAILABLE FOR WORK
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block border-4 border-black bg-white px-4 py-2">
              <p className="font-mono text-sm text-black/60">$ echo "Hello, World!"</p>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.15em', wordSpacing: '0.3em' }}>
              TAHA RAOUF
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl text-black">
              <span className="animate-pulse">▮</span>
              <p className="font-mono font-bold" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.1em', wordSpacing: '0.25em' }}>
                FULL-STACK DEVELOPER
              </p>
            </div>
            
            <div className="pt-4 space-y-3 text-lg sm:text-xl font-mono text-black/80">
              <p className="leading-relaxed max-w-xl mx-auto lg:mx-0">
                Software Engineer crafting full-stack products, competing in hackathons, 
                and building in the open. Passionate about creating scalable web applications.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <div className="border-2 border-black bg-white px-4 py-2 text-sm font-bold">REACT</div>
                <div className="border-2 border-black bg-white px-4 py-2 text-sm font-bold">LARAVEL</div>
                <div className="border-2 border-black bg-white px-4 py-2 text-sm font-bold">NEXT.JS</div>
                <div className="border-2 border-black bg-white px-4 py-2 text-sm font-bold">1337 RABAT</div>
              </div>
            </div>
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
