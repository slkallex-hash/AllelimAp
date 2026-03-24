import React from 'react';
import JuicyAd from './JuicyAd';

export default function AdWall() {
  // Array com 30 posições para os anúncios
  const adSlots = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section className="py-20 bg-deep-black relative overflow-hidden" id="parceiros">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-neon-blue">Parceiros</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Conheça as marcas que apoiam o AlleApp e ajudam a manter nossa plataforma.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {adSlots.map((index) => (
            <JuicyAd key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
