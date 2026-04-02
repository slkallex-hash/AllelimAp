import React, { useEffect, useRef } from 'react';

export default function HilltopBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      
      // HilltopAds Banner 300x250 script logic
      const scriptContent = `
        (function(awhv){
          var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = awhv || {};
          s.src = "\\/\\/stupid-police.com\\/blXWVRsZd.GxlF0\\/YzWccN\\/be\\/mp9ouRZ\\/UelkkZP\\/T\\/YY4pOPDcgYxPNBDpkdtSNMj_g\\/4dOhDEEz1zMJwg";
          s.async = true;
          s.referrerPolicy = 'no-referrer-when-downgrade';
          l.parentNode.insertBefore(s, l);
        })({})
      `;
      
      script.innerHTML = scriptContent;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden min-h-[250px] bg-white/5 rounded-xl border border-white/10 my-8">
      <div ref={containerRef} className="hilltop-banner-container">
        {/* The script will inject the ad here */}
      </div>
    </div>
  );
}
