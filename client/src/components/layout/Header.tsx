import { useState } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="block">
              <h1 className="text-2xl font-bold text-primary flex items-center">
                <span className="text-secondary mr-1">Physio</span>ForU
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`font-medium hover:text-primary transition duration-200 ${location === '/' ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link 
                href="/services" 
                className={`font-medium hover:text-primary transition duration-200 flex items-center ${location === '/services' || location.startsWith('/services/') ? 'text-primary' : ''}`}
              >
                Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link href="/services/sports-injuries" className="block px-4 py-2 text-sm hover:bg-neutral-100 hover:text-primary" role="menuitem">Sports Injuries</Link>
                  <Link href="/services/back-neck-pain" className="block px-4 py-2 text-sm hover:bg-neutral-100 hover:text-primary" role="menuitem">Back & Neck Pain</Link>
                  <Link href="/services/joint-pain" className="block px-4 py-2 text-sm hover:bg-neutral-100 hover:text-primary" role="menuitem">Joint Pain</Link>
                  <Link href="/services/post-surgical-rehabilitation" className="block px-4 py-2 text-sm hover:bg-neutral-100 hover:text-primary" role="menuitem">Post-Surgical Rehabilitation</Link>
                  <Link href="/services/gait-analysis" className="block px-4 py-2 text-sm hover:bg-neutral-100 hover:text-primary" role="menuitem">Gait Analysis</Link>
                  <Link href="/services/manual-therapy" className="block px-4 py-2 text-sm hover:bg-neutral-100 hover:text-primary" role="menuitem">Manual Therapy</Link>
                </div>
              </div>
            </div>
            <Link 
              href="/about" 
              className={`font-medium hover:text-primary transition duration-200 ${location === '/about' ? 'text-primary' : ''}`}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className={`font-medium hover:text-primary transition duration-200 ${location === '/blog' || location.startsWith('/blog/') ? 'text-primary' : ''}`}
            >
              Blog
            </Link>
            <Link 
              href="/testimonials" 
              className={`font-medium hover:text-primary transition duration-200 ${location === '/testimonials' ? 'text-primary' : ''}`}
            >
              Testimonials
            </Link>
            <Link 
              href="/videos" 
              className={`font-medium hover:text-primary transition duration-200 ${location === '/videos' ? 'text-primary' : ''}`}
            >
              Videos
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium hover:text-primary transition duration-200 ${location === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-2xl text-primary"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md font-medium hover:bg-neutral-100 hover:text-primary ${location === '/' ? 'text-primary' : ''}`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <div className="relative">
              <button 
                className="w-full text-left px-3 py-2 rounded-md font-medium hover:bg-neutral-100 hover:text-primary flex justify-between items-center" 
                onClick={toggleServicesDropdown}
              >
                Services <i className={`fas fa-chevron-down text-xs transform ${isServicesDropdownOpen ? 'rotate-180' : ''} transition-transform duration-200`}></i>
              </button>
              <div className={`pl-4 space-y-1 ${isServicesDropdownOpen ? 'block' : 'hidden'}`}>
                <Link 
                  href="/services/sports-injuries" 
                  className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Sports Injuries
                </Link>
                <Link 
                  href="/services/back-neck-pain" 
                  className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Back & Neck Pain
                </Link>
                <Link 
                  href="/services/joint-pain" 
                  className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Joint Pain
                </Link>
                <Link 
                  href="/services/post-surgical-rehabilitation" 
                  className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Post-Surgical Rehabilitation
                </Link>
                <Link 
                  href="/services/gait-analysis" 
                  className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Gait Analysis
                </Link>
                <Link 
                  href="/services/manual-therapy" 
                  className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Manual Therapy
                </Link>
              </div>
            </div>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-md font-medium hover:bg-neutral-100 hover:text-primary ${location === '/about' ? 'text-primary' : ''}`}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className={`block px-3 py-2 rounded-md font-medium hover:bg-neutral-100 hover:text-primary ${location === '/blog' || location.startsWith('/blog/') ? 'text-primary' : ''}`}
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link 
              href="/testimonials" 
              className={`block px-3 py-2 rounded-md font-medium hover:bg-neutral-100 hover:text-primary ${location === '/testimonials' ? 'text-primary' : ''}`}
              onClick={toggleMobileMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="/videos" 
              className={`block px-3 py-2 rounded-md font-medium hover:bg-neutral-100 hover:text-primary ${location === '/videos' ? 'text-primary' : ''}`}
              onClick={toggleMobileMenu}
            >
              Videos
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md font-medium hover:bg-neutral-100 hover:text-primary ${location === '/contact' ? 'text-primary' : ''}`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
