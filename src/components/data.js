import React from 'react';
import pro1 from '../assets/project1.jpg';
import pro2 from '../assets/project2.jpg';
import pro3 from '../assets/project3.jpg';
import pro4 from '../assets/project4.jpg';
import react1 from '../assets/react1.jpg';
import react2 from '../assets/react2.webp';

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiHtml5,
  SiGit,
  SiBootstrap,
  SiFigma,
  SiAxios,
  SiNodedotjs,
  SiMongodb,
  SiAmazonaws,
} from 'react-icons/si';

import {
  FaShieldAlt,
  FaUserCheck,
} from 'react-icons/fa';

export const profileData = {
  name: 'Dinesh Singh',
  eyebrow: 'Frontend Developer · 2+ Years of Experience',
  headline: 'Building polished, scalable web experiences.',
  role: 'Software Developer · Frontend Engineer',
  bio: 'I build responsive, high-performance web applications using React, Next.js, TypeScript, and modern frontend technologies, with a focus on reusable architecture, complex interfaces, and reliable API integrations.',
  location: 'Dehradun / Delhi, India',
  email: 'dineshsingh9350@gmail.com',
  phone: '+91 9315446968',
  github: 'https://github.com/Dinesh9350',
  linkedin: 'https://www.linkedin.com/in/dinesh-singh3/',
  twitter: 'https://twitter.com/Dinesh62486433',
  whatsapp: 'https://wa.me/919315446968',
  status: 'Available for Frontend & Software Engineering roles',
  techStackHighlights: [
    'React.js',
    'Next.js (App Router)',
    'TypeScript',
    'Redux Toolkit',
    'Tailwind CSS',
    'Material UI',
    'REST APIs',
    'Signzy KYC APIs',
  ],
  metrics: [
    { label: 'Years of Experience', value: '2+', desc: 'In production web engineering' },
    { label: 'Production Portals', value: '4', desc: 'SecurePay fintech products' },
    { label: 'Production Screens', value: '60+', desc: 'Shipped with Next.js & React' },
    { label: 'Client Applications', value: '5+', desc: 'Delivered at BucleLabs' },
  ],
};

export const experienceData = [
  {
    id: 'exp-1',
    company: 'SecurePay',
    position: 'Software Developer',
    period: 'Apr 2025 – Present',
    location: 'Dehradun, India',
    type: 'Full-time',
    badge: 'Current Role',
    productContext:
      'High-throughput fintech payment infrastructure handling merchant settlements, payouts, automated onboarding, and multi-channel payment gateway transactions.',
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
    responsibilities: [
      {
        area: 'Merchant Portals (Pay-In & Pay-Out)',
        detail:
          'Architected and delivered 4 production fintech portals with 60+ screens using Next.js App Router and React Server Components for optimal initial page loads and search discoverability.',
      },
      {
        area: 'Data-Dense Interfaces',
        detail:
          'Engineered transaction monitoring tables handling multi-parameter filtering, URL-persisted search parameters, column sorting, pagination, and robust error/empty states.',
      },
      {
        area: 'Role-Based Access Control (RBAC)',
        detail:
          'Implemented granular authorization workflows including Maker-Checker dual-approval systems, Super Admin controls, and merchant operational permissions.',
      },
      {
        area: 'Payment Gateway Integration',
        detail:
          'Engineered a 3-step checkout experience integrating UPI Intent, credit/debit card validation, and net banking with client-side Luhn checks and real-time transaction status feedback.',
      },
      {
        area: 'Automated Merchant Onboarding',
        detail:
          'Designed and developed a 6-step merchant onboarding workflow integrating Signzy verification APIs, reducing manual KYC verification time by 75%.',
      },
    ],
  },
  {
    id: 'exp-2',
    company: 'BucleLabs Pvt Ltd',
    position: 'Frontend Developer',
    period: 'Feb 2024 – Oct 2024',
    location: 'Gurugram, India',
    type: 'Full-time',
    badge: 'Previous Role',
    productContext:
      'Digital product agency building responsive, scalable client web applications with strict delivery timelines and clean component architectures.',
    technologies: [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Material UI',
      'Figma',
      'Git Workflows',
    ],
    responsibilities: [
      {
        area: 'Client Web Applications',
        detail:
          'Delivered 5 complete client applications using Redux Toolkit for centralized, predictable state management and maintainable architecture.',
      },
      {
        area: 'Design-to-Code Implementation',
        detail:
          'Translated 80+ high-fidelity Figma mockups into responsive, accessible UI components using React, Next.js, Tailwind CSS, and Material UI.',
      },
      {
        area: 'Agile Engineering & Git Collaboration',
        detail:
          'Collaborated across 3 cross-functional project teams in two-week Agile sprints with code reviews and structured Git workflows, achieving zero merge conflicts.',
      },
    ],
  },
];

