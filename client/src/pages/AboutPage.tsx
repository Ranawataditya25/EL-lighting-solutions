import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | PhysioForU</title>
        <meta name="description" content="Learn about PhysioForU's team of experienced physiotherapists and our approach to personalized patient care." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About PhysioForU</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Dedicated to delivering exceptional physiotherapy services and personalized care
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="PhysioForU clinic" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-text-secondary mb-4">
                Founded in 2010, PhysioForU began with a simple mission: to provide accessible, high-quality physiotherapy services that truly make a difference in people's lives. What started as a small practice has grown into a respected clinic serving the community with dedication and expertise.
              </p>
              <p className="text-text-secondary mb-4">
                Our team of physiotherapists brings together decades of combined experience across various specialties, allowing us to offer comprehensive care for a wide range of conditions. We continuously update our skills and knowledge to incorporate the latest evidence-based practices into our treatments.
              </p>
              <p className="text-text-secondary">
                At PhysioForU, we believe in treating the whole person, not just the symptoms. This holistic approach has helped thousands of patients recover from injuries, manage chronic conditions, and improve their overall quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 px-4 bg-neutral-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto text-text-secondary">
              Our team of dedicated professionals is committed to providing the highest standard of physiotherapy care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Dr. Sarah Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. Sarah Johnson</h3>
                <p className="text-primary font-medium mb-3">Lead Physiotherapist</p>
                <p className="text-text-secondary mb-4">
                  With over 15 years of experience, Dr. Johnson specializes in sports injuries and rehabilitation. She holds a Doctorate in Physical Therapy and numerous certifications in specialized treatment techniques.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Michael Thomas" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Thomas</h3>
                <p className="text-primary font-medium mb-3">Senior Physiotherapist</p>
                <p className="text-text-secondary mb-4">
                  Michael specializes in back and neck pain management. His patient-centered approach combines manual therapy with personalized exercise programs to achieve optimal results.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Dr. Emily Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. Emily Chen</h3>
                <p className="text-primary font-medium mb-3">Physiotherapist</p>
                <p className="text-text-secondary mb-4">
                  Dr. Chen is passionate about helping patients recover from surgeries and traumatic injuries. She has extensive experience in post-surgical rehabilitation and pain management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section id="approach" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="max-w-2xl mx-auto text-text-secondary">
              We believe in a holistic, evidence-based approach to physiotherapy that addresses not just symptoms but the root causes of your condition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Approach 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-clipboard-check text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Thorough Assessment</h3>
              <p className="text-text-secondary">
                We begin with a comprehensive evaluation of your condition, medical history, and goals to develop a complete understanding of your needs.
              </p>
            </div>
            
            {/* Approach 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-user-md text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Treatment</h3>
              <p className="text-text-secondary">
                Each treatment plan is tailored to your specific condition, lifestyle, and goals, ensuring the most effective approach for your recovery.
              </p>
            </div>
            
            {/* Approach 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-book-medical text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Evidence-Based Practices</h3>
              <p className="text-text-secondary">
                Our treatments are founded on the latest research and proven techniques in physiotherapy to deliver the best possible outcomes.
              </p>
            </div>
            
            {/* Approach 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-hands-helping text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Hands-On Care</h3>
              <p className="text-text-secondary">
                We emphasize manual therapy techniques that directly address pain, limited mobility, and muscle imbalances.
              </p>
            </div>
            
            {/* Approach 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-graduation-cap text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Patient Education</h3>
              <p className="text-text-secondary">
                We empower you with knowledge about your condition and provide strategies to prevent future issues and maintain optimal health.
              </p>
            </div>
            
            {/* Approach 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <i className="fas fa-chart-line text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Monitoring</h3>
              <p className="text-text-secondary">
                We continuously assess your progress and adjust your treatment plan as needed to ensure you achieve your recovery goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Book an appointment with our expert physiotherapists and take the first step toward improved health and mobility.
          </p>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
