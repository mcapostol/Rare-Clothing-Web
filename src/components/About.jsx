
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Factory, Truck, HeartHandshake } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Factory,
      title: "Producție Proprie",
      description: "Facilități moderne de producție cu echipamente de ultimă generație"
    },
    {
      icon: CheckCircle,
      title: "Calitate Garantată",
      description: "Toate produsele sunt testate și certificate conform standardelor europene"
    },
    {
      icon: Truck,
      title: "Livrare Rapidă",
      description: "Livrăm în toată România în maximum 3-5 zile lucrătoare"
    },
    {
      icon: HeartHandshake,
      title: "Suport Dedicat",
      description: "Echipa noastră vă oferă consultanță specializată pentru fiecare proiect"
    }
  ];

  return (
    <section id="despre-noi" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              alt="Facilitatea de producție Rare Clothing cu mașini industriale moderne"
              className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] object-cover"
             src="https://images.unsplash.com/photo-1610891015188-5369212db097" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Despre <span className="text-gradient">RARE CLOTHING PRODUCTION SRL</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Cu peste 15 ani de experiență în industria textilă, RARE CLOTHING PRODUCTION SRL 
                s-a impus ca unul dintre liderii români în producția de îmbrăcăminte de lucru 
                și echipamente de siguranță.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Misiunea noastră este să oferim produse de cea mai înaltă calitate, 
                care să asigure siguranța și confortul lucrătorilor din diverse industrii. 
                Investim constant în tehnologie și inovație pentru a răspunde celor mai 
                exigente cerințe ale clienților noștri.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
