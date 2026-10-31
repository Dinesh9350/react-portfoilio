import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './data';

const FeaturedProjects = ({ onSelectCaseStudy }) => {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'ALL') return true;
    if (filter === 'FINTECH') return project.isProduction;
    if (filter === 'APPS') return !project.isProduction;
    return true;
  });

  return (
    <section id='work' className='py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left'>
          <div>
            <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block'>
              Featured Products & Engineering Work
            </span>
            <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
              Production Applications & Selected Projects
            </h2>
            <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
              Real-world payment portals, checkout experiences, KYC workflows, and client web applications engineered with Next.js and React.
            </p>
          </div>

          {/* Filter Pills */}
          <div className='flex items-center gap-1.5 p-1 rounded-xl bg-warm-100 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 self-start md:self-auto'>
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                filter === 'ALL'
                  ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('FINTECH')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                filter === 'FINTECH'
                  ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Fintech Production (4)
            </button>
            <button
              onClick={() => setFilter('APPS')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                filter === 'APPS'
                  ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Client & Web Apps (4)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectCaseStudy={onSelectCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
