import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='border-t border-warm-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-950 py-8 text-neutral-600 dark:text-neutral-400 text-xs text-left'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        {/* Identity & Copyright */}
        <div className='flex items-center gap-2'>
          <span className='font-bold text-neutral-900 dark:text-white'>
            {personalInfo.name}
          </span>
          <span>·</span>
          <span>{personalInfo.role}</span>
          <span>·</span>
          <span className='font-mono'>© {new Date().getFullYear()}</span>
        </div>

        {/* Links & Return to Top */}
        <div className='flex items-center gap-4'>
          <a
            href={personalInfo.github}
            target='_blank'
            rel='noreferrer'
            className='hover:text-neutral-900 dark:hover:text-white transition'
            aria-label='GitHub Profile'
          >
            <FaGithub className='text-sm' />
          </a>
          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noreferrer'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1.5'
            aria-label='LinkedIn Profile (dinesh-singh3)'
            title='LinkedIn (dinesh-singh3)'
          >
            <FaLinkedin className='text-sm' />
            <span className='font-mono text-[11px] font-semibold hidden sm:inline'>dinesh-singh3</span>
          </a>
          <button
            onClick={scrollToTop}
            className='p-1.5 rounded-lg border border-warm-200 dark:border-charcoal-800 hover:bg-warm-100 dark:hover:bg-charcoal-850 hover:text-neutral-900 dark:hover:text-white transition ml-2'
            aria-label='Return to top'
            title='Return to top'
          >
            <FaArrowUp className='text-xs' />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
