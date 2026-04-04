import React from 'react';

interface MyBidAdProps {
  admpid?: string;
}

export default function MyBidAd({ admpid = '434881' }: MyBidAdProps) {
  // Usamos um iframe com srcDoc para garantir que o script do anúncio 
  // seja executado corretamente e o banner apareça no local exato.
  const adHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            background: transparent; 
            overflow: hidden; 
          }
        </style>
      </head>
      <body>
        <script async src="https://js.mbidadm.com/static/scripts.js" data-admpid="${admpid}"></script>
      </body>
    </html>
  `;

  return (
    <div className="w-full flex justify-center items-center my-2">
      <div className="mybid-ad-container flex justify-center items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden min-h-[250px] w-full max-w-[300px] sm:max-w-[728px]">
        <iframe
          title={`MyBid-Ad-${admpid}`}
          srcDoc={adHtml}
          width="100%"
          height="250"
          frameBorder="0"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden' }}
        />
      </div>
    </div>
  );
}
