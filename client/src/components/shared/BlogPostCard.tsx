import { Link } from "wouter";
import { BlogPost } from "@shared/schema";
import { format } from "date-fns";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formattedDate = format(new Date(post.publishedAt), "MMMM d, yyyy");

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-text-secondary">
            <i className="far fa-calendar-alt mr-2"></i> {formattedDate}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 hover:text-primary transition duration-200">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-text-secondary mb-4">{post.excerpt}</p>
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-primary font-medium hover:text-secondary transition duration-200 inline-flex items-center"
        >
          Read more <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
