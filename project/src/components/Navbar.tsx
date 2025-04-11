import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import logoImage from '../data/logo/Color logo - no background.png';

const Navbar = () => {
  const navigate = useNavigate();
  const isVisible = useScrollDirection();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after component mounts to trigger fade-in animation
    setMounted(true);
  }, []);

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page
      navigate('/');
    }
  };

  const scrollToFooter = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      // Add a small delay to allow navigation to complete before scrolling
      setTimeout(() => {
        const footer = document.getElementById('contact');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const footer = document.getElementById('contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 bg-transparent transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${mounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={handleLogoClick} 
            className="text-white hover:text-gray-300 transition-colors flex items-center"
          >
            <img src={logoImage} alt="Xerobro Logo" className="h-16" />
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Om oss</a>
            <button 
              onClick={scrollToFooter}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Kontakt
            </button>
            <button 
              onClick={() => navigate('/deploy')}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              Kom igång
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;