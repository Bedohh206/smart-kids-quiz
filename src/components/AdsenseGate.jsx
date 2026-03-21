import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Pages where AdSense is permitted: must have real educational/informational content.
// Quiz gameplay, mini-games, leaderboard, loading, and navigation-only pages are excluded.
const AD_ALLOWED_EXACT = new Set(["/", "/about", "/contact", "/privacy", "/terms"]);
const AD_ALLOWED_PREFIX = [/^\/learn(\/|$)/];

const ADSENSE_CLIENT = "ca-pub-5589341753091612";

function isAdAllowed(pathname) {
  if (AD_ALLOWED_EXACT.has(pathname)) return true;
  return AD_ALLOWED_PREFIX.some((rx) => rx.test(pathname));
}

function loadAdsenseOnce() {
  if (typeof document === "undefined") return;
  if (document.querySelector('script[data-adsense="true"]')) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.crossOrigin = "anonymous";
  script.setAttribute("data-adsense", "true");
  document.head.appendChild(script);
}

export default function AdsenseGate() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isAdAllowed(pathname)) return;
    loadAdsenseOnce();
  }, [pathname]);

  return null;
}
