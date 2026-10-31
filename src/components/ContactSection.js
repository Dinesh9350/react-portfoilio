import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { profileData } from './data';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState({ sending: false, sent: false, error: null });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    emailjs
      .sendForm(
        'service_ba19ekl',
        'template_b0uzzzn',
        form.current,
        '8srZ60x-4fpWQWiiH'
      )
      .then(
        () => {
          setStatus({ sending: false, sent: true, error: null });
          if (form.current) form.current.reset();
        },
        (error) => {
          setStatus({
            sending: false,
            sent: false,
            error:
              'Unable to send via automated form right now. Please reach out directly to dineshsingh9350@gmail.com.',
          });
        }
      );
  };

  return (
    <section id='contact' className='py-20 sm:py-28'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-left mb-12'>
          <span className='text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block'>
            Get In Touch
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
            Have a frontend project or opportunity in mind? Let's talk.
          </h2>
          <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2 leading-relaxed'>
            Currently open to Frontend Developer and Software Engineering roles where I can contribute to production web systems.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left'>
          {/* Direct Channels */}
          <div className='lg:col-span-5 space-y-4'>
            <div className='p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm'>
              <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-4'>
                Direct Communication Channels
              </h3>

              <div className='space-y-3 text-sm'>
                <a
                  href={`mailto:${profileData.email}`}
                  className='flex items-center gap-3.5 p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 hover:border-blue-500/50 transition group'
                >
                  <div className='p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'>
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className='text-xs text-neutral-500 dark:text-neutral-400'>Email Address</div>
                    <div className='text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition'>
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className='flex items-center gap-3.5 p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 hover:border-emerald-500/50 transition group'
                >
                  <div className='p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className='text-xs text-neutral-500 dark:text-neutral-400'>Direct Phone</div>
                    <div className='text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition'>
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                <div className='flex items-center gap-3.5 p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
                  <div className='p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className='text-xs text-neutral-500 dark:text-neutral-400'>Location</div>
                    <div className='text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100'>
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className='mt-6 pt-6 border-t border-warm-200 dark:border-charcoal-800'>
                <span className='block text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3'>
                  Professional Profiles
                </span>
                <div className='flex items-center gap-2'>
                  <a
                    href={profileData.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-warm-100 dark:bg-charcoal-850 text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 border border-warm-200 dark:border-charcoal-750 transition'
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.github}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-warm-100 dark:bg-charcoal-850 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white border border-warm-200 dark:border-charcoal-750 transition'
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.whatsapp}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-warm-100 dark:bg-charcoal-850 text-neutral-800 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 border border-warm-200 dark:border-charcoal-750 transition'
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-sm'>
            <h3 className='text-base font-bold text-neutral-900 dark:text-white mb-2'>
              Send a Direct Message
            </h3>
            <p className='text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6'>
              Fill out the form below. I will respond within 24 business hours.
            </p>

            {status.sent && (
              <div className='mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-start gap-2.5'>
                <FaCheckCircle className='text-base mt-0.5 flex-shrink-0' />
                <span>
                  Thank you! Your message has been sent successfully. I will reach out shortly.
                </span>
              </div>
            )}

            {status.error && (
              <div className='mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-sm flex items-start gap-2.5'>
                <FaExclamationCircle className='text-base mt-0.5 flex-shrink-0' />
                <span>{status.error}</span>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2'>
                    Your Name
                  </label>
                  <input
                    required
                    type='text'
                    name='from_name'
                    placeholder='e.g. Sarah Jenkins'
                    className='w-full px-4 py-2.5 rounded-xl text-sm bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2'>
                    Your Email
                  </label>
                  <input
                    required
                    type='email'
                    name='from_email'
                    placeholder='sarah@company.com'
                    className='w-full px-4 py-2.5 rounded-xl text-sm bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2'>
                  Subject or Project Context
                </label>
                <input
                  type='text'
                  name='subject'
                  placeholder='Frontend Engineering Opportunity / Project Discussion'
                  className='w-full px-4 py-2.5 rounded-xl text-sm bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2'>
                  Message
                </label>
                <textarea
                  required
                  rows='4'
                  name='message'
                  placeholder='Tell me about your team, tech stack, or the project requirements...'
                  className='w-full px-4 py-2.5 rounded-xl text-sm bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition'
                />
              </div>

              <button
                type='submit'
                disabled={status.sending}
                className='w-full py-3 px-6 rounded-xl text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-50'
              >
                <FaPaperPlane className='text-xs' />
                <span>{status.sending ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
