
import React from 'react';
import { 
  Fingerprint, 
  Gavel, 
  IdCard, 
  Trash2, 
  HardDrive, 
  MapPin, 
  LayoutDashboard, 
  Wallet, 
  ArrowRightLeft, 
  Clock, 
  FileCheck, 
  History, 
  BadgeCheck, 
  Megaphone, 
  Map, 
  Sliders, 
  Bell, 
  Bookmark,
  Check,
  X,
  ChevronRight,
  Sparkles,
  Home,
  Calendar,
  Stethoscope,
  AlertOctagon,
  Eye,
  Palmtree
} from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700">
      {/* 2.1: Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter mb-6">
            Powerful Features for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Every Lagosian</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover everything Lagosian can do for you — from registration to payments to staying informed.
          </p>
        </div>
      </section>

      {/* 2.2: Registration Features */}
      <section className="py-24 bg-slate-950/50" id="registration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            <div className="lg:col-span-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
                Step 01
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Smart Registration <span className="text-blue-500">Hub</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Say goodbye to multiple registration processes. Lagosian's Smart Registration Hub lets you complete all your Lagos government registrations from one place, using one profile.
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 text-white font-bold mb-2">
                  <Fingerprint className="text-blue-400" />
                  One-Time KYC
                </div>
                <p className="text-slate-500 text-sm">
                  Complete your identity verification once using your NIN. Your verified profile is used across all registrations — no need to re-enter information.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Tax Registration (LIRS)', 
                  desc: 'Register as a taxpayer in minutes. We guide you through the process, help determine tax obligations, and generate your TIN.',
                  icon: <Gavel size={24} className="text-blue-400" /> 
                },
                { 
                  title: 'Resident Registration (LASRRA)', 
                  desc: 'Get your Lagos Resident ID without visiting any office. Complete application online and track your card delivery.',
                  icon: <IdCard size={24} className="text-emerald-400" /> 
                },
                { 
                  title: 'Waste Management (LAWMA)', 
                  desc: 'Register your property for waste collection services. Get assigned to local PSP and set up easy payment schedules.',
                  icon: <Trash2 size={24} className="text-amber-400" /> 
                },
                { 
                  title: 'Document Upload & Storage', 
                  desc: 'Securely upload and store your supporting documents. Access them anytime you need for any registration.',
                  icon: <HardDrive size={24} className="text-indigo-400" /> 
                },
                { 
                  title: 'Application Tracking', 
                  desc: "Monitor the status of all your applications in real-time. Know exactly when you're approved or if action is needed.",
                  icon: <MapPin size={24} className="text-rose-400" /> 
                },
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                  <div className="mb-6 w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.3: Payment Features */}
      <section className="py-24" id="payments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Unified Payment <span className="text-emerald-400">Gateway</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              All your Lagos financial obligations in one dashboard. See what you owe, get reminded before deadlines, and pay instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 row-span-2 p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <LayoutDashboard size={120} className="text-white/5 -rotate-12 transition-transform group-hover:rotate-0 duration-700" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Payment Dashboard</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    See all your pending and upcoming payments at a glance. Prioritize by due date and amount with a visual timeline of your financial civic health.
                  </p>
                  <ul className="space-y-4">
                    {['LIRS Tax Payments', 'LAWMA Waste Bills', 'Land Use Charge', 'Vehicle Registration', 'Business Permits'].map((type, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-300">
                        <Check size={18} className="text-emerald-400" />
                        <span className="text-sm font-medium">{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 flex items-center gap-4">
                   <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-blue-600 flex items-center justify-center text-[10px] font-bold">VISA</div>
                      <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-emerald-600 flex items-center justify-center text-[10px] font-bold">MC</div>
                      <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-amber-600 flex items-center justify-center text-[10px] font-bold">USSD</div>
                   </div>
                   <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Flexible Payment Methods</span>
                </div>
              </div>
            </div>

            {[
              { title: 'Smart Reminders', desc: 'Get notifications 7, 3, and 1 day before any payment is due.', icon: <Clock className="text-amber-400" /> },
              { title: 'Digital Receipts', desc: 'Official digital receipts for every payment. Download or share anytime.', icon: <FileCheck className="text-blue-400" /> },
              { title: 'Transaction History', desc: 'Complete record with filtering and exporting capabilities.', icon: <History className="text-indigo-400" /> },
              { title: 'Wallet System', desc: 'Store value for quick one-tap payments for recurring bills.', icon: <Wallet className="text-emerald-400" /> },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4: Updates Features */}
      <section className="py-24 bg-slate-950/50" id="updates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase">
                Stay Informed
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Lagos Updates <span className="text-amber-400">Feed</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Stay informed with verified, relevant news and updates about Lagos. Personalized to your location and interests.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Verified News Only', icon: <BadgeCheck size={20} className="text-blue-400" /> },
                  { title: 'Gov Announcements', icon: <Megaphone size={20} className="text-emerald-400" /> },
                  { title: 'Location-Based', icon: <Map size={20} className="text-amber-400" /> },
                  { title: 'Push Notifications', icon: <Bell size={20} className="text-rose-400" /> },
                  { title: 'Bookmark & Share', icon: <Bookmark size={20} className="text-indigo-400" /> },
                  { title: 'Category Filters', icon: <Sliders size={20} className="text-slate-400" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    {item.icon}
                    <span className="text-sm font-bold text-slate-300">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full"></div>
              <div className="relative space-y-4">
                {/* News Mockups */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">Traffic</span>
                    <span className="text-slate-500 text-[10px]">2 mins ago</span>
                  </div>
                  <h4 className="font-bold mb-2">Third Mainland Bridge Reopens Fully</h4>
                  <p className="text-xs text-slate-400">Repair work completed 2 days early. Commuters can now use both lanes...</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl ml-8 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Gov</span>
                    <span className="text-slate-500 text-[10px]">1 hour ago</span>
                  </div>
                  <h4 className="font-bold mb-2">New Waste Disposal Initiative in Ikeja</h4>
                  <p className="text-xs text-slate-400">Lagos State launches pilot recycling program for Ikeja residents...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5: Coming Soon */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Coming <span className="text-blue-500">Soon</span></h2>
            <p className="text-slate-400">We're constantly building new features based on what Lagosians need.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Housing & Property', date: 'Q2 2026', icon: <Home className="text-indigo-400" /> },
              { title: 'Events Calendar', date: 'Q2 2026', icon: <Calendar className="text-rose-400" /> },
              { title: 'Health Services', date: 'Q3 2026', icon: <Stethoscope className="text-emerald-400" /> },
              { title: 'Emergency Services', date: 'Q3 2026', icon: <AlertOctagon className="text-amber-400" /> },
              { title: 'Eye Witness Reporting', date: 'Q4 2026', icon: <Eye className="text-blue-400" /> },
              { title: 'Tourism Guide', date: 'Q4 2026', icon: <Palmtree className="text-cyan-400" /> },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 border-dashed relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                   <div className="text-[10px] font-bold text-blue-500/50 uppercase tracking-widest bg-blue-500/5 px-2 py-1 rounded-lg">Coming {item.date}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-400 group-hover:text-white transition-colors">{item.title}</h4>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">
                Want to suggest a feature? Contact Us <ChevronRight size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* 2.6: Feature Comparison Table */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Why Choose <span className="text-blue-500">Lagosian?</span></h2>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/50 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-slate-500">Feature</th>
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-slate-500">Without Lagosian</th>
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-blue-400">With Lagosian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { f: 'Number of apps needed', old: '5+ different platforms', new: '1 unified platform' },
                  { f: 'Registration time', old: 'Hours to days', new: 'Minutes' },
                  { f: 'Payment platforms', old: 'Multiple portals', new: 'Single dashboard' },
                  { f: 'Deadline reminders', old: 'None/manual', new: 'Automated' },
                  { f: 'News verification', old: 'Uncertain sources', new: 'Verified only' },
                  { f: 'Document storage', old: 'Physical/scattered', new: 'Digital vault' },
                  { f: 'Support', old: 'Office visits', new: 'In-app help' },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 font-bold text-slate-300">{row.f}</td>
                    <td className="p-8 text-slate-500 flex items-center gap-2">
                      <X size={14} className="text-rose-500/50" />
                      {row.old}
                    </td>
                    <td className="p-8 text-white font-medium flex items-center gap-2">
                      <Check size={18} className="text-emerald-500" />
                      {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final Mini CTA for Features Page */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
           <div className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <Sparkles className="text-white" size={40} />
           </div>
           <h3 className="text-3xl font-bold">Experience Lagos, Simplified.</h3>
           <p className="text-slate-400 text-lg">Join 10,000+ residents who have reclaimed their time.</p>
           <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
              Get Started for Free
           </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
