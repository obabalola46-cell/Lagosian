
import React from 'react';
import { 
  FolderOpen, 
  FileText, 
  CheckCircle2, 
  Eye, 
  RefreshCw, 
  Download, 
  Upload, 
  ArrowLeft, 
  MoreVertical,
  ShieldCheck,
  FileCheck,
  Search,
  ExternalLink,
  Plus
} from 'lucide-react';
import { ViewType } from '../App';

interface MyDocumentsProps {
  onNavigate: (view: ViewType) => void;
}

const MyDocuments: React.FC<MyDocumentsProps> = ({ onNavigate }) => {
  const documents = [
    {
      id: 'nin-slip',
      name: 'NIN Slip',
      uploaded: 'January 3, 2024',
      status: 'Verified',
      type: 'Identity',
      icon: <ShieldCheck className="text-blue-400" />
    },
    {
      id: 'passport-photo',
      name: 'Passport Photo',
      uploaded: 'January 5, 2024',
      status: 'Accepted',
      type: 'Biometric',
      icon: <FileCheck className="text-emerald-400" />
    },
    {
      id: 'utility-bill',
      name: 'Utility Bill',
      uploaded: 'January 5, 2024',
      status: 'Accepted',
      type: 'Proof of Residence',
      icon: <FileText className="text-amber-400" />
    }
  ];

  const certificates = [
    {
      id: 'tin-cert',
      name: 'TIN Certificate',
      issued: 'January 10, 2024',
      ref: 'LIRS-TIN-88910',
      icon: <FileText className="text-indigo-400" />
    }
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
            <h1 className="text-3xl font-black tracking-tight text-white">My <span className="text-blue-500">Documents</span></h1>
            <p className="text-slate-500 font-medium">Secure vault for your uploaded documents and official certificates.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 w-fit mb-2">
           <Plus size={18} /> Upload New Document
        </button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
           { label: 'Total Files', val: '4', color: 'blue' },
           { label: 'Verified', val: '3', color: 'emerald' },
           { label: 'Pending', val: '0', color: 'amber' },
           { label: 'Storage Used', val: '4.2 MB', color: 'slate' },
         ].map((stat, i) => (
           <div key={i} className="glass p-6 rounded-[2rem] border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.1em]">{stat.label}</span>
              <span className="text-xl font-black text-white">{stat.val}</span>
           </div>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Documents Section */}
        <div className="lg:col-span-2 space-y-8">
           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                 <FolderOpen size={16} className="text-blue-500" /> Uploaded Documents
              </h3>
              
              <div className="grid gap-4">
                 {documents.map((doc) => (
                    <div key={doc.id} className="glass p-6 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all flex items-center justify-between group">
                       <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 shadow-lg group-hover:scale-110 transition-transform">
                             {doc.icon}
                          </div>
                          <div>
                             <h4 className="font-bold text-white text-lg">{doc.name}</h4>
                             <div className="flex items-center gap-3 mt-1">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Uploaded: {doc.uploaded}</span>
                                <div className="w-1 h-1 rounded-full bg-slate-800"></div>
                                <span className="flex items-center gap-1 text-[10px] font-black text-emerald-500 uppercase tracking-tighter">
                                   <CheckCircle2 size={10} /> {doc.status}
                                </span>
                             </div>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-2">
                          <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all hover:bg-white/10 group/btn" title="View Document">
                             <Eye size={18} />
                          </button>
                          <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all hover:bg-white/10" title="Re-upload">
                             <RefreshCw size={18} />
                          </button>
                          <button className="p-3 text-slate-600 hover:text-white">
                             <MoreVertical size={20} />
                          </button>
                       </div>
                    </div>
                 ))}
                 
                 {/* Upload Placeholder */}
                 <button className="p-8 border-2 border-dashed border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-blue-500/20 rounded-[2.5rem] flex flex-col items-center justify-center text-center gap-4 group transition-all">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-700 group-hover:text-blue-500 group-hover:scale-110 transition-all">
                       <Upload size={24} />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-slate-400 group-hover:text-white">Click to upload document</h4>
                       <p className="text-[10px] text-slate-600 mt-1 uppercase font-black">PDF, JPG, PNG • Max 5MB</p>
                    </div>
                 </button>
              </div>
           </div>
        </div>

        {/* Certificates Section */}
        <div className="lg:col-span-1 space-y-8">
           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                 <FileText size={16} className="text-emerald-500" /> Issued Certificates
              </h3>
              
              <div className="grid gap-4">
                 {certificates.map((cert) => (
                    <div key={cert.id} className="glass p-8 rounded-[3rem] border border-white/5 hover:border-emerald-500/20 transition-all group relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                          <CheckCircle2 size={80} className="text-emerald-500" />
                       </div>
                       
                       <div className="flex flex-col gap-6 relative z-10">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400">
                                {cert.icon}
                             </div>
                             <div>
                                <h4 className="font-bold text-white leading-tight">{cert.name}</h4>
                                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Issued: {cert.issued}</div>
                             </div>
                          </div>
                          
                          <div className="p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                             <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Reference No.</div>
                             <div className="text-xs font-black text-blue-400 font-mono tracking-tighter mt-1">{cert.ref}</div>
                          </div>

                          <div className="flex gap-2">
                             <button className="flex-1 py-3 bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10">
                                <Download size={14} /> Download PDF
                             </button>
                             <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
                                <ExternalLink size={16} />
                             </button>
                          </div>
                       </div>
                    </div>
                 ))}
                 
                 <div className="p-6 rounded-[2rem] bg-blue-600/5 border border-blue-500/10 flex gap-4">
                    <ShieldCheck className="text-blue-500 shrink-0" size={20} />
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                       Official certificates issued via Lagosian are blockchain-verified and recognized by all state government departments.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
