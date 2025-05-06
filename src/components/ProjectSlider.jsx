import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import projetos from "../data/projetos";
import { motion, AnimatePresence } from "framer-motion"; // Importando o framer motion

const imagens = Object.values(
  import.meta.glob("../assets/ABImages/*.{png,jpg,jpeg,svg,gif}", {
    eager: true,
    as: "url",
  })
);

function ProjectSlider() {
  return (
    <div className="w-full h-[300px] sm:h-[200px] md:h-[400px] lg:h-[550px] overflow-hidden relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {projetos.map((projeto, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Link envolvendo a imagem para redirecionamento */}
              <Link
                to={`/projeto/${projeto.id}`}
                className="w-full h-full block"
              >
                {/* Imagem com animação do Framer Motion */}
                <motion.img
                  src={projeto.banner}
                  alt={projeto.nome}
                  className="w-full h-full object-cover"
                  initial={{ y: 0 }}
                  whileHover={{ scale: 1.08 }} // Animação de hover
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              {/* Texto no canto inferior esquerdo */}
              <div className="absolute bottom-4 left-4 max-w-[90%] p-3 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white drop-shadow-md z-10">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-orange-400 to-green-400 text-transparent bg-clip-text font-bold"
                  >
                    {projeto.nome}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
