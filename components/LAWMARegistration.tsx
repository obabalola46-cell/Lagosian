
import React, { useState } from 'react';
import { 
  Trash2, 
  Home, 
  Building, 
  MapPin, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight,
  ShieldCheck,
  Truck,
  Bell,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { ViewType } from '../App';

interface LAWMARegistrationProps {
  onNavigate: (view: ViewType) => void;
}

const LAWMARegistration: React.FC<LAWMARegistrationProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [reminderEnabled, setReminderEnabled] = useState(true);
  
  const [formData, setFormData] = useState({
    // Step 1: Property
    propertyType: 'Residential',
    propertyAddress: '',
    units: '1',
    currentArrangement: 'None',
    // Step 2: Contact
    contactName: 'Seun Babalola',
    contactPhone: '0803 000 0000',
    contactEmail: 'seun.b@example.ng',
  });

  const nextStep = () => setStep(s => Math.min(s + 3, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center p-4 animate-in zoom-in-95 duration-700">
        <div className="max-w-xl w-full glass p-12 rounded-[4rem] border border-amber-500/20 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-[60px] rounded-full"></div>
           
           <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/20">
              <CheckCircle2 className="text-amber-500" size={48} />
           </div>

           <div className="space-y-2">
              <h2 className="text-4xl font-black text-white">LAWMA Registration Complete!</h2>
              <p className="text-slate-400">Your property has been registered for waste management services.</p>
           </div>

           <div className="p-8 bg-slate-950/50 rounded-3xl border border-white/5 space-y-6 text-left">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                    <Truck size={20} />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Assigned PSP Operator</div>
                    <div className="text-lg font-bold text-white">CleanLagos Solutions Ltd</div>
                 </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                    <Calendar size={20} />
                 </div>
                 <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Collection Days</div>
                    <div className="text-lg font-bold text-white">Monday, Thursday</div>
                 </div>
              </div>
           </div>

           <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                 <Bell className="text-amber-500" size={20} />
                 <span className="text-sm font-bold text-slate-200">Enable payment reminders</span>
              </div>
              <button 
                onClick={() => setReminderEnabled(!reminderEnabled)}
                className={`w-12 h-6 rounded-full transition-all relative ${reminderEnabled ? 'bg-amber-600' : 'bg-slate-800'}`}
              >
                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${reminderEnabled ? 'right-1' : 'left-1'}`}></div>
              </button>
           </div>

           <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="flex-1 py-5 bg-amber-600 text-white font-black rounded-2xl hover:bg-amber-500 transition-all shadow-xl shadow-amber-500/20"
              >
                 Go to Dashboard
              </button>
              <button className="flex-1 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all">
                 Download Certificate
              </button>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="space-y-2">
           <button 
            onClick={() => onNavigate('registration-hub')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest mb-2 transition-colors"
           >
            <ArrowLeft size={14} /> Registration Hub
           </button>
           <h1 className="text-3xl font-black tracking-tight flex items-center gap-4 text-amber-500">
             Waste Management <span className="text-white">(LAWMA)</span>
           </h1>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center gap-4">
           <div className="text-right">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Step {step} of 3</div>
              <div className="text-xs font-bold text-white">
                {step === 1 ? 'Property Details' : step === 2 ? 'Contact Person' : 'Final Review'}
              </div>
           </div>
           <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-amber-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
           </div>
        </div>
      </div>

      <div className="glass p-8 lg:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-amber-500">
           {step === 1 && <Home size={200} />}
           {step === 2 && <User size={200} />}
           {step === 3 && <CheckCircle2 size={200} />}
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* STEP 1: PROPERTY */}
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Property Type</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'Residential', icon: <Home size={18} /> },
                    { id: 'Commercial', icon: <Building size={18} /> }
                  ].map(type => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({...formData, propertyType: type.id})}
                      className={`flex items-center justify-center gap-3 py-5 rounded-2xl border transition-all font-bold ${formData.propertyType === type.id ? 'bg-amber-600/10 border-amber-500 text-white shadow-lg' : 'bg-slate-950 border-white/5 text-slate-500 hover:border-white/20'}`}
                    >
                      {type.icon} {type.id}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Property Address</label>
                <textarea 
                  required
                  rows={3}
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                  placeholder="e.g. 15, Aromire Avenue, Ikeja"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Number of Units</label>
                  <input 
                    required
                    type="number" 
                    min="1"
                    value={formData.units}
                    onChange={(e) => setFormData({...formData, units: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Current Waste Arrangement</label>
                  <select 
                    required
                    value={formData.currentArrangement}
                    onChange={(e) => setFormData({...formData, currentArrangement: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-all appearance-none"
                  >
                    <option value="None">No existing arrangement</option>
                    <option value="PrivatePSP">Active Private PSP</option>
                    <option value="Unofficial">Unofficial cart pusher</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CONTACT */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
               <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex gap-4">
                 <ShieldCheck className="text-blue-500" size={24} />
                 <div>
                    <h4 className="text-sm font-bold text-blue-400">Verified Contact Info</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">We've pre-filled this from your profile for accuracy. This person will be responsible for billing and PSP communications.</p>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Contact Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: REVIEW */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="grid gap-6">
                 {/* Section: Property */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-amber-500">Property Details</h4>
                       <button type="button" onClick={() => setStep(1)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="space-y-3 text-sm">
                       <div><span className="text-slate-500 font-bold block">Address:</span> {formData.propertyAddress}</div>
                       <div className="grid sm:grid-cols-2 gap-4">
                          <div><span className="text-slate-500 font-bold">Type:</span> {formData.propertyType}</div>
                          <div><span className="text-slate-500 font-bold">Units:</span> {formData.units}</div>
                       </div>
                    </div>
                 </div>

                 {/* Section: Contact */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-blue-400">Contact Person</h4>
                       <button type="button" onClick={() => setStep(2)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                       <div><span className="text-slate-500 font-bold block">Name:</span> {formData.contactName}</div>
                       <div><span className="text-slate-500 font-bold block">Phone:</span> {formData.contactPhone}</div>
                    </div>
                 </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
                 <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                 <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                   By submitting, you agree to comply with Lagos State Waste Management regulations. An official PSP operator will be assigned to your location within 48 hours.
                 </p>
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
            {step > 1 && (
              <button 
                type="button"
                onClick={prevStep}
                className="px-8 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Back
              </button>
            )}
            <button 
              type="submit"
              className="flex-1 py-5 bg-amber-600 text-white font-black rounded-2xl shadow-xl shadow-amber-500/20 hover:bg-amber-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              {step === 3 ? 'Register Property' : 'Next Step'} 
              {step === 3 ? <CheckCircle2 size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 flex items-center justify-center gap-8 opacity-40">
        <div className="flex items-center gap-2">
           <Truck size={14} className="text-slate-500" />
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">LAWMA Authorized Partner</span>
        </div>
        <div className="flex items-center gap-2">
           <ShieldCheck size={14} className="text-slate-500" />
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secured Enrollment</span>
        </div>
      </div>
    </div>
  );
};

export default LAWMARegistration;
