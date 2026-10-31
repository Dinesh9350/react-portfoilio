import React, { useState } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import CaseStudyModal from './CaseStudyModal';
import ResumeModal from './ResumeModal';
import { projectsData } from '../data/portfolioData';
import useScrollToTop from '../helper/useScrollToTop';

const Home = () => {
  useScrollToTop();
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const selectedProject = projectsData.find((p) => p.id === selectedCaseStudyId);

  return (
    <div className='min-h-screen bg-warm-50 dark:bg-charcoal-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-200 antialiased'>
      {/* Navigation */}
      <Navigation onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Flow */}
      <main>
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection onSelectCaseStudy={(id) => setSelectedCaseStudyId(id)} />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedCaseStudyId(null)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default Home;
