
import React from 'react';
import { 
  Rocket, 
  Target, 
  ShieldCheck, 
  Users, 
  Zap, 
  Heart, 
  Linkedin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ViewType } from '../App';

const PermanentLagosSkyline: React.FC = () => {
  return (
    <div className="relative group overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
      {/* High-quality permanent Lagos image with futuristic treatment */}
      <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 pointer-events-none"></div>
      <img 
        src="https://images.unsplash.com/photo-1542156822-6924d1a719c9?q=80&w=1600&auto=format&fit=crop" 
        alt="Futuristic Lagos Skyline" 
        className="relative w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      {/* Digital Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

const AboutPage: React.FC<{ onNavigate: (view: ViewType) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700">
      {/* 3.1: Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Lagosian</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We're on a mission to simplify Lagos life for every resident.
          </p>
        </div>
      </section>

      {/* 3.2: Our Story */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
              <PermanentLagosSkyline />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Our <span className="text-blue-500">Story</span></h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>Lagosian was born from frustration — and hope.</p>
                <p>
                  Like many Lagosians, our founders spent countless hours navigating the complex web of government services. Multiple websites, repeated registrations, confusing payment processes, and unreliable information sources. We knew there had to be a better way.
                </p>
                <p>
                  In 2024, we set out to build that better way. Not to replace government services, but to make them accessible. Not to compete with existing platforms, but to unify them. Not to add another app to your phone, but to replace five.
                </p>
                <p>
                  Today, Lagosian is becoming the digital bridge between Lagos residents and their government — making civic engagement simple, fast, and even enjoyable.
                </p>
                <p className="text-white font-bold italic">We're just getting started.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3: Our Mission & Vision */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="p-12 rounded-[3rem] bg-blue-600/10 border border-blue-500/20 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-4">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To simplify how Lagos residents interact with their city by unifying government services, payments, and information into one seamless platform.
              </p>
            </div>
            <div className="p-12 rounded-[3rem] bg-emerald-600/10 border border-emerald-500/20 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                A Lagos where every resident can complete their civic duties in minutes, not hours — and where being informed is effortless.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-slate-500 mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Simplicity First', desc: "If it's complicated, we haven't done our job.", icon: <Zap className="text-amber-400" /> },
                { title: 'Trust & Transparency', desc: "Your data is yours. We never sell your information.", icon: <ShieldCheck className="text-blue-400" /> },
                { title: 'Lagos-Centric', desc: 'Built by Lagosians, for the unique realities of life in Lagos.', icon: <Heart className="text-rose-400" /> },
                { title: 'Continuous Improvement', desc: 'We listen, learn, and improve based on your feedback.', icon: <Sparkles className="text-emerald-400" /> },
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 mx-auto">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.4: The Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Meet the <span className="text-blue-500">Team</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { 
                name: 'Oluwaseun Babalola', 
                title: 'Co-Founder & CEO', 
                bio: "With a background in marketing and business development, Seun leads Lagosian's vision and growth strategy. He's passionate about using technology to solve everyday problems for Africans.",
                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500' 
              },
              { 
                name: 'Babajide Babalola', 
                title: 'Co-Founder & CTO', 
                bio: "Jide brings years of web and mobile development experience to Lagosian. He leads our engineering team and ensures our platform is fast, secure, and reliable.",
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500' 
              }
            ].map((member, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] text-center space-y-6 group">
                <div className="relative mx-auto w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500 transition-all">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">{member.name}</h4>
                  <div className="text-blue-400 font-bold uppercase tracking-widest text-xs">{member.title}</div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 group">
                We're growing! Interested in joining us? <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* 3.5: Our Backers/Partners */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-8">Supported <span className="text-emerald-400">By</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Lagosian is proud to be part of the LASRIC Innovation Fund Cohort 7, supported by Lagos State Government's commitment to fostering local innovation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-black text-white">LASRIC</div>
                <span className="text-xl font-bold tracking-tight text-white">LASRIC FUND</span>
             </div>
             <div className="h-8 w-px bg-white/10"></div>
             <div className="text-2xl font-black italic tracking-tighter text-white/50">LAGOS STATE GOVT</div>
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto glass p-12 lg:p-24 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
           <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Get in <span className="text-blue-500">Touch</span></h2>
           <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
              Have questions? Want to partner? Just want to say hello? Our team is always ready to connect.
           </p>
           <button 
            onClick={() => onNavigate('contact')}
            className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl transition-all transform hover:-translate-y-1"
           >
              Contact Us
           </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
