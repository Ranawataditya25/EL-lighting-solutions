import { Helmet } from 'react-helmet';

type SEOProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articlePublishDate?: string;
  articleModifiedDate?: string;
  articleAuthor?: string;
  articleTags?: string[];
  schema?: object;
  twitterCardType?: 'summary' | 'summary_large_image';
  noindex?: boolean;
};

/**
 * Enhanced SEO Component
 * 
 * This component handles all SEO-related tags including:
 * - Title and meta description 
 * - Canonical URLs
 * - OpenGraph and Twitter meta tags for social sharing
 * - JSON-LD structured data for rich snippets
 * - Index/noindex directives
 */
const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  articlePublishDate,
  articleModifiedDate,
  articleAuthor,
  articleTags,
  schema,
  twitterCardType = 'summary_large_image',
  noindex = false,
}: SEOProps) => {
  // Format the title consistently with the site name
  const formattedTitle = title === 'Home' 
    ? 'PhysioForU - Professional Physiotherapy Services in Jaipur'
    : `${title} | PhysioForU`;
  
  // Base URL for constructing absolute URLs
  const baseUrl = 'https://physioforu.com';
  
  // Convert relative URLs to absolute
  const absoluteCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`)
    : baseUrl;
  
  const absoluteOgImage = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`)
    : `${baseUrl}/images/physioforu-default.jpg`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL to prevent duplicate content issues */}
      <link rel="canonical" href={absoluteCanonicalUrl} />
      
      {/* Open Graph Meta Tags for social sharing */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteCanonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="PhysioForU" />
      
      {/* Optional article-specific OG tags */}
      {ogType === 'article' && articlePublishDate && (
        <meta property="article:published_time" content={articlePublishDate} />
      )}
      {ogType === 'article' && articleModifiedDate && (
        <meta property="article:modified_time" content={articleModifiedDate} />
      )}
      {ogType === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {ogType === 'article' && articleTags?.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      
      {/* Robots meta tag for indexing control */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Structured data for rich snippets */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Additional business structured data that appears on all pages */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": "https://physioforu.com/#organization",
          "name": "PhysioForU",
          "url": "https://physioforu.com",
          "logo": "https://physioforu.com/logo.jpg",
          "telephone": "+91 9782219444",
          "email": "physioforu5@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C-98, Om Path, Bhagirath Marg, Shyam Nagar, Behind Community Centre",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302019",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;