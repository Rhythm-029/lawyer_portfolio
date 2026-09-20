import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

export const LitigationPracticeSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView && countRef.current) {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: 36,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(obj.value).toString();
          }
        },
      });
    }
  }, [isInView]);

  return (
    <section id="litigation-practice" ref={ref} className="py-20 lg:py-28 bg-[#F5F3ED] text-[#1E293B] relative overflow-hidden border-t border-[#C5A059]/30">
      
      {/* Top Gold Shimmer Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5A059] via-[#E6CA85] to-[#C5A059]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C5A059]/20 pb-8 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A059] block mb-2">
              LITIGATION PRACTICE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1D30] tracking-tight max-w-3xl leading-tight">
              Experience shaped by courtroom discipline and procedural rigor
            </h2>
          </div>
          <div className="text-4xl md:text-6xl font-light text-[#C5A059]/30 self-start md:self-auto mt-4 md:mt-0 font-serif">
            04
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: High-Res Courtroom Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-slate-300/80 group"
          >
            <img 
              src="/assets/images/courtroom-portrait.jpg" 
              alt="Atty. Abraham Espejo Courtroom Practice" 
              className="w-full h-[480px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* RIGHT: Practice Themes Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 md:p-12 chique-card-shadow border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              {/* GSAP Animated Stat */}
              <div className="mb-6 flex items-baseline gap-2">
                <span ref={countRef} className="text-5xl sm:text-6xl md:text-7xl font-extrabold gold-gradient-text tracking-tight font-serif">
                  0
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-[#C5A059]">years</span>
                <span className="block text-slate-800 font-bold text-lg sm:text-xl ml-3">
                  of litigation practice
                </span>
              </div>

              <div className="h-[1px] bg-gradient-to-r from-[#C5A059] via-[#E6CA85] to-transparent w-full mb-8" />

              <h3 className="text-sm font-bold text-[#0F1D30] uppercase tracking-widest mb-6">
                Professional themes
              </h3>

              <ul className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 flex-shrink-0" />
                  <span>Long-standing courtroom and dispute-resolution experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 flex-shrink-0" />
                  <span>A practice mindset anchored in evidence, process and legal strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 flex-shrink-0" />
                  <span>Ability to interpret complex matters through both legal and financial lenses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 flex-shrink-0" />
                  <span>Experience communicating legal positions to clients, institutions and academic audiences.</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer Footnote */}
            <div className="mt-10 pt-6 border-t border-slate-100 text-slate-400 text-[11px] italic leading-normal">
              This profile deliberately focuses on verified biographical credentials supplied for the presentation and does not attempt to list practice areas not provided.
            </div>

          </motion.div>

        </div>

        {/* Footer Meta */}
        <div className="flex justify-between items-center mt-16 pt-6 border-t border-slate-300/60 text-[11px] uppercase tracking-wider text-slate-500">
          <span>ATTY. ABRAHAM ESPEJO</span>
          <span>PROFESSIONAL PROFILE 4</span>
        </div>

      </div>
    </section>
  );
};
