
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Newspaper, 
  User, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Bell,
  ChevronDown,
  Menu,
  X,
  Search
} from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileNavigate = (view: ViewType) => {
    onNavigate(view);
    setIsProfileOpen(false);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, view: 'dashboard' as const },
    { 
      name: 'Registration', 
      icon: <FileText size={20} />, 
      view: 'registration-hub' as const,
      subItems: [
        { name: 'Registration Hub', view: 'registration-hub' as const },
        { name: 'My Registrations', view: 'my-registrations' as const },
        { name: 'My Documents', view: 'my-documents' as const },
        { name: 'New Registration', view: 'registration-hub' as const }
      ] 
    },
    { 
      name: 'Payments', 
      icon: <CreditCard size={20} />, 
      view: 'payments' as const,
      subItems: [
        { name: 'Payment Dashboard', view: 'payments' as const },
        { name: 'Make Payment', view: 'make-payment' as const },
        { name: 'Transaction History', view: 'transaction-history' as const }
      ]
    },
    { name: 'Updates', icon: <Newspaper size={20} />, view: 'dashboard-news' as const },
    { name: 'My Profile', icon: <User size={20} />, view: 'profile' as const },
    { name: 'Settings', icon: <Settings size={20} />, view: 'settings' as const },
    { name: 'Help & Support', icon: <HelpCircle size={20} />, view: 'dashboard-help' as const },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-white/5 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-10">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleMobileNavigate('home')}
            >
              <Logo size={32} />
              <span className="text-xl font-black tracking-tighter text-white uppercase">LAGOSIAN</span>
            </div>
            
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar pr-1">
            {menuItems.map((item) => {
              const active = currentView === item.view || (item.subItems?.some(sub => sub.view === currentView));
              return (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => handleMobileNavigate(item.view)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                  {active && item.subItems && (
                    <div className="ml-11 space-y-1 pb-2">
                      {item.subItems.map(sub => (
                        <button 
                          key={sub.name}
                          onClick={() => handleMobileNavigate(sub.view)}
                          className={`w-full text-left text-xs font-bold py-1 transition-colors ${currentView === sub.view ? 'text-blue-400' : 'text-slate-500 hover:text-blue-400'}`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <button 
            onClick={() => handleMobileNavigate('home')}
            className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-rose-400 font-bold text-sm transition-colors mt-auto border-t border-white/5 pt-6"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-slate-900/50 backdrop-blur-xl border-b border-white/5 px-4 lg:px-10 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/5 transition-all lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 bg-slate-950 border border-white/10 rounded-xl px-4 py-2 w-full max-w-md group focus-within:border-blue-500 transition-all">
              <Search size={18} className="text-slate-500 group-focus-within:text-blue-500" />
              <input 
                type="text" 
                placeholder="Search services, payments..." 
                className="bg-transparent border-none text-sm text-white focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <div className="relative">
              <button className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/5 relative">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-slate-900"></span>
              </button>
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 p-1.5 pr-3 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-blue-600/20 shrink-0">SB</div>
                <div className="hidden lg:block text-left">
                  <div className="text-xs font-black text-white leading-tight">Seun Babalola</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Verified User</div>
                </div>
                <ChevronDown size={14} className={`text-slate-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-2xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <button 
                    onClick={() => handleMobileNavigate('profile')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-bold text-slate-300 transition-colors"
                  >
                    <User size={16} /> My Profile
                  </button>
                  <button 
                    onClick={() => handleMobileNavigate('settings')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-bold text-slate-300 transition-colors"
                  >
                    <Settings size={16} /> Settings
                  </button>
                  <div className="h-px bg-white/5 my-2"></div>
                  <button onClick={() => onNavigate('home')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-rose-500/10 text-sm font-bold text-rose-400">
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
