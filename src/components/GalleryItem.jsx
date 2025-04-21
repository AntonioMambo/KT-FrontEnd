import { useState } from "react";
import { motion } from "framer-motion";
import bannerImages from "../data/bannerImages";
import React from "react";
import { FcLike } from "react-icons/fc";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Gallery() {
  // Estado de likes para cada imagem separado
  const [likes, setLikes] = useState({});

  // Função para alternar like de uma imagem específica
  const toggleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: !prevLikes[index],
    }));
  };

  return (
    <div className="columns-2 sm:columns-3 md:columns-4 gap-4 p-4">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl relative group"
        >
          <img
            src={image.link}
            alt={`Imagem ${index + 1}`}
            className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 hover: "
          />

          <motion.button
            onClick={() => toggleLike(index)}
            whileTap={{ scale: 0.8 }}
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
      ))}
    </div>
  );
}
