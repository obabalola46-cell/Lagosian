
import React from 'react';
import { UserCheck, CreditCard, Bell, ChevronRight, Bus } from 'lucide-react';

interface FeaturesSectionProps {
  onSeeAllFeatures?: () => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onSeeAllFeatures }) => {
  const features = [
    {
      id: 'features',
      title: 'Smart Registration',
      subtitle: 'Register Once, Access Everything',
      description: 'Complete your NIN verification once and instantly register for LIRS Tax, LASRRA Resident ID, LAWMA, and more. No more filling the same forms repeatedly.',
      points: [
        'Single KYC process for all services',
        'Digital Lagosian ID generation',
        'Track all your registration statuses',
        'Secure document storage'
      ],
      icon: <UserCheck className="text-blue-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Digital Transit',
      subtitle: 'Tap to Pay on BRT & Trains',
      description: 'The futuristic way to move around Lagos. Link your Lagos Move transit card to your Lagosian wallet and pay for bus and train rides with a single tap.',
      points: [
        'Virtual Transit Card in your pocket',
        'Contactless payments for BRT & Metro',
        'Real-time trip history tracking',
        'Auto-topup when balance is low'
      ],
      icon: <Bus className="text-emerald-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000',
      reverse: true
    },
    {
      title: 'Unified Payments',
      subtitle: 'Pay All Lagos Duties in One Place',
      description: 'From tax payments to LAWMA bills to Land Use Charge — view all your obligations and pay instantly with your preferred method.',
      points: [
        'All Lagos payments in one dashboard',
        'Multiple payment options (Card, Transfer, USSD)',
        'Automated payment reminders',
        'Digital receipts & transaction history'
      ],
      icon: <CreditCard className="text-indigo-500" size={24} />,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <section className="py-24 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            Everything You Need. <span className="text-emerald-400">One Simple Platform.</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Lagosian brings together registration, payments, and information into a seamless experience designed for real Lagosians.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${feature.reverse ? 'lg:order-last' : ''}`}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  {feature.icon}
                  <span className="text-white font-bold">{feature.title}</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold">{feature.subtitle}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{feature.description}</p>
                
                <ul className="grid sm:grid-cols-2 gap-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="w-5 h-5 mt-1 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={onSeeAllFeatures}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all group"
                >
                  Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full"></div>
                <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
