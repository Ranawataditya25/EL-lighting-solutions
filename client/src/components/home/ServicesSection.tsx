import { useQuery } from "@tanstack/react-query";
import ServiceCard from "@/components/shared/ServiceCard";
import { Service } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const ServicesSection = () => {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  // Create skeleton array for loading state
  const skeletonArray = Array(6).fill(null);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Specialized Services</h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            We offer comprehensive physiotherapy services tailored to your specific needs, 
            ensuring optimal recovery and pain management.
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
  );
};

export default ServicesSection;
