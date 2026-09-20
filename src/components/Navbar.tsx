import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Profile', href: '#executive-profile' },
  { label: 'Journey', href: '#career-journey' },
  { label: 'Litigation', href: '#litigation-practice' },
  { label: 'Leadership', href: '#academic-leadership' },
  { label: 'Education', href: '#education-credentials' },
  { label: 'Representation', href: '#client-representation' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#C5A059] via-[#E6CA85] to-[#C5A059] z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav-scrolled py-3.5' : 'bg-[#0B132B]/75 backdrop-blur-md border-b border-[#C5A059]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 text-white font-semibold tracking-wider text-sm md:text-base"
          >
            <span className="w-2.5 h-2.5 bg-[#C5A059] rounded-full transition-transform duration-300 group-hover:scale-125" />
            <span className="font-bold tracking-widest text-white uppercase drop-shadow-sm">ABRAHAM ESPEJO</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs uppercase tracking-widest font-semibold text-slate-200 hover:text-[#C5A059] transition-colors duration-200 relative py-1 drop-shadow-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-200 hover:text-[#C5A059] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 z-30 bg-[#0B132B] bg-opacity-98 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-center justify-between text-lg font-medium text-slate-200 hover:text-[#C5A059] border-b border-slate-800 pb-4 transition-colors"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <span className="uppercase tracking-widest text-sm">{item.label}</span>
              <ChevronRight size={18} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
