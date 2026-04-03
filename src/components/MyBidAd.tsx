import React, { useEffect, useRef } from 'react';

interface MyBidAdProps {
  admpid?: string;
}

export default function MyBidAd({ admpid = '434871' }: MyBidAdProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Evita duplicar o script caso o componente re-renderize
    if (adRef.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://js.mbidadm.com/static/scripts.js';
    script.setAttribute('data-admpid', admpid);

    adRef.current.appendChild(script);

    return () => {
      if (adRef.current && adRef.current.contains(script)) {
        adRef.current.removeChild(script);
      }
    };
  }, [admpid]);

  return (
    <div className="w-full flex justify-center items-center my-6">
      <div 
        ref={adRef} 
        className="mybid-ad-container flex justify-center items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden min-h-[250px] w-full max-w-[300px] sm:max-w-[728px]"
      >
        {/* O anúncio da MyBid será injetado aqui pelo script */}
      </div>
    </div>
  );
}
