/* ProjectsComponent.jsx */
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
      staggerChildren: 0.15,
    },
  },
};

const ProjectsComponent = () => {
  return (
    <motion.div
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h1
        className="text-center text-blue-900 font-bold py-4 mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 lg:mt-4"
        variants={fadeInUp}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        Projetos Realizados   
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {projetos.map((projeto, index) => (
          <motion.div key={projeto.id} variants={fadeInUp}>
            <ProjectCard projeto={projeto} index={index} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsComponent;
