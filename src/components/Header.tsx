import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-900">
              Alex <span className="text-orange-500">Painters</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" onClick={() => scrollToSection('services')} 
               className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer">
              Services
            </a>
            <a href="#about" onClick={() => scrollToSection('about')} 
               className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer">
              About
            </a>
            <a href="#gallery" onClick={() => scrollToSection('gallery')} 
               className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer">
              Gallery
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} 
               className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin size={16} className="text-orange-500" />
              <span>Las Vegas, NV</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-orange-500" />
              <span className="font-semibold text-gray-900">(702) 555-PAINT</span>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#services" onClick={() => scrollToSection('services')} 
                 className="text-gray-700 hover:text-blue-900 transition-colors">
                Services
              </a>
              <a href="#about" onClick={() => scrollToSection('about')} 
                 className="text-gray-700 hover:text-blue-900 transition-colors">
                About
              </a>
              <a href="#gallery" onClick={() => scrollToSection('gallery')} 
                 className="text-gray-700 hover:text-blue-900 transition-colors">
                Gallery
              </a>
              <a href="#contact" onClick={() => scrollToSection('contact')} 
                 className="text-gray-700 hover:text-blue-900 transition-colors">
                Contact
              </a>
              <div className="pt-2 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <MapPin size={16} className="text-orange-500" />
                  <span>Las Vegas, NV</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-orange-500" />
                  <span className="font-semibold text-gray-900">(702) 555-PAINT</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;