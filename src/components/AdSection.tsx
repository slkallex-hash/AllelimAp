import React from 'react';
import JuicyAd from './JuicyAd';

interface AdSectionProps {
  count?: number;
  title?: React.ReactNode;
  subtitle?: string;
  id?: string;
}

export default function AdSection({ count = 3, title, subtitle, id }: AdSectionProps) {
  const adSlots = Array.from({ length: count }, (_, i) => i);

  return (
    <section className="py-10 bg-deep-black relative overflow-hidden" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap justify-center gap-6">
          {adSlots.map((index) => (
            <JuicyAd key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
