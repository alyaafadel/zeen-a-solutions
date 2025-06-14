
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "خدمات الموارد البشرية، التطوير التقني، التسويق الرقمي، الترجمة، الاستشارات القانونية، السعودية",
  ogImage = "/lovable-uploads/8838bb20-a5cc-4ab1-9fce-30cdb0f93521.png",
  canonicalUrl
}: SEOProps) => {
  
  useEffect(() => {
    // Set page title
    document.title = `${title} | Zeen A Plus Solutions`;
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    setOGTag('og:title', title);
    setOGTag('og:description', description);
    setOGTag('og:image', ogImage);
    setOGTag('og:type', 'website');
    
    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Language and direction
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default SEO;
