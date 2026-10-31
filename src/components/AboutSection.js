import React from 'react';
import { aboutData } from './data';
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id='about' className='py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 bg-warm-50/50 dark:bg-charcoal-950/40'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-left mb-12'>
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block'>
            Background & Philosophy
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            About Dinesh Singh
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            A perspective on frontend engineering shaped by real product deadlines, high-stakes fintech operations, and user trust.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left'>
          {/* Narrative Column */}
          <div className='lg:col-span-7 space-y-4'>
            {aboutData.narrative.map((paragraph, idx) => (
              <p
                key={idx}
                className='text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm'
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Principles Column */}
          <div className='lg:col-span-5 space-y-4'>
            <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2'>
              Core Engineering Principles
            </h3>

            {aboutData.principles.map((principle, idx) => (
              <div
                key={idx}
                className='p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm'
              >
                <h4 className='text-sm font-bold text-neutral-900 dark:text-white mb-1 flex items-center gap-2'>
                  <FaCheckCircle className='text-blue-600 dark:text-blue-400 text-xs flex-shrink-0' />
                  <span>{principle.title}</span>
                </h4>
                <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-5'>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
