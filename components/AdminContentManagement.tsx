
import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Edit3, 
  Eye, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Newspaper, 
  Tag, 
  BarChart2, 
  ArrowUpDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  Megaphone
} from 'lucide-react';
import { ViewType } from '../App';
import AdminLayout from './AdminLayout';

interface AdminContentManagementProps {
  onNavigate: (view: ViewType) => void;
}

const MOCK_ARTICLES = [
  { id: 1, title: 'Third Mainland Bridge Maintenance Completed', category: 'Traffic', status: 'Published', date: 'Jun 15, 2026', views: '12,430' },
  { id: 2, title: 'LIRS Announces New Digital Tax Incentives', category: 'Government', status: 'Published', date: 'Jun 14, 2026', views: '8,902' },
  { id: 3, title: 'Lagos Tech Week 2026: Bridging the Digital Divide', category: 'Events', status: 'Scheduled', date: 'Jun 20, 2026', views: '0' },
  { id: 4, title: 'New Waste Disposal Initiative in Ikeja', category: 'Environment', status: 'Draft', date: 'Jun 12, 2026', views: '0' },
  { id: 5, title: 'Lagosian Reaches 100k Active Monthly Users', category: 'Company', status: 'Published', date: 'Jun 10, 2026', views: '5,120' },
  { id: 6, title: 'Eko Atlantic Phase 4 Development Update', category: 'Infrastructure', status: 'Published', date: 'Jun 05, 2026', views: '2,840' },
];

const AdminContentManagement: React.FC<AdminContentManagementProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'Articles' | 'Announcements' | 'Categories'>('Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = MOCK_ARTICLES.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Published':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest"><CheckCircle2 size={12} /> Published</span>;
      case 'Draft':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest"><FileText size={12} /> Draft</span>;
      case 'Scheduled':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-widest"><Clock size={12} /> Scheduled</span>;
      default:
        return null;
    }
  };

  return (
    <AdminLayout currentView="admin-content" onNavigate={onNavigate}>
      <div className="space-y-10 animate-in fade-in duration-700">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tight uppercase">Content <span className="text-blue-500">Management</span></h1>
            <p className="text-slate-500 font-medium">Curate the Lagosian experience. Manage news, alerts, and content categories.</p>
          </div>
          <button 
            onClick={() => onNavigate('admin-edit-content')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 group"
          >
             <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" /> Add New Article
          </button>
        </div>

        {/* Search & Tabs Bar */}
        <div className="glass p-4 rounded-[2.5rem] border border-white/5 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-6">
          <div className="flex items-center gap-1 p-1 bg-slate-950 border border-white/5 rounded-2xl shrink-0">
            {[
              { id: 'Articles', icon: <Newspaper size={16} /> },
              { id: 'Announcements', icon: <Megaphone size={16} /> },
              { id: 'Categories', icon: <Tag size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {tab.icon}
                {tab.id}
              </button>
            ))}
          </div>

          <div className="relative flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder={`Search ${activeTab.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-slate-950 border border-white/5 rounded-2xl pl-14 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          <button className="h-12 px-6 bg-white/5 border border-white/5 rounded-2xl text-slate-400 hover:text-white transition-all flex items-center gap-3 shrink-0">
             <Filter size={18} />
             <span className="text-xs font-bold uppercase tracking-widest">Filters</span>
          </button>
        </div>

        {/* Content Table */}
        <div className="glass rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-sm border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                     Title <ArrowUpDown size={12} className="opacity-30" />
                  </th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Category</th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Status</th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em]">Date</th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                     Views <BarChart2 size={12} className="opacity-30" />
                  </th>
                  <th className="px-8 py-6 font-black text-slate-500 uppercase text-[10px] tracking-[0.2em] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-white/[0.01] transition-colors group">
                      <td className="px-8 py-6 max-w-md">
                        <div className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-1">{article.title}</div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                           {article.category}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        {getStatusBadge(article.status)}
                      </td>
                      <td className="px-8 py-6 text-slate-400 font-medium">
                        {article.date}
                      </td>
                      <td className="px-8 py-6 font-black text-white">
                        {article.views}
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all" title="Preview Article">
                             <Eye size={18} />
                          </button>
                          <button 
                            onClick={() => onNavigate('admin-edit-content')}
                            className="p-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all" title="Edit Article"
                          >
                             <Edit3 size={18} />
                          </button>
                          <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 transition-all" title="Delete Article">
                             <Trash2 size={18} />
                          </button>
                          <button className="p-2 text-slate-600 hover:text-white transition-colors">
                             <MoreVertical size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-8 py-20 text-center">
                       <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-slate-700">
                             <Search size={32} />
                          </div>
                          <p className="text-slate-500 font-medium italic">No articles found matching your criteria.</p>
                       </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-8 border-t border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
              Showing <span className="text-white">1 - {filteredArticles.length}</span> of <span className="text-white">{MOCK_ARTICLES.length}</span> articles
            </div>
            <div className="flex items-center gap-2">
              <button disabled className="p-3 rounded-xl border border-white/5 text-slate-700 disabled:opacity-30 cursor-not-allowed">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-1">
                <button className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-xs shadow-lg shadow-blue-500/20">1</button>
                <button className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all font-black text-xs">2</button>
              </div>
              <button className="p-3 rounded-xl border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="grid md:grid-cols-2 gap-8">
           <div className="p-8 rounded-[3rem] bg-emerald-600/5 border border-emerald-500/10 space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <BarChart2 size={20} />
                 </div>
                 <h4 className="font-bold text-white uppercase tracking-tight">Traffic Insight</h4>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                 Articles in the <span className="text-emerald-400 font-bold">Traffic</span> category are currently seeing 40% higher engagement. Consider publishing more bridge status updates during peak hours.
              </p>
           </div>
           <div className="p-8 rounded-[3rem] bg-blue-600/5 border border-blue-500/10 space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Megaphone size={20} />
                 </div>
                 <h4 className="font-bold text-white uppercase tracking-tight">Push Alerts</h4>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                 Remember to limit push announcements to <span className="text-blue-400 font-bold">Priority News</span> only to maintain high user retention and app quality.
              </p>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminContentManagement;
