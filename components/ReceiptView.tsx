
import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Share2, 
  QrCode, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface ReceiptViewProps {
  onNavigate: (view: ViewType) => void;
}

const ReceiptView: React.FC<ReceiptViewProps> = ({ onNavigate }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button 
          onClick={() => onNavigate('transaction-history')}
          className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Transactions
        </button>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
            <Share2 size={14} /> Share
          </button>
          <button 
            onClick={handlePrint}
            className="px-4 py-2 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Printer size={14} /> Print
          </button>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
            <Download size={14} /> Download PDF
          </button>
        </div>
      </div>

      <div className="relative group max-w-2xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/10 to-emerald-500/10 rounded-[3rem] blur-xl opacity-50"></div>
        
        <div className="relative bg-white text-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl printable-receipt" id="receipt-content">
          <div className="p-10 text-center border-b-[3px] border-dashed border-slate-200 relative">
             <div className="absolute top-4 right-6 opacity-10">
                <ShieldCheck size={80} />
             </div>
             
             <div className="flex flex-col items-center gap-3 mb-4">
                <Logo size={64} glow={false} />
                <h1 className="text-3xl font-black tracking-tighter uppercase">LAGOSIAN</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 -mt-2">Official Payment Receipt</p>
             </div>

             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-wider">
                <CheckCircle2 size={12} /> Transaction Successful
             </div>
          </div>

          <div className="p-10 space-y-10">
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-1">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction ID</div>
                  <div className="text-sm font-black font-mono">TXN-2024-882931</div>
               </div>
               <div className="space-y-1 text-right">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date & Time</div>
                  <div className="text-sm font-bold">Jan 10, 2024 • 14:35 WAT</div>
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                 <FileText size={12} /> Payer Details
               </h3>
               <div className="bg-slate-50 rounded-2xl p-6 grid grid-cols-2 gap-6 border border-slate-100">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Name</div>
                    <div className="text-sm font-black">Seun Babalola</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Lagosian ID</div>
                    <div className="text-sm font-black">LAG-2024-88923</div>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                 <CheckCircle2 size={12} className="text-blue-500" /> Payment Details
               </h3>
               <div className="border border-slate-100 rounded-2xl overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                       <tr>
                          <td className="px-6 py-4 text-slate-500 font-medium">Service</td>
                          <td className="px-6 py-4 text-right font-black">LAWMA Waste Management</td>
                       </tr>
                       <tr>
                          <td className="px-6 py-4 text-slate-500 font-medium">Billing Period</td>
                          <td className="px-6 py-4 text-right font-black">Q1 2024</td>
                       </tr>
                       <tr>
                          <td className="px-6 py-4 text-slate-500 font-medium">Payment Method</td>
                          <td className="px-6 py-4 text-right font-black">Card ending 4242</td>
                       </tr>
                       <tr className="bg-slate-900 text-white">
                          <td className="px-6 py-5 font-black uppercase text-xs tracking-widest">Amount Paid</td>
                          <td className="px-6 py-5 text-right font-black text-xl">₦5,000.00</td>
                       </tr>
                    </tbody>
                  </table>
               </div>
            </div>

            <div className="flex flex-col items-center gap-6 pt-10 border-t border-dashed border-slate-200">
               <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl shadow-inner">
                  <QrCode size={100} className="text-slate-900" />
               </div>
               <div className="text-center space-y-2">
                  <p className="text-[10px] text-slate-400 font-bold max-w-xs leading-relaxed uppercase tracking-tighter">
                    This is a computer-generated receipt. No signature required. 
                    Official verification can be done via the link below.
                  </p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:underline">
                    lagosian.ng/verify <ExternalLink size={12} />
                  </a>
               </div>
            </div>
          </div>
          
          <div className="h-4 bg-white relative flex">
             {[...Array(20)].map((_, i) => (
               <div key={i} className="flex-1 h-full" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)', background: '#020617' }}></div>
             ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 shrink-0">
           <ShieldCheck size={20} />
        </div>
        <div className="flex-1">
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
             This receipt is recognized as an official proof of payment by the Lagos State Government and all its MDAs. Keep this digital copy safe or print for your physical records.
           </p>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #receipt-content, #receipt-content * {
            visibility: visible;
          }
          #receipt-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
            border: 1px solid #ddd;
          }
        }
      `}</style>
    </div>
  );
};

export default ReceiptView;
