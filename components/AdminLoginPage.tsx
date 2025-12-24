
import React, { useState } from 'react';
import { ShieldAlert, Lock, Mail, ArrowLeft, Fingerprint, ChevronRight, AlertCircle, Loader2 } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface AdminLoginPageProps {
  onNavigate: (view: ViewType) => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onNavigate }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [credentials, setCredentials] = useState({ id: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    // Simulate high-security auth check
    setTimeout(() => {
      onNavigate('admin-dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Matrix-like grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full animate-pulse"></div>
      
      <div className="max-w-md w-full glass p-10 lg:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative z-10 space-y-10 animate-in fade-in zoom-in-95 duration-700">
        <div className="text-center space-y-4">
          <div 
            className="inline-flex items-center gap-3 cursor-pointer mb-2"
            onClick={() => onNavigate('home')}
          >
            <Logo size={48} />
            <span className="text-2xl font-black tracking-tighter text-white uppercase">LAGOSIAN</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-white uppercase tracking-widest">Admin Portal</h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-[0.2em]">
               <ShieldAlert size={12} /> Authorized Access Only
            </div>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Admin ID / Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                required
                type="text"
                placeholder="ADM-XXXX-XXXX"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all font-mono"
                onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Secure Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                required
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
               <Fingerprint size={14} className="text-blue-500" /> Biometrics Available
            </div>
            <button type="button" className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors">Recover ID</button>
          </div>

          <button 
            type="submit"
            disabled={isAuthenticating}
            className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none"
          >
            {isAuthenticating ? (
              <>
                <Loader2 className="animate-spin" size={20} /> INITIALIZING...
              </>
            ) : (
              <>
                ENTER SECURE ZONE <ChevronRight size={20} />
              </>
            )}
          </button>
        </form>

        <div className="space-y-6">
           <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black">
                <span className="bg-[#0f172a] px-4 text-slate-600">New Personnel</span>
              </div>
           </div>

           <button 
            onClick={() => onNavigate('admin-signup')}
            className="w-full py-4 bg-white/5 border border-white/10 text-slate-300 font-bold rounded-2xl hover:bg-white/10 transition-all text-xs flex items-center justify-center gap-2"
           >
             Request Access Credentials
           </button>

           <div className="pt-4">
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors mx-auto"
              >
                <ArrowLeft size={14} /> Back to Public Site
              </button>
           </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10 flex gap-4">
           <AlertCircle className="text-rose-500 shrink-0" size={16} />
           <p className="text-[9px] text-slate-500 leading-relaxed font-bold uppercase">
             Unauthorized login attempts are monitored and reported to state security agencies. Log in only with official credentials.
           </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
