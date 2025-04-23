import React from "react";
import projetos from "../data/projetos";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";


export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // anima um a um
    },
  },
};

const ProjectsComponent = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800"
        variants={fadeInUp}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2 }}
      >
        Projetos Realizados
      </motion.h1>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {projetos.map((projeto, index) => (
          <motion.div key={projeto.id} variants={fadeInUp}>
            <ProjectCard projeto={projeto} index={index}/>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsComponent;
