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