import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { FaLayerGroup } from 'react-icons/fa';

const SkillsSection = () => {
  return (
    <section id='skills' className='relative py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-left mb-14'
        >
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block font-mono flex items-center gap-1.5'>
            <FaLayerGroup className='text-xs' />
            <span>Technical Competence Matrix</span>
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Skills Organized by Engineering Discipline
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            Technologies utilized in shipping production applications, categorized honestly with concrete architectural context.
          </p>
        </motion.div>

        {/* Disciplines Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skillsData.map((disc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className='p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm text-left hover:border-blue-400/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all duration-300'
            >
              <div className='mb-6 pb-4 border-b border-warm-200 dark:border-charcoal-800 flex items-start justify-between gap-4'>
                <div>
                  <h3 className='text-xl font-bold text-neutral-900 dark:text-white'>
                    {disc.discipline}
                  </h3>
                  <p className='text-xs text-neutral-500 dark:text-neutral-400 mt-1'>
                    {disc.description}
                  </p>
                </div>
                <span className='text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/50'>
                  0{idx + 1}
                </span>
              </div>

              <div className='space-y-3'>
                {disc.skills.map((s, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    className='p-3.5 rounded-xl bg-warm-50/80 dark:bg-charcoal-850/80 border border-warm-200 dark:border-charcoal-800 flex items-center justify-between gap-3 transition hover:border-warm-300 dark:hover:border-charcoal-700'
                  >
                    <div>
                      <span className='font-bold text-sm text-neutral-900 dark:text-white'>
                        {s.name}
                      </span>
                      <span className='block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5'>
                        {s.highlight}
                      </span>
                    </div>

                    <span className='text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-warm-200/60 dark:bg-charcoal-750 text-neutral-700 dark:text-neutral-300 flex-shrink-0'>
                      {s.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
