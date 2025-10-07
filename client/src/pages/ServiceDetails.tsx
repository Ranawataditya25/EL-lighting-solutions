import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
// import { Service } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import SEO from "@/components/seo/SEO";
import { generateServicePageSchema } from "@/components/seo/schemas";

// Additional content for each service type
const serviceContent: Record<string, { 
  heroImage: string, 
  benefits: string[], 
  approaches: { title: string, description: string }[] 
}> = {
  "sports-injuries": {
    heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
    benefits: [
      "Faster recovery from sports-related injuries",
      "Improved athletic performance",
      "Prevention of future injuries",
      "Customized rehabilitation programs",
      "Sport-specific training techniques"
    ],
    approaches: [
      {
        title: "Injury Assessment",
        description: "Comprehensive evaluation to identify the type and extent of the injury, as well as underlying factors that may have contributed to it."
      },
      {
        title: "Manual Therapy",
        description: "Hands-on techniques to improve tissue mobility, reduce pain, and restore normal function to injured areas."
      },
      {
        title: "Therapeutic Exercise",
        description: "Tailored exercise programs to rebuild strength, endurance, and coordination specific to your sport."
      },
      {
        title: "Movement Analysis",
        description: "Detailed assessment of your movement patterns to identify and correct biomechanical issues that may lead to injury."
      }
    ]
  },
  "back-neck-pain": {
    heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
    benefits: [
      "Reduced pain and discomfort",
      "Improved mobility and flexibility",
      "Better posture and body mechanics",
      "Prevention of chronic issues",
      "Long-term management strategies"
    ],
    approaches: [
      {
        title: "Spinal Assessment",
        description: "Thorough evaluation to identify the specific cause of your back or neck pain and determine the most effective treatment approach."
      },
      {
        title: "Manual Therapy",
        description: "Skilled hand movements applied to vertebrae and soft tissues to improve mobility and reduce pain."
      },
      {
        title: "Postural Correction",
        description: "Education and exercises to improve your posture and reduce strain on your spine."
      },
      {
        title: "Core Strengthening",
        description: "Targeted exercises to strengthen the muscles that support your spine, reducing the risk of future issues."
      }
    ]
  },
  "joint-pain": {
    heroImage: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
    benefits: [
      "Reduced joint pain and inflammation",
      "Improved joint mobility and function",
      "Strengthened surrounding muscles",
      "Enhanced quality of life",
      "Reduced reliance on pain medication"
    ],
    approaches: [
      {
        title: "Joint Assessment",
        description: "Detailed evaluation to identify the cause and extent of joint dysfunction."
      },
      {
        title: "Pain Management",
        description: "Techniques to reduce pain and inflammation, including therapeutic modalities and manual therapy."
      },
      {
        title: "Joint Mobilization",
        description: "Gentle movements applied to the joint to improve range of motion and reduce stiffness."
      },
      {
        title: "Functional Strength Training",
        description: "Exercises to strengthen muscles around the affected joint, providing better support and stability."
      }
    ]
  },
  "post-surgical-rehabilitation": {
    heroImage: "https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
    benefits: [
      "Faster and more complete recovery",
      "Proper healing of surgical sites",
      "Restored strength and mobility",
      "Prevention of complications",
      "Return to normal activities"
    ],
    approaches: [
      {
        title: "Early Mobilization",
        description: "Controlled movement started soon after surgery to prevent stiffness and promote healing."
      },
      {
        title: "Pain Management",
        description: "Strategies to control post-surgical pain and reduce reliance on medication."
      },
      {
        title: "Progressive Strengthening",
        description: "Carefully staged exercises to rebuild muscle strength without compromising the surgical repair."
      },
      {
        title: "Functional Training",
        description: "Activities that prepare you for returning to your daily life, work, or sports."
      }
    ]
  },
  "gait-analysis": {
    heroImage: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
    benefits: [
      "Identification of movement abnormalities",
      "Improved walking pattern",
      "Reduced pain during movement",
      "Prevention of compensatory injuries",
      "Enhanced athletic performance"
    ],
    approaches: [
      {
        title: "Visual Assessment",
        description: "Observational analysis of your walking or running pattern from multiple angles."
      },
      {
        title: "Biomechanical Analysis",
        description: "Detailed evaluation of joint movements, muscle activity, and weight distribution during gait."
      },
      {
        title: "Corrective Exercises",
        description: "Targeted exercises to address specific gait abnormalities and improve movement patterns."
      },
      {
        title: "Footwear and Orthotic Recommendations",
        description: "Advice on proper footwear or custom orthotics to support optimal alignment and movement."
      }
    ]
  },
  "manual-therapy": {
    heroImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
    benefits: [
      "Immediate pain relief",
      "Improved joint mobility",
      "Reduced muscle tension",
      "Better tissue healing",
      "Enhanced physical function"
    ],
    approaches: [
      {
        title: "Soft Tissue Mobilization",
        description: "Techniques that focus on muscles, tendons, and fascia to reduce tension and improve tissue mobility."
      },
      {
        title: "Joint Mobilization",
        description: "Skilled passive movements of skeletal joints to decrease pain and improve motion."
      },
      {
        title: "Myofascial Release",
        description: "Gentle sustained pressure on the myofascial connective tissue to eliminate pain and restore motion."
      },
      {
        title: "Trigger Point Therapy",
        description: "Targeted pressure on specific points in the muscle to release tension and pain."
      }
    ]
  }
};

