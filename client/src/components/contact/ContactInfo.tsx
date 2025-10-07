const ContactInfo = () => {
  return (
    <div className="bg-neutral-100 w-full p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Info */}
        <div>
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start">
              <div className="text-primary mt-1 mr-4">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Our Location</h4>
                <p className="text-text-secondary">EL Lights</p>
                <p className="text-text-secondary">585, Surya Nagar, Sudama Kothi, Ridhi Sidhi Choraha</p>
                <p className="text-text-secondary">Gopalpura Bypass, Jaipur (Raj.) - 302015</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="text-primary mt-1 mr-4">
                <i className="fas fa-phone-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-text-secondary">+91-8824585675 , +91-9887832182, +91-9890701612</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="text-primary mt-1 mr-4">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-text-secondary">elligtssolutions@gmail.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start">
              <div className="text-primary mt-1 mr-4">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Working Hours</h4>
                <p className="text-text-secondary">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p className="text-text-secondary">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BGoiF8SjU/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition duration-200"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/eltechnologylighting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition duration-200"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div>
          <h3 className="font-bold mb-4">Find Us on Map</h3>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4054713185787!2d75.779006!3d26.8742458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59806cc9d07%3A0xe6456cd19914d7c!2sEL%20Technologies%20%26%20Lighting%20Solutions%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1759391620570!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
