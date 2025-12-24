
import React, { useState } from 'react';
import { Search, Calendar, Clock, ChevronRight, Newspaper, ArrowRight, Mail } from 'lucide-react';

interface NewsPageProps {
  onReadArticle: (id: number) => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ onReadArticle }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tabs = ['All', 'Government', 'Traffic', 'Health', 'Events', 'Company Updates'];

  const articles = [
    {
      id: 1,
      category: 'Traffic',
      title: 'Third Mainland Bridge Maintenance Completed',
      excerpt: 'Full traffic flow restored as structural repairs conclude ahead of schedule. The bridge now features enhanced night-time lighting and new lane markings.',
      date: 'June 15, 2026',
      time: '3 min read',
      img: 'https://images.unsplash.com/photo-1542156822-6924d1a719c9?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 2,
      category: 'Government',
      title: 'LIRS Announces New Digital Tax Incentives',
      excerpt: 'Lagos State residents to enjoy streamlined filing for the upcoming financial year with additional relief for small business owners registered via the Lagosian app.',
      date: 'June 14, 2026',
      time: '4 min read',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 3,
      category: 'Company Updates',
      title: 'Lagosian Reaches 100k Active Monthly Users',
      excerpt: 'Celebrating our milestone of simplifying civic life for thousands across the state. Our community continues to grow at an unprecedented pace.',
      date: 'June 12, 2026',
      time: '2 min read',
      img: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 4,
      category: 'Events',
      title: 'Lagos Tech Week 2026: Bridging the Digital Divide',
      excerpt: 'Innovation, networking and futuristic solutions take center stage at the Landmark Events Centre this June.',
      date: 'June 10, 2026',
      time: '5 min read',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      category: 'Health',
      title: 'Mobile Health Clinics Expand Coverage to Ikorodu',
      excerpt: 'Primary healthcare becomes more accessible with the launch of five new mobile units dedicated to underserved communities.',
      date: 'June 08, 2026',
      time: '3 min read',
      img: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      category: 'Government',
      title: 'New LASRRA Enrollment Centers Opened',
      excerpt: 'To accommodate increasing demand, ten additional centers have been commissioned across various LGAs for resident ID processing.',
      date: 'June 05, 2026',
      time: '2 min read',
      img: 'https://images.unsplash.com/photo-1589307734180-2623a63b0b7c?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const isSearching = searchQuery.trim().length > 0;

  // Filtering Logic
  const filteredArticles = articles.filter(article => {
    const matchesTab = activeTab === 'All' || article.category === activeTab;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const featuredArticle = articles[0];
  
  // If not searching, we exclude the featured article from the main grid to avoid duplication
  const displayArticles = isSearching 
    ? filteredArticles 
    : filteredArticles.filter(a => a.id !== featuredArticle.id);

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-700">
      {/* 8.1: Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter">Lagos <span className="text-blue-500">News & Updates</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stay informed with verified news, government announcements, and Lagosian updates.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group pt-4">
            <Search className="absolute left-6 top-[calc(50%+8px)] -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search articles by keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] pl-16 pr-8 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-2xl"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8.2: Featured Article (Hidden when searching) */}
      {!isSearching && activeTab === 'All' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="glass rounded-[3rem] overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => onReadArticle(featuredArticle.id)}
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={featuredArticle.img} alt={featuredArticle.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-8 left-8 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                    Featured
                  </div>
                </div>
                <div className="p-10 lg:p-20 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                    <span className="text-blue-400">{featuredArticle.category}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                    <span>{featuredArticle.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                    <span>{featuredArticle.time}</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black leading-tight group-hover:text-blue-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="pt-4">
                    <span className="flex items-center gap-2 text-blue-400 font-black uppercase tracking-widest">
                      Read More <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8.3: Article Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSearching && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Search size={24} className="text-blue-500" />
                Results for "{searchQuery}"
                <span className="text-sm font-normal text-slate-500 ml-2">({displayArticles.length} found)</span>
              </h2>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArticles.length > 0 ? (
              displayArticles.map((item) => (
                <div 
                  key={item.id} 
                  className="glass rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all group flex flex-col cursor-pointer"
                  onClick={() => onReadArticle(item.id)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{item.excerpt}</p>
                    <div className="text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                      Read More <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-slate-500 glass rounded-[3rem] border border-dashed border-white/10">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p>Try adjusting your search keywords or category filters.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveTab('All');}}
                  className="mt-6 text-blue-500 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
          {!isSearching && displayArticles.length > 0 && (
            <div className="mt-20 text-center">
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 8.4: Newsletter Signup */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto glass p-12 lg:p-24 rounded-[4rem] relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-16 h-16 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center mb-4">
            <Mail className="text-white" size={32} />
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Stay <span className="text-blue-500">Updated</span></h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            Get the latest Lagos news and Lagosian updates delivered to your inbox.
          </p>
          
          <form className="max-w-md mx-auto relative group flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              required
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 h-16 bg-slate-900 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
            />
            <button 
              type="submit"
              className="px-8 h-16 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
