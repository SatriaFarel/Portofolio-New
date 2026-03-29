import { Reveal } from '../ui/Reveal';
import { Github, Linkedin, Twitter, Instagram, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/SatriaFarel",
    color: "bg-[#0077b5]",
    textColor: "text-white",
    description: "Connect professionally",
    colSpan: "md:col-span-2",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/SatriaFarel",
    color: "bg-[#333]",
    textColor: "text-white",
    description: "Check my code",
    colSpan: "md:col-span-1",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https:/instagram.com/satriafarel30",
    color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    textColor: "text-white",
    description: "Daily life & shots",
    colSpan: "md:col-span-1",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:satriafarel40@gmail.com",
    color: "bg-blue-600",
    textColor: "text-white",
    description: "Send me a message",
    colSpan: "md:col-span-1",
  },
  // {
  //   name: "Website",
  //   icon: Globe,
  //   url: "#",
  //   color: "bg-emerald-600",
  //   textColor: "text-white",
  //   description: "My personal space",
  //   colSpan: "md:col-span-2",
  // }
];

export default function Socials() {
  return (
    <section id="socials" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Connect</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Social Hub</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Connecting all the dots. Follow my journey, check out my code, or just say hello on your favorite platform.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((link, index) => (
            <Reveal key={link.name} delay={index * 0.05} width="100%">
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`${link.colSpan} ${link.color} ${link.textColor} p-6 rounded-2xl flex flex-col justify-between h-48 relative overflow-hidden group shadow-lg`}
              >
                <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={24} />
                </div>
                
                <div className="z-10">
                  <link.icon size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold">{link.name}</h3>
                  <p className="opacity-80 font-medium mt-1">{link.description}</p>
                </div>

                {/* Decorative background icon */}
                <link.icon 
                  size={120} 
                  className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 rotate-12" 
                />
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
