import React, { useState } from 'react';
import Navbar from './components/NavbarCustom';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CaseStudyModal from './components/CaseStudyModal';
import { caseStudiesData } from './components/data';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

const AppContent = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);

  const selectedCaseStudy = caseStudiesData.find(
    (cs) => cs.id === selectedCaseStudyId
  );

  return (
    <div className='min-h-screen bg-warm-50 dark:bg-charcoal-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-200'>
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      <main>
        <Outlet
          context={{
            onOpenResume: () => setResumeOpen(true),
            onSelectCaseStudy: (id) => setSelectedCaseStudyId(id),
          }}
        />
      </main>

      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudyId(null)}
      />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
