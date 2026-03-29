import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { newsData } from '../data/news';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const trendingNews = newsData.filter(a => a.trending).slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Notícias', href: '/noticias' },
    { name: 'AI', href: '/noticias' },
    { name: 'Crypto', href: '/noticias' },
    { name: 'Mercado', href: '/noticias' },
    { name: 'Planos', href: '/#pricing' },
    { name: 'Sobre', href: '/#about' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Ticker */}
      <div className="bg-neon-purple/90 backdrop-blur-md py-1.5 px-6 overflow-hidden hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
            <TrendingUp size={12} /> TENDÊNCIAS AGORA:
          </div>
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {trendingNews.map(news => (
              <Link key={news.id} to={`/noticias/${news.slug}`} className="text-white/80 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center gap-2">
                {news.title} <ChevronRight size={10} className="text-white/40" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <nav
        className={cn(
          'transition-all duration-500 px-6 py-4',
          scrolled ? 'bg-deep-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-deep-black/40 backdrop-blur-md'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-blue rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all duration-300 group-hover:rotate-12">
              <Zap size={24} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-tighter text-white">
                ALLE<span className="text-neon-purple">NEWS</span>
              </span>
              <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.3em]">Tech Portal</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className={cn(
                    "text-xs font-black uppercase tracking-widest transition-all duration-300 hover:text-neon-blue relative group",
                    "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f2ff]" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-xs font-black uppercase tracking-widest transition-all duration-300 hover:text-neon-blue relative group",
                    "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f2ff]" />
                </Link>
              )
            ))}
            <Link to="/pricing" className="relative overflow-hidden group bg-white text-deep-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
              <span className="relative z-10">Assinar Portal</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-deep-black/95 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col gap-4 md:hidden overflow-hidden"
            >
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="text-white/80 hover:text-neon-blue font-bold py-3 border-b border-white/5 transition-colors text-xs uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-neon-blue font-bold py-3 border-b border-white/5 transition-colors text-xs uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/pricing" className="bg-gradient-to-r from-neon-purple to-neon-blue text-white w-full py-4 rounded-xl font-bold mt-2 shadow-lg shadow-neon-purple/20 text-center text-xs uppercase tracking-widest">
                Assinar Premium
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
