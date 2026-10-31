import React, { useState } from 'react';
import { FaCopy, FaCheck, FaTerminal } from 'react-icons/fa';

export const snippets = [
  {
    id: 'gateway',
    fileName: 'PaymentGatewayRouter.ts',
    lang: 'typescript',
    badge: 'Checkout Rail Orchestrator',
    code: `// SecurePay Client Gateway Orchestrator
import { validateLuhn, initiateUpiIntent } from '@securepay/sdk-crypto';

export interface PaymentPayload {
  orderId: string;
  amount: number;
  currency: 'INR';
  rail: 'UPI' | 'CARD' | 'NETBANKING';
  metadata: {
    merchantId: string;
    webhookUrl: string;
  };
}

export const processPaymentSession = async (
  payload: PaymentPayload
): Promise<{ status: 'SUCCESS' | 'PENDING' | 'FAILED'; txnId: string }> => {
  if (payload.rail === 'CARD') {
    const isCardValid = validateLuhn(payload.metadata.cardNumber);
    if (!isCardValid) throw new Error('ERR_INVALID_CARD_CHECKSUM');
  }

  // Sub-second dispatch via 256-bit TLS handshake
  const response = await fetch('/api/v2/gateway/dispatch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return response.json();
};`,
  },
  {
    id: 'maker-checker',
    fileName: 'useMakerCheckerPipeline.ts',
    lang: 'typescript',
    badge: 'Dual-Approval RBAC Hook',
    code: `// Dual-Party Authorization State Machine
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { authorizeBatch, selectAuthRole } from '@/store/slices/payoutSlice';

export const useMakerCheckerPipeline = (batchId: string) => {
  const dispatch = useAppDispatch();
  const currentRole = useAppSelector(selectAuthRole);

  const authorizePayout = async (otpCode: string) => {
    if (currentRole !== 'CHECKER') {
      throw new Error('UNAUTHORIZED_ACTION: Maker cannot approve own batch');
    }
    
    // Dispatches dual-authorization payload to banking network
    return dispatch(
      authorizeBatch({
        batchId,
        authorizedBy: 'compliance-lead@securepay.in',
        otpToken: otpCode,
        timestamp: Date.now(),
      })
    ).unwrap();
  };

  return { authorizePayout, isChecker: currentRole === 'CHECKER' };
};`,
  },
  {
    id: 'signzy',
    fileName: 'SignzyKycPipeline.ts',
    lang: 'typescript',
    badge: 'Automated Compliance Engine',
    code: `// Automated Signzy Verification Pipeline
import axios from 'axios';

const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

export async function verifyMerchantCredentials(pan: string, ifsc: string, acc: string) {
  if (!PAN_REGEX.test(pan)) {
    return { valid: false, reason: 'INVALID_PAN_FORMAT' };
  }

  // Automated penny-drop verification API
  const pennyDropRes = await axios.post('/api/kyc/signzy/penny-drop', {
    accountNumber: acc,
    ifscCode: ifsc,
    merchantPan: pan,
  });

  return {
    verified: pennyDropRes.data.accountStatus === 'ACTIVE_MATCHED',
    registeredEntity: pennyDropRes.data.beneficiaryName,
    cycleTimeSec: 1.2,
  };
}`,
  },
];

const MacCodeSnippetWindow = ({ defaultSnippetId = 'gateway' }) => {
  const [activeId, setActiveId] = useState(defaultSnippetId);
  const [copied, setCopied] = useState(false);

  const currentSnippet = snippets.find((s) => s.id === activeId) || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='w-full rounded-2xl border border-warm-300 dark:border-charcoal-750 bg-charcoal-950 shadow-2xl overflow-hidden text-left'>
      {/* macOS Window Chrome Header */}
      <div className='px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-charcoal-800 bg-charcoal-900/90 flex flex-wrap items-center justify-between gap-2'>
        {/* macOS Traffic Light Buttons */}
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1.5'>
            <span className='w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs' />
            <span className='w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs' />
            <span className='w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs' />
          </div>
          <span className='font-mono text-[11px] sm:text-xs text-neutral-400 ml-1.5 hidden xs:inline'>
            {currentSnippet.fileName}
          </span>
        </div>

        {/* Snippet Switcher Tabs */}
        <div className='flex items-center gap-1 overflow-x-auto max-w-full py-0.5'>
          {snippets.map((snip) => (
            <button
              key={snip.id}
              onClick={() => setActiveId(snip.id)}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium transition whitespace-nowrap ${
                activeId === snip.id
                  ? 'bg-charcoal-750 text-white shadow-xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {snip.fileName.replace('.ts', '')}
            </button>
          ))}

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className='p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-charcoal-800 transition ml-1'
            title='Copy code'
          >
            {copied ? <FaCheck className='text-emerald-400 text-xs' /> : <FaCopy className='text-xs' />}
          </button>
        </div>
      </div>

      {/* Code Editor Body with Line Numbers */}
      <div className='p-3 sm:p-5 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed text-neutral-300'>
        <div className='flex items-center justify-between pb-2 mb-3 border-b border-charcoal-800 text-[10px] text-neutral-500 font-mono'>
          <span className='flex items-center gap-1.5'>
            <FaTerminal className='text-blue-400' />
            <span>{currentSnippet.badge}</span>
          </span>
          <span>TypeScript · Strict Null Checks</span>
        </div>

        <pre className='whitespace-pre font-mono'>
          <code>
            {currentSnippet.code.split('\n').map((line, idx) => (
              <div key={idx} className='table-row'>
                <span className='table-cell pr-3 sm:pr-4 text-right text-neutral-600 select-none text-[10px] sm:text-[11px] w-6'>
                  {idx + 1}
                </span>
                <span className='table-cell'>
                  {line.startsWith('//') ? (
                    <span className='text-neutral-500'>{line}</span>
                  ) : line.includes('import ') ? (
                    <span className='text-purple-400'>{line}</span>
                  ) : line.includes('export interface') || line.includes('export const') || line.includes('export async') ? (
                    <span className='text-blue-400'>{line}</span>
                  ) : line.includes('return ') ? (
                    <span className='text-amber-300'>{line}</span>
                  ) : (
                    <span>{line}</span>
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default MacCodeSnippetWindow;