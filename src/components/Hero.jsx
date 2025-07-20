import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCatalogClick = () => {
    toast({
      title: "📋 Catalogul nu este încă implementat",
      description: "Dar nu-ți face griji! Poți solicita această funcționalitate în următorul prompt! 🚀"
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-gradient">RARE CLOTHING</span>
                <br />
                <span className="text-gray-800">PRODUCTION SRL</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
              >
                Producător român de încredere pentru îmbrăcăminte de lucru și echipamente de siguranță de înaltă calitate. 
                Soluții profesionale adaptate nevoilor dumneavoastră.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={handleContactClick}
                className="btn-primary text-white px-8 py-3 text-lg"
              >
                Contactează-ne
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Siguranță</p>
                <p className="text-xs text-gray-500">Certificată</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Calitate</p>
                <p className="text-xs text-gray-500">Premium</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Experiență</p>
                <p className="text-xs text-gray-500">15+ Ani</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
             <img
                  alt="Echipă de producție Rare Clothing în atelierul de confecții"
                  className="rounded-2xl shadow-2xl w-full h-[350px] sm:h-[500px] object-cover"
                  src={`${import.meta.env.BASE_URL}Poza-prima-pagina.jpg`}   /* <-- calea corectă */
               />  {/* ← SLASH‑ul de închidere */}
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-blue-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
