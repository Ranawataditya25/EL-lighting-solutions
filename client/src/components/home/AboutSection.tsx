import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">About PhysioForU</h2>
            <p className="text-text-secondary mb-4">
              At PhysioForU, we are dedicated to providing high-quality physiotherapy services 
              that are customized to meet your individual needs. Our team of highly trained 
              physiotherapists combines evidence-based treatments with a caring approach to 
              help you achieve your health goals.
            </p>
            <p className="text-text-secondary mb-6">
              With years of experience in treating various conditions, from sports injuries to 
              chronic pain, we're committed to delivering exceptional care that improves your 
              quality of life and gets you back to doing what you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/about#approach">
                <Button variant="outline" className="border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-6 rounded-md transition duration-300">
                  Our Approach
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576671414121-aa2d45c2e066?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Physiotherapy team" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
