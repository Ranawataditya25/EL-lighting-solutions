import { Helmet } from 'react-helmet';
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>PhysioForU - Professional Physiotherapy Services</title>
        <meta name="description" content="PhysioForU offers professional physiotherapy services for sports injuries, back pain, joint pain, and post-surgical rehabilitation. Book an appointment today." />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      
      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-text-secondary">
              Have questions or ready to schedule an appointment? Reach out to us and our team will be happy to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactInfo />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
