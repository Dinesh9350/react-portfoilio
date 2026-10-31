import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import TechBadge from './TechBadge';
import {
  FaLayerGroup,
  FaSearch,
  FaTimes,
  FaTerminal,
  FaFilter,
  FaCopy,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';

const skillProductionContext = {
  'Next.js (App Router)': {
    concept:
      'Server-first hybrid architecture leveraging React Server Components (RSC) to stream HTML directly from the edge, keeping heavy modules off the client bundle.',
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
  'Next.js (Pages Router)': {
    concept:
      'Page-based server-side rendering (SSR) and static site generation (SSG) with Stale-While-Revalidate caching for instant document delivery.',
    shippedAt: 'BucleLabs & SecurePay Legacy Portals',
    scope: 'SSR and SSG page generation for documentation and merchant reports',
    challengeSolved:
      'Engineered getServerSideProps with distributed Redis caching to render dynamic merchant report previews in sub-300ms.',
    relatedDemo: 'Merchant Analytics Reporting',
    telemetry: {
      engine: 'Node.js SSR Runtime',
      bundleImpact: 'Automatic per-page bundle splitting',
      cachePolicy: 'Stale-While-Revalidate (s-maxage=60)',
    },
    codeSample: `// Dynamic SSR report preview with edge cache headers
export async function getServerSideProps(context) {
  const { merchantId } = context.params;
  const report = await getMerchantSummary(merchantId);
  context.res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  return { props: { report } };
}`,
  },
  'React.js': {
    concept:
      'Declarative component-driven UI with Concurrent Mode scheduling, fiber tree reconciliation, and memoized selector subscriptions.',
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Core frontend engine across all 4 SecurePay systems & client applications',
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
  'JavaScript (ES6+)': {
    concept:
      'Event-driven single-threaded execution model utilizing asynchronous event loops, microtask queues, and immutable functional transformations.',
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Asynchronous state machines, event loops, financial math, and Luhn checksum',
    challengeSolved:
      'Implemented client-side Luhn checksum algorithm and BIN identification running in sub-2ms without blocking the browser UI thread.',
    relatedDemo: '3-Step Transaction Gateway',
    telemetry: {
      engine: 'V8 JIT Optimized Execution',
      bundleImpact: 'Native browser APIs (zero npm dependencies)',
      cachePolicy: 'Pure functions without side effects',
    },
    codeSample: `// Real-time Luhn algorithm card validation
export const validateLuhn = (numStr) => {
  const clean = numStr.replace(/\\D/g, '');
  let sum = 0, alt = false;
  for (let i = clean.length - 1; i >= 0; i--) {
    let n = parseInt(clean[i], 10);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n; alt = !alt;
  }
  return sum % 10 === 0;
};`,
  },
  'TypeScript': {
    concept:
      'Static type system enforcing strict compile-time invariants, discriminated union state machines, and elimination of undefined runtime exceptions.',
    shippedAt: 'SecurePay Transaction Gateway',
    scope: 'Strict end-to-end type contracts across payment gateway and API payloads',
    challengeSolved:
      'Defined compile-time discriminated unions for payment rails (UPI, Card, Net Banking), completely eliminating undefined runtime crashes in production checkout flows.',
    relatedDemo: '3-Step Checkout Flow',
    telemetry: {
      engine: 'TypeScript 5.x Strict Mode',
      bundleImpact: 'Zero runtime bundle overhead (types stripped)',
      cachePolicy: 'Type guards with runtime invariant assertions',
    },
    codeSample: `// Discriminated union eliminating checkout crashes
type PaymentPayload =
  | { method: 'UPI'; vpa: string }
  | { method: 'CARD'; cardNumber: string; expiry: string; cvv: string }
  | { method: 'NETBANKING'; bankCode: string };`,
  },
  'HTML5 & CSS3': {
    concept:
      'Accessible document object model with semantic ARIA landmark roles, responsive CSS grid/flexbox, and hardware-accelerated rendering layers.',
    shippedAt: 'SecurePay Corporate Web & BucleLabs',
    scope: 'Semantic document hierarchy, accessible ARIA landmarks, and microdata',
    challengeSolved:
      'Ensured WCAG 2.1 AA accessibility compliance across merchant input forms with programmatic aria-describedby error associations and keyboard focus traps.',
    relatedDemo: 'Corporate Web Portal',
    telemetry: {
      engine: 'Native Browser DOM Parser',
      bundleImpact: 'Zero overhead / 100% native semantic tags',
      cachePolicy: 'CSS containment & GPU compositing layers',
    },
    codeSample: `// Accessible form markup with aria landmark bindings
<form aria-labelledby="kyc-heading" noValidate>
  <fieldset>
    <legend className="sr-only">Business Identity</legend>
    <input id="pan" aria-describedby="pan-error" required />
    <span id="pan-error" role="alert" className="text-rose-500" />
  </fieldset>
</form>`,
  },
  'Redux Toolkit': {
    concept:
      'Normalized unidirectional global state container utilizing Immer for immutable slice updates and Reselect for memoized selector evaluations.',
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
    builder.addCase(fetchSettlements.fulfilled, settlementsAdapter.setAll);
  },
});`,
  },
  'Redux': {
    concept:
      'Predictable centralized store with strict action dispatch pipelines and custom middleware for idempotent telemetry interception.',
    shippedAt: 'SecurePay Core Portals',
    scope: 'Unidirectional financial transaction dispatch pipelines',
    challengeSolved:
      'Implemented custom Redux middleware for automatic telemetry logging, audit tracking, and idempotent action deduplication across payment dispatches.',
    relatedDemo: 'Maker-Checker Approval Pipeline',
    telemetry: {
      engine: 'Predictable Redux Store Pipeline',
      bundleImpact: 'Centralized state singleton',
      cachePolicy: 'Immutable state tree snapshots',
    },
    codeSample: `// Redux idempotency middleware preventing double dispatches
const idempotencyMiddleware = (store) => (next) => (action) => {
  if (action.meta?.idempotencyKey) {
    const seen = store.getState().dispatchedKeys;
    if (seen.has(action.meta.idempotencyKey)) return;
  }
  return next(action);
};`,
  },
  'React Context API': {
    concept:
      'React tree state injection mechanism designed for ambient concerns (themes, user auth sessions) without cascading prop drilling.',
    shippedAt: 'SecurePay Global Web App',
    scope: 'Theme toggling, user authentication sessions, and modal orchestrations',
    challengeSolved:
      'Built decoupled context providers split into state and dispatch contexts to avoid re-rendering entire component subtrees on theme or session changes.',
    relatedDemo: 'Global Theme & Session Engine',
    telemetry: {
      engine: 'React Context with Split Providers',
      bundleImpact: 'Built-in React runtime primitive',
      cachePolicy: 'Memoized context value objects',
    },
    codeSample: `// Split Context preventing cascading consumer re-renders
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const toggle = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), []);
  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={toggle}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};`,
  },
  'React Query': {
    concept:
      'Asynchronous server-state synchronization engine managing declarative cache keys, background refetches, and optimistic mutation rollbacks.',
    shippedAt: 'SecurePay Analytics & Merchant Feeds',
    scope: 'Asynchronous server-state caching, background polling, and mutation invalidation',
    challengeSolved:
      'Configured query invalidation keys to trigger instant background refetches of pending payout statuses every 3 seconds without user interruption.',
    relatedDemo: 'Real-Time Settlement Feeds',
    telemetry: {
      engine: 'TanStack Query Client',
      bundleImpact: 'Lightweight client query cache',
      cachePolicy: 'Stale-Time: 10s, Garbage Collection: 5m',
    },
    codeSample: `// Intelligent polling query for pending payouts
