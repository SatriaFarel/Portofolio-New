import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Instagram } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

const socials = [
  {
    icon: Github,
    link: "https://github.com/SatriaFarel",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com/in/SatriaFarel",
  },
  {
    icon: Instagram,
    link: "https://instagram.com/satriafarel30", // fix
  },
];

export default function Hero() {
  const typingText = useTypewriter(
    ['Junior Web Developer', 'Front-End Developer', 'Back-End Developer'], // fix typo
    100,
    2000
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-2 block">
              Portfolio
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Satria Farel</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-[32px]">
              I am a <span className="text-amber-400">{typingText}</span>
              <span className="animate-blink">|</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              A vocational high school student specializing in software engineering, 
              with a strong interest in web development. Experienced in building 
              responsive and user-friendly web applications using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/cv.pdf"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium 
                hover:opacity-90 transition flex items-center gap-2"
              >
                Download CV <Download size={18} />
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-slate-600 hover:border-blue-400 hover:text-blue-400 
                text-slate-300 font-medium transition flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex gap-4">
              {socials.map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-800/60 hover:bg-blue-600/20 hover:text-blue-400 
                  text-slate-400 transition border border-slate-700/50 hover:border-blue-500/30"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px]"
          >
            <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-cyan-400/20 animate-spin-reverse" />

            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl">
              <img
                src="https://picsum.photos/seed/developer/800/800"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-6 -left-4 glass px-3 py-1 rounded-lg text-xs font-medium"
            >
              🚀 Fast Learner
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-6 -right-4 glass px-3 py-1 rounded-lg text-xs font-medium"
            >
              💻 Web Developer
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}