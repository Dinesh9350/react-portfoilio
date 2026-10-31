import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaLock, FaBookOpen } from 'react-icons/fa';

const ProjectCard = ({ project, onSelectCaseStudy }) => {
  const {
    title,
    category,
    description,
    highlights,
    tech,
    img,
    live,
    code,
    isProduction,
    hasCaseStudy,
    caseStudyId,
  } = project;

  return (
    <article className='flex flex-col rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 hover:border-neutral-400 dark:hover:border-charcoal-700 transition-all duration-300 shadow-sm overflow-hidden text-left'>
      {/* Project Visual / Thumbnail */}
      <div className='relative h-48 sm:h-56 w-full overflow-hidden bg-warm-100 dark:bg-charcoal-950 border-b border-warm-200 dark:border-charcoal-800'>
        <img
          src={img}
          alt={title}
          loading='lazy'
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
        />
        <div className='absolute top-3 left-3 flex items-center gap-1.5'>
          <span
            className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${
              isProduction
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-neutral-800/90 text-neutral-200 backdrop-blur-sm'
            }`}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className='p-6 flex flex-col flex-1 justify-between'>
        <div>
          <h3 className='text-xl font-bold text-neutral-900 dark:text-white mb-2 leading-snug'>
            {title}
          </h3>

          <p className='text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4'>
            {description}
          </p>

          {/* Highlights List */}
          {highlights && highlights.length > 0 && (
            <ul className='mb-5 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400'>
              {highlights.map((item, idx) => (
                <li key={idx} className='flex items-start gap-2'>
                  <span className='text-blue-600 dark:text-blue-400 font-bold'>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technology Badges */}
          <div className='flex flex-wrap gap-1.5 mb-6'>
            {tech.map((t, idx) => (
              <span
                key={idx}
                className='px-2.5 py-0.5 rounded text-[11px] font-medium bg-warm-100 dark:bg-charcoal-850 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-750'
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className='pt-4 border-t border-warm-200 dark:border-charcoal-800 flex flex-wrap items-center justify-between gap-3'>
          <div className='flex items-center gap-2'>
            {hasCaseStudy && (
              <button
                onClick={() => onSelectCaseStudy(caseStudyId)}
                className='inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition'
              >
                <FaBookOpen />
                <span>Read Case Study</span>
              </button>
            )}

            {live && (
              <a
                href={live}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className='text-[10px]' />
              </a>
            )}

            {code && (
              <a
                href={code}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-warm-300 dark:border-charcoal-700 hover:bg-warm-100 dark:hover:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 transition'
              >
                <FaGithub />
                <span>Code</span>
              </a>
            )}
          </div>

          {isProduction && !code && (
            <div
              title='Proprietary Enterprise Codebase (Internal SecurePay Repo)'
              className='inline-flex items-center gap-1 text-[11px] font-medium text-neutral-400 dark:text-neutral-500'
            >
              <FaLock className='text-[10px]' />
              <span>Production Codebase</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
