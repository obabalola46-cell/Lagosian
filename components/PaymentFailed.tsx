
import React from 'react';
import { 
  XCircle, 
  RefreshCw, 
  CreditCard, 
  HelpCircle, 
  AlertTriangle,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { ViewType } from '../App';

interface PaymentFailedProps {
  onNavigate: (view: ViewType) => void;
}

const PaymentFailed: React.FC<PaymentFailedProps> = ({ onNavigate }) => {
  const reasons = [
    'Insufficient funds',
    'Card declined',
    'Network error'
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 animate-in zoom-in-95 duration-700">
      <div className="max-w-2xl w-full text-center space-y-10">
        
        {/* Error Icon & Header */}
        <div className="space-y-6">
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 bg-rose-500/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="relative w-full h-full bg-rose-500/10 rounded-full flex items-center justify-center border border-rose-500/20 shadow-2xl shadow-rose-500/20">
              <XCircle className="text-rose-500" size={48} />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase">Payment Failed</h1>
            <p className="text-rose-400/80 text-lg font-medium max-w-md mx-auto">
              Your payment could not be processed. Your card was not charged.
            </p>
          </div>
        </div>

        {/* Reasons Card */}
        <div className="glass p-8 lg:p-10 rounded-[3.5rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="space-y-6 relative z-10 text-left">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                 <AlertTriangle size={14} className="text-rose-500" /> Possible Reasons
               </h3>
               <div className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest">Error 402</div>
            </div>

            <ul className="grid gap-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-center gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-rose-500/40 group-hover/item:bg-rose-500 transition-colors shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
                  <span className="text-slate-300 font-bold group-hover/item:text-white transition-colors">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-3 gap-4 w-full max-w-xl mx-auto">
          <button 
            onClick={() => onNavigate('payment-form')}
            className="sm:col-span-1 py-4 bg-rose-600 text-white font-black text-xs rounded-2xl shadow-xl shadow-rose-500/20 hover:bg-rose-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <RefreshCw size={16} /> Try Again
          </button>
          <button 
            onClick={() => onNavigate('make-payment')}
            className="sm:col-span-1 py-4 bg-white/5 border border-white/10 text-white font-black text-xs rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <CreditCard size={16} /> Other Method
          </button>
          <button 
            onClick={() => onNavigate('help')}
            className="sm:col-span-1 py-4 bg-white/5 border border-white/10 text-white font-black text-xs rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <HelpCircle size={16} /> Support
          </button>
        </div>

        {/* Return Link */}
        <div className="pt-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentFailed;
