import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import Gallery from './components/sections/Gallery';
import Socials from './components/sections/Socials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Gallery />
        <Socials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
