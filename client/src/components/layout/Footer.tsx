import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PhysioForU</h3>
            <p className="mb-4">Professional physiotherapy services dedicated to helping you recover, improve mobility, and enhance your quality of life.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-neutral-200 transition duration-200" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-neutral-200 transition duration-200" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-neutral-200 transition duration-200" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-neutral-200 transition duration-200" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-neutral-200 transition duration-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-neutral-200 transition duration-200">About Us</Link></li>
              <li><Link href="/services" className="hover:text-neutral-200 transition duration-200">Our Services</Link></li>
              <li><Link href="/blog" className="hover:text-neutral-200 transition duration-200">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-200 transition duration-200">Contact</Link></li>
              <li><Link href="/testimonials" className="hover:text-neutral-200 transition duration-200">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/sports-injuries" className="hover:text-neutral-200 transition duration-200">Sports Injuries</Link></li>
              <li><Link href="/services/back-neck-pain" className="hover:text-neutral-200 transition duration-200">Back & Neck Pain</Link></li>
              <li><Link href="/services/joint-pain" className="hover:text-neutral-200 transition duration-200">Joint Pain</Link></li>
              <li><Link href="/services/post-surgical-rehabilitation" className="hover:text-neutral-200 transition duration-200">Post-Surgical Rehab</Link></li>
              <li><Link href="/services/gait-analysis" className="hover:text-neutral-200 transition duration-200">Gait Analysis</Link></li>
              <li><Link href="/services/manual-therapy" className="hover:text-neutral-200 transition duration-200">Manual Therapy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Therapy Street, Healthcare Building, London, UK</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <span>+44 (0) 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>info@physioforu.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} PhysioForU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
