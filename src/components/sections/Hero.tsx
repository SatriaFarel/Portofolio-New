import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

export default function Hero() {
  const typingText = useTypewriter(['Junior Web Developer', 'React Enthusiast', 'UI/UX Designer'], 100, 2000);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-2 block">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Alex Dev</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-[40px]">
              I am a <span className="text-amber-400">{typingText}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              I build accessible, pixel-perfect, performant, and responsive web experiences. 
              Passionate about creating software that improves the lives of those around me.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/cv.pdf"
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 group"
              >
                Download CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-full border border-slate-600 hover:border-blue-400 hover:text-blue-400 text-slate-300 font-semibold transition-all flex items-center gap-2"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-6">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-600/20 hover:text-blue-400 text-slate-400 transition-all border border-slate-700/50 hover:border-blue-500/30"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          >
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-amber-500/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-blue-900/20">
              <img
                src="https://picsum.photos/seed/developer/800/800"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 -left-4 md:left-0 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
            >
              <span className="text-2xl">🚀</span>
              <span className="font-semibold text-sm">Fast Learner</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -right-4 md:right-0 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
            >
              <span className="text-2xl">💻</span>
              <span className="font-semibold text-sm">Clean Code</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
