import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import {
  FaLayerGroup,
  FaSearch,
  FaLaptopCode,
  FaTimes,
  FaTerminal,
  FaFilter,
} from 'react-icons/fa';

const skillProductionContext = {
  'Next.js (App Router)': {
    shippedAt: 'SecurePay (Current)',
    scope: '60+ Screens across PayIn, PayOut, and Corporate Website',
    challengeSolved:
      'Leveraged Server Components for initial shell data streaming combined with client-side interactive tables, decreasing Time to Interactive (TTI) by 40%.',
    relatedDemo: 'Transaction Dashboard & Onboarding Engine',
    telemetry: {
      engine: 'React Server Components + Edge Streaming',
      bundleImpact: 'Zero client JS overhead for page shells',
      cachePolicy: 'Dynamic tags with edge invalidation',
    },
    codeSample: `// Next.js App Router Server Component Streaming
export default async function SettlementPage({ searchParams }) {
  const initialData = await fetchSettlementStream(searchParams);
  return (
    <Suspense fallback={<LedgerSkeleton />}>
      <SettlementTable initialData={initialData} />
    </Suspense>
  );
}`,
  },
  'React.js': {
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Core frontend engine for all 4 SecurePay fintech systems & 5 client applications',
    challengeSolved:
      'Engineered atomic, modular component hierarchies with strict separation of data fetching, state selectors, and presentational elements.',
    relatedDemo: '3-Step Checkout Flow & Maker-Checker Workflow',
    telemetry: {
      engine: 'React 18 Concurrent Rendering',
      bundleImpact: 'Sub-component lazy loading via React.lazy',
      cachePolicy: 'Memoized selector trees preventing repaints',
    },
    codeSample: `// Separating data-fetching from presentation
export const CheckoutContainer = ({ intentId }) => {
  const { session, isPending } = usePaymentSession(intentId);
  if (isPending) return <CheckoutSkeleton />;
  return <PaymentRailSelector session={session} />;
};`,
  },
  'TypeScript': {
    shippedAt: 'SecurePay Transaction Gateway',
    scope: 'Strict end-to-end type contracts across payment gateway and API payloads',
    challengeSolved:
      'Defined compile-time discriminated unions for payment methods (UPI, Card, Net Banking), completely eliminating undefined runtime crashes in production checkout flows.',
    relatedDemo: '3-Step Checkout Flow',
    telemetry: {
      engine: 'TypeScript 5.x Strict Mode',
      bundleImpact: 'Zero runtime bundle overhead (types stripped)',
      cachePolicy: 'API response contract validation via Zod / type guards',
    },
    codeSample: `// Discriminated union eliminating checkout crashes
type PaymentPayload =
  | { method: 'UPI'; vpa: string }
  | { method: 'CARD'; cardNumber: string; expiry: string; cvv: string }
  | { method: 'NETBANKING'; bankCode: string };`,
  },
  'Redux Toolkit': {
    shippedAt: 'SecurePay PayIn & PayOut Portals',
    scope: 'Centralized state management across settlement tables, balance cards, and filters',
    challengeSolved:
      'Created custom slices with createAsyncThunk and memoized selectors to prevent unnecessary table re-renders during high-frequency balance updates.',
    relatedDemo: 'Transaction Dashboard',
    telemetry: {
      engine: 'Redux Toolkit + createEntityAdapter',
      bundleImpact: 'Normalized state slice reducing memory footprint',
      cachePolicy: 'Reselect memoized computations',
    },
    codeSample: `// Normalized settlement entity slice with async dispatcher
export const settlementSlice = createSlice({
  name: 'settlements',
  initialState: settlementsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(syncSettlements.fulfilled, settlementsAdapter.setAll);
  },
});`,
  },
  'Tailwind CSS': {
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Design token system and responsive layouts across 80+ translated Figma mockups',
    challengeSolved:
      'Crafted custom color tokens, accessible dark mode support, and utility classes that maintain 60fps scrolling performance without CSS bloat.',
    relatedDemo: 'Interactive Component Suite',
    telemetry: {
      engine: 'Tailwind JIT Engine',
      bundleImpact: '< 15KB generated production CSS',
      cachePolicy: 'Universal CSS variables for zero-flash theming',
    },
    codeSample: `// Utility-first token design system with dark mode
<div className="bg-warm-50 dark:bg-charcoal-950 text-neutral-900 dark:text-neutral-100 transition-colors">
  <button className="bg-blue-600 hover:bg-blue-500 text-white shadow-xs rounded-xl px-4 py-2" />
</div>`,
  },
  'Material UI (MUI)': {
    shippedAt: 'SecurePay Merchant Portals',
    scope: 'High-density transaction tables, modals, drawer navigation, and form components',
    challengeSolved:
      'Customized MUI themes with bespoke typography and layout overrides to match SecurePay design standards while preserving accessible ARIA roles.',
    relatedDemo: 'Transaction Dashboard',
    telemetry: {
      engine: 'Emotion-styled MUI Theme Engine',
      bundleImpact: 'Tree-shaken modular component imports',
      cachePolicy: 'Accessible keyboard ARIA 1.2 compliance',
    },
    codeSample: `// Customized high-density MUI table theme override
export const dataTableTheme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: { padding: '8px 16px', fontSize: '12px' },
      },
    },
  },
});`,
  },
  'Signzy APIs': {
    shippedAt: 'SecurePay Merchant Onboarding Engine',
    scope: 'Automated 6-step KYC verification workflow',
    challengeSolved:
      'Integrated real-time PAN validation, GSTIN checking, and instant bank penny-drop verification, reducing merchant onboarding turnaround by 75%.',
    relatedDemo: 'Automated KYC Pipeline',
    telemetry: {
      engine: 'Signzy OCR & Microservice APIs',
      bundleImpact: 'Asynchronous webhook callbacks',
      cachePolicy: 'Encrypted client draft hydration to prevent drop-offs',
    },
    codeSample: `// Real-time Signzy Penny Drop & PAN OCR Verification
export const verifySignzyKyc = async (panNumber, bankAccount) => {
  const panResult = await signzyClient.verifyPan({ pan: panNumber });
  const pennyDrop = await signzyClient.pennyDrop({ account: bankAccount });
  return { isApproved: panResult.valid && pennyDrop.verified };
};`,
  },
  'REST APIs & Axios': {
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Secure client-server communication across all frontend microservices',
    challengeSolved:
      'Engineered Axios interceptors for automated JWT token refresh, exponential backoff retries, and unified global error notifications.',
    relatedDemo: 'Maker-Checker Workflow',
    telemetry: {
      engine: 'Axios Interceptor Pipeline',
      bundleImpact: 'Single shared HTTP client singleton',
      cachePolicy: 'Exponential backoff with idempotency verification',
    },
    codeSample: `// Universal Axios interceptor with token refresh
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      await refreshJwtToken();
      return api.request(err.config);
    }
    return Promise.reject(err);
  }
);`,
  },
  'Formik & Yup': {
    shippedAt: 'SecurePay Merchant Onboarding',
    scope: 'Complex conditional multi-step merchant registration forms',
    challengeSolved:
      'Structured step-by-step schema validation that hydrates from browser storage to ensure merchants never lose entered verification data.',
    relatedDemo: 'Automated KYC Pipeline',
    telemetry: {
      engine: 'Yup Schema Engine + Formik Form Machine',
      bundleImpact: 'Lightweight client-side validation',
      cachePolicy: 'Per-step local storage sync',
    },
    codeSample: `// Multi-step validation schema with recovery hydration
export const kycStepSchemas = [
  Yup.object({ businessName: Yup.string().required() }),
  Yup.object({ pan: Yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/) }),
];`,
  },
};

