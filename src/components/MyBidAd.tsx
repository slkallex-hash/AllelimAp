import React, { useEffect, useRef } from 'react';

interface MyBidAdProps {
  admpid?: string;
  className?: string;
}

export default function MyBidAd({ admpid = '434881', className = '' }: MyBidAdProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject if the container is empty to avoid duplicates
    if (adRef.current && adRef.current.childNodes.length === 0) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://js.mbidadm.com/static/scripts.js';
      script.setAttribute('data-admpid', admpid);
      
      adRef.current.appendChild(script);
    }
  }, [admpid]);

  return (
    <div className={`w-full flex justify-center items-center my-2 ${className}`}>
      <div 
        className="mybid-ad-container flex justify-center items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden min-h-[250px] w-full max-w-[300px] sm:max-w-[728px]"
        ref={adRef}
      >
        {/* O script será injetado aqui e o anúncio renderizará diretamente na página (sem iframe) */}
      </div>
    </div>
  );
}
