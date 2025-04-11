import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { projetos } from "../constants/index.jsx";
import { motion } from "framer-motion"; // Importando o framer motion

function ProjectSlider() {
  return (
    <div className="w-full h-[300px] sm:h-[200px] md:h-[400px] lg:h-[550px] overflow-hidden relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // <== melhora a transição
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
              <Link to={`/detalhes/${projeto.id}`} className="w-full h-full block">
                {/* Imagem com animação do Framer Motion */}
                <motion.img
                  src={projeto.ImageProjeto}
                  alt={projeto.NomeProjeto}
                  className="w-full h-full object-cover brightness-30"
                  initial={{ y: 0 }}
                  whileInView={{
                    y: [-20, 20],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  whileHover={{ scale: 1.05, opacity: 0.9 }} // Animação de hover
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              {/* Texto no canto inferior esquerdo */}
              <div className="absolute bottom-4 left-4 max-w-[90%] p-3 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white drop-shadow-md z-10">
                <Link
                  to={`/detalhes/${projeto.id}`}
                  className="bg-gradient-to-r from-orange-400 to-green-400 text-transparent bg-clip-text"
                >
                  {projeto.NomeProjeto}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
