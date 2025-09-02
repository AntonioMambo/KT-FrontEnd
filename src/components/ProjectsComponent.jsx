/* ProjectsComponent.jsx */
import React, { useState, useEffect } from "react";
import projetos from "../data/projetos";
import ProjectCard from "../components/ProjectCard";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Animações refinadas
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

export const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Efeito de parallax no título
const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectsComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full bg-gradient-to-b from-slate-50 to-white py-16">
      {/* Barra de progresso fixa no topo */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-900 bg-clip-text text-transparent">
            Projetos Realizados
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossos trabalhos mais recentes e impactantes
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projetos.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <ProjectCard projeto={projeto} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
