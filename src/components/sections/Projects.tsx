import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Parkirku",
    category: "Website",
    image: "https://picsum.photos/seed/project1/600/400",
    description: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
    stack: ["Laravel", "TailwindCSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "SIWarga",
    category: "Website",
    image: "https://picsum.photos/seed/project2/600/400",
    description: "Mobile application helping travelers find local gems, book tours, and connect with other travelers.",
    stack: ["Laravel", "TailwindCSS", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "BookPoint",
    category: "Website",
    image: "https://picsum.photos/seed/project3/600/400",
    description: "SaaS platform using OpenAI API to help marketers generate blog posts and social media captions.",
    stack: ["Laravel", "React.JS", "TailwindCSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Kasir-71",
    category: "Website",
    image: "https://picsum.photos/seed/project4/600/400",
    description: "A clean, minimal, and performant portfolio template for developers and designers.",
    stack: ["PHP", "TailwindCSS", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "GOMart",
    category: "App Dekstop",
    image: "https://picsum.photos/seed/project5/600/400",
    description: "Collaborative task manager with Kanban boards, calendar view, and team chat features.",
    stack: ["C#"],
    github: "#",
    demo: "#"
  }
];

const categories = ["All", "Website", "App Dekstop"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Recent Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-400 border border-slate-700">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors border border-slate-700">
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
