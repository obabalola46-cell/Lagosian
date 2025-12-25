
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, LogIn, Chrome, Home } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface LoginPageProps {
  onNavigate: (view: ViewType) => void;
}

const FuturisticBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-slate-950 overflow-hidden">
      {/* Deep Space Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e40af_0%,transparent_60%),radial-gradient(circle_at_bottom_left,#064e3b_0%,transparent_60%)] opacity-60"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 z-10"></div>
    </div>
  );
};

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen grid lg:grid-cols-2 animate-in fade-in duration-700 overflow-hidden bg-slate-950 relative">
      {/* Return Home Button (Top Left) */}
      <button 
        onClick={() => onNavigate('home')}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-black uppercase tracking-widest">Home</span>
      </button>

      <div className="hidden lg:flex relative flex-col justify-between p-16 overflow-hidden">
        <FuturisticBackground />
        
        <div className="relative z-10">
          <div 
            className="flex items-center gap-3 cursor-pointer group mb-12"
            onClick={() => onNavigate('home')}
          >
            <Logo size={48} />
            <span className="text-2xl font-extrabold tracking-tighter text-white uppercase">LAGOSIAN</span>
          </div>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-5xl font-black tracking-tighter leading-tight text-white drop-shadow-2xl">
              Welcome back to <span className="text-blue-400">Lagosian.</span>
            </h2>
            <p className="text-xl text-slate-200 font-medium drop-shadow-lg">
              Your digital companion for a smarter, simpler Lagos life.
            </p>
          </div>
        </div>

        <div className="relative z-10 text-sm text-slate-400 font-bold uppercase tracking-widest">
          © 2024 Lagosian Technologies. All rights reserved.
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-slate-900/50 relative backdrop-blur-sm">
        <div className="max-w-md w-full space-y-12">
          <div className="lg:hidden text-center space-y-4">
             <div 
              className="inline-flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <Logo size={40} />
              <span className="text-2xl font-extrabold tracking-tighter text-white uppercase">LAGOSIAN</span>
            </div>
            <h1 className="text-3xl font-black">Welcome back</h1>
          </div>

          <div className="space-y-2 lg:text-left text-center">
            <h1 className="hidden lg:block text-4xl font-black tracking-tight">Log in to your account</h1>
            <p className="text-slate-500">Simplify your civic life in seconds.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Email or Phone Number</label>
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.ng"
                className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <label className="text-sm font-bold text-slate-400">Password</label>
                <button 
                  type="button" 
                  onClick={() => onNavigate('forgot-password')}
                  className="text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative group">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pr-12 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
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

            <div className="flex items-center gap-3 px-1">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-5 h-5 rounded border-white/10 bg-slate-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-950 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-slate-400 select-none cursor-pointer">Remember me for 30 days</label>
            </div>

            <button 
              type="submit"
              onClick={() => onNavigate('dashboard')}
              className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Log In <LogIn size={20} />
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                <span className="bg-[#0f172a] px-4 text-slate-500">or</span>
              </div>
            </div>

            <button 
              type="button"
              className="w-full py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <ChannelIcon name="google" /> Continue with Google
            </button>
          </form>

          <p className="text-center text-slate-400">
            Don't have an account?{' '}
            <button 
              onClick={() => onNavigate('signup')}
              className="text-blue-500 font-bold hover:underline underline-offset-4"
            >
              Sign up
            </button>
          </p>

          <div className="pt-8">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors mx-auto group"
            >
              <Home size={14} className="group-hover:scale-110 transition-transform" /> Back to Landing Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChannelIcon = ({ name }: { name: string }) => {
    if (name === 'google') return <Chrome size={20} />;
    return null;
}

export default LoginPage;
