import React from 'react';

interface NativeAdSectionProps {
  count?: number;
}

export default function NativeAdSection({ count = 1 }: NativeAdSectionProps) {
  const adSlots = Array.from({ length: count }, (_, i) => i);

  return (
    <section className="w-full py-8 flex justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-wrap justify-center gap-6">
        {adSlots.map((index) => (
          <div key={index} className="w-full max-w-[624px] h-[240px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
            <iframe 
              title={`JuicyAds Native ${index}`}
              width="624" 
              height="240" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              scrolling="no" 
              allowTransparency={true} 
              src="/ad-native.html"
              className="max-w-full"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
