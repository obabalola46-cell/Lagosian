
import React, { useState } from 'react';
import { 
  IdCard, 
  User, 
  MapPin, 
  Upload, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight,
  ShieldCheck,
  Building,
  Home,
  FileText,
  Camera,
  History,
  Info,
  AlertCircle
} from 'lucide-react';
import { ViewType } from '../App';

interface LASRRARegistrationProps {
  onNavigate: (view: ViewType) => void;
}

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const LASRRARegistration: React.FC<LASRRARegistrationProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [fileErrors, setFileErrors] = useState({ passportPhoto: '', utilityBill: '' });
  
  const [formData, setFormData] = useState({
    // Step 1: Personal (Pre-filled simulation)
    fullName: 'Seun Babalola',
    dob: '1992-05-15',
    gender: 'Male',
    phone: '0803 000 0000',
    email: 'seun.b@example.ng',
    // Step 2: Residence
    currentAddress: '',
    yearsInLagos: '',
    previousState: '',
    residenceType: 'Rented',
    // Step 3: Documents
    passportPhoto: null as File | null,
    utilityBill: null as File | null,
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileUpload = (field: 'passportPhoto' | 'utilityBill', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    let error = '';
    const isImage = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    const isPDF = file.type === 'application/pdf';

    if (field === 'passportPhoto') {
      if (!isImage) {
        error = 'Format not supported. Please upload a JPG or PNG image.';
      } else if (file.size > MAX_FILE_SIZE) {
        error = 'File too large. Maximum size is 5MB.';
      }
    } else if (field === 'utilityBill') {
      if (!isImage && !isPDF) {
        error = 'Format not supported. Please upload a PDF, JPG, or PNG.';
      } else if (file.size > MAX_FILE_SIZE) {
        error = 'File too large. Maximum size is 5MB.';
      }
    }

    if (error) {
      setFileErrors(prev => ({ ...prev, [field]: error }));
      setFormData(prev => ({ ...prev, [field]: null }));
    } else {
      setFileErrors(prev => ({ ...prev, [field]: '' }));
      setFormData(prev => ({ ...prev, [field]: file }));
    }
  };

  if (submitted) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center p-4 animate-in zoom-in-95 duration-700">
        <div className="max-w-xl w-full glass p-12 rounded-[4rem] border border-emerald-500/20 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[60px] rounded-full"></div>
           
           <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="text-emerald-500" size={48} />
           </div>

           <div className="space-y-2">
              <h2 className="text-4xl font-black text-white">Registration Submitted!</h2>
              <p className="text-slate-400">Your application for a Lagos Resident ID Card has been received.</p>
           </div>

           <div className="p-8 bg-slate-950/50 rounded-3xl border border-white/5 space-y-4">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Application ID</div>
              <div className="text-3xl font-black text-emerald-400 tracking-tighter">LSR-2024-99812</div>
           </div>

           <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-500">Processing Timeline</h4>
              <div className="grid grid-cols-1 gap-3">
                 {[
                   'Review and verification (2-3 business days)',
                   'Card printing and quality control (2 business days)',
                   'Ready for pickup/delivery (Expected: 5-7 business days)'
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-4 rounded-xl text-left border border-white/5">
                      <div className="w-5 h-5 bg-emerald-500/10 rounded flex items-center justify-center text-emerald-500 shrink-0">
                         <History size={14} />
                      </div>
                      {text}
                   </div>
                 ))}
              </div>
           </div>

           <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="flex-1 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all"
              >
                 Go to Dashboard
              </button>
              <button className="flex-1 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all">
                 Print Slip
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
            <ArrowLeft size={14} /> Back to Hub
           </button>
           <h1 className="text-3xl font-black tracking-tight flex items-center gap-4 text-emerald-500">
             Resident Registration <span className="text-white">(LASRRA)</span>
           </h1>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center gap-4">
           <div className="text-right">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Step {step} of 4</div>
              <div className="text-xs font-bold text-white">
                {step === 1 ? 'Personal Profile' : step === 2 ? 'Residency Info' : step === 3 ? 'Document Upload' : 'Final Review'}
              </div>
           </div>
           <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-emerald-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
           </div>
        </div>
      </div>

      <div className="glass p-8 lg:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-emerald-500">
           {step === 1 && <User size={200} />}
           {step === 2 && <Home size={200} />}
           {step === 3 && <Camera size={200} />}
           {step === 4 && <FileText size={200} />}
        </div>

        <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
          
          {/* STEP 1: PERSONAL */}
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex gap-4">
                 <ShieldCheck className="text-emerald-500" size={24} />
                 <div>
                    <h4 className="text-sm font-bold text-emerald-400">Profile Pre-filled from NIN</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">To ensure data integrity, your core personal details are pre-filled from your verified identity records.</p>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Legal Name</label>
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
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: RESIDENCY */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Current Lagos Address</label>
                <textarea 
                  required
                  rows={3}
                  value={formData.currentAddress}
                  onChange={(e) => setFormData({...formData, currentAddress: e.target.value})}
                  placeholder="e.g. 24, Kudirat Abiola Way, Oregun, Ikeja"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Years Living in Lagos</label>
                  <input 
                    required
                    type="number" 
                    min="0"
                    value={formData.yearsInLagos}
                    onChange={(e) => setFormData({...formData, yearsInLagos: e.target.value})}
                    placeholder="e.g. 5"
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Previous State of Residence</label>
                  <select 
                    required
                    value={formData.previousState}
                    onChange={(e) => setFormData({...formData, previousState: e.target.value})}
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500 transition-all appearance-none"
                  >
                    <option value="">Select State</option>
                    {NIGERIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Residence Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                     {['Owned', 'Rented', 'Family House', 'Leased'].map(type => (
                       <button
                         key={type}
                         type="button"
                         onClick={() => setFormData({...formData, residenceType: type})}
                         className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all ${formData.residenceType === type ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg' : 'bg-slate-950 border-white/10 text-slate-500 hover:border-white/20'}`}
                       >
                         {type}
                       </button>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DOCUMENTS */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Passport Photo */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Passport Photo</label>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">JPG, PNG • Max 5MB</span>
                  </div>
                  <div className={`relative group/upload h-64 border-2 border-dashed rounded-[2rem] bg-slate-950/50 flex flex-col items-center justify-center text-center p-6 transition-all ${fileErrors.passportPhoto ? 'border-rose-500/50 bg-rose-500/5' : 'border-white/10 hover:border-emerald-500/50'}`}>
                    {formData.passportPhoto ? (
                      <div className="space-y-4">
                         <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                           <IdCard size={32} />
                         </div>
                         <div className="text-sm font-bold text-white line-clamp-1">{formData.passportPhoto.name}</div>
                         <button type="button" onClick={() => setFormData({...formData, passportPhoto: null})} className="text-[10px] font-black uppercase text-rose-500 hover:underline">Remove file</button>
                      </div>
                    ) : (
                      <>
                        <Camera className={`mb-4 group-hover/upload:text-emerald-500 transition-colors ${fileErrors.passportPhoto ? 'text-rose-500' : 'text-slate-700'}`} size={48} />
                        <p className="text-xs text-slate-500 mb-4 px-4">Upload a clear passport photograph showing your full face.</p>
                        <input 
                          type="file" 
                          accept="image/jpeg, image/png"
                          onChange={(e) => handleFileUpload('passportPhoto', e)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-slate-300">Choose Image</div>
                      </>
                    )}
                  </div>
                  {fileErrors.passportPhoto && (
                    <div className="flex items-center gap-2 text-rose-500 text-[10px] font-bold uppercase tracking-wider ml-1">
                      <AlertCircle size={12} /> {fileErrors.passportPhoto}
                    </div>
                  )}
                </div>

                {/* Utility Bill */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Utility Bill</label>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">PDF, JPG, PNG • Max 5MB</span>
                  </div>
                  <div className={`relative group/upload h-64 border-2 border-dashed rounded-[2rem] bg-slate-950/50 flex flex-col items-center justify-center text-center p-6 transition-all ${fileErrors.utilityBill ? 'border-rose-500/50 bg-rose-500/5' : 'border-white/10 hover:border-emerald-500/50'}`}>
                    {formData.utilityBill ? (
                      <div className="space-y-4">
                         <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                           <FileText size={32} />
                         </div>
                         <div className="text-sm font-bold text-white line-clamp-1">{formData.utilityBill.name}</div>
                         <button type="button" onClick={() => setFormData({...formData, utilityBill: null})} className="text-[10px] font-black uppercase text-rose-500 hover:underline">Remove file</button>
                      </div>
                    ) : (
                      <>
                        <Upload className={`mb-4 group-hover/upload:text-emerald-500 transition-colors ${fileErrors.utilityBill ? 'text-rose-500' : 'text-slate-700'}`} size={48} />
                        <p className="text-xs text-slate-500 mb-4 px-4">Upload a recent PHCN bill, LAWMA bill, or Tenancy Agreement.</p>
                        <input 
                          type="file" 
                          accept=".pdf, image/jpeg, image/png"
                          onChange={(e) => handleFileUpload('utilityBill', e)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-slate-300">Select Document</div>
                      </>
                    )}
                  </div>
                  {fileErrors.utilityBill && (
                    <div className="flex items-center gap-2 text-rose-500 text-[10px] font-bold uppercase tracking-wider ml-1">
                      <AlertCircle size={12} /> {fileErrors.utilityBill}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                 <Info className="text-blue-400 shrink-0 mt-0.5" size={18} />
                 <p className="text-[10px] text-slate-500 leading-relaxed">
                   To avoid application rejection, please ensure documents are not blurry or cut off. Our automated verification system requires high-quality scans or photos under 5MB.
                 </p>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {step === 4 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="grid gap-6">
                 {/* Section: Personal Info */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-emerald-400">Personal Information</h4>
                       <button type="button" onClick={() => setStep(1)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                       <div><span className="text-slate-500 font-bold block">Legal Name:</span> {formData.fullName}</div>
                       <div><span className="text-slate-500 font-bold block">Gender:</span> {formData.gender}</div>
                    </div>
                 </div>

                 {/* Section: Residence */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-blue-400">Residence Information</h4>
                       <button type="button" onClick={() => setStep(2)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="space-y-3 text-sm">
                       <div><span className="text-slate-500 font-bold block">Lagos Address:</span> {formData.currentAddress}</div>
                       <div className="grid sm:grid-cols-2 gap-4">
                          <div><span className="text-slate-500 font-bold">Years in Lagos:</span> {formData.yearsInLagos}</div>
                          <div><span className="text-slate-500 font-bold">Ownership:</span> {formData.residenceType}</div>
                       </div>
                    </div>
                 </div>

                 {/* Section: Uploads */}
                 <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="text-sm font-black uppercase tracking-widest text-amber-400">Uploaded Documents</h4>
                       <button type="button" onClick={() => setStep(3)} className="text-xs text-slate-500 hover:text-white underline">Edit</button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest">
                       <div className="flex items-center gap-2 text-emerald-500">
                          <CheckCircle2 size={14} /> Passport Photo Uploaded
                       </div>
                       <div className="flex items-center gap-2 text-emerald-500">
                          <CheckCircle2 size={14} /> Utility Bill Uploaded
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                 <input required type="checkbox" id="confirm" className="w-5 h-5 rounded bg-slate-950 border-white/10 text-emerald-600 focus:ring-emerald-600 focus:ring-offset-slate-900" />
                 <label htmlFor="confirm" className="text-xs text-slate-400 font-medium leading-relaxed">
                   I solemnly declare that the information provided in this registration form is true and correct to the best of my knowledge. I understand that any false statement may lead to the cancellation of my LASRRA Resident Identification.
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
              disabled={step === 3 && (!formData.passportPhoto || !formData.utilityBill)}
              className="flex-1 py-5 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none"
            >
              {step === 4 ? 'Submit Application' : 'Next Step'} 
              {step === 4 ? <CheckCircle2 size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 flex items-center justify-center gap-8 opacity-40">
        <div className="flex items-center gap-2">
           <Building size={14} className="text-slate-500" />
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">LASRRA Official Partner</span>
        </div>
        <div className="flex items-center gap-2">
           <ShieldCheck size={14} className="text-slate-500" />
           <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Encryption Verified</span>
        </div>
      </div>
    </div>
  );
};

export default LASRRARegistration;
