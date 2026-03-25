import React from 'react';

export default function NativeAdSection() {
  return (
    <section className="w-full py-8 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[624px] h-[240px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
        <iframe 
          title="JuicyAds Native"
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
    </section>
  );
}
