import React from 'react';
import ExperienceSection from './ExperienceSection';
import useScrollToTop from '../helper/useScrollToTop';

const Experience = () => {
  useScrollToTop();
  return (
    <div className='pt-16 sm:pt-20'>
      <ExperienceSection />
    </div>
  );
};

export default Experience;