export const educationData = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    location: 'New Delhi, India',
    period: '2019 – 2023',
    highlights:
      'Rigorous foundation in computer science, software engineering principles, data structures, relational database management systems, and web architecture.',
  },
];

export const caseStudiesData = [
  {
    id: 'securepay-portals',
    title: 'SecurePay Pay-In & Pay-Out Portals',
    subtitle: 'High-Volume Financial Dashboards & Role-Based Workflows',
    badge: 'Fintech · Production',
    techStack: ['Next.js (App Router)', 'React.js', 'Redux Toolkit', 'Material UI', 'REST APIs'],
    image: react1,
    overview:
      'The SecurePay Portals are the central nervous system for merchants to monitor receivables (Pay-In), schedule vendor disbursements (Pay-Out), manage sub-merchants, and download audit-ready financial statements.',
    problem:
      'Merchants and finance operators needed real-time visibility into thousands of daily transactions with zero room for calculation errors, slow render speeds on large datasets, or unauthorized transaction execution.',
    roleScope:
      'Lead Frontend Developer responsible for architecting 60+ screens, state modeling, Maker-Checker authorization workflows, and reusable data-dense UI components.',
    technicalApproach: [
      'Leveraged Next.js App Router and React Server Components to pre-render layout frames while streaming real-time ledger data via client-side components.',
      'Constructed a centralized Redux Toolkit state slice for transaction caching, filter preservation, and background invalidation.',
      'Engineered an enterprise Maker-Checker approval pattern: payout requests above designated limits must be initiated by an operator and approved by an authorized manager before submission.',
    ],
    engineeringChallenges: [
      'Handling dense transaction tables with 20+ columns without horizontal layout breakage or frame drops during filtering.',
      'Synchronizing multi-select filter criteria (date range, transaction status, rail, currency) with browser URL search parameters for link shareability and persistent bookmarking.',
      'Gracefully managing network timeouts, partial batch payout failures, and token expiration during long-running administrative sessions.',
    ],
    outcomes: [
      'Shipped 60+ production screens deployed and actively used by merchants and internal finance operators.',
      'Achieved sub-second filter updates across thousands of transactional records using debounced inputs and memoized selectors.',
      'Zero unauthorized disbursement leaks thanks to client and server-aligned RBAC checks.',
    ],
  },
  {
    id: 'securepay-gateway',
    title: 'SecurePay Transaction Gateway',
    subtitle: 'Optimized 3-Step Payment Checkout Experience',
    badge: 'Fintech · Core Product',
    techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Material UI', 'REST APIs'],
    image: react2,
    overview:
      'A customer-facing payment gateway interface embedded across merchant websites and apps to process real-time transactions via UPI, credit/debit cards, and net banking.',
    problem:
      'Drop-offs in checkout funnels occur when forms are clunky, slow, or lack instant validation. The challenge was creating a lightweight, trustworthy, and frictionless payment flow on mobile and desktop devices.',
    roleScope:
      'Designed and engineered the end-to-end checkout interface, state transitions, client-side card validation, and transaction status polling.',
    technicalApproach: [
      'Built a modular 3-step checkout interface with separate views for Payment Method Selection, Detail Input, and Real-Time Authorization Status.',
      'Implemented Luhn algorithm verification and BIN lookup on card inputs to identify card network dynamically as the user types.',
      'Integrated deep-linking for UPI Intent apps on mobile devices for one-tap payments.',
      'Implemented SSE/polling mechanism to reflect instant webhook confirmation without manual page reloads.',
    ],
    engineeringChallenges: [
      'Minimizing client bundle footprint to ensure rapid loading on slow 3G/4G cellular connections.',
      'Handling edge cases like user back-button presses, duplicate submit prevention via idempotency keys, and payment session timeouts.',
    ],
    outcomes: [
      'Engineered a checkout experience supporting UPI, Cards, and Net Banking.',
      'Eliminated invalid form submissions using instant client validation before hitting the gateway API.',
    ],
  },
  {
    id: 'merchant-onboarding',
    title: 'Merchant Onboarding & KYC Engine',
    subtitle: 'Automated 6-Step Verification Workflow with Signzy APIs',
    badge: 'Fintech · Automation',
    techStack: ['React.js', 'Next.js', 'Signzy APIs', 'Formik / Yup', 'Material UI'],
    image: pro1,
    overview:
      'An automated digital onboarding pipeline allowing merchants to submit company documents, complete biometric/PAN verification, and verify bank details online.',
    problem:
      'Manual merchant onboarding previously took days of back-and-forth documentation review, resulting in merchant drop-off and delayed time-to-first-transaction.',
    roleScope:
      'Built the 6-step responsive wizard, document upload interfaces with progress states, and front-end integration with Signzy verification endpoints.',
    technicalApproach: [
      'Engineered a 6-step stateful wizard with Formik and Yup schema validation supporting draft saving to browser storage so progress is never lost.',
      'Integrated Signzy APIs for instant PAN validation, GSTIN lookup, and bank penny-drop account verification.',
      'Built custom file uploaders with client-side image compression, MIME type verification, and preview modals.',
    ],
    engineeringChallenges: [
      'Handling asynchronous API verification delays while providing continuous, reassuring visual feedback to the merchant.',
      'Managing complex conditional form fields based on business type (Proprietorship vs. Private Limited vs. LLP).',
    ],
    outcomes: [
      'Reduced verification turnaround time by 75% through automated real-time verification APIs.',
      'Dramatically lowered validation errors with step-by-step schema checking.',
    ],
  },
  {
    id: 'securepay-website',
    title: 'SecurePay Corporate Website',
    subtitle: 'Brand Presence & Developer Documentation Portal',
    badge: 'Fintech · Marketing & Docs',
    techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'Material UI', 'Framer Motion'],
    image: pro3,
    overview:
      'The public face of SecurePay showcasing API documentation, feature benefits, security standards, and lead-generation inquiry pipelines.',
    problem:
      'Needed a clean, corporate, high-converting digital storefront that loads fast, ranks well on search engines, and communicates institutional trust.',
    roleScope:
      'Frontend developer responsible for component engineering, responsive layouts, subtle motion design, and backend inquiry submission integration.',
    technicalApproach: [
      'Built using Next.js for server-rendered HTML and optimized web vitals.',
      'Used Tailwind CSS with a strict color palette and consistent spacing tokens.',
      'Created an interactive Contact and Enterprise Sales inquiry module with validation and API integration.',
    ],
    engineeringChallenges: [
      'Maintaining high visual fidelity and smooth 60fps animations without causing cumulative layout shifts (CLS).',
      'Ensuring complete mobile responsiveness across varying display aspect ratios.',
    ],
    outcomes: [
      'Delivered corporate website with fast initial loads and strong SEO metrics.',
      'Streamlined business lead intake through validated inquiry submissions.',
    ],
  },
];

