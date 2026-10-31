import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutData, personalInfo } from '../data/portfolioData';
import {
  FaCompass,
  FaShieldAlt,
  FaBolt,
  FaLayerGroup,
  FaCodeBranch,
  FaTerminal,
  FaChevronDown,
  FaChevronUp,
  FaPlay,
  FaServer,
  FaMicrochip,
  FaCheckCircle,
} from 'react-icons/fa';

const engineeringDecisions = [
  {
    id: 'money-movement',
    title: 'Pessimistic Locking vs. Optimistic UI in Payouts',
    domain: 'Fintech Money Movement',
    badge: 'Critical Security',
    badgeColor: 'border-rose-500/40 bg-rose-500/15 text-rose-600 dark:text-rose-400',
    summary:
      'In consumer apps, optimistic UI feels instant. In high-stakes B2B disbursements, an optimistic false-positive on a $50,000 payout destroys merchant trust. I designed deterministic state machines with idempotent request tokens.',
    telemetry: {
      action: 'PAYOUT_INITIATE_DISPATCH',
      idempotencyKey: 'idem_9f48a12e8b',
      payloadAudit: 'HMAC-SHA256 Validated',
      retryPolicy: 'Linear backoff (3 attempts, 1.2s timeout)',
      recoveryGuarantee: 'Zero duplicate disbursements guaranteed',
    },
    codeSnippet: `// Idempotent disbursement dispatch with strict lock
const dispatchPayoutIntent = async (payout) => {
  setLockState({ locked: true, reason: 'Awaiting Maker signature' });
  const idempotencyKey = crypto.randomUUID();
  
  const response = await api.post('/v1/payouts/authorize', {
    amount: payout.amount,
    beneficiaryId: payout.recipient,
  }, { headers: { 'X-Idempotency-Key': idempotencyKey } });

  return response.data; // Checker approval required
};`,
  },
  {
    id: 'state-density',
    title: 'Memoized Slices vs. Virtualized Table Dom',
    domain: 'PayIn Settlement Dashboard',
    badge: 'Performance SLA',
    badgeColor: 'border-blue-500/40 bg-blue-500/15 text-blue-600 dark:text-blue-400',
    summary:
      'Filtering 5,000+ daily merchant ledger entries across 12 criteria often triggers cascading DOM repaints. I engineered memoized Redux Toolkit selectors paired with URL SearchParams synchronization.',
    telemetry: {
      action: 'SETTLEMENT_FILTER_APPLIED',
      reRenderLatency: '1.4ms (Memoized Selector Hit)',
      urlSync: '?rail=UPI&status=Settled&range=today',
      domReflows: '0 layout thrashing cycles',
      recoveryGuarantee: '100% shareable deep-linked dashboard states',
    },
    codeSnippet: `// URL-synced memoized selector preventing table re-renders
export const selectFilteredLedger = createSelector(
  [(state) => state.settlements.items, (_, filterParams) => filterParams],
  (items, { rail, status, query }) => {
    return items.filter(txn => 
      (!rail || txn.rail === rail) &&
      (!status || txn.status === status) &&
      (!query || txn.id.includes(query))
    );
  }
);`,
  },
  {
    id: 'form-resilience',
    title: 'Encrypted Storage Hydration vs. Volatile Form State',
    domain: '6-Step Signzy KYC Engine',
    badge: 'Zero Data Loss',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
    summary:
      'Merchants abandoning mid-way through document uploads lose patience when forms reset on reload. I created a schema-validated draft hydration layer syncing seamlessly with Signzy verification APIs.',
    telemetry: {
      action: 'KYC_DRAFT_HYDRATED',
      storageBackend: 'Encrypted LocalStorage Slices',
      apiIntegration: 'Signzy PAN & Penny-Drop Verification',
      turnaroundImpact: '75% reduction in manual verification cycle',
      recoveryGuarantee: 'Zero loss across browser refreshes & network drops',
    },
    codeSnippet: `// Auto-hydrating KYC form machine with Signzy verification
export const useKycDraftMachine = (merchantId) => {
  const [draft, setDraft] = usePersistedState(\`kyc_\${merchantId}\`);

  const verifyStep = async (stepData) => {
    const verified = await signzyApi.verifyPanOrGst(stepData);
    setDraft(prev => ({ ...prev, ...verified, step: prev.step + 1 }));
  };

  return { draft, verifyStep };
};`,
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
  const [activeDecisionId, setActiveDecisionId] = useState('money-movement');
  const [expandedPrinciple, setExpandedPrinciple] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedLog, setSimulatedLog] = useState(null);

  const activeDecision =
    engineeringDecisions.find((d) => d.id === activeDecisionId) ||
    engineeringDecisions[0];

  const handleSimulate = (decision) => {
    setIsSimulating(true);
    setSimulatedLog('Initializing handshake & verifying HMAC signature...');
    setTimeout(() => {
      setSimulatedLog(
        `✓ Idempotency Key verified: ${decision.telemetry.idempotencyKey || 'idem_7721'}`
      );
    }, 400);
    setTimeout(() => {
      setSimulatedLog(
        `✓ Action confirmed: ${decision.telemetry.action} (Latency: ${decision.telemetry.reRenderLatency || '0.8ms'})`
      );
    }, 850);
    setTimeout(() => {
      setSimulatedLog(`★ Execution Resolved: ${decision.telemetry.recoveryGuarantee}`);
      setIsSimulating(false);
    }, 1300);
  };

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
          className='text-left mb-12 sm:mb-14'
        >
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-3'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
            </span>
            <FaCompass className='text-xs' />
            <span>Engineering Philosophy & Architecture</span>
          </div>
          <h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            About {personalInfo.name}
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2 leading-relaxed'>
            A perspective on frontend engineering shaped by real product deadlines, high-stakes fintech operations, and user trust.
          </p>
        </motion.div>

        {/* Vibrant Impact Metrics Bar (Rich Colorful Badges & Gradients) */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-14 text-left'>
          {/* Metric 1 - Blue/Cyan */}
          <motion.div
            whileHover={{ y: -3 }}
            className='p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-white dark:to-charcoal-900 border border-blue-500/30 dark:border-blue-500/40 shadow-sm relative overflow-hidden group'
          >
            <div className='absolute -right-4 -bottom-4 w-16 h-16 bg-blue-500/15 rounded-full blur-xl group-hover:bg-blue-500/25 transition-all' />
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
            className='p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white dark:to-charcoal-900 border border-emerald-500/30 dark:border-emerald-500/40 shadow-sm relative overflow-hidden group'
          >
            <div className='absolute -right-4 -bottom-4 w-16 h-16 bg-emerald-500/15 rounded-full blur-xl group-hover:bg-emerald-500/25 transition-all' />
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
            className='p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-white dark:to-charcoal-900 border border-purple-500/30 dark:border-purple-500/40 shadow-sm relative overflow-hidden group'
          >
            <div className='absolute -right-4 -bottom-4 w-16 h-16 bg-purple-500/15 rounded-full blur-xl group-hover:bg-purple-500/25 transition-all' />
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
            className='p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-white dark:to-charcoal-900 border border-amber-500/30 dark:border-amber-500/40 shadow-sm relative overflow-hidden group'
          >
            <div className='absolute -right-4 -bottom-4 w-16 h-16 bg-amber-500/15 rounded-full blur-xl group-hover:bg-amber-500/25 transition-all' />
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

        {/* Narrative & Principles Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start text-left mb-14'>
          {/* Narrative Column with Left Accent Borders and Vibrant Chips */}
          <div className='lg:col-span-7 space-y-4'>
            {aboutData.narrative.map((paragraph, idx) => {
              const meta = narrativeMeta[idx] || narrativeMeta[0];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
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
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Core Principles Column (Vibrant Badges & Colorful Hover) */}
          <div className='lg:col-span-5 space-y-3.5'>
            <div className='flex items-center justify-between mb-1'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono flex items-center gap-1.5'>
                <FaMicrochip className='text-blue-500' />
                <span>Core Engineering Principles</span>
              </h3>
              <span className='text-[10px] text-blue-600 dark:text-blue-400 font-mono font-semibold'>
                Interactive
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

        {/* Detailing Engine: Interactive Production Decisions & Under-the-Hood Inspector (Vivid & Modern) */}
        <div className='rounded-2xl border border-warm-300 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 overflow-hidden shadow-xl text-left'>
          {/* Luminous Top Accent Strip */}
          <div className='h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500' />

          <div className='p-5 sm:p-7'>
            {/* Header */}
            <div className='flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-warm-200 dark:border-charcoal-800'>
              <div>
                <span className='text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 font-mono flex items-center gap-1.5'>
                  <FaServer className='text-xs' />
                  <span>Under The Hood · Architectural Decisions</span>
                </span>
                <h3 className='text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white mt-1'>
                  How I Solve Critical Frontend Engineering Challenges
                </h3>
              </div>

              {/* Decision Selectors */}
              <div className='flex items-center gap-1 p-1 rounded-xl bg-warm-100 dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700 text-xs font-semibold overflow-x-auto max-w-full'>
                {engineeringDecisions.map((dec, i) => (
                  <button
                    key={dec.id}
                    onClick={() => {
                      setActiveDecisionId(dec.id);
                      setSimulatedLog(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap text-xs font-bold ${
                      activeDecisionId === dec.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Scenario {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Decision Breakdown */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
              {/* Left: Summary & Live Simulation Trigger */}
              <div className='lg:col-span-6 space-y-4'>
                <div className='flex items-center gap-2'>
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${activeDecision.badgeColor}`}
                  >
                    {activeDecision.badge}
                  </span>
                  <span className='text-xs font-mono text-neutral-500 dark:text-neutral-400'>
                    {activeDecision.domain}
                  </span>
                </div>

                <h4 className='text-base sm:text-lg font-bold text-neutral-900 dark:text-white'>
                  {activeDecision.title}
                </h4>

                <p className='text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                  {activeDecision.summary}
                </p>

                {/* Telemetry Matrix with Colored Callouts */}
                <div className='p-4 rounded-xl bg-gradient-to-br from-warm-50 to-warm-100/60 dark:from-charcoal-850 dark:to-charcoal-900 border border-warm-200 dark:border-charcoal-750 text-xs space-y-2.5'>
                  <span className='text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block'>
                    System Telemetry & Guarantees
                  </span>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px] font-mono'>
                    <div className='p-2 rounded-lg bg-white/70 dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700'>
                      <span className='text-neutral-400 block text-[10px]'>Action Type:</span>
                      <span className='text-blue-600 dark:text-blue-400 font-bold'>
                        {activeDecision.telemetry.action}
                      </span>
                    </div>
                    <div className='p-2 rounded-lg bg-white/70 dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700'>
                      <span className='text-neutral-400 block text-[10px]'>Recovery Guarantee:</span>
                      <span className='text-emerald-600 dark:text-emerald-400 font-bold'>
                        {activeDecision.telemetry.recoveryGuarantee}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Simulation Trigger Button */}
                <div className='pt-2 flex flex-wrap items-center gap-3'>
                  <button
                    onClick={() => handleSimulate(activeDecision)}
                    disabled={isSimulating}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-sm ${
                      isSimulating
                        ? 'bg-neutral-300 dark:bg-charcoal-700 text-neutral-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/20'
                    }`}
                  >
                    <FaPlay className={`text-[10px] ${isSimulating ? 'animate-spin' : ''}`} />
                    <span>{isSimulating ? 'Simulating Engine...' : 'Simulate Telemetry Execution'}</span>
                  </button>

                  {simulatedLog && (
                    <span className='text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 animate-pulse'>
                      {simulatedLog}
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Concrete Implementation Pattern Code Box */}
              <div className='lg:col-span-6'>
                <div className='rounded-xl bg-neutral-950 text-neutral-200 border border-neutral-800 overflow-hidden text-xs font-mono shadow-md'>
                  <div className='px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400'>
                    <span className='flex items-center gap-2'>
                      <FaTerminal className='text-cyan-400' />
                      <span className='text-white font-medium'>production_pattern.ts</span>
                    </span>
                    <span className='text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30'>
                      Verified Pattern ✓
                    </span>
                  </div>
                  <pre className='p-4 overflow-x-auto text-[11px] leading-relaxed text-blue-300'>
                    <code>{activeDecision.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;