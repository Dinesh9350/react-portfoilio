import React, { useEffect } from 'react';
import { FaTimes, FaPrint, FaDownload } from 'react-icons/fa';
import { personalInfo, experienceData, educationData, skillsData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm'>
      <div
        className='relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xl text-charcoal-900 dark:text-neutral-100 p-6 sm:p-10 print:p-0 print:border-none print:shadow-none text-left'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls */}
        <div className='flex items-center justify-between pb-6 mb-6 border-b border-warm-200 dark:border-charcoal-800 print:hidden'>
          <div>
            <h2 className='text-xl font-bold'>Dinesh Singh — Professional Resume</h2>
            <p className='text-xs text-neutral-500 dark:text-neutral-400'>
              Single Source of Truth · 2+ Years Experience
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <a
              href={personalInfo.resumeUrl}
              download='Dinesh-Singh-Resume.pdf'
              className='inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
              title='Download PDF'
            >
              <FaDownload />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => window.print()}
              className='inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-warm-300 dark:border-charcoal-700 hover:bg-warm-100 dark:hover:bg-charcoal-800 text-neutral-800 dark:text-neutral-200 transition'
              title='Print'
            >
              <FaPrint />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className='p-2 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-800 transition'
              aria-label='Close Resume'
            >
              <FaTimes className='w-4 h-4' />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className='space-y-6 text-sm leading-relaxed'>
          {/* Header */}
          <div className='text-center pb-4 border-b border-warm-200 dark:border-charcoal-800'>
            <h1 className='text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
              {personalInfo.name}
            </h1>
            <p className='text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5'>
              Software Developer · Frontend Developer
            </p>
            <div className='flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400 mt-2 font-mono'>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className='hover:underline'>
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target='_blank' rel='noreferrer' className='hover:underline text-blue-600 dark:text-blue-400 font-semibold'>
                LinkedIn (dinesh-singh3)
              </a>
              <span>•</span>
              <a href={personalInfo.github} target='_blank' rel='noreferrer' className='hover:underline'>
                GitHub
              </a>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-mono'>
              Professional Summary
            </h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
              Frontend Developer with 2+ years of experience building production-ready web applications using React and Next.js. Developed 60+ screens across fintech portals and client projects, including dashboards, authentication systems, and payment workflows. Skilled in state management, API integration, performance optimization, and delivering responsive UI solutions on schedule.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-mono'>
              Technical Skills
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs'>
              {skillsData.map((disc, idx) => (
                <div
                  key={idx}
                  className='p-2.5 rounded-lg bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'
                >
                  <span className='font-bold text-neutral-900 dark:text-neutral-100'>
                    {disc.discipline}:{' '}
                  </span>
                  <span className='text-neutral-600 dark:text-neutral-300'>
                    {disc.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 font-mono'>
              Professional Experience
            </h3>
            <div className='space-y-4'>
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className='pb-3 border-b last:border-none border-warm-200 dark:border-charcoal-800'
                >
                  <div className='flex flex-wrap justify-between items-baseline mb-1'>
                    <div>
                      <span className='font-bold text-base text-neutral-900 dark:text-neutral-100'>
                        {exp.role}
                      </span>
                      <span className='text-neutral-400'> — </span>
                      <span className='font-bold text-blue-600 dark:text-blue-400'>
                        {exp.company}
                      </span>
                    </div>
                    <div className='text-xs text-neutral-500 dark:text-neutral-400 font-mono'>
                      <span>{exp.period}</span> · <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className='space-y-1.5 list-disc list-inside text-xs text-neutral-700 dark:text-neutral-300 mt-2'>
                    {exp.achievements.map((a, idx) => (
                      <li key={idx} className='leading-relaxed'>
                        <strong className='text-neutral-900 dark:text-neutral-200'>
                          {a.title}:
                        </strong>{' '}
                        {a.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-mono'>
              Education
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} className='flex justify-between items-baseline text-xs'>
                <div>
                  <span className='font-bold text-neutral-900 dark:text-neutral-100'>
                    {edu.degree}
                  </span>
                  <div className='text-neutral-600 dark:text-neutral-400'>
                    {edu.institution}
                  </div>
                </div>
                <div className='text-neutral-500 dark:text-neutral-400 text-right font-mono'>
                  <div>{edu.period}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
