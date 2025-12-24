
import React, { useState } from 'react';
import { 
  Gavel, 
  User, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight,
  Download,
  ShieldCheck,
  Building2,
  Wallet,
  Landmark
} from 'lucide-react';
import { ViewType } from '../App';

interface TaxRegistrationProps {
  onNavigate: (view: ViewType) => void;
}

const LAGOS_LGAS = [
  'Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 
  'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 
  'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'
];

const LAGOS_LCDAS = ['Agado/Okodo', 'Agege', 'Ikeja Central', 'Onigbongbo', 'Ojodu', 'Iru-Victoria Island', 'Ikoyi-Obalende'];

const TaxRegistration: React.FC<TaxRegistrationProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Personal (Pre-filled simulation)
    fullName: 'Seun Babalola',
    dob: '1992-05-15',
    gender: 'Male',
    phone: '0803 000 0000',
    email: 'seun.b@example.ng',
    // Step 2: Contact
    houseNo: '',
    street: '',
    city: 'Lagos',
    lga: '',
    lcda: '',
    landmark: '',
    // Step 3: Employment
    employmentStatus: 'Employed',
    employerName: '',
    employerAddress: '',
    jobTitle: '',
    incomeRange: '₦100k - ₦300k',
    businessName: '',
    businessType: '',
    businessAddress: '',
    revenueRange: '',
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center p-4 animate-in zoom-in-95 duration-700">
        <div className="max-w-xl w-full glass p-12 rounded-[4rem] border border-emerald-500/20 text-center space-y-8 relative overflow-hidden">
           {/* Success Background Decor */}
           <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[60px] rounded-full"></div>
           
           <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="text-emerald-500" size={48} />
           </div>

           <div className="space-y-2">
              <h2 className="text-4xl font-black text-white">Tax Registration Submitted!</h2>
              <p className="text-slate-400">Your LIRS Tax Identification Number has been generated.</p>
           </div>

           <div className="p-8 bg-slate-950/50 rounded-3xl border border-white/5 space-y-4">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Your TIN</div>
              <div className="text-4xl font-black text-blue-400 tracking-tighter">1234567890</div>
           </div>

           <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-500">Next Steps</h4>
              <div className="grid grid-cols-1 gap-3">
                 {[
                   'Your TIN is active immediately',
                   'Download your TIN certificate below',
                   'Set up tax payment reminders in settings'
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-4 rounded-xl text-left border border-white/5">
                      <div className="w-5 h-5 bg-blue-500/10 rounded flex items-center justify-center text-blue-500 shrink-0">
                         <ChevronRight size={14} />
                      </div>
                      {text}
                   </div>
                 ))}
              </div>
           </div>

           <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                 <Download size={20} /> Download Certificate
              </button>
              <button 
                onClick={() => onNavigate('dashboard')}
                className="flex-1 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all"
              >
                 Go to Dashboard
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
           <h1 className="text-3xl font-black tracking-tight flex items-center gap-4">
             Tax Registration <span className="text-blue-500">(LIRS)</span>
           </h1>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center gap-4">
           <div className="text-right">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Step {step} of 4</div>
              <div className="text-xs font-bold text-white">
                {step === 1 ? 'Personal Info' : step === 2 ? 'Contact & Address' : step === 3 ? 'Employment' : 'Review & Submit'}
              </div>
           </div>
           <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-blue-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
           </div>
        </div>
      </div>

      <div className="glass p-8 lg:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Step Icons Background */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           {step === 1 && <User size={200} />}
           {step === 2 && <MapPin size={200} />}
           {step === 3 && <Briefcase size={200} />}
           {step === 4 && <CheckCircle2 size={200} />}
        </div>

        <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
          
          {/* STEP 1: PERSONAL */}
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex gap-4">
                 <ShieldCheck className="text-blue-500" size={24} />
                 <div>
                    <h4 className="text-sm font-bold text-blue-400">NIN Pre-filled Data</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">We've pre-filled your personal details from your verified identity. Some fields are locked for security.</p>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    readOnly
                    type="text" 
                    value={formData.fullName}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-slate-400 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Date of Birth</label>
                  <input 
                    readOnly
                    type="date" 
                    value={formData.dob}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-slate-400 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Gender</label>
                  <input 
                    readOnly
                    type="text" 
                    value={formData.gender}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-slate-400 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                  <input 
                    readOnly
                    type="text" 
                    value={formData.phone}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="seun@example.ng"
                />
              </div>
            </div>
          )}

          {/* STEP 2: CONTACT */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">House Number</label>
                  <input 
                    required
                    type="text" 
                    value={formData.houseNo}
                    onChange={(e) => setFormData({...formData, houseNo: e.target.value})}
                    placeholder="e.g. 12"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Street Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.street}
                    onChange={(e) => setFormData({...formData, street: e.target.value})}
                    placeholder="e.g. Kudirat Abiola Way"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">City/Town</label>
                  <input 
                    required
                    type="text" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">LGA</label>
                  <select 
                    required
                    value={formData.lga}
                    onChange={(e) => setFormData({...formData, lga: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                  >
                    <option value="">Select LGA</option>
                    {LAGOS_LGAS.map(lga => <option key={lga} value={lga}>{lga}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">LCDA</label>
                  <select 
                    required
                    value={formData.lcda}
                    onChange={(e) => setFormData({...formData, lcda: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                  >
                    <option value="">Select LCDA</option>
                    {LAGOS_LCDAS.map(lcda => <option key={lcda} value={lcda}>{lcda}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Nearest Landmark</label>
                  <input 
                    type="text" 
                    value={formData.landmark}
                    onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                    placeholder="e.g. Near Ikeja City Mall"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: EMPLOYMENT */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Employment Status</label>
                <select 
                  required
                  value={formData.employmentStatus}
                  onChange={(e) => setFormData({...formData, employmentStatus: e.target.value})}
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                >
                  <option value="Employed">Employed</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Retired">Retired</option>
                </select>
              </div>

              {formData.employmentStatus === 'Employed' && (
                <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Employer Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.employerName}
                      onChange={(e) => setFormData({...formData, employerName: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Job Title</label>
                    <input 
                      required
                      type="text" 
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Employer Address</label>
                    <input 
                      required
                      type="text" 
                      value={formData.employerAddress}
                      onChange={(e) => setFormData({...formData, employerAddress: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Monthly Income Range</label>
                    <select 
                      required
                      value={formData.incomeRange}
                      onChange={(e) => setFormData({...formData, incomeRange: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                    >
                      <option>Below ₦100k</option>
                      <option>₦100k - ₦300k</option>
                      <option>₦301k - ₦750k</option>
                      <option>₦751k - ₦1.5M</option>
                      <option>Above ₦1.5M</option>
                    </select>
                  </div>
                </div>
              )}

              {(formData.employmentStatus === 'Self-Employed' || formData.employmentStatus === 'Business Owner') && (
                <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Business Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Business Type</label>
                    <input 
                      required
                      type="text" 
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Business Address</label>
                    <input 
                      required
                      type="text" 
                      value={formData.businessAddress}
                      onChange={(e) => setFormData({...formData, businessAddress: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {step === 4 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="grid gap-6">
                 {/* Section: Personal */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-blue-400">Personal Information</h4>
                       <button type="button" onClick={() => setStep(1)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                       <div><span className="text-slate-500 font-bold block">Name:</span> {formData.fullName}</div>
                       <div><span className="text-slate-500 font-bold block">Email:</span> {formData.email}</div>
                    </div>
                 </div>

                 {/* Section: Address */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-emerald-400">Contact & Address</h4>
                       <button type="button" onClick={() => setStep(2)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="text-sm space-y-2">
                       <div><span className="text-slate-500 font-bold">Address:</span> {formData.houseNo} {formData.street}, {formData.city}</div>
                       <div className="grid sm:grid-cols-2 gap-4">
                          <div><span className="text-slate-500 font-bold">LGA:</span> {formData.lga}</div>
                          <div><span className="text-slate-500 font-bold">LCDA:</span> {formData.lcda}</div>
                       </div>
                    </div>
                 </div>

                 {/* Section: Employment */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-amber-400">Employment Details</h4>
                       <button type="button" onClick={() => setStep(3)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="text-sm">
                       <div><span className="text-slate-500 font-bold">Status:</span> {formData.employmentStatus}</div>
                       {formData.employmentStatus === 'Employed' ? (
                         <div className="mt-2"><span className="text-slate-500 font-bold">Employer:</span> {formData.employerName} ({formData.jobTitle})</div>
                       ) : (
                         <div className="mt-2"><span className="text-slate-500 font-bold">Business:</span> {formData.businessName}</div>
                       )}
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                 <input required type="checkbox" id="confirm" className="w-5 h-5 rounded bg-slate-950 border-white/10 text-blue-600 focus:ring-blue-600 focus:ring-offset-slate-900" />
                 <label htmlFor="confirm" className="text-xs text-slate-400 font-medium leading-relaxed">
                   I confirm that all the information provided above is accurate to the best of my knowledge. I understand that providing false information may lead to legal penalties.
                 </label>
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
              className="flex-1 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              {step === 4 ? 'Submit Registration' : 'Continue'} 
              {step === 4 ? <CheckCircle2 size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 flex items-center justify-center gap-8 opacity-40">
        <div className="flex items-center gap-2">
           {/* Fix: Landmark was used but not imported. Added to lucide-react imports above. */}
           <Landmark size={14} className="text-slate-500" />
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">LIRS Approved Portal</span>
        </div>
        <div className="flex items-center gap-2">
           <ShieldCheck size={14} className="text-slate-500" />
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">256-Bit SSL Secured</span>
        </div>
      </div>
    </div>
  );
};

export default TaxRegistration;
