import React from 'react';

export default function JuicyAd() {
  return (
    <div className="flex justify-center items-center w-[300px] h-[250px] bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden relative">
      <iframe
        src="/ad.html"
        width="300"
        height="250"
        frameBorder="0"
        scrolling="no"
        className="absolute inset-0 z-10"
        title="Advertisement"
      />
      
      {/* Placeholder visível enquanto o anúncio carrega ou se for bloqueado */}
      <div className="text-gray-600 text-sm absolute z-0">Espaço Publicitário</div>
    </div>
  );
}
