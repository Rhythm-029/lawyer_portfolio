import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education-credentials" className="py-24 lg:py-32 bg-[#F5F3ED] text-[#1E293B] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Web Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFECE4] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <ShieldCheck size={14} />
            <span>EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1D30] tracking-tight leading-tight">
            A dual professional foundation in law and accountancy
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: 3 Credential Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Card 1: UP Business */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 chique-card-shadow border border-slate-200/80 hover:border-[#C5A059] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default"
            >
              <div className="flex items-center gap-6">
                <div className="text-3xl font-extrabold gold-gradient-text font-serif w-20 flex-shrink-0">
                  1985
                </div>
                <div className="w-[1px] h-10 bg-slate-200 hidden sm:block" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F1D30] group-hover:text-[#C5A059] transition-colors">
                    University of the Philippines College of Business
                  </h3>
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider self-start sm:self-auto bg-slate-100 px-3.5 py-1.5 rounded-full">
                Graduate - Class of 1985
              </div>
            </motion.div>

            {/* Card 2: UP Law */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 chique-card-shadow border border-slate-200/80 hover:border-[#C5A059] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default"
            >
              <div className="flex items-center gap-6">
                <div className="text-3xl font-extrabold gold-gradient-text font-serif w-20 flex-shrink-0">
                  1990
                </div>
                <div className="w-[1px] h-10 bg-slate-200 hidden sm:block" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F1D30] group-hover:text-[#C5A059] transition-colors">
                    University of the Philippines College of Law
                  </h3>
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider self-start sm:self-auto bg-slate-100 px-3.5 py-1.5 rounded-full">
                Graduate - Class of 1990
              </div>
            </motion.div>

            {/* Card 3: Dual Qualification */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -3 }}
              className="bg-[#EFECE4] rounded-2xl p-6 sm:p-8 shadow-md border border-[#C5A059]/40 hover:border-[#C5A059] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default"
            >
              <div className="flex items-center gap-6">
                <div className="bg-[#C5A059] text-white text-xs font-extrabold tracking-widest uppercase px-4 py-2 rounded-md w-20 text-center flex-shrink-0 shadow-sm">
                  DUAL
                </div>
                <div className="w-[1px] h-10 bg-[#C5A059]/30 hidden sm:block" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F1D30]">
                    Lawyer & CPA
                  </h3>
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider self-start sm:self-auto">
                Legal training + accounting discipline
              </div>
            </motion.div>

          </div>

          {/* RIGHT: Office Desk Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-slate-200 group"
          >
            <img 
              src="/assets/images/office-desk.jpg" 
              alt="Atty. Abraham Espejo Office Studio" 
              className="w-full h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
