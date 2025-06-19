// import SarauBlog from "../assets/Blog/SarauBlog.jpg";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import BlogData from "../data/BlogData";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BlogData.find((p) => String(p.id) === id);
  const TextosP = blog?.Textos;

  if (!blog) {
    return (
      <div className="text-center text-red-600 text-xl py-10">
        Blog não encontrado.
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200 min-h-screen px-4 md:px-12 py-20 text-gray-800 lg:py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-6 text-center text-red-600"
      >
        {blog.title}
        {/* <span className="text-blue-800"> - {blog.source}</span> */}
      </motion.h1>

      {/* <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-center mb-10 text-gray-600"
      >
        {blog.title}
      </motion.h2> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <img
          src={blog.image}
          alt="Workshop e Sarau Cultural"
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-md"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/80 px-4 py-2 rounded-full flex items-center gap-2 text-blue-800 hover:text-purple-600 shadow-md transition z-10"
        >
          <ArrowLeftCircle size={22} />
          Voltar
        </button>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {TextosP.map((paragrafo, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-justify text-base md:text-lg leading-relaxed"
          >
            {paragrafo}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

