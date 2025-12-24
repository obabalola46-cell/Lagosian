
import React from 'react';
import { 
  Users, 
  ClipboardCheck, 
  Wallet, 
  Activity, 
  TrendingUp, 
  ChevronRight,
  Landmark,
  ChevronDown
} from 'lucide-react';
import { ViewType } from '../App';
import AdminLayout from './AdminLayout';

interface AdminDashboardProps {
  onNavigate: (view: ViewType) => void;
}

const STATS_DATA = [
  { label: 'Total Users', value: '10,432', change: '+12%', icon: <Users size={24} />, color: 'blue' },
  { label: 'Registrations Today', value: '45', change: '+5%', icon: <ClipboardCheck size={24} />, color: 'emerald' },
  { label: 'Payments Today', value: '₦2.5M', change: '+24%', icon: <Wallet size={24} />, color: 'amber' },
  { label: 'Active Sessions', value: '234', change: '-2%', icon: <Activity size={24} />, color: 'indigo' },
];

const ACTIVITIES_DATA = [
  { title: 'New registration', desc: 'Seun completed tax registration', time: '5 mins ago', type: 'registration' },
  { title: 'Payment received', desc: '₦5,000 LAWMA payment', time: '12 mins ago', type: 'payment' },
  { title: 'New user', desc: 'John Doe signed up', time: '45 mins ago', type: 'user' },
];

const DAY_NAMES = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  return (
    <AdminLayout currentView="admin-dashboard" onNavigate={onNavigate}>
      <div className="space-y-10">
        {/* Page Title */}
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tight uppercase">Admin <span className="text-blue-500">Dashboard</span></h1>
          <p className="text-slate-500 font-medium">System overview and real-time activity tracking.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, i) => (
            <div key={i} className="glass p-6 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all">
               <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${stat.color === 'blue' ? 'text-blue-400' : stat.color === 'emerald' ? 'text-emerald-400' : stat.color === 'amber' ? 'text-amber-400' : 'text-indigo-400'}`}>
                  {stat.icon}
               </div>
               <div className="space-y-4">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  <div className="flex items-end justify-between">
                     <div className="text-3xl font-black text-white">{stat.value}</div>
                     <div className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                        {stat.change}
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 glass p-8 rounded-[3rem] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <TrendingUp className="text-blue-500" size={20} />
                    <h3 className="font-black text-white uppercase tracking-tighter">User Growth (30 Days)</h3>
                 </div>
                 <div className="relative">
                    <select className="bg-white/5 border border-white/5 text-xs font-bold text-slate-400 pl-3 pr-10 py-2 rounded-lg focus:outline-none appearance-none cursor-pointer">
                      <option>Past 30 Days</option>
                      <option>Past 6 Months</option>
                      <option>Year to Date</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                 </div>
              </div>

              <div className="h-64 w-full relative pt-4">
                 <svg viewBox="0 0 1000 200" className="w-full h-full overflow-visible">
                    <defs>
                       <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                       </linearGradient>
                    </defs>
                    <path d="M0 180 Q 150 160, 200 140 T 400 110 T 600 70 T 800 40 T 1000 10 L 1000 200 L 0 200 Z" fill="url(#chart-grad)" />
                    <path d="M0 180 Q 150 160, 200 140 T 400 110 T 600 70 T 800 40 T 1000 10" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                    {[...Array(6)].map((_, i) => (
                       <circle key={i} cx={i * 200} cy={180 - i * 34} r="4" fill="#3b82f6" stroke="#020617" strokeWidth="2" />
                    ))}
                 </svg>
                 <div className="absolute inset-0 flex justify-between items-end text-[8px] font-black text-slate-700 uppercase tracking-widest px-2">
                    <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                 </div>
              </div>
           </div>

           <div className="glass p-8 rounded-[3rem] border border-white/10 space-y-8 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                 <ClipboardCheck className="text-emerald-500" size={20} />
                 <h3 className="font-black text-white uppercase tracking-tighter">Registrations by Type</h3>
              </div>
              <div className="relative mx-auto w-40 h-40">
                 <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="15" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="15" fill="none" strokeDasharray="251" strokeDashoffset="100" />
                    <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="15" fill="none" strokeDasharray="251" strokeDashoffset="200" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                       <div className="text-2xl font-black text-white leading-tight">45</div>
                       <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Total Today</div>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[{ label: 'Tax', color: 'bg-blue-500' }, { label: 'LASRRA', color: 'bg-emerald-500' }, { label: 'LAWMA', color: 'bg-amber-500' }, { label: 'Other', color: 'bg-slate-700' }].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                       <span className="text-[10px] font-bold text-slate-400 uppercase">{item.label}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
           <div className="glass p-8 rounded-[3rem] border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                 <Wallet className="text-amber-500" size={20} />
                 <h3 className="font-black text-white uppercase tracking-tighter">Payment Volume (Daily)</h3>
              </div>
              <div className="flex items-end justify-between h-48 gap-3 pt-6">
                 {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 space-y-2 group flex flex-col items-center">
                       <div className={`w-full rounded-t-xl transition-all group-hover:scale-y-105 ${i === 6 ? 'bg-amber-500' : 'bg-amber-500/20'}`} style={{ height: `${h}%` }}></div>
                       <div className="text-[8px] font-black text-slate-700 uppercase">{DAY_NAMES[i]}</div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="glass rounded-[3rem] border border-white/10 overflow-hidden flex flex-col">
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                 <h3 className="font-black text-white uppercase tracking-tighter">Recent Activity</h3>
                 <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="flex-1 divide-y divide-white/5">
                 {ACTIVITIES_DATA.map((act, i) => (
                    <div key={i} className="p-6 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
                       <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${act.type === 'registration' ? 'bg-blue-600/10 text-blue-400' : act.type === 'payment' ? 'bg-amber-600/10 text-amber-400' : 'bg-emerald-600/10 text-emerald-400'}`}>
                             {act.type === 'registration' ? <ClipboardCheck size={18} /> : act.type === 'payment' ? <Wallet size={18} /> : <Users size={18} />}
                          </div>
                          <div>
                             <h4 className="text-sm font-bold text-slate-200">{act.title}</h4>
                             <p className="text-xs text-slate-500">{act.desc}</p>
                          </div>
                       </div>
                       <span className="text-[10px] font-black text-slate-700 uppercase tracking-tighter">{act.time}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Health Tip */}
        <div className="p-8 rounded-[3rem] bg-blue-600/5 border border-blue-500/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.05]"><Landmark size={120} className="text-blue-500" /></div>
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0"><Activity size={32} /></div>
          <div className="flex-1 space-y-2 text-center md:text-left relative z-10">
             <h4 className="font-bold text-white text-lg uppercase tracking-tight">System Status: Optimal</h4>
             <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">Core gateways (LIRS, NIMC, LAWMA) are currently responding within healthy latency limits ( { '<' } 250ms). No incidents reported.</p>
          </div>
          <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 whitespace-nowrap relative z-10 uppercase tracking-widest">System Logs <ChevronRight size={14} /></button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
