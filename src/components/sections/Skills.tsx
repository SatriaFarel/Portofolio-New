import { Reveal } from '../ui/Reveal';

const skills = [
  {
    category: "Frontend",
    items: ["React", "Bootstrap", "Tailwind CSS", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["Laravel", "PHP"]
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"]
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "Figma", "Postman"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-10">
            <span className="text-blue-400/80 text-sm uppercase tracking-wider">
              My Arsenal
            </span>
            <h2 className="text-3xl font-bold mt-2 text-white">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
          </div>
        </Reveal>

        <div className="space-y-8">
          {skills.map((group, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div>
                {/* Title */}
                <h3 className="text-xs text-blue-400/70 mb-3 uppercase tracking-[0.2em]">
                  {group.category}
                </h3>

                {/* Content */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-slate-800/60 text-slate-300 rounded-md border border-slate-700/60 
                      hover:border-blue-400 hover:text-white hover:bg-slate-800 
                      transition-all duration-200 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                {i !== skills.length - 1 && (
                  <div className="mt-6 border-t border-slate-800/70"></div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}