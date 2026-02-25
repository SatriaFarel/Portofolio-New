import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { Modal } from '../ui/Modal';
import { motion } from 'motion/react';
import { Camera, X } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: "https://picsum.photos/seed/setup/800/600",
    category: "Setup",
    caption: "My minimalist coding setup 💻"
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/meetup/600/800",
    category: "Events",
    caption: "Speaking at React Jakarta Meetup 🎤"
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/coffee/800/800",
    category: "Life",
    caption: "Fueling up for a coding session ☕"
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/team/800/600",
    category: "Work",
    caption: "Brainstorming with the team 💡"
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/travel/600/800",
    category: "Life",
    caption: "Digital nomad life in Bali 🌴"
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/code/800/600",
    category: "Work",
    caption: "Late night debugging session 🐛"
  }
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Life & Moments</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Gallery</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <span className="inline-block px-2 py-1 rounded-md bg-blue-600 text-white text-xs font-bold mb-2">
                    {photo.category}
                  </span>
                  <p className="text-white font-medium">{photo.caption}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal isOpen={!!selectedPhoto} onClose={() => setSelectedPhoto(null)}>
        {selectedPhoto && (
          <div className="relative">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-slate-900">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium text-lg">{selectedPhoto.caption}</p>
                <span className="text-blue-400 text-sm px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800">
                  {selectedPhoto.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
