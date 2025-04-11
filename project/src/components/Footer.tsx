import React from 'react';
import { Instagram, MapPin, Mail, Phone, ExternalLink, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 backdrop-blur-sm">
        {/* Main Footer Content - Three columns with Snabblänkar in the middle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-xl mb-2">Kontaktuppgifter</h3>
            <a 
              href="mailto:info@xerobro.com" 
              className="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <Mail size={18} className="mr-3 group-hover:scale-110 transition-transform" />
              info@xerobro.com
            </a>
            <a 
              href="tel:+46736292624" 
              className="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <Phone size={18} className="mr-3 group-hover:scale-110 transition-transform" />
              +46 73-629 26 24
            </a>
            <div className="flex items-center text-gray-400 group">
              <MapPin size={18} className="mr-3" />
              <span>Baserad i Sverige</span>
            </div>
          </div>
          
          {/* Quick Links - Now in the middle */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-xl mb-2">Snabblänkar</h3>
            <a href="#about" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Om oss
            </a>
            <a href="#solutions" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Lösningar
            </a>
            <Link to="/privacy-policy" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Integritetspolicy
            </Link>
            <Link to="/terms-of-service" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Användarvillkor
            </Link>
            <Link to="/impressum" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Impressum
            </Link>
          </div>
          
          {/* Social Media Section - Now on the right */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-xl mb-2">Följ oss</h3>
            <div className="flex flex-col items-center space-y-4">
              <a 
                href="https://instagram.com/xerobroai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-colors hover:scale-110 transform duration-200 flex items-center space-x-2"
              >
                <Instagram size={22} />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/xerobro/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-colors hover:scale-110 transform duration-200 flex items-center space-x-2"
              >
                <Linkedin size={22} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Xerobro. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;