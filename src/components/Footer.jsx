
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Acasă", href: "#hero" },
    { name: "Despre Noi", href: "#despre-noi" },
    { name: "Produse", href: "#produse" },
    { name: "Contact", href: "#contact" }
  ];

  const productLinks = [
    "Echipamente de Siguranță",
    "Îmbrăcăminte de Lucru",
    "Uniforme Corporate",
    "Echipamente Speciale"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <div>
                <span className="text-xl font-bold">RARE CLOTHING</span>
                <p className="text-sm text-gray-400">PRODUCTION SRL</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Producător român de încredere pentru îmbrăcăminte de lucru și echipamente de siguranță. 
              Calitate superioară pentru siguranța dumneavoastră.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-lg font-semibold">Navigare Rapidă</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-lg font-semibold">Produse</span>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-lg font-semibold">Contact</span>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+40 721 091 991</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">rarecp2016@gmail.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-400">
                  <p>Str. Macului Nr. 34</p>
                  <p>Buftea, Ilfov</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} RARE CLOTHING PRODUCTION SRL. Toate drepturile rezervate.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
