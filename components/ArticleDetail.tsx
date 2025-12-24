
import React from 'react';
import { Calendar, Clock, ChevronRight, ArrowLeft, Twitter, Facebook, Link as LinkIcon, Share2, MessageCircle } from 'lucide-react';
import { ViewType } from '../App';

interface ArticleDetailProps {
  articleId: number;
  onNavigate: (view: ViewType, id?: number) => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articleId, onNavigate }) => {
  // Mock data fetching based on articleId
  const article = {
    id: articleId,
    category: articleId === 1 ? 'Traffic' : articleId === 2 ? 'Government' : 'Company Updates',
    title: articleId === 1 
      ? 'Third Mainland Bridge Maintenance Completed' 
      : articleId === 2 
        ? 'LIRS Announces New Digital Tax Incentives'
        : 'Lagosian Reaches 100k Active Monthly Users',
    subtitle: 'The project was finished 48 hours ahead of schedule, marking a significant win for Lagos commuters.',
    date: 'June 15, 2026',
    time: '3 min read',
    author: 'Admin',
    img: articleId === 1 
      ? 'https://images.unsplash.com/photo-1542156822-6924d1a719c9?auto=format&fit=crop&q=80&w=1200'
      : articleId === 2 
        ? 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200'
        : 'https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80&w=1200',
    content: [
      { type: 'p', text: 'Lagos, the commercial nerve center of Nigeria, witnessed a major relief today as the Lagos State Government announced the successful completion of structural repairs on the Third Mainland Bridge.' },
      { type: 'h2', text: 'A Faster Commute for Millions' },
      { type: 'p', text: 'The bridge, which serves as a critical artery linking the mainland to the islands, had been undergoing phased maintenance for the past several weeks. Authorities stated that the use of advanced polymer-modified asphalt and robotic inspection tools allowed the crew to work faster than initially projected.' },
      { type: 'quote', text: "Our goal was to minimize disruption while ensuring the highest safety standards. Seeing the first vehicles cross the new surface 48 hours early is a testament to the digital planning tools we've adopted." },
      { type: 'p', text: 'In addition to the road resurfacing, the project included the installation of 500 new smart LED streetlights and 24/7 CCTV surveillance cameras integrated with the state emergency response center.' },
      { type: 'h2', text: 'Future Upgrades' },
      { type: 'list', items: ['Phased lane closures for minor aesthetic work', 'Integration with Lagosian App traffic alerts', 'Real-time structural health monitoring sensors'] }
    ]
  };

  const relatedArticles = [
    { id: 4, title: 'Lagos Tech Week 2026: Bridging the Digital Divide', cat: 'Events', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600' },
    { id: 5, title: 'Mobile Health Clinics Expand Coverage to Ikorodu', cat: 'Health', img: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=600' },
    { id: 6, title: 'New LASRRA Enrollment Centers Opened', cat: 'Government', img: 'https://images.unsplash.com/photo-1589307734180-2623a63b0b7c?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button 
          onClick={() => onNavigate('news')}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to News
        </button>
        
        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-12">
          <span>Home</span> <ChevronRight size={10} /> <span>News</span> <ChevronRight size={10} /> <span>{article.category}</span> <ChevronRight size={10} /> <span className="text-white">{article.title}</span>
        </div>

        {/* Article Header */}
        <header className="space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest">
            {article.category}
          </div>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-blue-600 pl-6">
            {article.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-white/5">
            <div className="flex items-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-widest">
              <span>By {article.author}</span>
              <span>{article.date}</span>
              <span>{article.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all border border-white/5">
                <Twitter size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all border border-white/5">
                <Facebook size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all border border-white/5">
                <MessageCircle size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/5">
                <LinkIcon size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl mb-16 relative">
          <img src={article.img} alt={article.title} className="w-full aspect-video object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-400 leading-relaxed">
          {article.content.map((block, i) => {
            if (block.type === 'p') return <p key={i}>{block.text}</p>;
            if (block.type === 'h2') return <h2 key={i} className="text-2xl font-black text-white pt-8">{block.text}</h2>;
            if (block.type === 'quote') return (
              <blockquote key={i} className="p-8 bg-blue-600/5 rounded-3xl border border-blue-500/20 text-white font-medium italic relative">
                <span className="text-6xl text-blue-500/20 absolute top-2 left-4">"</span>
                {block.text}
              </blockquote>
            );
            if (block.type === 'list') return (
              <ul key={i} className="space-y-4 list-disc pl-6">
                {block.items?.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
            return null;
          })}
        </article>

        {/* Footer & Share */}
        <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-slate-500 uppercase">#Infrastructure</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-slate-500 uppercase">#Transportation</span>
          </div>
          <button className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
            Share Article <Share2 size={16} />
          </button>
        </div>

        {/* Related Articles */}
        <div className="mt-32 space-y-12">
          <h3 className="text-2xl font-black tracking-tight">Related <span className="text-blue-500">Updates</span></h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div 
                key={rel.id} 
                className="glass rounded-[2rem] overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all group flex flex-col cursor-pointer"
                onClick={() => onNavigate('article', rel.id)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={rel.img} alt={rel.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest block mb-2">{rel.cat}</span>
                  <h4 className="text-sm font-bold group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">{rel.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
