import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiTargetLock } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { projetos } from "../constants/index.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
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
      className="rounded-xl overflow-hidden shadow-lg"
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.05 }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {projetos.map((projeto, i) => (
          <SwiperSlide key={i}>
            <img
              src={projeto.ImageProjeto}
              alt={`Foto do projeto ${projeto.nome}`}
              className="h-88 w-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-900">{projeto.nome}</h2>
        <p className="text-sm text-gray-600">{projeto.objetivo}</p>
        <div className="flex justify-between">
          <Link
            to={`/projeto/${projeto.id}`}
            className="text-blue-900 mt-2 block font-extrabold"
          >
            {projeto.Estado}
          </Link>
          <motion.button
            onClick={() => toggleLike(index)}
            whileTap={{ scale: 1.3 }}
            className={`absolute bottom-2 right-2 p-2 rounded-full shadow-lg transition ${
              likes[index]
                ? "bg-gradient-to-r from-orange-400 to-green-400 text-white"
                : "bg-white text-gray-500"
            }`}
          >
            {likes[index] ? (
              <AiFillHeart size={28} />
            ) : (
              <AiOutlineHeart size={28} />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectCard;
