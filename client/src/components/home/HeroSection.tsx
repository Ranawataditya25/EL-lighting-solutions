import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="bg-primary h-[500px] relative">
        <div 
          className="w-full h-full object-cover"
          style={{
            backgroundImage: `url("/images/photo1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-orange-50 max-w-3xl">
            <h1 className="text-5xl md:text-5xl font-bold mb-4">EL Lighting Solutions</h1>
            <p className="text-lg md:text-xl mb-8">In EL Lightings, we take great pride in our high-quality products and excellent customer support.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Contact Us
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="bg-white hover:bg-neutral-100 text-primary font-medium py-3 px-6 rounded-md transition duration-300">
                  About Us
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
