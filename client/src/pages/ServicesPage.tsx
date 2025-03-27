import { Helmet } from 'react-helmet';
import { useQuery } from "@tanstack/react-query";
import { Service } from "@shared/schema";
import ServiceCard from "@/components/shared/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  // Create skeleton array for loading state
  const skeletonArray = Array(6).fill(null);

  return (
    <>
      <Helmet>
        <title>Our Services | PhysioForU</title>
        <meta name="description" content="Explore PhysioForU's comprehensive physiotherapy services including sports injuries, back pain, joint pain, and post-surgical rehabilitation." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Comprehensive physiotherapy services tailored to your individual needs
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Physiotherapy Services</h2>
            <p className="text-text-secondary max-w-3xl">
              At PhysioForU, we offer a wide range of physiotherapy services designed to address various conditions and help you achieve optimal physical health. Our expert team uses evidence-based approaches tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Display skeletons while loading
              skeletonArray.map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-primary mb-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-4/5 mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))
            ) : error ? (
              <div className="col-span-3 text-center text-red-500">
                Error loading services. Please try again later.
              </div>
            ) : (
              services?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-neutral-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose PhysioForU</h2>
            <p className="max-w-2xl mx-auto text-text-secondary">
              We are committed to providing exceptional care and achieving the best possible outcomes for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <i className="fas fa-user-md text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-text-secondary">
                Our physiotherapists are highly qualified and experienced in treating a wide range of conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <i className="fas fa-clipboard-check text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Care</h3>
              <p className="text-text-secondary">
                We develop customized treatment plans tailored to your specific needs and goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <i className="fas fa-chart-line text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-text-secondary">
                Our evidence-based approaches have helped thousands of patients recover and improve their quality of life.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <i className="fas fa-heart text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Compassionate Approach</h3>
              <p className="text-text-secondary">
                We treat every patient with care, respect, and understanding throughout their recovery journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Treatment?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-text-secondary">
            Contact us today to schedule an initial consultation with one of our expert physiotherapists.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
