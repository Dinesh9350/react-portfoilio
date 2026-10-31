import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import {
  FaCompass,
  FaShieldAlt,
  FaBolt,
  FaLayerGroup,
  FaCodeBranch,
  FaChevronDown,
  FaChevronUp,
  FaMicrochip,
  FaCheckCircle,
  FaTimes,
  FaTools,
  FaBookOpen,
} from 'react-icons/fa';

const metricDetails = [
  {
    title: '60+ Screens across 4 Fintech Systems',
    scope: 'SecurePay PayIn, PayOut, Gateway & Public Web',
    detail:
      'Architected modular page shells using Next.js 14 App Router, dynamic routing, URL-synced search params, and Server Components for instant initial page loads and zero layout shifts.',
    badge: 'App Router · Architecture',
    color: 'border-blue-500/40 bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
  },
  {
    title: '75% KYC Turnaround Reduction',
    scope: 'Merchant Compliance & Signzy Microservices',
    detail:
      'Automated 6-step merchant onboarding by integrating Signzy APIs for instant PAN OCR, GSTIN validation, and penny-drop bank verification with encrypted draft recovery across drops.',
    badge: 'Signzy API · KYC Engine',
    color: 'border-emerald-500/40 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: '0 Single-Operator Payout Leaks',
    scope: 'Maker-Checker Dual Authorization Engine',
    detail:
      'Designed strict dual-role approval pipelines separating transaction initiation (Maker) from disbursement approval (Checker) across high-value payout batches.',
    badge: 'RBAC · Security Invariant',
    color: 'border-purple-500/40 bg-purple-50/80 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
  },
  {
    title: '100% Type-Safe Payment State Machines',
    scope: 'Checkout Gateway Multi-Rail Payloads',
    detail:
      'Defined discriminated union contracts across UPI Intent, Credit/Debit cards (with Luhn checksum validation), and Net Banking, eliminating undefined runtime exceptions.',
    badge: 'TypeScript · Strict Types',
    color: 'border-amber-500/40 bg-amber-50/80 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
  },
];

const narrativeMeta = [
  {
    tag: '01 · Real-World Fintech Scope',
    color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    border: 'border-l-cyan-500',
    chips: ['React.js', 'Next.js 14 App Router', 'TypeScript', '60+ Screens'],
  },
  {
    tag: '02 · High-Stakes Determinism',
    color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/30',
    border: 'border-l-purple-500',
    chips: ['Pessimistic Locking', 'State Machines', 'Idempotent APIs', 'Zero Leaks'],
  },
  {
    tag: '03 · Maintainable Architecture',
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    border: 'border-l-emerald-500',
    chips: ['Decoupled Layers', 'a11y ARIA 1.2', '60fps Scroll', 'Axios Retries'],
  },
];

const dailyToolkit = [
  {
    name: 'Next.js 14 (App Router)',
    role: 'Primary Framework',
    badge: 'Daily Driver',
    color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    desc: 'Server Components for streaming shells, client components for high-density tables.',
  },
  {
    name: 'TypeScript 5.x',
    role: 'Strict Type Contracts',
    badge: 'Zero Any',
    color: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
    desc: 'Discriminated unions for multi-rail payments and strict API response schemas.',
  },
  {
    name: 'Redux Toolkit',
    role: 'State Normalization',
    badge: 'Settlement Slices',
    color: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400',
    desc: 'createSlice and Reselect memoized selectors preventing cascading table repaints.',
  },
  {
    name: 'Tailwind CSS & MUI',
    role: 'UI Token Architecture',
    badge: 'Figma to UI',
    color: 'border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400',
    desc: 'Pixel-perfect translation of 80+ Figma mockups with dark-mode native tokens.',
  },
  {
    name: 'Chrome DevTools & Profiler',
    role: 'Performance SLA',
    badge: '60fps Audits',
    color: 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
    desc: 'Continuous Core Web Vitals auditing, flamegraph analysis, and memory leak prevention.',
  },
  {
    name: 'Git & GitHub Workflows',
    role: 'Version Control & Shipping',
    badge: 'Daily Shipper',
    color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    desc: 'Feature branching, atomic commit hygiene, pull request code reviews, and production deployment syncing.',
  },
];

