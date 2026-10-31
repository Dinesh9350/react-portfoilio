import React from 'react';
import SkillsSection from './SkillsSection';
import useScrollToTop from '../helper/useScrollToTop';

const Skills = () => {
  useScrollToTop();
  return (
    <div className='pt-16 sm:pt-20'>
      <SkillsSection />
    </div>
  );
};

export default Skills;