export const projectsData = [
  {
    id: 'sp-1',
    title: 'SecurePay Pay-In & Pay-Out Portals',
    category: 'Production · Fintech',
    isProduction: true,
    hasCaseStudy: true,
    caseStudyId: 'securepay-portals',
    description:
      'Production financial portals with 60+ screens for merchant ledger management, settlement tracking, and Maker-Checker role-based approval workflows.',
    tech: ['Next.js', 'React.js', 'Redux Toolkit', 'Material UI', 'REST APIs'],
    highlights: [
      '60+ production screens using Next.js App Router & Server Components',
      'Role-based access control (RBAC) with Maker-Checker dual authorization',
      'Data-dense transaction tables with persistent multi-parameter filtering',
    ],
    img: react1,
    live: '',
    code: '',
  },
  {
    id: 'sp-2',
    title: 'SecurePay Transaction Gateway',
    category: 'Production · Fintech',
    isProduction: true,
    hasCaseStudy: true,
    caseStudyId: 'securepay-gateway',
    description:
      'Optimized 3-step payment checkout supporting UPI Intent, credit/debit card validation with Luhn checks, and instant transaction status feedback.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Material UI', 'UPI Intent'],
    highlights: [
      'Frictionless 3-step checkout with instant client validation',
      'Mobile UPI Intent deep-linking and dynamic card BIN detection',
      'Real-time status updates and duplicate payment prevention',
    ],
    img: react2,
    live: '',
    code: '',
  },
  {
    id: 'sp-3',
    title: 'Merchant Onboarding & KYC Engine',
    category: 'Production · Fintech',
    isProduction: true,
    hasCaseStudy: true,
    caseStudyId: 'merchant-onboarding',
    description:
      'Automated 6-step merchant verification workflow integrating Signzy APIs for instant document verification, cutting onboarding time by 75%.',
    tech: ['React.js', 'Next.js', 'Signzy APIs', 'Formik / Yup', 'Material UI'],
    highlights: [
      '6-step guided wizard with draft saving and schema validation',
      'Real-time Signzy API integration for PAN & bank penny-drop verification',
      'Reduced manual verification turnaround time by 75%',
    ],
    img: pro1,
    live: '',
    code: '',
  },
  {
    id: 'sp-4',
    title: 'SecurePay Corporate Website',
    category: 'Production · Web Experience',
    isProduction: true,
    hasCaseStudy: true,
    caseStudyId: 'securepay-website',
    description:
      'Corporate brand website and developer product showcase built with Next.js, featuring responsive architecture, subtle motion, and inquiry pipelines.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Material UI', 'Framer Motion'],
    highlights: [
      'Server-side rendered with optimized Core Web Vitals',
      'Reusable component library built on Tailwind CSS design tokens',
      'Validated enterprise inquiry and contact form integration',
    ],
    img: pro3,
    live: '',
    code: '',
  },
  {
    id: 'foodiehub',
    title: 'FoodieHub Food Ordering App',
    category: 'Client & Web Application',
    isProduction: false,
    hasCaseStudy: false,
    description:
      'Online food ordering web application featuring live restaurant feed search, category filtering, cart state management, and responsive layouts.',
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Swiggy API', 'React Router'],
    highlights: [
      'Dynamic restaurant feed integration using live Swiggy APIs',
      'Centralized Redux state management for cart persistence and calculations',
      'Instant restaurant and food menu search filtering',
    ],
    img: pro1,
    live: 'https://foodiehubonline.netlify.app/',
    code: 'https://github.com/Dinesh9350/foodiehub',
  },
  {
    id: 'youtube-clone',
    title: 'YouTube Streaming Clone',
    category: 'Web Application',
    isProduction: false,
    hasCaseStudy: false,
    description:
      'Video streaming application built from scratch with React, featuring video feed integration, search debouncing, and custom playback interfaces.',
    tech: ['React.js', 'REST API', 'Tailwind CSS', 'State Management'],
    highlights: [
      'Dynamic video search and streaming playback interface',
      'Modular component hierarchy with clean state passing',
    ],
    img: pro2,
    live: 'https://youtubereactjs.netlify.app/',
    code: 'https://github.com/Dinesh9350/youtube',
  },
  {
    id: 'mi-store',
    title: 'MI Store E-Commerce Platform',
    category: 'Web Application',
    isProduction: false,
    hasCaseStudy: false,
    description:
      'Product catalog web application featuring product category tabs, interactive banner carousels, and modular components.',
    tech: ['React.js', 'CSS3', 'JavaScript'],
    highlights: ['Interactive carousel and product showcases', 'Clean component hierarchy'],
    img: pro3,
    live: 'https://mi-store7.netlify.app/',
    code: 'https://github.com/Dinesh9350/mi-store',
  },
  {
    id: 'carnostalgia',
    title: 'CarNostalgia Showcase',
    category: 'Web Application',
    isProduction: false,
    hasCaseStudy: false,
    description:
      'Automotive model database with real-time search, category breakdown, and responsive vehicle specification cards.',
    tech: ['React.js', 'CSS', 'JavaScript'],
    highlights: ['Real-time filter search', 'Responsive grid with vehicle specs'],
    img: pro4,
    live: 'https://carnostalgia.netlify.app/',
    code: 'https://github.com/Dinesh9350/carnostalgia',
  },
];

