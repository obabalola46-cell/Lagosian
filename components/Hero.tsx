
import React from 'react';
import { Play, CheckCircle, Smartphone } from 'lucide-react';

interface HeroProps {
  onGetStarted?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Lagos State Digital Transformation
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Lagos in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Pocket.</span>
              <br />
              <span className="text-slate-300 text-4xl lg:text-5xl font-semibold">One App for All Your Lagos Services.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
              Register for government services, pay your Lagos duties, and stay updated with verified news — all in one place. Join 10,000+ Lagosians simplifying their civic life.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={onGetStarted}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 hover:shadow-blue-500/20 hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get Started — It's Free
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                <Play size={20} fill="currentColor" />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                { label: 'Free to use' },
                { label: 'Secure & Private' },
                { label: 'Government Aligned' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual elements */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
            
            <div className="relative z-10 animate-float">
               <div className="mx-auto w-[280px] lg:w-[320px] aspect-[9/19] rounded-[3rem] border-[8px] border-slate-900 bg-slate-950 overflow-hidden shadow-2xl shadow-blue-500/20">
                {/* Mockup Content */}
                <div className="p-6 h-full flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div className="text-xs text-slate-500">Welcome, Tunde</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[10px] text-blue-400 font-bold">TB</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-2xl space-y-2">
                    <div className="text-[10px] text-blue-100/60 font-medium">Lagosian Digital ID</div>
                    <div className="text-lg font-bold">LAS-9823-QRT</div>
                    <div className="w-full h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="w-10/12 h-4 bg-white/20 rounded"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: '💰', label: 'Payments' },
                      { icon: '📄', label: 'Docs' },
                      { icon: '📰', label: 'News' },
                      { icon: '⚖️', label: 'Tax' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-xl flex flex-col items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-[10px] text-slate-400 font-bold">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="text-[10px] text-slate-500 font-bold mb-2">RECENT NOTIFICATIONS</div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400">
                        LAWMA Bill Paid Successfully
                      </div>
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400">
                        New Traffic Alert: Third Mainland Bridge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-1/4 -right-4 lg:right-0 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500">
                  ₦
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Duty Paid</div>
                  <div className="text-sm font-bold text-emerald-400">₦2,500 LAWMA</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 -left-4 lg:left-0 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Verified</div>
                  <div className="text-sm font-bold text-blue-400">NIN Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
