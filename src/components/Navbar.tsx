import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Sobre', href: '/#about' },
    { name: 'Planos', href: '/planos' },
    { name: 'Galeria', href: '/#gallery' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Privacidade', href: '/politica-de-privacidade' },
    { name: 'Contato', href: '/#contact' },
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
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-deep-black/60 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-neon-purple rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300 group-hover:rotate-12">
            <Download size={24} />
          </div>
          <span className={cn(
            "text-2xl font-display font-bold tracking-tighter transition-all duration-300",
            scrolled ? "text-white" : "text-white glow-text"
          )}>
            AlleApp
          </span>
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
                  "text-sm font-medium transition-all duration-300 hover:text-neon-blue relative group",
                  "text-white/70 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f2ff]" />
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-neon-blue relative group",
                  "text-white/70 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f2ff]" />
              </a>
            )
          ))}
          <button className="relative overflow-hidden group bg-transparent border border-neon-blue/50 text-neon-blue px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-neon-blue hover:text-deep-black hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]">
            <span className="relative z-10">Baixar Agora</span>
          </button>
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
                  className="text-white/80 hover:text-neon-blue font-medium py-3 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-neon-blue font-medium py-3 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <button className="bg-gradient-to-r from-brand-primary to-neon-purple text-white w-full py-4 rounded-xl font-bold mt-2 shadow-lg shadow-brand-primary/20">
              Baixar Aplicativo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
