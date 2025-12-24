
import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  AlertTriangle, 
  ArrowLeft, 
  ChevronRight, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  Smartphone,
  Calendar,
  Newspaper,
  Save,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { ViewType } from '../App';

interface SettingsPageProps {
  onNavigate: (view: ViewType) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onNavigate }) => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    payments: true,
    news: false
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const ToggleSwitch = ({ active, onToggle }: { active: boolean, onToggle: () => void }) => (
    <button 
      onClick={onToggle}
      className={`w-12 h-6 rounded-full transition-all relative ${active ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-slate-800'}`}
    >
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${active ? 'left-7 shadow-sm' : 'left-1'}`}></div>
    </button>
  );

  const sections = [
    {
      id: 'account',
      title: 'Account Settings',
      icon: <User className="text-blue-400" />,
      glow: 'blue',
      manageView: 'security-settings' as const,
      items: [
        { label: 'Change Email', value: 'seun.b@example.ng', icon: <Mail size={16} /> },
        { label: 'Change Phone Number', value: '+234 803 000 1234', icon: <Phone size={16} /> },
        { label: 'Change Password', value: '••••••••••••', icon: <Lock size={16} /> }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy Settings',
      icon: <Shield className="text-emerald-400" />,
      glow: 'emerald',
      items: [
        { label: 'Profile Visibility', value: 'Verified Residents Only', icon: <Eye size={16} /> },
        { label: 'Data Sharing Preferences', value: 'Optimized Experience', icon: <Shield size={16} /> }
      ]
    },
    {
      id: 'payment',
      title: 'Payment Settings',
      icon: <CreditCard className="text-amber-400" />,
      glow: 'amber',
      items: [
        { label: 'Saved Payment Methods', value: '1 Card Active', icon: <CreditCard size={16} /> },
        { label: 'Default Payment Method', value: 'Visa ending 4242', icon: <CheckCircle2 size={16} /> }
      ]
    }
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
               <Settings className="text-blue-500" size={32} /> Settings
            </h1>
            <p className="text-slate-500 font-medium">Manage your personal data, security, and application preferences.</p>
          </div>
        </div>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
           <Save size={18} /> Save All Changes
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Dynamic Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id} className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-white/10 transition-all">
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-black text-white">{section.title}</h3>
                </div>
                <button 
                  onClick={() => section.manageView ? onNavigate(section.manageView) : null}
                  className="text-xs font-black text-blue-400 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
                >
                  Manage <ChevronRight size={14} />
                </button>
              </div>
              <div className="p-8 space-y-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group/item">
                    <div className="flex items-center gap-4">
                      <div className="text-slate-500 group-hover/item:text-blue-400 transition-colors">
                        {item.icon}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                        <div className="text-sm font-medium text-slate-200">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notification Settings (Fixed Position/Style) */}
        <div className="space-y-8">
          <div className="glass rounded-[3rem] border border-white/5 overflow-hidden">
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-blue-600/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                  <Bell size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Notification Settings</h3>
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Real-time alerts</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('notification-settings')}
                className="text-xs font-black text-blue-400 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
              >
                Manage <ChevronRight size={14} />
              </button>
            </div>
            
            <div className="p-8 space-y-8">
              {[
                { id: 'email', label: 'Email Notifications', desc: 'Official documents and security alerts', icon: <Mail size={18} /> },
                { id: 'sms', label: 'SMS Notifications', desc: 'Critical state alerts and OTPs', icon: <Smartphone size={18} /> },
                { id: 'push', label: 'Push Notifications', desc: 'App activity and bridge updates', icon: <Bell size={18} /> },
                { id: 'payments', label: 'Payment Reminders', desc: 'Due date alerts (LAWMA, LIRS)', icon: <Calendar size={18} /> },
                { id: 'news', label: 'News Updates', desc: 'Daily digest of Lagos feed', icon: <Newspaper size={18} /> },
              ].map((notif) => (
                <div key={notif.id} className="flex items-center justify-between group/notif">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500 group-hover/notif:text-blue-400 transition-colors">
                      {notif.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{notif.label}</h4>
                      <p className="text-[10px] text-slate-500 mt-1">{notif.desc}</p>
                    </div>
                  </div>
                  <ToggleSwitch 
                    active={notifications[notif.id as keyof typeof notifications]} 
                    onToggle={() => toggleNotification(notif.id as keyof typeof notifications)} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="glass rounded-[2.5rem] border border-rose-500/10 overflow-hidden bg-rose-500/[0.02]">
            <div className="p-8 border-b border-rose-500/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-black text-rose-500">Danger Zone</h3>
              </div>
              <button className="text-xs font-black text-rose-400 uppercase tracking-widest hover:text-rose-300 transition-colors flex items-center gap-1">
                Manage <ChevronRight size={14} />
              </button>
            </div>
            <div className="p-8 space-y-4">
               <button className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-rose-500/5 hover:border-rose-500/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-600 group-hover:text-rose-400 transition-colors">
                      <Lock size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white">Deactivate Account</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-700" />
               </button>
               <button className="w-full flex items-center justify-between p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white">
                      <Trash2 size={16} />
                    </div>
                    <span className="text-sm font-bold text-rose-100">Delete Account</span>
                  </div>
                  <ChevronRight size={16} className="text-rose-400" />
               </button>
               <p className="text-[10px] text-rose-400/50 text-center font-medium uppercase tracking-widest pt-2">
                 These actions are permanent and cannot be undone.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
