import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCode,
  FaChartLine,
  FaLaptopCode,
  FaProjectDiagram,
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaLayerGroup,
  FaCogs,
} from 'react-icons/fa';
import TechBadge from './TechBadge';
import InteractiveDashboardDemo from './InteractiveDashboardDemo';
import InteractiveCheckoutDemo from './InteractiveCheckoutDemo';
import InteractiveOnboardingDemo from './InteractiveOnboardingDemo';
import InteractiveMakerCheckerWorkflow from './InteractiveMakerCheckerWorkflow';
import { personalInfo } from '../data/portfolioData';

const projectMetrics = {
  'securepay-portals': [
    { label: 'Scale', value: '60+ Screens', note: 'App Router architecture' },
    { label: 'Security Invariant', value: '0 Leaks', note: 'Maker-Checker dual approval' },
    { label: 'Filter Latency', value: '< 200ms', note: 'URL search params sync' },
    { label: 'Volume', value: '10K+/day', note: 'High-density table SLA' },
  ],
  'securepay-gateway': [
    { label: 'Bundle Target', value: '< 50 KB', note: 'Lightweight client bundle' },
    { label: 'Validation', value: '0ms Luhn', note: 'Instant client-side BIN check' },
    { label: 'Payment Rails', value: 'UPI + Cards', note: 'Intent deep links & NetBanking' },
    { label: 'Reliability', value: '99.9%', note: 'Zero duplicate charge rate' },
  ],
  'merchant-onboarding': [
    { label: 'KYC Turnaround', value: '75% Faster', note: 'Signzy API automation' },
    { label: 'Draft Recovery', value: '100%', note: 'Local encrypted recovery' },
    { label: 'Wizard Steps', value: '6 Steps', note: 'Formik & Yup conditional schemas' },
    { label: 'Verification', value: 'Real-time', note: 'Instant PAN OCR & Penny-Drop' },
  ],
  'securepay-website': [
    { label: 'Performance', value: '98+ Score', note: 'Lighthouse Core Web Vitals' },
    { label: 'Layout Shift', value: '0 CLS', note: 'Zero layout shift on load' },
    { label: 'Figma Tokens', value: '80+ Mappings', note: 'Pixel-perfect token system' },
    { label: 'Lead Intake', value: '100% Synced', note: 'Enterprise sales webhook pipeline' },
  ],
};

