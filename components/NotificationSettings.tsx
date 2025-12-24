
import React, { useState } from 'react';
import { 
  Bell, 
  Mail, 
  Smartphone, 
  Moon, 
  ArrowLeft, 
  Save, 
  CheckCircle2, 
  Zap, 
  Info,
  Clock,
  Check
} from 'lucide-react';
import { ViewType } from '../App';

interface NotificationSettingsProps {
  onNavigate: (view: ViewType) => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onNavigate }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Email Notifications State
  const [emailNotifs, setEmailNotifs] = useState({
    reminders: true,
    updates: true,
    news: true,
    marketing: false
  });

  // SMS Notifications State
  const [smsNotifs, setSmsNotifs] = useState({
    reminders: true,
    updates: true,
    news: false
  });

  // Push Notifications State
  const [pushNotifs, setPushNotifs] = useState({
    reminders: true,
    updates: true,
    breaking: true,
    all: false
  });

  // Quiet Hours State
  const [quietHours, setQuietHours] = useState({
    enabled: false,
    start: '22:00',
    end: '07:00'
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  const CheckboxItem = ({ 
    label, 
    checked, 
    onChange 
  }: { 
    label: string, 
    checked: boolean, 
    onChange: () => void 
  }) => (
    <label className="flex items-center justify-between group cursor-pointer p-4 rounded-2xl hover:bg-white/[0.03] transition-all">
      <span className={`text-sm font-medium transition-colors ${checked ? 'text-white' : 'text-slate-400'}`}>{label}</span>
      <div 
        onClick={onChange}
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${checked ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/20' : 'border-slate-700 bg-slate-900 group-hover:border-slate-500'}`}
      >
        {checked && <Check size={14} className="text-white font-black" />}
      </div>
      <input type="checkbox" className="hidden" checked={checked} readOnly />
    </label>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('settings')}
            className="flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Settings
          </button>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-white flex items-center gap-4">
               <Bell className="text-blue-500" size={32} /> Notification <span className="text-blue-500">Settings</span>
            </h1>
            <p className="text-slate-500 font-medium">Customize how and when you want to be reached.</p>
          </div>
        </div>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 disabled:opacity-50"
        >
           {saveSuccess ? <><CheckCircle2 size={18} /> Preferences Saved</> : <><Save size={18} /> Save Preferences</>}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Email Notifications */}
        <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-blue-500/20 transition-all">
           <div className="p-8 border-b border-white/5 flex items-center gap-4 bg-blue-600/5">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                 <Mail size={24} />
              </div>
              <h3 className="text-xl font-black text-white">Email Notifications</h3>
           </div>
           <div className="p-6 space-y-1">
              <CheckboxItem 
                label="Payment Reminders" 
                checked={emailNotifs.reminders} 
                onChange={() => setEmailNotifs({...emailNotifs, reminders: !emailNotifs.reminders})} 
              />
              <CheckboxItem 
                label="Registration Updates" 
                checked={emailNotifs.updates} 
                onChange={() => setEmailNotifs({...emailNotifs, updates: !emailNotifs.updates})} 
              />
              <CheckboxItem 
                label="News & Updates" 
                checked={emailNotifs.news} 
                onChange={() => setEmailNotifs({...emailNotifs, news: !emailNotifs.news})} 
              />
              <CheckboxItem 
                label="Marketing & Promotions" 
                checked={emailNotifs.marketing} 
                onChange={() => setEmailNotifs({...emailNotifs, marketing: !emailNotifs.marketing})} 
              />
           </div>
        </div>

        {/* SMS Notifications */}
        <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-emerald-500/20 transition-all">
           <div className="p-8 border-b border-white/5 flex items-center gap-4 bg-emerald-600/5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-400">
                 <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-black text-white">SMS Notifications</h3>
           </div>
           <div className="p-6 space-y-1">
              <CheckboxItem 
                label="Payment Reminders" 
                checked={smsNotifs.reminders} 
                onChange={() => setSmsNotifs({...smsNotifs, reminders: !smsNotifs.reminders})} 
              />
              <CheckboxItem 
                label="Registration Updates" 
                checked={smsNotifs.updates} 
                onChange={() => setSmsNotifs({...smsNotifs, updates: !smsNotifs.updates})} 
              />
              <CheckboxItem 
                label="News & Updates" 
                checked={smsNotifs.news} 
                onChange={() => setSmsNotifs({...smsNotifs, news: !smsNotifs.news})} 
              />
           </div>
        </div>

        {/* Push Notifications */}
        <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-amber-500/20 transition-all">
           <div className="p-8 border-b border-white/5 flex items-center gap-4 bg-amber-600/5">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/10 flex items-center justify-center text-amber-400">
                 <Zap size={24} />
              </div>
              <h3 className="text-xl font-black text-white">Push Notifications</h3>
           </div>
           <div className="p-6 space-y-1">
              <CheckboxItem 
                label="Payment Reminders" 
                checked={pushNotifs.reminders} 
                onChange={() => setPushNotifs({...pushNotifs, reminders: !pushNotifs.reminders})} 
              />
              <CheckboxItem 
                label="Registration Updates" 
                checked={pushNotifs.updates} 
                onChange={() => setPushNotifs({...pushNotifs, updates: !pushNotifs.updates})} 
              />
              <CheckboxItem 
                label="Breaking News" 
                checked={pushNotifs.breaking} 
                onChange={() => setPushNotifs({...pushNotifs, breaking: !pushNotifs.breaking})} 
              />
              <CheckboxItem 
                label="All Updates" 
                checked={pushNotifs.all} 
                onChange={() => setPushNotifs({...pushNotifs, all: !pushNotifs.all})} 
              />
           </div>
        </div>

        {/* Quiet Hours */}
        <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-indigo-500/20 transition-all">
           <div className="p-8 border-b border-white/5 flex items-center justify-between bg-indigo-600/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                   <Moon size={24} />
                </div>
                <h3 className="text-xl font-black text-white">Quiet Hours</h3>
              </div>
              <button 
                onClick={() => setQuietHours({...quietHours, enabled: !quietHours.enabled})}
                className={`w-12 h-6 rounded-full transition-all relative ${quietHours.enabled ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)]' : 'bg-slate-800'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${quietHours.enabled ? 'left-7' : 'left-1'}`}></div>
              </button>
           </div>
           <div className={`p-8 space-y-6 transition-opacity duration-500 ${quietHours.enabled ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                       <Clock size={12} /> Start Time
                    </label>
                    <input 
                      type="time" 
                      value={quietHours.start}
                      onChange={(e) => setQuietHours({...quietHours, start: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-all [color-scheme:dark]"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                       <Clock size={12} /> End Time
                    </label>
                    <input 
                      type="time" 
                      value={quietHours.end}
                      onChange={(e) => setQuietHours({...quietHours, end: e.target.value})}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-all [color-scheme:dark]"
                    />
                 </div>
              </div>
              <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-black">
                No non-emergency notifications between {quietHours.start} and {quietHours.end}.
              </p>
           </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="p-8 rounded-[3rem] bg-blue-600/5 border border-blue-500/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
          <Bell size={120} className="text-blue-500" />
        </div>
        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
          <Info size={32} />
        </div>
        <div className="flex-1 space-y-2 text-center md:text-left relative z-10">
           <h4 className="font-bold text-white text-lg">About Emergency Alerts</h4>
           <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
             Critical state alerts (e.g., flooding, civil emergencies) bypass all notification settings, including Quiet Hours, to ensure your safety. These are only issued by authorized state agencies.
           </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
