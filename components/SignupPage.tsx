
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Smartphone, ShieldCheck, Zap, ArrowRight, Mail, User, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';
import { GoogleGenAI } from "@google/genai";

interface SignupPageProps {
  onNavigate: (view: ViewType) => void;
}

const AIDynamicSignupBackground: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateBg = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: [{ parts: [{ text: 'Futuristic day view of Lagos, sunlight, high-tech glass skyscrapers, digital connectivity lines in the air, green energy, bright and optimistic palette, high resolution, digital art style' }] }],
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("AI Generation failed:", error);
        setImageUrl("https://images.unsplash.com/photo-1542156822-6924d1a719c9?q=80&w=1600&auto=format&fit=crop");
      } finally {
        setLoading(false);
      }
    };

    generateBg();
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-slate-950">
      <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply z-10"></div>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
          <Loader2 className="text-emerald-500 animate-spin" size={48} />
        </div>
      ) : (
        <img 
          src={imageUrl || ''} 
          className="w-full h-full object-cover grayscale-[0.2] transition-opacity duration-1000"
          alt="Lagos Day Skyline"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
    </div>
  );
};

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const passwordValidation = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password)
  };

  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      alert("Registration Successful!");
      onNavigate('login');
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 animate-in fade-in duration-700 overflow-hidden">
      <div className="hidden lg:flex relative bg-slate-950 flex-col justify-between p-16 overflow-hidden">
        <AIDynamicSignupBackground />
        
        <div className="relative z-10">
          <div 
            className="flex items-center gap-3 cursor-pointer group mb-12"
            onClick={() => onNavigate('home')}
          >
            <Logo size={48} />
            <span className="text-2xl font-extrabold tracking-tighter text-white uppercase">LAGOSIAN</span>
          </div>
          
          <div className="space-y-12 max-w-md">
            <h2 className="text-5xl font-black tracking-tighter leading-tight text-white drop-shadow-2xl">
              Join thousands of <span className="text-blue-400">Lagosians.</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { title: 'Register for government services', icon: <ShieldCheck className="text-blue-400" /> },
                { title: 'Pay all Lagos duties', icon: <Zap className="text-emerald-400" /> },
                { title: 'Stay informed with verified news', icon: <Smartphone className="text-amber-400" /> }
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                    {benefit.icon}
                  </div>
                  <span className="text-white font-bold drop-shadow-md">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex gap-6 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-emerald-600/5 blur-[100px] rounded-full"></div>

        <div className="max-w-md w-full space-y-8 relative z-10">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-black tracking-tight">Create your account</h1>
            <div className="flex items-center justify-center lg:justify-start gap-4">
               <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Step {step} of 3</div>
               <div className="flex gap-1">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-1 rounded-full transition-all ${s === step ? 'w-8 bg-blue-600' : 'w-4 bg-white/10'}`}></div>
                  ))}
               </div>
            </div>
          </div>

          <form className="space-y-8" onSubmit={handleStepSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                     <Smartphone className="text-blue-400" size={24} /> Phone Verification
                  </h3>
                  <p className="text-slate-400 text-sm">Enter your phone number to receive a verification code.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold border-r border-white/10 pr-4">
                      +234
                    </div>
                    <input 
                      required
                      type="tel" 
                      placeholder="803 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-20 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Send Verification Code <ArrowRight size={20} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Verify your phone</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We sent a 6-digit code to <span className="text-white font-bold">+234 {phone}</span>. Please enter it below.
                  </p>
                </div>
                
                <div className="flex gap-2 justify-between">
                  {otp.map((digit, i) => (
                    <input 
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-12 h-16 bg-slate-950 border border-white/10 rounded-xl text-center text-2xl font-black text-blue-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  ))}
                </div>

                <div className="text-center space-y-4">
                  <div className="text-sm text-slate-500">
                    Resend code in <span className="text-blue-500 font-bold">00:{timer.toString().padStart(2, '0')}</span>
                  </div>
                  {timer === 0 && (
                    <button type="button" onClick={() => setTimer(59)} className="text-blue-500 font-bold hover:underline">Resend Code</button>
                  )}
                </div>

                <div className="space-y-4">
                  <button 
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    Verify & Continue
                  </button>
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full text-slate-500 text-sm font-bold hover:text-white transition-colors"
                  >
                    Use a different number
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                     <User className="text-blue-400" size={24} /> Complete your profile
                  </h3>
                  <p className="text-slate-400 text-sm">Enter your details exactly as they appear on your official documents.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="Tunde Bakare"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        required
                        type="email" 
                        placeholder="tunde@example.ng"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        required
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-12 pr-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                       <div className={`flex items-center gap-2 text-[10px] font-bold ${passwordValidation.length ? 'text-emerald-400' : 'text-slate-600'}`}>
                          <CheckCircle size={12} /> 8+ Characters
                       </div>
                       <div className={`flex items-center gap-2 text-[10px] font-bold ${passwordValidation.uppercase ? 'text-emerald-400' : 'text-slate-600'}`}>
                          <CheckCircle size={12} /> One Uppercase
                       </div>
                       <div className={`flex items-center gap-2 text-[10px] font-bold ${passwordValidation.number ? 'text-emerald-400' : 'text-slate-600'}`}>
                          <CheckCircle size={12} /> One Number
                       </div>
                       <div className={`flex items-center gap-2 text-[10px] font-bold ${passwordValidation.special ? 'text-emerald-400' : 'text-slate-600'}`}>
                          <CheckCircle size={12} /> One Special Char
                       </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <button 
                      type="submit"
                      disabled={!Object.values(passwordValidation).every(v => v)}
                      className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>

          <div className="text-center space-y-4">
            <p className="text-slate-400">
              Already have an account?{' '}
              <button 
                onClick={() => onNavigate('login')}
                className="text-blue-500 font-bold hover:underline underline-offset-4"
              >
                Log in
              </button>
            </p>
            <div className="pt-4">
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mx-auto"
              >
                <ArrowLeft size={14} /> Back to Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
