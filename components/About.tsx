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
    items: ['Laravel', 'PHP', 'Node.js', 'MySQL']
  },
  {
    category: 'DEVOPS',
    icon: Terminal,
    items: ['Docker', 'Git', 'Linux', 'Bash']
  },
  {
    category: 'TOOLS & OTHER',
    icon: Cpu,
    items: ['C', 'C++', 'REST APIs', 'Blade']
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
              Hi, I'm Taha Raouf! A passionate full-stack web developer specializing in 
              Laravel and React. I build dynamic and scalable web applications that bring 
              ideas to life.
            </p>
            <p className="text-black/80 leading-relaxed">
              <span className="text-black font-bold">{'> '}</span>
              Currently studying at 1337 Rabat (42 Network), I'm constantly learning and 
              pushing my limits. I love collaborating on web and full-stack projects that 
              make a real impact.
            </p>
            <div className="pt-4 space-y-2 text-black/70">
              <p>{'// Current focus:'}</p>
              <p className="pl-4">- Software development & coding</p>
              <p className="pl-4">- Building full-stack applications</p>
              <p className="pl-4">- Web development & collaboration</p>
            </div>
          </div>

          {/* ASCII art or stats */}
          <div className="space-y-6">
            <div className="border-4 border-black bg-white p-8 font-mono">
              <pre className="text-xs md:text-sm text-black">
{`┌─────────────────────┐
│  DEVELOPER STATS    │
├─────────────────────┤
│                     │
│  School: 1337 Rabat │
│  Location: Morocco  │
│  Projects: 18+      │
│  Focus: Full-Stack  │
│  Coffee: ∞          │
│                     │
│  Status: [ONLINE]   │
│  ▮                  │
└─────────────────────┘`}
              </pre>
            </div>

            {/* CV Download Button */}
            <a
              href="/cv_job.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full px-6 py-4 bg-black text-white font-mono text-center border-4 border-black hover:bg-white hover:text-black transition-all duration-200"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>📄</span>
                <span>DOWNLOAD CV</span>
              </span>
              <div className="absolute inset-0 border-2 border-black translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200" />
            </a>
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
