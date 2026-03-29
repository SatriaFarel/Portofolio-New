import { useEffect } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import Gallery from './components/sections/Gallery';
import Socials from './components/sections/Socials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  /**
   * Scroll progress bar (top indicator)
   */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /**
   * Initialize Google Translate (client-side only)
   */
  useEffect(() => {
    // Hindari inject script berulang
    if (window.google?.translate) return;

    // Register global init function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,id',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Inject script Google Translate
    const script = document.createElement('script');
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      
      {/* ================= Scroll Progress ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= Navbar ================= */}
      <Navbar />

      {/* ================= Main Content ================= */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Gallery />
        <Socials />
        <Contact />
      </main>

      {/* ================= Footer ================= */}
      <Footer />

      {/* ================= Language Switch (Google Translate) ================= */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl px-3 py-2 shadow-lg hover:border-blue-500/40 transition">
          
          {/* Label */}
          <p className="text-[10px] text-slate-400 text-center mb-1">
            Language
          </p>

          {/* Google Translate container */}
          <div
            id="google_translate_element"
            className="scale-90 origin-center"
          />
        </div>
      </div>

      {/* ================= Global Style Override ================= */}
      <style jsx global>{`
        /* Dropdown styling */
        #google_translate_element select {
          background: #0f172a;
          color: #e2e8f0;
          border: 1px solid #334155;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 12px;
          outline: none;
        }

        #google_translate_element select:hover {
          border-color: #3b82f6;
        }

        /* Hide Google branding */
        .goog-logo-link,
        .goog-te-gadget span {
          display: none !important;
        }

        .goog-te-gadget {
          font-size: 0 !important;
        }

        /* Prevent layout shift */
        body {
          top: 0 !important;
        }

        .goog-te-banner-frame {
          display: none !important;
        }
      `}</style>
    </div>
  );
}