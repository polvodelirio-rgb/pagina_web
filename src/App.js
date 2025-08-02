import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { products } from './mock/products';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // ¡Aquí estaba el pequeño travieso!

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-beige-50 to-white-50 text-gray-800">
      <Header />

      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section id="inicio" className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <img
            src="assets/fondo.jpg"
            alt="Fondo de Polvo de Lirio"
            className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 text-white p-8 rounded-lg bg-black/30"
          >
            <h2 className="text-5xl font-bold mb-4 font-serif">Tejido con Amor, Hecho a Mano</h2>
            <p className="text-xl mb-8">Creaciones únicas en crochet para ti y tus seres queridos.</p>
            <motion.a
              href="#catalogo"
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explora el Catálogo
            </motion.a>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mi" className="container mx-auto px-4 py-16">
          
        
    

        
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-center text-pink-600 mb-12 font-serif"
          >
            Sobre Mí
            
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-xl shadow-lg">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              src="assets/creadora.jpg"
              alt="Creadora de Polvo de Lirio"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-md"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <p className="mb-4">
                ¡Hola! Soy la mente y las manos detrás de Polvo de Lirio. Desde pequeña, el crochet ha sido mi pasión, una forma de dar vida a mis ideas y compartir un pedacito de mi corazón. Cada muñeco, cada llavero, cada flor que ves aquí está tejido a mano con el máximo cuidado, dedicación y, sobre todo, mucho amor.
              </p>
              <p>
                Mi objetivo es crear piezas únicas que transmitan calidez y alegría, perfectas para regalar o para darte un capricho. Espero que disfrutes tanto de mis creaciones como yo disfruto haciéndolas. ¡Gracias por apoyar lo hecho a mano!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalogo" className="container mx-auto px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-center text-pink-600 mb-12 font-serif"
          >
            Nuestro Catálogo
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://wa.me/3115743149" // ¡No olvides cambiar esto por tu número de WhatsApp!
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-3 mx-auto max-w-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-2xl" />
              ¡Haz tu pedido personalizado!
            </motion.a>
          </motion.div>
        </section>

        {/* Instagram Section */}
        <section id="instagram" className="container mx-auto px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-center text-pink-600 mb-12 font-serif"
          >
            Síguenos en Instagram
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              ¡No te pierdas nuestras últimas creaciones y novedades! Síguenos en Instagram para ver más magia tejida.
            </p>
            <motion.a
              href="https://www.instagram.com/polvo_de_lirio/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto max-w-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram className="text-2xl" />
              @polvo_de_lirio
            </motion.a>
            <p className="text-sm text-gray-500 mt-4">
              (Nota: La integración directa de publicaciones de Instagram requiere una API de Instagram, pero este botón te llevará directamente a nuestro perfil para que no te pierdas nada).
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/TUNUMERODEWHATSAPP" // ¡No olvides cambiar esto por tu número de WhatsApp!
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-3xl" />
      </motion.a>
    </div>
  );
};

export default App;