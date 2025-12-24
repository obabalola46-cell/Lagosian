
import React, { useState } from 'react';
import { 
  Search, 
  Rocket, 
  UserPlus, 
  CreditCard, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  ArrowRight,
  HelpCircle,
  FileText
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Category 1: Getting Started',
      items: [
        {
          q: 'What is Lagosian?',
          a: 'Lagosian is a unified platform that helps Lagos residents access government services, make payments, and stay informed — all in one place. Instead of using multiple websites and apps, you can do everything through Lagosian.'
        },
        {
          q: 'Is Lagosian free?',
          a: 'Yes, Lagosian is completely free to use. You only pay for your actual government obligations (like tax or LAWMA bills). We don\'t charge any additional fees for using the platform.'
        },
        {
          q: 'Is Lagosian an official government app?',
          a: 'Lagosian is a private platform, not an official government app. However, we\'re designed to work alongside official government systems and are aligned with Lagos State\'s digital transformation goals. All payments made through Lagosian go directly to the appropriate government agencies.'
        },
        {
          q: 'How do I create an account?',
          a: 'Click "Get Started" and enter your phone number. You\'ll receive an OTP to verify. Then, complete your profile with your basic information and verify your NIN. That\'s it — you\'re ready to use Lagosian!'
        },
        {
          q: 'What do I need to sign up?',
          a: 'You need:\n• A Nigerian phone number\n• Your National Identification Number (NIN)\n• A valid email address\n• Basic personal information'
        }
      ]
    },
    {
      id: 'registration',
      title: 'Category 2: Registration',
      items: [
        {
          q: 'What registrations can I complete on Lagosian?',
          a: 'Currently, you can register for:\n• LIRS Tax Registration (get your TIN)\n• LASRRA Resident Registration (Lagos Resident ID)\n• LAWMA Waste Management\nWe\'re adding more services regularly.'
        },
        {
          q: 'Why do I need to verify my NIN?',
          a: 'NIN verification confirms your identity and allows us to pre-fill your information for various registrations. It\'s a one-time process that saves you from entering the same details multiple times.'
        },
        {
          q: 'How long does registration take?',
          a: 'The online process takes 5-15 minutes depending on the service. Approval times vary:\n• Tax (LIRS): Usually instant TIN generation\n• LASRRA: 2-5 business days for card processing\n• LAWMA: 1-2 business days for PSP assignment'
        },
        {
          q: 'What if my registration is rejected?',
          a: 'You\'ll receive a notification explaining why. Most rejections are due to document quality issues or information mismatches. You can correct and resubmit directly in the app.'
        },
        {
          q: 'Can I track my registration status?',
          a: 'Yes! Go to Registration Hub → My Registrations to see the status of all your applications with real-time updates.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Category 3: Payments',
      items: [
        {
          q: 'What payments can I make through Lagosian?',
          a: 'You can pay:\n• LIRS Taxes (personal and business)\n• LAWMA Waste Management bills\n• Land Use Charge\n• Vehicle Registration fees\nMore payment types are being added.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept:\n• Debit/Credit Cards (Visa, Mastercard, Verve)\n• Bank Transfer\n• USSD Banking\n• Lagosian Wallet (coming soon)'
        },
        {
          q: 'Is my payment secure?',
          a: 'Absolutely. We use bank-level encryption (256-bit SSL) and partner with PCI-DSS compliant payment processors (Paystack/Flutterwave). Your card details are never stored on our servers.'
        },
        {
          q: 'Where does my payment go?',
          a: 'Payments go directly to the respective government agency (LIRS, LAWMA, etc.). Lagosian acts as a facilitator — we don\'t hold your funds.'
        },
        {
          q: 'How do I get a receipt?',
          a: 'A digital receipt is generated immediately after every successful payment. You can:\n• View it in Transaction History\n• Download as PDF\n• Share via email or WhatsApp\n• Print from the web app'
        },
        {
          q: 'My payment failed but money was deducted. What do I do?',
          a: 'Don\'t worry. If payment fails but money was deducted:\n1. Wait 24 hours — most auto-reverse\n2. If not reversed, go to Help → Report Issue\n3. Provide transaction reference\n4. Our team will resolve within 48 hours'
        }
      ]
    },
    {
      id: 'security',
      title: 'Category 4: Account & Security',
      items: [
        {
          q: 'How do I reset my password?',
          a: 'On the login page, click "Forgot Password." Enter your registered email or phone, and we\'ll send a reset link/OTP.'
        },
        {
          q: 'How do I change my phone number?',
          a: 'Go to Settings → Account → Change Phone Number. You\'ll need to verify both your old and new numbers.'
        },
        {
          q: 'How is my data protected?',
          a: 'We take data protection seriously:\n• 256-bit SSL encryption\n• NDPR compliance\n• No data selling\n• Regular security audits\n• Two-factor authentication available\nRead our Privacy Policy for full details.'
        },
        {
          q: 'Can I delete my account?',
          a: 'Yes. Go to Settings → Account → Delete Account. Note that this will:\n• Remove all your data\n• Cancel pending registrations\n• You\'ll need to re-register if you return'
        },
        {
          q: 'I can\'t log in. What should I do?',
          a: 'Try these steps:\n1. Check your internet connection\n2. Ensure correct phone/email\n3. Reset password if needed\n4. Clear app cache/cookies\n5. Contact support if issues persist'
        }
      ]
    },
    {
      id: 'news',
      title: 'Category 5: Updates & News',
      items: [
        {
          q: 'Where does the news come from?',
          a: 'Our news content is sourced from:\n• Official Lagos State Government announcements\n• Verified news agencies\n• Our editorial team\nAll content is fact-checked before publishing.'
        },
        {
          q: 'How do I customize my news feed?',
          a: 'Go to Updates → Settings:\n• Select your LGA for local news\n• Choose categories of interest\n• Set notification preferences'
        },
        {
          q: 'Can I submit news or tips?',
          a: 'Currently, news is curated by our team. The Eye Witness Reporting feature (coming soon) will allow citizens to submit verified reports.'
        }
      ]
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700">
      {/* 5.1: Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter">Help <span className="text-blue-500">Center</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions or get in touch with our support team.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for help..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 bg-slate-900 border border-white/10 rounded-[2rem] pl-16 pr-8 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 5.2: Quick Links */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <HelpCircle className="text-blue-500" /> Popular Topics
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Getting Started', desc: 'New to Lagosian? Start here.', icon: <Rocket className="text-blue-400" /> },
              { title: 'Registration Help', desc: 'Issues with registrations', icon: <UserPlus className="text-emerald-400" /> },
              { title: 'Payment Support', desc: 'Payment problems and receipts', icon: <CreditCard className="text-amber-400" /> },
              { title: 'Account & Security', desc: 'Login, password, security', icon: <ShieldCheck className="text-indigo-400" /> }
            ].map((topic, i) => (
              <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-blue-500/30 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{topic.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{topic.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.3: FAQ Categories */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {faqCategories.map((cat) => (
              <div key={cat.id} className="space-y-8">
                <h2 className="text-2xl font-black text-white/90 border-b border-white/10 pb-4">{cat.title}</h2>
                <div className="space-y-4">
                  {cat.items.map((item, idx) => {
                    const itemId = `${cat.id}-${idx}`;
                    const isOpen = openFaq === itemId;
                    return (
                      <div key={idx} className={`glass rounded-3xl border transition-all overflow-hidden ${isOpen ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/5'}`}>
                        <button 
                          onClick={() => toggleFaq(itemId)}
                          className="w-full flex items-center justify-between p-6 lg:p-8 text-left group"
                        >
                          <span className={`text-lg font-bold leading-tight ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white transition-colors'}`}>
                            {item.q}
                          </span>
                          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${isOpen ? 'bg-blue-600 border-blue-500 text-white' : 'border-white/10 text-slate-500'}`}>
                            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-8 pb-8 text-slate-400 leading-relaxed whitespace-pre-line animate-in fade-in slide-in-from-top-4 duration-300">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4: Still Need Help? */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter">Can't Find What You're <span className="text-blue-500">Looking For?</span></h2>
            <p className="text-slate-400 text-lg">Our support team is here to help.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1: Email */}
            <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all space-y-6">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Mail className="text-blue-400" size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Email Support</h4>
                <div className="text-blue-400 font-bold">support@lagosian.ng</div>
              </div>
              <p className="text-slate-500 text-sm">Response within 4 hours</p>
            </div>

            {/* Option 2: Live Chat */}
            <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all space-y-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <div className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg">Coming Soon</div>
              </div>
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <MessageSquare className="text-emerald-400" size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Live Chat</h4>
                <div className="text-emerald-400 font-bold opacity-50">Unavailable</div>
              </div>
              <p className="text-slate-500 text-sm">Chat with our team in real-time</p>
            </div>

            {/* Option 3: Call Us */}
            <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all space-y-6 relative group">
              <div className="absolute top-0 right-0 p-4">
                 <div className="bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg">Coming Soon</div>
              </div>
              <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <PhoneCall className="text-amber-400" size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Call Us</h4>
                <div className="text-amber-400 font-bold opacity-50">Unavailable</div>
              </div>
              <p className="text-slate-500 text-sm">Speak directly with support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
