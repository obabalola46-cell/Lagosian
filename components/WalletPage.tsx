
import React, { useState } from 'react';
import { 
  Wallet, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  History, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowLeft, 
  Search,
  Filter,
  CreditCard,
  Building,
  Smartphone,
  ChevronRight,
  Zap,
  Info
} from 'lucide-react';
import { ViewType } from '../App';

interface WalletPageProps {
  onNavigate: (view: ViewType) => void;
}

const WalletPage: React.FC<WalletPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'fund' | 'history'>('overview');
  const [fundAmount, setFundAmount] = useState('5000');

  const history = [
    { id: 1, type: 'credit', title: 'Top-up from Bank', date: 'Today, 10:45 AM', amt: '+₦10,000.00', status: 'Success' },
    { id: 2, type: 'debit', title: 'BRT Ride (Ikeja - CMS)', date: 'Today, 08:32 AM', amt: '-₦450.00', status: 'Success' },
    { id: 3, type: 'debit', title: 'LAWMA Q2 Payment', date: 'Yesterday, 14:15 PM', amt: '-₦5,000.00', status: 'Success' },
    { id: 4, type: 'credit', title: 'Auto-Topup Activated', date: 'Jun 14, 2026', amt: '+₦5,000.00', status: 'Success' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-white flex items-center gap-4">
               <Wallet className="text-blue-500" size={32} /> Smart <span className="text-blue-500">Wallet</span>
            </h1>
            <p className="text-slate-500 font-medium">Fund your account for seamless Lagos services and transit.</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Wallet Overview & Funding */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-8 lg:p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden bg-gradient-to-br from-indigo-900/40 to-blue-900/20">
             <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                <Wallet size={200} />
             </div>
             
             <div className="space-y-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div className="space-y-2">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300/60">Total Balance</div>
                      <div className="text-6xl font-black text-white tracking-tighter">₦25,000<span className="text-blue-500 text-3xl">.00</span></div>
                   </div>
                   <div className="flex gap-3">
                      <button className="px-6 py-3 bg-white text-indigo-950 font-black text-xs rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2">
                        <Plus size={16} /> Fund
                      </button>
                      <button className="px-6 py-3 bg-white/10 border border-white/10 text-white font-black text-xs rounded-xl hover:bg-white/20 transition-all flex items-center gap-2">
                        <ArrowUpRight size={16} /> Send
                      </button>
                   </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/5">
                   {[
                     { label: 'Spend Limit', val: '₦100k' },
                     { label: 'Transit Uses', val: '42' },
                     { label: 'Saved Tax', val: '₦12k' },
                     { label: 'Reward Pts', val: '850' },
                   ].map((stat, i) => (
                     <div key={i} className="space-y-1">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                        <div className="text-sm font-bold text-slate-200">{stat.val}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="glass rounded-[3rem] border border-white/5 overflow-hidden">
             <div className="flex border-b border-white/5">
                {['Overview', 'History', 'Limits'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase() as any)}
                    className={`flex-1 py-5 font-black text-xs uppercase tracking-widest transition-all ${activeTab === tab.toLowerCase() ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
             </div>

             <div className="p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                    <h3 className="font-bold text-white">Select Funding Amount</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                       {['2000', '5000', '10000', '20000'].map(amt => (
                         <button 
                          key={amt}
                          onClick={() => setFundAmount(amt)}
                          className={`py-4 rounded-2xl border font-black text-sm transition-all ${fundAmount === amt ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-900 border-white/5 text-slate-400 hover:border-white/10'}`}
                         >
                           ₦{parseInt(amt).toLocaleString()}
                         </button>
                       ))}
                    </div>
                    
                    <div className="space-y-4">
                       <h3 className="font-bold text-white">Payment Channel</h3>
                       <div className="grid gap-3">
                          {[
                            { id: 'card', label: 'Debit/Credit Card', icon: <CreditCard size={18} /> },
                            { id: 'transfer', label: 'Bank Transfer', icon: <Building size={18} /> },
                            { id: 'ussd', label: 'USSD *555#', icon: <Smartphone size={18} /> }
                          ].map(chan => (
                             <button key={chan.id} className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                                <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-slate-500 group-hover:text-blue-400 transition-colors">
                                      {chan.icon}
                                   </div>
                                   <span className="font-bold text-sm text-slate-300 group-hover:text-white">{chan.label}</span>
                                </div>
                                <ChevronRight size={18} className="text-slate-700" />
                             </button>
                          ))}
                       </div>
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                   <div className="space-y-4 animate-in fade-in duration-500">
                      {history.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all">
                           <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'credit' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                 {tx.type === 'credit' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                              </div>
                              <div>
                                 <div className="font-bold text-white text-sm">{tx.title}</div>
                                 <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{tx.date}</div>
                              </div>
                           </div>
                           <div className="text-right">
                              <div className={`font-black text-sm ${tx.type === 'credit' ? 'text-emerald-400' : 'text-white'}`}>{tx.amt}</div>
                              <div className="text-[9px] font-black text-slate-600 uppercase tracking-tighter flex items-center justify-end gap-1">
                                 <CheckCircle2 size={10} className="text-emerald-500" /> {tx.status}
                              </div>
                           </div>
                        </div>
                      ))}
                      <button className="w-full py-4 text-xs font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">
                        Load Older Transactions
                      </button>
                   </div>
                )}
             </div>
          </div>
        </div>

        {/* Sidebar Features */}
        <div className="space-y-8">
           {/* Transit Quick Tap Promo */}
           <div className="glass p-8 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/[0.02] space-y-6 group cursor-pointer" onClick={() => onNavigate('brt-pay')}>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-lg transition-transform group-hover:scale-110">
                    <Zap size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-white uppercase tracking-tight">Transit Tap</h4>
                    <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Feature Enabled</p>
                 </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                 You can now use your wallet balance directly at any BRT terminal or Lagos Train station. Link your account for 10% cash back on commutes.
              </p>
              <button className="w-full py-3 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-2">
                 Go to Transit Pay <ChevronRight size={14} />
              </button>
           </div>

           {/* Security Features */}
           <div className="glass p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <h3 className="font-black text-white uppercase text-sm tracking-widest">Wallet Settings</h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                       <h5 className="text-xs font-bold text-slate-200">Auto-Topup</h5>
                       <p className="text-[9px] text-slate-500 uppercase">Below ₦2,000</p>
                    </div>
                    <button className="w-10 h-5 bg-blue-600 rounded-full relative shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                       <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                    </button>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                       <h5 className="text-xs font-bold text-slate-200">Payment PIN</h5>
                       <p className="text-[9px] text-slate-500 uppercase">Requirement for fund</p>
                    </div>
                    <button className="w-10 h-5 bg-slate-800 rounded-full relative">
                       <div className="absolute left-1 top-1 w-3 h-3 bg-white/40 rounded-full"></div>
                    </button>
                 </div>
              </div>
              
              <div className="p-4 rounded-2xl bg-blue-600/5 border border-blue-600/10 flex gap-4 mt-6">
                 <ShieldCheck className="text-blue-400 shrink-0" size={18} />
                 <p className="text-[9px] text-slate-500 leading-relaxed font-bold uppercase">
                    Your funds are safe with our NDIC-insured banking partners. Transaction IDs are unique and verifiable.
                 </p>
              </div>
           </div>

           {/* Help Corner */}
           <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 space-y-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400">
                 <Info size={20} />
              </div>
              <h4 className="font-bold text-white text-sm">Transferring Funds?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">You can transfer your wallet balance back to any Nigerian bank instantly. Fees may apply depending on the target bank.</p>
              <button className="text-xs font-black text-blue-500 uppercase tracking-widest hover:underline">Learn about limits</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
