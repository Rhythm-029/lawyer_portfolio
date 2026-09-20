import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Manny Pacquiao Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-white rounded-2xl p-4 chique-card-shadow border border-slate-200 overflow-hidden flex flex-col group"
          >
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/assets/images/pacquiao-representation.jpg" 
                alt="Atty. Abraham Espejo representing Manny Pacquiao" 
                className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-[#0F1D30]">
                Manny Pacquiao
              </h3>
              <p className="text-xs font-bold gold-gradient-text uppercase tracking-wider mt-1">
                World-renowned boxing champion
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Detail Description Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 bg-[#EFECE4] rounded-2xl p-8 sm:p-12 border border-[#C5A059]/30 shadow-sm flex flex-col justify-center min-h-[380px]"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#C5A059] block mb-4">
              ONE OF ATTY. ESPEJO'S NOTABLE CLIENTS
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F1D30] tracking-tight mb-6">
              Manny Pacquiao
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              Atty. Abraham Espejo has represented internationally known clients, including boxing champion Manny Pacquiao. The engagement reflects his extensive experience providing legal counsel in high-profile matters.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
