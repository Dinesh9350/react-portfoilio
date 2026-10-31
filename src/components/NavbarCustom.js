import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const NavbarCustom = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Work', path: '/#work', internal: true, hash: 'work' },
    { name: 'Experience', path: '/#experience', internal: true, hash: 'experience' },
    { name: 'Case Studies', path: '/#casestudies', internal: true, hash: 'casestudies' },
    { name: 'Skills', path: '/#skills', internal: true, hash: 'skills' },
    { name: 'About', path: '/#about', internal: true, hash: 'about' },
    { name: 'Contact', path: '/#contact', internal: true, hash: 'contact' },
  ];

  const handleNavClick = (hash) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-warm-50/90 dark:bg-charcoal-950/90 backdrop-blur-md border-b border-warm-200/80 dark:border-charcoal-800/80 py-3 shadow-sm'
          : 'bg-warm-50/60 dark:bg-charcoal-950/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between'>
        {/* Brand */}
        <Link
          to='/'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='group flex items-center gap-2 text-left'
        >
          <div className='w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm'>
            DS
          </div>
          <div>
            <span className='font-bold text-sm sm:text-base text-neutral-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition'>
              Dinesh Singh
            </span>
            <span className='hidden sm:block text-[11px] font-medium text-neutral-500 dark:text-neutral-400 leading-none'>
              Frontend Developer · 2+ Yrs
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-1 lg:gap-2'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.hash)}
              className='px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions (Resume & Theme Toggle) */}
        <div className='flex items-center gap-2 sm:gap-3'>
          <ThemeToggle />

          <button
            onClick={onOpenResume}
            className='hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition shadow-sm'
            title='View and Print Resume'
          >
            <FaFileAlt className='text-xs' />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-warm-100 dark:hover:bg-charcoal-850 md:hidden transition'
            aria-label='Toggle navigation menu'
          >
            {mobileMenuOpen ? <FaTimes className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden px-4 pt-3 pb-5 bg-warm-50 dark:bg-charcoal-950 border-b border-warm-200 dark:border-charcoal-800 shadow-xl'>
          <div className='flex flex-col gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.hash)}
                className='px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-warm-100 dark:hover:bg-charcoal-850'
              >
                {link.name}
              </Link>
            ))}
            <div className='pt-2 mt-2 border-t border-warm-200 dark:border-charcoal-800'>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className='w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
              >
                <FaFileAlt />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarCustom;
