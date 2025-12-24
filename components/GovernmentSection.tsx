
import React from 'react';
import { Landmark, ArrowRight, Shield, BarChart3, Users } from 'lucide-react';

const GovernmentSection: React.FC = () => {
  const govBenefits = [
    { text: 'Increased taxpayer registration', icon: <Landmark size={18} /> },
    { text: 'Higher payment compliance rates', icon: <BarChart3 size={18} /> },
    { text: 'Direct citizen communication channel', icon: <Users size={18} /> },
    { text: 'Reduced administrative burden', icon: <Shield size={18} /> },
    { text: 'Better data for urban planning', icon: <BarChart3 size={18} /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-12 lg:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
                Public-Private Partnership
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">Partnering for a <span className="text-emerald-400">Smarter Lagos</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Lagosian is designed to complement Lagos State Government's digital transformation goals. We help increase tax compliance, improve citizen engagement, and streamline service delivery.
              </p>
              <button className="flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20 group">
                Contact Us for Partnership <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold mb-6">Benefits for Government:</h3>
              <div className="grid gap-4">
                {govBenefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-emerald-500">{item.icon}</div>
                    <span className="text-slate-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;
