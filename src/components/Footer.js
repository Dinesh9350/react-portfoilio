import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='border-t border-warm-200 dark:border-charcoal-800 bg-warm-50 dark:bg-charcoal-950 py-8 sm:py-10 text-neutral-600 dark:text-neutral-400 text-xs transition-colors'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Brand & Identity */}
        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left'>
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 rounded-md bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-[10px]'>
              DS
            </div>
            <span className='font-bold text-neutral-900 dark:text-white'>
              {personalInfo.name}
            </span>
          </div>

          <span className='hidden sm:inline text-neutral-400'>·</span>

          <span className='text-neutral-600 dark:text-neutral-400 font-medium'>
            Frontend Developer · 2+ YOE
          </span>

          <span className='hidden sm:inline text-neutral-400'>·</span>

          <span className='font-mono text-neutral-400 text-[11px]'>
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Links & Return to Top */}
        <div className='flex items-center justify-center flex-wrap gap-3 sm:gap-4'>
          <a
            href={personalInfo.github}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warm-100 dark:bg-charcoal-850 hover:text-neutral-900 dark:hover:text-white border border-warm-200 dark:border-charcoal-800 transition'
            aria-label='GitHub Profile'
          >
            <FaGithub className='text-sm' />
            <span className='font-mono text-[11px] font-semibold'>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 border border-blue-200 dark:border-blue-900/60 transition'
            aria-label='LinkedIn Profile (dinesh-singh3)'
            title='LinkedIn (dinesh-singh3)'
          >
            <FaLinkedin className='text-sm text-blue-600 dark:text-blue-400' />
            <span className='font-mono text-[11px] font-semibold'>dinesh-singh3</span>
          </a>

          <button
            onClick={scrollToTop}
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-warm-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-850 hover:bg-warm-100 dark:hover:bg-charcoal-800 text-neutral-700 dark:text-neutral-200 transition'
            aria-label='Return to top'
            title='Return to top'
          >
            <FaArrowUp className='text-[10px]' />
            <span className='font-mono text-[11px]'>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;