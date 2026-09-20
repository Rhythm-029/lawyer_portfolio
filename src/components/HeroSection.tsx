import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.04, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.4 }
      );
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-[#0B132B] flex flex-col justify-center overflow-hidden pt-24 pb-16 lg:py-0">
      
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
        
        {/* LEFT COLUMN - Deep Navy */}
        <div className="lg:col-span-7 bg-[#0F1D30] px-8 sm:px-12 md:px-16 lg:px-20 py-12 lg:py-24 flex flex-col justify-center relative">
          <div className="max-w-xl mx-auto lg:mx-0">
            
            {/* Small bar & section label */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#C5A059]">
                PROFESSIONAL PROFILE
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4"
            >
              Atty. Abraham <br className="hidden sm:inline" />
              <span className="gold-gradient-text font-serif italic font-normal">Espejo</span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 font-medium tracking-wide mb-6"
            >
              Litigation Lawyer <span className="text-[#C5A059] mx-2">|</span> Legal Educator <span className="text-[#C5A059] mx-2">|</span> CPA
            </motion.p>

            {/* Thin muted-gold divider */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
              className="h-[1px] bg-[#C5A059]/40 w-full origin-left mb-8"
            />

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-10 max-w-lg"
            >
              36 years of litigation practice, complemented by academic leadership and a dual foundation in law and accountancy.
            </motion.p>

            {/* Credential Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              {[
                '36 YEARS IN LITIGATION',
                'FORMER LAW DEAN',
                'LAWYER & CPA'
              ].map((pill, idx) => (
                <motion.div
                  key={pill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.15 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="bg-white text-[#0F1D30] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-md hover:bg-[#F5F3ED] transition-all cursor-default"
                >
                  {pill}
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* RIGHT COLUMN - Executive Portrait */}
        <div className="lg:col-span-5 relative bg-[#070D1F] overflow-hidden min-h-[440px] lg:min-h-full flex items-center justify-center">
          <div ref={imageRef} className="w-full h-full relative group">
            <img 
              src="/assets/images/hero-portrait.jpg" 
              alt="Atty. Abraham Espejo - Executive Portrait"
              className="w-full h-full object-cover object-center lg:object-top transform group-hover:scale-103 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
