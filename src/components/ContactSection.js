import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from 'react-icons/fa';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Frontend Opportunity from ${encodeURIComponent(
      formState.name
    )}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${encodeURIComponent(
      formState.name
    )} (${encodeURIComponent(formState.email)})`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id='contact' className='relative py-20 sm:py-28 overflow-hidden'>
      {/* Background ambient glow */}
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-left mb-14'
        >
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block font-mono'>
            Professional Inquiries
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Have a frontend project or opportunity in mind? Let's talk.
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            Currently open to Frontend Developer and Software Engineering opportunities where I can contribute to production web systems.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left'>
          {/* Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-5 space-y-4'
          >
            <div className='p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm'>
              <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-4'>
                Direct Contact Channels
              </h3>

              <div className='space-y-3 text-sm'>
                {/* Email with 1-click Copy Button */}
                <div className='flex items-center justify-between p-3.5 rounded-xl bg-warm-50/80 dark:bg-charcoal-850/80 border border-warm-200 dark:border-charcoal-800 transition hover:border-blue-400/40'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'>
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className='text-xs text-neutral-500 dark:text-neutral-400'>Email Address</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className='text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 transition font-mono'
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className='p-2 rounded-lg text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-warm-200/60 dark:hover:bg-charcoal-750 transition flex items-center gap-1.5'
                    title='Copy email to clipboard'
                  >
                    {copied ? <FaCheck className='text-emerald-500' /> : <FaCopy />}
                    <span className='hidden sm:inline'>{copied ? 'Copied' : 'Copy'}</span>
                  </motion.button>
                </div>

                {/* Direct Phone */}
                <div className='flex items-center gap-3 p-3.5 rounded-xl bg-warm-50/80 dark:bg-charcoal-850/80 border border-warm-200 dark:border-charcoal-800 transition hover:border-emerald-400/40'>
                  <div className='p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className='text-xs text-neutral-500 dark:text-neutral-400'>Direct Phone</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className='text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-mono'
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className='flex items-center gap-3 p-3.5 rounded-xl bg-warm-50/80 dark:bg-charcoal-850/80 border border-warm-200 dark:border-charcoal-800'>
                  <div className='p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className='text-xs text-neutral-500 dark:text-neutral-400'>Location</div>
                    <div className='text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100'>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className='mt-6 pt-6 border-t border-warm-200 dark:border-charcoal-800'>
                <span className='block text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3 font-mono'>
                  Professional Profiles
                </span>

                <div className='flex flex-wrap items-center gap-2.5'>
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={personalInfo.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 transition shadow-xs'
                  >
                    <FaLinkedin className='text-sm text-blue-600 dark:text-blue-400' />
                    <span>LinkedIn (dinesh-singh3)</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={personalInfo.github}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-warm-100 dark:bg-charcoal-850 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white border border-warm-200 dark:border-charcoal-750 transition shadow-xs'
                  >
                    <FaGithub className='text-sm' />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm'
          >
            <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-2'>
              Send a Direct Message
            </h3>
            <p className='text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6'>
              Submit the form below to initiate an email directly to Dinesh Singh.
            </p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2 font-mono'>
                    Your Name
                  </label>
                  <input
                    required
                    type='text'
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder='e.g. Sarah Jenkins'
                    className='w-full px-4 py-2.5 rounded-xl text-sm bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2 font-mono'>
                    Your Email
                  </label>
                  <input
                    required
                    type='email'
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder='sarah@company.com'
                    className='w-full px-4 py-2.5 rounded-xl text-sm bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2 font-mono'>
                  Message
                </label>
                <textarea
                  required
                  rows='4'
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder='Tell me about your team, tech stack, or the opportunity...'
                  className='w-full px-4 py-2.5 rounded-xl text-sm bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition'
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type='submit'
                className='w-full py-3 px-6 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition flex items-center justify-center gap-2 shadow-xs'
              >
                <FaPaperPlane className='text-xs' />
                <span>Send Message via Email Client</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;