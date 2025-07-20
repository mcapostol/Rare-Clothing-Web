import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>RARE CLOTHING PRODUCTION SRL - Îmbrăcăminte de Lucru și Echipamente de Siguranță</title>
        <meta name="description" content="RARE CLOTHING PRODUCTION SRL - Producător român de îmbrăcăminte de lucru, echipamente de siguranță și produse textile de înaltă calitate. Soluții profesionale pentru toate industriile." />
        <meta name="keywords" content="îmbrăcăminte de lucru, echipamente siguranță, producție textile, România, uniforme" />
        <html lang="ro" />
      </Helmet>
      
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;