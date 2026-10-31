import React, { useState } from 'react';
import { FaCreditCard, FaMobileAlt, FaBuilding, FaCheckCircle, FaLock, FaArrowLeft, FaShieldAlt } from 'react-icons/fa';

const InteractiveCheckoutDemo = () => {
  const [step, setStep] = useState(1); // 1: Method, 2: Input, 3: Processing/Success
  const [method, setMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('4532 8901 2345 6789');
  const [expiry, setExpiry] = useState('08/28');
  const [cvv, setCvv] = useState('492');
  const [upiId, setUpiId] = useState('merchant.ops@okhdfcbank');
  const [selectedBank, setSelectedBank] = useState('SBI');
  const [processing, setProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Detect card brand
  const cardBrand = cardNumber.startsWith('4')
    ? 'Visa'
    : cardNumber.startsWith('5')
    ? 'Mastercard'
    : cardNumber.startsWith('6')
    ? 'RuPay'
    : 'Card';

  const handlePay = (e) => {
    e.preventDefault();
    setProcessing(true);
    setStep(3);

    setTimeout(() => {
      setProcessing(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    setProcessing(false);
  };

  return (
    <div className='w-full max-w-md mx-auto rounded-2xl border border-warm-300 dark:border-charcoal-750 bg-white dark:bg-charcoal-900 shadow-xl overflow-hidden text-left'>
      {/* Header */}
      <div className='px-5 py-4 border-b border-warm-200 dark:border-charcoal-800 bg-warm-50 dark:bg-charcoal-950 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          {step > 1 && !isSuccess && !processing && (
            <button
              onClick={() => setStep(step - 1)}
              className='text-neutral-400 hover:text-neutral-700 dark:hover:text-white mr-1'
            >
              <FaArrowLeft className='text-xs' />
            </button>
          )}
          <div>
            <h4 className='text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider'>
              SecurePay Checkout
            </h4>
            <span className='text-[10px] text-neutral-500 font-mono'>
              ORDER-ID: #SP-88210 · ₹1,850.00
            </span>
          </div>
        </div>

        <div className='flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900'>
          <FaLock className='text-[9px]' />
          <span>256-Bit TLS</span>
        </div>
      </div>

      {/* Demo Notice */}
      <div className='bg-blue-50/70 dark:bg-blue-950/40 px-5 py-1.5 border-b border-blue-100 dark:border-blue-900/50 text-[11px] text-blue-700 dark:text-blue-300 flex items-center justify-between'>
        <span>Simulated Checkout Flow · Step {step} of 3</span>
        <span className='font-mono text-[10px]'>DEMO MODE</span>
      </div>

      {/* Body */}
      <div className='p-6'>
        {step === 1 && (
          <div className='space-y-3'>
            <span className='text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2'>
              Select Payment Method
            </span>

            <button
              onClick={() => {
                setMethod('upi');
                setStep(2);
              }}
              className='w-full p-3.5 rounded-xl border border-warm-200 dark:border-charcoal-800 hover:border-blue-500/50 bg-warm-50/50 dark:bg-charcoal-850 flex items-center justify-between transition group'
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'>
                  <FaMobileAlt />
                </div>
                <div className='text-left'>
                  <div className='text-sm font-bold text-neutral-900 dark:text-white'>
                    UPI Intent & QR
                  </div>
                  <div className='text-[11px] text-neutral-500'>
                    Google Pay, PhonePe, Paytm, BHIM
                  </div>
                </div>
              </div>
              <span className='text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform'>
                Select →
              </span>
            </button>

            <button
              onClick={() => {
                setMethod('card');
                setStep(2);
              }}
              className='w-full p-3.5 rounded-xl border border-warm-200 dark:border-charcoal-800 hover:border-blue-500/50 bg-warm-50/50 dark:bg-charcoal-850 flex items-center justify-between transition group'
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'>
                  <FaCreditCard />
                </div>
                <div className='text-left'>
                  <div className='text-sm font-bold text-neutral-900 dark:text-white'>
                    Credit / Debit Cards
                  </div>
                  <div className='text-[11px] text-neutral-500'>
                    Visa, Mastercard, RuPay, Maestro
                  </div>
                </div>
              </div>
              <span className='text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform'>
                Select →
              </span>
            </button>

            <button
              onClick={() => {
                setMethod('netbanking');
                setStep(2);
              }}
              className='w-full p-3.5 rounded-xl border border-warm-200 dark:border-charcoal-800 hover:border-blue-500/50 bg-warm-50/50 dark:bg-charcoal-850 flex items-center justify-between transition group'
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400'>
                  <FaBuilding />
                </div>
                <div className='text-left'>
                  <div className='text-sm font-bold text-neutral-900 dark:text-white'>
                    Net Banking
                  </div>
                  <div className='text-[11px] text-neutral-500'>
                    All major Indian retail banks
                  </div>
                </div>
              </div>
              <span className='text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform'>
                Select →
              </span>
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handlePay} className='space-y-4'>
            {method === 'card' && (
              <>
                <div>
                  <div className='flex justify-between items-center mb-1.5'>
                    <label className='text-xs font-semibold text-neutral-700 dark:text-neutral-300'>
                      Card Number
                    </label>
                    <span className='text-[11px] font-bold text-blue-600 dark:text-blue-400 font-mono'>
                      {cardBrand}
                    </span>
                  </div>
                  <input
                    type='text'
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    className='w-full px-3.5 py-2 rounded-xl text-sm font-mono bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500'
                  />
                </div>

                <div className='grid grid-cols-2 gap-3'>
                  <div>
                    <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5'>
                      Expiry Date
                    </label>
                    <input
                      type='text'
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder='MM/YY'
                      required
                      className='w-full px-3.5 py-2 rounded-xl text-sm font-mono bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500'
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5'>
                      CVV / CVC
                    </label>
                    <input
                      type='password'
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                      className='w-full px-3.5 py-2 rounded-xl text-sm font-mono bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500'
                    />
                  </div>
                </div>
              </>
            )}

            {method === 'upi' && (
              <div>
                <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5'>
                  Virtual Payment Address (VPA / UPI ID)
                </label>
                <input
                  type='text'
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder='username@okhdfcbank'
                  required
                  className='w-full px-3.5 py-2 rounded-xl text-sm font-mono bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
                <span className='block text-[11px] text-neutral-400 mt-1.5'>
                  Deep link intent will be dispatched to your installed UPI client.
                </span>
              </div>
            )}

            {method === 'netbanking' && (
              <div>
                <label className='block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2'>
                  Popular Banks
                </label>
                <div className='grid grid-cols-3 gap-2 mb-3'>
                  {['SBI', 'HDFC', 'ICICI', 'Axis', 'PNB', 'Kotak'].map((b) => (
                    <button
                      key={b}
                      type='button'
                      onClick={() => setSelectedBank(b)}
                      className={`p-2 rounded-lg text-xs font-bold transition border ${
                        selectedBank === b
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-warm-50 dark:bg-charcoal-850 border-warm-200 dark:border-charcoal-750 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              type='submit'
              className='w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition shadow-sm flex items-center justify-center gap-2 mt-4'
            >
              <FaShieldAlt className='text-xs' />
              <span>Pay ₹1,850.00 (Simulate)</span>
            </button>
          </form>
        )}

        {step === 3 && (
          <div className='py-6 text-center space-y-3'>
            {processing && (
              <div className='flex flex-col items-center justify-center space-y-3'>
                <div className='w-10 h-10 border-2 border-blue-600 border-t-transparent rounded-full animate-spin'></div>
                <div className='text-sm font-bold text-neutral-900 dark:text-white'>
                  Contacting Gateway Authorization Server...
                </div>
                <p className='text-xs text-neutral-500'>
                  Verifying transaction token with bank gateway rails.
                </p>
              </div>
            )}

            {isSuccess && (
              <div className='space-y-3'>
                <div className='w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mx-auto'>
                  <FaCheckCircle />
                </div>
                <h4 className='text-base font-bold text-neutral-900 dark:text-white'>
                  Payment Verified & Settled
                </h4>
                <div className='p-3 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 text-xs font-mono text-neutral-600 dark:text-neutral-300 text-left space-y-1'>
                  <div>Reference: #TXN-202611-9984</div>
                  <div>Status: CAPTURED (200 OK)</div>
                  <div>Channel: {method.toUpperCase()}</div>
                </div>
                <button
                  onClick={handleReset}
                  className='text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2'
                >
                  ← Test Another Transaction Flow
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCheckoutDemo;