const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'challenges' | 'simulator' | 'outcomes'
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveTab('architecture');
      setSelectedChallengeIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const metrics = projectMetrics[project.id] || [
    { label: 'Quality', value: 'Production', note: 'Verified fintech deployment' },
    { label: 'Coverage', value: 'Full Stack UI', note: 'Client state & API contracts' },
    { label: 'Type Safety', value: '100%', note: 'Strict TypeScript interfaces' },
    { label: 'Status', value: 'Active', note: 'Live production use' },
  ];

  const hasInteractiveSimulator =
    project.interactiveType === 'dashboard' ||
    project.interactiveType === 'checkout' ||
    project.interactiveType === 'onboarding';

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md transition-opacity overflow-y-auto'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-5xl my-auto rounded-3xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xl text-charcoal-900 dark:text-neutral-100 overflow-hidden flex flex-col max-h-[92vh]'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gradient Accent Bar */}
        <div className='h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex-shrink-0' />

        {/* Modal Header */}
        <div className='p-5 sm:p-7 border-b border-warm-200 dark:border-charcoal-800 bg-warm-50/60 dark:bg-charcoal-950/60 flex-shrink-0'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <div className='flex flex-wrap items-center gap-2 mb-2'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'>
                  <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
                  {project.category}
                </span>
                <span className='px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60'>
                  Verified Production Case Study
                </span>
              </div>
              <h2 className='text-xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
                {project.title}
              </h2>
              <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-medium mt-1 max-w-3xl leading-relaxed'>
                {project.tagline}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className='p-2 sm:p-2.5 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-warm-200 dark:hover:bg-charcoal-800 transition flex items-center gap-1 flex-shrink-0'
              aria-label='Close Case Study'
              title='Close (Esc)'
            >
              <span className='text-[10px] font-mono text-neutral-400 hidden sm:inline'>ESC</span>
              <FaTimes className='w-4 h-4 sm:w-5 sm:h-5' />
            </button>
          </div>

          {/* Applied Stack Badges with Authentic Icons */}
          <div className='flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-warm-200/80 dark:border-charcoal-800/80'>
            <span className='text-[11px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mr-1'>
              Tech Stack:
            </span>
            {project.techStack.map((tech, idx) => (
              <TechBadge key={idx} name={tech} size='xs' />
            ))}
          </div>

          {/* High-Impact Statistics Banner */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-3'>
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className='p-2.5 sm:p-3 rounded-xl bg-white/80 dark:bg-charcoal-900/80 border border-warm-200 dark:border-charcoal-800 shadow-2xs'
              >
                <div className='text-base sm:text-lg font-extrabold text-blue-600 dark:text-blue-400 font-mono leading-none'>
                  {m.value}
                </div>
                <div className='text-[11px] font-bold text-neutral-800 dark:text-neutral-200 mt-1 leading-tight'>
                  {m.label}
                </div>
                <div className='text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight truncate mt-0.5'>
                  {m.note}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Case Study Navigation Tabs */}
          <div className='flex items-center gap-1.5 mt-4 border-b border-warm-200 dark:border-charcoal-800 overflow-x-auto pb-1 scrollbar-none'>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                activeTab === 'architecture'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-800'
              }`}
            >
              <FaProjectDiagram />
              <span>Architecture & Scope</span>
            </button>

            <button
              onClick={() => setActiveTab('challenges')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                activeTab === 'challenges'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-800'
              }`}
            >
              <FaExclamationTriangle />
              <span>Difficult Challenges ({project.challenges.length})</span>
            </button>

            {hasInteractiveSimulator && (
              <button
                onClick={() => setActiveTab('simulator')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition relative ${
                  activeTab === 'simulator'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
                }`}
              >
                <FaPlay className='text-[10px]' />
                <span>Live Interactive Simulator</span>
                <span className='w-2 h-2 rounded-full bg-emerald-400 animate-ping' />
              </button>
            )}

            <button
              onClick={() => setActiveTab('outcomes')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                activeTab === 'outcomes'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-800'
              }`}
            >
              <FaChartLine />
              <span>Shipped Outcomes</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className='p-5 sm:p-8 overflow-y-auto space-y-6 text-left flex-1'>
          <AnimatePresence mode='wait'>
            {/* TAB 1: ARCHITECTURE & SCOPE */}
            {activeTab === 'architecture' && (
              <motion.div
                key='arch'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className='space-y-6'
              >
                {/* Visual Architecture Flow Diagram */}
                <div className='p-5 rounded-2xl bg-gradient-to-br from-warm-100/80 via-white to-warm-50 dark:from-charcoal-850 dark:via-charcoal-900 dark:to-charcoal-950 border border-warm-200 dark:border-charcoal-750 shadow-sm'>
                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400'>
                      <FaLayerGroup className='text-blue-500' />
                      <span>End-to-End System Frontend Architecture</span>
                    </div>
                    <span className='text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold'>
                      Client Data Pipeline
                    </span>
                  </div>

                  {/* Pipeline Steps Flow */}
                  <div className='grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-2'>
                    <div className='p-3 rounded-xl bg-white dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700 text-center'>
                      <span className='text-[10px] font-mono font-bold text-blue-500 uppercase block mb-1'>Step 01</span>
                      <h4 className='text-xs font-bold text-neutral-900 dark:text-white'>User Intent</h4>
                      <p className='text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug'>
                        Action trigger, multi-filter selection, or payment payload input
                      </p>
                    </div>

                    <div className='p-3 rounded-xl bg-white dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700 text-center relative'>
                      <span className='text-[10px] font-mono font-bold text-indigo-500 uppercase block mb-1'>Step 02</span>
                      <h4 className='text-xs font-bold text-neutral-900 dark:text-white'>URL & State Machine</h4>
                      <p className='text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug'>
                        URL search params sync + Formik / Yup validation contracts
                      </p>
                    </div>

                    <div className='p-3 rounded-xl bg-white dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700 text-center relative'>
                      <span className='text-[10px] font-mono font-bold text-purple-500 uppercase block mb-1'>Step 03</span>
                      <h4 className='text-xs font-bold text-neutral-900 dark:text-white'>Redux Normalizer</h4>
                      <p className='text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug'>
                        Normalized balances, optimistic mutations, & Reselect memoization
                      </p>
                    </div>

                    <div className='p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center'>
                      <span className='text-[10px] font-mono font-bold text-emerald-500 uppercase block mb-1'>Step 04</span>
                      <h4 className='text-xs font-bold text-emerald-900 dark:text-emerald-300'>Invariant SLA</h4>
                      <p className='text-[11px] text-emerald-700 dark:text-emerald-400 mt-1 leading-snug'>
                        Maker-checker dual guard & sub-200ms frame-perfect render
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem vs Overview Split */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5 sm:p-6 rounded-2xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 shadow-2xs'>
                    <h3 className='text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2'>
                      <FaCode />
                      <span>Product Context & Objectives</span>
                    </h3>
                    <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
                      {project.overview}
                    </p>
                  </div>

                  <div className='p-5 sm:p-6 rounded-2xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 shadow-2xs'>
                    <h3 className='text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2'>
                      <FaExclamationTriangle />
                      <span>The Core Production Problem</span>
                    </h3>
                    <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
                      {project.problem}
                    </p>
                  </div>
                </div>

                {/* Role & Scope */}
                <div className='p-5 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xs'>
                  <div className='flex items-center gap-2 mb-2'>
                    <FaLaptopCode className='text-purple-500' />
                    <h3 className='text-sm sm:text-base font-bold text-neutral-900 dark:text-white'>
                      My Role & Engineering Scope
                    </h3>
                  </div>
                  <p className='text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed'>
                    {project.contribution}
                  </p>
                </div>

                {/* Implementation Strategy */}
                <div className='p-5 sm:p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 shadow-2xs'>
                  <div className='flex items-center gap-2 mb-2'>
                    <FaCogs className='text-blue-600 dark:text-blue-400' />
                    <h3 className='text-sm sm:text-base font-bold text-blue-900 dark:text-blue-200'>
                      Technical Implementation & Engineering Guarantees
                    </h3>
                  </div>
                  <p className='text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed'>
                    {project.implementation}
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 2: DIFFICULT CHALLENGES */}
            {activeTab === 'challenges' && (
              <motion.div
                key='challenges'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className='space-y-4'
              >
                <div className='flex items-center justify-between'>
                  <p className='text-xs text-neutral-500 dark:text-neutral-400 font-mono'>
                    Select any production bottleneck to view the root-cause analysis and solution:
                  </p>
                  <span className='text-xs font-mono font-bold text-blue-600 dark:text-blue-400'>
                    {project.challenges.length} Solved Challenges
                  </span>
                </div>

                {/* Challenges Selector List */}
                <div className='grid grid-cols-1 gap-3.5'>
                  {project.challenges.map((challenge, idx) => {
                    const isSelected = selectedChallengeIndex === idx;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.005 }}
                        onClick={() => setSelectedChallengeIndex(idx)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500/50 shadow-sm'
                            : 'bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800 hover:border-neutral-400 dark:hover:border-charcoal-700'
                        }`}
                      >
                        <div className='flex items-start justify-between gap-3'>
                          <div className='flex items-start gap-3'>
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 ${
                                isSelected
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-warm-100 dark:bg-charcoal-800 text-neutral-600 dark:text-neutral-400'
                              }`}
                            >
                              0{idx + 1}
                            </span>
                            <div>
                              <h4 className='text-xs sm:text-sm font-bold text-neutral-900 dark:text-white leading-snug'>
                                {challenge}
                              </h4>
                            </div>
                          </div>
                          <span className='text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold flex-shrink-0'>
                            {isSelected ? 'Active Analysis' : 'Inspect →'}
                          </span>
                        </div>

                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.2 }}
                            className='mt-4 pt-4 border-t border-blue-200/60 dark:border-blue-900/60 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs'
                          >
                            <div className='p-3 rounded-xl bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700'>
                              <span className='font-mono font-bold text-amber-600 dark:text-amber-400 block mb-1 uppercase text-[10px]'>
                                ⚠️ Breaking Invariant
                              </span>
                              <p className='text-neutral-600 dark:text-neutral-300 leading-relaxed text-[11px]'>
                                Naive DOM updates or uncoordinated state causes UI freezes, race conditions, or unrecoverable form drops.
                              </p>
                            </div>

                            <div className='p-3 rounded-xl bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700'>
                              <span className='font-mono font-bold text-blue-600 dark:text-blue-400 block mb-1 uppercase text-[10px]'>
                                🛠️ Frontend Pattern
                              </span>
                              <p className='text-neutral-600 dark:text-neutral-300 leading-relaxed text-[11px]'>
                                Decoupled client rendering, memoized selector subscriptions, and strict schema validation pipelines.
                              </p>
                            </div>

                            <div className='p-3 rounded-xl bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700'>
                              <span className='font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-1 uppercase text-[10px]'>
                                🚀 Verified Production SLA
                              </span>
                              <p className='text-neutral-600 dark:text-neutral-300 leading-relaxed text-[11px]'>
                                Guaranteed 60fps interaction speed, URL bookmarkability, and zero unhandled exceptions.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 3: LIVE INTERACTIVE SIMULATOR */}
            {activeTab === 'simulator' && hasInteractiveSimulator && (
              <motion.div
                key='sim'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className='space-y-4'
              >
                <div className='p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-3'>
                  <div className='flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300 font-medium'>
                    <FaPlay className='text-emerald-500' />
                    <span>
                      Live Interactive Component Simulator: Test the actual user interaction models engineered for {project.title}.
                    </span>
                  </div>
                  <span className='text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold flex-shrink-0'>
                    Live Engine
                  </span>
                </div>

                <div className='p-2 sm:p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm'>
                  {project.interactiveType === 'dashboard' && (
                    <div className='space-y-4'>
                      <InteractiveDashboardDemo />
                      <div className='pt-4 border-t border-warm-200 dark:border-charcoal-800'>
                        <h4 className='text-xs font-mono font-bold text-neutral-500 uppercase mb-2'>
                          Companion Workflow: Dual Maker-Checker Engine
                        </h4>
                        <InteractiveMakerCheckerWorkflow />
                      </div>
                    </div>
                  )}

                  {project.interactiveType === 'checkout' && (
                    <InteractiveCheckoutDemo />
                  )}

                  {project.interactiveType === 'onboarding' && (
                    <InteractiveOnboardingDemo />
                  )}
                </div>
              </motion.div>
            )}

            {/* TAB 4: SHIPPED OUTCOMES */}
            {activeTab === 'outcomes' && (
              <motion.div
                key='outcomes'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className='space-y-4'
              >
                <div className='p-6 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-white to-blue-50/60 dark:from-charcoal-900 dark:via-charcoal-850 dark:to-charcoal-950 border border-emerald-200/80 dark:border-emerald-900/40 shadow-sm'>
                  <div className='flex items-center gap-2 mb-4'>
                    <FaCheckCircle className='text-emerald-500 text-lg' />
                    <h3 className='text-base sm:text-lg font-bold text-neutral-900 dark:text-white'>
                      Shipped Production Results & SLA Proofs
                    </h3>
                  </div>

                  <div className='grid grid-cols-1 gap-3'>
                    {project.outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className='p-4 rounded-xl bg-white/90 dark:bg-charcoal-900/90 border border-warm-200 dark:border-charcoal-800 shadow-2xs flex items-start gap-3'
                      >
                        <span className='w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5'>
                          ✓
                        </span>
                        <div>
                          <p className='text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white leading-relaxed'>
                            {outcome}
                          </p>
                          <span className='text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-0.5 block'>
                            Production Invariant Verified · Zero Degradation
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Sticky Footer */}
        <div className='p-4 sm:p-5 border-t border-warm-200 dark:border-charcoal-800 bg-warm-50/90 dark:bg-charcoal-950/90 flex flex-wrap items-center justify-between gap-3 flex-shrink-0'>
          <div className='flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400'>
            <span>Dinesh Singh</span>
            <span>•</span>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-neutral-900 dark:hover:text-white inline-flex items-center gap-1 font-mono'
            >
              <FaGithub /> GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-neutral-900 dark:hover:text-white inline-flex items-center gap-1 font-mono'
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div className='flex items-center gap-2'>
            <button
              onClick={onClose}
              className='px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition shadow-sm'
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
