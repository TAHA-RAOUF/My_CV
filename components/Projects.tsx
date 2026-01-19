'use client';

import { ExternalLink, Github } from 'lucide-react';
import { PixelCactus } from './PixelCactus';

const projects = [
  {
    title: 'HAND MOTION STUDIO',
    description: 'Interactive 3D particle system controlled by hand gestures using MediaPipe and Three.js  Real time hand tracking with 4 dynamic particle modes',
    tech: ['Next.js', 'Three.js', 'MediaPipe', 'TypeScript'],
    github: 'https://github.com/TAHA-RAOUF/Hand-Motion',
    demo: 'https://hand-motion-nine.vercel.app/'
  },
  {
    title: 'CHAIR ECOMMERCE',
    description: 'Full featured Laravel e commerce platform for a chair store  Seamless shopping experience with user friendly interface and secure payment options',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    github: 'https://github.com/TAHA-RAOUF/App_ecommerce',
    demo: '#'
  },
  {
    title: 'SCHOOL NOTES SYSTEM',
    description: 'Comprehensive school management application for tracking student grades and academic performance  Built with Laravel and Blade templates',
    tech: ['Laravel', 'PHP', 'Blade', 'MySQL'],
    github: 'https://github.com/TAHA-RAOUF/NOTES_APP',
    demo: '#'
  },
  {
    title: 'TAQA PROJECT',
    description: 'Full stack TypeScript application with Supabase backend  Features advanced database migrations and calendar integration',
    tech: ['TypeScript', 'React', 'Supabase', 'Vite'],
    github: 'https://github.com/TAHA-RAOUF/taqa-project',
    demo: '#'
  },
  {
    title: 'PORTFOLIO WEBSITE',
    description: 'Personal developer portfolio with retro pixel art aesthetics  Built with Next.js and features interactive animations',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer'],
    github: 'https://github.com/TAHA-RAOUF',
    demo: 'https://taha-raouf.netlify.app/'
  },
  {
    title: 'MORE ON GITHUB',
    description: 'Explore 18+ repositories including web hackathons  C projects  and full stack applications  Active contributions and open source work',
    tech: ['React', 'Laravel', 'C', 'TypeScript'],
    github: 'https://github.com/TAHA-RAOUF?tab=repositories',
    demo: '#'
  }
];

export function Projects() {
  return (
    <section className="relative z-10 bg-transparent py-24 px-8 border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between flex-wrap gap-8">
          <div>
            <p className="font-mono text-lg text-black/60 mb-2" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.08em', wordSpacing: '0.2em' }}>$ ls ./projects</p>
            <h2 className="text-5xl md:text-6xl font-bold text-black font-mono" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.12em', wordSpacing: '0.25em' }}>
              {'<PROJECTS />'}
            </h2>
          </div>
          
          {/* Decorative cactus */}
          <div className="hidden md:block">
            <PixelCactus size="lg" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative border-4 border-black bg-white hover:bg-black transition-all duration-300"
            >
              {/* Project card */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold font-mono text-black group-hover:text-white transition-colors" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.08em', wordSpacing: '0.2em' }}>
                    {project.title}
                  </h3>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      className="p-1 hover:scale-110 transition-transform"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-1 hover:scale-110 transition-transform"
                      aria-label="Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="font-mono text-base text-black/70 group-hover:text-white/80 transition-colors leading-relaxed min-h-[80px]" style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.06em', wordSpacing: '0.18em', lineHeight: '1.7' }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border-2 border-black text-sm font-mono bg-white text-black group-hover:bg-black group-hover:text-white group-hover:border-white transition-all"
                      style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.06em', wordSpacing: '0.15em' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Pixel decoration */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-black group-hover:bg-white transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-black group-hover:bg-white transition-colors" />
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/TAHA-RAOUF?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-4 border-black bg-white text-black font-mono text-2xl hover:bg-black hover:text-white transition-colors duration-200"
            style={{ fontFamily: 'ArcadeClassic, monospace', letterSpacing: '0.1em', wordSpacing: '0.2em' }}
          >
            <span>VIEW ALL ON GITHUB</span>
            <Github className="w-5 h-5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
