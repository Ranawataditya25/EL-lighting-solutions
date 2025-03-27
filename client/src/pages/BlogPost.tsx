import { Helmet } from 'react-helmet';
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { BlogPost as BlogPostType } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const BlogPost = () => {
  const [match, params] = useRoute<{ slug: string }>('/blog/:slug');
  const slug = params?.slug || '';

  const { data: post, isLoading, error } = useQuery<BlogPostType>({
    queryKey: [`/api/blog-posts/${slug}`],
    enabled: !!slug,
  });

  if (!match) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for could not be found.</p>
        <Link href="/blog">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-[400px] bg-neutral-200">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Skeleton className="h-8 w-1/2 mb-2" />
          <Skeleton className="h-4 w-32 mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-6" />
          
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-1/2 mb-6" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Error Loading Blog Post</h1>
        <p className="mb-6">There was a problem loading this blog post. Please try again later.</p>
        <Link href="/blog">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const formattedDate = format(new Date(post.publishedAt), "MMMM d, yyyy");

  return (
    <>
      <Helmet>
        <title>{post.title} | PhysioForU Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      {/* Featured Image */}
      <div className="w-full h-[400px] relative">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30"></div>
      </div>
      
      {/* Blog Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-8 border-b border-neutral-200 pb-8">
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
          <div className="text-text-secondary">
            <span className="inline-flex items-center">
              <i className="far fa-calendar-alt mr-2"></i>
              {formattedDate}
            </span>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/blog">
            <Button variant="outline" className="border border-primary text-primary hover:bg-primary/10">
              <i className="fas fa-arrow-left mr-2"></i> Back to Blog
            </Button>
          </Link>
          
          <div className="flex space-x-3">
            <a href="#" className="text-primary hover:text-secondary transition duration-200" aria-label="Share on Facebook">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-secondary transition duration-200" aria-label="Share on Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-secondary transition duration-200" aria-label="Share on LinkedIn">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </article>
      
      {/* Related Articles CTA */}
      <section className="py-12 px-4 bg-neutral-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help with Your Condition?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-text-secondary">
            Our expert physiotherapists are ready to assist you on your recovery journey.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
