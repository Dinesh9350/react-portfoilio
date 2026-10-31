import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { FaLayerGroup, FaSearch, FaLaptopCode, FaTimes } from 'react-icons/fa';

const skillProductionContext = {
  'Next.js (App Router)': {
    shippedAt: 'SecurePay (Current)',
    scope: '60+ Screens across PayIn, PayOut, and Corporate Website',
    challengeSolved:
      'Leveraged Server Components for initial shell data streaming combined with client-side interactive tables, decreasing Time to Interactive (TTI) by 40%.',
    relatedDemo: 'Transaction Dashboard & Onboarding Engine',
  },
  'React.js': {
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Core frontend engine for all 4 SecurePay fintech systems & 5 client applications',
    challengeSolved:
      'Engineered atomic, modular component hierarchies with strict separation of data fetching, state selectors, and presentational elements.',
    relatedDemo: '3-Step Checkout Flow & Maker-Checker Workflow',
  },
  'TypeScript': {
    shippedAt: 'SecurePay Transaction Gateway',
    scope: 'Strict end-to-end type contracts across payment gateway and API payloads',
    challengeSolved:
      'Defined compile-time discriminated unions for payment methods (UPI, Card, Net Banking), completely eliminating undefined runtime crashes in production checkout flows.',
    relatedDemo: '3-Step Checkout Flow',
  },
  'Redux Toolkit': {
    shippedAt: 'SecurePay PayIn & PayOut Portals',
    scope: 'Centralized state management across settlement tables, balance cards, and filters',
    challengeSolved:
      'Created custom slices with createAsyncThunk and memoized selectors to prevent unnecessary table re-renders during high-frequency balance updates.',
    relatedDemo: 'Transaction Dashboard',
  },
  'Tailwind CSS': {
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Design token system and responsive layouts across 80+ translated Figma mockups',
    challengeSolved:
      'Crafted custom color tokens, accessible dark mode support, and utility classes that maintain 60fps scrolling performance without CSS bloat.',
    relatedDemo: 'Interactive Component Suite',
  },
  'Material UI (MUI)': {
    shippedAt: 'SecurePay Merchant Portals',
    scope: 'High-density transaction tables, modals, drawer navigation, and form components',
    challengeSolved:
      'Customized MUI themes with bespoke typography and layout overrides to match SecurePay design standards while preserving accessible ARIA roles.',
    relatedDemo: 'Transaction Dashboard',
  },
  'Signzy APIs': {
    shippedAt: 'SecurePay Merchant Onboarding Engine',
    scope: 'Automated 6-step KYC verification workflow',
    challengeSolved:
      'Integrated real-time PAN validation, GSTIN checking, and instant bank penny-drop verification, reducing merchant onboarding turnaround by 75%.',
    relatedDemo: 'Automated KYC Pipeline',
  },
  'REST APIs & Axios': {
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Secure client-server communication across all frontend microservices',
    challengeSolved:
      'Engineered Axios interceptors for automated JWT token refresh, exponential backoff retries, and unified global error notifications.',
    relatedDemo: 'Maker-Checker Workflow',
  },
  'Formik & Yup': {
    shippedAt: 'SecurePay Merchant Onboarding',
    scope: 'Complex conditional multi-step merchant registration forms',
    challengeSolved:
      'Structured step-by-step schema validation that hydrates from browser storage to ensure merchants never lose entered verification data.',
    relatedDemo: 'Automated KYC Pipeline',
  },
};

