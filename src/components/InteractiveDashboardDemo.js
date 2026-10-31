import React, { useState, useMemo } from 'react';
import { FaSearch, FaCheckCircle, FaClock, FaShieldAlt, FaTimes } from 'react-icons/fa';

const sampleTransactions = [
  {
    id: 'TXN-948123',
    portal: 'PayIn',
    merchant: 'Acme Retail Solutions',
    amount: '₹42,850.00',
    rail: 'UPI Intent',
    status: 'Completed',
    date: 'Today, 14:32',
    reference: 'REF-8849201',
  },
  {
    id: 'TXN-948124',
    portal: 'PayOut',
    merchant: 'Vendor Logistics India',
    amount: '₹1,25,000.00',
    rail: 'IMPS',
    status: 'Pending',
    date: 'Today, 13:15',
    reference: 'PO-202611-049',
    needsApproval: true,
  },
  {
    id: 'TXN-948125',
    portal: 'PayIn',
    merchant: 'Zenith Tech Labs',
    amount: '₹18,200.00',
    rail: 'Cards (Visa)',
    status: 'Completed',
    date: 'Today, 11:45',
    reference: 'REF-8849203',
  },
  {
    id: 'TXN-948126',
    portal: 'PayOut',
    merchant: 'CloudOps Infrastructure',
    amount: '₹84,300.00',
    rail: 'NEFT',
    status: 'Processing',
    date: 'Today, 10:20',
    reference: 'PO-202611-052',
  },
  {
    id: 'TXN-948127',
    portal: 'PayIn',
    merchant: 'Metro Wholesale Traders',
    amount: '₹67,400.00',
    rail: 'Net Banking',
    status: 'Completed',
    date: 'Yesterday, 18:05',
    reference: 'REF-8849209',
  },
  {
    id: 'TXN-948128',
    portal: 'PayOut',
    merchant: 'Spectrum Digital Marketing',
    amount: '₹35,000.00',
    rail: 'IMPS',
    status: 'Pending',
    date: 'Yesterday, 16:40',
    reference: 'PO-202611-058',
    needsApproval: true,
  },
];

