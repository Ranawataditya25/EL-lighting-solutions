import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Building2,
  Sun,
  Sparkles,
  Smartphone,
  Lightbulb,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Residential Lighting",
      description:
        "Enhance your home with elegant, modern, and energy-efficient lighting solutions tailored for every room.",
      icon: <Home className="h-10 w-10 text-primary" />,
    },
    {
      id: 2,
      title: "Commercial Lighting",
      description:
        "Brighten up offices, retail spaces, and restaurants with professional-grade, stylish lighting systems.",
      icon: <Building2 className="h-10 w-10 text-primary" />,
    },
    {
      id: 3,
      title: "Outdoor Lighting",
      description:
        "Durable, weather-resistant lighting solutions that add safety, security, and charm to outdoor spaces.",
      icon: <Sun className="h-10 w-10 text-primary" />,
    },
    {
      id: 4,
      title: "Custom Designs",
      description:
        "Personalized lighting plans crafted to match your unique aesthetic and functional requirements.",
      icon: <Sparkles className="h-10 w-10 text-primary" />,
    },
    {
      id: 5,
      title: "Smart Lighting",
      description:
        "Experience convenience with intelligent lighting solutions that save energy and offer remote control.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
    },
    {
      id: 6,
      title: "Event Lighting",
      description:
        "Transform weddings, parties, and corporate events with our professional decorative lighting setups.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            At EL Lighting Solutions, we deliver innovative and stylish lighting 
            systems that elevate homes, businesses, and outdoor spaces. Explore our 
            range of services designed to brighten every corner of your life.
          </p>
        </div>

        {/* Grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
