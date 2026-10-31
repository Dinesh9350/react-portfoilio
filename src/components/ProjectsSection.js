import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import InteractiveDashboardDemo from './InteractiveDashboardDemo';
import InteractiveCheckoutDemo from './InteractiveCheckoutDemo';
import InteractiveOnboardingDemo from './InteractiveOnboardingDemo';
import { FaBookOpen, FaCode, FaCheckCircle, FaLaptopCode, FaCreditCard, FaUserShield } from 'react-icons/fa';

const ProjectsSection = ({ onSelectCaseStudy }) => {
  const [activeInteractiveDemo, setActiveInteractiveDemo] = useState('dashboard');

  const demoTabs = [
    { id: 'dashboard', label: '1. Transaction Dashboard', icon: FaLaptopCode },
    { id: 'checkout', label: '2. 3-Step Checkout Flow', icon: FaCreditCard },
    { id: 'onboarding', label: '3. Automated KYC Pipeline', icon: FaUserShield },
  ];

  return (
    <section id='projects' className='relative py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 overflow-hidden'>
      {/* Background Subtle Gradient Glow */}
      <div className='absolute top-1/3 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-left mb-14'
        >
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block font-mono'>
            Featured Production Systems
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Production Fintech Applications & Case Studies
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2 leading-relaxed'>
            A showcase of financial portals, checkout gateways, automated compliance workflows, and digital brand experiences built for SecurePay.
          </p>
        </motion.div>

        {/* Interactive Experience Demonstrator Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='p-6 sm:p-8 rounded-2xl bg-warm-100/70 dark:bg-charcoal-900/90 border border-warm-300 dark:border-charcoal-750 mb-16 text-left shadow-sm backdrop-blur-sm'
        >
          <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6'>
            <div>
              <span className='text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono flex items-center gap-1.5'>
                <span className='inline-block w-2 h-2 rounded-full bg-blue-500 animate-ping' />
                Live Interactive Component Previews
              </span>
              <h3 className='text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1'>
                Test Production UI Workflows Directly
              </h3>
              <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1'>
                Experience the real UI state machines, input validation, and Maker-Checker logic engineered for production fintech portals.
              </p>
            </div>

            {/* Interactive Demo Selector Tabs */}
            <div className='flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-warm-200/80 dark:bg-charcoal-850 border border-warm-300 dark:border-charcoal-700 text-xs font-semibold self-start lg:self-auto'>
              {demoTabs.map((tab) => {
                const isActive = activeInteractiveDemo === tab.id;
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInteractiveDemo(tab.id)}
                    className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-xs font-bold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    <IconComponent className='text-xs opacity-75' />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Render Active Interactive Demo with Smooth Animated Fade */}
          <div className='mt-6'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeInteractiveDemo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                {activeInteractiveDemo === 'dashboard' && <InteractiveDashboardDemo />}
                {activeInteractiveDemo === 'checkout' && <InteractiveCheckoutDemo />}
                {activeInteractiveDemo === 'onboarding' && <InteractiveOnboardingDemo />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Detailed Project Case Studies Editorial List */}
        <div className='space-y-12'>
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className='p-6 sm:p-10 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm text-left hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-300'
            >
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
                {/* Left: Project Narrative & Context */}
                <div className='lg:col-span-7 space-y-4'>
                  <div className='flex items-center gap-2.5'>
                    <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900'>
                      {project.category}
                    </span>
                    <span className='text-xs text-neutral-400 font-mono'>
                      Project 0{index + 1}
                    </span>
                  </div>

                  <h3 className='text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight'>
                    {project.title}
                  </h3>

                  <p className='text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-300'>
                    {project.tagline}
                  </p>

                  <p className='text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                    {project.overview}
                  </p>

                  {/* Problem & Contribution Highlights */}
                  <div className='p-4 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 space-y-2 text-xs'>
                    <div>
                      <strong className='text-neutral-900 dark:text-white'>The Problem: </strong>
                      <span className='text-neutral-600 dark:text-neutral-300'>{project.problem}</span>
                    </div>
                    <div>
                      <strong className='text-neutral-900 dark:text-white'>My Contribution: </strong>
                      <span className='text-neutral-600 dark:text-neutral-300'>{project.contribution}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className='flex flex-wrap gap-1.5 pt-2'>
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-2.5 py-1 rounded-md text-xs font-medium bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-750 transition hover:border-blue-500/40'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Engineering Challenges & Outomes */}
                <div className='lg:col-span-5 p-6 rounded-xl bg-warm-50/70 dark:bg-charcoal-850/70 border border-warm-200 dark:border-charcoal-800 flex flex-col justify-between h-full space-y-6'>
                  <div>
                    <h4 className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-1.5 font-mono'>
                      <FaCode />
                      <span>Key Architectural Challenges Solved</span>
                    </h4>

                    <ul className='space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300 mb-6'>
                      {project.challenges.map((c, idx) => (
                        <li key={idx} className='flex items-start gap-2'>
                          <span className='text-blue-600 dark:text-blue-400 font-bold'>•</span>
                          <span className='leading-relaxed'>{c}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-1.5 font-mono'>
                      <FaCheckCircle className='text-emerald-500' />
                      <span>Shipped Outcomes</span>
                    </h4>

                    <ul className='space-y-2 text-xs text-neutral-700 dark:text-neutral-300'>
                      {project.outcomes.map((o, idx) => (
                        <li key={idx} className='flex items-start gap-2'>
                          <span className='text-emerald-600 dark:text-emerald-400 font-bold'>✓</span>
                          <span className='leading-relaxed'>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='pt-4 border-t border-warm-200 dark:border-charcoal-750 flex items-center justify-between'>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectCaseStudy(project.id)}
                      className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white shadow-xs transition'
                    >
                      <FaBookOpen className='text-xs' />
                      <span>Read Full Technical Case Study</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
