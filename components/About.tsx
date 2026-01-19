'use client';

import { Terminal, Code2, Database, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'FRONTEND',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'BACKEND',
    icon: Database,
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'DEVOPS',
    icon: Terminal,
    items: ['Docker', 'Git', 'CI/CD', 'Linux']
  },
  {
    category: 'OTHER',
    icon: Cpu,
    items: ['AI/ML', 'Web3', 'REST APIs', 'GraphQL']
  }
];

export function About() {
  return (
    <section className="relative z-10 bg-transparent py-24 px-8 border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Terminal-style header */}
        <div className="mb-16">
          <div className="inline-block border-4 border-black bg-white p-6">
            <p className="font-mono text-sm text-black/60 mb-2">$ cat about.txt</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {'<ABOUT_ME />'}
            </h2>
            <div className="w-16 h-1 bg-black" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* About text */}
          <div className="space-y-6 font-mono text-lg">
            <p className="text-black/80 leading-relaxed">
              <span className="text-black font-bold">{'> '}</span>
              Hello! I'm a developer who loves building things that live on the internet. 
              I specialize in creating pixel-perfect, performant web applications.
            </p>
            <p className="text-black/80 leading-relaxed">
              <span className="text-black font-bold">{'> '}</span>
              When I'm not coding, you'll find me at hackathons, contributing to open source, 
              or exploring new technologies.
            </p>
            <div className="pt-4 space-y-2 text-black/70">
              <p>{'// Current focus:'}</p>
              <p className="pl-4">- Building scalable web apps</p>
              <p className="pl-4">- Learning system design</p>
              <p className="pl-4">- Contributing to OSS</p>
            </div>
          </div>

          {/* ASCII art or stats */}
          <div className="border-4 border-black bg-white p-8 font-mono">
            <pre className="text-xs md:text-sm text-black">
{`┌─────────────────────┐
│  DEVELOPER STATS    │
├─────────────────────┤
│                     │
│  Experience: 3+ yrs │
│  Projects: 50+      │
│  Coffee: ∞          │
│  Bugs Fixed: 1337   │
│  Commits: 10k+      │
│                     │
│  Status: [ONLINE]   │
│  ▮                  │
└─────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-black mb-8 font-mono">
            $ ls ./skills
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group border-4 border-black bg-white p-6 hover:bg-black hover:text-white transition-all duration-200 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-2 right-2">
                <skill.icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
              
              <h4 className="text-xl font-bold mb-4 font-mono">
                {skill.category}
              </h4>
              
              <ul className="space-y-2 font-mono text-sm">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Pixel corner decoration */}
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-current opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
