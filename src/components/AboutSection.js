import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../data/portfolioData';
import { FaCheckCircle, FaCompass } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id='about' className='relative py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 bg-warm-50/50 dark:bg-charcoal-950/40 overflow-hidden'>
      {/* Ambient background decoration */}
      <div className='absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none' />

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
            <FaCompass className='text-xs' />
            <span>Engineering Philosophy</span>
          </span>
          <h2 className='text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            About {personalInfo.name}
          </h2>
          <p className='text-xs sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            A perspective on frontend engineering shaped by real product deadlines, high-stakes fintech operations, and user trust.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start text-left'>
          {/* Narrative Column */}
          <div className='lg:col-span-7 space-y-3.5 sm:space-y-4'>
            {aboutData.narrative.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className='text-xs sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed p-4 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm hover:border-warm-300 dark:hover:border-charcoal-700 transition'
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Principles Column */}
          <div className='lg:col-span-5 space-y-3 sm:space-y-3.5'>
            <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2 font-mono'>
              Core Engineering Principles
            </h3>

            {aboutData.principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className='p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm hover:border-blue-400/40 dark:hover:border-blue-500/40 transition-all duration-300'
              >
                <h4 className='text-sm font-bold text-neutral-900 dark:text-white mb-1 flex items-center gap-2'>
                  <FaCheckCircle className='text-blue-600 dark:text-blue-400 text-xs flex-shrink-0' />
                  <span>{principle.title}</span>
                </h4>
                <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-5'>
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
