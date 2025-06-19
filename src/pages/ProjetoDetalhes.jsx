import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import projetos from "../data/projetos";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import GalleryItem from "../components/GalleryItem";
import G from "../components/G";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Detalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = projetos.find((p) => String(p.id) === id);

  if (!projeto) {
    return (
      <div className="text-center text-red-600 text-xl py-10">
        Projeto não encontrado.
      </div>
    );
  }

  // Pega todas as fotos do projeto
  const { fotos } = projeto;

  // DEBUG: vê no console o array de fotos
  const bgUrl = projeto.banner;

  // Estado de likes para cada imagem separado
  const [likes, setLikes] = useState({});

  // Função para alternar like de uma imagem específica
  const toggleLike = (idx) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [idx]: !prevLikes[idx],
    }));
  };

  return (
    <motion.div
      className="w-full min-h-screen"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative h-[50vh] bg-auto bg-center"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/80 px-4 py-2 rounded-full flex items-center gap-2 text-blue-800 hover:text-purple-600 shadow-md transition z-10"
        >
          <ArrowLeftCircle size={22} />
          Voltar
        </button>
      </div>

      <motion.div
        className="w-full bg-white rounded-t-3xl -mt-10 shadow-xl z-20 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="p-6 md:p-10">
          <h1 className="inline-block pb-3 text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent transition-all duration-700 ease-in-out hover:from-pink-500 hover:via-purple-500 hover:to-blue-500">
            {projeto.nome}
          </h1>

          <h1 className="text-2xl sm:text-2xl font-bold text-blue-900 mb-4">
            Descricao
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {projeto.descricao}
          </p>

          <h1 className="text-2xl sm:text-2xl font-bold text-blue-900 mb-4">
            Objetivo
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {projeto.objetivo}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Estado do Projeto
              </h3>
              <p className="text-sm text-gray-600">{projeto.Estado}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Localização / Comunidade
              </h3>
              <p className="text-sm text-gray-600">
                {projeto.local || "Moçambique"}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <G /> */}

      <div className="columns-2 sm:columns-2 md:columns-2 gap-4 p-4">
        {fotos?.map((src, idx) => (
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
    </motion.div>
  );
};

export default Detalhes;
