
import React from 'react';
import { 
  Fingerprint, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Gavel, 
  IdCard, 
  Trash2, 
  Car, 
  Building2, 
  Map,
  ChevronRight,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { ViewType } from '../App';

interface RegistrationHubProps {
  onNavigate: (view: ViewType) => void;
}

const RegistrationHub: React.FC<RegistrationHubProps> = ({ onNavigate }) => {
  const registrations = [
    {
      id: 'tax',
      title: 'Tax Registration (LIRS)',
      desc: 'Register as a taxpayer and get your Tax Identification Number (TIN). Essential for businesses and high-income earners.',
      status: 'Incomplete',
      time: '10 mins',
      icon: <Gavel className="text-blue-400" />,
      action: 'Continue Registration'
    },
    {
      id: 'lasrra',
      title: 'Resident Registration (LASRRA)',
      desc: 'Get your official Lagos Resident Identification Card to access social amenities and state-specific benefits.',
      status: 'Processing',
      time: '15 mins',
      icon: <IdCard className="text-emerald-400" />,
      action: 'Start Registration'
    },
    {
      id: 'lawma',
      title: 'Waste Management (LAWMA)',
      desc: 'Register your property for waste collection services and get assigned to your local PSP operator.',
      status: 'Incomplete',
      time: '5 mins',
      icon: <Trash2 className="text-amber-400" />,
      action: 'Register Property'
    }
  ];

  const comingSoon = [
    { title: 'Vehicle Registration', icon: <Car size={20} /> },
    { title: 'Business Permits', icon: <Building2 size={20} /> },
    { title: 'Land Use Registration', icon: <Map size={20} /> },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="space-y-4">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </button>
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight">Registration <span className="text-blue-500">Hub</span></h1>
          <p className="text-slate-500 font-medium leading-relaxed">Register for Lagos government services from one place. Simple, unified, and secure.</p>
        </div>
      </div>

      {/* NIN Status Card */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        <div className="relative glass p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 shadow-xl border border-emerald-500/20">
              <Fingerprint size={32} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-black">Identity Verified</h3>
                <CheckCircle2 className="text-emerald-500" size={18} />
              </div>
              <p className="text-slate-400 text-sm">Your National Identity Number (NIN) is successfully linked and verified.</p>
              <div className="flex items-center gap-4 mt-3">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">NIN: ***********1234</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Verified: Jun 3, 2026</div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('nin-verify')}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Manage Identity
          </button>
        </div>
      </div>

      {/* Available Services */}
      <div className="space-y-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">Available Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registrations.map((reg) => (
            <div key={reg.id} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 flex flex-col h-full group hover:bg-white/[0.07] transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/5 transition-transform group-hover:scale-110">
                  {reg.icon}
                </div>
                <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${reg.status === 'Completed' || reg.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                  {reg.status}
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h4 className="text-xl font-black text-white">{reg.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {reg.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest pt-4">
                  <Clock size={12} /> Time to complete: {reg.time}
                </div>
              </div>
              <button 
                onClick={() => {
                  if (reg.id === 'tax') onNavigate('tax-register');
                  if (reg.id === 'lasrra') onNavigate('lasrra-register');
                  if (reg.id === 'lawma') onNavigate('lawma-register');
                }}
                className="w-full mt-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn"
              >
                {reg.action} <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-3 ml-1">
          <Sparkles className="text-blue-500" size={18} />
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Coming Soon</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {comingSoon.map((item, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] border border-white/5 border-dashed flex items-center gap-6 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-60">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Q4 2026</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationHub;
