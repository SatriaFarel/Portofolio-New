import { Reveal } from '../ui/Reveal';
import { Code2, Briefcase, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Who I Am</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://picsum.photos/seed/workspace/800/600" 
                alt="Workspace" 
                className="w-full h-full object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-2xl font-bold mb-4">
                I'm a passionate <span className="text-blue-400">Web Developer</span> based in Indonesia
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                My journey in web development started 2 years ago when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Fast-forward to today, and I've had the privilege of building software for a start-up, a student-led design studio, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass p-4 rounded-xl text-center border-t-2 border-blue-500">
                  <Briefcase className="mx-auto mb-2 text-blue-400" size={24} />
                  <h4 className="text-2xl font-bold">2+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Years Exp</p>
                </div>
                <div className="glass p-4 rounded-xl text-center border-t-2 border-amber-500">
                  <Code2 className="mx-auto mb-2 text-amber-400" size={24} />
                  <h4 className="text-2xl font-bold">20+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Projects</p>
                </div>
                <div className="glass p-4 rounded-xl text-center border-t-2 border-purple-500">
                  <Award className="mx-auto mb-2 text-purple-400" size={24} />
                  <h4 className="text-2xl font-bold">5+</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Awards</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
