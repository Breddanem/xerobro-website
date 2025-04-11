import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import logoImage from '../data/logo/Color logo - no background.png';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show header at the top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Determine scroll direction and visibility
      const isScrollingDown = currentScrollY > lastScrollY;
      setIsVisible(!isScrollingDown);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <button 
          onClick={handleBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
          <span>Tillbaka till startsidan</span>
        </button>
        <img src={logoImage} alt="Xerobro Logo" className="h-12" />
      </div>
    </header>
  );
};

export default PageHeader;