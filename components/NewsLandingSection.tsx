
import React from 'react';
import { Calendar, Clock, ChevronRight, Newspaper } from 'lucide-react';

interface NewsLandingSectionProps {
  onReadArticle: (id: number) => void;
  onSeeAll: () => void;
}

const NewsLandingSection: React.FC<NewsLandingSectionProps> = ({ onReadArticle, onSeeAll }) => {
  const news = [
    {
      id: 1,
      category: 'Traffic',
      title: 'Third Mainland Bridge Maintenance Completed',
      excerpt: 'Full traffic flow restored as structural repairs conclude ahead of schedule...',
      date: 'June 15, 2026',
      time: '3 min read',
      img: 'https://images.unsplash.com/photo-1542156822-6924d1a719c9?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      category: 'Government',
      title: 'LIRS Announces New Digital Tax Incentives',
      excerpt: 'Lagos State residents to enjoy streamlined filing for the upcoming financial year...',
      date: 'June 14, 2026',
      time: '4 min read',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      category: 'Company Updates',
      title: 'Lagosian Reaches 100k Active Monthly Users',
      excerpt: 'Celebrating our milestone of simplifying civic life for thousands across the state...',
      date: 'June 12, 2026',
      time: '2 min read',
      img: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="py-24 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Newspaper size={14} /> News & Insights
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter">Stay <span className="text-blue-500">Informed</span></h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Verified news and government announcements tailored for the modern Lagosian.
            </p>
          </div>
          <button 
            onClick={onSeeAll}
            className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group"
          >
            View All News <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div 
              key={item.id} 
              className="glass rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all group flex flex-col cursor-pointer"
              onClick={() => onReadArticle(item.id)}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {item.time}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{item.excerpt}</p>
                <div className="text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  Read More <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsLandingSection;
