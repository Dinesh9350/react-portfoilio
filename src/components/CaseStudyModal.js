import React, { useEffect } from 'react';
import { FaTimes, FaCheckCircle, FaExclamationTriangle, FaCode, FaChartLine } from 'react-icons/fa';

const CaseStudyModal = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xl text-charcoal-900 dark:text-neutral-100 p-6 sm:p-10'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-800 transition'
          aria-label='Close Case Study'
        >
          <FaTimes className='w-5 h-5' />
        </button>

        {/* Header */}
        <div className='mb-8 pr-8'>
          <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3'>
            {caseStudy.badge}
          </span>
          <h2 className='text-2xl sm:text-4xl font-extrabold tracking-tight mb-2'>
            {caseStudy.title}
          </h2>
          <p className='text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-medium'>
            {caseStudy.subtitle}
          </p>

          <div className='flex flex-wrap gap-2 mt-4'>
            {caseStudy.techStack.map((tech, idx) => (
              <span
                key={idx}
                className='px-2.5 py-1 rounded-md text-xs font-medium bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-700'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className='space-y-8 text-sm sm:text-base leading-relaxed'>
          {/* Overview & Problem */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
            <div>
              <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5'>
                <FaCode />
                <span>Product Context & Overview</span>
              </h3>
              <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
                {caseStudy.overview}
              </p>
            </div>
            <div>
              <h3 className='text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5'>
                <FaExclamationTriangle />
                <span>The Problem & Requirements</span>
              </h3>
              <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Role & Scope */}
          <div>
            <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-2'>
              My Role & Engineering Scope
            </h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
              {caseStudy.roleScope}
            </p>
          </div>

          {/* Technical Approach */}
          <div>
            <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-3'>
              Technical Approach & Architecture
            </h3>
            <ul className='space-y-2.5'>
              {caseStudy.technicalApproach.map((item, idx) => (
                <li
                  key={idx}
                  className='flex items-start gap-3 p-3 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 text-neutral-700 dark:text-neutral-300 text-sm'
                >
                  <FaCheckCircle className='text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 text-sm' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Difficult Engineering Challenges */}
          <div>
            <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-3'>
              Difficult Frontend Challenges Solved
            </h3>
            <div className='space-y-2.5'>
              {caseStudy.engineeringChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className='p-3.5 rounded-xl border border-warm-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 text-neutral-700 dark:text-neutral-300 text-sm'
                >
                  <span className='font-semibold text-neutral-900 dark:text-white'>
                    Challenge {idx + 1}:
                  </span>{' '}
                  {challenge}
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes & Results */}
          <div className='p-5 sm:p-6 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40'>
            <h3 className='text-base font-bold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2'>
              <FaChartLine />
              <span>Shipped Outcomes & Real Impact</span>
            </h3>
            <ul className='space-y-2'>
              {caseStudy.outcomes.map((outcome, idx) => (
                <li
                  key={idx}
                  className='flex items-start gap-2.5 text-neutral-800 dark:text-neutral-200 text-sm'
                >
                  <span className='text-blue-600 dark:text-blue-400 font-bold'>•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className='mt-8 pt-6 border-t border-warm-200 dark:border-charcoal-800 flex justify-end'>
          <button
            onClick={onClose}
            className='px-5 py-2.5 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition'
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
