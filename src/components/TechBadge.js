import React from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiWebpack,
  SiJest,
  SiMongodb,
  SiDocker,
  SiPostman,
} from 'react-icons/si';
import {
  FaServer,
  FaCubes,
  FaFingerprint,
  FaNetworkWired,
  FaQrcode,
  FaCheckDouble,
  FaBolt,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';

const techConfig = {
  'next.js (app router)': {
    icon: SiNextdotjs,
    iconColor: 'text-neutral-900 dark:text-neutral-100',
    badgeClass:
      'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500',
  },
  'next.js': {
    icon: SiNextdotjs,
    iconColor: 'text-neutral-900 dark:text-neutral-100',
    badgeClass:
      'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500',
  },
  'react.js': {
    icon: SiReact,
    iconColor: 'text-[#00d8ff]',
    badgeClass:
      'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/70 hover:border-cyan-400',
  },
  react: {
    icon: SiReact,
    iconColor: 'text-[#00d8ff]',
    badgeClass:
      'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/70 hover:border-cyan-400',
  },
  typescript: {
    icon: SiTypescript,
    iconColor: 'text-[#3178c6]',
    badgeClass:
      'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/70 hover:border-blue-400',
  },
  javascript: {
    icon: SiJavascript,
    iconColor: 'text-[#f7df1e]',
    badgeClass:
      'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/70 hover:border-amber-400',
  },
  'server components': {
    icon: FaServer,
    iconColor: 'text-indigo-500',
    badgeClass:
      'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/70 hover:border-indigo-400',
  },
  'redux toolkit': {
    icon: SiRedux,
    iconColor: 'text-[#764abc]',
    badgeClass:
      'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/70 hover:border-purple-400',
  },
  redux: {
    icon: SiRedux,
    iconColor: 'text-[#764abc]',
    badgeClass:
      'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/70 hover:border-purple-400',
  },
  'material ui': {
    icon: SiMui,
    iconColor: 'text-[#007fff]',
    badgeClass:
      'bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/70 hover:border-sky-400',
  },
  mui: {
    icon: SiMui,
    iconColor: 'text-[#007fff]',
    badgeClass:
      'bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/70 hover:border-sky-400',
  },
  'tailwind css': {
    icon: SiTailwindcss,
    iconColor: 'text-[#06b6d4]',
    badgeClass:
      'bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800/70 hover:border-teal-400',
  },
  'signzy apis': {
    icon: FaFingerprint,
    iconColor: 'text-emerald-500',
    badgeClass:
      'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/70 hover:border-emerald-400',
  },
  'rest apis': {
    icon: FaNetworkWired,
    iconColor: 'text-amber-500',
    badgeClass:
      'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/70 hover:border-amber-400',
  },
  'upi intent': {
    icon: FaQrcode,
    iconColor: 'text-violet-500',
    badgeClass:
      'bg-violet-50 dark:bg-violet-950/40 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-800/70 hover:border-violet-400',
  },
  'formik / yup': {
    icon: FaCheckDouble,
    iconColor: 'text-emerald-600',
    badgeClass:
      'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/70 hover:border-emerald-400',
  },
  'framer motion': {
    icon: FaBolt,
    iconColor: 'text-pink-500',
    badgeClass:
      'bg-pink-50 dark:bg-pink-950/40 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800/70 hover:border-pink-400',
  },
  html5: {
    icon: FaHtml5,
    iconColor: 'text-orange-500',
    badgeClass:
      'bg-orange-50 dark:bg-orange-950/40 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/70 hover:border-orange-400',
  },
  css3: {
    icon: FaCss3Alt,
    iconColor: 'text-blue-500',
    badgeClass:
      'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/70 hover:border-blue-400',
  },
  'git / github': {
    icon: FaGitAlt,
    iconColor: 'text-rose-500',
    badgeClass:
      'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/70 hover:border-rose-400',
  },
  'node.js': {
    icon: FaNodeJs,
    iconColor: 'text-emerald-600',
    badgeClass:
      'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/70 hover:border-emerald-400',
  },
  webpack: {
    icon: SiWebpack,
    iconColor: 'text-blue-500',
    badgeClass:
      'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/70 hover:border-blue-400',
  },
  jest: {
    icon: SiJest,
    iconColor: 'text-rose-600',
    badgeClass:
      'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/70 hover:border-rose-400',
  },
  mongodb: {
    icon: SiMongodb,
    iconColor: 'text-emerald-600',
    badgeClass:
      'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/70 hover:border-emerald-400',
  },
  docker: {
    icon: SiDocker,
    iconColor: 'text-sky-500',
    badgeClass:
      'bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/70 hover:border-sky-400',
  },
  postman: {
    icon: SiPostman,
    iconColor: 'text-orange-500',
    badgeClass:
      'bg-orange-50 dark:bg-orange-950/40 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/70 hover:border-orange-400',
  },
};

const TechBadge = ({
  name,
  size = 'sm',
  showIcon = true,
  className = '',
}) => {
  const normalized = (name || '').toLowerCase().trim();
  const config = techConfig[normalized] || {
    icon: FaCubes,
    iconColor: 'text-blue-500',
    badgeClass:
      'bg-warm-100 dark:bg-charcoal-800 text-neutral-800 dark:text-neutral-200 border-warm-200 dark:border-charcoal-700 hover:border-blue-400',
  };

  const IconComponent = config.icon;

  const sizeClasses = {
    xs: 'text-[11px] px-2 py-0.5 gap-1',
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-sm px-3 py-1.5 gap-2',
  }[size] || 'text-xs px-2.5 py-1 gap-1.5';

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-lg border transition-all duration-150 shadow-2xs hover:scale-[1.02] ${sizeClasses} ${config.badgeClass} ${className}`}
    >
      {showIcon && (
        <IconComponent
          className={`text-[12px] flex-shrink-0 ${config.iconColor}`}
          aria-hidden='true'
        />
      )}
      <span className='tracking-tight leading-none'>{name}</span>
    </span>
  );
};

export default TechBadge;
