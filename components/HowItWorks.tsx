
import React from 'react';
import { UserPlus, ClipboardCheck, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up with your phone number and verify your identity using your NIN. It takes less than 5 minutes.',
      icon: <UserPlus className="text-blue-400" size={32} />
    },
    {
      number: '02',
      title: 'Complete Your Registrations',
      description: 'Choose the services you need — tax, resident ID, waste management — and complete them all from one dashboard.',
      icon: <ClipboardCheck className="text-emerald-400" size={32} />
    },
    {
      number: '03',
      title: 'Pay & Stay Updated',
      description: 'View your obligations, make payments, and receive real-time updates. Your Lagos life, simplified.',
      icon: <Zap className="text-amber-400" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Get Started in <span className="text-blue-500">3 Simple Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative group text-center space-y-6">
              <div className="mx-auto w-20 h-20 rounded-[2rem] bg-slate-900 border border-white/10 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                {step.icon}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-sm font-black border-4 border-slate-950">
                  {step.number}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center space-y-6">
          <p className="text-xl text-slate-300 font-semibold">Ready to simplify your Lagos life?</p>
          <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 shadow-xl shadow-blue-500/20 transition-all">
            Create Free Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
