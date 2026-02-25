import { Reveal } from '../ui/Reveal';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Leading the frontend team in building a scalable SaaS platform. Implemented modern CI/CD pipelines and improved site performance by 40%."
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Creative Agency",
    period: "2021 - 2023",
    description: "Developed responsive websites for various clients using React and WordPress. Collaborated with designers to ensure pixel-perfect implementation."
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    description: "Assisted in the development of internal tools. Learned agile methodologies and version control best practices."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">My Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <Reveal>
                <div className="md:flex items-center justify-between group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors md:left-1/2 md:-translate-x-1/2 md:top-6"></div>
                  
                  {/* Left Side (Date for Desktop) */}
                  <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-2">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>

                  {/* Right Side (Content) */}
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-4">
                      <Calendar size={14} /> {exp.period}
                    </div>
                    <div className="glass p-6 rounded-2xl border-l-4 border-l-blue-500 hover:bg-slate-800/80 transition-colors">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase size={18} className="text-blue-500" />
                        {exp.role}
                      </h3>
                      <h4 className="text-slate-400 font-medium mb-3">{exp.company}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
