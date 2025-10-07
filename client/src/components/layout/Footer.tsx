import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EL Lighting Solutions </h3>
            <p className="mb-4">EL Lighting Solutions provides high-quality, stylish, and energy-efficient lighting products. We help transform spaces with innovative designs that combine functionality and elegance, creating the perfect ambiance for homes and businesses.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BGoiF8SjU/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-200 transition duration-200" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/eltechnologylighting" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-200 transition duration-200" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-neutral-200 transition duration-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-neutral-200 transition duration-200">About Us</Link></li>
              {/* <li><Link href="/services" className="hover:text-neutral-200 transition duration-200">Our Services</Link></li> */}
              {/* <li><Link href="/blog" className="hover:text-neutral-200 transition duration-200">Blog</Link></li> */}
              <li><Link href="/contact" className="hover:text-neutral-200 transition duration-200">Contact</Link></li>
              <li><Link href="/testimonials" className="hover:text-neutral-200 transition duration-200">Testimonials</Link></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/sports-injuries" className="hover:text-neutral-200 transition duration-200">Sports Injuries</Link></li>
              <li><Link href="/services/back-neck-pain" className="hover:text-neutral-200 transition duration-200">Back & Neck Pain</Link></li>
              <li><Link href="/services/joint-pain" className="hover:text-neutral-200 transition duration-200">Joint Pain</Link></li>
              <li><Link href="/services/post-surgical-rehabilitation" className="hover:text-neutral-200 transition duration-200">Post-Surgical Rehab</Link></li>
              <li><Link href="/services/gait-analysis" className="hover:text-neutral-200 transition duration-200">Gait Analysis</Link></li>
              <li><Link href="/services/manual-therapy" className="hover:text-neutral-200 transition duration-200">Manual Therapy</Link></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>585, Surya Nagar, Sudama Kothi, Ridhi Sidhi Choraha, Gopalpura Bypass, Jaipur (Raj.) - 302015</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <span>+91-8824585675 , +91-9887832182, +91-9890701612</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>elligtssolutions@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3"></i>
                <span>Mon-Sat: 10AM-8PM, Sun: 10AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} EL LIGHTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
