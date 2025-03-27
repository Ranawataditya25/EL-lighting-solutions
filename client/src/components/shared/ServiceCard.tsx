import { Link } from "wouter";
import { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="text-primary mb-4">
        <i className={`fas ${service.icon} text-3xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-text-secondary mb-4">{service.description}</p>
      <Link 
        href={`/services/${service.slug}`} 
        className="text-primary font-medium hover:text-secondary transition duration-200 inline-flex items-center"
      >
        Learn more <i className="fas fa-arrow-right ml-2"></i>
      </Link>
    </div>
  );
};

export default ServiceCard;
