
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RC</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-gray-800">RARE CLOTHING</span>
              <p className="text-xs sm:text-sm text-gray-600">PRODUCTION SRL</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Acasă', 'Despre Noi', 'Produse', 'Galerie', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index === 0 ? 'hero' : item.toLowerCase().replace(' ', '-'))}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+40 721 091 991</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>rarecp2016@gmail.com</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="py-4 space-y-2">
              {['Acasă', 'Despre Noi', 'Produse', 'Galerie', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index === 0 ? 'hero' : item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
