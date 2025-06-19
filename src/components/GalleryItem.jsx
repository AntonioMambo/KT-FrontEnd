import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";

// Simulação de categorias para as imagens
const categoriasFalsas = ["todas", "design", "foto", "arte"];

function Gallery() {
  const [likes, setLikes] = useState({});
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");

  // Carrega imagens automaticamente
  const imagens = Object.entries(
    import.meta.glob("../assets/AllP/*.{png,jpg,JPG,jpeg,svg,gif}", {
      eager: true,
      as: "url",
    })
  ).map(([path, src], idx) => ({
    id: idx,
    src,
    categoria: categoriasFalsas[(idx % (categoriasFalsas.length - 1)) + 1], // Simula categorias
  }));

  // Carrega likes do localStorage na primeira montagem
  useEffect(() => {
    const storedLikes = localStorage.getItem("galeria_likes");
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
  }, []);

  // Atualiza o localStorage sempre que os likes mudarem
  useEffect(() => {
    localStorage.setItem("galeria_likes", JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const imagensFiltradas =
    categoriaSelecionada === "todas"
      ? imagens
      : imagens.filter((img) => img.categoria === categoriaSelecionada);

  return (
    <section className="px-2 py-6 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
        Galeria da Kutchindja
      </h2>

      {/* Filtro por categoria */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {categoriasFalsas.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition-all ${
              categoriaSelecionada === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Galeria */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-4 space-y-4">
        {imagensFiltradas.map((img) => (
          <motion.div
            key={img.id}
            className="break-inside-avoid rounded-xl overflow-hidden relative group shadow-lg hover:shadow-xl transition duration-300 bg-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: img.id * 0.03, duration: 0.4 }}
          >
            <img
              src={img.src}
              alt={`Imagem ${img.id + 1}`}
              className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <motion.button
              onClick={() => toggleLike(img.id)}
              whileTap={{ scale: 1.4 }}
              className={`absolute bottom-2 right-2 p-2 rounded-full shadow-md transition-all ${
                likes[img.id]
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  : "bg-white text-gray-500 hover:text-red-400"
              }`}
            >
              {likes[img.id] ? (
                <AiFillHeart size={24} />
              ) : (
                <AiOutlineHeart size={24} />
              )}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
