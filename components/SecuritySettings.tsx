
import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Smartphone, 
  ArrowLeft, 
  LogOut, 
  Monitor, 
  Smartphone as PhoneIcon,
  MapPin, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  ShieldAlert,
  Zap,
  RefreshCw
} from 'lucide-react';
import { ViewType } from '../App';

interface SecuritySettingsProps {
  onNavigate: (view: ViewType) => void;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ onNavigate }) => {
  const [sessions, setSessions] = useState([
    { id: 1, device: 'Chrome on Windows', location: 'Lagos, Nigeria', active: 'Now', current: true, icon: <Monitor size={20} /> },
    { id: 2, device: 'Safari on iPhone', location: 'Lagos, Nigeria', active: '2 hours ago', current: false, icon: <PhoneIcon size={20} /> },
  ]);

  const revokeSession = (id: number) => {
    setSessions(sessions.filter(s => s.id !== id));
  };

  const logoutAll = () => {
    setSessions(sessions.filter(s => s.current));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('settings')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Settings
          </button>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-white flex items-center gap-4">
               <Shield className="text-blue-500" size={32} /> Security <span className="text-blue-500">Settings</span>
            </h1>
            <p className="text-slate-500 font-medium">Protect your account with advanced security controls.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Section: Password & 2FA */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Password Card */}
          <div className="glass p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-between group hover:border-blue-500/20 transition-all">
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                   <Lock size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-black text-white">Password</h3>
                   <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-widest">Last changed: <span className="text-slate-400">Never</span></p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Choose a strong, unique password to protect your Lagosian account.
                </p>
             </div>
             <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Change Password <RefreshCw size={14} />
             </button>
          </div>

          {/* 2FA Card */}
          <div className="glass p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-between group hover:border-emerald-500/20 transition-all">
             <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-400">
                   <ShieldAlert size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-black text-white">Two-Factor Auth</h3>
                   <p className="text-xs text-rose-500 mt-1 font-bold uppercase tracking-widest flex items-center gap-1.5">
                     <AlertCircle size={12} /> Status: Not Enabled
                   </p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Add an extra layer of security by requiring a code from your phone to log in.
                </p>
             </div>
             <button className="w-full mt-8 py-4 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 font-black text-xs rounded-xl hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2">
                Enable 2FA <Zap size={14} />
             </button>
          </div>
        </div>

        {/* Section: Active Sessions */}
        <div className="glass rounded-[3rem] border border-white/5 overflow-hidden">
           <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                    <Smartphone size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-black text-white">Active Sessions</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Devices currently logged in</p>
                 </div>
              </div>
              <button 
                onClick={logoutAll}
                className="text-xs font-black text-rose-500 uppercase tracking-widest hover:underline"
              >
                Log Out All Devices
              </button>
           </div>

           <div className="p-4 space-y-2">
              {sessions.map((session) => (
                 <div key={session.id} className="p-6 rounded-[2rem] hover:bg-white/[0.03] transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-6">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg transition-transform group-hover:scale-110 ${session.current ? 'bg-blue-600/10 border-blue-500/20 text-blue-400' : 'bg-slate-900 border-white/5 text-slate-500'}`}>
                          {session.icon}
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-3">
                             <h4 className="font-bold text-white">{session.device}</h4>
                             {session.current && (
                                <span className="px-2 py-0.5 rounded-full bg-blue-500 text-[8px] font-black uppercase tracking-widest">Current</span>
                             )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                             <span className="flex items-center gap-1"><Clock size={12} /> {session.active}</span>
                             <span className="flex items-center gap-1"><MapPin size={12} /> {session.location}</span>
                          </div>
                       </div>
                    </div>
                    
                    {!session.current && (
                       <button 
                        onClick={() => revokeSession(session.id)}
                        className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all"
                       >
                          Revoke
                       </button>
                    )}
                 </div>
              ))}
           </div>
        </div>

        {/* Security Log Tip */}
        <div className="p-8 rounded-[3rem] bg-amber-500/5 border border-amber-500/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
            <Shield size={120} className="text-amber-500" />
          </div>
          <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400 shrink-0">
            <Shield size={32} />
          </div>
          <div className="flex-1 space-y-2 text-center md:text-left relative z-10">
             <h4 className="font-bold text-white text-lg">Recognize something suspicious?</h4>
             <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
               If you see a device or location you don't recognize, revoke the session immediately and change your password. You can also contact our emergency security response team.
             </p>
          </div>
          <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 whitespace-nowrap relative z-10">
            Security Log <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
