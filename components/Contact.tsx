'use client';

import { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { PixelDino } from './PixelDino';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/TAHA-RAOUF',
    username: '@TAHA-RAOUF'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/taha-raouf-9076b9253/',
    username: '/taha-raouf'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/TahaRaouf99',
    username: '@TahaRaouf99'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:taharaouf1123@gmail.com',
    username: 'taharaouf1123@gmail.com'
  }
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'service_gzk7krm', 
        'template_xxyuruu', 
        formRef.current!,
        'j05SWKnd-pWCXUuwB' 
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        formRef.current?.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Contact Form */}
          <div className="border-4 border-black bg-white p-8">
            <h3 className="text-2xl font-bold font-mono text-black mb-6">
              $ send_message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-black/70 mb-2">
                  YOUR_NAME
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
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
                  name="user_email"
                  required
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
                  name="message"
                  required
                  className="w-full px-4 py-3 border-2 border-black font-mono resize-none focus:outline-none focus:border-black focus:ring-4 focus:ring-black/10"
                  placeholder="Hey! Let's build something cool..."
                />
              </div>
              
              {submitStatus.type && (
                <div className={`p-3 border-2 font-mono text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border-green-500 text-green-700' 
                    : 'bg-red-50 border-red-500 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-black text-white font-mono font-bold border-4 border-black hover:bg-white hover:text-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SEND_MESSAGE_→'}
              </button>
            </form>
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
                  <span>Casablanca , Morocco</span>
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
