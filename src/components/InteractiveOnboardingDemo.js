import React, { useState } from 'react';
import { FaCheckCircle, FaSpinner, FaUpload } from 'react-icons/fa';

const InteractiveOnboardingDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [businessName, setBusinessName] = useState('Apex Technologies Private Limited');
  const [panNumber, setPanNumber] = useState('AAACA1234F');
  const [verifying, setVerifying] = useState(false);
  const [panVerified, setPanVerified] = useState(false);
  const [bankAccountNumber, setBankAccountNumber] = useState('9182371900129');
  const [ifsc, setIfsc] = useState('HDFC0001234');
  const [pennyDropSuccess, setPennyDropSuccess] = useState(false);

  const handleVerifyPan = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setPanVerified(true);
    }, 1200);
  };

  const handleVerifyBank = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setPennyDropSuccess(true);
    }, 1400);
  };

  return (
    <div className='w-full max-w-lg mx-auto rounded-2xl border border-warm-300 dark:border-charcoal-750 bg-white dark:bg-charcoal-900 shadow-xl overflow-hidden text-left'>
      {/* Header */}
      <div className='px-5 py-4 border-b border-warm-200 dark:border-charcoal-800 bg-warm-50 dark:bg-charcoal-950 flex items-center justify-between'>
        <div>
          <h4 className='text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider'>
            Signzy Automated KYC Pipeline
          </h4>
          <span className='text-[10px] text-neutral-500 font-mono'>
            Stage {currentStep} of 4 · Automated Verification
          </span>
        </div>
        <span className='text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900'>
          Interactive Preview
        </span>
      </div>

      {/* Stepper Progress Bar */}
      <div className='grid grid-cols-4 border-b border-warm-200 dark:border-charcoal-800 bg-warm-100/50 dark:bg-charcoal-950/40 text-center text-[10px] font-bold'>
        {[
          { num: 1, title: 'Company' },
          { num: 2, title: 'PAN Check' },
          { num: 3, title: 'Penny Drop' },
          { num: 4, title: 'KYC Docs' },
        ].map((s) => (
          <button
            key={s.num}
            onClick={() => setCurrentStep(s.num)}
            className={`py-2 px-1 border-b-2 transition ${
              currentStep === s.num
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-charcoal-900'
                : 'border-transparent text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
            }`}
          >
            {s.num}. {s.title}
          </button>
        ))}
      </div>

      <div className='p-6 text-xs space-y-4'>
        {currentStep === 1 && (
          <div className='space-y-3'>
            <label className='block font-semibold text-neutral-700 dark:text-neutral-300'>
              Registered Entity Name
            </label>
            <input
              type='text'
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className='w-full px-3.5 py-2 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white'
            />
            <div className='pt-2 flex justify-end'>
              <button
                onClick={() => setCurrentStep(2)}
                className='px-4 py-2 rounded-xl font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition'
              >
                Next: Signzy Document Check →
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className='space-y-3'>
            <div>
              <label className='block font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5'>
                Corporate PAN Card Number
              </label>
              <div className='flex gap-2'>
                <input
                  type='text'
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                  className='flex-1 px-3.5 py-2 rounded-xl font-mono uppercase bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white'
                />
                <button
                  type='button'
                  onClick={handleVerifyPan}
                  disabled={verifying || panVerified}
                  className='px-3.5 py-2 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-60 transition flex items-center gap-1.5'
                >
                  {verifying ? (
                    <FaSpinner className='animate-spin' />
                  ) : panVerified ? (
                    <FaCheckCircle />
                  ) : null}
                  <span>{panVerified ? 'Verified' : 'Verify with Signzy'}</span>
                </button>
              </div>
            </div>

            {panVerified && (
              <div className='p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] space-y-1'>
                <div className='font-bold flex items-center gap-1'>
                  <FaCheckCircle /> Signzy API Response: 200 OK
                </div>
                <div>Entity: APEX TECHNOLOGIES PVT LTD</div>
                <div>Status: ACTIVE (Income Tax Dept Verified)</div>
              </div>
            )}

            <div className='pt-2 flex justify-between'>
              <button
                onClick={() => setCurrentStep(1)}
                className='text-neutral-500 hover:underline'
              >
                ← Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className='px-4 py-2 rounded-xl font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition'
              >
                Next: Bank Penny Drop →
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className='space-y-3'>
            <div className='grid grid-cols-2 gap-3'>
              <div>
                <label className='block font-semibold text-neutral-700 dark:text-neutral-300 mb-1'>
                  Account Number
                </label>
                <input
                  type='text'
                  value={bankAccountNumber}
                  onChange={(e) => setBankAccountNumber(e.target.value)}
                  className='w-full px-3 py-2 rounded-xl font-mono bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white'
                />
              </div>
              <div>
                <label className='block font-semibold text-neutral-700 dark:text-neutral-300 mb-1'>
                  IFSC Code
                </label>
                <input
                  type='text'
                  value={ifsc}
                  onChange={(e) => setIfsc(e.target.value)}
                  className='w-full px-3 py-2 rounded-xl font-mono bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white'
                />
              </div>
            </div>

            <button
              onClick={handleVerifyBank}
              disabled={verifying || pennyDropSuccess}
              className='w-full py-2.5 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-60 transition flex items-center justify-center gap-2'
            >
              {verifying ? (
                <FaSpinner className='animate-spin' />
              ) : pennyDropSuccess ? (
                <FaCheckCircle />
              ) : null}
              <span>
                {pennyDropSuccess
                  ? 'Penny-Drop Match Confirmed (₹1.00 Deposited)'
                  : 'Trigger Signzy Penny-Drop Verification'}
              </span>
            </button>

            <div className='pt-2 flex justify-between'>
              <button
                onClick={() => setCurrentStep(2)}
                className='text-neutral-500 hover:underline'
              >
                ← Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className='px-4 py-2 rounded-xl font-semibold bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition'
              >
                Next: Document UX →
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className='space-y-3'>
            <div className='p-4 rounded-xl border-2 border-dashed border-warm-300 dark:border-charcoal-700 bg-warm-50/50 dark:bg-charcoal-850 text-center space-y-1.5'>
              <FaUpload className='text-neutral-400 text-xl mx-auto' />
              <div className='font-bold text-neutral-800 dark:text-neutral-200'>
                Certificate of Incorporation (COI) Uploaded
              </div>
              <div className='text-[10px] text-neutral-400 font-mono'>
                apex_tech_coi_certified.pdf (1.2 MB) · Verified Clean
              </div>
            </div>

            <div className='p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-300 text-[11px] leading-relaxed'>
              Verification pipeline ready: All 4 stages successfully passed. Merchant account moved to active state in under 3 minutes.
            </div>

            <div className='pt-2 flex justify-start'>
              <button
                onClick={() => setCurrentStep(1)}
                className='text-blue-600 dark:text-blue-400 font-semibold hover:underline'
              >
                ↺ Restart Interactive Wizard
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Internal Working Detailing Strip */}
      <div className='px-4 sm:px-6 py-3 border-t border-warm-200 dark:border-charcoal-800 bg-warm-50/80 dark:bg-charcoal-950 text-[10px] sm:text-[11px] font-mono text-neutral-500 dark:text-neutral-400 flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-1.5'>
          <span className='w-2 h-2 rounded-full bg-purple-500' />
          <span>Signzy Microservice: Online</span>
        </div>
        <div className='text-neutral-400'>
          Latency: <span className='text-emerald-500 font-bold'>1.2s</span>
        </div>
        <div className='text-neutral-400 hidden xs:block'>
          Draft Hydration: Synced
        </div>
      </div>
    </div>
  );
};

export default InteractiveOnboardingDemo;
