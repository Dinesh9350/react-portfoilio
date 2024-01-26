import React, { useEffect } from 'react';

const useScrollToTop = () => {
  const scroll = useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return scroll;
};

export default useScrollToTop;
