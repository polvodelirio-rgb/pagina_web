import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="assets/logo.jpg "
          alt="Polvo de Lirio Logo" 
          
          className="h-12 mr-3" />
          <h1 className="text-3xl font-bold text-pink-600 font-serif">Polvo de Lirio</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300">Inicio</a>
          <a href="#sobre-mi" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300">Sobre mí</a>
          <a href="#catalogo" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300">Catálogo</a>
          <a href="#instagram" className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-300">Instagram</a>
        </nav>
        <motion.a
          href="https://wa.me/3115743149" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="text-xl" />
          <span className="font-semibold hidden sm:block">Pedir por WhatsApp</span>
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;