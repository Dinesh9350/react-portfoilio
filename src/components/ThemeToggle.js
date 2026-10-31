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
      className={`p-2 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-xs active:scale-95 flex items-center justify-center ${
        isDark
          ? 'bg-charcoal-850 border-charcoal-700 text-amber-400 hover:bg-charcoal-800 hover:text-amber-300 hover:border-amber-500/40'
          : 'bg-warm-100 border-warm-300 text-indigo-600 hover:bg-warm-200 hover:text-indigo-800 hover:border-indigo-400/50'
      } ${className}`}
    >
      {isDark ? (
        <FaSun className='w-4 h-4 transition-transform hover:rotate-45' />
      ) : (
        <FaMoon className='w-4 h-4 transition-transform hover:-rotate-12' />
      )}
    </button>
  );
};

export default ThemeToggle;
