
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface ResetPasswordPageProps {
  onNavigate: (view: ViewType) => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsSuccess(true);
    setTimeout(() => onNavigate('login'), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-md w-full glass p-10 lg:p-16 rounded-[3rem] border border-white/10 space-y-8 relative z-10 text-center animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-blue-600/10 rounded-3xl mx-auto flex items-center justify-center mb-4">
           <Logo size={48} />
        </div>

        {isSuccess ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <CheckCircle className="text-emerald-500" size={40} />
            </div>
            <h2 className="text-3xl font-black">Reset Successful!</h2>
            <p className="text-slate-400">
              Your password has been reset successfully. Redirecting you to login...
            </p>
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight">Create new password</h1>
              <p className="text-slate-400">
                Enter your new password below. Ensure it meets the security requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-400 ml-1">New Password</label>
                <div className="relative">
                  <input 
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pr-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-400 ml-1">Confirm New Password</label>
                <input 
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Reset Password <ShieldCheck size={20} />
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

export default ResetPasswordPage;
