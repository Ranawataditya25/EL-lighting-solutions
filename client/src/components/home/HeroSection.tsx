import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="bg-primary h-[500px] relative">
        <div 
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Physiotherapy for Everyone</h1>
            <p className="text-lg md:text-xl mb-8">Your journey to recovery starts with a personalized approach to physiotherapy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="bg-white hover:bg-neutral-100 text-primary font-medium py-3 px-6 rounded-md transition duration-300">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
