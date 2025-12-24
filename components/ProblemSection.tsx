
import React from 'react';
import { Layers, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Too Many Websites',
      description: "LIRS for tax, LASRRA for registration, LAWMA for waste — you're juggling 5+ platforms just to stay compliant.",
      icon: <Layers className="text-blue-500" size={32} />,
      color: 'blue'
    },
    {
      title: 'Hours Wasted in Queues',
      description: 'Physical visits, long queues, and repeated trips. The average Lagosian spends 15+ hours monthly on government admin.',
      icon: <Clock className="text-emerald-500" size={32} />,
      color: 'emerald'
    },
    {
      title: 'Missed Deadlines & Fines',
      description: 'No reminders, scattered information, and penalties that could have been avoided with timely notifications.',
      icon: <AlertTriangle className="text-amber-500" size={32} />,
      color: 'amber'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            Tired of the Lagos Government Service <span className="text-blue-500">Hustle?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We know the struggle. Navigating civic duties in Lagos shouldn't feel like another full-time job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] hover:border-white/20 transition-all group">
              <div className={`mb-6 p-4 rounded-2xl bg-${problem.color}-500/10 inline-block transition-transform group-hover:scale-110`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-slate-300 inline-flex items-center gap-2">
            There's a better way. Meet <span className="text-white font-extrabold">LAGOSIAN.</span> 
            <ArrowRight className="text-blue-500" />
          </p>
        </div>
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
    </section>
  );
};

export default ProblemSection;
