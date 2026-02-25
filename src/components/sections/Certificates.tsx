import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { Modal } from '../ui/Modal';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2023",
    image: "https://picsum.photos/seed/cert1/800/600",
    description: "Advanced proficiency in React, JavaScript, HTML, and CSS. Completed 9 courses covering UI/UX design, version control, and capstone project.",
    skills: ["React", "JavaScript", "UI/UX"]
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://picsum.photos/seed/cert2/800/600",
    description: "Fundamental understanding of IT services and their uses in the AWS Cloud platform.",
    skills: ["AWS", "Cloud Computing", "Security"]
  },
  {
    id: 3,
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera",
    date: "2022",
    image: "https://picsum.photos/seed/cert3/800/600",
    description: "Completed rigorous training designed for entry-level job readiness. Topics included UX research, wireframing, prototyping, and testing.",
    skills: ["Figma", "UX Research", "Prototyping"]
  },
  {
    id: 4,
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2022",
    image: "https://picsum.photos/seed/cert4/800/600",
    description: "Intensive bootcamp covering both frontend and backend technologies including Node.js, Express, MongoDB, and React.",
    skills: ["Full Stack", "MERN", "REST APIs"]
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Learning Path</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.1}>
              <div 
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer glass p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-blue-500" size={32} />
                  <span className="text-xs font-medium text-slate-500 border border-slate-700 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{cert.issuer}</p>
                <div className="text-xs text-blue-400 font-medium flex items-center gap-1">
                  View Certificate <ExternalLink size={12} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div>
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-blue-400 font-medium">{selectedCert.issuer}</p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCert.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm border border-blue-800/50">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                {selectedCert.description}
              </p>
              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
