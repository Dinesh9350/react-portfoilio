import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import InteractiveHeroPreview from './InteractiveHeroPreview';
import { FaArrowRight, FaDownload, FaFileAlt, FaGithub, FaLinkedin, FaCopy, FaCheck } from 'react-icons/fa';

const HeroSection = ({ onOpenResume }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className='relative pt-24 sm:pt-36 pb-12 sm:pb-24 border-b border-warm-200 dark:border-charcoal-800/80 overflow-hidden bg-grid-pattern'>
      {/* Animated Ambient Radial Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none'
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-20 right-10 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none'
      />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Left Column: Positioning & Copy */}
          <div className='lg:col-span-7 text-left'>
            {/* Identity & Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60 backdrop-blur-md mb-6 shadow-xs'
            >
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400'></span>
              </span>
              <span>{personalInfo.name} · {personalInfo.techBadge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className='text-[26px] xs:text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.18] sm:leading-[1.14] mb-5 sm:mb-6'
            >
              Engineering{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400'>
                thoughtful interfaces
              </span>{' '}
              for complex products.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className='text-sm sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed mb-6 sm:mb-8'
            >
              {personalInfo.supportingCopy}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8'
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('projects')}
                className='w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition shadow-sm hover:shadow-md flex items-center justify-center gap-2 group'
              >
                <span>Explore My Work</span>
                <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform' />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                className='w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-charcoal-850 hover:bg-warm-100 dark:hover:bg-charcoal-800 text-neutral-800 dark:text-neutral-200 border border-warm-300 dark:border-charcoal-700 transition flex items-center justify-center gap-2 shadow-xs hover:border-blue-500/50 dark:hover:border-blue-500/50'
              >
                <FaFileAlt className='text-xs text-blue-600 dark:text-blue-400' />
                <span>View Resume</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.resumeUrl}
                download='Dinesh-Singh-Resume.pdf'
                className='w-full sm:w-auto px-4 py-3 rounded-xl text-sm font-semibold bg-warm-100 dark:bg-charcoal-900 hover:bg-warm-200 dark:hover:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-800 transition flex items-center justify-center gap-2 shadow-xs'
                title='Direct PDF Download'
              >
                <FaDownload className='text-xs text-neutral-500 dark:text-neutral-400' />
                <span>PDF</span>
              </motion.a>

              <motion.button
                whileHover={{ x: 3 }}
                onClick={() => scrollTo('contact')}
                className='text-sm font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white px-2 py-2 text-center underline-offset-4 hover:underline transition'
              >
                Contact Me →
              </motion.button>
            </motion.div>

            {/* Experience Indicator & Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className='pt-6 border-t border-warm-200 dark:border-charcoal-800/80 flex flex-wrap items-center justify-between gap-4'
            >
              <div className='flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400'>
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
                <span>{personalInfo.experienceBadge}</span>
              </div>

              <div className='flex items-center gap-2 sm:gap-2.5 text-neutral-500 dark:text-neutral-400 text-sm'>
                <button
                  onClick={handleCopyEmail}
                  className='inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-warm-100 dark:hover:bg-charcoal-850 transition border border-warm-200 dark:border-charcoal-700 shadow-xs'
                  title='Click to copy email address'
                >
                  {emailCopied ? (
                    <>
                      <FaCheck className='text-emerald-500 text-[10px]' />
                      <span className='text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]'>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className='text-neutral-400 text-[10px]' />
                      <span className='text-[11px]'>{personalInfo.email}</span>
                    </>
                  )}
                </button>

                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  href={personalInfo.github}
                  target='_blank'
                  rel='noreferrer'
                  className='p-2 rounded-lg hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                  aria-label='GitHub Profile'
                  title='GitHub'
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='p-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                  aria-label='LinkedIn Profile (dinesh-singh3)'
                  title='LinkedIn (dinesh-singh3)'
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Custom-built Interactive Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className='lg:col-span-5'
          >
            <InteractiveHeroPreview />
          </motion.div>
        </div>

        {/* Real Production Metrics Strip with Staggered Entrance */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-warm-200 dark:border-charcoal-800/80 text-left'>
          {personalInfo.stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className='p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-charcoal-900/80 border border-warm-200 dark:border-charcoal-800 backdrop-blur-sm shadow-xs hover:shadow-md hover:border-blue-500/30 transition-all duration-300'
            >
              <div className='text-xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight font-mono'>
                {s.value}
              </div>
              <div className='text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-1'>
                {s.label}
              </div>
              <div className='text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5'>
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
