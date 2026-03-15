import React, { useEffect } from 'react';

const ADSENSE_CLIENT = 'ca-pub-5589341753091612';

function loadAdsenseScriptOnce() {
  if (typeof document === 'undefined') return;
  if (document.querySelector('script[data-adsense="true"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.crossOrigin = 'anonymous';
  script.setAttribute('data-adsense', 'true');
  document.head.appendChild(script);
}

/**
 * AdSense Component for manual ad placement
 * Only use on pages with substantial content (not on alerts, loading screens, or navigation)
 * 
 * @param {string} slot - AdSense ad slot ID
 * @param {string} format - Ad format (auto, rectangle, horizontal, vertical)
 * @param {boolean} responsive - Whether ad should be responsive (default: true)
 * @param {string} style - Additional inline styles for the ad container
 */
const AdSense = ({ 
  slot = '1234567890', 
  format = 'auto',
  responsive = true,
  style = {}
}) => {
  useEffect(() => {
    let cancelled = false;
    let retryTimer = null;

    loadAdsenseScriptOnce();

    const tryPush = () => {
      if (cancelled) return;
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          return;
        }
      } catch (error) {
        console.error('AdSense error:', error);
        return;
      }
      retryTimer = setTimeout(tryPush, 300);
    };

    tryPush();

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, []);

  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '20px auto',
      minHeight: '100px',
      ...style 
    }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
};

export default AdSense;
