import React, { useState } from 'react';
import { FaCheckCircle, FaCode, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';

const InteractiveHeroPreview = () => {
  const [activeTab, setActiveTab] = useState('metrics');

  return (
    <div className='relative w-full max-w-lg mx-auto'>
      {/* Decorative subtle border frame */}
      <div className='rounded-2xl border border-warm-300 dark:border-charcoal-750 bg-white dark:bg-charcoal-900 shadow-2xl overflow-hidden text-left'>
        {/* Window Chrome Header */}
        <div className='px-4 py-3 border-b border-warm-200 dark:border-charcoal-800 bg-warm-50 dark:bg-charcoal-950 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-2.5 h-2.5 rounded-full bg-red-400/80'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-amber-400/80'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-emerald-400/80'></div>
            <span className='font-mono text-xs text-neutral-500 dark:text-neutral-400 ml-2'>
              SecurePay Financial Engine
            </span>
          </div>

          <div className='flex items-center gap-1.5 p-0.5 rounded-lg bg-warm-100 dark:bg-charcoal-850 text-[11px] font-semibold'>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-2.5 py-1 rounded transition ${
                activeTab === 'metrics'
                  ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Interface
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded transition ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Architecture
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interface Composition */}
        {activeTab === 'metrics' && (
          <div className='p-5 space-y-4 text-xs'>
            {/* Quick Balance Cards */}
            <div className='grid grid-cols-2 gap-3'>
              <div className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
                <span className='text-[10px] font-bold uppercase tracking-wider text-neutral-400 block'>
                  PayIn Net Settled
                </span>
                <span className='text-lg font-mono font-extrabold text-neutral-900 dark:text-white mt-0.5 block'>
                  ₹48,20,500
                </span>
                <span className='text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-1'>
                  <FaCheckCircle className='text-[9px]' /> 100% Reconciled
                </span>
              </div>

              <div className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800'>
                <span className='text-[10px] font-bold uppercase tracking-wider text-neutral-400 block'>
                  Batch PayOut Clearing
                </span>
                <span className='text-lg font-mono font-extrabold text-blue-600 dark:text-blue-400 mt-0.5 block'>
                  ₹12,40,000
                </span>
                <span className='text-[10px] text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 mt-1'>
                  <FaShieldAlt className='text-[9px]' /> Maker-Checker Active
                </span>
              </div>
            </div>

            {/* Micro Recent Activity Feed */}
            <div className='space-y-2'>
              <span className='text-[10px] font-bold uppercase tracking-wider text-neutral-400 block'>
                Real-Time Gateway Activity
              </span>

              <div className='p-2.5 rounded-lg border border-warm-200 dark:border-charcoal-800 flex items-center justify-between font-mono text-[11px] bg-white dark:bg-charcoal-900'>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-emerald-500'></div>
                  <span className='text-neutral-800 dark:text-neutral-200'>
                    UPI_INTENT · TXN_4821
                  </span>
                </div>
                <span className='font-bold text-neutral-900 dark:text-white'>
                  +₹4,250.00
                </span>
              </div>

              <div className='p-2.5 rounded-lg border border-warm-200 dark:border-charcoal-800 flex items-center justify-between font-mono text-[11px] bg-white dark:bg-charcoal-900'>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                  <span className='text-neutral-800 dark:text-neutral-200'>
                    SIGNZY_KYC · MERCHANT_90
                  </span>
                </div>
                <span className='text-blue-600 dark:text-blue-400 font-semibold'>
                  PASSED (200 OK)
                </span>
              </div>
            </div>

            {/* Engineering Capability Badge */}
            <div className='pt-2 border-t border-warm-200 dark:border-charcoal-800 flex items-center justify-between text-[11px] text-neutral-500'>
              <span className='flex items-center gap-1.5'>
                <FaExchangeAlt className='text-blue-600 dark:text-blue-400' />
                <span>Next.js App Router & Server Components</span>
              </span>
              <span className='font-mono text-neutral-400'>60+ Screens</span>
            </div>
          </div>
        )}

        {/* Tab 2: Clean Code Architecture */}
        {activeTab === 'code' && (
          <div className='p-4 bg-charcoal-950 text-neutral-300 font-mono text-[11px] leading-relaxed overflow-x-auto'>
            <div className='text-neutral-500 mb-2'>
              {/* Typed Gateway Transaction Contract */}
              {'// Typed Gateway Transaction Contract'}
            </div>
            <div>
              <span className='text-purple-400'>interface</span>{' '}
              <span className='text-yellow-300'>PaymentSession</span> {'{'}
            </div>
            <div className='pl-4'>
              orderId: <span className='text-emerald-400'>string</span>;
            </div>
            <div className='pl-4'>
              amount: <span className='text-emerald-400'>number</span>;
            </div>
            <div className='pl-4'>
              currency: <span className='text-amber-300'>'INR'</span>;
            </div>
            <div className='pl-4'>
              rail: <span className='text-amber-300'>'UPI'</span> |{' '}
              <span className='text-amber-300'>'CARD'</span> |{' '}
              <span className='text-amber-300'>'NETBANKING'</span>;
            </div>
            <div className='pl-4'>
              authRole: <span className='text-amber-300'>'MAKER_CHECKER'</span>;
            </div>
            <div className='pl-4'>
              onSettlement: (status: <span className='text-yellow-300'>TxnStatus</span>) =&gt; <span className='text-emerald-400'>void</span>;
            </div>
            <div>{'}'}</div>
            <div className='text-neutral-500 mt-2'>
              {/* Validated client-side Luhn & Signzy verification */}
              {'// Validated client-side Luhn & Signzy verification'}
            </div>
          </div>
        )}
      </div>

      {/* Floating Subtle Engineering Badge */}
      <div className='hidden sm:flex absolute -bottom-4 -right-4 p-3 rounded-xl bg-white dark:bg-charcoal-850 border border-warm-300 dark:border-charcoal-700 shadow-xl items-center gap-2.5 text-xs font-semibold text-neutral-800 dark:text-neutral-100'>
        <div className='p-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400'>
          <FaCode />
        </div>
        <div>
          <span className='block text-neutral-900 dark:text-white font-bold leading-none'>
            Type-Safe & Scalable
          </span>
          <span className='text-[10px] text-neutral-500 font-normal'>
            Zero merge conflicts in production
          </span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeroPreview;
