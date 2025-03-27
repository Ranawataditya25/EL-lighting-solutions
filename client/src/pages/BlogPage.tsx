import { Helmet } from 'react-helmet';
import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import BlogPostCard from "@/components/shared/BlogPostCard";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPage = () => {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  // Create skeleton array for loading state
  const skeletonArray = Array(6).fill(null);

  return (
    <>
      <Helmet>
        <title>Blog | PhysioForU</title>
        <meta name="description" content="Read expert articles and tips about physiotherapy, recovery, pain management, and maintaining optimal physical health." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Expert insights, tips, and advice from our physiotherapy professionals
          </p>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {isLoading ? (
            // Display skeletons while loading
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skeletonArray.map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Skeleton className="w-full h-48" />
                  <div className="p-6">
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 my-12">
              <h2 className="text-2xl font-bold mb-4">Error Loading Blog Posts</h2>
              <p>There was a problem loading the blog posts. Please try again later.</p>
            </div>
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center my-12">
              <h2 className="text-2xl font-bold mb-4">No Blog Posts Available</h2>
              <p>Check back soon for new articles and updates.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-neutral-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-text-secondary">
            Stay updated with our latest articles, tips, and news about physiotherapy and health.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
