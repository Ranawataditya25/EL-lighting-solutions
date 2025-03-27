import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Testimonial } from "@shared/schema";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Skeleton } from "@/components/ui/skeleton";

const TestimonialsSection = () => {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Create skeleton array for loading state
  const skeletonArray = Array(3).fill(null);

  return (
    <section className="py-16 px-4 bg-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            Hear from patients who have experienced the difference our personalized physiotherapy approach makes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Display skeletons while loading
            skeletonArray.map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <div className="flex justify-center">
                  <div className="text-center">
                    <Skeleton className="h-4 w-24 mb-2 mx-auto" />
                    <Skeleton className="h-4 w-16 mx-auto" />
                  </div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-3 text-center text-red-500">
              Error loading testimonials. Please try again later.
            </div>
          ) : (
            testimonials?.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/testimonials" className="text-primary font-medium hover:text-secondary transition duration-200 inline-flex items-center">
            Read more testimonials <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
