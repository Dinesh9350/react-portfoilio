import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type='button'
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
        isDark
          ? 'bg-charcoal-850 border-charcoal-700 text-amber-400 hover:bg-charcoal-800 hover:text-amber-300'
          : 'bg-warm-100 border-warm-300 text-charcoal-700 hover:bg-warm-200 hover:text-charcoal-900'
      } ${className}`}
    >
      {isDark ? <FaSun className='w-4 h-4' /> : <FaMoon className='w-4 h-4' />}
    </button>
  );
};

export default ThemeToggle;
