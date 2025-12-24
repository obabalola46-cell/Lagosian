
import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface ForgotPasswordPageProps {
  onNavigate: (view: ViewType) => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-md w-full glass p-10 lg:p-16 rounded-[3rem] border border-white/10 space-y-8 relative z-10 text-center animate-in zoom-in-95 duration-500">
        <div 
          className="inline-flex items-center gap-3 cursor-pointer mb-8"
          onClick={() => onNavigate('home')}
        >
          <Logo size={40} />
          <span className="text-2xl font-extrabold tracking-tighter text-white uppercase">LAGOSIAN</span>
        </div>

        {isSent ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <CheckCircle className="text-emerald-500" size={40} />
            </div>
            <h2 className="text-3xl font-black">Link Sent!</h2>
            <p className="text-slate-400">
              Check your inbox at <span className="text-white font-bold">{email}</span>. We've sent instructions to reset your password.
            </p>
            <button 
              onClick={() => onNavigate('login')}
              className="w-full py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight">Reset password</h1>
              <p className="text-slate-400">
                Enter your email or phone number and we'll send you instructions to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-400 ml-1">Email or Phone Number</label>
                <input 
                  required
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.ng"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Send Reset Link <Send size={20} />
              </button>
            </form>

            <button 
              onClick={() => onNavigate('login')}
              className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mx-auto"
            >
              <ArrowLeft size={14} /> Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