// Re-export as projectsdata for backward compatibility
export const projectsdata = projectsData;

export const skillsCategories = [
  {
    category: 'Core Frontend',
    description: 'Foundational languages, core frameworks, and modern routing paradigms.',
    skills: [
      { name: 'React.js', icon: <SiReact className='text-[#61DAFB]' />, note: 'Hooks, Lifecycle, Context, Custom Architectures' },
      { name: 'Next.js', icon: <SiNextdotjs />, note: 'App Router, Pages Router, Server Components, Server Actions' },
      { name: 'TypeScript', icon: <SiTypescript className='text-[#3178C6]' />, note: 'Interface typing, generics, strict type safety' },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript className='text-[#F7DF1E]' />, note: 'Async/await, closures, prototypes, event loop' },
      { name: 'HTML5 & CSS3', icon: <SiHtml5 className='text-[#E34F26]' />, note: 'Semantic markup, accessibility (a11y), responsive layouts' },
    ],
  },
  {
    category: 'State Management & UI',
    description: 'Predictable state patterns and component design systems.',
    skills: [
      { name: 'Redux Toolkit', icon: <SiRedux className='text-[#764ABC]' />, note: 'createSlice, createAsyncThunk, selectors' },
      { name: 'Redux Thunk', icon: <SiRedux className='text-[#764ABC]' />, note: 'Async dispatch pipelines, middleware' },
      { name: 'Material UI (MUI)', icon: <SiMui className='text-[#007FFF]' />, note: 'Theme customization, complex data tables, modal dialogs' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-[#06B6D4]' />, note: 'Utility-first styling, design tokens, dark mode' },
      { name: 'React Bootstrap', icon: <SiBootstrap className='text-[#7952B3]' />, note: 'Grid layouts, accessible standard components' },
    ],
  },
  {
    category: 'APIs & Integrations',
    description: 'Reliable backend communication, compliance flows, and verification engines.',
    skills: [
      { name: 'REST APIs & Axios', icon: <SiAxios className='text-[#5A29E4]' />, note: 'Interceptors, centralized error handling, retry logic' },
      { name: 'Signzy Verification APIs', icon: <FaUserCheck className='text-emerald-500' />, note: 'Automated KYC, PAN verification, penny-drop validation' },
      { name: 'AWS API Gateway', icon: <SiAmazonaws className='text-[#FF9900]' />, note: 'Secure API routing, payload contracts' },
      { name: 'AWS SDK & S3', icon: <SiAmazonaws className='text-[#FF9900]' />, note: 'Presigned URLs, direct document & media uploads' },
      { name: 'Auth & CSRF Handling', icon: <FaShieldAlt className='text-blue-500' />, note: 'JWT access/refresh tokens, secure cookies, CSRF protection' },
    ],
  },
  {
    category: 'Additional Technologies & Tools',
    description: 'Server runtimes, storage, design handoff, and version control.',
    skills: [
      { name: 'Node.js & Express.js', icon: <SiNodedotjs className='text-[#5FA04E]' />, note: 'API services, middleware, mock test servers' },
      { name: 'MongoDB', icon: <SiMongodb className='text-[#47A248]' />, note: 'Document schemas, CRUD operations, indexing basics' },
      { name: 'Git & GitHub', icon: <SiGit className='text-[#F05032]' />, note: 'Branching strategies, pull requests, zero merge conflicts' },
      { name: 'Figma', icon: <SiFigma className='text-[#F24E1E]' />, note: 'Design system interpretation, token extraction, prototyping' },
    ],
  },
];

export const skillsdata = skillsCategories.flatMap((cat) => cat.skills);

export const aboutData = {
  narrative: [
    'I am a Frontend Developer with 2+ years of professional experience building production-ready web applications. Over the last two years, my focus has been on high-throughput fintech portals, merchant transaction dashboards, automated compliance engines, and client web applications using React, Next.js, and TypeScript.',
    'Working on financial technology products taught me that frontend engineering is about much more than assembling visual components. It demands deep respect for data precision, defensive error handling, predictable state machines, and resilient interfaces that never leave users stranded mid-transaction.',
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
