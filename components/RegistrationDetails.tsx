
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  FileText, 
  HelpCircle, 
  History, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  User, 
  MapPin, 
  Briefcase,
  ShieldCheck,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { ViewType } from '../App';

interface RegistrationDetailsProps {
  onNavigate: (view: ViewType) => void;
}

const RegistrationDetails: React.FC<RegistrationDetailsProps> = ({ onNavigate }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['personal']));

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) newExpanded.delete(id);
    else newExpanded.add(id);
    setExpandedSections(newExpanded);
  };

  const timelineSteps = [
    { date: 'June 10, 2026', title: 'Registration Approved', desc: 'Your LIRS Tax Identification Number has been activated.', status: 'completed' },
    { date: 'June 09, 2026', title: 'Application Submitted', desc: 'Form successfully reviewed by LIRS portal.', status: 'completed' },
    { date: 'June 09, 2026', title: 'NIN Verified', desc: 'Identity cross-check with NIMC successful.', status: 'completed' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Navigation */}
      <button 
        onClick={() => onNavigate('my-registrations')}
        className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to My Registrations
      </button>

      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight">Tax <span className="text-blue-500">Registration Details</span></h1>
          <div className="flex items-center gap-3">
             <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
               <CheckCircle2 size={12} /> Completed
             </div>
             <span className="text-slate-600 text-xs font-bold">• Ref: LIRS-TX-2026-88192</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all hover:bg-white/10">
            <RefreshCw size={20} />
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
            <Download size={18} /> Download Certificate
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content: Info & Data */}
        <div className="lg:col-span-2 space-y-8">
          {/* Summary Information Card */}
          <div className="glass p-8 rounded-[2.5rem] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-opacity group-hover:opacity-[0.07]">
              <ShieldCheck size={120} className="text-emerald-500" />
            </div>
            
            <div className="space-y-1 relative z-10">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Type</div>
              <div className="text-sm font-bold text-white">LIRS Tax</div>
            </div>
            <div className="space-y-1 relative z-10">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">TIN</div>
              <div className="text-sm font-black text-blue-400 tracking-tight">1234567890</div>
            </div>
            <div className="space-y-1 relative z-10">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Reg. Date</div>
              <div className="text-sm font-bold text-white">Jun 10, 2026</div>
            </div>
            <div className="space-y-1 relative z-10">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Status</div>
              <div className="text-sm font-bold text-emerald-400 uppercase tracking-tighter">Active</div>
            </div>
          </div>

          {/* Submitted Information Sections */}
          <div className="space-y-4">
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Submitted Information</h3>
             
             {[
               { 
                 id: 'personal', 
                 title: 'Personal Information', 
                 icon: <User size={18} />,
                 data: [
                   { label: 'Full Legal Name', value: 'Seun Babalola' },
                   { label: 'Date of Birth', value: 'May 15, 1992' },
                   { label: 'Gender', value: 'Male' },
                   { label: 'NIN', value: '***********1234' }
                 ]
               },
               { 
                 id: 'contact', 
                 title: 'Contact Information', 
                 icon: <MapPin size={18} />,
                 data: [
                   { label: 'Current Address', value: '24, Kudirat Abiola Way, Oregun, Ikeja' },
                   { label: 'LGA', value: 'Ikeja' },
                   { label: 'Phone', value: '+234 803 000 0000' },
                   { label: 'Email', value: 'seun.b@example.ng' }
                 ]
               },
               { 
                 id: 'employment', 
                 title: 'Employment Information', 
                 icon: <Briefcase size={18} />,
                 data: [
                   { label: 'Employment Status', value: 'Employed' },
                   { label: 'Employer Name', value: 'Lagosian Tech Hub Ltd' },
                   { label: 'Job Title', value: 'Senior Software Engineer' },
                   { label: 'Income Range', value: '₦301k - ₦750k' }
                 ]
               }
             ].map((section) => (
               <div key={section.id} className={`glass rounded-3xl border transition-all overflow-hidden ${expandedSections.has(section.id) ? 'border-white/10 bg-white/[0.02]' : 'border-white/5 hover:border-white/10'}`}>
                 <button 
                   onClick={() => toggleSection(section.id)}
                   className="w-full flex items-center justify-between p-6 lg:px-8 text-left group"
                 >
                   <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${expandedSections.has(section.id) ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                       {section.icon}
                     </div>
                     <span className={`text-lg font-bold ${expandedSections.has(section.id) ? 'text-white' : 'text-slate-400'}`}>{section.title}</span>
                   </div>
                   {expandedSections.has(section.id) ? <ChevronUp size={20} className="text-slate-600" /> : <ChevronDown size={20} className="text-slate-600" />}
                 </button>
                 {expandedSections.has(section.id) && (
                   <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                     <div className="h-px bg-white/5 mb-8"></div>
                     <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                       {section.data.map((item, idx) => (
                         <div key={idx} className="space-y-1">
                           <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                           <div className="text-sm font-medium text-slate-200">{item.value}</div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
               </div>
             ))}
          </div>

          {/* Associated Documents */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Associated Documents</h3>
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/[0.08] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <FileText size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">TIN Certificate</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">PDF • 1.2 MB</div>
                    </div>
                  </div>
                  <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all group-hover:scale-110">
                    <Download size={18} />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Timeline & Quick Support */}
        <div className="space-y-8">
           {/* Timeline Card */}
           <div className="glass p-8 rounded-[2.5rem] border border-white/10 space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <History className="text-blue-400" size={20} />
                <h3 className="text-lg font-black uppercase tracking-tighter">Timeline</h3>
              </div>
              
              <div className="relative space-y-8">
                 {/* Vertical line */}
                 <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-white/5"></div>
                 
                 {timelineSteps.map((step, i) => (
                   <div key={i} className="relative flex gap-6 group">
                      <div className={`mt-1.5 w-6 h-6 rounded-full border-4 border-slate-950 z-10 flex items-center justify-center ${step.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-800'}`}>
                        <CheckCircle2 size={12} className="text-slate-950 font-black" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{step.date}</div>
                        <h4 className="font-bold text-slate-200 text-sm">{step.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Support & Actions Card */}
           <div className="glass p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <h3 className="text-lg font-black uppercase tracking-tighter">Actions</h3>
              <div className="space-y-3">
                 <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                   <RefreshCw size={16} /> Update Information
                 </button>
                 <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                   <ExternalLink size={16} /> View on LIRS Portal
                 </button>
                 <button 
                  onClick={() => onNavigate('help')}
                  className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-blue-400 hover:bg-blue-600/10 transition-all flex items-center justify-center gap-2"
                 >
                   <HelpCircle size={16} /> Get Support
                 </button>
              </div>
              
              <div className="pt-4 border-t border-white/5 space-y-4">
                 <div className="flex gap-3 items-start p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                    <Info className="text-amber-500 shrink-0 mt-0.5" size={16} />
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      LIRS requires you to update your information annually or whenever there's a significant change in your income.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDetails;