const ServiceDetails = () => {
  const [match, params] = useRoute<{ slug: string }>('/services/:slug');
  const slug = params?.slug || '';

  const { data: service, isLoading, error } = useQuery<Service>({
    queryKey: [`/api/services/${slug}`],
    enabled: !!slug,
  });

  // Get additional content or use defaults if not found
  const content = serviceContent[slug] || {
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80",
    benefits: ["Improved condition", "Enhanced recovery", "Personalized care", "Evidence-based treatment", "Long-term results"],
    approaches: [
      { title: "Assessment", description: "Comprehensive evaluation of your condition." },
      { title: "Treatment Plan", description: "Customized approach tailored to your needs." },
      { title: "Therapy Sessions", description: "Hands-on treatment and guided exercises." },
      { title: "Progress Tracking", description: "Regular monitoring to ensure optimal results." }
    ]
  };

  if (!match) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-6">The service you're looking for could not be found.</p>
        <Link href="/services">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            View All Services
          </Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="bg-primary h-[300px] relative">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-10 w-1/3 mb-6" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-8" />
          
          <Skeleton className="h-8 w-64 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
          
          <Skeleton className="h-8 w-64 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Error Loading Service</h1>
        <p className="mb-6">There was a problem loading this service. Please try again later.</p>
        <Link href="/services">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            View All Services
          </Button>
        </Link>
      </div>
    );
  }

  // Create service schema for structured data
  const serviceSchema = generateServicePageSchema({
    title: service.title,
    description: service.description,
    slug: service.slug,
    image: content.heroImage,
    // Optional price can be added when available in the model
  });
  
  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        canonicalUrl={`/services/${service.slug}`}
        ogImage={content.heroImage}
        schema={serviceSchema}
      />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-[300px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${content.heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-3xl">
              <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
              <p className="text-lg">{service.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Description */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About {service.title}</h2>
            <p className="text-text-secondary mb-8">
              At PhysioForU, our {service.title.toLowerCase()} service provides specialized care for patients experiencing this condition. Our team of expert physiotherapists uses evidence-based techniques and personalized treatment plans to help you recover quickly and effectively, improving your quality of life and helping you return to the activities you enjoy.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.approaches.map((approach, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-2">{approach.title}</h4>
                  <p className="text-text-secondary">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 px-4 bg-neutral-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Treatment?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-text-secondary">
            Contact us today to schedule a consultation for {service.title.toLowerCase()} treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Book an Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-6 rounded-md transition duration-300">
                Explore Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
