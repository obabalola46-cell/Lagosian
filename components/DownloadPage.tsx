
import React, { useState, useEffect } from 'react';
import { Download, QrCode, MessageSquare, CheckCircle, Apple, Play, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIDownloadMockup: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateMockup = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: [{ parts: [{ text: 'A sleek futuristic smartphone floating in a clean studio environment, screen displaying a high-tech application interface with Lagos state logo and vibrant charts, high quality 3d render, soft cinematic lighting' }] }],
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Mockup generation failed:", error);
        setImageUrl("https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600");
      } finally {
        setLoading(false);
      }
    };

    generateMockup();
  }, []);

  return (
    <div className="relative z-10 animate-float">
       <div className="mx-auto w-[300px] lg:w-[350px] aspect-[9/19] rounded-[3.5rem] border-[10px] border-slate-900 bg-slate-950 overflow-hidden shadow-2xl shadow-blue-500/30">
          {loading ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-slate-900">
               <Loader2 className="text-blue-500 animate-spin" size={32} />
               <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Generating UI...</span>
            </div>
          ) : (
            <img 
              src={imageUrl || ''} 
              alt="Lagosian App Interface" 
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          )}
       </div>
    </div>
  );
};

const DownloadPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSmsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter">Get the <span className="text-blue-500">Lagosian App</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Available on iOS and Android. Download now and simplify your Lagos life.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
             {/* App Store Badge */}
             <a href="#" className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-xl">
                <Apple fill="currentColor" size={28} />
                <div className="text-left leading-tight">
                   <div className="text-[10px] uppercase font-bold text-slate-500">Download on the</div>
                   <div className="text-lg">App Store</div>
                </div>
             </a>
             
             {/* Google Play Badge */}
             <a href="#" className="flex items-center gap-3 bg-slate-900 border border-white/10 text-white px-8 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-xl">
                <div className="text-blue-500"><Play fill="currentColor" size={28} /></div>
                <div className="text-left leading-tight">
                   <div className="text-[10px] uppercase font-bold text-slate-500">Get it on</div>
                   <div className="text-lg">Google Play</div>
                </div>
             </a>
          </div>
        </div>
      </section>

      {/* Hero Mockup & QR Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mockup Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
              <AIDownloadMockup />
            </div>

            {/* QR Code and SMS */}
            <div className="space-y-12">
               <div className="glass p-10 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center gap-10">
                  <div className="shrink-0 p-4 bg-white rounded-3xl">
                     <QrCode size={140} className="text-slate-900" />
                  </div>
                  <div className="text-center md:text-left space-y-4">
                     <h3 className="text-2xl font-bold">Scan to Download</h3>
                     <p className="text-slate-500">Open your camera app and point it at the QR code to download the app instantly.</p>
                     <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 font-bold text-sm">
                        <CheckCircle size={16} /> 100% Secure & Verified
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Text yourself a download link</h3>
                  <form onSubmit={handleSmsSubmit} className="relative group max-w-md">
                     <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                           type="tel" 
                           placeholder="+234 ..." 
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           required
                           className="flex-1 h-16 bg-slate-900 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                        <button 
                           type="submit"
                           className="px-8 h-16 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                           {isSent ? <CheckCircle size={20} /> : <MessageSquare size={20} />}
                           {isSent ? 'Sent!' : 'Send link'}
                        </button>
                     </div>
                  </form>
                  <p className="text-xs text-slate-500">Standard message rates may apply. Lagosian does not share your phone number.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Reminder */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Everything you need in one place</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Smart Registration', desc: 'Unified profiles for LIRS, LASRRA, and LAWMA.', icon: <CheckCircle className="text-blue-400" /> },
              { title: 'Unified Payments', desc: 'Pay all state duties with zero stress.', icon: <CheckCircle className="text-emerald-400" /> },
              { title: 'Real-time Updates', desc: 'Verified news and government announcements.', icon: <CheckCircle className="text-amber-400" /> }
            ].map((f, i) => (
               <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 mx-auto flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h4 className="text-lg font-bold">{f.title}</h4>
                  <p className="text-slate-500 text-sm">{f.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
