
import React, { useState } from 'react';
import { 
  Search, 
  LifeBuoy, 
  CreditCard, 
  UserPlus, 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  MessageCircle, 
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Info
} from 'lucide-react';
import { ViewType } from '../App';

interface DashboardHelpProps {
  onNavigate: (view: ViewType) => void;
}

const DashboardHelp: React.FC<DashboardHelpProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'How do I download my Tax (TIN) certificate?',
      a: 'Go to "My Registrations" under the Registration menu. Locate your completed Tax Registration and click the "Download Certificate" button.'
    },
    {
      q: 'Why is my LASRRA registration still "In Progress"?',
      a: 'LASRRA registrations usually take 2-5 business days for initial state verification. Once approved, your digital ID will be updated automatically.'
    },
    {
      q: 'Can I pay for multiple LAWMA accounts?',
      a: 'Yes, you can register multiple properties under your single profile. Each property will have its own billing schedule and PSP assignment.'
    },
    {
      q: 'Is my card information stored on Lagosian?',
      a: 'No. We use secure, PCI-DSS compliant payment gateways. We only store an encrypted token provided by the gateway if you choose to "Save Card" for future use.'
    },
    {
      q: 'How do I update my residential address?',
      a: 'Navigate to "My Profile" and click "Edit Profile". Please note that some address changes may require re-verification of certain registrations like LAWMA.'
    }
  ];

  const quickActions = [
    { name: 'Report a Problem', icon: <AlertCircle size={20} />, color: 'rose', view: 'help' as const },
    { name: 'Payment Issues', icon: <CreditCard size={20} />, color: 'emerald', view: 'payments' as const },
    { name: 'Registration Help', icon: <UserPlus size={20} />, color: 'blue', view: 'registration-hub' as const },
    { name: 'Contact Support', icon: <MessageSquare size={20} />, color: 'indigo', view: 'help' as const },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-white flex items-center gap-4">
               <HelpCircle className="text-blue-500" size={32} /> Help & <span className="text-blue-500">Support</span>
            </h1>
            <p className="text-slate-500 font-medium">Find answers or reach out to our dedicated support team.</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative group max-w-2xl">
         <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[2rem] blur opacity-50 group-focus-within:opacity-100 transition duration-500"></div>
         <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-[2rem] px-6 h-16 group-focus-within:border-blue-500 transition-all shadow-2xl">
            <Search className="text-slate-500 group-focus-within:text-blue-500 mr-4 transition-colors" size={24} />
            <input 
              type="text" 
              placeholder="How can we help you today?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none w-full font-medium"
            />
         </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
         {/* Left Side: Quick Actions & FAQs */}
         <div className="lg:col-span-2 space-y-10">
            {/* Quick Actions */}
            <div className="space-y-6">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Quick Actions</h3>
               <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, i) => (
                    <button 
                      key={i}
                      onClick={() => onNavigate(action.view)}
                      className="p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.08] transition-all group flex flex-col gap-4 text-left"
                    >
                       <div className={`w-12 h-12 rounded-2xl bg-${action.color}-500/10 flex items-center justify-center text-${action.color}-400 shadow-lg transition-transform group-hover:scale-110`}>
                          {action.icon}
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="font-bold text-white group-hover:text-blue-400 transition-colors">{action.name}</span>
                          <ArrowRight size={14} className="text-slate-700 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                       </div>
                    </button>
                  ))}
               </div>
            </div>

            {/* Popular FAQs */}
            <div className="space-y-6">
               <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Popular FAQs</h3>
               <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className={`glass rounded-2xl border transition-all overflow-hidden ${openFaq === i ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/5'}`}>
                       <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left group"
                       >
                          <span className={`font-bold transition-colors ${openFaq === i ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>{faq.q}</span>
                          {openFaq === i ? <ChevronUp size={20} className="text-blue-500" /> : <ChevronDown size={20} className="text-slate-600" />}
                       </button>
                       {openFaq === i && (
                         <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                           {faq.a}
                         </div>
                       )}
                    </div>
                  ))}
               </div>
               <button onClick={() => onNavigate('help')} className="text-blue-500 font-bold text-sm hover:underline flex items-center gap-2 ml-1">
                  View all Help Center topics <ArrowRight size={14} />
               </button>
            </div>
         </div>

         {/* Right Side: Contact & Feedback */}
         <div className="space-y-8">
            {/* Contact Options */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 space-y-8">
               <h3 className="text-xl font-black text-white">Direct Support</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                     <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                     </div>
                     <div>
                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email Support</div>
                        <a href="mailto:support@lagosian.ng" className="text-sm font-bold text-white hover:text-blue-400 transition-colors">support@lagosian.ng</a>
                        <p className="text-[10px] text-slate-600 mt-1">Response: ~4 hours</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 opacity-50 cursor-not-allowed">
                     <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500">
                        <MessageCircle size={20} />
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Live Chat</div>
                           <span className="text-[8px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded font-black">SOON</span>
                        </div>
                        <div className="text-sm font-bold text-slate-600 italic">Starting Q4 2026</div>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 opacity-50 cursor-not-allowed">
                     <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500">
                        <PhoneCall size={20} />
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Phone Support</div>
                           <span className="text-[8px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded font-black">SOON</span>
                        </div>
                        <div className="text-sm font-bold text-slate-600 italic">Voice verification only</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Feedback Section */}
            <div className="p-8 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/10 space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                  <MessageSquare size={80} className="text-indigo-500" />
               </div>
               <div className="relative z-10 space-y-4">
                  <h4 className="font-bold text-white text-lg">Help us improve</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                     Have suggestions? We'd love to hear from you. Your feedback helps shape the future of Lagosian.
                  </p>
                  <button className="w-full py-4 bg-white text-indigo-950 font-black text-xs rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                     Give Feedback
                  </button>
               </div>
            </div>

            {/* Info Tip */}
            <div className="p-6 rounded-[2rem] bg-amber-500/5 border border-amber-500/10 flex gap-4">
               <Info className="text-amber-500 shrink-0 mt-0.5" size={18} />
               <p className="text-[10px] text-slate-500 leading-relaxed font-medium uppercase tracking-widest">
                  Official Lagosian staff will NEVER ask for your full password or complete credit card details. Stay safe!
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DashboardHelp;
