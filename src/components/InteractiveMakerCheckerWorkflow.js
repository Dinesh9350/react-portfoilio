import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserTie,
  FaUserCheck,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaKey,
  FaUndo,
  FaBuilding,
} from 'react-icons/fa';

const InteractiveMakerCheckerWorkflow = () => {
  const [role, setRole] = useState('maker'); // 'maker' | 'checker'
  const [batchStatus, setBatchStatus] = useState('draft'); // 'draft' | 'pending_approval' | 'authorized'
  const [otpInput, setOtpInput] = useState('');
  const [batchData, setBatchData] = useState({
    batchId: 'BATCH-2026-0498',
    beneficiary: 'Logistics Partner Express Ltd',
    amount: '1,45,000',
    accountNumber: '••••••••4920',
    ifsc: 'HDFC0001092',
    initiator: 'dinesh.maker@securepay.in',
  });
  const [auditLogs, setAuditLogs] = useState([
    {
      time: '11:20:05 AM',
      actor: 'System Engine',
      action: 'Batch template generated for monthly merchant disbursements',
      status: 'Ready',
    },
  ]);

  const handleSubmitBatch = (e) => {
    e.preventDefault();
    setBatchStatus('pending_approval');
    setAuditLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        actor: 'Maker (Finance Ops)',
        action: `Submitted payout batch ${batchData.batchId} for ₹${batchData.amount} for approval`,
        status: 'Pending Checker Review',
      },
      ...prev,
    ]);
    setRole('checker');
  };

  const handleAuthorizeBatch = (e) => {
    e.preventDefault();
    if (otpInput.length < 4) return;
    setBatchStatus('authorized');
    setAuditLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        actor: 'Checker (Compliance Lead)',
        action: `Dual-factor authorization verified with OTP. Payout batch ${batchData.batchId} dispatched to banking rails`,
        status: 'Authorized',
      },
      ...prev,
    ]);
  };

  const handleReset = () => {
    setBatchStatus('draft');
    setRole('maker');
    setOtpInput('');
    setAuditLogs([
      {
        time: '11:20:05 AM',
        actor: 'System Engine',
        action: 'Batch template reset for testing',
        status: 'Ready',
      },
    ]);
  };

  return (
    <div className='rounded-2xl border border-warm-300 dark:border-charcoal-750 bg-warm-100/60 dark:bg-charcoal-900/90 p-4 sm:p-7 text-left shadow-sm backdrop-blur-sm'>
      {/* Top Header & Role Switcher */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-warm-200 dark:border-charcoal-800'>
        <div>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1.5 mr-1'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f56]' />
              <span className='w-2.5 h-2.5 rounded-full bg-[#ffbd2e]' />
              <span className='w-2.5 h-2.5 rounded-full bg-[#27c93f]' />
            </div>
            <span className='px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono uppercase bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60'>
              Production RBAC Simulator
            </span>
            <span className='text-xs text-neutral-500 dark:text-neutral-400 font-mono hidden md:inline'>
              SecurePay Dual-Authorization
            </span>
          </div>
          <h4 className='text-base sm:text-xl font-extrabold text-neutral-900 dark:text-white mt-1.5'>
            Maker-Checker Payout Disbursement Pipeline
          </h4>
        </div>

        {/* Role Toggle Selector */}
        <div className='flex items-center gap-1.5 p-1 rounded-xl bg-warm-200/80 dark:bg-charcoal-850 border border-warm-300 dark:border-charcoal-700 text-xs font-semibold self-start sm:self-auto overflow-x-auto max-w-full'>
          <button
            onClick={() => setRole('maker')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition whitespace-nowrap ${
              role === 'maker'
                ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-xs font-bold'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FaUserTie className='text-xs' />
            <span>1. Maker<span className='hidden sm:inline'> (Operator)</span></span>
          </button>
          <button
            onClick={() => setRole('checker')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition whitespace-nowrap ${
              role === 'checker'
                ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-xs font-bold'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FaUserCheck className='text-xs' />
            <span>2. Checker<span className='hidden sm:inline'> (Approver)</span></span>
          </button>
          <button
            onClick={handleReset}
            className='p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition'
            title='Reset Simulator'
          >
            <FaUndo className='text-xs' />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
        {/* Left Column: Action Workspace */}
        <div className='lg:col-span-7 space-y-4'>
          <AnimatePresence mode='wait'>
            {role === 'maker' ? (
              <motion.div
                key='maker-view'
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className='p-5 rounded-xl bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 space-y-4'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-amber-500 animate-pulse' />
                    <span className='text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 font-mono'>
                      Maker Stage: Batch Initiation
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      batchStatus === 'draft'
                        ? 'bg-neutral-100 dark:bg-charcoal-800 text-neutral-600 dark:text-neutral-400'
                        : batchStatus === 'pending_approval'
                        ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400'
                        : 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400'
                    }`}
                  >
                    STATUS: {batchStatus.toUpperCase()}
                  </span>
                </div>

                <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                  The Maker role initiates commercial payout batches. Under SecurePay's RBAC policy, a Maker cannot self-approve payouts above ₹10,000 without independent Checker authorization.
                </p>

                <form onSubmit={handleSubmitBatch} className='space-y-3 pt-2 text-xs'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div>
                      <label className='block font-semibold text-neutral-700 dark:text-neutral-300 mb-1 font-mono'>
                        Batch ID
                      </label>
                      <input
                        disabled
                        value={batchData.batchId}
                        className='w-full px-3 py-2 rounded-lg bg-warm-100 dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700 text-neutral-500 dark:text-neutral-400 font-mono'
                      />
                    </div>
                    <div>
                      <label className='block font-semibold text-neutral-700 dark:text-neutral-300 mb-1 font-mono'>
                        Total Amount (INR)
                      </label>
                      <div className='relative'>
                        <span className='absolute left-3 top-2 text-neutral-500 font-mono'>₹</span>
                        <input
                          type='text'
                          value={batchData.amount}
                          onChange={(e) => setBatchData({ ...batchData, amount: e.target.value })}
                          className='w-full pl-7 pr-3 py-2 rounded-lg bg-warm-50 dark:bg-charcoal-800 border border-warm-300 dark:border-charcoal-700 text-neutral-900 dark:text-white font-mono font-bold'
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className='block font-semibold text-neutral-700 dark:text-neutral-300 mb-1 font-mono'>
                      Beneficiary Legal Entity
                    </label>
                    <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-warm-50 dark:bg-charcoal-800 border border-warm-300 dark:border-charcoal-700 text-neutral-900 dark:text-white font-medium'>
                      <FaBuilding className='text-neutral-400' />
                      <input
                        type='text'
                        value={batchData.beneficiary}
                        onChange={(e) => setBatchData({ ...batchData, beneficiary: e.target.value })}
                        className='w-full bg-transparent focus:outline-none'
                      />
                    </div>
                  </div>

                  <div className='p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between text-[11px] text-blue-700 dark:text-blue-300'>
                    <span>Verified IFSC: {batchData.ifsc}</span>
                    <span>Signzy Penny-Drop: Passed ✓</span>
                  </div>

                  {batchStatus === 'draft' ? (
                    <button
                      type='submit'
                      className='w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition flex items-center justify-center gap-2 shadow-xs'
                    >
                      <span>Submit Batch for Dual Checker Approval</span>
                      <FaArrowRight className='text-[10px]' />
                    </button>
                  ) : (
                    <div className='p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-amber-700 dark:text-amber-300 text-xs flex items-center justify-between'>
                      <span>Batch submitted. Awaiting compliance sign-off.</span>
                      <button
                        type='button'
                        onClick={() => setRole('checker')}
                        className='underline font-bold text-amber-800 dark:text-amber-200'
                      >
                        Switch to Checker →
                      </button>
                    </div>
                  )}
                </form>
              </motion.div>
            ) : (
              <motion.div
                key='checker-view'
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className='p-5 rounded-xl bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 space-y-4'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <FaShieldAlt className='text-purple-600 dark:text-purple-400' />
                    <span className='text-xs font-bold uppercase text-neutral-700 dark:text-neutral-300 font-mono'>
                      Checker Stage: Verification & OTP Authorization
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      batchStatus === 'authorized'
                        ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400'
                        : 'bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400'
                    }`}
                  >
                    {batchStatus === 'authorized' ? 'DISPATCHED' : 'AWAITING APPROVAL'}
                  </span>
                </div>

                <div className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-700 text-xs space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-neutral-500 dark:text-neutral-400 font-mono'>Batch Identifier:</span>
                    <span className='font-mono font-bold text-neutral-900 dark:text-white'>
                      {batchData.batchId}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-neutral-500 dark:text-neutral-400 font-mono'>Disbursement Target:</span>
                    <span className='font-semibold text-neutral-900 dark:text-white'>{batchData.beneficiary}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-neutral-500 dark:text-neutral-400 font-mono'>Amount to Release:</span>
                    <span className='font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm'>
                      ₹{batchData.amount}
                    </span>
                  </div>
                </div>

                {batchStatus !== 'authorized' ? (
                  <form onSubmit={handleAuthorizeBatch} className='space-y-3 text-xs'>
                    <div>
                      <label className='block font-semibold text-neutral-700 dark:text-neutral-300 mb-1 font-mono flex items-center justify-between'>
                        <span className='flex items-center gap-1.5'>
                          <FaKey className='text-purple-500 text-[10px]' />
                          <span>2FA Compliance Authorization Code</span>
                        </span>
                        <span className='text-[10px] text-neutral-400'>Use demo OTP: 4912</span>
                      </label>
                      <input
                        type='password'
                        maxLength='6'
                        value={otpInput}
                        onChange={(e) => setOtpInput(e.target.value)}
                        placeholder='Enter 4-digit OTP'
                        className='w-full px-3 py-2 rounded-lg bg-warm-50 dark:bg-charcoal-800 border border-warm-300 dark:border-charcoal-700 text-neutral-900 dark:text-white font-mono tracking-widest text-center text-base focus:outline-none focus:ring-1 focus:ring-purple-500'
                      />
                    </div>

                    <button
                      type='submit'
                      disabled={otpInput.length < 4}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 shadow-xs ${
                        otpInput.length >= 4
                          ? 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer'
                          : 'bg-warm-200 dark:bg-charcoal-750 text-neutral-400 cursor-not-allowed'
                      }`}
                    >
                      <FaCheckCircle className='text-xs' />
                      <span>Authorize Payout & Dispatch to Banking Network</span>
                    </button>
                  </form>
                ) : (
                  <div className='p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 space-y-2'>
                    <div className='flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs'>
                      <FaCheckCircle />
                      <span>Payout Batch Authorized & Settled</span>
                    </div>
                    <p className='text-[11px] text-emerald-800 dark:text-emerald-300 leading-relaxed'>
                      Disbursement processed through SecurePay Banking Gateway. Webhook dispatched to merchant callback endpoint with HMAC SHA-256 signature.
                    </p>
                    <button
                      onClick={handleReset}
                      className='text-xs font-semibold text-neutral-900 dark:text-white underline mt-1 inline-block'
                    >
                      Run New Simulation Batch
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Real-time Audit Trail & Security Specs */}
        <div className='lg:col-span-5 flex flex-col justify-between space-y-4'>
          {/* Audit Log Box */}
          <div className='p-4 rounded-xl bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 space-y-3 h-full'>
            <div className='flex items-center justify-between pb-2 border-b border-warm-200 dark:border-charcoal-800'>
              <h5 className='text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 font-mono'>
                <FaHistory />
                <span>Live Audit Trail Logs</span>
              </h5>
              <span className='text-[10px] font-mono text-neutral-400'>
                {auditLogs.length} events
              </span>
            </div>

            <div className='space-y-2 max-h-52 overflow-y-auto pr-1'>
              {auditLogs.map((log, idx) => (
                <div
                  key={idx}
                  className='p-2.5 rounded-lg bg-warm-50 dark:bg-charcoal-800 border border-warm-200 dark:border-charcoal-750 text-[11px] space-y-1'
                >
                  <div className='flex items-center justify-between font-mono text-[10px] text-neutral-400'>
                    <span>{log.actor}</span>
                    <span>{log.time}</span>
                  </div>
                  <p className='text-neutral-800 dark:text-neutral-200 font-medium leading-tight'>
                    {log.action}
                  </p>
                  <span className='inline-block text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-200/60 dark:bg-charcoal-700 text-neutral-700 dark:text-neutral-300'>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Notes */}
          <div className='p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-[11px] text-neutral-600 dark:text-neutral-400 space-y-1'>
            <div className='font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 font-mono'>
              <FaShieldAlt className='text-blue-500' />
              <span>Production Implementation at SecurePay</span>
            </div>
            <p className='leading-relaxed'>
              Built using Redux Toolkit state slices with role permission gates, optimistic UI state transitions, and asynchronous retry logic for webhook confirmations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMakerCheckerWorkflow;