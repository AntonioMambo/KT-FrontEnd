import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import projetos from "../data/projetos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectCard = ({ projeto, index }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: !prevLikes[index],
    }));
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-300 relative"
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.02 }}
    >
      {/* Swiper modificado para mostrar apenas as imagens do projeto atual */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-64 sm:h-72 md:h-80 lg:h-96 w-full"
      >
        {/* Mapeia apenas as imagens do projeto atual */}

        <SwiperSlide>
          <img
            src={ projeto.banner}
            alt={`Foto do projeto ${projeto.nome}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="p-5">
        <h2 className="text-lg sm:text-xl font-bold text-blue-900">
          {projeto.nome}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          {projeto.objetivo}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <Link className="text-sm sm:text-base bg-blue-100 text-blue-900 px-4 py-1 rounded-full font-semibold hover:bg-blue-200 transition">
            {projeto.Estado}
          </Link>

          <motion.button
            onClick={() => toggleLike(index)}
            whileTap={{ scale: 1.3 }}
            className={`p-2 rounded-full shadow-md transition duration-200 ${
              likes[index]
                ? "bg-gradient-to-r from-orange-400 to-green-400 text-white"
                : "bg-white text-gray-500 hover:text-red-400"
            }`}
          >
            {likes[index] ? (
              <AiFillHeart size={24} />
            ) : (
              <AiOutlineHeart size={24} />
            )}
          </motion.button>
        </div>

        <div className="mt-4 text-center">
          <Link
            to={`/projeto/${projeto.id}`}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Saber mais
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
