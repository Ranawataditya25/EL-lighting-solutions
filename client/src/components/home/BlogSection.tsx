import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { BlogPost } from '@shared/schema';
import BlogPostCard from '@/components/shared/BlogPostCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

// Fetch function for blog posts
async function fetchBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch('/api/blog-posts');
  if (!res.ok) throw new Error('Failed to fetch blog posts');
  return res.json();
}

const BlogSection: React.FC = () => {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[], Error>({
    queryKey: ['/api/blog-posts'],
    queryFn: fetchBlogPosts,
  });

  const skeletonArray = Array(3).fill(null);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest From Our Blog</h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            Stay informed with our expert insights on physiotherapy, health tips, and recovery strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            skeletonArray.map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-3 text-center text-red-500">
              Error loading blog posts. Please try again later.
            </div>
          ) : (
            blogPosts?.slice(0, 3).map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Visit Our Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
