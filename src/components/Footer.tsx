import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Github, Youtube, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "NOTÍCIAS",
      links: [
        { name: "Inteligência Artificial", href: "/noticias" },
        { name: "Criptomoedas", href: "/noticias" },
        { name: "Mercado Tech", href: "/noticias" },
        { name: "Gadgets", href: "/noticias" },
        { name: "Futuro da Tecnologia", href: "/noticias" },
      ]
    },
    {
      title: "PORTAL",
      links: [
        { name: "Sobre Nós", href: "/#about" },
        { name: "Nossa Equipe", href: "/#about" },
        { name: "Anuncie Conosco", href: "/#contact" },
        { name: "Newsletter", href: "/#email-capture" },
        { name: "Contato", href: "/#contact" },
      ]
    },
    {
      title: "LEGAL",
      links: [
        { name: "Privacidade", href: "/politica-de-privacidade" },
        { name: "Termos de Uso", href: "/termos" },
        { name: "Cookies", href: "/politica-de-privacidade" },
        { name: "Ética Editorial", href: "/termos" },
      ]
    }
  ];

  return (
    <footer className="bg-deep-black text-white pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-blue rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:rotate-12">
                <Zap size={24} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-tighter">ALLE<span className="text-neon-purple">NEWS</span></span>
                <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.3em]">Global Tech Media</span>
              </div>
            </Link>
            <p className="text-white/40 leading-relaxed mb-10 font-light text-base max-w-sm">
              O portal definitivo para quem vive e respira tecnologia. Análises profundas, notícias em tempo real e o futuro decifrado para você.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Youtube, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-neon-blue hover:text-deep-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-black mb-8 text-white tracking-[0.2em] uppercase">{section.title}</h4>
              <ul className="space-y-4 text-white/40">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link to={link.href} className="text-sm hover:text-neon-blue transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Bar */}
        <div className="mb-24 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Assine o resumo semanal</h4>
              <p className="text-white/40 text-sm">As 10 notícias que você não pode perder.</p>
            </div>
          </div>
          <div className="flex w-full lg:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="flex-grow lg:w-64 px-6 py-3 bg-deep-black border border-white/10 rounded-full text-white text-sm focus:border-neon-blue outline-none transition-colors"
            />
            <button className="px-8 py-3 bg-white text-deep-black font-bold rounded-full hover:bg-neon-blue transition-colors whitespace-nowrap">
              ASSINAR
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/20 text-[10px] font-mono uppercase tracking-widest">
          <p>© {currentYear} ALLE NEWS MEDIA GROUP. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> REDE ONLINE</span>
            <span className="flex items-center gap-2">SÃO PAULO • NOVA YORK • LONDRES • TÓQUIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
