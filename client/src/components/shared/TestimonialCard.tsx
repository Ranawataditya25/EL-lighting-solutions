import { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  // Function to render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    // Add empty stars to make it 5 total
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-4">
        <i className="fas fa-quote-left text-primary text-4xl"></i>
      </div>
      <p className="text-text-secondary mb-6 text-center italic">"{testimonial.quote}"</p>
      <div className="flex justify-center">
        <div className="text-center">
          <div className="text-yellow-400 mb-2">
            {renderStars(testimonial.rating)}
          </div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-text-secondary">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
