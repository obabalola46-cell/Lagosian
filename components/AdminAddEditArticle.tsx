
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Send, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  Bold, 
  Italic, 
  List, 
  Code, 
  Calendar, 
  Tag as TagIcon, 
  Eye, 
  ChevronDown, 
  X, 
  CheckCircle2, 
  Loader2,
  FileText,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ViewType } from '../App';
import AdminLayout from './AdminLayout';

interface AdminAddEditArticleProps {
  onNavigate: (view: ViewType) => void;
  articleId?: number; // If provided, we are editing
}

const CATEGORIES = ['Government', 'Traffic', 'Health', 'Events', 'Environment', 'Infrastructure', 'Company'];

const AdminAddEditArticle: React.FC<AdminAddEditArticleProps> = ({ onNavigate, articleId }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Government',
    content: '',
    tags: [] as string[],
    status: 'Draft',
    publishDate: new Date().toISOString().split('T')[0],
  });

  const [tagInput, setTagInput] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Auto-slug generation
  useEffect(() => {
    if (!articleId) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, articleId]);

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      }
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  const handleAction = (type: 'save' | 'publish') => {
    if (type === 'save') setIsSaving(true);
    else setIsPublishing(true);

    setTimeout(() => {
      setIsSaving(false);
      setIsPublishing(false);
      onNavigate('admin-content');
    }, 1500);
  };

  return (
    <AdminLayout currentView="admin-edit-content" onNavigate={onNavigate}>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <button 
              onClick={() => onNavigate('admin-content')}
              className="flex items-center gap-2 text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest mb-2 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Content Manager
            </button>
            <h1 className="text-4xl font-black tracking-tight uppercase">
              {articleId ? 'Edit' : 'Add New'} <span className="text-blue-500">Article</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
             <button 
              onClick={() => handleAction('save')}
              disabled={isSaving || isPublishing}
              className="px-6 py-3 bg-white/5 border border-white/10 text-white font-black text-sm rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 disabled:opacity-50"
             >
                {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />} Save Draft
             </button>
             <button 
              onClick={() => handleAction('publish')}
              disabled={isSaving || isPublishing}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 disabled:opacity-50"
             >
                {isPublishing ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />} {formData.status === 'Published' ? 'Update Post' : 'Publish Article'}
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
             <div className="glass p-8 rounded-[3rem] border border-white/10 space-y-8">
                <div className="space-y-6">
                  {/* Title Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Article Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter a captivating headline..."
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full bg-slate-950 border border-white/5 rounded-2xl p-6 text-2xl font-black text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-800"
                    />
                  </div>

                  {/* Slug UI */}
                  <div className="flex items-center gap-3 px-4 py-2 bg-slate-950/50 rounded-xl border border-white/5 w-fit">
                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Slug:</div>
                    <div className="text-xs font-mono text-blue-400 truncate max-w-md">lagosian.ng/news/{formData.slug || '...' }</div>
                    <button className="text-slate-700 hover:text-white transition-colors">
                       <ExternalLink size={12} />
                    </button>
                  </div>

                  {/* Rich Text Editor Simulation */}
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Content Body</label>
                     <div className="border border-white/5 rounded-3xl overflow-hidden bg-slate-950">
                        {/* Editor Toolbar */}
                        <div className="p-3 bg-white/[0.02] border-b border-white/5 flex flex-wrap gap-2">
                           {[
                             { icon: <Bold size={16} />, label: 'Bold' },
                             { icon: <Italic size={16} />, label: 'Italic' },
                             { icon: <List size={16} />, label: 'List' },
                             { icon: <LinkIcon size={16} />, label: 'Link' },
                             { icon: <ImageIcon size={16} />, label: 'Image' },
                             { icon: <Code size={16} />, label: 'Code' },
                           ].map((tool, i) => (
                             <button key={i} type="button" className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                {tool.icon}
                             </button>
                           ))}
                           <div className="h-6 w-px bg-white/10 mx-2 self-center"></div>
                           <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600/10 text-blue-400 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600/20 transition-all">
                              <Sparkles size={12} /> AI Rewrite
                           </button>
                        </div>
                        {/* Content Input */}
                        <textarea 
                          rows={15}
                          value={formData.content}
                          onChange={(e) => setFormData({...formData, content: e.target.value})}
                          placeholder="Tell your story to Lagos..."
                          className="w-full bg-transparent p-8 text-slate-300 leading-relaxed focus:outline-none resize-none custom-scrollbar"
                        ></textarea>
                     </div>
                  </div>
                </div>
             </div>

             {/* SEO & Meta Block */}
             <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                   <Eye size={20} className="text-emerald-500" />
                   <h3 className="font-black text-white uppercase tracking-tighter">Search Preview</h3>
                </div>
                <div className="p-6 bg-slate-950 rounded-3xl border border-white/5 space-y-2">
                   <div className="text-xl font-bold text-blue-400">{formData.title || 'Your Article Title Here'}</div>
                   {/* FIXED: Escaped > characters to prevent build error */}
                   <div className="text-xs text-emerald-500 font-medium">lagosian.ng &gt; news &gt; {formData.slug || 'url-slug'}</div>
                   <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                     {formData.content || 'Start typing your content to see how it might appear in search engine results across the web.'}
                   </p>
                </div>
             </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6 lg:sticky lg:top-32">
             {/* Section: Status & Visibility */}
             <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 border-b border-white/5 pb-4">Publishing</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Article Status</label>
                    <div className="relative">
                      <select 
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                      >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                        <option value="Scheduled">Scheduled</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Publish Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                      <input 
                        type="date" 
                        value={formData.publishDate}
                        onChange={(e) => setFormData({...formData, publishDate: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 pl-10 text-sm text-white focus:outline-none focus:border-blue-500 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 space-y-3">
                   <div className="flex items-center gap-2">
                      <Clock size={14} className="text-blue-400" />
                      <span className="text-[10px] font-black uppercase text-blue-400">Last Auto-saved</span>
                   </div>
                   <p className="text-[10px] text-slate-500 font-bold uppercase">Today at 14:32</p>
                </div>
             </div>

             {/* Section: Category & Tags */}
             <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 border-b border-white/5 pb-4">Classification</h3>
                
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Primary Category</label>
                   <div className="relative">
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                      >
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Tags</label>
                      <div className="relative group">
                         <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={14} />
                         <input 
                           type="text" 
                           placeholder="Press Enter to add..."
                           value={tagInput}
                           onChange={(e) => setTagInput(e.target.value)}
                           onKeyDown={handleAddTag}
                           className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 pl-10 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
                         />
                      </div>
                   </div>
                   
                   <div className="flex flex-wrap gap-2">
                      {formData.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase">
                           {tag}
                           <button onClick={() => removeTag(tag)} className="hover:text-white transition-colors">
                              <X size={10} />
                           </button>
                        </span>
                      ))}
                      {formData.tags.length === 0 && (
                        <span className="text-[10px] text-slate-700 italic font-bold uppercase tracking-widest">No tags added</span>
                      )}
                   </div>
                </div>
             </div>

             {/* Section: Featured Image */}
             <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 border-b border-white/5 pb-4">Featured Image</h3>
                
                <div className="space-y-4">
                   <div className="relative group h-48 border-2 border-dashed border-white/5 bg-slate-950 rounded-[2rem] overflow-hidden transition-all hover:border-blue-500/30">
                      {imagePreview ? (
                        <>
                          <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
                          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <button onClick={() => setImagePreview(null)} className="p-3 bg-rose-600 text-white rounded-full shadow-xl">
                                <X size={20} />
                             </button>
                          </div>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-2">
                           <ImageIcon className="text-slate-700 group-hover:text-blue-500 transition-colors" size={32} />
                           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Click to upload image</p>
                           <p className="text-[8px] text-slate-700 font-black uppercase">JPG, PNG • 16:9 Aspect Ratio</p>
                        </div>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setImagePreview(URL.createObjectURL(file));
                        }}
                      />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAddEditArticle;