const getSkillColorTokens = (name, discipline) => {
  if (name.includes('React') || name.includes('Next')) {
    return {
      dot: 'bg-cyan-500',
      badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
      borderHover: 'hover:border-cyan-500/50',
    };
  }
  if (name.includes('TypeScript') || name.includes('JavaScript')) {
    return {
      dot: 'bg-blue-500',
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      borderHover: 'hover:border-blue-500/50',
    };
  }
  if (name.includes('Redux') || name.includes('State')) {
    return {
      dot: 'bg-purple-500',
      badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      borderHover: 'hover:border-purple-500/50',
    };
  }
  if (name.includes('Tailwind') || name.includes('Material') || name.includes('Responsive')) {
    return {
      dot: 'bg-teal-500',
      badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
      borderHover: 'hover:border-teal-500/50',
    };
  }
  if (name.includes('Signzy') || name.includes('API') || name.includes('Formik')) {
    return {
      dot: 'bg-emerald-500',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      borderHover: 'hover:border-emerald-500/50',
    };
  }
  return {
    dot: 'bg-indigo-500',
    badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    borderHover: 'hover:border-indigo-500/50',
  };
};

const SkillsSection = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkill, setActiveSkill] = useState(null);
  const [mobileShowAll, setMobileShowAll] = useState(false);

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

  // On mobile, if 'All' is chosen and user hasn't expanded, show top 6 core skills to keep view clean
  const visibleSkills =
    selectedDiscipline === 'All' && !searchQuery && !mobileShowAll
      ? filteredSkills.slice(0, 6)
      : filteredSkills;

  return (
    <section
      id='skills'
      className='relative py-16 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 overflow-hidden'
    >
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
            Technologies utilized in shipping production applications. Click any skill chip below to inspect telemetry, production challenges solved, and concrete patterns.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <div className='flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 text-left'>
          {/* Discipline Filters */}
          <div className='flex items-center gap-1.5 p-1 rounded-2xl bg-warm-200/80 dark:bg-charcoal-900 border border-warm-300 dark:border-charcoal-800 text-xs font-semibold overflow-x-auto max-w-full'>
            {disciplines.map((disc) => (
              <button
                key={disc}
                onClick={() => {
                  setSelectedDiscipline(disc);
                  setMobileShowAll(false);
                }}
                className={`px-3 py-1.5 rounded-xl transition whitespace-nowrap ${
                  selectedDiscipline === disc
                    ? 'bg-white dark:bg-charcoal-800 text-blue-600 dark:text-blue-400 border border-blue-500/40 shadow-xs font-bold'
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

        {/* Skills Interactive Grid (Responsive on Mobile & Vivid Badges) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6 text-left'>
          {visibleSkills.map((s, idx) => {
            const isSelected = activeSkill && activeSkill.name === s.name;
            const hasContext = !!skillProductionContext[s.name];
            const colors = getSkillColorTokens(s.name, s.discipline);

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                onClick={() => setActiveSkill(isSelected ? null : s)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-blue-50/90 dark:bg-charcoal-850 border-blue-500 shadow-md ring-1 ring-blue-500/30'
                    : `bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800 ${colors.borderHover} hover:shadow-xs`
                }`}
              >
                <div className='flex items-start justify-between gap-2'>
                  <div>
                    <div className='flex items-center gap-2'>
                      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                      <span className='font-bold text-sm text-neutral-900 dark:text-white block'>
                        {s.name}
                      </span>
                    </div>
                    <span className='text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1 pl-4'>
                      {s.highlight}
                    </span>
                  </div>

                  {/* Vibrant Alive Badge */}
                  <span
                    className={`inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${colors.badge}`}
                  >
                    <span className='relative flex h-1.5 w-1.5 mr-1.5'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-current'></span>
                    </span>
                    <span>{s.level}</span>
                  </span>
                </div>

                <div className='flex items-center justify-between pt-2 border-t border-warm-100 dark:border-charcoal-800/80 text-[11px]'>
                  <span className='text-[10px] font-mono text-neutral-500 dark:text-neutral-400'>
                    {s.discipline}
                  </span>
                  {hasContext ? (
                    <span className='text-blue-600 dark:text-blue-400 font-bold font-mono text-[10px] flex items-center gap-1 hover:underline'>
                      <span>Deep Dive & Telemetry</span>
                      <span>→</span>
                    </span>
                  ) : (
                    <span className='text-emerald-600 dark:text-emerald-400 font-mono text-[10px]'>
                      Production Ready ✓
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View Toggle: Expand / Collapse when on 'All' */}
        {selectedDiscipline === 'All' && !searchQuery && filteredSkills.length > 6 && (
          <div className='sm:hidden mb-8 text-center'>
            <button
              onClick={() => setMobileShowAll(!mobileShowAll)}
              className='px-4 py-2 rounded-xl text-xs font-bold bg-warm-200/70 dark:bg-charcoal-800 text-blue-600 dark:text-blue-400 border border-warm-300 dark:border-charcoal-700 hover:bg-warm-300/60 dark:hover:bg-charcoal-750 transition inline-flex items-center gap-2 shadow-xs'
            >
              <FaFilter className='text-[10px]' />
              <span>
                {mobileShowAll
                  ? 'Collapse to Core 6 Skills'
                  : `Show All ${filteredSkills.length} Technical Skills`}
              </span>
              <span>{mobileShowAll ? '↑' : '↓'}</span>
            </button>
          </div>
        )}

        {/* Selected Skill Production Context Inspector Modal/Card with Under-the-Hood Telemetry */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className='p-4 sm:p-7 rounded-2xl bg-white dark:bg-charcoal-900 border border-blue-400/60 dark:border-blue-500/40 shadow-xl text-left mt-6'
            >
              <div className='flex items-center justify-between pb-4 mb-4 border-b border-warm-200 dark:border-charcoal-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-xl bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs'>
                    <FaLaptopCode />
                  </div>
                  <div>
                    <span className='text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono'>
                      Production Engineering Deep-Dive
                    </span>
                    <h3 className='text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white'>
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveSkill(null)}
                  className='p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-warm-200/50 dark:hover:bg-charcoal-800 transition'
                  aria-label='Close deep dive'
                >
                  <FaTimes />
                </button>
              </div>

              {skillProductionContext[activeSkill.name] ? (
                <div className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-xs'>
                    <div>
                      <span className='font-bold uppercase tracking-wider text-neutral-400 font-mono block mb-1'>
                        Shipped Deployment:
                      </span>
                      <p className='font-bold text-neutral-900 dark:text-white text-sm'>
                        {skillProductionContext[activeSkill.name].shippedAt}
                      </p>
                      <p className='text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed text-xs'>
                        {skillProductionContext[activeSkill.name].scope}
                      </p>
                    </div>

                    <div>
                      <span className='font-bold uppercase tracking-wider text-neutral-400 font-mono block mb-1'>
                        Technical Problem Solved:
                      </span>
                      <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed text-xs'>
                        {skillProductionContext[activeSkill.name].challengeSolved}
                      </p>
                    </div>

                    <div className='flex flex-col justify-between'>
                      <div>
                        <span className='font-bold uppercase tracking-wider text-neutral-400 font-mono block mb-1'>
                          Related Live Demo:
                        </span>
                        <p className='font-bold text-blue-600 dark:text-blue-400 text-sm'>
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

                  {/* Under the Hood Internal Telemetry & Code Box */}
                  <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4 border-t border-warm-200 dark:border-charcoal-800 items-start'>
                    <div className='lg:col-span-5 p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-xs space-y-2'>
                      <span className='text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block'>
                        Under The Hood · Telemetry
                      </span>
                      <div className='space-y-1.5 text-[11px] font-mono'>
                        <div>
                          <span className='text-neutral-400 block'>Execution Engine:</span>
                          <span className='text-neutral-800 dark:text-neutral-200 font-bold'>
                            {skillProductionContext[activeSkill.name].telemetry.engine}
                          </span>
                        </div>
                        <div>
                          <span className='text-neutral-400 block'>Bundle Impact:</span>
                          <span className='text-emerald-600 dark:text-emerald-400 font-bold'>
                            {skillProductionContext[activeSkill.name].telemetry.bundleImpact}
                          </span>
                        </div>
                        <div>
                          <span className='text-neutral-400 block'>Cache / Safety Policy:</span>
                          <span className='text-blue-600 dark:text-blue-400 font-bold'>
                            {skillProductionContext[activeSkill.name].telemetry.cachePolicy}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='lg:col-span-7 rounded-xl bg-neutral-950 text-neutral-200 border border-neutral-800 overflow-hidden text-xs font-mono shadow-sm'>
                      <div className='px-3.5 py-1.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400'>
                        <span className='flex items-center gap-1.5'>
                          <FaTerminal className='text-blue-400 text-[10px]' />
                          <span>internal_implementation.ts</span>
                        </span>
                        <span className='text-emerald-400'>Compiled Clean ✓</span>
                      </div>
                      <pre className='p-3.5 overflow-x-auto text-[11px] leading-relaxed text-blue-300'>
                        <code>{skillProductionContext[activeSkill.name].codeSample}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='text-xs text-neutral-600 dark:text-neutral-300'>
                  <p className='leading-relaxed'>
                    <strong className='text-neutral-900 dark:text-white'>{activeSkill.name}</strong> is utilized across production engineering workflows. Highlight: {activeSkill.highlight}. Competence: {activeSkill.level}.
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