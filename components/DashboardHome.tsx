
import React from 'react';
import { 
  QrCode, 
  ArrowUpRight, 
  AlertCircle, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Zap,
  CreditCard,
  Newspaper,
  HelpCircle,
  Sparkles,
  Car,
  HeartPulse,
  Wallet,
  CalendarDays,
  Bus,
  Plus
} from 'lucide-react';
import { ViewType } from '../App';

interface DashboardHomeProps {
  onNavigate: (view: ViewType) => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ onNavigate }) => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('2025', '2026').replace('2024', '2026');
  const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Welcome back, <span className="text-blue-500">Seun!</span></h1>
          <p className="text-slate-500 font-medium">Here's what's happening with your Lagos life today.</p>
        </div>
        <div className="text-sm text-slate-500 font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/10">
          Last login: {formattedDate} • {formattedTime}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Interactive Wallet Card (Lagosian Pay) */}
        <div className="lg:col-span-1">
          <div className="relative group perspective">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl h-[420px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Lagosian Smart Wallet</div>
                  <div className="text-sm font-bold text-white/80">SEUN BABALOLA</div>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <Wallet className="text-white/40" size={24} />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Available Balance</div>
                 <div className="text-5xl font-black text-white tracking-tighter">₦25,000.00</div>
                 <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase">
                    <CheckCircle2 size={10} /> Account Healthy
                 </div>
              </div>

              <div className="space-y-3 relative z-10">
                <button 
                  onClick={() => onNavigate('wallet')}
                  className="w-full py-4 bg-white text-indigo-950 font-black text-xs rounded-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={16} /> Fund My Wallet
                </button>
                <div className="flex justify-between items-center px-1 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                   <span>Auto-Topup: Enabled</span>
                   <button onClick={() => onNavigate('wallet')} className="text-blue-500">Settings</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Pending */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">Daily Mobility & Pay</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'BRT Tap to Pay', icon: <Bus className="text-emerald-400" />, view: 'brt-pay' as const, hot: true },
                { name: 'New Registration', icon: <FileText className="text-blue-400" />, view: 'registration-hub' as const },
                { name: 'Unified Tax', icon: <CreditCard className="text-indigo-400" />, view: 'make-payment' as const },
                { name: 'Ikeja Feed', icon: <Newspaper className="text-amber-400" />, view: 'news' as const },
              ].map((action, i) => (
                <button 
                  key={i} 
                  onClick={() => onNavigate(action.view)}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col items-center gap-4 text-center relative overflow-hidden"
                >
                  {action.hot && (
                    <div className="absolute top-0 right-0 p-2">
                       <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg group-hover:rotate-3">
                    {action.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-300">{action.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">Lagos Live Alerts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 flex gap-5 group cursor-pointer hover:bg-emerald-500/10 transition-all" onClick={() => onNavigate('brt-pay')}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <Bus size={24} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-bold text-white">BRT Transit Active</h4>
                    <p className="text-xs text-slate-400 mt-1">Bus ready at Ikeja terminal for TBS route.</p>
                    <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mt-2 flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                       5 mins away
                    </div>
                  </div>
                  <button 
                    onClick={() => onNavigate('brt-pay')}
                    className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition-all"
                  >
                    Open NFC Tap
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20 flex gap-5 group cursor-pointer hover:bg-blue-500/10 transition-all" onClick={() => onNavigate('dashboard-news')}>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Zap size={24} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-bold text-white">Bridge Work Update</h4>
                    <p className="text-xs text-slate-400 mt-1">Maintenance on 3rd Mainland concludes early.</p>
                  </div>
                  <button 
                    onClick={() => onNavigate('dashboard-news')}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl transition-all"
                  >
                    Read Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Recent Activity */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">My Lagosian Activity</h3>
            <button 
              onClick={() => onNavigate('transaction-history')}
              className="text-xs font-bold text-blue-400 hover:underline"
            >
              All Activity
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'BRT: Ikeja - TBS', status: 'Debited', info: 'Today, 08:30 AM', icon: <Bus className="text-emerald-500" />, amt: '- ₦500' },
              { name: 'Tax Compliance (LIRS)', status: 'Active', info: 'Jan 10, 2026', icon: <FileText className="text-blue-500" />, amt: '' },
              { name: 'LAWMA Q2 2026', status: 'Payment Due', info: 'Action Required', icon: <AlertCircle className="text-amber-500" />, amt: '₦5,000' },
            ].map((reg, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                    {reg.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-200">{reg.name}</div>
                    <div className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">{reg.info}</div>
                  </div>
                </div>
                <div className="text-right">
                   <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase mb-1 ${reg.status === 'Debited' ? 'text-rose-400' : 'text-blue-400'}`}>{reg.status}</div>
                   <div className="font-black text-white text-sm">{reg.amt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions Table Component (Previously Added) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Wallet Log</h3>
            <button 
              onClick={() => onNavigate('wallet')}
              className="text-xs font-bold text-blue-400 hover:underline"
            >
              Full Log
            </button>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-6 py-4 font-black text-slate-500 uppercase text-[10px] tracking-widest">Date</th>
                  <th className="px-6 py-4 font-black text-slate-500 uppercase text-[10px] tracking-widest">Action</th>
                  <th className="px-6 py-4 font-black text-slate-500 uppercase text-[10px] tracking-widest">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { date: 'Jun 15', desc: 'Auto Top-up (Visa)', amt: '+₦5,000' },
                  { date: 'Jun 14', desc: 'BRT Trip: Ikeja', amt: '-₦350' },
                  { date: 'Jun 12', desc: 'Wallet Funding', amt: '+₦20,000' },
                ].map((tx, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer" onClick={() => onNavigate('wallet')}>
                    <td className="px-6 py-4 text-slate-400 font-bold">{tx.date}</td>
                    <td className="px-6 py-4 text-slate-300">{tx.desc}</td>
                    <td className={`px-6 py-4 font-black ${tx.amt.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>{tx.amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
