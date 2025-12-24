
import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Printer, 
  BadgeCheck, 
  QrCode, 
  ShieldCheck, 
  Info,
  Landmark,
  Eye
} from 'lucide-react';
import { ViewType } from '../App';

interface LagosianIDProps {
  onNavigate: (view: ViewType) => void;
}

const LagosianID: React.FC<LagosianIDProps> = ({ onNavigate }) => {
  const userData = {
    name: 'Seun Babalola',
    id: 'LAG-2024-88923',
    dob: '15/05/1992',
    lga: 'Ikeja',
    issued: 'January 2024',
    status: 'Verified'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
          <h1 className="text-4xl font-black tracking-tight text-white">My <span className="text-blue-500">Lagosian ID</span></h1>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all hover:bg-white/10">
              <Eye size={20} />
           </button>
           <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2">
              <Share2 size={18} /> Share
           </button>
        </div>
      </div>

      {/* ID Card Display */}
      <div className="flex justify-center py-10">
         <div className="relative group max-w-lg w-full">
            {/* Pulsing Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            {/* The ID Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[320px] sm:h-[350px]">
               {/* Top Security Strip */}
               <div className="h-2 bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 opacity-80"></div>
               
               {/* Card Header */}
               <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg text-white">
                        <Landmark size={18} />
                     </div>
                     <span className="text-sm font-black tracking-[0.2em] uppercase text-white">Lagosian Digital ID</span>
                  </div>
                  <div className="text-[10px] font-black uppercase text-blue-500 tracking-widest bg-blue-500/10 px-2 py-1 rounded">E-Identity</div>
               </div>

               {/* Card Body */}
               <div className="p-6 sm:p-8 flex-1 flex items-center gap-6 sm:gap-10">
                  {/* Photo Area */}
                  <div className="relative group/photo shrink-0">
                     <div className="absolute -inset-1 bg-white/10 rounded-2xl blur-sm group-hover/photo:opacity-100 opacity-50 transition-opacity"></div>
                     <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-slate-800 rounded-2xl border-2 border-white/10 overflow-hidden shadow-xl">
                        <img 
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" 
                          alt="Profile" 
                          className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                        />
                     </div>
                  </div>

                  {/* Details Area */}
                  <div className="flex-1 space-y-4">
                     <div className="space-y-0.5">
                        <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Full Legal Name</div>
                        <div className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">{userData.name}</div>
                     </div>

                     <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-0.5">
                           <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Identity ID</div>
                           <div className="text-xs font-mono font-black text-blue-400">{userData.id}</div>
                        </div>
                        <div className="space-y-0.5">
                           <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Date of Birth</div>
                           <div className="text-xs font-bold text-slate-200">{userData.dob}</div>
                        </div>
                        <div className="space-y-0.5">
                           <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">LGA of Residence</div>
                           <div className="text-xs font-bold text-slate-200">{userData.lga}</div>
                        </div>
                        <div className="space-y-0.5">
                           <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Issued Date</div>
                           <div className="text-xs font-bold text-slate-200">{userData.issued}</div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Card Footer */}
               <div className="p-6 bg-slate-950/50 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-3">
                     <div className="p-1.5 bg-white rounded-lg shadow-lg">
                        <QrCode size={36} className="text-slate-900" />
                     </div>
                     <div className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase leading-relaxed max-w-[140px]">
                        Scan to verify digital identity at any government facility.
                     </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                     <BadgeCheck size={14} /> {userData.status}
                  </div>
               </div>
               
               {/* Security Hologram Overlays */}
               <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
                  <ShieldCheck size={120} />
               </div>
            </div>
         </div>
      </div>

      {/* Action Buttons */}
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
         <button className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 mx-auto flex items-center justify-center transition-transform group-hover:scale-110">
               <Download className="text-blue-400" />
            </div>
            <div>
               <h4 className="font-bold text-white">Save as Image</h4>
               <p className="text-[10px] text-slate-500 uppercase font-black">Export to Gallery</p>
            </div>
         </button>
         <button className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 mx-auto flex items-center justify-center transition-transform group-hover:scale-110">
               <Printer className="text-emerald-400" />
            </div>
            <div>
               <h4 className="font-bold text-white">Print ID Card</h4>
               <p className="text-[10px] text-slate-500 uppercase font-black">Generate Paper Slip</p>
            </div>
         </button>
         <button className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 mx-auto flex items-center justify-center transition-transform group-hover:scale-110">
               <ShieldCheck className="text-amber-400" />
            </div>
            <div>
               <h4 className="font-bold text-white">ID Wallet</h4>
               <p className="text-[10px] text-slate-500 uppercase font-black">Add to Apple/Google</p>
            </div>
         </button>
      </div>

      {/* Usage Info */}
      <div className="max-w-2xl mx-auto p-8 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/10 space-y-6 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
            <Info size={100} />
         </div>
         <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
               <ShieldCheck size={24} />
            </div>
            <div className="space-y-4">
               <h3 className="text-lg font-bold text-white">Digital Identity Usage</h3>
               <p className="text-sm text-slate-500 leading-relaxed">
                  Your Lagosian Digital ID is an official electronic representation of your resident status. It can be used for identity verification with participating Lagos State government services, hospitals, and transportation hubs.
               </p>
               <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Encrypted
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Blockchain Verified
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default LagosianID;
