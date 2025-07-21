/*  Products.jsx – optimizat, fără butonul „Vezi Detalii”  */
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

/*  ─────────────────────────  LISTA PRODUSE  ───────────────────────── */
const PRODUCTS = [
  {
    code: "C51201",
    title: "Bocanci de protecție PANDA S3",
    desc: "Bocanci din piele, bombeu metalic și lamelă anti‑perforație.",
    feats: ["Bombeu metalic", "Lamelă anti‑perforație", "Talpă SRC"],
    img: "bocanci.jpg",
  },
  {
    code: "C30321",
    title: "Jachetă de lucru multifuncțională",
    desc: "Jachetă rezistentă, cu multiple buzunare, ideală pentru diverse medii de lucru.",
    feats: ["Bumbac/poliester", "Buzunare multiple", "Manșete ajustabile"],
    img: "jacheta-multifunctionala.jpg",
  },
  {
    code: "C42110",
    title: "Mănuși de protecție MAXIFLEX",
    desc: "Mănuși subțiri, flexibile, cu aderență excelentă pentru manipulări de precizie.",
    feats: ["Acoperire nitril", "Flexibilitate superioară", "Respirabilitate"],
    img: "manusi-maxiflex.jpg",
  },
  {
    code: "C31105",
    title: "Jachetă reflectorizantă HI‑VIS",
    desc: "Jachetă de înaltă vizibilitate, clasa 3, pentru siguranță maximă.",
    feats: ["EN ISO 20471", "Benzi reflectorizante", "Impermeabilă"],
    img: "jacheta-hivis.jpg",
  },
  {
    code: "C52430",
    title: "Pantofi de protecție sport S1P",
    desc: "Pantofi ușori și confortabili, design sport, ideali pentru logistică.",
    feats: ["Bombeu compozit", "Greutate redusă", "Talpă flexibilă"],
    img: "pantofi-sport.jpg",
  },
  {
    code: "C32150",
    title: "Pantaloni de lucru cu pieptar",
    desc: "Pantaloni rezistenți cu pieptar și buzunare pentru genunchiere.",
    feats: ["Buzunare genunchiere", "Bretele ajustabile", "Material durabil"],
    img: "pantaloni-pieptar.jpg",
  },
  {
    code: "C43301",
    title: "Cască de protecție industrială",
    desc: "Cască standard, sistem de ajustare rapidă, pentru șantiere.",
    feats: ["Certificare EN 397", "Ventilație optimă", "Greutate redusă"],
    img: "casca-industriala.jpg",
  },
  {
    code: "C39820",
    title: "Combinezon de unică folosință",
    desc: "Combinezon tip 5/6, protecție particule + stropi chimici.",
    feats: ["Protecție chimică", "Antistatic", "Glugă elastică"],
    img: "combinezon-unique.jpg",
  },
];

/* ─────────────────────────────────────────────────────────── */
const Products = () => {
  const reduceMotion = useReducedMotion();

  /* Toast – acum apare când utilizatorul face click pe card */
  const openToast = (t) =>
    toast({
      title: "📄 Pagina de detalii este în construcție!",
      description: `Poți solicita implementarea paginii pentru „${t}”.`,
    });

  return (
    <section id="produse" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        {/* titlu & descriere */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-gradient">Produse Recomandate</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-gray-600">
            Echipamente de protecție de înaltă calitate, gata de livrare.
          </p>
        </motion.div>

        {/* grid responsive */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.code}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md cursor-pointer"
              onClick={() => openToast(p.title)}
            >
              {/* imagine + cod */}
              <div className="relative aspect-[4/3]">
                <img
                  src={`${import.meta.env.BASE_URL}${p.img}`}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                  Cod: {p.code}
                </span>
              </div>

              {/* text */}
              <div className="flex flex-grow flex-col p-5 space-y-4">
                <div className="flex-grow space-y-3">
                  <h3 className="line-clamp-2 text-lg font-semibold text-gray-800">
                    {p.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-gray-600">{p.desc}</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    {p.feats.map((f) => (
                      <li key={f} className="flex items-center">
                        <ShieldCheck className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;