export const useLiveSettlements = (batchId) => {
  return useQuery({
    queryKey: ['settlement', batchId],
    queryFn: () => fetchBatchStatus(batchId),
    refetchInterval: (data) => (data?.status === 'Processing' ? 3000 : false),
  });
};`,
  },
  'REST APIs & Axios': {
    concept:
      'Stateless HTTP client architecture configured with request/response interceptors for automatic JWT rotation and exponential backoff.',
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
  async (error) => {
    if (error.response?.status === 401) {
      await refreshAuthToken();
      return api.request(error.config);
    }
    return Promise.reject(error);
  }
);`,
  },
  'Formik & Yup': {
    concept:
      'Schema-driven form state machine binding input validations, touch states, and dynamic conditional schemas without re-renders.',
    shippedAt: 'Merchant Onboarding & KYC Engine',
    scope: '6-step dynamic onboarding wizard with document verification rules',
    challengeSolved:
      'Designed conditional Yup validation schemas that dynamically adapt rules based on business entity type (Proprietorship vs Private Limited) without re-instantiating forms.',
    relatedDemo: 'Automated KYC Pipeline',
    telemetry: {
      engine: 'Declarative Yup Schema Engine',
      bundleImpact: 'Zero external CSS requirements',
      cachePolicy: 'Local draft schema serialization on change',
    },
    codeSample: `// Conditional schema based on entity type
const kycSchema = Yup.object().shape({
  businessType: Yup.string().required(),
  pan: Yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format').required(),
  gstin: Yup.string().when('businessType', {
    is: 'PvtLtd',
    then: (s) => s.required('GSTIN is mandatory for Pvt Ltd'),
  }),
});`,
  },
  'Material UI (MUI)': {
    concept:
      'Design system component library built with emotion-styled theme tokens, comprehensive keyboard ARIA 1.2, and dense enterprise table layouts.',
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
  'Tailwind CSS': {
    concept:
      'Utility-first CSS compiler that analyzes JSX files to generate a purged, dead-code-free production stylesheet under 15KB gzipped.',
    shippedAt: 'SecurePay Web & Portals',
    scope: 'Rapid responsive UI styling, dark-mode tokens, and custom utility classes',
    challengeSolved:
      'Defined clean charcoal dark-mode design tokens and responsive breakpoint variants, producing an ultra-compact production CSS footprint (<15kb gzipped).',
    relatedDemo: 'Merchant Portals & Landing Pages',
    telemetry: {
      engine: 'Tailwind CSS 3.x JIT Compiler',
      bundleImpact: 'Dead code purge generating sub-15kb gzipped CSS',
      cachePolicy: 'Universal CSS variables for zero-flash theming',
    },
    codeSample: `// Utility-first token design system with dark mode
<div className="bg-warm-50 dark:bg-charcoal-950 text-neutral-900 dark:text-neutral-100 transition-colors">
  <button className="bg-blue-600 hover:bg-blue-500 text-white shadow-xs rounded-xl px-4 py-2" />
</div>`,
  },
  'Responsive Web Design': {
    concept:
      'Mobile-first layout philosophy using fluid viewports, media queries, and sticky column pinning to maintain parity across 320px to 4K displays.',
    shippedAt: 'SecurePay & BucleLabs',
    scope: 'Multi-device layouts spanning 320px mobile viewports up to 4K desktop screens',
    challengeSolved:
      'Engineered responsive horizontal-scroll wrappers with sticky column pinning for wide financial tables on mobile screens.',
    relatedDemo: 'Mobile Financial Dashboard',
    telemetry: {
      engine: 'CSS Grid & Flexbox Viewports',
      bundleImpact: 'Zero JavaScript layout recalculations',
      cachePolicy: 'Hardware-accelerated CSS media queries',
    },
    codeSample: `// Responsive sticky column container
@media (max-width: 640px) {
  .financial-table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .sticky-col-first { position: sticky; left: 0; z-index: 10; }
}`,
  },
  'Figma-to-UI Implementation': {
    concept:
      'Pixel-perfect translation of design auto-layout gaps, color variables, and typography hierarchies into consistent engineering tokens.',
    shippedAt: 'SecurePay 4 Fintech Systems',
    scope: 'Translating 80+ Figma mockups into pixel-perfect production code',
    challengeSolved:
      'Mapped Figma auto-layout gaps, color variables, and typography scales into centralized Tailwind tokens, achieving 100% visual parity with zero design debt.',
    relatedDemo: 'Figma Token UI System',
    telemetry: {
      engine: 'Design Token Architecture',
      bundleImpact: 'Consistent CSS variable mappings',
      cachePolicy: 'Zero duplicate styles across 60+ screens',
    },
    codeSample: `// tailwind.config.js token synchronization with Figma
module.exports = {
  theme: {
    extend: {
      colors: {
        charcoal: { 800: '#1e222d', 850: '#171923', 900: '#12141a', 950: '#0e1015' },
      },
    },
  },
};`,
  },
  'Reusable Component Architecture': {
    concept:
      'Compound component design patterns decoupling business logic from presentation through composable slots and explicit prop contracts.',
    shippedAt: 'SecurePay Merchant Component Library',
    scope: 'Design system consisting of 40+ composable buttons, inputs, modals, and badges',
    challengeSolved:
      'Designed compound components with React.Children mapping and slots, allowing engineers to reuse modals and drawers with diverse header/body payloads.',
    relatedDemo: 'Core Component UI Matrix',
    telemetry: {
      engine: 'Compound Component Composition',
      bundleImpact: 'High reusability reducing duplicate JSX by 65%',
      cachePolicy: 'Pure functional presentation',
    },
    codeSample: `// Composable modal compound pattern
export const Modal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-black/60 backdrop-blur-sm inset-0 absolute" onClick={onClose} />
        <div className="relative z-10 bg-white dark:bg-charcoal-900 rounded-2xl">{children}</div>
      </div>
    )}
  </AnimatePresence>
);`,
  },
  'Next.js Server Components': {
    concept:
      'Zero-bundle server components executed exclusively on the server, removing data-fetching logic and heavy npm packages from the client.',
    shippedAt: 'SecurePay Merchant Portals',
    scope: 'Zero-bundle financial overview shells and dynamic data hydration',
    challengeSolved:
      'Kept large charting and rendering dependencies on the server side, cutting initial client bundle size by over 45%.',
    relatedDemo: 'Zero-Bundle Shell Architecture',
    telemetry: {
      engine: 'React Server Component (RSC) Engine',
      bundleImpact: '0 KB client JavaScript for server-only logic',
      cachePolicy: 'fetchCache with revalidation tags',
    },
    codeSample: `// Server-only data fetcher without client bundle weight
export default async function OverviewShell() {
  const stats = await db.query('SELECT SUM(amount) FROM settlements');
  return <SummaryBanner metrics={stats} />;
}`,
  },
  'Next.js Server Actions': {
    concept:
      'RPC-style server mutations with progressive enhancement, enabling form actions to succeed even before client-side JavaScript is parsed.',
    shippedAt: 'SecurePay Public Forms & Inquiries',
    scope: 'Direct server mutations without manual REST endpoint boilerplate',
    challengeSolved:
      'Implemented Server Actions with progressive enhancement, enabling sales lead submissions to succeed even if client JavaScript is still loading on slow 3G networks.',
    relatedDemo: 'Resilient Mutation Pipeline',
    telemetry: {
      engine: 'Next.js Server Action RPC',
      bundleImpact: 'Zero client API wrapper boilerplate',
      cachePolicy: 'Automatic revalidatePath() cache purging',
    },
    codeSample: `// Progressive Server Action mutation
'use server';
export async function submitLead(formData) {
  const email = formData.get('email');
  await sendLeadToCrm({ email, date: new Date() });
  revalidatePath('/contact');
  return { success: true };
}`,
  },
  'Code Splitting & Lazy Loading': {
    concept:
      'Dynamic runtime chunking via React.lazy and dynamic imports, loading non-critical modules strictly on-demand to minimize initial parse time.',
    shippedAt: 'SecurePay Portals',
    scope: 'On-demand loading for heavy dashboard charts, PDF export modules, and modals',
    challengeSolved:
      'Deferred loading of PDF generation libraries and modal widgets using React.lazy and dynamic imports, reducing initial bundle transfer to under 160KB.',
    relatedDemo: 'Optimized Bundle Pipeline',
    telemetry: {
      engine: 'Webpack 5 / Next.js Chunking',
      bundleImpact: '160KB gzipped main chunk SLA',
      cachePolicy: 'Hashed chunk filenames with immutable caching',
    },
    codeSample: `// Lazy loading statement export module
const ExportStatementModal = dynamic(
  () => import('./ExportStatementModal'),
  { ssr: false, loading: () => <Spinner /> }
);`,
  },
  'Memoization': {
    concept:
      'Referential caching of computation results and function references via useMemo and useCallback to bypass unnecessary React render cycles.',
    shippedAt: 'SecurePay PayIn & PayOut Portals',
    scope: 'Preventing cascading re-renders during high-frequency table filtering',
    challengeSolved:
      'Applied useMemo for multi-column search filtering across 1,000+ items and useCallback for row selection handlers, locking rendering to 60fps.',
    relatedDemo: 'High-Density Table Filter',
    telemetry: {
      engine: 'React Profiler Render Optimization',
      bundleImpact: 'Zero external dependencies',
      cachePolicy: 'Dependency array reference equality',
    },
    codeSample: `// Memoized multi-field filter execution
const filteredRows = useMemo(() => {
  return transactions.filter(t => t.rail === selectedRail && t.amount >= minAmount);
}, [transactions, selectedRail, minAmount]);`,
  },
  'Performance Optimization': {
    concept:
      'Core Web Vitals engineering targeting zero Cumulative Layout Shift (CLS 0.00), sub-1.4s Largest Contentful Paint (LCP), and 60fps frames.',
    shippedAt: 'SecurePay Web & Portals',
    scope: 'Core Web Vitals auditing (LCP, FID, CLS) and render profiling',
    challengeSolved:
      'Eliminated Cumulative Layout Shifts (CLS from 0.18 to 0) by reserving explicit image dimensions and pre-rendering fixed-height table skeletons.',
    relatedDemo: 'Sub-1.5s LCP Performance',
    telemetry: {
      engine: 'Chrome Lighthouse 11.x SLA',
      bundleImpact: 'CLS: 0.00, LCP: < 1.4s, FID: < 50ms',
      cachePolicy: 'HTTP/2 multiplexing + preconnect hints',
    },
    codeSample: `// Zero layout shift skeleton reserving exact dimensional box
export const TableSkeleton = () => (
  <div className="min-h-[420px] w-full animate-pulse bg-warm-100 dark:bg-charcoal-850 rounded-2xl" />
);`,
  },
  'SEO Optimization': {
    concept:
      'Search engine discoverability via automated sitemaps, JSON-LD Schema.org structured data, and dynamic OpenGraph social share cards.',
    shippedAt: 'SecurePay Corporate Web',
    scope: 'OpenGraph cards, JSON-LD Schema.org metadata, and automated sitemaps',
    challengeSolved:
      'Integrated dynamic OpenGraph image generators and Person/Organization JSON-LD structured schemas, maximizing search visibility and rich social card previews.',
    relatedDemo: 'Search & Social Meta Previews',
    telemetry: {
      engine: 'Next.js Metadata API + Schema.org',
      bundleImpact: 'Zero client execution cost (head injected)',
      cachePolicy: 'Static metadata generation at build-time',
    },
    codeSample: `// Next.js static metadata definition
export const metadata = {
  title: 'SecurePay | Fintech Infrastructure',
  openGraph: {
    title: 'SecurePay - Real-time PayIn & PayOut',
    images: [{ url: '/og-preview.png', width: 1200, height: 630 }],
  },
};`,
  },
  'Signzy APIs': {
    concept:
      'Third-party compliance microservices integration automating document OCR and penny-drop bank verification with encrypted draft recovery.',
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
};

const getSkillColorTokens = (skillName, discipline) => {
  switch (discipline) {
    case 'Core Frontend':
      return {
        dot: 'bg-blue-500',
        badge: 'border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400',
        cardBg: 'bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800',
        borderHover: 'hover:border-blue-400 dark:hover:border-blue-500/60',
        tag: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60',
      };
    case 'State and Data':
      return {
        dot: 'bg-purple-500',
        badge: 'border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-400',
        cardBg: 'bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800',
        borderHover: 'hover:border-purple-400 dark:hover:border-purple-500/60',
        tag: 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60',
      };
    case 'UI Engineering':
      return {
        dot: 'bg-emerald-500',
        badge: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
        cardBg: 'bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800',
        borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/60',
        tag: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60',
      };
    case 'Performance':
      return {
        dot: 'bg-amber-500',
        badge: 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400',
        cardBg: 'bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800',
        borderHover: 'hover:border-amber-400 dark:hover:border-amber-500/60',
        tag: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60',
      };
    default:
      return {
        dot: 'bg-cyan-500',
        badge: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
        cardBg: 'bg-white dark:bg-charcoal-900 border-warm-200 dark:border-charcoal-800',
        borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-500/60',
        tag: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60',
      };
  }
};

const SkillsSection = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkill, setActiveSkill] = useState(null);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const disciplines = ['All', ...skillsData.map((d) => d.discipline)];

  const allSkills = skillsData.flatMap((d) =>
    d.skills.map((s) => ({
      ...s,
      discipline: d.discipline,
    }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesDiscipline =
      selectedDiscipline === 'All' || s.discipline === selectedDiscipline;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.discipline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiscipline && matchesSearch;
  });

  const activeIndex = activeSkill
    ? filteredSkills.findIndex((s) => s.name === activeSkill.name)
    : -1;

  const handlePrevSkill = () => {
    if (activeIndex > 0) {
      setActiveSkill(filteredSkills[activeIndex - 1]);
    } else {
      setActiveSkill(filteredSkills[filteredSkills.length - 1]);
    }
  };

  const handleNextSkill = () => {
    if (activeIndex < filteredSkills.length - 1) {
      setActiveSkill(filteredSkills[activeIndex + 1]);
    } else {
      setActiveSkill(filteredSkills[0]);
    }
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section
      id='skills'
      className='py-20 sm:py-28 border-b border-warm-200 dark:border-charcoal-800/80 bg-warm-100/50 dark:bg-charcoal-950/30 relative overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-left mb-10'
        >
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-mono flex items-center gap-1.5'>
            <FaLayerGroup className='text-xs' />
            <span>Interactive Technical Competence Matrix</span>
          </span>
          <h2 className='text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Skills Organized by Engineering Discipline
          </h2>
          <p className='text-xs sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2 leading-relaxed'>
            Technologies utilized in shipping production applications. Click any skill chip below to inspect its core architectural concept, production application, and telemetry.
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
                  setShowAllSkills(false);
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

        {/* Skills Interactive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6 text-left'>
          {filteredSkills.map((s, idx) => {
            const isSelected = activeSkill && activeSkill.name === s.name;
            const colors = getSkillColorTokens(s.name, s.discipline);

            let visibilityClass = 'flex';
            if (selectedDiscipline === 'All' && !searchQuery && !showAllSkills) {
              if (idx >= 6) {
                visibilityClass = 'hidden';
              } else if (idx >= 3) {
                visibilityClass = 'hidden sm:flex';
              } else {
                visibilityClass = 'flex';
              }
            }

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                onClick={() => setActiveSkill(isSelected ? null : s)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex-col justify-between gap-3 shadow-xs ${visibilityClass} ${
                  isSelected
                    ? 'bg-blue-50/90 dark:bg-charcoal-850 border-blue-500 shadow-md ring-2 ring-blue-500/40'
                    : `${colors.cardBg} ${colors.borderHover} hover:shadow-md`
                }`}
              >
                <div className='flex items-start justify-between gap-2'>
                  <div>
                    <div className='flex items-center gap-2'>
                      <span className={`w-2.5 h-2.5 rounded-full ${colors.dot} shadow-xs shadow-current`} />
                      <span className='font-bold text-sm text-neutral-900 dark:text-white block'>
                        {s.name}
                      </span>
                    </div>
                    <span className='text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1 pl-4 font-sans'>
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
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold ${colors.tag}`}>
                    {s.discipline}
                  </span>
                  <span className='text-blue-600 dark:text-blue-400 font-bold font-mono text-[10px] flex items-center gap-1 hover:underline'>
                    <span>Concept & Scope</span>
                    <span>→</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Unified View Toggle for Desktop & Mobile */}
        {selectedDiscipline === 'All' && !searchQuery && filteredSkills.length > 6 && (
          <div className='mb-8 text-center'>
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className='px-5 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-charcoal-800 text-blue-600 dark:text-blue-400 border border-warm-300 dark:border-charcoal-700 hover:bg-warm-100 dark:hover:bg-charcoal-750 hover:border-blue-500/40 transition inline-flex items-center gap-2 shadow-xs'
            >
              <FaFilter className='text-[10px]' />
              <span>
                {showAllSkills
                  ? 'Collapse to Core Stack'
                  : `Show All ${filteredSkills.length} Technical Skills`}
              </span>
              <span>{showAllSkills ? '↑' : '↓'}</span>
            </button>
          </div>
        )}

        {/* Selected Skill Production Context Inspector Modal/Card with Under-the-Hood Telemetry */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className='p-5 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-blue-400/60 dark:border-blue-500/40 shadow-xl text-left mt-6 space-y-4'
            >
              {/* Interactive Inspector Header */}
              <div className='flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-warm-200 dark:border-charcoal-800'>
                <div className='flex items-center gap-2.5'>
                  <TechBadge name={activeSkill.name} size='sm' />
                  <span className='text-[11px] font-mono text-neutral-500 dark:text-neutral-400 font-semibold'>
                    {activeSkill.discipline} · {activeSkill.highlight}
                  </span>
                </div>

                {/* Quick Prev / Next Navigator & Close */}
                <div className='flex items-center gap-1.5'>
                  {filteredSkills.length > 1 && (
                    <div className='flex items-center gap-1 mr-2 bg-warm-100 dark:bg-charcoal-800 p-1 rounded-xl border border-warm-200 dark:border-charcoal-700'>
                      <button
                        onClick={handlePrevSkill}
                        className='p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-charcoal-700 transition'
                        title='Previous skill'
                        aria-label='Previous skill'
                      >
                        <FaChevronLeft className='text-xs' />
                      </button>
                      <span className='text-[10px] font-mono font-semibold px-1 text-neutral-500 dark:text-neutral-400'>
                        {activeIndex + 1}/{filteredSkills.length}
                      </span>
                      <button
                        onClick={handleNextSkill}
                        className='p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-charcoal-700 transition'
                        title='Next skill'
                        aria-label='Next skill'
                      >
                        <FaChevronRight className='text-xs' />
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveSkill(null)}
                    className='p-2 rounded-xl text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-warm-100 dark:hover:bg-charcoal-800 transition'
                    aria-label='Close deep dive'
                    title='Close'
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Skill Deep Dive Data */}
              {(() => {
                const ctx =
                  skillProductionContext[activeSkill.name] ||
                  skillProductionContext['React.js'];

                return (
                  <div className='space-y-4'>
                    {/* Compact 2-Column: Skill Concept vs Production Application */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
                      {/* Concept Card */}
                      <div className='p-4 rounded-xl bg-gradient-to-br from-blue-50/70 via-white to-warm-50 dark:from-charcoal-850 dark:via-charcoal-900 dark:to-charcoal-950 border border-blue-200/80 dark:border-blue-900/40'>
                        <span className='text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-1.5'>
                          <FaLightbulb />
                          <span>Core Engineering Concept</span>
                        </span>
                        <p className='text-xs sm:text-[13px] text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans font-medium'>
                          {ctx.concept}
                        </p>
                      </div>

                      {/* Production Scope & Solved Problem Card */}
                      <div className='p-4 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 flex flex-col justify-between'>
                        <div>
                          <div className='flex items-center justify-between mb-1.5'>
                            <span className='text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5'>
                              <FaRocket />
                              <span>Production Application ({ctx.shippedAt})</span>
                            </span>
                          </div>
                          <p className='text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans'>
                            {ctx.challengeSolved}
                          </p>
                        </div>

                        <div className='mt-2.5 pt-2 border-t border-warm-200/80 dark:border-charcoal-750 flex items-center justify-between text-[11px] font-mono'>
                          <span className='text-neutral-500 dark:text-neutral-400 truncate mr-2'>
                            {ctx.scope}
                          </span>
                          <a
                            href='#projects'
                            className='text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1 flex-shrink-0'
                          >
                            <span>Live Previews</span>
                            <FaArrowRight className='text-[9px]' />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Concise Telemetry Invariants & Code Box */}
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-3 pt-1 items-start'>
                      {/* Telemetry Invariants */}
                      <div className='lg:col-span-5 p-3.5 rounded-xl bg-warm-50/80 dark:bg-charcoal-850/80 border border-warm-200 dark:border-charcoal-750 text-xs space-y-2'>
                        <span className='text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block'>
                          Runtime Telemetry & Invariants
                        </span>
                        <div className='space-y-1.5 text-[11px] font-mono'>
                          <div className='flex items-center justify-between p-1.5 rounded-lg bg-white dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700'>
                            <span className='text-neutral-400 text-[10px]'>Engine:</span>
                            <span className='text-neutral-800 dark:text-neutral-200 font-bold truncate ml-2 text-[10px]'>
                              {ctx.telemetry.engine}
                            </span>
                          </div>
                          <div className='flex items-center justify-between p-1.5 rounded-lg bg-white dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700'>
                            <span className='text-neutral-400 text-[10px]'>Bundle Impact:</span>
                            <span className='text-emerald-600 dark:text-emerald-400 font-bold truncate ml-2 text-[10px]'>
                              {ctx.telemetry.bundleImpact}
                            </span>
                          </div>
                          <div className='flex items-center justify-between p-1.5 rounded-lg bg-white dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700'>
                            <span className='text-neutral-400 text-[10px]'>Invariant Policy:</span>
                            <span className='text-blue-600 dark:text-blue-400 font-bold truncate ml-2 text-[10px]'>
                              {ctx.telemetry.cachePolicy}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Code Snippet Window with Copy Button */}
                      <div className='lg:col-span-7 rounded-xl bg-neutral-950 text-neutral-200 border border-neutral-800 overflow-hidden text-xs font-mono shadow-sm'>
                        <div className='px-3.5 py-1.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400'>
                          <span className='flex items-center gap-1.5'>
                            <FaTerminal className='text-blue-400 text-[10px]' />
                            <span>implementation_{activeSkill.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.ts</span>
                          </span>

                          <button
                            onClick={() => handleCopyCode(ctx.codeSample)}
                            className='inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition'
                            title='Copy code snippet'
                          >
                            {copiedSnippet ? (
                              <>
                                <FaCheck className='text-emerald-400 text-[10px]' />
                                <span className='text-emerald-400 font-bold'>Copied!</span>
                              </>
                            ) : (
                              <>
                                <FaCopy className='text-neutral-400 text-[10px]' />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className='p-3.5 overflow-x-auto text-[11px] leading-relaxed text-blue-300'>
                          <code>{ctx.codeSample}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
