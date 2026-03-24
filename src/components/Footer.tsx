import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Facebook, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black text-white pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-500 group-hover:rotate-12">
                A
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">AlleApp</span>
            </Link>
            <p className="text-slate-500 leading-relaxed mb-10 font-light text-base max-w-xs">
              A nova era da produtividade digital. Simples, rápido e desenhado para o futuro.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-8 text-white tracking-tight">Navegação</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="/#home" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Home</a></li>
              <li><a href="/#about" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Sobre</a></li>
              <li><a href="/#features" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Funcionalidades</a></li>
              <li><a href="/planos" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Planos</a></li>
              <li><a href="/#gallery" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Galeria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-8 text-white tracking-tight">Legal & Suporte</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="/politica-de-privacidade" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Privacidade</a></li>
              <li><a href="/privacidade-memomatch" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Privacidade MemoMatch</a></li>
              <li><a href="/termos" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Termos de Uso</a></li>
              <li><a href="/#faq" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> FAQ</a></li>
              <li><a href="/#contact" className="hover:text-neon-blue transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" /> Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-8 text-white tracking-tight">Download</h4>
            <p className="text-slate-500 mb-8 font-light">Disponível para todos os seus dispositivos digitais.</p>
            <div className="space-y-4">
              <button className="w-full group relative overflow-hidden bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-neon-blue/50 transition-all duration-300">
                <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-7 relative z-10" referrerPolicy="no-referrer" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-600 text-sm">
          <p>© {currentYear} AlleApp. Todos os direitos reservados.</p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" /> Servidores Online</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_8px_#00f2ff]" /> Versão 2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
