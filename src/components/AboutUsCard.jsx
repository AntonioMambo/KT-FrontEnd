import React from "react";
import img1 from "../assets/images/img1.jpg";
import { BiTargetLock } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { animate, motion } from "framer-motion";

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
    transition: {
      duration: 0.5,
    },
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
    <div className="flex flex-col">
      <div className="w-full bg-white py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-3xl md:text-4xl font-bold   text-blue-950  mb-4"
            >
              Nossa História
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              Somos à KUTCHINDJA, associação de jovens pela diversidade e
              inclusão, existente em Moçambique à cerca de dois anos, e
              legalmente reconhecida atuando na província de Maputo. A
              ASSOCIAÇÃO KUTCHINDJA, tem como principal missão, defender os
              direitos humanos dos jovens Gays, Bissexuais e HSH (homens que
              fazem sexo com homens), que se encontrem marginalizados devido a
              sua orientação sexual, empoderando-os para que estes possam se
              engajar ativamente, na construção de uma sociedade mais justa,
              igualitária e que respeite as diferenças.
            </motion.p>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 relative group">
            <motion.img
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              src={img1}
              alt="Grupo em roda"
              className="rounded-xl shadow-lg transition duration-300 ease-in-out group-hover:brightness-75 w-full h-auto object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/50 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              Descrição da imagem
            </div>
          </div>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="flex flex-col p-3 items-center text-center bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105"
        >
          <BiTargetLock className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950">
            Missão
          </h3>
          <p className="text-gray-600">
            Empoderar os jovens excluídos e marginalizados, para que estes
            possam se engajar ativamente na construção de uma sociedade mais
            justa, igualitária e que respeite as diferenças.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="flex flex-col p-3 items-center text-center bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 "
        >
          <FaEye className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950">
            Visão
          </h3>
          <p className="text-gray-600">
            Uma sociedade onde os jovens mais vulneráveis possam exercer a sua
            cidadania e engajar-se ativamente na promoção e proteção dos seus
            direitos livres do estigma e da discriminação de qualquer espécie.
          </p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="flex flex-col p-3 items-center text-center bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105"
        >
          <FaHandshake className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950">
            Valores
          </h3>
          <p className="text-gray-600">
            Respeito e dignidade, Igualdade, Comunidade, Abertura, competências
            dos nosso membros.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUsCard;
