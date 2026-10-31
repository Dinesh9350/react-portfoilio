import React from 'react';
import { personalInfo } from '../data/portfolioData';
import InteractiveHeroPreview from './InteractiveHeroPreview';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = ({ onOpenResume }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className='pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-warm-200 dark:border-charcoal-800/80'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Left Column: Positioning & Copy */}
          <div className='lg:col-span-7 text-left'>
            {/* Identity & Eyebrow */}
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 mb-5'>
              <span className='w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse'></span>
              <span>{personalInfo.name} · {personalInfo.techBadge}</span>
            </div>

            {/* Headline */}
            <h1 className='text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.14] mb-6'>
              {personalInfo.headline}
            </h1>

            {/* Supporting Copy */}
            <p className='text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8'>
              {personalInfo.supportingCopy}
            </p>

            {/* CTAs */}
            <div className='flex flex-wrap items-center gap-3 sm:gap-4 mb-8'>
              <button
                onClick={() => scrollTo('projects')}
                className='px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition shadow-sm flex items-center gap-2 group'
              >
                <span>Explore My Work</span>
                <FaArrowRight className='text-xs group-hover:translate-x-0.5 transition-transform' />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download='Dinesh-Singh-Resume.pdf'
                className='px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-charcoal-850 hover:bg-warm-100 dark:hover:bg-charcoal-800 text-neutral-800 dark:text-neutral-200 border border-warm-300 dark:border-charcoal-700 transition flex items-center gap-2 shadow-xs'
              >
                <FaDownload className='text-xs text-blue-600 dark:text-blue-400' />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className='text-sm font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white px-2 py-3 underline-offset-4 hover:underline transition'
              >
                Contact Me →
              </button>
            </div>

            {/* Experience Indicator & Social Links */}
            <div className='pt-6 border-t border-warm-200 dark:border-charcoal-800/80 flex flex-wrap items-center justify-between gap-4'>
              <div className='flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400'>
                <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
                <span>{personalInfo.experienceBadge}</span>
              </div>

              <div className='flex items-center gap-3 text-neutral-500 dark:text-neutral-400 text-base'>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noreferrer'
                  className='p-2 rounded-lg hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                  aria-label='GitHub Profile'
                  title='GitHub'
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='p-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                  aria-label='LinkedIn Profile'
                  title='LinkedIn'
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className='p-2 rounded-lg hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                  aria-label='Email Dinesh'
                  title='Email'
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom-built Interactive Composition */}
          <div className='lg:col-span-5'>
            <InteractiveHeroPreview />
          </div>
        </div>

        {/* Real Production Metrics Strip */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-warm-200 dark:border-charcoal-800/80 text-left'>
          {personalInfo.stats.map((s, idx) => (
            <div
              key={idx}
              className='p-4 rounded-xl bg-white dark:bg-charcoal-900/80 border border-warm-200 dark:border-charcoal-800'
            >
              <div className='text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight font-mono'>
                {s.value}
              </div>
              <div className='text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5'>
                {s.label}
              </div>
              <div className='text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5'>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
