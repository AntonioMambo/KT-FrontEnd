import React, { useState } from "react";
import bannerImages from "../data/bannerImages";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";

function G() {
  const [loaded, setLoaded] = useState(false);

  // Estado de likes para cada imagem separado
  const [likes, setLikes] = useState({});

  // Função para alternar like de uma imagem específica
  const toggleLike = (idx) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [idx]: !prevLikes[idx],
    }));
  };
  // só importa quando loaded mudar para true
  const imagens = Object.values(
    import.meta.glob("../assets/Handsoff/*.{png,jpg,jpeg,svg,gif}", {
      eager: true,
      as: "url",
    })
  );

  return (
    <>
      <div className="columns-2 sm:columns-2 md:columns-2 gap-4 p-4">
        {imagens.map((src, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl relative group"
          >
            <img
              src={src}
              alt={`Imagem ${idx + 1}`}
              className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
            />

            <motion.button
              onClick={() => toggleLike(idx)}
              whileTap={{ scale: 4.8 }}
              className={`absolute bottom-2 right-2 p-2 rounded-full shadow-lg transition ${
                likes[idx]
                  ? "bg-gradient-to-r from-orange-400 to-green-400 text-white"
                  : "bg-white text-gray-500"
              }`}
            >
              {likes[idx] ? (
                <AiFillHeart size={28} />
              ) : (
                <AiOutlineHeart size={28} />
              )}
            </motion.button>
          </div>
        ))}
      </div>
    </>
  );
}
export default G;
