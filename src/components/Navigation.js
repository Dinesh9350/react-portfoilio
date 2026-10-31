import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-warm-50/90 dark:bg-charcoal-950/90 backdrop-blur-md border-b border-warm-200/80 dark:border-charcoal-800/80 py-3 shadow-xs'
          : 'bg-warm-50/70 dark:bg-charcoal-950/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between'>
        {/* Brand */}
        <button
          onClick={() => scrollTo('home')}
          className='group flex items-center gap-2.5 text-left focus:outline-none'
        >
          <div className='w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shadow-xs'>
            DS
          </div>
          <div>
            <span className='font-bold text-sm sm:text-base text-neutral-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition'>
              {personalInfo.name}
            </span>
            <span className='hidden sm:block text-[11px] font-medium text-neutral-500 dark:text-neutral-400 leading-none'>
              Frontend Developer · 2+ Yrs
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className='hidden md:flex items-center gap-1 lg:gap-1.5'>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/40'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-850'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Actions (Resume & Theme Switcher) */}
        <div className='flex items-center gap-2 sm:gap-3'>
          <ThemeToggle />

          <a
            href={personalInfo.resumeUrl}
            download='Dinesh-Singh-Resume.pdf'
            className='hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition shadow-xs'
            title='Download Dinesh Singh Resume (PDF)'
          >
            <FaDownload className='text-[10px]' />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-warm-100 dark:hover:bg-charcoal-850 md:hidden transition'
            aria-label='Toggle navigation menu'
          >
            {mobileMenuOpen ? <FaTimes className='w-4 h-4' /> : <FaBars className='w-4 h-4' />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className='md:hidden px-4 pt-3 pb-5 bg-warm-50 dark:bg-charcoal-950 border-b border-warm-200 dark:border-charcoal-800 shadow-xl'>
          <div className='flex flex-col gap-1'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-warm-100 dark:hover:bg-charcoal-850'
                }`}
              >
                {link.name}
              </button>
            ))}

            <div className='pt-2 mt-2 border-t border-warm-200 dark:border-charcoal-800'>
              <a
                href={personalInfo.resumeUrl}
                download='Dinesh-Singh-Resume.pdf'
                className='w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
              >
                <FaDownload className='text-xs' />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
