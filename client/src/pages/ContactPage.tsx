import { useState } from "react";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import AppointmentForm from "@/components/contact/AppointmentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            We're here to answer your questions and help you solve your queries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto space-y-12">
          {/* Top Row: Contact Info + Map */}
          <div>
            <div className="w-full">
              <ContactInfo />
            </div>
          </div>

          {/* Full Width Message/Appointment Section */}
          <div className="w-full">
            <Tabs
              defaultValue="contact"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              {/* <TabsList className="grid w-full grid-cols-2 mb-6 max-w-md mx-auto">
                <TabsTrigger value="contact">Send us a Message</TabsTrigger>
                <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
              </TabsList> */}

              <TabsContent value="contact">
                <ContactForm />
              </TabsContent>
              <TabsContent value="appointment">
                <AppointmentForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      {/* CTA Section */}
<section className="py-16 px-4 bg-primary text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">
      Brighten Your Spaces with EL Lightings
    </h2>
    <p className="max-w-2xl mx-auto mb-8 text-lg">
      Discover premium lighting solutions designed to transform your home,
      office, or business into a brighter, more elegant space. Let us
      illuminate your world with style and efficiency.
    </p>
    <a
      href="https://wa.me/918824585675"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg">
        Chat on WhatsApp
      </button>
    </a>
  </div>
</section>
    </>
  );
};

export default ContactPage;
