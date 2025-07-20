
import React from "react";
import { motion } from "framer-motion";
import { Eye, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Products = () => {
  const renaniaProducts = [
    {
      code: "C51201",
      title: "Bocanci de protecție PANDA S3",
      description:
        "Bocanci de protecție din piele, cu bombeu metalic și lamelă anti-perforație.",
      features: [
        "Bombeu metalic",
        "Lamelă anti-perforație",
        "Talpă antiderapantă SRC",
      ],
      imageSrc: "bocanci.jpg",
    },
    {
      code: "C30321",
      title: "Jachetă de lucru multifuncțională",
      description:
        "Jachetă rezistentă, cu multiple buzunare, ideală pentru diverse medii de lucru.",
      features: [
        "Material bumbac/poliester",
        "Multiple buzunare",
        "Manșete ajustabile",
      ],
      imageSrc: "/public/jacheta-multifunctionala.jpg",
    },
    {
      code: "C42110",
      title: "Mănuși de protecție MAXIFLEX",
      description:
        "Mănuși subțiri, flexibile, cu aderență excelentă pentru manipulări de precizie.",
      features: ["Acoperire nitril", "Flexibilitate superioară", "Respirabilitate"],
      imageSrc: "/public/manusi-maxiflex.jpg",
    },
    {
      code: "C31105",
      title: "Jachetă reflectorizantă HI-VIS",
      description:
        "Jachetă de înaltă vizibilitate, clasa 3, pentru siguranță maximă în condiții de lumină scăzută.",
      features: [
        "Certificare EN ISO 20471",
        "Benzi reflectorizante",
        "Impermeabilă",
      ],
      imageSrc: "/public/jacheta-hivis.jpg",
    },
    {
      code: "C52430",
      title: "Pantofi de protecție sport S1P",
      description:
        "Pantofi de protecție ușori și confortabili, cu design sport, ideali pentru logistică și depozite.",
      features: ["Bombeu compozit", "Greutate redusă", "Talpă flexibilă"],
      imageSrc: "/public/pantofi-sport.jpg",
    },
    {
      code: "C32150",
      title: "Pantaloni de lucru cu pieptar",
      description:
        "Pantaloni de lucru rezistenți cu pieptar și multiple buzunare, inclusiv pentru genunchiere.",
      features: [
        "Buzunare pentru genunchiere",
        "Bretele ajustabile",
        "Material durabil",
      ],
      imageSrc: "/public/pantaloni-pieptar.jpg",
    },
    {
      code: "C43301",
      title: "Cască de protecție industrială",
      description:
        "Cască de protecție standard, cu sistem de ajustare rapidă, pentru șantiere și industrie.",
      features: ["Certificare EN 397", "Ventilație optimă", "Greutate redusă"],
      imageSrc: "/public/casca-industriala.jpg",
    },
    {
      code: "C39820",
      title: "Combinezon de unică folosință",
      description:
        "Combinezon de protecție chimică, tip 5/6, pentru protecție împotriva particulelor și stropilor.",
      features: ["Protecție chimică", "Antistatic", "Glugă elastică"],
      imageSrc: "/public/combinezon-unique.jpg",
    },
  ];

  const handleProductClick = (productTitle) => {
    toast({
      title: "📄 Pagina de detalii este în construcție!",
      description: `Poți solicita implementarea paginii pentru '${productTitle}' în următorul prompt! 🚀`,
    });
  };

  return (
    <section id="produse" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        {/* titlu & descriere */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-gradient">Produse Recomandate</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Oferim o gamă variată de echipamente de protecție de înaltă
            calitate de la Renania, partenerul nostru de încredere.
          </p>
        </motion.div>

        {/* grid produse */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {renaniaProducts.map((product, index) => (
            <motion.div
              key={product.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {`Cod: ${product.code}`}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 h-16">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm h-20">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mt-4">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <ShieldCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleProductClick(product.title)}
                  className="w-full btn-primary text-white mt-4"
                >
                  Vezi Detalii
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
