
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Users, 
  Globe,
  CheckCircle,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  Shield
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
    agreePrivacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert("Please agree to the Privacy Policy before sending.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700">
      {/* Section 4.1: Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out for support, partnerships, or just to say hello.
          </p>
        </div>
      </section>

      {/* Section 4.2: Contact Options */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: General Inquiries */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
              <p className="text-slate-500 text-sm mb-4">Best for: General questions, feedback, suggestions</p>
              <div className="space-y-1">
                <div className="text-blue-400 font-bold">hello@lagosian.ng</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Clock size={12} /> Response: Within 24 hours
                </div>
              </div>
            </div>

            {/* Card 2: Support */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-slate-500 text-sm mb-4">Best for: Technical issues, account problems, payment issues</p>
              <div className="space-y-1">
                <div className="text-emerald-400 font-bold">support@lagosian.ng</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Clock size={12} /> Response: Within 4 hours
                </div>
              </div>
            </div>

            {/* Card 3: Partnerships */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-amber-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Partnerships</h3>
              <p className="text-slate-500 text-sm mb-4">Best for: Government, business, and media partnerships</p>
              <div className="space-y-1">
                <div className="text-amber-400 font-bold">partners@lagosian.ng</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Clock size={12} /> Response: Within 48 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.3: Contact Form */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full"></div>
            <div className="relative glass p-8 lg:p-16 rounded-[3rem] border border-white/10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. A member of the Lagosian team will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-400 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-black mb-8">Send Us a <span className="text-blue-500">Message</span></h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 ml-1">Full Name *</label>
                        <input 
                          required
                          type="text" 
                          value={formData.fullName}
                          onChange={e => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Tunde Bakare"
                          className="w-full bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 ml-1">Email Address *</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          placeholder="tunde@example.ng"
                          className="w-full bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 ml-1">Phone Number (Optional)</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          placeholder="+234 ..."
                          className="w-full bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 ml-1">Inquiry Type</label>
                        <select 
                          value={formData.inquiryType}
                          onChange={e => setFormData({...formData, inquiryType: e.target.value})}
                          className="w-full bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                        >
                          <option>General Inquiry</option>
                          <option>Technical Support</option>
                          <option>Partnership Opportunity</option>
                          <option>Media/Press</option>
                          <option>Feedback/Suggestion</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 ml-1">Subject *</label>
                      <input 
                        required
                        type="text" 
                        value={formData.subject}
                        onChange={e => setFormData({...formData, subject: e.target.value})}
                        placeholder="What's this about?"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 ml-1">Message *</label>
                      <textarea 
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        placeholder="How can we help simplify your Lagos life today?"
                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        checked={formData.agreePrivacy}
                        onChange={e => setFormData({...formData, agreePrivacy: e.target.checked})}
                        className="w-5 h-5 rounded border-white/10 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-950"
                      />
                      <label htmlFor="privacy" className="text-sm text-slate-400">
                        I agree to the <a href="#" className="text-blue-400 underline">Privacy Policy</a>
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.4: Office Information */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">Visit <span className="text-blue-500">Us</span></h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Address</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Lagosian Technologies<br />
                      Block 24, Innovation Hub Complex<br />
                      Ikeja, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Office Hours</h4>
                    <ul className="text-slate-400 space-y-1">
                      <li>Monday - Friday: <span className="text-white">9:00 AM - 6:00 PM</span></li>
                      <li>Saturday: <span className="text-white">10:00 AM - 2:00 PM</span></li>
                      <li>Sunday: <span className="text-rose-400">Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-video lg:aspect-square relative group">
              {/* Futuristic Map Placeholder */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <MapPin className="text-blue-500" size={40} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Interactive Map Loading</h4>
                <p className="text-slate-500 text-sm max-w-xs">We're located in the heart of Ikeja, easily accessible from across the state.</p>
              </div>
              <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5: Social Media */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Connect <span className="text-emerald-400">With Us</span></h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">Follow us for real-time updates, helpful tips, and the latest news across Lagos.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Twitter />, label: 'Twitter/X', handle: '@LagosianApp', color: 'blue' },
              { icon: <Instagram />, label: 'Instagram', handle: '@LagosianApp', color: 'rose' },
              { icon: <Facebook />, label: 'Facebook', handle: '/LagosianApp', color: 'indigo' },
              { icon: <Linkedin />, label: 'LinkedIn', handle: '/company/lagosian', color: 'cyan' }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className="group glass p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/5 transition-all flex flex-col items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:text-${social.color}-400 group-hover:scale-110 transition-all`}>
                  {social.icon}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{social.label}</div>
                  <div className="text-slate-500 text-xs">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
