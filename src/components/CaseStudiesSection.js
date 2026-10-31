import React from 'react';
import { caseStudiesData } from './data';
import { FaArrowRight, FaCode } from 'react-icons/fa';

const CaseStudiesSection = ({ onSelectCaseStudy }) => {
  return (
    <section id='casestudies' className='py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 bg-warm-50/50 dark:bg-charcoal-950/40'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-left mb-12'>
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block'>
            Architectural Deep Dives
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Technical Case Studies
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            In-depth breakdowns of product requirements, complex state challenges, API integrations, and outcomes from production fintech systems.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className='p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm flex flex-col justify-between text-left hover:border-neutral-400 dark:hover:border-charcoal-700 transition'
            >
              <div>
                <div className='flex items-center justify-between mb-4'>
                  <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40'>
                    {study.badge}
                  </span>
                  <span className='text-xs text-neutral-400 flex items-center gap-1 font-mono'>
                    <FaCode className='text-[10px]' />
                    <span>{study.techStack.slice(0, 2).join(' · ')}</span>
                  </span>
                </div>

                <h3 className='text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1'>
                  {study.title}
                </h3>
                <p className='text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-4'>
                  {study.subtitle}
                </p>

                <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6'>
                  {study.overview}
                </p>

                <div className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 text-xs space-y-1 mb-6'>
                  <span className='font-bold text-neutral-900 dark:text-white block'>
                    Key Architectural Challenge:
                  </span>
                  <span className='text-neutral-600 dark:text-neutral-400 block leading-relaxed'>
                    {study.engineeringChallenges[0]}
                  </span>
                </div>
              </div>

              <div className='pt-4 border-t border-warm-200 dark:border-charcoal-800 flex items-center justify-between'>
                <div className='flex flex-wrap gap-1'>
                  {study.techStack.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className='text-[11px] px-2 py-0.5 rounded bg-warm-100 dark:bg-charcoal-800 text-neutral-600 dark:text-neutral-400'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectCaseStudy(study.id)}
                  className='inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition group'
                >
                  <span>Read Breakdown</span>
                  <FaArrowRight className='text-[10px] group-hover:translate-x-1 transition-transform' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
