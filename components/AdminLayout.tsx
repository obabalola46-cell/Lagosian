
import React from 'react';
import { 
  Users, 
  Activity, 
  Wallet, 
  ClipboardCheck, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  LayoutDashboard,
  FileText,
  Newspaper
} from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface AdminLayoutProps {
  children: React.ReactNode;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, currentView, onNavigate }) => {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, view: 'admin-dashboard' as const },
    { name: 'User Management', icon: <Users size={20} />, view: 'admin-users' as const },
    { name: 'Content Management', icon: <Newspaper size={20} />, view: 'admin-content' as const },
    { name: 'Financials', icon: <Wallet size={20} />, view: 'admin-dashboard' as const }, // Placeholders
    { name: 'Reports', icon: <ClipboardCheck size={20} />, view: 'admin-dashboard' as const },
    { name: 'Settings', icon: <Settings size={20} />, view: 'admin-dashboard' as const },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 lg:w-64 bg-slate-900 border-r border-white/5 z-50 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12 lg:px-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <Logo size={32} />
          <span className="hidden lg:block font-black tracking-tighter text-white text-lg uppercase">Admin Portal</span>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item, i) => (
            <button 
              key={i} 
              onClick={() => onNavigate(item.view)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm ${currentView === item.view ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              {item.icon}
              <span className="hidden lg:block whitespace-nowrap">{item.name}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-rose-400 font-bold text-sm transition-colors mt-auto border-t border-white/5 pt-6"
        >
          <LogOut size={20} />
          <span className="hidden lg:block whitespace-nowrap">Exit Portal</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-20 lg:ml-64 flex flex-col min-w-0">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-6 lg:px-10 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-40">
          <div className="relative group max-w-md w-full hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Quick search across records..." 
              className="bg-slate-900 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all w-full"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/5">
              <div className="hidden lg:block text-right">
                <div className="text-xs font-black text-white">Admin Unit 04</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Level 1 Clearance</div>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-blue-500/20 p-0.5 overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover rounded-full" alt="" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 lg:p-10 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
