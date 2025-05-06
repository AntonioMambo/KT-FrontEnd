import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projetos from "../data/projetos";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
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
  console.log("Fotos do projeto:", projeto.fotos);
  console.log(projeto.id);

  // usa a primeira imagem, se existir
  const bgUrl = projeto.banner;

  return (
    <motion.div
      className="w-full min-h-screen"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative h-[50vh] bg-cover bg-center"
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
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {projeto.nome}
          </h1>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {projeto.descricao || projeto.objetivo}
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

      <G />
    </motion.div>
  );
};

export default Detalhes;
