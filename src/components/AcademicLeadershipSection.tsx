import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export const AcademicLeadershipSection: React.FC = () => {
  return (
    <section id="academic-leadership" className="py-24 lg:py-32 bg-[#F5F3ED] text-[#1E293B] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Web Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFECE4] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <BookOpen size={14} />
            <span>ACADEMIC LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1D30] tracking-tight leading-tight">
            Former Dean of two law schools
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Library Bookshelf Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-slate-200 group"
          >
            <img 
              src="/assets/images/library-bookshelf.jpg" 
              alt="Law Library & Legal Scholarship" 
              className="w-full h-[400px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* RIGHT: Dean Cards & Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* CARD 1: San Sebastian College */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#0F1D30] text-white p-8 rounded-2xl shadow-xl border border-[#C5A059]/30 hover:border-[#C5A059] transition-all cursor-default"
            >
              <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                San Sebastian College
              </h3>
              <p className="text-xs font-extrabold text-[#C5A059] uppercase tracking-widest">
                Former Dean - School of Law
              </p>
            </motion.div>

            {/* CARD 2: New Era University */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ y: -4 }}
              className="bg-[#EFECE4] text-[#0F1D30] p-8 rounded-2xl shadow-md border border-[#C5A059]/30 hover:border-[#C5A059] transition-all cursor-default"
            >
              <h3 className="text-2xl font-bold tracking-tight text-[#0F1D30] mb-1">
                New Era University
              </h3>
              <p className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">
                Former Dean - School of Law
              </p>
            </motion.div>

            {/* Narrative */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2"
            >
              Academic leadership adds another dimension to his professional background: mentoring future lawyers, stewarding legal education and engaging with the discipline beyond active practice.
            </motion.p>

          </div>

        </div>

      </div>
    </section>
  );
};
