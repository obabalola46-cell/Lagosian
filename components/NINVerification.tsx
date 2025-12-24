
import React, { useState } from 'react';
import { 
  Fingerprint, 
  ShieldCheck, 
  Calendar, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  Zap,
  Lock
} from 'lucide-react';
import { ViewType } from '../App';

interface NINVerificationProps {
  onNavigate: (view: ViewType) => void;
}

type VerificationStatus = 'idle' | 'processing' | 'success' | 'error';

const NINVerification: React.FC<NINVerificationProps> = ({ onNavigate }) => {
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const [nin, setNin] = useState('');
  const [dob, setDob] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (nin.length !== 11) {
      alert("NIN must be exactly 11 digits.");
      return;
    }
    
    setStatus('processing');
    
    // Simulate API call to NIMC
    setTimeout(() => {
      // Simulate 80% success rate for demo purposes
      if (Math.random() > 0.2) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 3000);
  };

  if (status === 'processing') {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-500">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
          <div className="relative w-32 h-32 bg-slate-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center">
            <Loader2 className="text-blue-500 animate-spin" size={64} />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black">Verifying your NIN</h2>
          <p className="text-slate-500 font-medium">Communicating with NIMC secure gateway...</p>
        </div>
        <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; transform: translateX(-100%); }
            50% { width: 70%; transform: translateX(50%); }
            100% { width: 0%; transform: translateX(200%); }
          }
        `}</style>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full glass p-10 rounded-[3.5rem] border border-emerald-500/20 text-center space-y-8 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
            <CheckCircle2 className="text-emerald-500" size={48} />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-white">NIN Verified Successfully</h2>
            <p className="text-slate-400">Your identity has been confirmed via the national database.</p>
          </div>
          
          <div className="p-6 bg-slate-950/50 rounded-3xl border border-white/5 text-left space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-[10px] font-black uppercase text-slate-500">Name</span>
              <span className="text-sm font-bold text-white uppercase tracking-tight">SEUN BABALOLA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase text-slate-500">Verification ID</span>
              <span className="text-sm font-bold text-emerald-400 tracking-tight">NIMC-8812-OK</span>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('registration-hub')}
            className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Proceed to Registrations <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full glass p-10 rounded-[3.5rem] border border-rose-500/20 text-center space-y-8 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-rose-500/20">
            <AlertCircle className="text-rose-500" size={48} />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-white">Verification Failed</h2>
            <p className="text-slate-400">We couldn't verify your NIN. Please check your details and try again.</p>
          </div>
          
          <div className="p-6 bg-rose-500/5 rounded-3xl border border-rose-500/10 text-left space-y-3">
             <h4 className="text-xs font-black uppercase tracking-widest text-rose-400 mb-2">Common reasons:</h4>
             <ul className="space-y-2">
                {['Incorrect 11-digit number', 'Date of Birth mismatch', 'NIMC system downtime', 'Poor internet connectivity'].map((reason, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                    <div className="w-1 h-1 bg-rose-500 rounded-full"></div> {reason}
                  </li>
                ))}
             </ul>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => setStatus('idle')}
              className="w-full py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all"
            >
              Try Again
            </button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="text-slate-500 font-bold text-sm hover:text-white transition-colors"
            >
              Go Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Info */}
        <div className="space-y-10 lg:sticky lg:top-32">
          <div className="space-y-4">
             <button 
              onClick={() => onNavigate('registration-hub')}
              className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest mb-6 transition-colors"
             >
              <ArrowLeft size={14} /> Back to Hub
             </button>
             <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">
               Verify Your <span className="text-blue-500">Identity</span>
             </h1>
             <p className="text-xl text-slate-400 leading-relaxed">
               Enter your National Identification Number (NIN) to unlock all Lagos government services.
             </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Why We Need This</h3>
            <div className="space-y-4">
              {[
                { title: 'One-time verification', desc: 'Verify once and use across all 15+ Lagos services.', icon: <Zap className="text-amber-400" /> },
                { title: 'Auto-fill Data', desc: 'Pre-fills your registration forms automatically from official records.', icon: <CheckCircle2 className="text-emerald-400" /> },
                { title: 'Security First', desc: 'Secure and encrypted communication with NIMC gateways.', icon: <Lock className="text-blue-400" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative glass p-8 lg:p-12 rounded-[3rem] border border-white/10">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                <Fingerprint size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Identity Portal</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">NIMC SECURE GATEWAY v4.2</p>
              </div>
            </div>

            <form onSubmit={handleVerify} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">National Identification Number (NIN)</label>
                <div className="relative">
                  <Fingerprint className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                  <input 
                    required
                    type="text" 
                    maxLength={11}
                    value={nin}
                    onChange={(e) => setNin(e.target.value.replace(/\D/g, ''))}
                    placeholder="1234 5678 901"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-5 pl-14 text-white text-xl font-bold tracking-[0.2em] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-800"
                  />
                </div>
                <div className="flex justify-between items-center px-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Exactly 11 digits required</p>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${nin.length === 11 ? 'text-emerald-500' : 'text-slate-700'}`}>{nin.length}/11</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                  <input 
                    required
                    type="date" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-5 pl-14 text-white focus:outline-none focus:border-blue-500 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex gap-4">
                 <ShieldCheck className="text-blue-500 shrink-0" size={20} />
                 <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                   By clicking verify, you authorize Lagosian to securely query the NIMC database for your identity information. This data is handled according to our Data Privacy Policy.
                 </p>
              </div>

              <button 
                type="submit"
                disabled={nin.length !== 11 || !dob}
                className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3"
              >
                Verify NIN <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NINVerification;
