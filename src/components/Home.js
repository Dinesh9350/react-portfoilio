import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Interactive Floating Back-to-Top Pill */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label='Scroll to top'
            className='fixed bottom-6 right-6 z-40 p-3 rounded-full bg-neutral-900 text-white dark:bg-charcoal-800 dark:text-blue-400 border border-neutral-700 dark:border-charcoal-600 shadow-lg hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            title='Back to top'
          >
            <FaArrowUp className='text-sm' />
          </motion.button>
        )}
      </AnimatePresence>

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