const principleMeta = [
  {
    icon: <FaShieldAlt className='text-rose-500 text-sm' />,
    badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
    highlightBorder: 'hover:border-rose-500/50',
    activeBg: 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-500/60',
  },
  {
    icon: <FaBolt className='text-amber-500 text-sm' />,
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    highlightBorder: 'hover:border-amber-500/50',
    activeBg: 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-500/60',
  },
  {
    icon: <FaLayerGroup className='text-cyan-500 text-sm' />,
    badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
    highlightBorder: 'hover:border-cyan-500/50',
    activeBg: 'bg-cyan-50/70 dark:bg-cyan-950/20 border-cyan-500/60',
  },
  {
    icon: <FaCodeBranch className='text-purple-500 text-sm' />,
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    highlightBorder: 'hover:border-purple-500/50',
    activeBg: 'bg-purple-50/70 dark:bg-purple-950/20 border-purple-500/60',
  },
];

const AboutSection = () => {
  const [expandedPrinciple, setExpandedPrinciple] = useState(0);
  const [selectedMetricIndex, setSelectedMetricIndex] = useState(null);
  const [activeNarrativeTab, setActiveNarrativeTab] = useState('story'); // 'story' | 'toolkit'

  return (
    <section
      id='about'
      className='relative py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 bg-warm-50/50 dark:bg-charcoal-950/40 overflow-hidden'
    >
      {/* Ambient background decoration with rich colorful blur */}
      <div className='absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute top-3/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-left mb-10'
        >
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-3'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
            </span>
            <FaCompass className='text-xs' />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            About Me
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2 leading-relaxed'>
            A perspective on frontend engineering shaped by real product deadlines, high-stakes fintech operations, and user trust.
          </p>
        </motion.div>

        {/* Interactive Impact Metrics Bar */}
        <div className='mb-12 text-left'>
          <div className='flex items-center justify-between mb-2 text-xs font-mono text-neutral-400 dark:text-neutral-500'>
            <span>VERIFIED PRODUCTION METRICS</span>
            <span className='text-blue-600 dark:text-blue-400 font-semibold'>Click any card to inspect context</span>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4'>
            {/* Metric 1 - Blue/Cyan */}
            <motion.div
              whileHover={{ y: -3 }}
              onClick={() => setSelectedMetricIndex(selectedMetricIndex === 0 ? null : 0)}
              className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden group ${
                selectedMetricIndex === 0
                  ? 'bg-blue-50/90 dark:bg-charcoal-850 border-blue-500 shadow-md ring-2 ring-blue-500/30'
                  : 'bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-white dark:to-charcoal-900 border-blue-500/30 dark:border-blue-500/40 shadow-sm'
              }`}
            >
              <div className='flex items-center justify-between'>
                <span className='text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tracking-tight'>
                  60+
                </span>
                <span className='w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50' />
              </div>
              <span className='text-xs sm:text-sm font-bold text-neutral-900 dark:text-white block mt-2'>
                Production Screens
              </span>
              <span className='text-[11px] text-blue-700 dark:text-blue-300/80 font-mono font-medium block mt-0.5'>
                Next.js 14 App Router
              </span>
            </motion.div>

            {/* Metric 2 - Emerald */}
            <motion.div
              whileHover={{ y: -3 }}
              onClick={() => setSelectedMetricIndex(selectedMetricIndex === 1 ? null : 1)}
              className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden group ${
                selectedMetricIndex === 1
                  ? 'bg-emerald-50/90 dark:bg-charcoal-850 border-emerald-500 shadow-md ring-2 ring-emerald-500/30'
                  : 'bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white dark:to-charcoal-900 border-emerald-500/30 dark:border-emerald-500/40 shadow-sm'
              }`}
            >
              <div className='flex items-center justify-between'>
                <span className='text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tracking-tight'>
                  75%
                </span>
                <span className='w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50' />
              </div>
              <span className='text-xs sm:text-sm font-bold text-neutral-900 dark:text-white block mt-2'>
                KYC Turnaround Cut
              </span>
              <span className='text-[11px] text-emerald-700 dark:text-emerald-300/80 font-mono font-medium block mt-0.5'>
                Signzy API Automation
              </span>
            </motion.div>

            {/* Metric 3 - Purple/Violet */}
            <motion.div
              whileHover={{ y: -3 }}
              onClick={() => setSelectedMetricIndex(selectedMetricIndex === 2 ? null : 2)}
              className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden group ${
                selectedMetricIndex === 2
                  ? 'bg-purple-50/90 dark:bg-charcoal-850 border-purple-500 shadow-md ring-2 ring-purple-500/30'
                  : 'bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-white dark:to-charcoal-900 border-purple-500/30 dark:border-purple-500/40 shadow-sm'
              }`}
            >
              <div className='flex items-center justify-between'>
                <span className='text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400 font-mono tracking-tight'>
                  0
                </span>
                <span className='w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50' />
              </div>
              <span className='text-xs sm:text-sm font-bold text-neutral-900 dark:text-white block mt-2'>
                Single-Operator Leaks
              </span>
              <span className='text-[11px] text-purple-700 dark:text-purple-300/80 font-mono font-medium block mt-0.5'>
                Maker-Checker Dual RBAC
              </span>
            </motion.div>

            {/* Metric 4 - Amber/Gold */}
            <motion.div
              whileHover={{ y: -3 }}
              onClick={() => setSelectedMetricIndex(selectedMetricIndex === 3 ? null : 3)}
              className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden group ${
                selectedMetricIndex === 3
                  ? 'bg-amber-50/90 dark:bg-charcoal-850 border-amber-500 shadow-md ring-2 ring-amber-500/30'
                  : 'bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-white dark:to-charcoal-900 border-amber-500/30 dark:border-amber-500/40 shadow-sm'
              }`}
            >
              <div className='flex items-center justify-between'>
                <span className='text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 font-mono tracking-tight'>
                  100%
                </span>
                <span className='w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50' />
              </div>
              <span className='text-xs sm:text-sm font-bold text-neutral-900 dark:text-white block mt-2'>
                Type Contract Safety
              </span>
              <span className='text-[11px] text-amber-700 dark:text-amber-300/80 font-mono font-medium block mt-0.5'>
                TypeScript Gateway Unions
              </span>
            </motion.div>
          </div>

          {/* Interactive Metric Detail Expander */}
          <AnimatePresence>
            {selectedMetricIndex !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className='mt-4 overflow-hidden'
              >
                <div
                  className={`p-4 sm:p-5 rounded-2xl border shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${metricDetails[selectedMetricIndex].color}`}
                >
                  <div className='space-y-1 text-left'>
                    <div className='flex items-center gap-2'>
                      <span className='text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/70 dark:bg-charcoal-900/80 border border-current'>
                        {metricDetails[selectedMetricIndex].badge}
                      </span>
                      <h4 className='font-bold text-sm sm:text-base text-neutral-900 dark:text-white'>
                        {metricDetails[selectedMetricIndex].title}
                      </h4>
                    </div>
                    <p className='text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans'>
                      {metricDetails[selectedMetricIndex].detail}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedMetricIndex(null)}
                    className='p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-charcoal-800 transition flex-shrink-0'
                    aria-label='Close detail'
                  >
                    <FaTimes />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Narrative & Principles Layout with Interactive Story vs. Toolkit Toggle */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start text-left'>
          {/* Narrative / Toolkit Column */}
          <div className='lg:col-span-7 space-y-4'>
            {/* View Switcher: Story vs. Daily Toolkit */}
            <div className='flex items-center justify-between pb-1'>
              <div className='flex items-center gap-1.5 p-1 rounded-xl bg-warm-200/80 dark:bg-charcoal-900 border border-warm-300 dark:border-charcoal-800 text-xs font-semibold'>
                <button
                  onClick={() => setActiveNarrativeTab('story')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                    activeNarrativeTab === 'story'
                      ? 'bg-white dark:bg-charcoal-800 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <FaBookOpen className='text-xs' />
                  <span>Engineering Story</span>
                </button>
                <button
                  onClick={() => setActiveNarrativeTab('toolkit')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                    activeNarrativeTab === 'toolkit'
                      ? 'bg-white dark:bg-charcoal-800 text-purple-600 dark:text-purple-400 shadow-xs font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <FaTools className='text-xs' />
                  <span>Daily Production Toolkit</span>
                </button>
              </div>

              <span className='hidden sm:inline text-[11px] font-mono text-neutral-400'>
                {activeNarrativeTab === 'story' ? '3 Pillars' : '6 Daily Tools'}
              </span>
            </div>

            {/* Render Tab 1: Story */}
            {activeNarrativeTab === 'story' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className='space-y-4'
              >
                {aboutData.narrative.map((paragraph, idx) => {
                  const meta = narrativeMeta[idx] || narrativeMeta[0];
                  return (
                    <div
                      key={idx}
                      className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 border-l-4 ${meta.border} shadow-sm space-y-3 hover:shadow-md transition`}
                    >
                      <div className='flex items-center justify-between'>
                        <span
                          className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${meta.color}`}
                        >
                          {meta.tag}
                        </span>
                      </div>

                      <p className='text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans'>
                        {paragraph}
                      </p>

                      <div className='flex flex-wrap gap-1.5 pt-2 border-t border-warm-100 dark:border-charcoal-800/80'>
                        {meta.chips.map((chip, cIdx) => (
                          <span
                            key={cIdx}
                            className='px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-700'
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* Render Tab 2: Daily Production Toolkit */}
            {activeNarrativeTab === 'toolkit' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className='grid grid-cols-1 sm:grid-cols-2 gap-3.5'
              >
                {dailyToolkit.map((tool, idx) => (
                  <div
                    key={idx}
                    className='p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 hover:border-warm-300 dark:hover:border-charcoal-700 shadow-sm space-y-2'
                  >
                    <div className='flex items-start justify-between gap-2'>
                      <div>
                        <h4 className='font-bold text-sm text-neutral-900 dark:text-white'>
                          {tool.name}
                        </h4>
                        <span className='text-[11px] text-neutral-500 dark:text-neutral-400 font-mono block'>
                          {tool.role}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${tool.color}`}
                      >
                        {tool.badge}
                      </span>
                    </div>
                    <p className='text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Interactive Core Principles Column */}
          <div className='lg:col-span-5 space-y-3.5'>
            <div className='flex items-center justify-between pb-1'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono flex items-center gap-1.5'>
                <FaMicrochip className='text-blue-500' />
                <span>Core Engineering Principles</span>
              </h3>
              <span className='text-[10px] text-blue-600 dark:text-blue-400 font-mono font-semibold'>
                Click to inspect
              </span>
            </div>

            {aboutData.principles.map((principle, idx) => {
              const isExpanded = expandedPrinciple === idx;
              const pMeta = principleMeta[idx % principleMeta.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  onClick={() => setExpandedPrinciple(isExpanded ? null : idx)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isExpanded
                      ? `${pMeta.activeBg} shadow-md`
                      : `bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800 ${pMeta.highlightBorder} hover:shadow-xs`
                  }`}
                >
                  <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 rounded-xl bg-warm-100 dark:bg-charcoal-800 flex items-center justify-center flex-shrink-0 shadow-xs'>
                        {pMeta.icon}
                      </div>
                      <h4 className='text-xs sm:text-sm font-bold text-neutral-900 dark:text-white'>
                        {principle.title}
                      </h4>
                    </div>
                    {isExpanded ? (
                      <FaChevronUp className='text-xs text-blue-500' />
                    ) : (
                      <FaChevronDown className='text-xs text-neutral-400' />
                    )}
                  </div>

                  <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2.5 pl-11'>
                    {principle.desc}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className='mt-3.5 pt-3.5 border-t border-warm-200 dark:border-charcoal-700 pl-11 space-y-1.5 overflow-hidden'
                      >
                        <span className='text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block flex items-center gap-1.5'>
                          <FaCheckCircle className='text-emerald-500 text-[10px]' />
                          <span>Production Implementation Pattern</span>
                        </span>
                        <p className='text-[11px] text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans'>
                          {idx === 0 &&
                            'Enforced through idempotent API requests, dual Maker-Checker approval checks, and strict state machine transitions for all money movement actions.'}
                          {idx === 1 &&
                            'Delivered via Next.js Server Components, memoized Redux Toolkit selectors, and zero-bundle CSS token architecture with 60fps scrolling.'}
                          {idx === 2 &&
                            'Achieved by translating 80+ Figma mockups into reusable, atomic design tokens while maintaining keyboard navigation and ARIA 1.2 compliance.'}
                          {idx === 3 &&
                            'Isolated business logic into reusable hooks, centralized Axios interceptors for automated JWT refresh, and compile-time TypeScript type guards.'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;