export const personalInfo = {
  name: 'Dinesh Singh',
  role: 'Frontend Developer · Software Developer',
  headline: 'Engineering thoughtful interfaces for complex products.',
  supportingCopy:
    'I build responsive, production-ready web applications with React and Next.js. My experience spans fintech portals, payment checkout flows, merchant onboarding, and data-intensive dashboards, with a focus on maintainable architecture, reliable API integration, and polished user experiences.',
  experienceBadge: '2+ years of professional frontend development',
  techBadge: 'React.js · Next.js · TypeScript · Redux Toolkit',
  location: 'Dehradun / Delhi, India',
  email: 'dineshsingh9350@gmail.com',
  phone: '+91 9315446968',
  github: 'https://github.com/Dinesh9350',
  linkedin: 'https://www.linkedin.com/in/dinesh-singh3/',
  linkedinHandle: 'dinesh-singh3',
  resumeUrl: '/Dinesh-Singh-Resume.pdf',
  stats: [
    { value: '2+', label: 'Years Experience', sub: 'Production engineering' },
    { value: '4', label: 'Fintech Portals', sub: 'PayIn, PayOut, Gateway, Web' },
    { value: '60+', label: 'Shipped Screens', sub: 'Next.js App Router' },
    { value: '75%', label: 'KYC Turnaround', sub: 'Signzy API integration' },
  ],
};

export const experienceData = [
  {
    id: 'securepay',
    company: 'SecurePay',
    role: 'Software Developer',
    period: 'April 2025 – Present',
    location: 'Dehradun, India',
    badge: 'Current Role',
    type: 'Full-time',
    summary:
      'Core frontend engineer across 4 production fintech products handling merchant settlements, payment routing, and automated compliance.',
    technologies: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Server Components',
      'Redux Toolkit',
      'Material UI',
      'Tailwind CSS',
      'Signzy APIs',
      'REST APIs',
    ],
    achievements: [
      {
        title: '4 Production Fintech Portals & 60+ Screens',
        desc: 'Architected and shipped PayIn, PayOut, Transaction Gateway, and the corporate website using Next.js App Router and React Server Components for optimal render performance and fast initial page loads.',
      },
      {
        title: 'Payment Gateway Integration',
        desc: 'Engineered customer-facing payment checkout flows integrating UPI Intent, credit/debit cards with Luhn validation, and net banking selection with real-time transaction status feedback and error handling.',
      },
      {
        title: '6-Step Merchant Onboarding & KYC Automation',
        desc: 'Designed and built an end-to-end merchant onboarding workflow integrating Signzy verification APIs (PAN, GSTIN, bank penny-drop), reducing manual verification cycle time by 75%.',
      },
      {
        title: 'Role-Based Access Control (RBAC) & Maker-Checker',
        desc: 'Architected granular permission boundaries and dual-approval Maker-Checker workflows across Super Admin, Manager, and Merchant roles to ensure transaction integrity.',
      },
      {
        title: 'Data-Intensive Transaction Dashboards',
        desc: 'Engineered high-density transaction monitoring tables with multi-field filtering, URL-synced search params, column sorting, pagination, and robust error/empty states.',
      },
    ],
  },
  {
    id: 'buclelabs',
    company: 'BucleLabs Pvt Ltd',
    role: 'Frontend Developer',
    period: 'February 2024 – October 2024',
    location: 'Gurugram, India',
    badge: 'Previous Experience',
    type: 'Full-time',
    summary:
      'Digital product engineering across 5 client web applications, translating complex Figma design systems into scalable component architecture.',
    technologies: [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Material UI',
      'Figma',
      'Git Workflows',
    ],
    achievements: [
      {
        title: 'Delivered 5 Client Applications',
        desc: 'Built scalable client web applications utilizing Redux Toolkit for centralized, predictable state management and maintainable component hierarchies.',
      },
      {
        title: 'Translated 80+ Figma Designs',
        desc: 'Transformed 80+ high-fidelity Figma mockups into pixel-perfect, accessible, and responsive components with Tailwind CSS and Material UI.',
      },
      {
        title: 'Agile Sprints & Git Workflows',
        desc: 'Collaborated across 3 cross-functional teams in 2-week Agile sprints with code reviews and structured Git workflows, maintaining zero merge conflicts.',
      },
    ],
  },
];

export const educationData = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    location: 'New Delhi, India',
    period: '2019 – 2023',
    details:
      'Rigorous foundation in computer science, software engineering principles, data structures, relational database management systems, and web architecture.',
  },
];

