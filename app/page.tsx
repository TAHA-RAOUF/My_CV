import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { PixelBackground } from '@/components/PixelBackground';
import { Intro } from '@/components/Intro';

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <Intro />
      <div className="main-content">
        <PixelBackground />
        <main>
        <Navigation />
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
