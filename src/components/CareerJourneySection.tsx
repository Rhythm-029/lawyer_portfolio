import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  isCurrent?: boolean;
}

const MILESTONES: Milestone[] = [
  {
    year: '1985',
    title: 'Business Education',
    subtitle: 'UP College of Business',
  },
  {
    year: '1990',
    title: 'Legal Education',
    subtitle: 'UP College of Law',
  },
  {
    year: '36 YEARS',
    title: 'Litigation Practice',
    subtitle: 'Courtroom Advocacy',
  },
  {
    year: 'ACADEMIC LEADERSHIP',
    title: 'Law-School Leadership',
    subtitle: 'Former Dean Roles',
  },
  {
    year: 'TODAY',
    title: 'Senior Legal Practice',
    subtitle: 'Lawyer & CPA',
    isCurrent: true,
  },
];

export const CareerJourneySection: React.FC = () => {
  return (
    <section id="career-journey" className="py-24 lg:py-32 bg-[#F5F3ED] text-[#1E293B] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Web Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFECE4] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <Compass size={14} />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1D30] tracking-tight leading-tight">
            Four decades of professional development and leadership
          </h2>
        </div>

        {/* Desktop Interactive Horizontal Timeline */}
        <div className="hidden lg:block my-20 relative">
          
          {/* Base Horizontal Line */}
          <div className="absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-slate-300 z-0" />
          
          {/* Animated Connecting Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-[#C5A059] origin-left z-0"
          />

          <div className="grid grid-cols-5 gap-4 relative z-10 text-center">
            {MILESTONES.map((m, idx) => (
              <motion.div 
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.18 }}
                className="flex flex-col items-center group cursor-default"
              >
                {/* Year Label above dot */}
                <div className={`text-sm sm:text-base font-extrabold tracking-wider mb-4 transition-colors ${
                  m.isCurrent ? 'gold-gradient-text font-serif text-lg' : 'text-[#0F1D30]'
                }`}>
                  {m.year}
                </div>

                {/* Milestone Node */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                  m.isCurrent ? 'bg-[#C5A059] ring-4 ring-[#C5A059]/30 shadow-lg' : 'bg-[#0F1D30]'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Title */}
                <div className="mt-6 text-sm font-bold text-[#0F1D30] group-hover:text-[#C5A059] transition-colors">
                  {m.title}
                </div>

                {/* Subtitle */}
                <div className="mt-1 text-xs text-slate-500 font-medium">
                  {m.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden my-12 relative pl-8 border-l-2 border-[#C5A059] space-y-10">
          {MILESTONES.map((m, idx) => (
            <motion.div 
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full flex items-center justify-center ${
                m.isCurrent ? 'bg-[#C5A059] ring-4 ring-[#C5A059]/30' : 'bg-[#0F1D30]'
              }`}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <span className={`text-xs uppercase font-extrabold tracking-wider block ${
                m.isCurrent ? 'gold-gradient-text' : 'text-slate-500'
              }`}>
                {m.year}
              </span>
              <h3 className="text-lg font-bold text-[#0F1D30] mt-1">
                {m.title}
              </h3>
              <p className="text-sm text-slate-600 font-medium mt-0.5">
                {m.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary Executive Quote Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-[#EFECE4] rounded-2xl p-8 sm:p-10 border border-[#C5A059]/30 text-center max-w-4xl mx-auto shadow-sm"
        >
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed font-serif italic">
            "The combination of legal training, accounting credentials and academic administration creates a multidimensional professional profile - equally grounded in analysis, advocacy and institutional leadership."
          </p>
        </motion.div>

      </div>
    </section>
  );
};
