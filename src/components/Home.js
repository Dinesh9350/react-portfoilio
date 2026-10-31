import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HeroSection from './HeroSection';
import FeaturedProjects from './FeaturedProjects';
import ExperienceSection from './ExperienceSection';
import CaseStudiesSection from './CaseStudiesSection';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import useScrollToTop from '../helper/useScrollToTop';

const Home = () => {
  useScrollToTop();
  const { onOpenResume, onSelectCaseStudy } = useOutletContext();

  return (
    <div>
      <HeroSection onOpenResume={onOpenResume} />
      <FeaturedProjects onSelectCaseStudy={onSelectCaseStudy} />
      <ExperienceSection />
      <CaseStudiesSection onSelectCaseStudy={onSelectCaseStudy} />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
