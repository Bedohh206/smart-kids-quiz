import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AD_ROUTES = [/^\/learn(\/|$)/];
const ADSENSE_CLIENT = "ca-pub-5589341753091612";

function isAdAllowed(pathname) {
  return AD_ROUTES.some((rx) => rx.test(pathname));
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
