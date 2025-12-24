
import React from 'react';
import { 
  Gavel, 
  Trash2, 
  Building2, 
  Car, 
  Landmark, 
  ChevronRight, 
  ArrowLeft, 
  Wallet,
  Zap,
  CreditCard
} from 'lucide-react';
import { ViewType } from '../App';

interface MakePaymentProps {
  onNavigate: (view: ViewType) => void;
}

const MakePayment: React.FC<MakePaymentProps> = ({ onNavigate }) => {
  const paymentTypes = [
    {
      id: 'tax',
      title: 'Tax Payment (LIRS)',
      desc: 'Pay your income tax, withholding tax, and other LIRS payments',
      icon: <Gavel size={32} />,
      color: 'blue',
      glow: 'shadow-blue-500/20',
      view: 'make-payment' as const
    },
    {
      id: 'lawma',
      title: 'Waste Management (LAWMA)',
      desc: 'Pay your waste collection bills and recurring PSP service fees',
      icon: <Trash2 size={32} />,
      color: 'amber',
      glow: 'shadow-amber-500/20',
      view: 'payment-form' as const
    },
    {
      id: 'luc',
      title: 'Land Use Charge',
      desc: 'Pay your annual land use charge and property-based obligations',
      icon: <Building2 size={32} />,
      color: 'emerald',
      glow: 'shadow-emerald-500/20',
      view: 'make-payment' as const
    },
    {
      id: 'vehicle',
      title: 'Vehicle Registration',
      desc: 'Pay vehicle registration, license renewal and permit fees',
      icon: <Car size={32} />,
      color: 'indigo',
      glow: 'shadow-indigo-500/20',
      view: 'make-payment' as const
    },
    {
      id: 'other',
      title: 'Other Government Payments',
      desc: 'Various other Lagos State MDAs and specialized government payments',
      icon: <Landmark size={32} />,
      color: 'slate',
      glow: 'shadow-white/10',
      view: 'make-payment' as const
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="space-y-4">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </button>
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight">Make a <span className="text-blue-500">Payment</span></h1>
          <p className="text-slate-500 font-medium text-lg">Select the type of payment you want to proceed with.</p>
        </div>
      </div>

      {/* Payment Selection Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentTypes.map((type) => (
          <div key={type.id} className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-br from-${type.color}-500/20 to-blue-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
            <div className={`relative glass p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all flex flex-col h-full shadow-2xl ${type.glow}`}>
              
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 bg-${type.color}-500/10 rounded-2xl flex items-center justify-center text-${type.color}-400 shadow-lg border border-${type.color}-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {type.icon}
                </div>
                <div className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap size={14} className={`text-${type.color}-400`} />
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">{type.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
              </div>

              <button 
                onClick={() => {
                  if (type.id === 'lawma') {
                    onNavigate('payment-form');
                  } else {
                    alert(`Payment flow for ${type.title} coming soon!`);
                  }
                }}
                className="w-full mt-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn"
              >
                Select <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        {/* Lagosian Wallet Promo Card */}
        <div className="relative group lg:col-span-1">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25"></div>
          <div className="relative bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between h-full overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <Wallet size={24} />
                </div>
                <h3 className="text-xl font-black text-white">Lagosian Wallet</h3>
                <p className="text-blue-100/60 text-xs leading-relaxed font-medium uppercase tracking-widest">Digital Funding</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Fund your digital wallet for instant, one-tap payments across all state services.
                </p>
             </div>

             <button className="mt-8 py-4 bg-white text-indigo-950 font-black text-xs rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                Fund Wallet <Zap size={14} />
              </button>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="p-8 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/10 flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
           <CreditCard size={32} />
        </div>
        <div className="flex-1 space-y-2 text-center md:text-left">
           <h4 className="font-bold text-white">Secure Transaction Protocol</h4>
           <p className="text-sm text-slate-500 leading-relaxed">
             All payments on the Lagosian platform are processed through bank-grade encrypted gateways. We comply with NDPR standards to ensure your financial data remains private and protected.
           </p>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
