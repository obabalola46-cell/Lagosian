
import React from 'react';

interface CTASectionProps {
  onDownload?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onDownload }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 group">
          {/* Background Animated Gradient */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593033620938-161d76a74b33?q=80&w=1200')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 opacity-90"></div>
          
          <div className="relative z-10 p-12 lg:p-24 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">
              Ready to Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Lagos Life?</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Join thousands of Lagosians who have already made the switch. It's free, secure, and takes less than 5 minutes to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button 
                onClick={onDownload}
                className="w-full sm:w-auto px-10 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-slate-100 hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get the App
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/10 border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-all">
                Contact Sales
              </button>
            </div>
            
            <p className="text-sm text-slate-400 font-medium">
              No credit card required. Free forever for basic features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