const SkillsSection = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkill, setActiveSkill] = useState(null);

  const disciplines = ['All', ...skillsData.map((d) => d.discipline)];

  // Flattened skills with discipline metadata
  const allSkills = skillsData.flatMap((d) =>
    d.skills.map((s) => ({ ...s, discipline: d.discipline }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesDiscipline =
      selectedDiscipline === 'All' || s.discipline === selectedDiscipline;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiscipline && matchesSearch;
  });

  return (
    <section id='skills' className='relative py-16 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none' />

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
            <FaLayerGroup className='text-xs' />
            <span>Interactive Technical Competence Matrix</span>
          </span>
          <h2 className='text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Skills Organized by Engineering Discipline
          </h2>
          <p className='text-xs sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2 leading-relaxed'>
            Technologies utilized in shipping production applications. Click any skill chip below to inspect where and how it was deployed in production.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <div className='flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 text-left'>
          {/* Discipline Filters */}
          <div className='flex items-center gap-1.5 p-1 rounded-2xl bg-warm-200/80 dark:bg-charcoal-900 border border-warm-300 dark:border-charcoal-800 text-xs font-semibold overflow-x-auto max-w-full'>
            {disciplines.map((disc) => (
              <button
                key={disc}
                onClick={() => setSelectedDiscipline(disc)}
                className={`px-3 py-1.5 rounded-xl transition whitespace-nowrap ${
                  selectedDiscipline === disc
                    ? 'bg-white dark:bg-charcoal-750 text-neutral-900 dark:text-white shadow-xs font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {disc}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className='relative w-full md:max-w-xs'>
            <FaSearch className='absolute left-3 top-2.5 text-neutral-400 text-xs' />
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search skills or topics...'
              className='w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-charcoal-900 border border-warm-300 dark:border-charcoal-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* Skills Interactive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10 text-left'>
          {filteredSkills.map((s, idx) => {
            const isSelected = activeSkill && activeSkill.name === s.name;
            const hasContext = !!skillProductionContext[s.name];

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -2, x: 2 }}
                onClick={() => setActiveSkill(isSelected ? null : s)}
                className={`p-3.5 rounded-2xl border transition cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 shadow-sm'
                    : 'bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800 hover:border-warm-300 dark:hover:border-charcoal-700'
                }`}
              >
                <div className='flex items-start justify-between gap-2'>
                  <div>
                    <span className='font-bold text-sm text-neutral-900 dark:text-white block'>
                      {s.name}
                    </span>
                    <span className='text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1'>
                      {s.highlight}
                    </span>
                  </div>

                  <span className='text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-warm-200/60 dark:bg-charcoal-750 text-neutral-700 dark:text-neutral-300 flex-shrink-0'>
                    {s.level}
                  </span>
                </div>

                <div className='flex items-center justify-between pt-2 border-t border-warm-100 dark:border-charcoal-800/80 text-[11px]'>
                  <span className='text-[10px] font-mono text-neutral-400'>
                    {s.discipline}
                  </span>
                  {hasContext ? (
                    <span className='text-blue-600 dark:text-blue-400 font-semibold font-mono text-[10px] flex items-center gap-1'>
                      <span>Inspect Context</span>
                      <span>→</span>
                    </span>
                  ) : (
                    <span className='text-neutral-400 text-[10px]'>Verified</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Skill Production Context Inspector Modal/Card */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className='p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-charcoal-900 dark:via-charcoal-850 dark:to-blue-950/30 border border-blue-300 dark:border-blue-900/60 shadow-lg text-left'
            >
              <div className='flex items-center justify-between pb-4 mb-4 border-b border-warm-200 dark:border-charcoal-750'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-xl bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs'>
                    <FaLaptopCode />
                  </div>
                  <div>
                    <span className='text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono'>
                      Production Engineering Deep-Dive
                    </span>
                    <h3 className='text-xl font-extrabold text-neutral-900 dark:text-white'>
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveSkill(null)}
                  className='p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-warm-200/50 dark:hover:bg-charcoal-750 transition'
                  aria-label='Close deep dive'
                >
                  <FaTimes />
                </button>
              </div>

              {skillProductionContext[activeSkill.name] ? (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-xs'>
                  <div>
                    <span className='font-bold uppercase tracking-wider text-neutral-400 font-mono block mb-1'>
                      Shipped Deployment:
                    </span>
                    <p className='font-semibold text-neutral-900 dark:text-white text-sm'>
                      {skillProductionContext[activeSkill.name].shippedAt}
                    </p>
                    <p className='text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed'>
                      {skillProductionContext[activeSkill.name].scope}
                    </p>
                  </div>

                  <div>
                    <span className='font-bold uppercase tracking-wider text-neutral-400 font-mono block mb-1'>
                      Technical Problem Solved:
                    </span>
                    <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                      {skillProductionContext[activeSkill.name].challengeSolved}
                    </p>
                  </div>

                  <div className='flex flex-col justify-between'>
                    <div>
                      <span className='font-bold uppercase tracking-wider text-neutral-400 font-mono block mb-1'>
                        Related Live Demo:
                      </span>
                      <p className='font-semibold text-blue-600 dark:text-blue-400'>
                        {skillProductionContext[activeSkill.name].relatedDemo}
                      </p>
                    </div>

                    <a
                      href='#projects'
                      className='mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white underline hover:text-blue-600 dark:hover:text-blue-400'
                    >
                      <span>Jump to Live Project Previews →</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className='text-xs text-neutral-600 dark:text-neutral-300'>
                  <p className='leading-relaxed'>
                    <strong className='text-neutral-900 dark:text-white'>{activeSkill.name}</strong> was actively applied by Dinesh across client and internal production web systems. Highlight: {activeSkill.highlight}. Categorized as {activeSkill.level} competence.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;