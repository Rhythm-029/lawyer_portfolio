import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const CLIENTS = [
  {
    name: "Magtanggol B. Gatdula",
    title: "Former Director, National Bureau of Investigation",
    description: "Legal counsel in significant proceedings."
  },
  {
    name: "Amado T. Espino Jr.",
    title: "Former Governor of Pangasinan",
    description: "Counsel in proceedings that concluded in acquittal."
  },
  {
    name: "Benjamin Abalos Sr.",
    title: "Former Chairman, Commission on Elections",
    description: "Counsel in electoral-sabotage proceedings that concluded in acquittal."
  },
  {
    name: "Brig. Gen. Danilo D. Lim & military officers",
    title: "Military leadership representation",
    description: "Counsel in mutiny-related military proceedings."
  },
  {
    name: "Iglesia ni Cristo",
    title: "Religious institution",
    description: "Counsel in Supreme Court litigation involving constitutional and electoral issues."
  }
];

export const SelectedRepresentationSection: React.FC = () => {
  return (
    <section id="client-representation" className="py-24 lg:py-32 bg-[#F5F3ED] text-[#1E293B] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Web Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFECE4] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <Users size={14} />
            <span>SELECTED CLIENT REPRESENTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1D30] tracking-tight leading-tight">
            A distinguished record of representing prominent clients
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Manny Pacquiao Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-white rounded-2xl p-4 chique-card-shadow border border-slate-200 overflow-hidden flex flex-col group sticky top-24"
          >
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/assets/images/pacquiao-representation.jpg" 
                alt="Atty. Abraham Espejo" 
                className="w-full h-auto object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* RIGHT: Detail Description Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-[#EFECE4] rounded-2xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-sm flex flex-col"
          >
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C5A059] block mb-3">
                SELECTED CLIENTELE
              </span>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                A sample of prominent individuals and institutions represented across a long litigation career.
              </p>
            </div>

            <div className="space-y-6">
              {CLIENTS.map((client, index) => (
                <div key={index} className="flex gap-5 border-b border-[#C5A059]/20 pb-6 last:border-0 last:pb-0">
                  <div className="text-[#C5A059] font-bold text-xl mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#0F1D30] leading-tight mb-1">
                      {client.name}
                    </h4>
                    <p className="text-sm font-bold text-[#C5A059] mb-2 uppercase tracking-wide">
                      {client.title}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
