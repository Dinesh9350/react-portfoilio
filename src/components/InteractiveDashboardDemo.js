import React, { useState, useMemo } from 'react';
import {
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaTimes,
  FaTerminal,
  FaList,
} from 'react-icons/fa';

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
  const [inspectorMode, setInspectorMode] = useState('table'); // 'table' | 'state'
  const [mobileShowAll, setMobileShowAll] = useState(false);

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
            <div className='w-2.5 h-2.5 rounded-full bg-[#ff5f56]'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-[#ffbd2e]'></div>
            <div className='w-2.5 h-2.5 rounded-full bg-[#27c93f]'></div>
          </div>
          <span className='font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400 ml-1'>
            SecurePay Merchant Portal v2.4
          </span>
        </div>

        {/* Detailing Switcher: Ledger View vs Redux State Stream */}
        <div className='flex items-center gap-1 p-0.5 rounded-lg bg-warm-200/80 dark:bg-charcoal-850 border border-warm-300 dark:border-charcoal-700 text-xs font-semibold'>
          <button
            onClick={() => setInspectorMode('table')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition ${
              inspectorMode === 'table'
                ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-xs font-bold'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FaList className='text-[10px]' />
            <span>Ledger</span>
          </button>
          <button
            onClick={() => setInspectorMode('state')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition ${
              inspectorMode === 'state'
                ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-xs font-bold'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FaTerminal className='text-[10px] text-purple-400' />
            <span>Redux & Webhooks</span>
          </button>
        </div>
      </div>

      {inspectorMode === 'table' ? (
        <>
          {/* Control Bar: Portal Toggles & Search */}
          <div className='p-3.5 sm:p-5 border-b border-warm-200 dark:border-charcoal-800 flex flex-wrap items-center justify-between gap-3 bg-warm-50/50 dark:bg-charcoal-900/50'>
            {/* Portal Switcher Tabs */}
            <div className='flex items-center p-1 rounded-xl bg-warm-100 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-750 text-xs font-semibold overflow-x-auto max-w-full'>
              <button
                onClick={() => setActivePortal('ALL')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
                  activePortal === 'ALL'
                    ? 'bg-white dark:bg-charcoal-700 text-neutral-900 dark:text-white shadow-sm font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                All Rails ({transactions.length})
              </button>
              <button
                onClick={() => setActivePortal('PayIn')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
                  activePortal === 'PayIn'
                    ? 'bg-white dark:bg-charcoal-700 text-emerald-600 dark:text-emerald-400 shadow-sm font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                PayIn <span className='hidden sm:inline'>(Receivables)</span>
              </button>
              <button
                onClick={() => setActivePortal('PayOut')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
                  activePortal === 'PayOut'
                    ? 'bg-white dark:bg-charcoal-700 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                PayOut <span className='hidden sm:inline'>(Disbursements)</span>
              </button>
            </div>

            {/* Live Search and Filter */}
            <div className='flex items-center gap-2 flex-1 sm:flex-initial w-full sm:w-auto max-w-sm'>
              <div className='relative w-full'>
                <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs' />
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Filter ID, merchant...'
                  className='w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500'
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className='px-2.5 py-1.5 rounded-lg text-xs bg-white dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-700 text-neutral-800 dark:text-neutral-200 focus:outline-none'
              >
                <option value='ALL'>All Status</option>
                <option value='Completed'>Completed</option>
                <option value='Processing'>Processing</option>
                <option value='Pending'>Pending (Checker)</option>
              </select>
            </div>
          </div>

          {/* Desktop Table View (>= md) */}
          <div className='hidden md:block overflow-x-auto'>
            <table className='w-full min-w-[580px] text-left text-xs'>
              <thead className='bg-warm-100/60 dark:bg-charcoal-950/80 text-neutral-500 dark:text-neutral-400 uppercase font-mono text-[10px] tracking-wider border-b border-warm-200 dark:border-charcoal-800'>
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
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          txn.portal === 'PayIn'
                            ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            : 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
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
                        <span className='inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'>
                          <FaCheckCircle className='text-[10px]' />
                          <span>Settled</span>
                        </span>
                      )}
                      {txn.status === 'Processing' && (
                        <span className='inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'>
                          <FaClock className='text-[10px] animate-spin' />
                          <span>In Clearing</span>
                        </span>
                      )}
                      {txn.status === 'Pending' && (
                        <span className='inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'>
                          <FaShieldAlt className='text-[10px]' />
                          <span>Pending Checker</span>
                        </span>
                      )}
                    </td>
                    <td className='py-3 px-4 text-right'>
                      {txn.needsApproval ? (
                        <button
                          onClick={() => setApprovalModal(txn)}
                          className='px-3 py-1 rounded-lg text-[11px] font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition'
                        >
                          Authorize
                        </button>
                      ) : (
                        <span className='text-emerald-600 dark:text-emerald-400 text-[11px] font-mono'>
                          Reconciled ✓
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Adaptive Cards View (< md) - Clean & Compact */}
          <div className='md:hidden divide-y divide-warm-200 dark:divide-charcoal-800'>
            {(mobileShowAll ? filteredData : filteredData.slice(0, 3)).map((txn) => (
              <div
                key={txn.id}
                className='p-3.5 space-y-2 bg-white dark:bg-charcoal-900 hover:bg-warm-50 dark:hover:bg-charcoal-850/50 transition'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <span className='font-mono font-bold text-xs text-neutral-900 dark:text-white'>
                      {txn.id}
                    </span>
                    <span className='text-[10px] text-neutral-400 font-mono'>
                      {txn.date}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      txn.portal === 'PayIn'
                        ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                    }`}
                  >
                    {txn.portal} · {txn.rail}
                  </span>
                </div>

                <div className='flex items-center justify-between text-xs'>
                  <div>
                    <span className='font-semibold text-neutral-800 dark:text-neutral-200 block'>
                      {txn.merchant}
                    </span>
                  </div>
                  <span className='font-mono font-extrabold text-sm text-neutral-900 dark:text-white'>
                    {txn.amount}
                  </span>
                </div>

                <div className='flex items-center justify-between pt-1.5 border-t border-warm-100 dark:border-charcoal-800/60'>
                  <div>
                    {txn.status === 'Completed' && (
                      <span className='inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'>
                        <FaCheckCircle className='text-[9px]' />
                        <span>Settled</span>
                      </span>
                    )}
                    {txn.status === 'Processing' && (
                      <span className='inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'>
                        <FaClock className='text-[9px] animate-spin' />
                        <span>In Clearing</span>
                      </span>
                    )}
                    {txn.status === 'Pending' && (
                      <span className='inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'>
                        <FaShieldAlt className='text-[9px]' />
                        <span>Pending Checker</span>
                      </span>
                    )}
                  </div>

                  {txn.needsApproval ? (
                    <button
                      onClick={() => setApprovalModal(txn)}
                      className='px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition'
                    >
                      Authorize
                    </button>
                  ) : (
                    <span className='text-emerald-600 dark:text-emerald-400 text-[11px] font-mono'>
                      Reconciled ✓
                    </span>
                  )}
                </div>
              </div>
            ))}

            {filteredData.length > 3 && (
              <div className='p-2.5 text-center bg-warm-50 dark:bg-charcoal-900/90 border-t border-warm-200 dark:border-charcoal-800'>
                <button
                  onClick={() => setMobileShowAll(!mobileShowAll)}
                  className='text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5'
                >
                  <span>{mobileShowAll ? 'Collapse to top 3 transactions' : `View all ${filteredData.length} transactions`}</span>
                  <span>{mobileShowAll ? '↑' : '↓'}</span>
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        /* Internal Working Detailing: Redux State & WebSocket Event Stream */
        <div className='p-4 sm:p-6 bg-charcoal-950 text-neutral-300 font-mono text-xs space-y-4'>
          <div className='flex items-center justify-between pb-3 border-b border-charcoal-800'>
            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
              <span className='text-xs font-bold text-white uppercase font-mono'>
                Live Redux State & WebSocket Event Bus
              </span>
            </div>
            <span className='text-[10px] text-neutral-400 font-mono'>
              Socket: wss://gateway.securepay.in/events
            </span>
          </div>

          <div className='space-y-2 text-[11px] sm:text-xs leading-relaxed'>
            <div className='p-3 rounded-xl bg-charcoal-900 border border-charcoal-800 space-y-1.5'>
              <div className='flex items-center justify-between text-neutral-500 text-[10px]'>
                <span className='text-emerald-400 font-bold'>EVENT: SETTLEMENT_RECONCILED</span>
                <span>Latency: 48ms</span>
              </div>
              <pre className='text-neutral-300 overflow-x-auto'>
{`{
  "action": "settlementSlice/reconcileBatch",
  "batchId": "BATCH-2026-0498",
  "totalVolume": 4820500,
  "currency": "INR",
  "cachePolicy": "SWR_REVALIDATE_TAG_MERCHANT_PORTAL"
}`}
              </pre>
            </div>

            <div className='p-3 rounded-xl bg-charcoal-900 border border-charcoal-800 space-y-1.5'>
              <div className='flex items-center justify-between text-neutral-500 text-[10px]'>
                <span className='text-blue-400 font-bold'>EVENT: RBAC_POLICY_ENFORCED</span>
                <span>Rule: Dual_Sign_Off</span>
              </div>
              <pre className='text-neutral-300 overflow-x-auto'>
{`{
  "role": "CHECKER",
  "authorizedScope": ["PO_APPROVE", "BANKING_DISPATCH"],
  "dualFactorConfirmed": true,
  "hardwareTokenVerified": "OK"
}`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info Strip */}
      <div className='px-4 sm:px-6 py-3 border-t border-warm-200 dark:border-charcoal-800 bg-warm-50 dark:bg-charcoal-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-neutral-500 dark:text-neutral-400'>
        <div className='flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
          <span>Showing {filteredData.length} live records</span>
        </div>
        <div className='font-mono text-[10px] text-neutral-400'>
          Simulated Settlement Pipeline · Maker-Checker Active
        </div>
      </div>

      {/* Interactive Maker-Checker Approval Modal */}
      {approvalModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs'>
          <div className='w-full max-w-md p-5 sm:p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-warm-200 dark:border-charcoal-800 shadow-2xl text-left'>
            <div className='flex items-center justify-between pb-3 mb-4 border-b border-warm-200 dark:border-charcoal-800'>
              <div className='flex items-center gap-2'>
                <FaShieldAlt className='text-blue-600 dark:text-blue-400 text-sm' />
                <h4 className='font-bold text-sm text-neutral-900 dark:text-white'>
                  Checker Approval Required
                </h4>
              </div>
              <button
                onClick={() => setApprovalModal(null)}
                className='text-neutral-400 hover:text-neutral-700 dark:hover:text-white'
              >
                <FaTimes />
              </button>
            </div>

            <p className='text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed'>
              This PayOut batch requires dual-authorization under SecurePay's Maker-Checker operational policy.
            </p>

            <div className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 text-xs space-y-2 mb-4'>
              <div className='flex justify-between'>
                <span className='text-neutral-500'>Transaction ID:</span>
                <span className='font-mono font-bold text-neutral-900 dark:text-white'>
                  {approvalModal.id}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-neutral-500'>Beneficiary:</span>
                <span className='font-semibold text-neutral-900 dark:text-white'>
                  {approvalModal.merchant}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-neutral-500'>Amount:</span>
                <span className='font-mono font-bold text-emerald-600 dark:text-emerald-400'>
                  {approvalModal.amount}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-neutral-500'>Disbursement Rail:</span>
                <span className='font-mono font-medium text-neutral-700 dark:text-neutral-300'>
                  {approvalModal.rail}
                </span>
              </div>
            </div>

            {approvalSuccess ? (
              <div className='p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs flex items-center justify-center gap-2 font-semibold'>
                <FaCheckCircle />
                <span>Batch Authorized & Dispatched!</span>
              </div>
            ) : (
              <div className='flex items-center gap-2 pt-2'>
                <button
                  onClick={() => handleApprove(approvalModal.id)}
                  className='flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition'
                >
                  Confirm Checker Authorization
                </button>
                <button
                  onClick={() => setApprovalModal(null)}
                  className='py-2.5 px-4 rounded-xl text-xs font-semibold border border-warm-300 dark:border-charcoal-700 text-neutral-700 dark:text-neutral-300 hover:bg-warm-100 dark:hover:bg-charcoal-800 transition'
                >
                  Cancel
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