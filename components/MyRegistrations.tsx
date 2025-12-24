
import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Search, 
  Filter,
  MoreVertical,
  Gavel,
  IdCard,
  Trash2,
  Calendar,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import { ViewType } from '../App';

interface MyRegistrationsProps {
  onNavigate: (view: ViewType) => void;
}

type RegistrationStatus = 'All' | 'Completed' | 'In Progress' | 'Pending';

const MyRegistrations: React.FC<MyRegistrationsProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<RegistrationStatus>('All');

  const registrations = [
    {
      id: 'tax-1',
      service: 'Tax Registration (LIRS)',
      status: 'Completed',
      dateLabel: 'Completed Date',
      dateValue: 'June 10, 2026',
      detailLabel: 'TIN',
      detailValue: '1234567890',
      icon: <Gavel className="text-blue-400" />,
      color: 'blue'
    },
    {
      id: 'lasrra-1',
      service: 'Resident Registration (LASRRA)',
      status: 'In Progress',
      dateLabel: 'Submitted',
      dateValue: 'June 14, 2026',
      detailLabel: 'Application ID',
      detailValue: 'LSR-2026-99812',
      expected: 'June 18-20, 2026',
      icon: <IdCard className="text-emerald-400" />,
      color: 'emerald'
    },
    {
      id: 'lawma-1',
      service: 'Waste Management (LAWMA)',
      status: 'Completed', // 'Active' maps to Completed for filter logic
      displayStatus: 'Active',
      dateLabel: 'Registered',
      dateValue: 'May 20, 2026',
      detailLabel: 'PSP',
      detailValue: 'CleanLagos Solutions Ltd',
      icon: <Trash2 className="text-amber-400" />,
      color: 'amber'
    }
  ];

  const filteredRegs = activeFilter === 'All' 
    ? registrations 
    : registrations.filter(r => r.status === activeFilter || (activeFilter === 'Completed' && r.status === 'Completed'));

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight">My <span className="text-blue-500">Registrations</span></h1>
            <p className="text-slate-500 font-medium">Track and manage all your registration applications and digital IDs.</p>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('registration-hub')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 w-fit mb-2"
        >
          New Registration <ChevronRight size={18} />
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/5 p-2 rounded-[2rem]">
        <div className="flex items-center gap-1 p-1 w-full sm:w-auto">
          {['All', 'Completed', 'In Progress', 'Pending'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as RegistrationStatus)}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${activeFilter === filter ? 'bg-white/10 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64 pr-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            placeholder="Search my records..."
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
      </div>

      {/* Registration List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRegs.map((reg) => (
          <div key={reg.id} className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-${reg.color}-500/20 to-blue-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
            <div className="relative glass p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 shadow-xl transition-transform group-hover:scale-110">
                    {reg.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg group-hover:text-blue-400 transition-colors">{reg.service}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {reg.status === 'Completed' ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                          <CheckCircle2 size={12} /> {reg.displayStatus || 'Completed'}
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-wider">
                          <Clock size={12} className="animate-pulse" /> {reg.status}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button className="p-2 text-slate-600 hover:text-white transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8 p-6 bg-white/[0.02] rounded-3xl border border-white/5">
                <div className="space-y-1">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{reg.dateLabel}</div>
                  <div className="text-sm font-bold text-slate-200">{reg.dateValue}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{reg.detailLabel}</div>
                  <div className="text-sm font-black text-white tracking-tight">{reg.detailValue}</div>
                </div>
                {reg.expected && (
                  <div className="col-span-2 space-y-1 pt-2 border-t border-white/5">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Estimated Completion</div>
                    <div className="text-sm font-bold text-emerald-400">{reg.expected}</div>
                  </div>
                )}
              </div>

              <div className="mt-auto flex items-center gap-3">
                {reg.service.includes('Tax') && (
                  <>
                    <button 
                      onClick={() => onNavigate('registration-details')}
                      className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={14} /> View Details
                    </button>
                    <button className="flex-1 py-3 bg-blue-600/10 border border-blue-500/20 rounded-xl text-xs font-bold text-blue-400 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
                      <Download size={14} /> Download Certificate
                    </button>
                  </>
                )}
                {reg.service.includes('LASRRA') && (
                  <button 
                    onClick={() => onNavigate('registration-details')}
                    className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                  >
                    <Clock size={16} /> Track Application Status
                  </button>
                )}
                {reg.service.includes('LAWMA') && (
                  <>
                    <button 
                      onClick={() => onNavigate('registration-details')}
                      className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={14} /> View Details
                    </button>
                    <button className="flex-1 py-3 bg-amber-600/10 border border-amber-500/20 rounded-xl text-xs font-bold text-amber-400 hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center gap-2">
                      <Calendar size={14} /> Update Schedule
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Empty State / Add Card */}
        <button 
          onClick={() => onNavigate('registration-hub')}
          className="p-8 rounded-[2.5rem] border-2 border-dashed border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-blue-500/30 transition-all group flex flex-col items-center justify-center text-center gap-4 min-h-[350px]"
        >
          <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-600 group-hover:text-blue-500 group-hover:scale-110 transition-all">
            <FileText size={32} />
          </div>
          <div>
            <h4 className="font-bold text-slate-400 group-hover:text-white transition-colors">Apply for more services</h4>
            <p className="text-xs text-slate-600 mt-1">Vehicle reg, Business permits & more</p>
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
            Open Registration Hub
          </div>
        </button>
      </div>

      {/* Helpful Info Section */}
      <div className="bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10">
        <div className="w-20 h-20 bg-blue-600/10 rounded-[2rem] flex items-center justify-center text-blue-500 shrink-0">
          <AlertCircle size={40} />
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Need help with a registration?</h3>
          <p className="text-slate-400 leading-relaxed">If you notice any errors in your completed registrations or if an application has been processing for longer than expected, please visit our dedicated support center.</p>
          <div className="flex wrap justify-center md:justify-start gap-4 pt-2">
            <button onClick={() => onNavigate('help')} className="text-blue-400 font-bold text-sm hover:underline flex items-center gap-2">
              Visit Help Center <ChevronRight size={16} />
            </button>
            <button className="text-slate-500 font-bold text-sm hover:text-white transition-colors">
              Contact LIRS/LASRRA directly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRegistrations;
