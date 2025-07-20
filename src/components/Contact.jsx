
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast({ title: "✅ Mesaj trimis!", description: "Vă vom răspunde în cel mai scurt timp." });
      formRef.current.reset();
    } catch (err) {
      toast({ title: "❌ Eroare la trimitere", description: "Încercați din nou mai târziu." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-bold mb-10"
        >
          <span className="text-gradient">Contactează-ne</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* carduri info + hartă */}
          <div className="space-y-6">
            {/* Telefon */}
            <div className="info-card">
              <Phone className="icon-blue" />
              <div>
                <h4>Telefon</h4>
                <p>+40 721 091 991</p>
              </div>
            </div>

            {/* Email */}
            <div className="info-card">
              <Mail className="icon-green" />
              <div>
                <h4>Email</h4>
                <p>rarecp2016@gmail.com</p>
              </div>
            </div>

            {/* Adresă */}
            <div className="info-card">
              <MapPin className="icon-orange" />
              <div>
                <h4>Adresă</h4>
                <p>Str. Macului Nr. 34<br />Buftea, Ilfov</p>
              </div>
            </div>

            {/* Program */}
            <div className="info-card">
              <Clock className="icon-purple" />
              <div>
                <h4>Program</h4>
                <p>Luni - Vineri: 08-17</p>
                <p>Sâmbătă: 09-13</p>
              </div>
            </div>

            {/* Harta */}
            <iframe
              title="Locația Rare Clothing Production"
              src="https://maps.google.com/maps?q=Strada%20Macului%2034%2C%20Buftea%20Ilfov&z=15&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 rounded-lg shadow-md border"
              style={{ border: 0 }}
            />
          </div>

          {/* Formular */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-800">Trimite-ne un Mesaj</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Nume complet*" className="input" />
              <input type="email" name="email" required placeholder="Email*" className="input" />
              <input name="phone" placeholder="Telefon" className="input" />
              <input name="company" placeholder="Companie" className="input" />
            </div>

            <textarea
              name="message"
              required
              placeholder="Mesaj*"
              className="input h-32"
            />

            <Button
              type="submit"
              className="w-full btn-primary text-white"
              disabled={loading}
            >
              {loading ? "Se trimite..." : "Trimite Mesajul"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

/* utilitare rapide (poți muta în index.css / tailwind layer) */
const card =
  "flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6";
const iconBase =
  "w-10 h-10 p-2 rounded-lg text-white flex-shrink-0";
export const styles = `
.info-card { @apply ${card}; }
.icon-blue   { @apply ${iconBase} bg-blue-500; }
.icon-green  { @apply ${iconBase} bg-green-500; }
.icon-orange { @apply ${iconBase} bg-orange-500; }
.icon-purple { @apply ${iconBase} bg-purple-500; }
.input       { @apply w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400; }
`;
export default Contact;