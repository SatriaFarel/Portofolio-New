import { Reveal } from '../ui/Reveal';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Contact Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Let's Talk About Your Project</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm currently available for freelance work and open to full-time opportunities. 
                If you have a project that needs some creative touch, or just want to say hi, 
                feel free to send me a message!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium">hello@alexdev.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-medium">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form className="glass p-8 rounded-2xl space-y-6 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
