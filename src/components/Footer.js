import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { profileData } from './data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='border-t border-warm-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-950 py-8 text-neutral-600 dark:text-neutral-400 text-xs'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        {/* Identity & Copyright */}
        <div className='flex items-center gap-2'>
          <span className='font-bold text-neutral-900 dark:text-white'>
            {profileData.name}
          </span>
          <span>·</span>
          <span>Frontend Developer (2+ Years Experience)</span>
          <span>·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Links & Return to Top */}
        <div className='flex items-center gap-4'>
          <a
            href={profileData.github}
            target='_blank'
            rel='noreferrer'
            className='hover:text-neutral-900 dark:hover:text-white transition'
            aria-label='GitHub'
          >
            <FaGithub className='text-sm' />
          </a>
          <a
            href={profileData.linkedin}
            target='_blank'
            rel='noreferrer'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition'
            aria-label='LinkedIn'
          >
            <FaLinkedin className='text-sm' />
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
