
import React, { useState } from 'react';
import { 
  History, 
  Search, 
  Filter, 
  Download, 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft, 
  Eye, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  Clock,
  MoreHorizontal,
  FileSpreadsheet
} from 'lucide-react';
import { ViewType } from '../App';

interface TransactionHistoryProps {
  onNavigate: (view: ViewType) => void;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');

  const transactions = [
    { id: 'TXN-882931', date: 'Jan 10, 2024', desc: 'LAWMA Q4 2023', amt: '₦5,000', status: 'Success', type: 'LAWMA' },
    { id: 'TXN-771204', date: 'Dec 15, 2023', desc: 'LIRS Tax Filing', amt: '₦45,000', status: 'Success', type: 'LIRS' },
    { id: 'TXN-664319', date: 'Dec 10, 2023', desc: 'LAWMA Q3 2023', amt: '₦5,000', status: 'Failed', type: 'LAWMA' },
    { id: 'TXN-552108', date: 'Nov 20, 2023', desc: 'Land Use Charge', amt: '₦25,000', status: 'Success', type: 'LUC' },
    { id: 'TXN-441092', date: 'Oct 05, 2023', desc: 'Vehicle License Renewal', amt: '₦12,500', status: 'Pending', type: 'Vehicle' },
    { id: 'TXN-330981', date: 'Sep 12, 2023', desc: 'LAWMA Q2 2023', amt: '₦5,000', status: 'Success', type: 'LAWMA' },
    { id: 'TXN-221870', date: 'Aug 18, 2023', desc: 'Business Permit Fee', amt: '₦15,000', status: 'Success', type: 'Business' },
  ];

  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tx.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || tx.status === filterStatus;
    const matchesType = filterType === 'All' || tx.type === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Success': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Failed': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'Pending': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      default: return 'text-slate-400 bg-white/5 border-white/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Success': return <CheckCircle2 size={12} />;
      case 'Failed': return <XCircle size={12} />;
      case 'Pending': return <Clock size={12} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
            <h1 className="text-3xl font-black tracking-tight">Transaction <span className="text-blue-500">History</span></h1>
            <p className="text-slate-500 font-medium">View and manage all your past payments to Lagos State.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-black text-sm rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2 shadow-xl mb-2">
          <FileSpreadsheet size={18} className="text-emerald-400" /> Export to CSV
        </button>
      </div>

      {/* Filter Bar */}
      <div className="glass p-4 rounded-[2.5rem] border border-white/10 flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative w-full lg:flex-1 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search by transaction ID or description..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 bg-slate-950 border border-white/5 rounded-2xl pl-14 pr-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-2 bg-slate-950 border border-white/5 rounded-2xl px-4 h-14">
            <CalendarIcon size={16} className="text-slate-500" />
            <span className="text-xs font-bold text-slate-400">Date Range</span>
            <div className="h-4 w-px bg-white/10 mx-2"></div>
            <button className="text-xs font-black text-white hover:text-blue-400">All Time</button>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 border border-white/5 rounded-2xl px-4 h-14">
            <Filter size={16} className="text-slate-500" />
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent text-xs font-bold text-white focus:outline-none appearance-none pr-4 cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="LAWMA">LAWMA</option>
              <option value="LIRS">Tax (LIRS)</option>
              <option value="LUC">Land Use</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 border border-white/5 rounded-2xl px-4 h-14">
            <div className="flex gap-1">
              {['All', 'Success', 'Failed', 'Pending'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${filterStatus === status ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="glass rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Date</th>
                <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Description</th>
                <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Transaction ID</th>
                <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Amount</th>
                <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Status</th>
                <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="px-8 py-5 text-slate-400 font-medium">{tx.date}</td>
                    <td className="px-8 py-5">
                      <div className="font-bold text-slate-200 group-hover:text-white transition-colors">{tx.desc}</div>
                      <div className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{tx.type}</div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="font-mono text-xs text-blue-400/80 tracking-tighter bg-blue-400/5 px-2 py-1 rounded border border-blue-400/10">{tx.id}</span>
                    </td>
                    <td className="px-8 py-5 font-black text-white">{tx.amt}</td>
                    <td className="px-8 py-5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-black text-[10px] uppercase tracking-tighter border ${getStatusStyle(tx.status)}`}>
                        {getStatusIcon(tx.status)} {tx.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      {tx.status === 'Success' ? (
                        <button 
                          onClick={() => onNavigate('receipt')}
                          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors bg-blue-400/10 px-4 py-2 rounded-xl border border-blue-400/20"
                        >
                          <Eye size={14} /> View Receipt
                        </button>
                      ) : tx.status === 'Failed' ? (
                        <button 
                          onClick={() => onNavigate('payment-form')}
                          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-rose-400 hover:text-white transition-colors bg-rose-400/10 px-4 py-2 rounded-xl border border-rose-400/20"
                        >
                          <RefreshCw size={14} /> Retry Payment
                        </button>
                      ) : (
                        <button className="p-2 text-slate-500 hover:text-white">
                          <MoreHorizontal size={20} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-slate-700">
                        <History size={32} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-white">No transactions found</h4>
                        <p className="text-slate-500 max-w-xs mx-auto">We couldn't find any transactions matching your current filters.</p>
                      </div>
                      <button 
                        onClick={() => {setSearchQuery(''); setFilterStatus('All'); setFilterType('All');}}
                        className="text-blue-500 font-bold hover:underline"
                      >
                        Reset all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-8 border-t border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
            Showing <span className="text-white">1 - {filteredTransactions.length}</span> of <span className="text-white">{filteredTransactions.length}</span> transactions
          </div>
          <div className="flex items-center gap-2">
            <button disabled className="p-3 rounded-xl border border-white/5 text-slate-700 disabled:opacity-30 cursor-not-allowed">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-1">
              <button className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-xs">1</button>
              <button className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all font-black text-xs">2</button>
            </div>
            <button className="p-3 rounded-xl border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="p-8 rounded-[3rem] bg-blue-600/5 border border-blue-500/10 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-16 h-16 bg-blue-500/10 rounded-[1.5rem] flex items-center justify-center text-blue-400 shrink-0">
          <Download size={28} />
        </div>
        <div className="flex-1 space-y-2 text-center lg:text-left">
           <h4 className="font-bold text-white text-lg">Download Multi-Statement</h4>
           <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
             Need a consolidated report for your tax filings or personal records? Select a custom date range and export your entire history in PDF or CSV format.
           </p>
        </div>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-2xl transition-all shadow-xl shadow-blue-500/20 whitespace-nowrap">
           Generate Statement
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