export const projectsData = [
  {
    id: 'securepay-portals',
    title: 'SecurePay PayIn & PayOut Portals',
    tagline: 'Production Financial Dashboards & Role-Based Operational Workflows',
    category: 'Fintech · Production System',
    isPrimary: true,
    techStack: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Server Components',
      'Redux Toolkit',
      'Material UI',
      'REST APIs',
    ],
    overview:
      'Central financial portal used daily by merchants to track incoming receivables (PayIn), schedule batch vendor disbursements (PayOut), monitor settlements, and audit financial records.',
    problem:
      'Merchants and finance operators needed real-time visibility into thousands of daily transactions without calculation errors, slow render speeds on large datasets, or unauthorized disbursement actions.',
    contribution:
      'Lead Frontend Developer responsible for architecting 60+ screens, state modeling, Maker-Checker authorization workflows, and reusable data-dense UI components.',
    challenges: [
      'Rendering dense transaction tables with 20+ columns without layout breakage or frame drops during filtering.',
      'Synchronizing multi-select filter criteria (date range, transaction status, rail, currency) with browser URL search parameters for link shareability and persistent bookmarking.',
      'Implementing strict Maker-Checker dual authorization patterns to eliminate single-operator transaction execution risks.',
    ],
    implementation:
      'Leveraged Next.js App Router with React Server Components for shell pre-rendering, combined with Redux Toolkit for localized client state caching, debounced query filtering, and optimistic balance updates.',
    outcomes: [
      '60+ production screens deployed and actively used in production fintech operations.',
      'Sub-second filter updates across thousands of transactional records using memoized selectors.',
      'Zero unauthorized disbursement leaks thanks to client and server-aligned RBAC checks.',
    ],
    interactiveType: 'dashboard',
  },
  {
    id: 'securepay-gateway',
    title: 'SecurePay Transaction Gateway',
    tagline: '3-Step Payment Checkout Experience with Real-Time Feedback',
    category: 'Fintech · Core Checkout',
    isPrimary: true,
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Material UI',
      'Tailwind CSS',
      'UPI Intent',
      'REST APIs',
    ],
    overview:
      'A customer-facing payment gateway interface embedded across merchant websites and apps to process real-time transactions via UPI, credit/debit cards, and net banking.',
    problem:
      'Checkout drop-offs occur when forms are clunky, slow, or lack instant validation. The challenge was building an ultra-fast, lightweight, trustworthy payment experience across mobile and desktop devices.',
    contribution:
      'Engineered the end-to-end 3-step checkout interface, state transitions, client-side card validation, and real-time transaction status polling.',
    challenges: [
      'Minimizing client bundle footprint (<50kb) to ensure rapid loading on cellular 3G/4G connections.',
      'Validating credit/debit card numbers with real-time Luhn checks and BIN identification as the user types.',
      'Handling mobile UPI Intent deep-linking and graceful timeout fallbacks without duplicate charge risks.',
    ],
    implementation:
      'Engineered a modular 3-step checkout machine (Method Selection → Payment Detail Input → Real-Time Authorization Status) with instant input formatting, idempotency key safeguards, and webhook polling.',
    outcomes: [
      'Seamless multi-channel checkout supporting UPI Intent, Cards, and Net Banking.',
      'Eliminated invalid form submissions using instant client validation before hitting the gateway API.',
    ],
    interactiveType: 'checkout',
  },
  {
    id: 'merchant-onboarding',
    title: 'Merchant Onboarding & KYC Engine',
    tagline: 'Automated 6-Step Verification Workflow with Signzy APIs',
    category: 'Fintech · Compliance & Automation',
    isPrimary: false,
    techStack: [
      'React.js',
      'Next.js',
      'Signzy APIs',
      'Formik / Yup',
      'Material UI',
      'Tailwind CSS',
    ],
    overview:
      'An automated digital onboarding pipeline allowing merchants to submit business documents, complete PAN verification, and verify bank details online in minutes.',
    problem:
      'Manual merchant onboarding previously took days of manual document review, leading to high drop-off rates and delayed merchant activation.',
    contribution:
      'Built the 6-step responsive wizard, document upload interfaces with progress states, and front-end integration with Signzy verification endpoints.',
    challenges: [
      'Managing complex conditional form fields based on business type (Proprietorship, Private Limited, LLP).',
      'Handling asynchronous API verification delays while providing continuous, reassuring visual feedback to the merchant.',
    ],
    implementation:
      'Constructed a 6-step stateful wizard with Formik and Yup schema validation supporting draft saving to browser storage so progress is never lost during upload delays.',
    outcomes: [
      'Reduced verification turnaround time by 75% through automated real-time verification APIs.',
      'Dramatically lowered validation errors with step-by-step schema checking.',
    ],
    interactiveType: 'onboarding',
  },
  {
    id: 'securepay-website',
    title: 'SecurePay Corporate Website',
    tagline: 'Brand Presence & Developer Documentation Portal',
    category: 'Fintech · Web Experience',
    isPrimary: false,
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Material UI',
      'Framer Motion',
    ],
    overview:
      'The public face of SecurePay showcasing API documentation, product benefits, security standards, and enterprise sales inquiry pipelines.',
    problem:
      'Needed a clean, corporate, high-converting digital storefront that loads fast, ranks well on search engines, and communicates institutional trust.',
    contribution:
      'Frontend developer responsible for component engineering, responsive layouts, subtle motion design, and backend inquiry submission integration.',
    challenges: [
      'Maintaining high visual fidelity and smooth 60fps animations without causing cumulative layout shifts (CLS).',
      'Ensuring complete mobile responsiveness across varying display aspect ratios.',
    ],
    implementation:
      'Built using Next.js for server-rendered HTML and optimized web vitals. Created an interactive Contact and Enterprise Sales inquiry module with validation and backend API integration.',
    outcomes: [
      'Delivered corporate website with fast initial loads and strong SEO metrics.',
      'Streamlined business lead intake through validated inquiry submissions.',
    ],
    interactiveType: 'none',
  },
];

