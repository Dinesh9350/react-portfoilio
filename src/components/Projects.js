import React from 'react';
import { useOutletContext } from 'react-router-dom';
import FeaturedProjects from './FeaturedProjects';
import useScrollToTop from '../helper/useScrollToTop';

const Projects = () => {
  useScrollToTop();
  const context = useOutletContext() || {};
  const { onSelectCaseStudy } = context;

  return (
    <div className='pt-16 sm:pt-20'>
      <FeaturedProjects onSelectCaseStudy={onSelectCaseStudy} />
    </div>
  );
};

export default Projects;
