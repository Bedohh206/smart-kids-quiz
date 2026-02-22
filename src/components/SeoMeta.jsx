import { useEffect } from "react";

function upsertMeta(name, content, attr = "name") {
  if (!content) return;
  const selector = `meta[${attr}="${name}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  if (!url) return;
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
}

export default function SeoMeta({ title, description, canonicalPath }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta("og:title", title, "property");
      upsertMeta("twitter:title", title);
    }

    if (description) {
      upsertMeta("description", description);
      upsertMeta("og:description", description, "property");
      upsertMeta("twitter:description", description);
    }

    if (canonicalPath && typeof window !== "undefined") {
      const canonicalUrl = `${window.location.origin}${canonicalPath}`;
      upsertCanonical(canonicalUrl);
      upsertMeta("og:url", canonicalUrl, "property");
    }
  }, [title, description, canonicalPath]);

  return null;
}
