import React from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const ExperienceSection = () => {
  return (
    <section id='experience' className='py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 bg-warm-50/50 dark:bg-charcoal-950/40'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-left mb-14'>
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block font-mono'>
            Professional Employment History
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Work Experience & Track Record
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            Real-world product engineering experience in production fintech infrastructure, payment workflows, and agency client applications.
          </p>
        </div>

        {/* Roles */}
        <div className='space-y-10 mb-16'>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className='p-6 sm:p-10 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm text-left'
            >
              {/* Header */}
              <div className='flex flex-wrap items-start justify-between gap-4 pb-6 mb-6 border-b border-warm-200 dark:border-charcoal-800'>
                <div>
                  <div className='flex items-center gap-3 flex-wrap'>
                    <h3 className='text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight'>
                      {exp.role}
                    </h3>
                    <span className='text-neutral-400'>·</span>
                    <span className='text-xl font-bold text-blue-600 dark:text-blue-400'>
                      {exp.company}
                    </span>
                    <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-700 font-mono'>
                      {exp.badge}
                    </span>
                  </div>

                  <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl leading-relaxed'>
                    {exp.summary}
                  </p>
                </div>

                <div className='flex flex-col sm:items-end text-xs text-neutral-500 dark:text-neutral-400 gap-1 font-mono'>
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

              {/* Verified Achievements & Scope */}
              <div className='space-y-3 mb-6'>
                <h4 className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3'>
                  Product Challenges, Responsibilities & Shipped Scope
                </h4>

                <div className='grid grid-cols-1 gap-3'>
                  {exp.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className='p-4 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'
                    >
                      <h5 className='text-sm font-bold text-neutral-900 dark:text-white mb-1 flex items-center gap-2'>
                        <FaCheckCircle className='text-blue-600 dark:text-blue-400 text-xs flex-shrink-0' />
                        <span>{item.title}</span>
                      </h5>
                      <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pl-5'>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className='flex flex-wrap items-center gap-1.5 pt-4 border-t border-warm-200 dark:border-charcoal-800'>
                <span className='text-xs font-bold text-neutral-400 dark:text-neutral-500 mr-2 uppercase tracking-wider'>
                  Applied Stack:
                </span>
                {exp.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className='px-2.5 py-0.5 rounded text-xs font-medium bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-750 font-mono'
                  >
                    {t}
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
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className='p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4'
              >
                <div>
                  <h4 className='text-base font-bold text-neutral-900 dark:text-white'>
                    {edu.degree}
                  </h4>
                  <p className='text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold mt-0.5'>
                    {edu.institution}
                  </p>
                  <p className='text-xs text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl leading-relaxed'>
                    {edu.details}
                  </p>
                </div>

                <div className='text-xs text-neutral-500 dark:text-neutral-400 sm:text-right flex-shrink-0 font-mono'>
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
