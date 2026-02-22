import React, { useEffect } from 'react';

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
      setTimeout(tryPush, 300);
    };

    tryPush();

    return () => {
      cancelled = true;
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
        data-ad-client="ca-pub-5589341753091612"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
};

export default AdSense;
