import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData } from '../data/portfolioData';
import InteractiveMakerCheckerWorkflow from './InteractiveMakerCheckerWorkflow';
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBriefcase,
  FaLaptopCode,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaProjectDiagram,
} from 'react-icons/fa';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('timeline'); // 'timeline' | 'simulator' | 'architecture'
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const [expandedAchievement, setExpandedAchievement] = useState(null);

  const architectureMatrix = [
    {
      system: 'SecurePay PayIn Portal',
      renderModel: 'Next.js 14 App Router + Server Components',
      stateArchitecture: 'Redux Toolkit (Settlement & Balance Slices)',
      keyCapabilities: [
        'Real-time transaction settlement tracking across 60+ responsive screens',
        'URL-synced search params with multi-field filter state preservation',
        'Instant CSV / Excel statement streaming with edge cache invalidation',
      ],
    },
    {
      system: 'SecurePay PayOut Portal',
      renderModel: 'Client Interactive Table + Optimistic UI',
      stateArchitecture: 'Dual Maker-Checker Authorization Slices',
      keyCapabilities: [
        'Granular role-based boundaries (Super Admin, Manager, Merchant Operator)',
        'Dual-approval Maker-Checker approval pipeline for high-value payouts',
        'Automated webhook retry listener with HMAC SHA-256 integrity verification',
      ],
    },
    {
      system: 'Transaction Gateway',
      renderModel: 'Zero-Latency Embedded Iframe & Direct SDK',
      stateArchitecture: 'State Machine (Intent → 3DS → Status Polling)',
      keyCapabilities: [
        'Multi-rail payment orchestration: UPI Intent, Cards (Luhn validated), Net Banking',
        'Real-time transaction status polling with graceful failure fallbacks',
        'Mobile-first responsive viewport supporting sub-second interactions',
      ],
    },
    {
      system: 'Merchant Onboarding Engine',
      renderModel: '6-Step Multi-Stage Form with Draft Hydration',
      stateArchitecture: 'Signzy API Integration Slices + LocalStorage Sync',
      keyCapabilities: [
        'Real-time PAN, GSTIN, and Bank Penny-drop verification via Signzy APIs',
        '75% reduction in manual compliance review and turnaround times',
        'Zero-data-loss form recovery across device reloads and network drops',
      ],
    },
  ];

  return (
    <section id='experience' className='relative py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 bg-warm-50/50 dark:bg-charcoal-950/40 overflow-hidden'>
      {/* Ambient background decoration */}
      <div className='absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-10 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-left mb-10'
        >
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block font-mono flex items-center gap-1.5'>
            <FaBriefcase className='text-xs' />
            <span>Professional Employment History</span>
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Work Experience & Track Record
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2 leading-relaxed'>
            Production engineering experience in high-throughput fintech infrastructure, payment workflows, and agency client applications.
          </p>
        </motion.div>

        {/* Experience Mode Switcher (Timeline vs Live Simulator vs Architecture) */}
        <div className='flex items-center gap-1.5 p-1.5 rounded-2xl bg-warm-200/80 dark:bg-charcoal-900 border border-warm-300 dark:border-charcoal-800 text-xs font-semibold mb-10 overflow-x-auto max-w-full text-left'>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition whitespace-nowrap ${
              activeTab === 'timeline'
                ? 'bg-white dark:bg-charcoal-750 text-neutral-900 dark:text-white shadow-xs font-bold'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FaLaptopCode className='text-xs text-blue-500' />
            <span className='hidden sm:inline'>1. Roles & Shipped Scope</span>
            <span className='sm:hidden'>1. Roles</span>
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition whitespace-nowrap ${
              activeTab === 'simulator'
                ? 'bg-white dark:bg-charcoal-750 text-neutral-900 dark:text-white shadow-xs font-bold'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FaShieldAlt className='text-xs text-purple-500' />
            <span className='hidden sm:inline'>2. Interactive Maker-Checker RBAC</span>
            <span className='sm:hidden'>2. RBAC Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-white dark:bg-charcoal-750 text-neutral-900 dark:text-white shadow-xs font-bold'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FaProjectDiagram className='text-xs text-emerald-500' />
            <span className='hidden sm:inline'>3. Fintech System Matrix</span>
            <span className='sm:hidden'>3. Architecture</span>
          </button>
        </div>

        {/* Render Tab 1: Interactive Roles & Shipped Scope */}
        {activeTab === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='space-y-10'
          >
            {/* Role Selector Buttons for Companies */}
            <div className='flex flex-wrap gap-2 text-left'>
              {experienceData.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedRoleIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition border flex items-center gap-2.5 ${
                    selectedRoleIndex === idx
                      ? 'bg-white dark:bg-charcoal-850 text-blue-600 dark:text-blue-400 border-blue-500/50 shadow-xs'
                      : 'bg-warm-100 dark:bg-charcoal-900 text-neutral-600 dark:text-neutral-400 border-warm-200 dark:border-charcoal-800 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <span className='w-2 h-2 rounded-full bg-blue-500' />
                  <span>{exp.company}</span>
                  <span className='text-[10px] font-mono px-1.5 py-0.5 rounded bg-warm-200/80 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300'>
                    {exp.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Role Deep-Dive Card */}
            {(() => {
              const exp = experienceData[selectedRoleIndex];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
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
                        <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60 font-mono'>
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

                  {/* Interactive Verified Achievements with Click-to-Expand */}
                  <div className='space-y-3 mb-6'>
                    <div className='flex items-center justify-between'>
                      <h4 className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono'>
                        Product Challenges & Responsibilities (Click each to expand)
                      </h4>
                      <span className='text-[10px] text-blue-600 dark:text-blue-400 font-mono'>
                        {exp.achievements.length} Verified Modules
                      </span>
                    </div>

                    <div className='grid grid-cols-1 gap-3'>
                      {exp.achievements.map((item, idx) => {
                        const isExpanded = expandedAchievement === `${exp.id}-${idx}`;
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 2 }}
                            onClick={() =>
                              setExpandedAchievement(isExpanded ? null : `${exp.id}-${idx}`)
                            }
                            className={`p-4 rounded-xl border transition cursor-pointer ${
                              isExpanded
                                ? 'bg-blue-50/50 dark:bg-charcoal-850 border-blue-400/50 shadow-xs'
                                : 'bg-warm-50/80 dark:bg-charcoal-850/80 border-warm-200 dark:border-charcoal-800 hover:border-warm-300 dark:hover:border-charcoal-700'
                            }`}
                          >
                            <div className='flex items-center justify-between'>
                              <h5 className='text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2'>
                                <FaCheckCircle className='text-blue-600 dark:text-blue-400 text-xs flex-shrink-0' />
                                <span>{item.title}</span>
                              </h5>
                              <div className='text-neutral-400 text-xs'>
                                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                              </div>
                            </div>
                            <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pl-5 mt-1.5'>
                              {item.desc}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technologies Applied */}
                  <div className='flex flex-wrap items-center gap-1.5 pt-4 border-t border-warm-200 dark:border-charcoal-800'>
                    <span className='text-xs font-bold text-neutral-400 dark:text-neutral-500 mr-2 uppercase tracking-wider font-mono'>
                      Applied Stack:
                    </span>
                    {exp.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className='px-2.5 py-0.5 rounded text-xs font-medium bg-warm-100 dark:bg-charcoal-800 text-neutral-700 dark:text-neutral-300 border border-warm-200 dark:border-charcoal-750 font-mono transition hover:border-blue-500/40'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })()}

            {/* Formal Education Card */}
            <div className='text-left pt-6'>
              <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2 font-mono'>
                <FaGraduationCap className='text-purple-600 dark:text-purple-400' />
                <span>Formal Education</span>
              </h3>

              <div className='space-y-4'>
                {educationData.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className='p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-purple-500/40 transition'
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
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Render Tab 2: Interactive Maker-Checker RBAC Simulator */}
        {activeTab === 'simulator' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='space-y-6 text-left'
          >
            <div className='p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 text-xs text-purple-900 dark:text-purple-300 leading-relaxed'>
              <strong className='font-bold'>Why this matters: </strong>
              At SecurePay, financial compliance requires strict segregation of duties. Dinesh engineered the dual-party authorization workflow where an operational Maker initiates a payout batch, and an authorized Compliance Checker inspects identity credentials, checks penny-drop logs, and confirms authorization via multi-factor authentication.
            </div>

            <InteractiveMakerCheckerWorkflow />
          </motion.div>
        )}

        {/* Render Tab 3: Fintech System Matrix */}
        {activeTab === 'architecture' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='space-y-6 text-left'
          >
            <div className='p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-300 leading-relaxed'>
              <strong className='font-bold'>Core Architectural Decisions: </strong>
              Breakdown of rendering models, state boundaries, and key technical capabilities engineered by Dinesh across the 4 SecurePay systems.
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {architectureMatrix.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className='p-5 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm space-y-4 hover:border-blue-500/40 transition'
                >
                  {/* macOS Window Chrome Header */}
                  <div className='flex items-center justify-between pb-3 border-b border-warm-200 dark:border-charcoal-800'>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-1.5'>
                        <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f56]' />
                        <span className='w-2.5 h-2.5 rounded-full bg-[#ffbd2e]' />
                        <span className='w-2.5 h-2.5 rounded-full bg-[#27c93f]' />
                      </div>
                      <span className='text-[10px] font-mono text-neutral-400 ml-1'>
                        Sys-0{idx + 1}.spec.ts
                      </span>
                    </div>
                    <span className='text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-bold'>
                      Production Spec
                    </span>
                  </div>

                  <div>
                    <h4 className='text-base sm:text-lg font-bold text-neutral-900 dark:text-white'>
                      {item.system}
                    </h4>
                  </div>

                  <div className='space-y-2 text-xs'>
                    <div>
                      <span className='text-neutral-400 font-mono block text-[11px]'>Rendering Model:</span>
                      <span className='font-semibold text-neutral-800 dark:text-neutral-200'>
                        {item.renderModel}
                      </span>
                    </div>
                    <div>
                      <span className='text-neutral-400 font-mono block text-[11px]'>State Architecture:</span>
                      <span className='font-semibold text-neutral-800 dark:text-neutral-200'>
                        {item.stateArchitecture}
                      </span>
                    </div>
                  </div>

                  <div className='pt-2 border-t border-warm-200 dark:border-charcoal-800'>
                    <span className='text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2 block font-mono'>
                      Engineered Capabilities:
                    </span>
                    <ul className='space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300'>
                      {item.keyCapabilities.map((cap, cIdx) => (
                        <li key={cIdx} className='flex items-start gap-2'>
                          <span className='text-blue-600 dark:text-blue-400 font-bold'>•</span>
                          <span className='leading-relaxed'>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;