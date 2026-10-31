import React, { useEffect } from 'react';
import { FaTimes, FaPrint } from 'react-icons/fa';
import { profileData, experienceData, educationData } from './data';

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm'>
      <div
        className='relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xl text-charcoal-900 dark:text-neutral-100 p-6 sm:p-10 print:p-0 print:border-none print:shadow-none'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls (Hidden in Print) */}
        <div className='flex items-center justify-between pb-6 mb-6 border-b border-warm-200 dark:border-charcoal-800 print:hidden'>
          <div>
            <h2 className='text-xl font-bold'>Dinesh Singh — Resume</h2>
            <p className='text-xs text-neutral-500 dark:text-neutral-400'>
              Verified Professional Summary & Technical Profile
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <button
              onClick={handlePrint}
              className='inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
              title='Print or Save as PDF'
            >
              <FaPrint />
              <span>Print / Save PDF</span>
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

        {/* Printable Resume Content */}
        <div className='space-y-6 text-sm leading-relaxed text-left'>
          {/* Header */}
          <div className='text-center pb-4 border-b border-warm-200 dark:border-charcoal-800'>
            <h1 className='text-2xl sm:text-3xl font-extrabold tracking-tight'>
              Dinesh Singh
            </h1>
            <p className='text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5'>
              Software Developer · Frontend Engineer (2+ Years Experience)
            </p>
            <div className='flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400 mt-2'>
              <span>+91 9315446968</span>
              <span>•</span>
              <a href='mailto:dineshsingh9350@gmail.com' className='hover:underline'>
                dineshsingh9350@gmail.com
              </a>
              <span>•</span>
              <a
                href={profileData.linkedin}
                target='_blank'
                rel='noreferrer'
                className='hover:underline'
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={profileData.github}
                target='_blank'
                rel='noreferrer'
                className='hover:underline'
              >
                GitHub
              </a>
              <span>•</span>
              <span>Dehradun / Delhi, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2'>
              Professional Summary
            </h3>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Frontend Developer with 2+ years of experience building production-ready web
              applications using React and Next.js. Developed 60+ screens across fintech portals
              and client projects, including dashboards, authentication systems, and payment
              workflows. Skilled in state management, API integration, performance optimization,
              and delivering responsive UI solutions on schedule.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2'>
              Technical Skills
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs'>
              <div className='p-2.5 rounded-lg bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
                <span className='font-bold text-neutral-900 dark:text-neutral-100'>Core: </span>
                <span className='text-neutral-600 dark:text-neutral-300'>
                  React.js, Next.js (App/Pages Router), TypeScript, JavaScript (ES6+), Redux, Context API, Server Actions
                </span>
              </div>
              <div className='p-2.5 rounded-lg bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
                <span className='font-bold text-neutral-900 dark:text-neutral-100'>State & Data: </span>
                <span className='text-neutral-600 dark:text-neutral-300'>
                  Redux Toolkit, Redux Thunk, REST APIs, Axios, Formik / Yup
                </span>
              </div>
              <div className='p-2.5 rounded-lg bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
                <span className='font-bold text-neutral-900 dark:text-neutral-100'>UI & Design: </span>
                <span className='text-neutral-600 dark:text-neutral-300'>
                  Material UI, Tailwind CSS, Responsive Web Design, Figma, React Bootstrap
                </span>
              </div>
              <div className='p-2.5 rounded-lg bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
                <span className='font-bold text-neutral-900 dark:text-neutral-100'>Performance & Integrations: </span>
                <span className='text-neutral-600 dark:text-neutral-300'>
                  Hooks, Code Splitting, Memoization, Signzy APIs, AWS API Gateway, Git Workflows
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3'>
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
                        {exp.position}
                      </span>
                      <span className='text-neutral-500 dark:text-neutral-400'> — </span>
                      <span className='font-semibold text-blue-600 dark:text-blue-400'>
                        {exp.company}
                      </span>
                    </div>
                    <div className='text-xs text-neutral-500 dark:text-neutral-400'>
                      <span>{exp.period}</span> · <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className='space-y-1.5 list-disc list-inside text-xs text-neutral-700 dark:text-neutral-300 mt-2'>
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className='leading-relaxed'>
                        <strong className='text-neutral-900 dark:text-neutral-200'>{r.area}:</strong>{' '}
                        {r.detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2'>
              Education
            </h3>
            {educationData.map((edu) => (
              <div key={edu.id} className='flex justify-between items-baseline text-xs'>
                <div>
                  <span className='font-bold text-neutral-900 dark:text-neutral-100'>
                    {edu.degree}
                  </span>
                  <div className='text-neutral-600 dark:text-neutral-400'>
                    {edu.institution}
                  </div>
                </div>
                <div className='text-neutral-500 dark:text-neutral-400 text-right'>
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
