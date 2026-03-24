import React, { useEffect, useRef } from 'react';

export default function JuicyAd() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Limpa o container para evitar duplicação (útil no React Strict Mode)
    adRef.current.innerHTML = '';

    // Cria a tag <ins> exigida pelo JuicyAds
    const ins = document.createElement('ins');
    ins.id = '1113423';
    ins.setAttribute('data-width', '300');
    ins.setAttribute('data-height', '250');
    adRef.current.appendChild(ins);

    // Cria a tag <script> que inicializa este bloco de anúncio específico
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.innerHTML = `(window.adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1113423});`;
    adRef.current.appendChild(script);

  }, []);

  return (
    <div className="flex justify-center items-center w-[300px] h-[250px] bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden relative">
      {/* O anúncio será injetado dentro desta div */}
      <div ref={adRef} className="w-full h-full flex items-center justify-center absolute inset-0 z-10"></div>
      
      {/* Placeholder visível enquanto o anúncio carrega ou se for bloqueado */}
      <div className="text-gray-600 text-sm absolute z-0">Espaço Publicitário</div>
    </div>
  );
}
