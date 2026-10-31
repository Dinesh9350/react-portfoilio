import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';
import { FaDownload, FaFileAlt, FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
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
          <div className='w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shadow-xs group-hover:scale-105 transition-transform'>
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
                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/50 shadow-xs'
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
          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noreferrer'
            className='hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
            title='LinkedIn (dinesh-singh3)'
          >
            <FaLinkedin className='text-sm text-blue-600 dark:text-blue-400' />
            <span className='font-mono text-[11px] font-semibold'>dinesh-singh3</span>
          </a>

          <ThemeToggle />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenResume}
            className='hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition shadow-xs'
            title='View Dinesh Singh Resume'
          >
            <FaFileAlt className='text-[10px]' />
            <span>Resume</span>
          </motion.button>

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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className='md:hidden overflow-hidden px-4 pt-3 pb-5 bg-warm-50 dark:bg-charcoal-950 border-b border-warm-200 dark:border-charcoal-800 shadow-xl'
          >
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

              <div className='pt-2 mt-2 border-t border-warm-200 dark:border-charcoal-800 space-y-2'>
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 transition'
                >
                  <FaLinkedin className='text-sm text-blue-600 dark:text-blue-400' />
                  <span>LinkedIn (dinesh-singh3)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className='w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition shadow-xs'
                >
                  <FaFileAlt className='text-xs' />
                  <span>View Resume</span>
                </button>
                <a
                  href={personalInfo.resumeUrl}
                  download='Dinesh-Singh-Resume.pdf'
                  className='w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold border border-warm-300 dark:border-charcoal-700 text-neutral-800 dark:text-neutral-200 hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                >
                  <FaDownload className='text-xs text-neutral-500' />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
