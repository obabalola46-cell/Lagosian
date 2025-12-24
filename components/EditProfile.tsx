
import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Camera, 
  Save, 
  ArrowLeft, 
  Lock, 
  CheckCircle2, 
  Loader2,
  Info
} from 'lucide-react';
import { ViewType } from '../App';

interface EditProfileProps {
  onNavigate: (view: ViewType) => void;
}

const LAGOS_LGAS = [
  'Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 
  'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 
  'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'
];

const EditProfile: React.FC<EditProfileProps> = ({ onNavigate }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: 'Seun Oluwaseun Babalola', // Locked
    email: 'seun.b@example.ng',
    phone: '+234 803 000 1234',
    dob: '1992-05-15', // Locked
    houseNo: '24',
    street: 'Kudirat Abiola Way',
    lga: 'Ikeja',
    lcda: 'Onigbongbo'
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        onNavigate('profile');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Profile
          </button>
          <h1 className="text-3xl font-black tracking-tight text-white">Edit <span className="text-blue-500">Profile</span></h1>
        </div>
      </div>

      <form onSubmit={handleSave} className="grid lg:grid-cols-3 gap-10">
        {/* Photo Section */}
        <div className="lg:col-span-1 space-y-6">
           <div className="glass p-10 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <User size={120} />
              </div>
              
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8">Profile Photo</h3>
              
              <div className="relative mx-auto w-40 h-40 mb-8">
                 <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-full blur opacity-20"></div>
                 <div className="relative w-full h-full rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 <button type="button" className="absolute bottom-2 right-2 w-12 h-12 bg-blue-600 text-white rounded-2xl border-4 border-slate-900 flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                    <Camera size={20} />
                 </button>
              </div>

              <button type="button" className="w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                 Change Photo
              </button>
              <p className="text-[10px] text-slate-500 mt-4 font-medium uppercase tracking-tighter">JPG or PNG • Max 2MB</p>
           </div>

           <div className="p-6 rounded-[2rem] bg-amber-500/5 border border-amber-500/10 flex gap-4">
              <Info className="text-amber-500 shrink-0 mt-0.5" size={18} />
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                Identity fields (Name, DOB) are locked because your profile is NIN-verified. To update these, please initiate an identity re-verification.
              </p>
           </div>
        </div>

        {/* Form Content */}
        <div className="lg:col-span-2 space-y-10">
           {/* Section: Basic Information */}
           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                 <User size={14} /> Basic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center justify-between">
                       Full Name
                       <Lock size={10} className="text-slate-700" />
                    </label>
                    <div className="relative">
                       <input 
                        type="text" 
                        readOnly
                        value={formData.fullName}
                        className="w-full bg-slate-950 border border-white/5 rounded-2xl p-4 text-slate-500 font-bold cursor-not-allowed opacity-60"
                       />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center justify-between">
                       Date of Birth
                       <Lock size={10} className="text-slate-700" />
                    </label>
                    <input 
                      type="date" 
                      readOnly
                      value={formData.dob}
                      className="w-full bg-slate-950 border border-white/5 rounded-2xl p-4 text-slate-500 font-bold cursor-not-allowed opacity-60"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <div className="relative group">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                       <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                       />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                    <div className="relative group">
                       <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                       <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-blue-500 transition-all"
                       />
                    </div>
                 </div>
              </div>
           </div>

           {/* Section: Address Information */}
           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                 <MapPin size={14} /> Address Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">House Number</label>
                    <input 
                      type="text" 
                      required
                      value={formData.houseNo}
                      onChange={(e) => setFormData({...formData, houseNo: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Street</label>
                    <input 
                      type="text" 
                      required
                      value={formData.street}
                      onChange={(e) => setFormData({...formData, street: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">LGA</label>
                    <select 
                      required
                      value={formData.lga}
                      onChange={(e) => setFormData({...formData, lga: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                    >
                      {LAGOS_LGAS.map(lga => <option key={lga} value={lga}>{lga}</option>)}
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">LCDA</label>
                    <input 
                      type="text" 
                      required
                      value={formData.lcda}
                      onChange={(e) => setFormData({...formData, lcda: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                 </div>
              </div>
           </div>

           {/* Actions */}
           <div className="pt-10 flex flex-col sm:flex-row items-center gap-4">
              <button 
                type="submit"
                disabled={isSaving || saveSuccess}
                className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Saving Changes...
                  </>
                ) : saveSuccess ? (
                  <>
                    <CheckCircle2 size={20} className="text-emerald-400" /> Changes Saved!
                  </>
                ) : (
                  <>
                    <Save size={20} /> Save Changes
                  </>
                )}
              </button>
              <button 
                type="button"
                onClick={() => onNavigate('profile')}
                className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-slate-400 font-bold rounded-2xl hover:bg-white/10 hover:text-white transition-all"
              >
                Cancel
              </button>
           </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
