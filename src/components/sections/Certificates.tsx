import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { Modal } from '../ui/Modal';
import { Award, ExternalLink } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Front-End Development Certificate",
    issuer: "Mimo",
    date: "2025",
    image: "https://picsum.photos/seed/cert1/800/600",
    description:
      "Completed an intensive front-end development program focused on building responsive and interactive web interfaces using modern technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: 2,
    title: "Back-End Development Certificate",
    issuer: "Mimo",
    date: "2025",
    image: "https://picsum.photos/seed/cert2/800/600",
    description:
      "Gained fundamental knowledge in back-end development, including API development, server-side logic, and database management.",
    skills: ["JavaScript", "REST API", "SQL", "Database"]
  },
  {
    id: 3,
    title: "Traspac Competition Participant Certificate",
    issuer: "PT Traspac Makmur Sejahtera",
    date: "2025",
    image: "https://picsum.photos/seed/cert3/800/600",
    description:
      "Participated in a software development competition, applying problem-solving and technical skills in practical scenarios.",
    skills: ["Laravel", "REST API", "SQL"]
  },
  {
    id: 4,
    title: "Student Council Member Certificate",
    issuer: "SMK Negeri 71 Jakarta",
    date: "2023 - 2024",
    image: "https://picsum.photos/seed/cert4/800/600",
    description:
      "Served as an active student council member, contributing to organizational activities while developing leadership and teamwork skills.",
    skills: ["Leadership", "Teamwork", "Time Management"]
  },
  {
    id: 5,
    title: "EBITI Fintech 2025 Participant Certificate",
    issuer: "Perbanas Institute",
    date: "2025",
    image: "https://picsum.photos/seed/cert5/800/600",
    description:
      "Completed a fintech-focused program covering financial systems, capital markets, and Islamic financial services.",
    skills: ["Capital Market", "Fintech", "Islamic Finance"]
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400/80 font-medium tracking-wider uppercase text-sm">
              Learning Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.08}>
              <div
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer h-full flex flex-col justify-between 
                p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm
                hover:border-blue-500/50 hover:-translate-y-1 hover:bg-slate-800/70
                transition-all duration-300"
              >
                {/* TOP */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <Award className="text-blue-500" size={28} />
                    <span className="text-[11px] font-medium text-slate-500 border border-slate-700 px-2 py-[2px] rounded-full">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-semibold text-base mb-1 leading-snug line-clamp-2 group-hover:text-blue-400 transition">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {cert.issuer}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="mt-4 text-xs text-blue-400 font-medium flex items-center gap-1">
                  View Certificate <ExternalLink size={12} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div>
            {/* IMAGE */}
            <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-t-2xl">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />

              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-blue-400 text-sm">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-xs border border-blue-800/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedCert.description}
              </p>

              {/* ACTION */}
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm transition"
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