
import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Heart, ShieldEllipsis } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface FooterProps {
  onNavigate?: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const columns = [
    {
      title: 'Product',
      links: [
        { name: 'Features', view: 'features' as const },
        { name: 'How It Works', view: 'home' as const },
        { name: 'Pricing', view: 'home' as const },
        { name: 'Download App', view: 'download' as const },
        { name: 'API (Coming Soon)', view: 'home' as const }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', view: 'about' as const },
        { name: 'Careers', view: 'home' as const },
        { name: 'Blog', view: 'news' as const },
        { name: 'Press Kit', view: 'home' as const },
        { name: 'Contact', view: 'contact' as const }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', view: 'help' as const },
        { name: 'FAQs', view: 'help' as const },
        { name: 'Community', view: 'home' as const },
        { name: 'Developers', view: 'home' as const },
        { name: 'Status Page', view: 'home' as const }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', view: 'home' as const },
        { name: 'Privacy Policy', view: 'home' as const },
        { name: 'Cookie Policy', view: 'home' as const },
        { name: 'Data Protection', view: 'home' as const }
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate?.('home')}
            >
              <Logo size={40} />
              <span className="text-2xl font-extrabold tracking-tighter text-white uppercase">LAGOSIAN</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Your Lagos. Simplified. The one-stop digital companion for the modern Lagos resident.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => onNavigate?.(link.view)}
                      className="text-slate-500 hover:text-white text-sm transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-slate-500 text-sm">
              © 2024 Lagosian Technologies. All rights reserved.
            </p>
            <button 
              onClick={() => onNavigate?.('admin-login')}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-700 hover:text-blue-500 transition-colors"
            >
              <ShieldEllipsis size={14} /> Admin Portal
            </button>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> in Lagos, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
