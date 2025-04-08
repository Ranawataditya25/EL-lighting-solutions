const ContactInfo = () => {
  return (
    <div className="bg-neutral-100 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="text-primary mt-1 mr-4">
            <i className="fas fa-map-marker-alt text-xl"></i>
          </div>
          <div>
            <h4 className="font-bold mb-1">Our Location</h4>
            <p className="text-text-secondary">PhysioForU</p>
            <p className="text-text-secondary">C-98, Om Path, Bhagirath Marg, Shyam Nagar</p>
            <p className="text-text-secondary">Behind Community Centre, Jaipur</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="text-primary mt-1 mr-4">
            <i className="fas fa-phone-alt text-xl"></i>
          </div>
          <div>
            <h4 className="font-bold mb-1">Phone</h4>
            <p className="text-text-secondary">+91 9782219444</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="text-primary mt-1 mr-4">
            <i className="fas fa-envelope text-xl"></i>
          </div>
          <div>
            <h4 className="font-bold mb-1">Email</h4>
            <p className="text-text-secondary">physioforu5@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="text-primary mt-1 mr-4">
            <i className="fas fa-clock text-xl"></i>
          </div>
          <div>
            <h4 className="font-bold mb-1">Working Hours</h4>
            <p className="text-text-secondary">Monday - Friday: 10:00 AM - 7:00 PM</p>
            <p className="text-text-secondary">Saturday - Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-bold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-200" aria-label="Facebook">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-200" aria-label="Twitter">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-200" aria-label="Instagram">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-200" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
