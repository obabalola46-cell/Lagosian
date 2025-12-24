
import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is Lagosian free to use?',
      a: 'Yes! Lagosian is completely free to download and use. You only pay for your actual government obligations (tax, LAWMA, etc.) with no additional fees.'
    },
    {
      q: 'Is my information secure?',
      a: 'Absolutely. We use bank-level encryption to protect your data. Your information is never shared without your consent and we comply with Nigeria Data Protection Regulation (NDPR).'
    },
    {
      q: 'Is Lagosian an official government app?',
      a: 'Lagosian is a private platform designed to help Lagos residents access government services more easily. We work alongside official government systems to provide a better user experience.'
    },
    {
      q: 'What services can I register for?',
      a: "Currently, you can register for LIRS Tax, LASRRA Resident ID, and LAWMA Waste Management. We're adding more services regularly."
    }
  ];

  return (
    <section className="py-24" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-extrabold">Frequently Asked <span className="text-blue-500">Questions</span></h2>
          <p className="text-slate-400">Everything you need to know about using the Lagosian app.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border transition-all ${openIndex === i ? 'bg-white/5 border-blue-500/50' : 'bg-transparent border-white/10'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold ${openIndex === i ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                {openIndex === i ? <Minus className="text-blue-500" /> : <Plus className="text-slate-500" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
            View All FAQs <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
