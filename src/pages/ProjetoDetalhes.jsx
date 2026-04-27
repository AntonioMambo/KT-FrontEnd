import React, { useState, useEffect, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projetos from "../data/projetos";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDocumentHead } from "../hooks/useDocumentTitle";

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

  const [likes, setLikes] = useState({});
  const [resolvedFotos, setResolvedFotos] = useState([]);

  // Resolve lazy-loaded photos
  useEffect(() => {
    if (!projeto || !projeto.fotos) return;

    const resolveFotos = async () => {
      const resolved = await Promise.all(
        projeto.fotos.map(async (foto) => {
          if (typeof foto === 'function') {
            try {
              const mod = await foto();
              return typeof mod === 'string' ? mod : mod.default || mod;
            } catch {
              return null;
            }
          }
          return foto;
        })
      );
      setResolvedFotos(resolved.filter(Boolean));
    };

    resolveFotos();
  }, [projeto]);

  if (!projeto) {
    return (
      <div className="text-center text-red-600 text-xl py-10">
        Projeto não encontrado.
      </div>
    );
  }

  // SEO com hook
  useDocumentHead(projeto.nome, {
    description: typeof projeto.descricao === 'string' ? projeto.descricao : projeto.descricao?.[0] || '',
    robots: "index, follow",
    keywords: "kutchindja, jovens, moçambique, inclusão, diversidade, empoderamento, projeto",
    author: "Kutchindja",
    "og:title": projeto.nome,
    "og:description": typeof projeto.descricao === 'string' ? projeto.descricao : projeto.descricao?.[0] || '',
    "og:url": window.location.href,
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": projeto.nome,
    "twitter:description": typeof projeto.descricao === 'string' ? projeto.descricao : projeto.descricao?.[0] || '',
  });

  const toggleLike = (idx) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [idx]: !prevLikes[idx],
    }));
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200 w-full min-h-screen"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative h-[50vh] bg-auto bg-center"
        style={{ backgroundImage: `url(${projeto.banner})` }}
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
        className="w-full rounded-t-3xl -mt-10 shadow-xl z-20 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 md:p-10">
          <h1 className="inline-block pb-3 text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent transition-all duration-700 ease-in-out hover:from-pink-500 hover:via-purple-500 hover:to-blue-500">
            {projeto.nome}
          </h1>

          <h2 className="text-2xl sm:text-2xl font-bold text-blue-900 mb-4">
            Descrição
          </h2>
          {Array.isArray(projeto.descricao) ? (
            projeto.descricao.map((para, idx) => (
              <p key={idx} className="text-gray-700 text-base leading-relaxed mb-4">
                {para}
              </p>
            ))
          ) : (
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {projeto.descricao}
            </p>
          )}

          <h2 className="text-2xl sm:text-2xl font-bold text-blue-900 mb-4">
            Objetivo
          </h2>
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
              <p className="text-sm text-gray-600">{projeto.local || "Moçambique"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="columns-2 sm:columns-2 md:columns-2 gap-4 p-4">
        {resolvedFotos.map((src, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl relative group"
          >
            <img
              src={src}
              alt={`Imagem ${idx + 1}`}
              className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />

            <motion.button
              onClick={() => toggleLike(idx)}
              whileTap={{ scale: 1.4 }}
              className={`absolute bottom-2 right-2 p-2 rounded-full shadow-lg transition ${
                likes[idx]
                  ? "bg-gradient-to-r from-orange-400 to-green-400 text-white"
                  : "text-gray-500"
              }`}
            >
              {likes[idx] ? <AiFillHeart size={28} /> : <AiOutlineHeart size={28} />}
            </motion.button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Detalhes;
