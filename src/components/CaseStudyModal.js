import React, { useEffect } from 'react';
import {
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCode,
  FaChartLine,
  FaLaptopCode,
  FaCogs,
} from 'react-icons/fa';
import TechBadge from './TechBadge';

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm transition-opacity'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xl text-neutral-900 dark:text-neutral-100 p-6 sm:p-8 text-left'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-800 transition'
          aria-label='Close Case Study'
        >
          <FaTimes className='w-4 h-4 sm:w-5 sm:h-5' />
        </button>

        {/* Header */}
        <div className='mb-6 pr-8 border-b border-warm-200 dark:border-charcoal-800 pb-6'>
          <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3'>
            {project.category}
          </span>
          <h2 className='text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2 leading-tight'>
            {project.title}
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed'>
            {project.tagline}
          </p>

          {/* Applied Tech Stack with Brand Icons */}
          <div className='flex flex-wrap items-center gap-1.5 mt-4 pt-2'>
            <span className='text-[11px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mr-1'>
              Stack:
            </span>
            {project.techStack.map((tech, idx) => (
              <TechBadge key={idx} name={tech} size='xs' />
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className='space-y-6 text-sm leading-relaxed'>
          {/* Overview & Problem Side-by-Side Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 sm:p-5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5 font-mono'>
                <FaCode />
                <span>Product Context</span>
              </h3>
              <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
                {project.overview}
              </p>
            </div>

            <div className='p-4 sm:p-5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5 font-mono'>
                <FaExclamationTriangle />
                <span>The Core Problem</span>
              </h3>
              <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
                {project.problem}
              </p>
            </div>
          </div>

          {/* Role & Engineering Scope */}
          <div className='p-4 sm:p-5 rounded-xl bg-white dark:bg-charcoal-850/60 border border-warm-200 dark:border-charcoal-800'>
            <h3 className='text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5 font-mono'>
              <FaLaptopCode />
              <span>My Role & Engineering Scope</span>
            </h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
              {project.contribution}
            </p>
          </div>

          {/* Technical Approach & Architecture */}
          <div className='p-4 sm:p-5 rounded-xl bg-white dark:bg-charcoal-850/60 border border-warm-200 dark:border-charcoal-800'>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5 font-mono'>
              <FaCogs />
              <span>Technical Architecture & Approach</span>
            </h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
              {project.implementation}
            </p>
          </div>

          {/* Difficult Challenges Solved */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5 font-mono'>
              <span>Critical Frontend Challenges Solved</span>
            </h3>
            <div className='space-y-2.5'>
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className='p-3.5 rounded-xl border border-warm-200 dark:border-charcoal-800 bg-warm-50/50 dark:bg-charcoal-850/50 flex items-start gap-3 text-xs sm:text-sm'
                >
                  <span className='w-5 h-5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5'>
                    0{idx + 1}
                  </span>
                  <div className='text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                    {challenge}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes & Results */}
          <div className='p-4 sm:p-5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40'>
            <h3 className='text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-1.5 font-mono'>
              <FaChartLine />
              <span>Shipped Outcomes & Verified Production Impact</span>
            </h3>
            <ul className='space-y-2'>
              {project.outcomes.map((outcome, idx) => (
                <li
                  key={idx}
                  className='flex items-start gap-2.5 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm'
                >
                  <FaCheckCircle className='text-emerald-500 mt-0.5 flex-shrink-0 text-sm' />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className='mt-6 pt-4 border-t border-warm-200 dark:border-charcoal-800 flex items-center justify-between'>
          <span className='text-xs text-neutral-400 font-mono hidden sm:inline'>
            Press ESC or click outside to close
          </span>
          <button
            onClick={onClose}
            className='px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition'
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
