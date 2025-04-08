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
          
          <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
            {/* Embedding a Google Maps iframe */}
            <div className="w-full h-full bg-white flex items-center justify-center border border-neutral-200 rounded-lg">
              <div className="text-center p-6">
                <i className="fas fa-map-marker-alt text-primary text-5xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-text-secondary">C-98, Om Path, Bhagirath Marg</p>
                <p className="text-text-secondary">Shyam Nagar, Behind Community Centre</p>
                <p className="text-text-secondary">Jaipur, Rajasthan, India</p>
                <p className="mt-4 text-sm text-text-secondary">
                  Map loading is disabled in this preview. In production, an interactive map would be displayed here.
                </p>
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
