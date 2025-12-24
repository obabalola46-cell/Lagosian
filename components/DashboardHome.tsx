
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
  CalendarDays
} from 'lucide-react';
import { ViewType } from '../App';

interface DashboardHomeProps {
  onNavigate: (view: ViewType) => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ onNavigate }) => {
  const now = new Date();
  // We'll simulate the "current" year as 2026 for the UI
  const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('2025', '2026').replace('2024', '2026');
  const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  const upcomingFeatures = [
    { title: 'Vehicle Registration', date: 'Q3 2026', icon: <Car className="text-blue-400" />, desc: 'Renew papers and register new vehicles digitally.' },
    { title: 'Health Wallet', date: 'Q4 2026', icon: <HeartPulse className="text-emerald-400" />, desc: 'Unified health records and state health insurance access.' },
    { title: 'Smart Wallet', date: 'Q4 2026', icon: <Wallet className="text-amber-400" />, desc: 'Direct funding and one-tap utility payments.' },
    { title: 'Lagos Events Hub', date: 'Q1 2027', icon: <CalendarDays className="text-indigo-400" />, desc: 'Official state events, festivals, and university/venue bookings.' },
  ];

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
        {/* Lagosian ID Card */}
        <div className="lg:col-span-1">
          <div className="relative group perspective">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 p-8 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl h-[420px] flex flex-col justify-between">
              {/* Card Hologram Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Lagosian Digital ID</div>
                  <div className="text-xl font-black text-white">LAG-2026-88923</div>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <QrCode className="text-white/40" size={28} />
                </div>
              </div>

              <div className="flex items-end gap-6 relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-slate-800 border-2 border-white/10 overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" 
                    className="w-full h-full object-cover" 
                    alt="Profile"
                  />
                </div>
                <div className="pb-2 space-y-1">
                  <h3 className="text-2xl font-black text-white leading-tight">Seun Babalola</h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    <CheckCircle2 size={12} /> Verified Resident
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Expires: 12/2029</div>
                <button 
                  onClick={() => onNavigate('lagosian-id')}
                  className="flex items-center gap-2 text-xs font-black text-blue-400 hover:text-white transition-colors"
                >
                  View Full ID <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Pending */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'New Registration', icon: <FileText className="text-blue-400" />, view: 'registration-hub' as const },
                { name: 'Make Payment', icon: <CreditCard className="text-emerald-400" />, view: 'make-payment' as const },
                { name: 'View Updates', icon: <Newspaper className="text-amber-400" />, view: 'news' as const },
                { name: 'Get Help', icon: <HelpCircle className="text-indigo-400" />, view: 'help' as const },
              ].map((action, i) => (
                <button 
                  key={i} 
                  onClick={() => onNavigate(action.view)}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col items-center gap-4 text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                    {action.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-300">{action.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">Pending Actions (2)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 flex gap-5 group cursor-pointer hover:bg-amber-500/10 transition-all" onClick={() => onNavigate('payment-form')}>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-bold text-white">LAWMA Payment Due</h4>
                    <p className="text-xs text-slate-400 mt-1">Q2 2026 payment of ₦5,000</p>
                    <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest mt-2">Due in 3 days</div>
                  </div>
                  <button 
                    onClick={() => onNavigate('payment-form')}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all"
                  >
                    Pay Now
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20 flex gap-5 group cursor-pointer hover:bg-blue-500/10 transition-all" onClick={() => onNavigate('tax-register')}>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <FileText size={24} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-bold text-white">Complete Tax Registration</h4>
                    <p className="text-xs text-slate-400 mt-1">2 steps remaining (Document Upload)</p>
                  </div>
                  <button 
                    onClick={() => onNavigate('tax-register')}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl transition-all"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Registration Status */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">My Registrations</h3>
            <button 
              onClick={() => onNavigate('my-registrations')}
              className="text-xs font-bold text-blue-400 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Tax (LIRS)', status: 'Incomplete', info: 'Draft saved: 2 days ago', icon: <FileText className="text-amber-500" />, view: 'tax-register' as const },
              { name: 'Resident (LASRRA)', status: 'Incomplete', info: 'Draft saved: Today', icon: <Clock className="text-blue-500" />, view: 'lasrra-register' as const },
              { name: 'LAWMA Waste', status: 'Incomplete', info: 'Action Required', icon: <AlertCircle className="text-amber-500" />, view: 'lawma-register' as const },
            ].map((reg, i) => (
              <div 
                key={i} 
                onClick={() => onNavigate(reg.view)}
                className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all group cursor-pointer"
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
                <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${reg.status === 'Registered' || reg.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                  {reg.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Recent Transactions</h3>
            <button 
              onClick={() => onNavigate('payments')}
              className="text-xs font-bold text-blue-400 hover:underline"
            >
              Full History
            </button>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-6 py-4 font-black text-slate-500 uppercase text-[10px] tracking-widest">Date</th>
                  <th className="px-6 py-4 font-black text-slate-500 uppercase text-[10px] tracking-widest">Description</th>
                  <th className="px-6 py-4 font-black text-slate-500 uppercase text-[10px] tracking-widest">Amount</th>
                  <th className="px-6 py-4 font-black text-slate-500 uppercase text-[10px] tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { date: 'Jun 10', desc: 'LAWMA Q1 2026', amt: '₦5,000', status: 'Paid' },
                  { date: 'May 15', desc: 'LIRS Annual', amt: '₦45,000', status: 'Paid' },
                  { date: 'May 1', desc: 'Wallet Top-up', amt: '₦50,000', status: 'Complete' },
                ].map((tx, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-pointer" onClick={() => onNavigate('payments')}>
                    <td className="px-6 py-4 text-slate-400">{tx.date}</td>
                    <td className="px-6 py-4 font-bold text-slate-200 group-hover:text-white transition-colors">{tx.desc}</td>
                    <td className="px-6 py-4 font-black text-white">{tx.amt}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                        <CheckCircle2 size={14} /> {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Upcoming Features Section */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
             <Sparkles className="text-blue-500" size={18} />
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Future of Lagosian</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingFeatures.map((feat, i) => (
            <div key={i} className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 border-dashed hover:border-blue-500/20 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center transition-transform group-hover:scale-110">
                  {feat.icon}
                </div>
                <div className="text-[9px] font-black text-blue-500/60 uppercase tracking-widest bg-blue-500/5 px-2 py-1 rounded-lg">
                  {feat.date}
                </div>
              </div>
              <h4 className="font-bold text-slate-200 mb-2">{feat.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Updates */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Latest Updates</h3>
          <button onClick={() => onNavigate('news')} className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1">
            View All Updates <ChevronRight size={14} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, cat: 'Traffic', title: 'Third Mainland Bridge Maintenance Completed', date: 'Today', img: 'https://images.unsplash.com/photo-1542156822-6924d1a719c9?auto=format&fit=crop&q=80&w=400' },
            { id: 2, cat: 'LIRS', title: 'New Digital Tax Incentives for Small Businesses', date: 'Yesterday', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400' },
            { id: 3, cat: 'Gov', title: 'Lagos State to launch Eco-Friendly Bus Initiative', date: formattedDate, img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400' },
          ].map((news, i) => (
            <div key={i} className="glass rounded-[2rem] overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all group cursor-pointer" onClick={() => onNavigate('news')}>
              <div className="h-40 overflow-hidden relative">
                <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg shadow-lg shadow-blue-500/20">
                  {news.cat}
                </div>
              </div>
              <div className="p-6">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">{news.date}</div>
                <h4 className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">{news.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
