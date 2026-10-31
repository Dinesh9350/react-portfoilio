import React from 'react';
import profilePhoto from '../assets/Dinesh.jpg';
import { profileData } from './data';
import { FaArrowRight, FaFileAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = ({ onOpenResume }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-warm-200 dark:border-charcoal-800/80'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Top Hero Layout: Text & Profile Photo */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
          <div className='lg:col-span-8 text-left'>
            {/* Eyebrow */}
            <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 mb-6'>
              <span className='w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse'></span>
              <span>{profileData.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12] mb-6'>
              Building polished, scalable web experiences.
            </h1>

            {/* Supporting Text */}
            <p className='text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed mb-8'>
              {profileData.bio}
            </p>

            {/* CTAs */}
            <div className='flex flex-wrap items-center gap-3 sm:gap-4 mb-8'>
              <button
                onClick={() => scrollTo('work')}
                className='px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition shadow-sm flex items-center gap-2 group'
              >
                <span>Explore My Work</span>
                <FaArrowRight className='text-xs group-hover:translate-x-0.5 transition-transform' />
              </button>

              <button
                onClick={onOpenResume}
                className='px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-charcoal-850 hover:bg-warm-100 dark:hover:bg-charcoal-800 text-neutral-800 dark:text-neutral-200 border border-warm-300 dark:border-charcoal-700 transition flex items-center gap-2'
              >
                <FaFileAlt className='text-xs text-blue-600 dark:text-blue-400' />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className='text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white px-2 py-3 underline-offset-4 hover:underline transition'
              >
                Contact Me →
              </button>
            </div>

            {/* Tech Stack Indicator */}
            <div className='pt-6 border-t border-warm-200 dark:border-charcoal-800/80'>
              <span className='block text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5'>
                Core Technology Stack
              </span>
              <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                {profileData.techStackHighlights.map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-2.5 py-1 rounded-md text-xs font-medium bg-warm-100 dark:bg-charcoal-850 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-750'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Card & Photo */}
          <div className='lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center'>
            <div className='relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden bg-warm-100 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 shadow-lg p-1.5'>
              <img
                src={profilePhoto}
                alt='Dinesh Singh'
                className='w-full h-full object-cover rounded-xl'
                loading='eager'
              />
              <div className='absolute bottom-3 right-3 bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-sm border border-warm-200 dark:border-charcoal-700 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 shadow-sm'>
                <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
                <span>Active Developer</span>
              </div>
            </div>

            <div className='mt-4 flex items-center gap-3 text-neutral-500 dark:text-neutral-400 text-lg'>
              <a
                href={profileData.github}
                target='_blank'
                rel='noreferrer'
                className='p-2 rounded-lg hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                aria-label='GitHub Profile'
              >
                <FaGithub />
              </a>
              <a
                href={profileData.linkedin}
                target='_blank'
                rel='noreferrer'
                className='p-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                aria-label='LinkedIn Profile'
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className='p-2 rounded-lg hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-850 transition'
                aria-label='Email Dinesh'
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Real Metrics Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-warm-200 dark:border-charcoal-800/80'>
          {profileData.metrics.map((m, idx) => (
            <div
              key={idx}
              className='p-4 rounded-xl bg-white dark:bg-charcoal-900/80 border border-warm-200 dark:border-charcoal-800'
            >
              <div className='text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight'>
                {m.value}
              </div>
              <div className='text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-0.5'>
                {m.label}
              </div>
              <div className='text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5'>
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
