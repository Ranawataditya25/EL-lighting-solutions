import { Helmet } from "react-helmet";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Homeowner, Jaipur",
    feedback:
      "EL Lighting Solutions transformed my living room with their decorative lights. The ambience feels premium and welcoming now.",
  },
  {
    id: 2,
    name: "Meena Kapoor",
    role: "Interior Designer",
    feedback:
      "I recommend EL Lights to all my clients. Their products are energy-efficient, stylish, and add a modern touch to any interior.",
  },
  {
    id: 3,
    name: "Arun Mehta",
    role: "Restaurant Owner",
    feedback:
      "Our café’s atmosphere has completely changed after installing EL’s lighting solutions. Customers often compliment the warm vibe.",
  },
  {
    id: 4,
    name: "Neha Verma",
    role: "Office Manager",
    feedback:
      "We switched to EL Lighting Solutions for our workspace. The lighting is bright yet comfortable, and electricity bills have gone down.",
  },
  {
    id: 5,
    name: "Vikas Jain",
    role: "Retail Store Owner",
    feedback:
      "The LED track lights from EL Solutions highlight our products beautifully. Sales have improved as customers notice displays better.",
  },
];

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Customer Testimonials | EL Lighting Solutions</title>
        <meta
          name="description"
          content="Read what our customers have to say about their experience with EL Lighting Solutions. Discover how our decorative and energy-efficient lights transform spaces."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-16 px-4 relative">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Hear from our satisfied customers about how EL Lighting Solutions
            brightened their homes and businesses.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              We’re proud to provide lighting solutions that enhance style,
              comfort, and energy efficiency. Here’s what our customers think.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-text-secondary mb-4">
                  “{testimonial.feedback}”
                </p>
                <div className="mt-4 text-right">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
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

export default TestimonialsPage;
