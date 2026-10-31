import React from 'react';
import { skillsData } from '../data/portfolioData';

const SkillsSection = () => {
  return (
    <section id='skills' className='py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-left mb-14'>
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block font-mono'>
            Technical Competence Matrix
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Skills Organized by Engineering Discipline
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            Technologies utilized in shipping production applications, categorized honestly with concrete architectural context.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skillsData.map((disc, idx) => (
            <div
              key={idx}
              className='p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm text-left'
            >
              <div className='mb-6 pb-4 border-b border-warm-200 dark:border-charcoal-800'>
                <h3 className='text-xl font-bold text-neutral-900 dark:text-white'>
                  {disc.discipline}
                </h3>
                <p className='text-xs text-neutral-500 dark:text-neutral-400 mt-1'>
                  {disc.description}
                </p>
              </div>

              <div className='space-y-3'>
                {disc.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 flex items-center justify-between gap-3'
                  >
                    <div>
                      <span className='font-bold text-sm text-neutral-900 dark:text-white'>
                        {s.name}
                      </span>
                      <span className='block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5'>
                        {s.highlight}
                      </span>
                    </div>

                    <span className='text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-warm-200/60 dark:bg-charcoal-750 text-neutral-700 dark:text-neutral-300'>
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
