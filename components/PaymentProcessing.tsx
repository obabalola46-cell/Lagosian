
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Trash2 } from 'lucide-react';
import { ViewType } from '../App';

interface PaymentProcessingProps {
  onNavigate: (view: ViewType) => void;
}

const PaymentProcessing: React.FC<PaymentProcessingProps> = ({ onNavigate }) => {
  const [status, setStatus] = useState('Connecting to secure gateway...');
  const [progress, setProgress] = useState(0);

  const statuses = [
    'Connecting to secure gateway...',
    'Encrypting payment data...',
    'Verifying account credentials...',
    'Authorizing transaction...',
    'Finalizing settlement...'
  ];

  useEffect(() => {
    let currentStatusIdx = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2; // Accelerated for demo
        
        // Update status text every 20%
        if (next % 20 === 0 && currentStatusIdx < statuses.length - 1) {
          currentStatusIdx++;
          setStatus(statuses[currentStatusIdx]);
        }
        
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onNavigate('payment-success'), 500);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onNavigate]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 animate-in fade-in duration-500">
      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Loading Animation Area */}
        <div className="relative mx-auto w-48 h-48">
          {/* Pulsing Background Orbs */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-150 animate-pulse"></div>
          <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full scale-110 animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Futuristic Circular Spinner */}
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
            <circle
              className="text-white/5"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              cx="50"
              cy="50"
              r="44"
            />
            <circle
              className="text-blue-500 transition-all duration-300 ease-out"
              strokeWidth="4"
              strokeDasharray={276}
              strokeDashoffset={276 - (276 * progress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              cx="50"
              cy="50"
              r="44"
            />
            <circle
              className="text-emerald-400 opacity-20 animate-pulse"
              strokeWidth="1"
              stroke="currentColor"
              fill="transparent"
              cx="50"
              cy="50"
              r="38"
            />
          </svg>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-slate-900 rounded-[2rem] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
                <Lock className="text-blue-400 animate-bounce" size={32} />
            </div>
          </div>

          {/* Orbiting Dots */}
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
             <h1 className="text-4xl font-black tracking-tight text-white">Processing <span className="text-blue-500">Payment</span></h1>
             <p className="text-slate-400 text-lg font-medium">Please wait while we process your payment. <span className="text-rose-400">Do not close this window.</span></p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest animate-pulse">
            <ShieldCheck size={14} /> {status}
          </div>
        </div>

        {/* Transaction Context */}
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          <div className="p-6 rounded-[2rem] bg-slate-900 border border-white/5 text-left space-y-1">
             <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Trash2 size={12} className="text-amber-500" /> Service
             </div>
             <div className="text-sm font-bold text-white">LAWMA Q1 2024</div>
          </div>
          <div className="p-6 rounded-[2rem] bg-slate-900 border border-white/5 text-left space-y-1">
             <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Amount</div>
             <div className="text-sm font-black text-emerald-400 tracking-tight">₦5,000.00</div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PaymentProcessing;
