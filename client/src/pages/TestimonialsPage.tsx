import { Helmet } from 'react-helmet';
import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "@shared/schema";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

const TestimonialsPage = () => {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Create skeleton array for loading state
  const skeletonArray = Array(6).fill(null);

  return (
    <>
      <Helmet>
        <title>Patient Testimonials | PhysioForU</title>
        <meta name="description" content="Read what our patients have to say about their experiences with PhysioForU's physiotherapy services and treatment outcomes." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Patient Testimonials</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Hear from our patients about their experiences and successes with PhysioForU
          </p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">What Our Patients Say</h2>
            <p className="text-text-secondary max-w-3xl mx-auto text-center">
              We're proud of the positive impact we've had on our patients' lives. Here are some of their stories and feedback about their experiences with our physiotherapy services.
            </p>
          </div>
          
          {isLoading ? (
            // Display skeletons while loading
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skeletonArray.map((_, index) => (
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
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500 my-12">
              <h2 className="text-2xl font-bold mb-4">Error Loading Testimonials</h2>
              <p>There was a problem loading the testimonials. Please try again later.</p>
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center my-12">
              <h2 className="text-2xl font-bold mb-4">No Testimonials Available</h2>
              <p>Check back soon for patient testimonials.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Submit Testimonial Section */}
      <section className="py-16 px-4 bg-neutral-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Share Your Experience</h2>
            <p className="text-text-secondary mb-6 text-center">
              We value your feedback. If you've been a patient at PhysioForU, we'd love to hear about your experience.
            </p>
            
            <div className="text-center">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Submit Your Testimonial
                </Button>
              </Link>
              <p className="mt-4 text-sm text-text-secondary">
                Your testimonial may be featured on our website to help others seeking physiotherapy care.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Own Success Story?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join our satisfied patients and begin your journey to recovery and improved wellbeing.
          </p>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
