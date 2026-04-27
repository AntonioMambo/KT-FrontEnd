import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

// Simulação de categorias para as imagens
const categoriasFalsas = ["todas", "design", "foto", "arte"];

// Carregar apenas as URLs das imagens (lazy, não eager!)
const allImageFiles = Object.entries(
  import.meta.glob("../assets/AllP/*.{png,jpg,JPG,jpeg,svg,gif}", {
    query: "?url",
    import: "default",
  })
);

function Gallery() {
  const [likes, setLikes] = useState({});
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");
  const [pagina, setPagina] = useState(1);
  const [carregando, setCarregando] = useState(true);
  const [imagens, setImagens] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const observerRef = useRef(null);
  const itensPorPagina = 12;

  // Carregar imagens em lotes
  useEffect(() => {
    const carregarImagens = async () => {
      setCarregando(true);
      
      // Resolver apenas as primeiras imagens
      const imagePromises = allImageFiles.map(async ([path, resolver], idx) => {
        // Apenas resolve as primeiras para carregar rápido
        if (idx < itensPorPagina) {
          const url = await resolver();
          return {
            id: idx,
            src: url,
            path,
            resolver,
            categoria: categoriasFalsas[(idx % (categoriasFalsas.length - 1)) + 1],
          };
        }
        return {
          id: idx,
          src: null,
          path,
          resolver,
          categoria: categoriasFalsas[(idx % (categoriasFalsas.length - 1)) + 1],
        };
      });

      const imageFiles = await Promise.all(imagePromises);
      setImagens(imageFiles);
      setCarregando(false);
    };

    carregarImagens();
  }, []);

  // Carrega likes do localStorage na primeira montagem
  useEffect(() => {
    const storedLikes = localStorage.getItem("galeria_likes");
    if (storedLikes) {
      try {
        setLikes(JSON.parse(storedLikes));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  // Atualiza o localStorage sempre que os likes mudarem
  useEffect(() => {
    if (Object.keys(likes).length > 0) {
      localStorage.setItem("galeria_likes", JSON.stringify(likes));
    }
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

  // Resolver imagens lazy quando necessário
  useEffect(() => {
    const resolveVisibleImages = async () => {
      const toResolve = imagensParaMostrar.filter(img => img.src === null);
      if (toResolve.length === 0) return;

      const updates = await Promise.all(
        toResolve.map(async (img) => {
          try {
            const url = await img.resolver();
            return { id: img.id, src: url };
          } catch {
            return null;
          }
        })
      );

      setImagens(prev => {
        const newImages = [...prev];
        updates.forEach(update => {
          if (update) {
            const idx = newImages.findIndex(img => img.id === update.id);
            if (idx !== -1) {
              newImages[idx] = { ...newImages[idx], src: update.src };
            }
          }
        });
        return newImages;
      });
    };

    resolveVisibleImages();
  }, [pagina, categoriaSelecionada]);

  // Configurar Infinite Scroll
  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting && !carregando && imagensParaMostrar.length < imagensFiltradas.length) {
      setPagina(prev => prev + 1);
    }
  }, [carregando, imagensParaMostrar.length, imagensFiltradas.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '200px',
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
              setPagina(1);
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
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[...Array(8)].map((_, index) => (
            <div key={`skeleton-${index}`} className="break-inside-avoid mb-4">
              <div className="animate-pulse bg-gray-200 rounded-xl h-48 w-full"></div>
            </div>
          ))}
        </div>
      )}

      {/* Galeria */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {!carregando && imagensParaMostrar.map((img) => (
          img.src && (
            <div
              key={img.id}
              className="break-inside-avoid rounded-xl overflow-hidden relative group shadow-lg hover:shadow-xl transition duration-300 bg-white"
            >
              <img
                src={img.src}
                alt={`Imagem ${img.id + 1}`}
                className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              <button
                onClick={() => toggleLike(img.id)}
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
              </button>
            </div>
          )
        ))}
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

export default memo(Gallery);
