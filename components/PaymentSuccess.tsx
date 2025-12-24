
import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  Share2, 
  LayoutDashboard, 
  CreditCard, 
  Calendar, 
  Hash, 
  Trash2,
  FileText
} from 'lucide-react';
import { ViewType } from '../App';

interface PaymentSuccessProps {
  onNavigate: (view: ViewType) => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onNavigate }) => {
  const transactionDetails = [
    { field: 'Amount Paid', value: '₦5,000.00', icon: <span className="text-emerald-500 font-bold">₦</span> },
    { field: 'Service', value: 'LAWMA Q1 2024', icon: <Trash2 size={14} className="text-amber-500" /> },
    { field: 'Transaction ID', value: 'TXN-2024-882931', icon: <Hash size={14} className="text-blue-500" /> },
    { field: 'Date', value: 'January 10, 2024', icon: <Calendar size={14} className="text-indigo-500" /> },
    { field: 'Payment Method', value: 'Saved Card (**** 4242)', icon: <CreditCard size={14} className="text-slate-500" /> },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 animate-in zoom-in-95 duration-700">
      <div className="max-w-2xl w-full text-center space-y-10">
        
        {/* Success Icon & Header */}
        <div className="space-y-6">
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="relative w-full h-full bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-2xl shadow-emerald-500/20">
              <CheckCircle2 className="text-emerald-500" size={48} />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">Payment Successful!</h1>
            <p className="text-slate-400 text-lg font-medium">Your transaction has been processed and verified.</p>
          </div>
        </div>

        {/* Details Card */}
        <div className="glass p-8 lg:p-10 rounded-[3.5rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Transaction Details</h3>
               <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">Verified</div>
            </div>

            <div className="grid gap-4">
              {transactionDetails.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group/row">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-slate-500 text-sm font-bold">{item.field}</span>
                   </div>
                   <span className={`text-sm font-black transition-colors ${idx === 0 ? 'text-emerald-400 text-lg' : 'text-white'}`}>
                    {item.value}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-3 gap-4 w-full max-w-xl mx-auto">
          <button 
            onClick={() => onNavigate('receipt')}
            className="sm:col-span-1 py-4 bg-blue-600 text-white font-black text-xs rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Download size={16} /> Receipt
          </button>
          <button className="sm:col-span-1 py-4 bg-white/5 border border-white/10 text-white font-black text-xs rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Share2 size={16} /> Share
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="sm:col-span-1 py-4 bg-white/5 border border-white/10 text-white font-black text-xs rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <LayoutDashboard size={16} /> Dashboard
          </button>
        </div>

        {/* Support Link */}
        <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
          Need help? <button onClick={() => onNavigate('help')} className="text-blue-500 hover:underline">Contact support</button>
        </p>

      </div>
    </div>
  );
};

export default PaymentSuccess;