export const skillsData = [
  {
    discipline: 'Core Frontend',
    description: 'Foundational languages, core frameworks, and modern routing paradigms.',
    skills: [
      { name: 'React.js', level: 'Production', highlight: 'Hooks, Context, Custom Architecture' },
      { name: 'Next.js (App Router)', level: 'Production', highlight: 'Server Components, Server Actions' },
      { name: 'Next.js (Pages Router)', level: 'Production', highlight: 'SSR, SSG, Dynamic Routes' },
      { name: 'JavaScript (ES6+)', level: 'Production', highlight: 'Async/Await, Closures, Prototypes' },
      { name: 'TypeScript', level: 'Production', highlight: 'Generics, Strict Type Safety' },
      { name: 'HTML5 & CSS3', level: 'Production', highlight: 'Semantic Markup, Accessibility (a11y)' },
    ],
  },
  {
    discipline: 'State and Data',
    description: 'Predictable state patterns and asynchronous data management.',
    skills: [
      { name: 'Redux Toolkit', level: 'Production', highlight: 'createSlice, createAsyncThunk, Selectors' },
      { name: 'Redux', level: 'Production', highlight: 'Centralized Architecture, Dispatch Pipelines' },
      { name: 'React Context API', level: 'Production', highlight: 'Theme, Auth, and Global UI State' },
      { name: 'React Query', level: 'Working Knowledge', highlight: 'Server Cache & Invalidation' },
      { name: 'REST APIs & Axios', level: 'Production', highlight: 'Interceptors, Error Boundaries, Retries' },
      { name: 'Formik & Yup', level: 'Production', highlight: 'Multi-Step Schema Validation' },
    ],
  },
  {
    discipline: 'UI Engineering',
    description: 'Design systems, component libraries, and responsive interfaces.',
    skills: [
      { name: 'Material UI (MUI)', level: 'Production', highlight: 'Custom Themes, Complex Data Tables' },
      { name: 'Tailwind CSS', level: 'Production', highlight: 'Utility Design Tokens, Dark Mode' },
      { name: 'Responsive Web Design', level: 'Production', highlight: 'Mobile-First, Adaptive Breakpoints' },
      { name: 'Figma-to-UI Implementation', level: 'Production', highlight: 'Pixel-Perfect Translation (80+ Mockups)' },
      { name: 'Reusable Component Architecture', level: 'Production', highlight: 'Modular, Atomic Component Patterns' },
    ],
  },
  {
    discipline: 'Performance',
    description: 'Web vitals, optimization techniques, and scalable patterns.',
    skills: [
      { name: 'Next.js Server Components', level: 'Production', highlight: 'Zero-Bundle Shell Pre-rendering' },
      { name: 'Next.js Server Actions', level: 'Production', highlight: 'Form Mutations & Mutations' },
      { name: 'Code Splitting & Lazy Loading', level: 'Production', highlight: 'Dynamic Imports, Chunk Reduction' },
      { name: 'Memoization', level: 'Production', highlight: 'useMemo, useCallback, React.memo' },
      { name: 'Performance Optimization', level: 'Production', highlight: 'Core Web Vitals, Render Auditing' },
      { name: 'SEO Optimization', level: 'Production', highlight: 'Open Graph, JSON-LD, Metadata API' },
    ],
  },
];

export const aboutData = {
  narrative: [
    'I am a Frontend Developer with 2+ years of professional experience building production-ready web applications using React and Next.js. My work centers on building fintech portals, payment checkout flows, automated compliance pipelines, and client web applications.',
    'Working on financial technology products at SecurePay taught me that frontend engineering is about much more than assembling visual components. It demands deep respect for data precision, defensive error handling, predictable state machines, and resilient interfaces that never leave users stranded mid-transaction.',
    'I care deeply about software maintainability: separating data fetching from presentation, writing self-documenting code, ensuring proper keyboard and screen reader accessibility, and delivering interfaces that feel instantaneous. Whether architecting a 60-screen merchant portal or optimizing checkout latency, I bring a product-first mindset to every line of code.',
  ],
  principles: [
    {
      title: 'Reliability over Cleverness',
      desc: 'Financial and enterprise interfaces require deterministic behavior, thorough edge-case handling, and clear loading/error feedback.',
    },
    {
      title: 'Performance as a Feature',
      desc: 'Prioritizing light bundle footprints, server components, memoized operations, and zero unnecessary re-renders.',
    },
    {
      title: 'Design-Engineering Harmony',
      desc: 'Translating design intent with pixel precision while upholding semantic markup and accessible contrast standards.',
    },
    {
      title: 'Maintainable Architecture',
      desc: 'Structuring modular component hierarchies, centralized API layers, and type-safe state contracts that scale smoothly.',
    },
  ],
};
