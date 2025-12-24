
import React from 'react';
import { 
  Wallet, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertCircle, 
  Trash2, 
  Building2, 
  Gavel, 
  Car, 
  ChevronRight, 
  Download, 
  CheckCircle2, 
  CreditCard,
  History,
  MoreHorizontal,
  ArrowLeft
} from 'lucide-react';
import { ViewType } from '../App';

interface PaymentDashboardProps {
  onNavigate: (view: ViewType) => void;
}

const PaymentDashboard: React.FC<PaymentDashboardProps> = ({ onNavigate }) => {
  const pendingPayments = [
    {
      id: 'lawma-q2',
      service: 'LAWMA Q2 2026',
      amount: '₦5,000.00',
      dueDate: 'June 25, 2026',
      daysLeft: 3,
      status: 'Due Soon',
      icon: <Trash2 size={24} className="text-amber-400" />,
      color: 'amber',
      formView: 'payment-form' as const
    },
    {
      id: 'luc-2026',
      service: 'Land Use Charge 2026',
      amount: '₦25,000.00',
      dueDate: 'August 31, 2026',
      daysLeft: 78,
      status: 'Upcoming',
      icon: <Building2 size={24} className="text-blue-400" />,
      color: 'blue',
      formView: 'make-payment' as const
    }
  ];

  const quickPayOptions = [
    { name: 'Tax Payment', icon: <Gavel size={20} className="text-blue-400" />, view: 'make-payment' as const },
    { name: 'LAWMA', icon: <Trash2 size={20} className="text-amber-400" />, view: 'payment-form' as const },
    { name: 'Land Use', icon: <Building2 size={20} className="text-emerald-400" />, view: 'make-payment' as const },
    { name: 'Vehicle', icon: <Car size={20} className="text-indigo-400" />, view: 'make-payment' as const },
    { name: 'Other', icon: <MoreHorizontal size={20} className="text-slate-400" />, view: 'make-payment' as const },
  ];

  const recentTransactions = [
    { date: 'Jun 10, 2026', desc: 'LAWMA Q1 2026', amt: '₦5,000.00', status: 'Paid' },
    { date: 'May 15, 2026', desc: 'LIRS Annual Tax', amt: '₦45,000.00', status: 'Paid' },
    { date: 'May 01, 2026', desc: 'Wallet Top-up', amt: '₦50,000.00', status: 'Success' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 26.1: Page Header */}
      <div className="space-y-4">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </button>
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight">Payments</h1>
          <p className="text-slate-500 font-medium">View obligations and make secure payments to Lagos State.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 26.2: Wallet Card */}
        <div className="lg:col-span-1">
          <div className="relative group perspective">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl h-[320px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300/60">Lagosian Digital Wallet</div>
                  <div className="text-sm font-bold text-white/80">Seun Babalola</div>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <Wallet className="text-white/40" size={24} />
                </div>
              </div>

              <div className="relative z-10 space-y-1">
                 <div className="text-[10px] font-black uppercase tracking-widest text-blue-300/40">Available Balance</div>
                 <div className="text-4xl font-black text-white tracking-tighter">₦25,000.00</div>
              </div>

              <div className="pt-6 border-t border-white/10 flex gap-3 relative z-10">
                <button className="flex-1 py-3 bg-white text-indigo-950 font-black text-xs rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                  <Plus size={14} /> Add Funds
                </button>
                <button className="flex-1 py-3 bg-white/10 border border-white/10 text-white font-black text-xs rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <ArrowDownRight size={14} /> Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 26.3: Pending Payments */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Pending Payments (2)</h3>
            <div className="text-xs font-bold text-slate-400">Total Pending: <span className="text-white">₦30,000.00</span></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pendingPayments.map((pay) => (
              <div key={pay.id} className="glass p-6 rounded-[2.5rem] border border-white/10 flex flex-col justify-between group hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 shadow-xl transition-transform group-hover:scale-110">
                    {pay.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest bg-${pay.color}-500/10 text-${pay.color}-500`}>
                    {pay.status === 'Due Soon' ? (
                      <span className="flex items-center gap-1"><AlertCircle size={10} /> Due Soon</span>
                    ) : 'Upcoming'}
                  </div>
                </div>
                
                <div className="space-y-1 mb-6">
                  <h4 className="font-bold text-white">{pay.service}</h4>
                  <div className="text-xl font-black text-white">{pay.amount}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pt-1 flex items-center justify-between">
                    <span>Due: {pay.dueDate}</span>
                    {pay.status === 'Due Soon' && <span className="text-amber-500">{pay.daysLeft} days left</span>}
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate(pay.formView)}
                  className="w-full py-3 bg-blue-600 text-white font-black text-xs rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
                >
                  Pay Now <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 26.4: Quick Pay Options */}
      <div className="space-y-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Quick Pay</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {quickPayOptions.map((opt, i) => (
            <button 
              key={i}
              onClick={() => onNavigate(opt.view)}
              className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all group flex flex-col items-center gap-4 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                {opt.icon}
              </div>
              <span className="text-xs font-bold text-slate-300">{opt.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 26.5: Recent Transactions */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Recent Transactions</h3>
          <button className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1">
            View All Transactions <ArrowUpRight size={14} />
          </button>
        </div>
        
        <div className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-5 font-black text-slate-500 uppercase text-[10px] tracking-widest">Date</th>
                <th className="px-8 py-5 font-black text-slate-500 uppercase text-[10px] tracking-widest">Description</th>
                <th className="px-8 py-5 font-black text-slate-500 uppercase text-[10px] tracking-widest">Amount</th>
                <th className="px-8 py-5 font-black text-slate-500 uppercase text-[10px] tracking-widest">Status</th>
                <th className="px-8 py-5 font-black text-slate-500 uppercase text-[10px] tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentTransactions.map((tx, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-5 text-slate-400 font-medium">{tx.date}</td>
                  <td className="px-8 py-5 font-bold text-slate-200">{tx.desc}</td>
                  <td className="px-8 py-5 font-black text-white">{tx.amt}</td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-black text-xs uppercase tracking-tighter">
                      <CheckCircle2 size={14} /> {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition-colors bg-blue-400/10 px-3 py-1.5 rounded-lg border border-blue-400/20">
                      <Download size={12} /> View Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Help Banner */}
      <div className="p-8 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 text-center md:text-left">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0">
             <CreditCard size={24} />
          </div>
          <div>
            <h4 className="font-bold text-white">Need to report a payment issue?</h4>
            <p className="text-sm text-slate-400">If you've been debited but your transaction isn't showing, we can help.</p>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('help')}
          className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all shrink-0"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default PaymentDashboard;
