
import React, { useState } from 'react';
import { 
  Bookmark, 
  BookmarkCheck, 
  Search, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Share2, 
  MapPin, 
  Bell, 
  Zap, 
  Filter,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ViewType } from '../App';

interface DashboardNewsProps {
  onNavigate: (view: ViewType, id?: number) => void;
}

interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  img: string;
  isPriority?: boolean;
}

const DashboardNews: React.FC<DashboardNewsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Government' | 'Traffic' | 'Saved'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<Set<number>>(new Set([2])); // LIRS article bookmarked by default

  const articles: Article[] = [
    {
      id: 1,
      category: 'Traffic',
      title: 'Third Mainland Bridge Maintenance Completed',
      excerpt: 'Full traffic flow restored as structural repairs conclude ahead of schedule. Commuters report smooth transit times.',
      date: 'June 15, 2026',
      time: '3 min read',
      img: 'https://images.unsplash.com/photo-1542156822-6924d1a719c9?auto=format&fit=crop&q=80&w=600',
      isPriority: true
    },
    {
      id: 2,
      category: 'Government',
      title: 'LIRS Announces New Digital Tax Incentives',
      excerpt: 'Lagos State residents to enjoy streamlined filing for the upcoming financial year with additional relief for tech startups.',
      date: 'June 14, 2026',
      time: '4 min read',
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      category: 'Government',
      title: 'New LASRRA Enrollment Centers Opened in Epe',
      excerpt: 'To accommodate increasing demand, five additional centers have been commissioned for resident ID processing.',
      date: 'June 12, 2026',
      time: '2 min read',
      img: 'https://images.unsplash.com/photo-1589307734180-2623a63b0b7c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      category: 'Traffic',
      title: 'Ikeja Traffic Alert: Gridlock on Allen Avenue',
      excerpt: 'A broken-down heavy-duty vehicle is currently obstructing traffic at the Allen/Obafemi Awolowo roundabout.',
      date: 'Today',
      time: '1 min read',
      img: 'https://images.unsplash.com/photo-1542156822-6924d1a719c9?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const toggleBookmark = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarks(newBookmarks);
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'Saved') return bookmarks.has(article.id) && matchesSearch;
    if (activeTab === 'All') return matchesSearch;
    return article.category === activeTab && matchesSearch;
  });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight">Lagos <span className="text-blue-500">Updates</span></h1>
          <p className="text-slate-500 font-medium">Your personalized civic feed for Ikeja, Lagos.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group flex-1 min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search feed..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>
          <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Left Sidebar: Categories */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass p-4 rounded-3xl border border-white/5 space-y-1">
            {[
              { id: 'All', icon: <Bell size={18} /> },
              { id: 'Government', icon: <CheckCircle2 size={18} /> },
              { id: 'Traffic', icon: <MapPin size={18} /> },
              { id: 'Saved', icon: <Bookmark size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-3">
                  {tab.icon}
                  {tab.id}
                </div>
                {tab.id === 'Saved' && bookmarks.size > 0 && (
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">{bookmarks.size}</span>
                )}
              </button>
            ))}
          </div>

          {/* Quick Alert Box */}
          <div className="p-6 rounded-[2rem] bg-rose-500/10 border border-rose-500/20 space-y-4">
             <div className="flex items-center gap-2 text-rose-500 font-black text-[10px] uppercase tracking-widest">
                <Zap size={14} fill="currentColor" /> Urgent Alert
             </div>
             <p className="text-sm font-bold text-white leading-tight">Heavy rainfall expected across Lagos Island tomorrow morning.</p>
             <p className="text-xs text-slate-500">Source: NIMET • 2 hours ago</p>
          </div>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div 
                key={article.id} 
                onClick={() => onNavigate('article', article.id)}
                className="group relative glass p-6 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col md:flex-row gap-6 cursor-pointer"
              >
                {/* Image Container */}
                <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shrink-0 relative">
                  <img src={article.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {article.isPriority && (
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md shadow-lg">
                      Priority
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span className="text-blue-400">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    </div>
                    <button 
                      onClick={(e) => toggleBookmark(e, article.id)}
                      className={`p-2 rounded-lg transition-all ${bookmarks.has(article.id) ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-600 hover:text-white'}`}
                    >
                      {bookmarks.has(article.id) ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-600 uppercase">
                      <span className="flex items-center gap-1"><Clock size={12} /> {article.time}</span>
                      <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"><Share2 size={12} /> Share</span>
                    </div>
                    <div className="text-blue-500 group-hover:translate-x-1 transition-transform">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-24 text-center glass rounded-[3rem] border border-dashed border-white/5">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bookmark size={40} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No updates found</h3>
              <p className="text-slate-500 max-w-xs mx-auto">Try clearing your search or switching categories.</p>
              <button 
                onClick={() => {setActiveTab('All'); setSearchQuery('');}}
                className="mt-6 text-blue-500 font-bold hover:underline"
              >
                Reset Feed
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Suggested Reading Footer */}
      <div className="p-10 rounded-[3rem] bg-blue-600/5 border border-blue-500/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
          <Zap size={120} className="text-blue-500" />
        </div>
        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
          <Zap size={32} />
        </div>
        <div className="flex-1 space-y-2 text-center md:text-left relative z-10">
           <h4 className="font-bold text-white text-lg">Daily Digest Activated</h4>
           <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
             We've customized your feed based on your verified residence in <span className="text-blue-400 font-bold">Ikeja</span>. You'll receive real-time push notifications for traffic and emergency alerts in this area.
           </p>
        </div>
        <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 whitespace-nowrap relative z-10">
          Feed Settings <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

export default DashboardNews;
