import React, { useEffect, useState, useRef, useCallback } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./LazyImage";

// Simulação de categorias para as imagens
const categoriasFalsas = ["todas", "design", "foto", "arte"];

function Gallery() {
  const [likes, setLikes] = useState({});
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");
  const [pagina, setPagina] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const [imagens, setImagens] = useState([]);
  const observerRef = useRef(null);
  const itensPorPagina = 20;

  // Carregar imagens em lotes menores
  useEffect(() => {
    const carregarImagens = async () => {
      setCarregando(true);
      
      // Carregar lista de arquivos
      const files = import.meta.glob("../assets/AllP/*.{png,jpg,JPG,jpeg,svg,gif}", {
        eager: true,
        as: "url",
      });
      
      // Converter em array e dividir em lotes
      const imageFiles = Object.entries(files).map(([path, src], idx) => ({
        id: idx,
        src,
        categoria: categoriasFalsas[(idx % (categoriasFalsas.length - 1)) + 1],
        loaded: false
      }));

      // Carregar primeiro lote imediatamente
      const primeiroLote = imageFiles.slice(0, itensPorPagina);
      setImagens(imageFiles);
      
      // Pré-carregar próximas imagens em background
      setTimeout(() => {
        primeiroLote.forEach((img, index) => {
          const imgLoader = new Image();
          imgLoader.src = img.src;
          imgLoader.onload = () => {
            setImagens(prev => {
              const newImages = [...prev];
              newImages[index] = { ...newImages[index], loaded: true };
              return newImages;
            });
          };
        });
        setCarregando(false);
      }, 100);
    };

    carregarImagens();
  }, []);

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

  // Pegar apenas as imagens para a página atual
  const imagensParaMostrar = imagensFiltradas.slice(0, pagina * itensPorPagina);

  // Configurar Infinite Scroll com pré-carregamento
  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting && !carregando && imagensParaMostrar.length < imagensFiltradas.length) {
      setCarregando(true);
      
      // Calcular próximo lote
      const inicio = pagina * itensPorPagina;
      const fim = inicio + itensPorPagina;
      const proximoLote = imagensFiltradas.slice(inicio, fim);
      
      // Pré-carregar próximo lote
      Promise.all(
        proximoLote.map(img => {
          return new Promise((resolve) => {
            const imgLoader = new Image();
            imgLoader.src = img.src;
            imgLoader.onload = () => resolve();
          });
        })
      ).then(() => {
        setPagina(prev => prev + 1);
        setCarregando(false);
      });
    }
  }, [carregando, imagensParaMostrar.length, imagensFiltradas.length, pagina, itensPorPagina]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <section className="px-2 py-6 bg-white/20 backdrop-blur-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
        Galeria da Kutchindja
      </h2>

      {/* Filtro por categoria */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {categoriasFalsas.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategoriaSelecionada(cat);
              setPagina(1); // Reset página ao mudar categoria
            }}
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

      {/* Skeleton Loading */}
      {carregando && (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-4 space-y-4">
          {[...Array(8)].map((_, index) => (
            <div key={`skeleton-${index}`} className="break-inside-avoid mb-4">
              <div className="animate-pulse bg-gray-200 rounded-xl h-48 w-full"></div>
            </div>
          ))}
        </div>
      )}

      {/* Galeria com Virtual Scroll */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {!carregando && imagensParaMostrar.map((img) => (
          <motion.div
            key={img.id}
            className="break-inside-avoid rounded-xl overflow-hidden relative group shadow-lg hover:shadow-xl transition duration-300 bg-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: img.id * 0.03, duration: 0.4 }}
          >
            <LazyImage
              src={img.src}
              alt={`Imagem ${img.id + 1}`}
              className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              placeholderSize="10%"
              blur={true}
            />

            <motion.button
              onClick={() => toggleLike(img.id)}
              whileTap={{ scale: 1.4 }}
              className={`absolute bottom-2 right-2 p-2 rounded-full shadow-md transition-all ${
                likes[img.id]
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  : "bg-white/20 backdrop-blur-lg text-gray-500 hover:text-red-400"
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
        </AnimatePresence>
      </div>

      {/* Loading indicator */}
      {carregando && (
        <div className="flex justify-center my-8">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Intersection Observer Target */}
      {imagensParaMostrar.length < imagensFiltradas.length && (
        <div ref={observerRef} className="h-10 mt-4" />
      )}
    </section>
  );
}

export default Gallery;
