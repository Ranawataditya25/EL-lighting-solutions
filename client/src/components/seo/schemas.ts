/**
 * Schema.org JSON-LD generators for different page types
 * These structured data schemas help search engines understand your content
 * and can lead to rich results in search listings
 */

// Shared constants
const SITE_URL = 'https://physioforu.com';
const BUSINESS_NAME = 'PhysioForU';
const BUSINESS_LOGO = `${SITE_URL}/logo.jpg`;

// HomePage Schema
export const generateHomePageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: 'PhysioForU - Physiotherapy Services in Jaipur',
    description: 'Professional physiotherapy services in Jaipur. We offer treatments for joint pain, sports injuries, rehabilitation, and more.',
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    },
    about: {
      '@id': `${SITE_URL}/#organization`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/physioforu-clinic.jpg`
    },
    inLanguage: 'en-IN'
  };
};

// Service Page Schema
export const generateServicePageSchema = (service: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  price?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${SITE_URL}/services/${service.slug}#medicalservice`,
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    ...(service.image && { image: service.image.startsWith('http') ? service.image : `${SITE_URL}${service.image}` }),
    procedureType: 'https://schema.org/TherapeuticProcedure',
    provider: {
      '@type': 'MedicalBusiness',
      name: BUSINESS_NAME,
      image: BUSINESS_LOGO,
      '@id': `${SITE_URL}/#organization`
    },
    ...(service.price && { 
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'INR'
      }
    }),
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    }
  };
};

// Blog Post Schema
export const generateBlogPostSchema = (post: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishDate: string;
  modifiedDate?: string;
  author?: string;
  tags?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : undefined,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate || post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author || 'PhysioForU Team'
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS_LOGO
      }
    },
    keywords: post.tags?.join(', '),
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`
    },
    inLanguage: 'en-IN'
  };
};

// Contact Page Schema
export const generateContactPageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#contactpage`,
    url: `${SITE_URL}/contact`,
    name: 'Contact PhysioForU - Physiotherapy Services in Jaipur',
    description: 'Contact our physiotherapy clinic in Jaipur. Book appointments and get directions to our location.',
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    },
    about: {
      '@id': `${SITE_URL}/#organization`
    },
    inLanguage: 'en-IN'
  };
};

// FAQ Page Schema
export const generateFAQPageSchema = (faqs: Array<{question: string; answer: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/faq#faqpage`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Local Business Schema (for footer)
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: BUSINESS_LOGO,
    image: `${SITE_URL}/images/physioforu-clinic.jpg`,
    description: 'Physiotherapy clinic in Jaipur offering specialized treatments for joint pain, sports injuries, and rehabilitation.',
    telephone: '+91 9782219444',
    email: 'physioforu5@gmail.com',
    sameAs: [
      'https://www.facebook.com/physioforu',
      'https://www.youtube.com/channel/UC7IQnGU2JLV7_To3-tCuUCw',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-98, Om Path, Bhagirath Marg, Shyam Nagar, Behind Community Centre',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302019',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.94149',
      longitude: '75.7664'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '17:00'
      }
    ],
    priceRange: '₹₹'
  };
};