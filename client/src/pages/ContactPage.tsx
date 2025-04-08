import { Helmet } from 'react-helmet';
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import AppointmentForm from "@/components/contact/AppointmentForm";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("contact");
  
  return (
    <>
      <Helmet>
        <title>Contact Us | PhysioForU</title>
        <meta name="description" content="Get in touch with PhysioForU for appointments, inquiries, or more information about our physiotherapy services. We're here to help you on your journey to recovery." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            We're here to answer your questions and help you schedule an appointment
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactInfo />
            </div>
            <div>
              <Tabs defaultValue="contact" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                  <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
                </TabsList>
                <TabsContent value="contact">
                  <ContactForm />
                </TabsContent>
                <TabsContent value="appointment">
                  <AppointmentForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 bg-neutral-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="max-w-2xl mx-auto text-text-secondary">
              Visit our clinic located in Jaipur
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-[450px]">
            {/* Embedding a Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.839296774746!2d75.7664!3d26.94149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a1d7ed243b%3A0xca5b21e54dbb8e33!2sPhysioForU!5e0!3m2!1sen!2sus!4v1744091220000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="PhysioForU Location Map"
              className="w-full h-full rounded-lg"
            />
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-text-secondary">C-98, Om Path, Bhagirath Marg</p>
                <p className="text-text-secondary">Shyam Nagar, Behind Community Centre</p>
                <p className="text-text-secondary">Jaipur, Rajasthan, India</p>
                <a 
                  href="https://maps.app.goo.gl/rwu3bS2xTGqZDj2F6" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block mt-3 text-primary hover:text-primary/80 font-medium"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-text-secondary">
              Find answers to common questions about our services and appointments
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I schedule an appointment?</h3>
              <p className="text-text-secondary">
                You can schedule an appointment by calling our office, using our online booking form, or sending us an email. We aim to respond to all inquiries within 24 hours.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What should I bring to my first appointment?</h3>
              <p className="text-text-secondary">
                Please bring your ID, insurance information (if applicable), any relevant medical records or imaging results, a list of current medications, and comfortable clothing that allows access to the area requiring treatment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does a typical physiotherapy session last?</h3>
              <p className="text-text-secondary">
                Initial consultations typically last 45-60 minutes, while follow-up sessions are usually 30-45 minutes. The duration may vary based on your specific condition and treatment needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do I need a doctor's referral to see a physiotherapist?</h3>
              <p className="text-text-secondary">
                No, you don't need a doctor's referral to see our physiotherapists. However, some insurance plans may require a referral for coverage, so please check with your provider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