const InteractiveDashboardDemo = () => {
  const [activePortal, setActivePortal] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [approvalModal, setApprovalModal] = useState(null);
  const [approvalSuccess, setApprovalSuccess] = useState(false);

  const filteredData = useMemo(() => {
    return transactions.filter((t) => {
      const matchesPortal = activePortal === 'ALL' || t.portal === activePortal;
      const matchesStatus = statusFilter === 'ALL' || t.status === statusFilter;
      const matchesSearch =
        searchQuery === '' ||
        t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.reference.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPortal && matchesStatus && matchesSearch;
    });
  }, [transactions, activePortal, statusFilter, searchQuery]);

  const handleApprove = (txnId) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === txnId ? { ...t, status: 'Completed', needsApproval: false } : t
      )
    );
    setApprovalSuccess(true);
    setTimeout(() => {
      setApprovalModal(null);
      setApprovalSuccess(false);
    }, 1200);
  };

  return (
    <div className='rounded-2xl border border-warm-300 dark:border-charcoal-750 bg-white dark:bg-charcoal-900 shadow-xl overflow-hidden text-left'>
      {/* Top Application Bar */}
      <div className='px-4 sm:px-6 py-3.5 border-b border-warm-200 dark:border-charcoal-800 bg-warm-50 dark:bg-charcoal-950 flex flex-wrap items-center justify-between gap-3'>
        <div className='flex items-center gap-2.5'>
          <div className='flex gap-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-red-400/80'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-amber-400/80'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-emerald-400/80'></div>
          </div>
          <span className='font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400 ml-2'>
            SecurePay Merchant Portal v2.4
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900'>
            Interactive UI Demo · Simulated Data
          </span>
        </div>
      </div>

      {/* Control Bar: Portal Toggles & Search */}
      <div className='p-4 sm:p-5 border-b border-warm-200 dark:border-charcoal-800 flex flex-wrap items-center justify-between gap-3'>
        {/* Portal Switcher Tabs */}
        <div className='flex items-center p-1 rounded-xl bg-warm-100 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-xs font-semibold'>
          <button
            onClick={() => setActivePortal('ALL')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activePortal === 'ALL'
                ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            All Rails ({transactions.length})
          </button>
          <button
            onClick={() => setActivePortal('PayIn')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activePortal === 'PayIn'
                ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            PayIn (Receivables)
          </button>
          <button
            onClick={() => setActivePortal('PayOut')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activePortal === 'PayOut'
                ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            PayOut (Disbursements)
          </button>
        </div>

        {/* Live Search and Filter */}
        <div className='flex items-center gap-2 flex-1 sm:flex-initial max-w-sm'>
          <div className='relative w-full'>
            <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs' />
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Filter by ID, merchant...'
              className='w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className='px-2.5 py-1.5 rounded-lg text-xs bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-800 dark:text-neutral-200 focus:outline-none'
          >
            <option value='ALL'>All Status</option>
            <option value='Completed'>Completed</option>
            <option value='Processing'>Processing</option>
            <option value='Pending'>Pending (Maker-Checker)</option>
          </select>
        </div>
      </div>

      {/* Transaction Table */}
      <div className='overflow-x-auto'>
        <table className='w-full text-left text-xs'>
          <thead className='bg-warm-100/60 dark:bg-charcoal-950/60 text-neutral-500 dark:text-neutral-400 uppercase font-mono text-[10px] tracking-wider border-b border-warm-200 dark:border-charcoal-800'>
            <tr>
              <th className='py-3 px-4'>Transaction ID</th>
              <th className='py-3 px-4'>Portal Rail</th>
              <th className='py-3 px-4'>Merchant / Beneficiary</th>
              <th className='py-3 px-4 text-right'>Amount</th>
              <th className='py-3 px-4'>Status</th>
              <th className='py-3 px-4 text-right'>Action</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-warm-200 dark:divide-charcoal-800 font-sans'>
            {filteredData.map((txn) => (
              <tr
                key={txn.id}
                className='hover:bg-warm-50 dark:hover:bg-charcoal-850/50 transition-colors'
              >
                <td className='py-3 px-4 font-mono font-medium text-neutral-900 dark:text-white'>
                  {txn.id}
                  <span className='block text-[10px] text-neutral-400 font-sans'>
                    {txn.date}
                  </span>
                </td>
                <td className='py-3 px-4'>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                      txn.portal === 'PayIn'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800'
                    }`}
                  >
                    {txn.portal} · {txn.rail}
                  </span>
                </td>
                <td className='py-3 px-4 text-neutral-800 dark:text-neutral-200 font-medium'>
                  {txn.merchant}
                  <span className='block text-[10px] text-neutral-400 font-mono'>
                    {txn.reference}
                  </span>
                </td>
                <td className='py-3 px-4 text-right font-mono font-bold text-neutral-900 dark:text-white'>
                  {txn.amount}
                </td>
                <td className='py-3 px-4'>
                  {txn.status === 'Completed' && (
                    <span className='inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold'>
                      <FaCheckCircle className='text-[10px]' />
                      <span>Settled</span>
                    </span>
                  )}
                  {txn.status === 'Processing' && (
                    <span className='inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold'>
                      <FaClock className='text-[10px] animate-spin' />
                      <span>In Clearing</span>
                    </span>
                  )}
                  {txn.status === 'Pending' && (
                    <span className='inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold'>
                      <FaShieldAlt className='text-[10px]' />
                      <span>Pending Checker</span>
                    </span>
                  )}
                </td>
                <td className='py-3 px-4 text-right'>
                  {txn.needsApproval ? (
                    <button
                      onClick={() => setApprovalModal(txn)}
                      className='px-2.5 py-1 rounded text-[11px] font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
                    >
                      Authorize
                    </button>
                  ) : (
                    <span className='text-neutral-400 text-[11px] font-mono'>
                      Verified
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className='py-8 text-center text-neutral-500 dark:text-neutral-400 text-xs'
                >
                  No transactions match the selected filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Maker-Checker Approval Modal Simulation */}
      {approvalModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'>
          <div className='w-full max-w-md p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xl text-left'>
            <div className='flex items-center justify-between pb-3 mb-4 border-b border-warm-200 dark:border-charcoal-800'>
              <div className='flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm'>
                <FaShieldAlt />
                <span>Maker-Checker Authorization</span>
              </div>
              <button
                onClick={() => setApprovalModal(null)}
                className='text-neutral-400 hover:text-neutral-700 dark:hover:text-white'
              >
                <FaTimes />
              </button>
            </div>

            <p className='text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4'>
              Dual-approval authorization required for high-value disbursement. Confirming this action simulates role-based execution.
            </p>

            <div className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 text-xs space-y-1.5 mb-5 font-mono'>
              <div className='flex justify-between'>
                <span className='text-neutral-500 font-sans'>Transaction:</span>
                <span className='font-bold text-neutral-900 dark:text-white'>
                  {approvalModal.id}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-neutral-500 font-sans'>Beneficiary:</span>
                <span className='text-neutral-800 dark:text-neutral-200'>
                  {approvalModal.merchant}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-neutral-500 font-sans'>Amount:</span>
                <span className='font-bold text-blue-600 dark:text-blue-400'>
                  {approvalModal.amount}
                </span>
              </div>
            </div>

            {approvalSuccess ? (
              <div className='p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2'>
                <FaCheckCircle />
                <span>Disbursement Approved & Settled</span>
              </div>
            ) : (
              <div className='flex items-center justify-end gap-2'>
                <button
                  onClick={() => setApprovalModal(null)}
                  className='px-3.5 py-2 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:bg-warm-100 dark:hover:bg-charcoal-800'
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleApprove(approvalModal.id)}
                  className='px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
                >
                  Confirm & Authorize
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDashboardDemo;
