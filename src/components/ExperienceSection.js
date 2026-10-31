import React from 'react';
import { experienceData, educationData } from './data';
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from 'react-icons/fa';

const ExperienceSection = () => {
  return (
    <section id='experience' className='py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-left mb-12'>
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block'>
            Work History & Track Record
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Professional Experience
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            2+ years of hands-on production engineering focused on financial software, complex state workflows, and responsive web products.
          </p>
        </div>

        {/* Experience Cards */}
        <div className='space-y-8 mb-16'>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className='p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm text-left'
            >
              {/* Header Info */}
              <div className='flex flex-wrap items-start justify-between gap-4 pb-6 mb-6 border-b border-warm-200 dark:border-charcoal-800'>
                <div>
                  <div className='flex items-center gap-2.5 flex-wrap'>
                    <h3 className='text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white'>
                      {exp.position}
                    </h3>
                    <span className='text-neutral-400 dark:text-neutral-600'>·</span>
                    <span className='text-lg font-bold text-blue-600 dark:text-blue-400'>
                      {exp.company}
                    </span>
                    <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-700'>
                      {exp.badge}
                    </span>
                  </div>

                  <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl leading-relaxed'>
                    {exp.productContext}
                  </p>
                </div>

                <div className='flex flex-col sm:items-end text-xs text-neutral-500 dark:text-neutral-400 gap-1'>
                  <div className='flex items-center gap-1.5'>
                    <FaCalendarAlt className='text-neutral-400' />
                    <span>{exp.period}</span>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <FaMapMarkerAlt className='text-neutral-400' />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className='space-y-4 mb-6'>
                <h4 className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500'>
                  Shipped Responsibilities & Engineering Decisions
                </h4>
                <div className='grid grid-cols-1 gap-3'>
                  {exp.responsibilities.map((r, idx) => (
                    <div
                      key={idx}
                      className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'
                    >
                      <span className='font-bold text-sm text-neutral-900 dark:text-white block sm:inline'>
                        {r.area}:{' '}
                      </span>
                      <span className='text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                        {r.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className='flex flex-wrap items-center gap-1.5 pt-4 border-t border-warm-200 dark:border-charcoal-800'>
                <span className='text-xs font-semibold text-neutral-500 mr-2'>
                  Technologies:
                </span>
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className='px-2 py-0.5 rounded text-xs font-medium bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-750'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className='text-left'>
          <h3 className='text-lg font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2'>
            <FaGraduationCap className='text-purple-600 dark:text-purple-400' />
            <span>Formal Education</span>
          </h3>

          <div className='space-y-4'>
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className='p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4'
              >
                <div>
                  <h4 className='text-base font-bold text-neutral-900 dark:text-white'>
                    {edu.degree}
                  </h4>
                  <p className='text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium mt-0.5'>
                    {edu.institution}
                  </p>
                  <p className='text-xs text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl'>
                    {edu.highlights}
                  </p>
                </div>

                <div className='text-xs text-neutral-500 dark:text-neutral-400 sm:text-right flex-shrink-0'>
                  <div>{edu.period}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
