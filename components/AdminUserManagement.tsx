
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Edit3, 
  Eye, 
  UserX, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown,
  FileText,
  BadgeCheck,
  ShieldAlert
} from 'lucide-react';
import { ViewType } from '../App';
import AdminLayout from './AdminLayout';

interface AdminUserManagementProps {
  onNavigate: (view: ViewType) => void;
}

const MOCK_USERS = [
  { id: 'LAG-2026-88923', name: 'Seun Babalola', email: 'seun.b@example.ng', phone: '+234 803 000 1234', status: 'Active', registrations: 3, joined: 'Jan 10, 2024', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100' },
  { id: 'LAG-2026-88924', name: 'Adaobi Nnamdi', email: 'ada.n@business.ng', phone: '+234 812 445 6677', status: 'Active', registrations: 5, joined: 'Jan 12, 2024', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100' },
  { id: 'LAG-2026-88925', name: 'John Doe', email: 'john.doe@global.com', phone: '+234 901 223 3344', status: 'Pending', registrations: 1, joined: 'Feb 01, 2024', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
  { id: 'LAG-2026-88926', name: 'Tunde Bakare', email: 'tunde.dev@stack.ng', phone: '+234 805 112 2233', status: 'Suspended', registrations: 2, joined: 'Feb 05, 2024', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
  { id: 'LAG-2026-88927', name: 'Amina Ibrahim', email: 'amina.i@gov.ng', phone: '+234 703 998 8877', status: 'Active', registrations: 4, joined: 'Feb 10, 2024', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
];

const AdminUserManagement: React.FC<AdminUserManagementProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredUsers = MOCK_USERS.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || user.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest"><CheckCircle2 size={12} /> Active</span>;
      case 'Pending':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest"><Clock size={12} /> Pending</span>;
      case 'Suspended':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest"><UserX size={12} /> Suspended</span>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout currentView="admin-users" onNavigate={onNavigate}>
      <div className="space-y-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tight uppercase">User <span className="text-blue-500">Management</span></h1>
            <p className="text-slate-500 font-medium">Verify identities, manage access, and monitor resident activity.</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
             <BadgeCheck size={18} /> Batch Verification
          </button>
        </div>

        {/* Search & Filters */}
        <div className="glass p-6 rounded-[2.5rem] border border-white/5 flex flex-col lg:flex-row gap-6 items-center">
          <div className="relative w-full lg:flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by Name, Email, or Lagosian ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 bg-slate-950 border border-white/5 rounded-2xl pl-14 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 p-1 bg-slate-950 border border-white/5 rounded-2xl">
            {['All', 'Active', 'Pending', 'Suspended'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${activeFilter === filter ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <button className="h-14 px-6 bg-white/5 border border-white/5 rounded-2xl text-slate-400 hover:text-white transition-all flex items-center gap-3">
             <Filter size={18} />
             <span className="text-xs font-bold uppercase tracking-widest">More Filters</span>
          </button>
        </div>

        {/* Users Table */}
        <div className="glass rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-sm border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                     Name <ArrowUpDown size={12} className="opacity-30" />
                  </th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Contact Information</th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Status</th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Registrations</th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Joined Date</th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 overflow-hidden shrink-0 shadow-lg">
                           <img src={user.avatar} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="font-bold text-white group-hover:text-blue-400 transition-colors">{user.name}</div>
                          <div className="text-[10px] font-mono text-slate-600 tracking-tighter uppercase">{user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="space-y-0.5">
                        <div className="text-slate-300 font-medium">{user.email}</div>
                        <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{user.phone}</div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      {getStatusBadge(user.status)}
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                         <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                           <FileText size={14} />
                         </div>
                         <span className="font-black text-white">{user.registrations}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-slate-400 font-medium">
                      {user.joined}
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all" title="View Details">
                           <Eye size={18} />
                        </button>
                        <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all" title="Edit User">
                           <Edit3 size={18} />
                        </button>
                        <button className="p-2 text-slate-600 hover:text-white transition-colors">
                           <MoreVertical size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-8 border-t border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
              Showing <span className="text-white">1 - {filteredUsers.length}</span> of <span className="text-white">{MOCK_USERS.length}</span> registered users
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

        {/* Security Warning */}
        <div className="p-6 rounded-[2.5rem] bg-rose-500/5 border border-rose-500/10 flex gap-4">
           <ShieldAlert className="text-rose-500 shrink-0 mt-0.5" size={20} />
           <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-wider">
             User data management is audited under state privacy laws. All edits, suspensions, and data exports are logged with your administrator fingerprint. Misuse of access will result in immediate credential revocation.
           </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUserManagement;
