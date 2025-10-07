import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | EL Lighting Solutions</title>
        <meta 
          name="description" 
          content="Learn about EL Lighting Solutions and our commitment to delivering innovative, energy-efficient, and stylish lighting solutions for homes and businesses." 
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About EL Lighting Solutions</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Delivering innovative, energy-efficient, and elegant lighting solutions that brighten every space.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/photo2.jpg"
                alt="EL Lighting showroom" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-text-secondary mb-4">
                EL Lighting Solutions started with a mission to revolutionize modern spaces with lighting that blends style, efficiency, and durability. 
              </p>
              <p className="text-text-secondary mb-4">
                From residential interiors to commercial projects, we provide customized solutions that not only illuminate but also elevate the ambiance of every environment. 
              </p>
              <p className="text-text-secondary">
                With a focus on sustainability and innovation, EL Lighting Solutions continues to bring brighter ideas to life, helping homes and businesses shine with confidence. 
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section id="approach" className="py-16 px-4 bg-neutral-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="max-w-2xl mx-auto text-text-secondary">
              We believe lighting is more than utility — it’s about design, mood, and sustainability. Our approach ensures every project reflects innovation and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
              <img 
                src="/images/photo3.jpg"
                alt="EL Lighting showroom" 
                className="rounded-lg shadow-md w-full h-auto mb-7"
              />
            </div>
              <h3 className="text-xl font-bold mb-2">Innovative Designs</h3>
              <p className="text-text-secondary">
                Our lighting solutions combine creativity and functionality to enhance any space.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
              <img 
                src="/images/photo4.jpg"
                alt="EL Lighting showroom" 
                className="rounded-lg shadow-md w-full h-auto mb-7"
              />
            </div>
              <h3 className="text-xl font-bold mb-2">Energy Efficiency</h3>
              <p className="text-text-secondary">
                We focus on sustainable and cost-effective lighting options for long-term savings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div>
              <img 
                src="/images/photo5.jpg"
                alt="EL Lighting showroom" 
                className="rounded-lg shadow-md w-full h-auto mb-7"
              />
            </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-text-secondary">
                Every product undergoes rigorous quality checks to meet the highest industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Brighten Your Spaces with EL Lighting Solutions
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Explore our premium lighting products and discover how we can transform your home or business with elegance and efficiency.
          </p>
          <a
            href="https://wa.me/918824585675?text=Hello%20EL%20Lighting%20Solutions%2C%20I%27m%20interested%20in%20your%20lighting%20products."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
