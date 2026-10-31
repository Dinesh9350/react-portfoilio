import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      try {
        window.scrollTo(0, 0);
      } catch (e) {
        // Safe fallback
      }
    }
  }, []);
};

export default useScrollToTop;
