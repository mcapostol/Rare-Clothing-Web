// src/components/Gallery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  /* ────────────────────────────────────────────────────────────
     Singura modificare: fiecare obiect are acum imageSrc cu link
     direct către fotografia Pexels (licență gratuită). Restul
     codului, layout-ul și animațiile au rămas neschimbate.
  ──────────────────────────────────────────────────────────── */
  const galleryImages = [
    {
      title: "Atelier de Producție Principal",
      description:
        "Facilitatea noastră modernă de producție cu echipamente de ultimă generație",
      imageSrc:
        "https://images.pexels.com/photos/31031031/pexels-photo-31031031.jpeg",
    },
    {
      title: "Echipamente de Siguranță",
      description:
        "Gama completă de echipamente de protecție individuală",
      imageSrc:
        "https://images.pexels.com/photos/32048375/pexels-photo-32048375.jpeg",
    },
    {
      title: "Îmbrăcăminte de Lucru",
      description:
        "Salopete și uniforme de înaltă calitate pentru diverse industrii",
      imageSrc:
        "https://images.pexels.com/photos/31091540/pexels-photo-31091540.jpeg",
    },
    {
      title: "Control Calitate",
      description:
        "Procesul nostru riguros de verificare a calității produselor",
      imageSrc:
        "https://images.pexels.com/photos/31091547/pexels-photo-31091547.jpeg",
    },
    {
      title: "Echipa de Producție",
      description: "Specialiștii noștri experimentați la lucru",
      imageSrc:
        "https://images.pexels.com/photos/31336025/pexels-photo-31336025.jpeg",
    },
    {
      title: "Depozit și Logistică",
      description: "Facilități moderne de stocare și distribuție",
      imageSrc:
        "https://images.pexels.com/photos/31259263/pexels-photo-31259263.jpeg",
    },
  ];

  return (
    <section id="galerie" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* titlu + subtitlu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-gradient">Galeria</span> Noastră
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperiți facilitatea noastră de producție și gama completă de
            produse
          </p>
        </motion.div>

        {/* grid imagini */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* overlay + icon zoom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* titlu + descriere pe hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* modal preview */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-white" />
              </Button>

              <img
                src={selectedImage.imageSrc}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
