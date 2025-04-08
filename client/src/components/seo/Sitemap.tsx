import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Service, BlogPost } from '@shared/schema';

/**
 * Sitemap Generator Component
 * 
 * This component fetches all dynamic paths from our APIs and 
 * generates a sitemap.xml file that gets injected into the HTML head.
 * The sitemap helps search engines discover and index our pages.
 */
const Sitemap = () => {
  // Fetch services for their slugs
  const { data: services } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  // Fetch blog posts for their slugs
  const { data: blogPosts } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  useEffect(() => {
    if (!services || !blogPosts) return;

    // Static routes
    const staticRoutes = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/blog', priority: '0.9', changefreq: 'weekly' },
      { url: '/testimonials', priority: '0.8', changefreq: 'monthly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/videos', priority: '0.8', changefreq: 'weekly' },
    ];

    // Dynamic service routes
    const serviceRoutes = services.map(service => ({
      url: `/services/${service.slug}`,
      priority: '0.8',
      changefreq: 'monthly'
    }));

    // Dynamic blog post routes
    const blogRoutes = blogPosts.map(post => ({
      url: `/blog/${post.slug}`,
      priority: '0.7',
      changefreq: 'monthly'
    }));

    // Combine all routes
    const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

    // Build sitemap XML
    const siteUrl = 'https://physioforu.com';
    const date = new Date().toISOString();
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    allRoutes.forEach(route => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${siteUrl}${route.url}</loc>\n`;
      sitemap += `    <lastmod>${date}</lastmod>\n`;
      sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${route.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';

    // Add sitemap to the head
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const sitemapUrl = URL.createObjectURL(blob);

    const link = document.createElement('link');
    link.rel = 'sitemap';
    link.type = 'application/xml';
    link.href = sitemapUrl;
    document.head.appendChild(link);

    // Clean up on unmount
    return () => {
      URL.revokeObjectURL(sitemapUrl);
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, [services, blogPosts]);

  // This is a utility component that doesn't render anything
  return null;
};

export default Sitemap;