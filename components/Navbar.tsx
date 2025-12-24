
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewType } from '../App';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: 'home' as const },
    { name: 'Features', view: 'features' as const },
    { name: 'About Us', view: 'about' as const },
    { name: 'News', view: 'news' as const },
    { name: 'Contact', view: 'contact' as const },
    { name: 'Help Center', view: 'help' as const },
  ];

  const handleLinkClick = (view: ViewType) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  const isActive = (link: { name: string, view: ViewType }) => {
    if (currentView === 'home' && link.name === 'Home') return true;
    if (currentView === 'features' && link.name === 'Features') return true;
    if (currentView === 'about' && link.name === 'About Us') return true;
    if (currentView === 'contact' && link.name === 'Contact') return true;
    if (currentView === 'help' && link.name === 'Help Center') return true;
    if (currentView === 'news' && link.name === 'News') return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <Logo size={40} />
            <span className="text-2xl font-extrabold tracking-tighter text-white uppercase">LAGOSIAN</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.view)}
                className={`text-sm font-medium transition-colors ${isActive(link) ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => onNavigate('login')}
              className="px-6 py-2 text-sm font-semibold border border-white/20 rounded-full hover:bg-white/5 transition-all text-white"
            >
              Login
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:shadow-lg transition-all glow-blue"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleLinkClick(link.view)}
              className={`block text-lg font-medium text-left w-full ${isActive(link) ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button 
              onClick={() => handleLinkClick('login')}
              className="w-full px-6 py-3 text-sm font-semibold border border-white/20 rounded-xl text-white"
            >
              Login
            </button>
            <button 
              onClick={() => handleLinkClick('signup')}
              className="w-full px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
