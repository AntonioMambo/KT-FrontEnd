import React, { memo, useState, lazy, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import projetos from "../data/projetos";
import LazyImage from "./LazyImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative w-full h-[650px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        navigation
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {projetos.map((projeto, index) => (
          <SwiperSlide key={projeto.id} className="w-full h-full">
            <Link
              to={`/projeto/${projeto.id}`}
              className="block w-full h-full relative group"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <motion.div
                className="w-full h-full"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ 
                  scale: hovering ? 1.05 : 1,
                  opacity: 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={projeto.banner}
                  alt={projeto.nome}
                  className="w-full h-full object-cover"
                  style={{ 
                    filter: 'brightness(0.6)',
                    transition: 'filter 0.3s ease-in-out'
                  }}
                />
              </motion.div>

              {/* Overlay com informações */}
              <AnimatePresence>
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/70 to-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.h2
                      className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {projeto.nome}
                    </motion.h2>
                    <motion.p
                      className="text-lg text-gray-200 max-w-2xl mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {projeto.objetivo}
                    </motion.p>
                    <motion.div
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full
                        hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2">
                        Saiba mais
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Indicadores de slide */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        {projetos.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-white/40'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSlider;