
import React, { useState } from 'react';
import { ShieldCheck, User, Building, Landmark, Mail, ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface AdminSignupPageProps {
  onNavigate: (view: ViewType) => void;
}

const AdminSignupPage: React.FC<AdminSignupPageProps> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-md w-full glass p-12 rounded-[3.5rem] border border-emerald-500/20 text-center space-y-8 animate-in zoom-in-95 duration-500">
           <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <CheckCircle2 className="text-emerald-500" size={48} />
           </div>
           <div className="space-y-2">
              <h2 className="text-3xl font-black text-white uppercase tracking-widest">Request Filed</h2>
              <p className="text-slate-400 font-medium">Your application for admin access has been submitted for verification.</p>
           </div>
           <div className="p-6 bg-slate-900/50 rounded-3xl border border-white/5 text-sm text-slate-500 leading-relaxed">
             Please contact your Department Lead for credential activation. You will receive an encrypted confirmation via your official email.
           </div>
           <button 
            onClick={() => onNavigate('admin-login')}
            className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
           >
             Return to Login <ArrowRight size={20} />
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-xl w-full glass p-10 lg:p-16 rounded-[4rem] border border-white/10 shadow-2xl relative z-10 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center space-y-4">
           <div className="inline-flex items-center gap-3 mb-2">
            <Logo size={48} />
            <span className="text-2xl font-black tracking-tighter text-white uppercase">LAGOSIAN</span>
          </div>
          <h1 className="text-2xl font-black text-white uppercase tracking-[0.2em]">Personnel Registration</h1>
          <p className="text-slate-500 text-sm font-medium">Register as an official representative of a Lagos State Agency.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
           <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input required type="text" placeholder="John Doe" className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Employee ID</label>
                <div className="relative group">
                  <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input required type="text" placeholder="LASG-IT-0000" className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all font-mono" />
                </div>
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Department / Agency</label>
              <div className="relative group">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                <select required className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                  <option value="">Select Agency</option>
                  <option>LIRS (Internal Revenue)</option>
                  <option>LAWMA (Waste Management)</option>
                  <option>LASRRA (Residents Registration)</option>
                  <option>Ministry of Finance</option>
                  <option>IT & Infrastructure</option>
                </select>
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Official Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input required type="email" placeholder="name@lagosstate.gov.ng" className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all" />
              </div>
           </div>

           <div className="p-5 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex gap-4">
              <ShieldCheck className="text-blue-500 shrink-0" size={24} />
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                By requesting access, you confirm that you are a current employee of the Lagos State Government. Misrepresentation is a violation of the State Public Service Rules.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={20} /> SUBMITTING...</>
                ) : (
                  <>REQUEST ACCESS <ArrowRight size={20} /></>
                )}
              </button>
              <button 
                type="button"
                onClick={() => onNavigate('admin-login')}
                className="px-10 py-5 bg-white/5 border border-white/10 text-slate-400 font-bold rounded-2xl hover:bg-white/10 transition-all"
              >
                Cancel
              </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignupPage;
