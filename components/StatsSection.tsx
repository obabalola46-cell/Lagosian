
import React from 'react';
import { Star, Quote } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '10,000+', label: 'Active Users' },
    { value: '₦500M+', label: 'Transactions Processed' },
    { value: '50,000+', label: 'Registrations Completed' },
    { value: '4.8★', label: 'App Rating' }
  ];

  const testimonials = [
    {
      quote: "I used to spend my Saturdays running between government offices. Now I do everything from my phone in minutes. Lagosian is a game-changer.",
      name: "Adaobi Nnamdi",
      title: "Business Owner, Lekki",
      img: "https://picsum.photos/seed/ada/100/100"
    },
    {
      quote: "Finally, one app that actually works! Paid my LAWMA and tax in under 5 minutes. The reminders have saved me from late fees twice already.",
      name: "Tunde Bakare",
      title: "Software Developer, Yaba",
      img: "https://picsum.photos/seed/tunde/100/100"
    },
    {
      quote: "As a new Lagos resident, Lagosian helped me understand and complete all my registrations. The updates feed keeps me informed about my new city.",
      name: "Amina Ibrahim",
      title: "Marketing Manager, Victoria Island",
      img: "https://picsum.photos/seed/amina/100/100"
    }
  ];

  return (
    <section className="py-24 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12">Trusted by <span className="text-blue-500">Lagosians</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-black text-white">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-[2.5rem] flex flex-col justify-between relative">
              <Quote size={40} className="absolute top-6 right-8 text-blue-500/10" />
              <div className="space-y-4 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-lg text-slate-300 italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-500/20" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
