import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export const ExecutiveProfileSection: React.FC = () => {
  return (
    <section id="executive-profile" className="py-20 lg:py-28 bg-[#F5F3ED] text-[#1E293B] relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Modern Web Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFECE4] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <Award size={14} />
            <span>EXECUTIVE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1D30] tracking-tight leading-tight">
            A career at the intersection of advocacy, scholarship and finance
          </h2>
        </div>

        {/* Content Layout - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Sleek White Card with Credentials */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 md:p-12 chique-card-shadow border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1D30] tracking-tight">
                    Atty. Abraham Espejo
                  </h3>
                  <p className="text-base font-bold gold-gradient-text mt-1">
                    Lawyer and Certified Public Accountant
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F3ED] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <Briefcase size={20} />
                </div>
              </div>

              <div className="h-[1px] bg-gradient-to-r from-[#C5A059] via-[#E6CA85] to-transparent w-full mb-8" />

              <ul className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#0F1D30] font-bold">36 years</strong> of litigation experience in Philippine courts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#0F1D30] font-bold">Former Dean</strong>, School of Law - San Sebastian College.</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#0F1D30] font-bold">Former Dean</strong>, School of Law - New Era University.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                  <span>Graduate, <strong className="text-[#0F1D30] font-bold">University of the Philippines College of Law</strong> - Class of 1990.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                  <span>Graduate, <strong className="text-[#0F1D30] font-bold">University of the Philippines College of Business</strong> - Class of 1985.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: High-Res Portrait & Profile Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-300/80 group flex-1">
              <img 
                src="/assets/images/profile-portrait.jpg" 
                alt="Atty. Abraham Espejo Professional Profile" 
                className="w-full h-full min-h-[380px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="bg-[#EFECE4] p-6 sm:p-7 rounded-2xl border border-[#C5A059]/30">
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#C5A059] block mb-2">
                PROFILE IN ONE LINE
              </span>
              <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed font-serif italic">
                "Seasoned courtroom practitioner and former law-school dean with a rare legal + accounting perspective."
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
