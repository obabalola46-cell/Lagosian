
import React, { useState, useEffect } from 'react';
import { 
  Bus, 
  ArrowLeft, 
  ShieldCheck, 
  MapPin, 
  History, 
  ChevronRight, 
  Info, 
  CheckCircle2, 
  Fingerprint,
  RotateCw,
  Wallet,
  Landmark,
  Wifi,
  Navigation
} from 'lucide-react';
import { ViewType } from '../App';

interface BRTPayPageProps {
  onNavigate: (view: ViewType) => void;
}

const BRTPayPage: React.FC<BRTPayPageProps> = ({ onNavigate }) => {
  const [isTapping, setIsTapping] = useState(false);
  const [tapStatus, setTapStatus] = useState<'idle' | 'success'>('idle');
  const [balance, setBalance] = useState(25000);

  const handleTap = () => {
    if (isTapping || tapStatus === 'success') return;
    
    setIsTapping(true);
    // Simulate NFC interaction
    setTimeout(() => {
      setIsTapping(false);
      setTapStatus('success');
      setBalance(prev => prev - 450);
      
      // Auto reset after 3 seconds
      setTimeout(() => {
        setTapStatus('idle');
      }, 5000);
    }, 2000);
  };

  const trips = [
    { from: 'Ikeja Terminal', to: 'TBS Bus Stop', date: 'Today, 08:32 AM', fare: '₦450.00' },
    { from: 'Maryland', to: 'Oshodi Interchange', date: 'Yesterday, 17:15 PM', fare: '₦350.00' },
    { from: 'Yaba', to: 'Victoria Island', date: 'Yesterday, 07:10 AM', fare: '₦600.00' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
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
               <Bus className="text-emerald-500" size={32} /> Lagos <span className="text-emerald-500">Move</span>
            </h1>
            <p className="text-slate-500 font-medium">Your virtual transit card for BRT and Lagos Rail.</p>
          </div>
        </div>
        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
             <Wifi size={18} />
           </div>
           <div className="text-right">
              <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">NFC System</div>
              <div className="text-xs font-bold text-emerald-400">READY TO TAP</div>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center py-10">
        {/* The Card & Tap Zone */}
        <div className="flex flex-col items-center gap-12">
           <div className="relative group w-full max-w-[340px]">
              <div className={`absolute -inset-1 rounded-[2.5rem] blur opacity-40 transition-all duration-1000 ${tapStatus === 'success' ? 'bg-emerald-500 opacity-80 scale-105' : 'bg-emerald-600/20 group-hover:opacity-60'}`}></div>
              
              {/* Virtual Transit Card */}
              <div className="relative bg-gradient-to-br from-emerald-900 to-slate-900 aspect-[1.6/1] w-full rounded-[2.5rem] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Bus size={120} />
                 </div>
                 
                 <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                          <Landmark className="text-emerald-700" size={24} />
                       </div>
                       <span className="text-sm font-black tracking-widest uppercase text-white">Lagos Move</span>
                    </div>
                    <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
                       <Wifi className="text-white/40" size={20} />
                    </div>
                 </div>

                 <div className="space-y-1 relative z-10">
                    <div className="text-[9px] font-black uppercase text-emerald-300/40 tracking-[0.2em]">Current Balance</div>
                    <div className="text-3xl font-black text-white tracking-tighter">₦{balance.toLocaleString()}.00</div>
                 </div>

                 <div className="flex justify-between items-end relative z-10">
                    <div className="space-y-0.5">
                       <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Card Member</div>
                       <div className="text-xs font-bold text-slate-200">SEUN BABALOLA</div>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-tighter">
                       Active
                    </div>
                 </div>
              </div>
           </div>

           {/* The Tap Zone */}
           <div className="w-full max-w-[280px] flex flex-col items-center gap-6">
              <button 
                onClick={handleTap}
                disabled={isTapping || tapStatus === 'success'}
                className={`relative w-48 h-48 rounded-full border-4 flex flex-col items-center justify-center gap-3 transition-all duration-700 ${isTapping ? 'border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.5)] scale-95' : tapStatus === 'success' ? 'border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.5)] scale-100 bg-emerald-500/10' : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/[0.08] active:scale-95 group'}`}
              >
                 {isTapping ? (
                    <div className="space-y-2 flex flex-col items-center">
                       <RotateCw className="text-blue-500 animate-spin" size={48} />
                       <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Validating...</span>
                    </div>
                 ) : tapStatus === 'success' ? (
                    <div className="space-y-2 flex flex-col items-center animate-in zoom-in duration-500">
                       <CheckCircle2 className="text-emerald-500" size={56} />
                       <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">ACCESS GRANTED</span>
                       <span className="text-[12px] font-black text-white">- ₦450.00</span>
                    </div>
                 ) : (
                    <>
                       <div className="absolute inset-0 border-4 border-white/10 rounded-full animate-ping opacity-20"></div>
                       <Fingerprint className="text-slate-700 group-hover:text-white transition-colors" size={56} />
                       <span className="text-[10px] font-black text-slate-500 group-hover:text-white uppercase tracking-[0.3em]">TAP HERE</span>
                    </>
                 )}
              </button>
              <p className="text-center text-xs text-slate-600 font-bold uppercase tracking-widest leading-relaxed">
                 Tap your device near the terminal reader to pay for your ride.
              </p>
           </div>
        </div>

        {/* Info & History */}
        <div className="space-y-10">
           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                 <Navigation size={16} className="text-emerald-500" /> Recent Trip History
              </h3>
              <div className="space-y-3">
                 {trips.map((trip, i) => (
                    <div key={i} className="p-6 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all flex items-center justify-between group">
                       <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-emerald-500">
                             <Bus size={20} />
                          </div>
                          <div>
                             <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{trip.from} <span className="text-slate-600 px-1">→</span> {trip.to}</div>
                             <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{trip.date}</div>
                          </div>
                       </div>
                       <div className="text-sm font-black text-white">{trip.fare}</div>
                    </div>
                 ))}
                 <button className="w-full py-4 text-xs font-black text-slate-600 uppercase tracking-widest hover:text-white transition-colors">View detailed mobility log</button>
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Transit Configuration</h3>
              <div className="grid gap-4">
                 <button className="w-full flex items-center justify-between p-6 rounded-[2rem] bg-blue-600/5 border border-blue-500/10 hover:bg-blue-600/10 transition-all group text-left">
                    <div className="flex items-center gap-5">
                       <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                          <Wallet size={18} />
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-sm">Wallet Link</h4>
                          <p className="text-[9px] text-slate-500 uppercase tracking-tighter">Funds auto-drawn from main wallet</p>
                       </div>
                    </div>
                    <ChevronRight size={18} className="text-slate-700" />
                 </button>

                 <div className="p-6 rounded-[2rem] bg-amber-500/5 border border-amber-500/10 flex gap-4">
                    <Info className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <div className="space-y-2">
                       <h5 className="text-xs font-bold text-white uppercase tracking-widest">Travel Alert</h5>
                       <p className="text-[10px] text-slate-500 leading-relaxed font-medium uppercase tracking-tighter">
                          Multiple transit points at Maryland are undergoing NFC hardware upgrades. You may experience slight delays during peak hours.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center justify-center gap-8 opacity-40">
              <div className="flex items-center gap-2">
                 <ShieldCheck size={14} className="text-slate-500" />
                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500">LAMATA CERTIFIED</span>
              </div>
              <div className="flex items-center gap-2">
                 <CheckCircle2 size={14} className="text-slate-500" />
                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500">BANK-GRADE ENCRYPTION</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BRTPayPage;
