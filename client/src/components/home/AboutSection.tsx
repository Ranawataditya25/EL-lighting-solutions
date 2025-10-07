import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto">
      <h2 className="mb-10 mt-20 text-center text-4xl font-bold ">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">About EL Lighting Solutions</h2>
            <p className="text-text-secondary mb-4">
              At EL Lighting Solutions, we specialize in delivering modern, 
              energy-efficient, and stylish lighting systems for homes, offices, 
              and outdoor spaces. Our goal is to brighten your environment while 
              enhancing aesthetics and reducing energy costs.
            </p>
            <p className="text-text-secondary mb-6">
              With innovative designs and high-quality products, we provide 
              customized lighting solutions that transform spaces into elegant, 
              functional, and welcoming environments. From residential to 
              commercial projects, our team ensures excellence at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/images/photo6.jpg" 
                alt="EL Lighting Solutions showcase" 
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
