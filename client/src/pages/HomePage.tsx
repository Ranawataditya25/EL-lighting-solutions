import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import VideosSection from "@/components/home/VideosSection";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SEO from "@/components/seo/SEO";
import { generateHomePageSchema } from "@/components/seo/schemas";

const HomePage = () => {
  // Generate homepage-specific schema
  const homePageSchema = generateHomePageSchema();
  
  return (
    <>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      {/* <VideosSection /> */}
      
      {/* Contact Section */}
<section className="py-16 px-4 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="max-w-2xl mx-auto text-text-secondary">
        Reach out to us and our team will be happy to assist you.
      </p>
    </div>
    
    <div className="flex justify-center mb-12">
      <ContactInfo />
    </div>

    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <ContactForm />
      </div>
    </div> */}
  </div>
</section>

    </>
  );
};

export default HomePage;
