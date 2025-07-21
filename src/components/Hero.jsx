import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

/*  ░░ helper – scroll la #contact ░░ */
const scrollContact = () => {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    /* pt‑xxl >100vh + padding sus egal cu header (h‑20) */
    <section
      id="hero"
      className="relative flex items-center min-h-[calc(100svh-5rem)] pt-20 lg:pt-0 overflow-hidden gradient-bg"
    >
      {/* ușor blur / fade spre dreapta */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ────────── IMG PRIMA PE MOBIL ────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last relative"
          >
            <picture className="block rounded-2xl shadow-2xl overflow-hidden">
              {/* 2x rez pentru retina; poți lăsa doar jpeg dacă nu ai webp */}
              <source
                srcSet={`${import.meta.env.BASE_URL}Poza-prima-pagina.jpg 1x, ${
                  import.meta.env.BASE_URL
                }Poza-prima-pagina.jpg 2x`}
                type="image/jpeg"
              />
              <img
                src={`${import.meta.env.BASE_URL}Poza-prima-pagina.jpg`}
                alt="Echipă de producție Rare Clothing în atelier"
                className="w-full h-auto aspect-[16/10] object-cover"
                loading="lazy"
              />
            </picture>

            {/* accente decorative */}
            <span className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-orange-400 opacity-20" />
            <span className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-blue-400 opacity-20" />
          </motion.div>

          {/* ────────── TEXT & CTA ────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 text-center lg:text-left"
          >
            {/* titlu + subtitlu */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-gradient">RARE CLOTHING</span>
                <br />
                <span className="text-gray-800">PRODUCTION SRL</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mx-auto lg:mx-0 max-w-lg text-base sm:text-lg text-gray-600"
              >
                Producător român de încredere pentru îmbrăcăminte de lucru și
                echipamente de siguranță de înaltă calitate. Soluții
                profesionale adaptate nevoilor dumneavoastră.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button
                onClick={scrollContact}
                className="btn-primary text-white px-8 py-3 text-lg"
              >
                Contactează‑ne
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {[
                { icon: Shield, label: "Siguranță", sub: "Certificată" },
                { icon: Award, label: "Calitate", sub: "Premium" },
                { icon: Users, label: "Experiență", sub: "15+ Ani" },
              ].map(({ icon: Icon, label, sub }) => (
                <li key={label} className="text-center">
                  <span className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                  <p className="text-xs text-gray-500">{sub}</p>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;