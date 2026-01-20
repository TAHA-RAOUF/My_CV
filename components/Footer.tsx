'use client';

import { Heart, Terminal, Github } from 'lucide-react';
import { PixelCactus } from './PixelCactus';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black text-white px-8 py-14">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <div className="flex items-center gap-4 font-mono">
            <Terminal className="w-6 h-6 text-white" strokeWidth={2.2} />
            <div>
              <p className="text-lg font-bold tracking-widest">
                TAHA_RAOUF.EXE
              </p>
              <p className="text-sm text-white/60">
                Software Engineer · Full-Stack Systems
              </p>
            </div>
          </div>

          {/* PIXEL DECORATION */}
          <div className="hidden md:flex items-end gap-4">
            {[8, 12, 16].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-white/30"
                style={{ height: `${h}px` }}
              />
            ))}
            <PixelCactus size="sm" />
            {[16, 12, 8].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-white/30"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>

          {/* META */}
          <div className="font-mono text-center md:text-right text-sm">
            <p className="text-white/60">© {year} — All rights reserved</p>
            <p className="mt-1 flex items-center justify-center md:justify-end gap-2">
              <span className="text-white/60">Built with</span>
              <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
              <span className="text-white/60">and</span>
              <span className="font-bold tracking-wide">COFFEE</span>
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 pt-8">

          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs tracking-widest text-white/60">
            <a href="#" className="hover:text-white transition">PRIVACY</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">TERMS</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">SITEMAP</a>
            <span>•</span>
            <a
              href="https://github.com/TAHA-RAOUF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Github className="w-4 h-4" />
              SOURCE
            </a>
          </div>

          {/* TERMINAL OUTRO */}
          <div className="mt-8 text-center font-mono text-sm text-white/40">
            <p>$ exit</p>
            <p className="mt-1">
              Process completed. Thanks for visiting{' '}
              <span className="animate-pulse">▮</span>
            </p>
          </div>
        </div>
      </div>

      {/* PIXEL NOISE */}
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/10" />
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/10" />
      <div className="absolute top-4 left-8 w-2 h-2 bg-white/10" />
      <div className="absolute top-4 right-8 w-2 h-2 bg-white/10" />
    </footer>
  );
}
