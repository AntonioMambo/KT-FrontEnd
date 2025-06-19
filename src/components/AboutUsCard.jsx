import React from "react";
import img1 from "../assets/images/img1.jpg";
import { BiTargetLock } from "react-icons/bi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function AboutUsCard() {
  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 mb-10 flex flex-col">
      {/* Seção de História */}
      <section className="w-full  py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4"
            >
              Nossa História
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              A KUTCHINDJA (AK) é uma associação moçambicana de jovens pela
              diversidade e inclusão,que busca, por meio de suas ações, promover
              o empoderamento de jovens excluídos e marginalizados para que
              estes possam se engajar activamente na luta por uma sociedade
              justa,igualitária e que respeite as diferenças.
            </motion.p>
          </div>

          {/* Imagem */}
          <div className="w-full md:w-1/2 relative group">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              src={img1}
              alt="Grupo em roda"
              className="rounded-xl shadow-lg transition duration-300 ease-in-out group-hover:brightness-75 w-full h-auto object-cover max-h-[450px]"
            />
            <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs sm:text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              Descrição da imagem
            </div>
          </div>
        </div>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="w-full py-12 px-4 sm:px-6 lg:px-16"
      >
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Missão */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="flex flex-col items-center text-center  rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <BiTargetLock className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950 mb-2">
              Missão
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Empoderar jovens excluídos e marginalizados para atuarem na
              construção de uma sociedade mais justa e igualitária.
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="flex flex-col items-center text-center rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <FaEye className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950 mb-2">
              Visão
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Uma sociedade onde jovens vulneráveis possam exercer seus direitos
              livres de estigmas e discriminação.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="flex flex-col items-center text-center rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <FaHandshake className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold text-blue-950 mb-2">
              Valores
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Respeito e dignidade, Igualdade, Comunidade, Abertura e
              desenvolvimento das competências dos nossos membros.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUsCard;
