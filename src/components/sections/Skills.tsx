import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Laravel", level: 70 },
      { name: "PHP", level: 75 },
      { name: "Express", level: 80 },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 75 },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Docker", level: 60 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">My Arsenal</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="glass p-6 rounded-2xl h-full hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-6 text-center text-blue-100">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-sm text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
