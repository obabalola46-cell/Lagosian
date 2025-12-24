
import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  BadgeCheck, 
  Camera, 
  Edit3, 
  IdCard, 
  FileText, 
  Settings, 
  Lock, 
  ChevronRight, 
  ArrowLeft, 
  History,
  QrCode
} from 'lucide-react';
import { ViewType } from '../App';

interface ProfileOverviewProps {
  onNavigate: (view: ViewType) => void;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ onNavigate }) => {
  const profileData = {
    name: 'Seun Babalola',
    email: 'seun.b@example.ng',
    phone: '+234 803 000 1234',
    id: 'LAG-2024-88923',
    memberSince: 'January 2024',
    status: 'Verified'
  };

  const quickLinks = [
    { title: 'My Lagosian ID', icon: <IdCard className="text-blue-400" />, desc: 'View digital resident identity', view: 'lagosian-id' as const },
    { title: 'My Documents', icon: <FileText className="text-emerald-400" />, desc: 'Access uploaded certificates', view: 'my-documents' as const },
    { title: 'Account Settings', icon: <Settings className="text-amber-400" />, desc: 'Personal info and preferences', view: 'settings' as const },
    { title: 'Security Settings', icon: <Lock className="text-indigo-400" />, desc: 'Password and 2FA management', view: 'security-settings' as const },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Navigation & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
          <h1 className="text-3xl font-black tracking-tight text-white">My <span className="text-blue-500">Profile</span></h1>
        </div>
        <button 
          onClick={() => onNavigate('edit-profile')}
          className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2"
        >
           <Edit3 size={18} className="text-blue-400" /> Edit Profile
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
           <div className="glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden group text-center">
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Profile Photo */}
              <div className="relative mx-auto w-32 h-32 mb-6">
                 <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-full blur-sm opacity-50"></div>
                 <div className="relative w-full h-full rounded-full border-4 border-slate-900 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" 
                      alt="Profile" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                    />
                 </div>
                 <button 
                   onClick={() => onNavigate('edit-profile')}
                   className="absolute bottom-1 right-1 w-10 h-10 bg-blue-600 text-white rounded-xl border-4 border-slate-900 flex items-center justify-center shadow-lg hover:scale-110 transition-all active:scale-95"
                 >
                    <Camera size={18} />
                 </button>
              </div>

              <div className="space-y-1 mb-6">
                 <h2 className="text-2xl font-black text-white">{profileData.name}</h2>
                 <p className="text-slate-500 font-bold text-sm">{profileData.email}</p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-inner shadow-emerald-500/5">
                 <BadgeCheck size={14} /> Verified Resident
              </div>

              <div className="h-px bg-white/5 my-8"></div>

              <div className="space-y-4 text-left">
                 <div className="flex items-center justify-between">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Lagosian ID</div>
                    <div className="text-sm font-black text-blue-400 font-mono tracking-tighter bg-blue-400/5 px-2 rounded border border-blue-400/10">{profileData.id}</div>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phone</div>
                    <div className="text-sm font-bold text-white">{profileData.phone}</div>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Member Since</div>
                    <div className="text-sm font-bold text-white">{profileData.memberSince}</div>
                 </div>
              </div>
           </div>

           {/* QR Code Mini Card */}
           <div className="glass p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6">
              <div className="p-3 bg-white rounded-2xl shrink-0 shadow-lg">
                 <QrCode size={48} className="text-slate-900" />
              </div>
              <div className="space-y-1">
                 <h4 className="text-sm font-bold text-white">Scan for Verification</h4>
                 <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Use this code for quick entry at Lagos government facility check-ins.</p>
              </div>
           </div>
        </div>

        {/* Info Content */}
        <div className="lg:col-span-2 space-y-10">
           {/* Section 1: Detailed Info */}
           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Account Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                 {[
                   { label: 'Full Name', value: 'Seun Oluwaseun Babalola', icon: <User size={16} /> },
                   { label: 'Official Email', value: 'seun.b@example.ng', icon: <Mail size={16} /> },
                   { label: 'Verified Phone', value: '+234 803 000 1234', icon: <Phone size={16} /> },
                   { label: 'Registered On', value: 'January 12, 2024', icon: <Calendar size={16} /> }
                 ].map((item, i) => (
                   <div key={i} className="glass p-6 rounded-3xl border border-white/5 space-y-3">
                      <div className="flex items-center gap-2 text-slate-500">
                         {item.icon}
                         <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                      </div>
                      <div className="text-sm font-bold text-white">{item.value}</div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Section 2: Quick Links */}
           <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Quick Links</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                 {quickLinks.map((link, i) => (
                    <button 
                      key={i}
                      onClick={() => onNavigate(link.view)}
                      className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/10 hover:bg-white/[0.08] transition-all group flex items-center justify-between text-left"
                    >
                       <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                             {link.icon}
                          </div>
                          <div>
                             <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{link.title}</h4>
                             <p className="text-[10px] text-slate-500 font-medium">{link.desc}</p>
                          </div>
                       </div>
                       <ChevronRight size={20} className="text-slate-700 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </button>
                 ))}
              </div>
           </div>

           {/* Activity Log (Mini) */}
           <div className="space-y-6">
              <div className="flex items-center justify-between px-1">
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Recent Login Activity</h3>
                 <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline">View Security Log</button>
              </div>
              <div className="glass rounded-[2rem] border border-white/5 overflow-hidden">
                 <div className="divide-y divide-white/5">
                    {[
                      { device: 'iPhone 15 Pro • Lagos, NG', date: 'Today, 14:35', status: 'Success' },
                      { device: 'Chrome on MacOS • Ikeja, NG', date: 'Yesterday, 09:12', status: 'Success' }
                    ].map((activity, i) => (
                       <div key={i} className="px-8 py-4 flex items-center justify-between hover:bg-white/[0.01] transition-colors">
                          <div className="flex items-center gap-4">
                             <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-slate-600">
                                <History size={14} />
                             </div>
                             <div>
                                <div className="text-xs font-bold text-slate-200">{activity.device}</div>
                                <div className="text-[10px] text-slate-500 font-medium">{activity.date}</div>
                             </div>
                          </div>
                          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter">{activity.status}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
