import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import BlogData from "../data/BlogData";

const BlogDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [mutedVideo, setMutedVideo] = useState(true); // Estado para mute/unmute do vídeo

  useEffect(() => {
    const foundBlog = BlogData.find(item => item.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
      setLikes(foundBlog.likes);
      // Blogs relacionados (excluindo o atual e resumos)
      const related = BlogData.filter(item => 
        item.id !== foundBlog.id && !item.isSummary
      ).slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const toggleMute = () => {
    setMutedVideo(!mutedVideo);
  };

  const shareOptions = [
    { name: "Facebook", icon: "📘", color: "bg-blue-600" },
    { name: "Twitter", icon: "🐦", color: "bg-sky-500" },
    { name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
    { name: "WhatsApp", icon: "💬", color: "bg-green-500" },
  ];

  const calculateReadingTime = (textos) => {
    if (!textos || !Array.isArray(textos)) return 2;
    const totalWords = textos.join(' ').split(' ').length;
    return Math.ceil(totalWords / 200); // 200 palavras por minuto
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50"
        style={{ width: `${readingProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${readingProgress}%` }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-40"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <span className="text-xl">←</span>
            <span>Voltar</span>
          </motion.button>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={handleLike}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all ${
                isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <span className="text-lg">{isLiked ? '❤️' : '🤍'}</span>
              <span className="font-medium">{likes}</span>
            </motion.button>

            <motion.button
              onClick={() => setIsBookmarked(!isBookmarked)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-all ${
                isBookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <span className="text-lg">{isBookmarked ? '🔖' : '📑'}</span>
            </motion.button>

            <div className="relative">
              <motion.button
                onClick={() => setShareMenuOpen(!shareMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-all"
              >
                <span className="text-lg">📤</span>
              </motion.button>

              <AnimatePresence>
                {shareMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg border p-4 space-y-2 w-48"
                  >
                    {shareOptions.map((option) => (
                      <motion.button
                        key={option.name}
                        whileHover={{ x: 5 }}
                        className={`w-full flex items-center space-x-3 p-2 rounded-lg ${option.color} text-white hover:shadow-md transition-all`}
                      >
                        <span>{option.icon}</span>
                        <span>{option.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6 leading-tight"
          >
            {blog.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">📅</span>
              <span>{new Date().toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">⏱️</span>
              <span>{calculateReadingTime(blog.Textos)} min de leitura</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">👁️</span>
              <span>{Math.floor(Math.random() * 1000) + 100} visualizações</span>
            </div>
            {blog.source && (
              <div className="flex items-center space-x-2">
                <span className="text-lg">📰</span>
                <span className="font-medium text-purple-600">{blog.source}</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Media Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          {blog.type === "video" ? (
            <div className="relative aspect-video bg-black">
              <ReactPlayer
                url={blog.url}
                playing
                muted={mutedVideo}
                controls
                width="100%"
                height="100%"
                className="rounded-2xl overflow-hidden"
              />
              {/* Botão de mute/unmute */}
              <motion.button
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full z-20 text-sm font-medium hover:bg-black/90 transition-all"
              >
                {mutedVideo ? "🔇 Silenciado" : "🔊 Com Som"}
              </motion.button>
            </div>
          ) : (
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              className="w-full h-96 object-cover"
            />
          )}
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {blog.isSummary ? (
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-6">Resumo</h3>
                <ul className="space-y-3 text-gray-700">
                  {blog.summary.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9 + (index * 0.1) }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-purple-500 font-bold">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-gray-700 leading-relaxed space-y-6">
                {blog.Textos && blog.Textos.map((texto, index) => (
                  <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + (index * 0.1) }}
                    className={`${index === 0 ? 'text-xl font-medium text-gray-800 border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg' : 'text-base'}`}
                  >
                    {texto}
                  </motion.p>
                ))}

                {/* Seção adicional se houver mais conteúdo */}
                {blog.Textos && blog.Textos.length > 3 && (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-500 mt-8"
                  >
                    <h3 className="text-xl font-bold text-purple-800 mb-3">
                      Impacto da Iniciativa
                    </h3>
                    <p className="text-purple-700">
                      Esta iniciativa representa um passo importante para o fortalecimento da comunidade LGBTQIA+ em Moçambique, 
                      promovendo inclusão económica e empoderamento através do empreendedorismo.
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {relatedBlog.type === "video" ? (
                    <div className="relative aspect-video">
                      <ReactPlayer
                        url={relatedBlog.url}
                        playing={false}
                        muted
                        width="100%"
                        height="100%"
                        className="absolute top-0 left-0"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <span className="text-white text-4xl">▶️</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.imageAlt || relatedBlog.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h4 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">
                      {relatedBlog.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">❤️ {relatedBlog.likes}</span>
                      <Link
                        to={`/Blog/${relatedBlog.id}`}
                        className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                      >
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Gostou do conteúdo?</h3>
          <p className="mb-6 opacity-90">
            Apoie a {blog.source} e não perca nenhuma atualização sobre empoderamento LGBTQIA+!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLike}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              {isLiked ? '❤️ Curtido' : '🤍 Curtir'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              📤 Compartilhar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogDetalhes;