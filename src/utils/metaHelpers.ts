// Additional meta tags for enhanced SEO

export const addOpenGraphTags = (title: string, description: string, image?: string) => {
  const tags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'business.business' },
    { property: 'og:url', content: window.location.href },
    { property: 'og:site_name', content: 'Bespoke Auto Design' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'geo.region', content: 'FL' },
    { name: 'geo.placename', content: 'Miami' },
    { name: 'geo.position', content: '25.838912;-80.33659' },
    { name: 'ICBM', content: '25.838912, -80.33659' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'googlebot', content: 'index, follow' }
  ];

  if (image) {
    tags.push(
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image }
    );
  }

  tags.forEach(tag => {
    const existingTag = document.querySelector(
      'property' in tag 
        ? `meta[property="${tag.property}"]` 
        : `meta[name="${tag.name}"]`
    );
    
    if (existingTag) {
      existingTag.setAttribute('content', tag.content);
    } else {
      const meta = document.createElement('meta');
      if ('property' in tag) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    }
  });
};

export const addCanonicalUrl = (url: string) => {
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  if (existingCanonical) {
    existingCanonical.setAttribute('href', url);
  } else {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
  }
};

export const preloadCriticalImages = (imageUrls: string[]) => {
  imageUrls.forEach(url => {
    const existingPreload = document.querySelector(`link[href="${url}"]`);
    if (!existingPreload) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    }
  });
};

export const addResourceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://www.clarity.ms' },
    { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' }
  ];

  hints.forEach(hint => {
    const existing = document.querySelector(`link[href="${hint.href}"]`);
    if (!existing) {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if ('crossorigin' in hint) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    }
  });
};

export const addMicrosoftClarity = (clarityId: string = 'your_clarity_id') => {
  if (typeof window !== 'undefined' && !(window as any).clarity) {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${clarityId}");
    `;
    document.head.appendChild(script);
  }
};

export const addCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.innerHTML = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
};