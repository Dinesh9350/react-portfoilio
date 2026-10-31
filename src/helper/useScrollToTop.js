import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      // Fallback for environments lacking smooth scroll support
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo(0, 0);
      }
    }
  }, []);
};

export default useScrollToTop;
