'use client';

import { Heart, Terminal } from 'lucide-react';
import { PixelCactus } from './PixelCactus';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side */}
          <div className="flex items-center gap-4 font-mono">
            <Terminal className="w-6 h-6" strokeWidth={2.5} />
            <div>
              <p className="font-bold text-lg">DEVELOPER.EXE</p>
              <p className="text-sm text-white/60">Building the future, one commit at a time</p>
            </div>
          </div>
          
          {/* Center - Decorative elements */}
          <div className="hidden md:flex items-end gap-4">
            <div className="w-1 h-8 bg-white/20" />
            <div className="w-1 h-12 bg-white/30" />
            <div className="w-1 h-16 bg-white/40" />
            <PixelCactus size="sm" />
            <div className="w-1 h-16 bg-white/40" />
            <div className="w-1 h-12 bg-white/30" />
            <div className="w-1 h-8 bg-white/20" />
          </div>
          
          {/* Right side */}
          <div className="font-mono text-center md:text-right">
            <p className="text-sm text-white/60 mb-1">
              © {currentYear} All rights reserved
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-end text-sm">
              <span className="text-white/60">Made with</span>
              <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
              <span className="text-white/60">and</span>
              <span className="font-bold">COFFEE</span>
            </p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t-2 border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-white/60">
            <a href="#" className="hover:text-white transition-colors">PRIVACY_POLICY</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">TERMS_OF_USE</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">SITEMAP</a>
            <span>•</span>
            <a href="https://github.com" className="hover:text-white transition-colors">VIEW_SOURCE</a>
          </div>
          
          {/* Terminal prompt */}
          <div className="mt-6 text-center font-mono text-sm text-white/40">
            <p>$ exit</p>
            <p className="mt-1">Process completed. Thank you for visiting! <span className="animate-pulse">▮</span></p>
          </div>
        </div>
      </div>
      
      {/* Pixel decorations */}
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/10" />
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/10" />
      <div className="absolute top-4 left-8 w-3 h-3 bg-white/10" />
      <div className="absolute top-4 right-8 w-3 h-3 bg-white/10" />
    </footer>
  );
}
