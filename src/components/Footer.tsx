import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-400 py-10 px-6 sm:px-12 border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-slate-300">
            Atty. Abraham Espejo &copy; {new Date().getFullYear()}
          </span>
        </div>

        <p className="text-xs text-slate-500 font-medium text-center">
          Litigation Lawyer <span className="text-[#C5A059]">|</span> Legal Educator <span className="text-[#C5A059]">|</span> CPA
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#C5A059] hover:text-white transition-colors bg-[#14223D] px-4 py-2.5 rounded-full border border-[#C5A059]/30 hover:border-[#C5A059]"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
};
