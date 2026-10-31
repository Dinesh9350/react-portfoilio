import React from 'react';
import ContactSection from './ContactSection';
import useScrollToTop from '../helper/useScrollToTop';

const Contact = () => {
  useScrollToTop();
  return (
    <div className='pt-16 sm:pt-20'>
      <ContactSection />
    </div>
  );
};

export default Contact;
