import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-pink-100 py-8 mt-12"
    >
      <div className="container mx-auto text-center text-gray-700">
        <p className="mb-4">Hecho con amor y ganchillo por Polvo de Lirio © {new Date().getFullYear()}</p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://www.instagram.com/polvo_de_lirio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="text-3xl" />
          </motion.a>
          <motion.a
            href="https://wa.me/3115743149" // ¡No olvides cambiar esto por tu número de WhatsApp!
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp className="text-3xl" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;