
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Trash2, 
  CreditCard, 
  Building, 
  Smartphone, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Info,
  Lock,
  Loader2,
  Calendar
} from 'lucide-react';
import { ViewType } from '../App';

interface PaymentFormProps {
  onNavigate: (view: ViewType) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onNavigate }) => {
  const [paymentMethod, setPaymentMethod] = useState<'saved' | 'new' | 'transfer' | 'ussd'>('saved');
  const [billingPeriod, setBillingPeriod] = useState('Q2 2026');
  const [isProcessing, setIsProcessing] = useState(false);

  const amount = 5000;
  const serviceFee = 0;
  const total = amount + serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Navigate to dedicated processing page
    setTimeout(() => {
      onNavigate('payment-processing');
    }, 800);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="space-y-4">
        <button 
          onClick={() => onNavigate('payments')}
          className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Payments
        </button>
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight flex items-center gap-4 text-amber-500">
             <Trash2 size={32} /> LAWMA <span className="text-white">Payment</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg">Settle your waste management obligations securely.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Left Side: Form Sections */}
        <div className="lg:col-span-2 space-y-8">
          <form id="payment-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Payment Details */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Info className="text-blue-400" size={18} />
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-300">Section 1: Payment Details</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Account ID</label>
                  <input 
                    type="text" 
                    readOnly
                    value="ACC-LAW-88231"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-slate-400 font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Billing Period</label>
                  <div className="relative">
                     <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                     <select 
                      value={billingPeriod}
                      onChange={(e) => setBillingPeriod(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-amber-500 transition-all appearance-none"
                     >
                       <option value="Q1 2026">Q1 2026 (Jan - Mar)</option>
                       <option value="Q2 2026">Q2 2026 (Apr - Jun)</option>
                       <option value="Q3 2026">Q3 2026 (Jul - Sep)</option>
                       <option value="Q4 2026">Q4 2026 (Oct - Dec)</option>
                     </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Amount Due</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₦</span>
                  <input 
                    type="text" 
                    readOnly
                    value="5,000.00"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-10 text-white font-black text-xl"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Payment Method */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <CreditCard className="text-emerald-400" size={18} />
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-300">Section 3: Payment Method</h3>
              </div>

              <div className="grid gap-3">
                {[
                  { id: 'saved', label: 'Saved Card (**** 4242)', icon: <CreditCard size={18} />, color: 'blue' },
                  { id: 'new', label: 'New Debit/Credit Card', icon: <CreditCard size={18} />, color: 'emerald' },
                  { id: 'transfer', label: 'Bank Transfer', icon: <Building size={18} />, color: 'amber' },
                  { id: 'ussd', label: 'USSD Code', icon: <Smartphone size={18} />, color: 'indigo' },
                ].map((method) => (
                  <label 
                    key={method.id}
                    className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all ${paymentMethod === method.id ? 'bg-white/5 border-emerald-500/50 ring-2 ring-emerald-500/10' : 'bg-slate-950/50 border-white/5 hover:border-white/10'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === method.id ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-500'}`}>
                        {method.icon}
                      </div>
                      <span className={`font-bold text-sm ${paymentMethod === method.id ? 'text-white' : 'text-slate-400'}`}>{method.label}</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === method.id ? 'border-emerald-500' : 'border-slate-700'}`}>
                      {paymentMethod === method.id && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-in zoom-in duration-300"></div>}
                    </div>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      className="hidden" 
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id as any)}
                    />
                  </label>
                ))}
              </div>

              {/* Conditional New Card Fields */}
              {paymentMethod === 'new' && (
                <div className="space-y-6 pt-6 animate-in slide-in-from-top-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Card Number</label>
                    <input 
                      required
                      type="text" 
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Expiry Date</label>
                      <input 
                        required
                        type="text" 
                        placeholder="MM/YY"
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">CVV</label>
                      <input 
                        required
                        type="text" 
                        placeholder="123"
                        maxLength={3}
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-1">
                    <input type="checkbox" id="saveCard" className="w-5 h-5 rounded bg-slate-950 border-white/10 text-emerald-600 focus:ring-emerald-500" />
                    <label htmlFor="saveCard" className="text-xs text-slate-400 font-bold">Save card for future payments</label>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Right Side: Summary Card */}
        <div className="space-y-8 lg:sticky lg:top-32">
          <div className="glass p-8 rounded-[3rem] border border-white/10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
               <ShieldCheck size={120} className="text-blue-400" />
            </div>
            
            <h3 className="text-xl font-black tracking-tight text-white">Payment Summary</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">LAWMA {billingPeriod}</span>
                <span className="text-white font-black">₦5,000.00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-bold">Service Fee</span>
                <span className="text-emerald-400 font-bold">₦0.00</span>
              </div>
              <div className="h-px bg-white/5 my-2"></div>
              <div className="flex justify-between items-end">
                <span className="text-slate-300 font-black uppercase text-[10px] tracking-widest pb-1">Total Amount</span>
                <span className="text-3xl font-black text-white tracking-tighter">₦5,000.00</span>
              </div>
            </div>

            <button 
              form="payment-form"
              type="submit"
              disabled={isProcessing}
              className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Processing...
                </>
              ) : (
                <>
                  Pay ₦5,000.00 <ChevronRight size={20} />
                </>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 pt-2">
               <Lock className="text-slate-600" size={12} />
               <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Bank-Grade 256-bit Encryption</span>
            </div>
          </div>

          <div className="p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10 flex gap-4">
            <ShieldCheck className="text-emerald-500 shrink-0" size={20} />
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
              Your payment information is handled through secure gateways. Lagosian never stores your full card details without your explicit permission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
