import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────── */
/* helper – previne scroll‑ul în body când meniul mobil e deschis */
const toggleBodyScroll = (lock) => {
  document.documentElement.style.overflow = lock ? "hidden" : "";
};

/* ─────────────────────────────────────────────────────────── */
const Header = () => {
  const [open, setOpen] = useState(false);
  const [elevate, setElevate] = useState(false);

  /* shadow + blur după 50 px scroll */
  useEffect(() => {
    const onScroll = () => setElevate(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* blochez scroll‑ul când meniul e deschis */
  useEffect(() => toggleBodyScroll(open), [open]);

  /* smooth scroll utilă pe toate ancorele interne */
  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const links = [
    { label: "Acasă", to: "hero" },
    { label: "Despre Noi", to: "despre-noi" },
    { label: "Produse", to: "produse" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        elevate || open
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <button
            onClick={() => goto("hero")}
            className="flex items-center space-x-3 focus-visible:outline-none"
          >
            <div className="grid h-10 w-10 place-content-center rounded-lg bg-gradient-to-br from-blue-500 to-orange-500 text-white font-bold">
              RC
            </div>
            <div className="text-left leading-tight hidden xs:block">
              <span className="block text-base font-semibold text-gray-800">
                RARE CLOTHING
              </span>
              <span className="block text-xs text-gray-600">
                PRODUCTION SRL
              </span>
            </div>
          </button>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <button
                key={l.to}
                onClick={() => goto(l.to)}
                className="relative font-medium text-gray-700/90 hover:text-blue-600 focus-visible:outline-none"
              >
                {l.label}
                {/* underline on hover */}
                <span className="absolute left-0 -bottom-1 h-px w-full scale-x-0 bg-blue-600 transition-transform duration-200 group-hover/nav:scale-x-100"></span>
              </button>
            ))}
          </nav>

          {/* contact info – apare doar ≥ lg */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+40 721 091 991</span>
            </div>
            <div className="hidden xl:flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>rarecp2016@gmail.com</span>
            </div>
          </div>

          {/* burger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Meniu"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* OFF‑CANVAS MENU – doar mobil  */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-inner"
          >
            <ul className="divide-y divide-gray-100">
              {links.map((l) => (
                <li key={l.to}>
                  <button
                    onClick={() => goto(l.to)}
                    className="block w-full px-6 py-4 text-left font-medium text-gray-700 hover:bg-blue-50 focus-visible:outline-none"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              {/* info contact în meniu */}
              <li className="px-6 py-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+40 721 091 991</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>rarecp2016@gmail.com</span>
                </div>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;