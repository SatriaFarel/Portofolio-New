import { Reveal } from '../ui/Reveal';
import { Calendar } from 'lucide-react';

type Education = {
  id: number;
  school: string;
  major?: string;
  period: string;
  description: string;
};

const education: Education[] = [
  {
    id: 1,
    school: "SMK Negeri 71 Jakarta",
    major: "Software Engineering (Rekayasa Perangkat Lunak)",
    period: "Jul 2023 – Jun 2026",
    description:
      "Studied core software development concepts including web development, database design, and basic system architecture, with hands-on project experience."
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-5xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400/80 font-medium tracking-wider uppercase text-sm">
              Academic Background
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="relative border-l border-slate-800 ml-3 md:ml-0 md:border-none space-y-10">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              <Reveal delay={index * 0.1}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-start group">

                  {/* Center Line (desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-800 -translate-x-1/2"></div>

                  {/* Dot */}
                  <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-slate-700 border-2 border-blue-500 group-hover:bg-blue-500 transition md:left-1/2 md:-translate-x-1/2"></div>

                  {/* Date */}
                  <div className="md:text-right md:pr-8 mb-3 md:mb-0">
                    <div className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700 text-blue-400">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:pl-8">
                    <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/70 transition-all duration-200 backdrop-blur-sm">
                      
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {edu.school}
                      </h3>

                      {edu.major && (
                        <p className="text-sm text-blue-400 mt-1">
                          {edu.major}
                        </p>
                      )}

                      <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                        {edu.description}
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