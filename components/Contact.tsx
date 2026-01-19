'use client';

import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { PixelDino } from './PixelDino';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    username: '@yourusername'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    username: '/in/yourname'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    username: '@yourusername'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your.email@example.com',
    username: 'your.email@example.com'
  }
];

export function Contact() {
  return (
    <section className="relative z-10 bg-transparent py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-mono text-sm text-black/60 mb-2">$ echo "Let's connect"</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black font-mono mb-4">
            {'<GET_IN_TOUCH />'}
          </h2>
          <p className="text-lg font-mono text-black/70 max-w-2xl mx-auto">
            Always interested in collaborating on interesting projects, hackathons, 
            or just geeking out about tech. Drop me a message!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-mono text-black mb-6">
              $ cat social.json
            </h3>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border-4 border-black bg-white hover:bg-black transition-all duration-200"
              >
                <social.icon className="w-6 h-6 text-black group-hover:text-white transition-colors" strokeWidth={2.5} />
                <div className="flex-1 font-mono">
                  <div className="text-sm text-black/60 group-hover:text-white/60 transition-colors">
                    {social.name}
                  </div>
                  <div className="text-black group-hover:text-white font-bold transition-colors">
                    {social.username}
                  </div>
                </div>
                <div className="w-2 h-2 bg-black group-hover:bg-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Contact Form or Info */}
          <div className="border-4 border-black bg-white p-8">
            <h3 className="text-2xl font-bold font-mono text-black mb-6">
              $ send_message
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-black/70 mb-2">
                  YOUR_NAME
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-black font-mono focus:outline-none focus:border-black focus:ring-4 focus:ring-black/10"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-black/70 mb-2">
                  YOUR_EMAIL
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-black font-mono focus:outline-none focus:border-black focus:ring-4 focus:ring-black/10"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-black/70 mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-black font-mono resize-none focus:outline-none focus:border-black focus:ring-4 focus:ring-black/10"
                  placeholder="Hey! Let's build something cool..."
                />
              </div>
              
              <button className="w-full px-6 py-3 bg-black text-white font-mono font-bold border-4 border-black hover:bg-white hover:text-black transition-colors duration-200">
                SEND_MESSAGE_→
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t-4 border-black pt-8 mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <PixelDino size="sm" />
              <div className="font-mono">
                <p className="text-sm text-black/60">Location</p>
                <div className="flex items-center gap-2 text-black font-bold">
                  <MapPin className="w-4 h-4" strokeWidth={2.5} />
                  <span>Your City, Country</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right font-mono text-sm text-black/60">
              <p>Available for freelance & full-time opportunities</p>
              <p className="mt-1">Status: <span className="text-black font-bold">OPEN_TO_WORK</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
