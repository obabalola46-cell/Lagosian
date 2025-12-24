
import React from 'react';
import { Watch, Calendar, Key, ShieldCheck, Globe, FileText } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Save Time',
      desc: '15+ hours saved monthly on government admin tasks',
      icon: <Watch className="text-blue-400" size={24} />
    },
    {
      title: 'Never Miss Deadlines',
      desc: 'Smart reminders before every due date',
      icon: <Calendar className="text-emerald-400" size={24} />
    },
    {
      title: 'One Login',
      desc: 'Single account for all Lagos services',
      icon: <Key className="text-amber-400" size={24} />
    },
    {
      title: 'Secure & Private',
      desc: 'Bank-level encryption for your data',
      icon: <ShieldCheck className="text-indigo-400" size={24} />
    },
    {
      title: '24/7 Access',
      desc: 'Complete transactions anytime, anywhere',
      icon: <Globe className="text-cyan-400" size={24} />
    },
    {
      title: 'Digital Receipts',
      desc: 'All your documents and receipts in one place',
      icon: <FileText className="text-rose-400" size={24} />
    }
  ];

  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Why Lagosians <span className="text-blue-500">Love Us</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
