import React from "react";
import img1 from "../assets/images/img1.jpg";
import { BiTargetLock } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

function AboutUsCard() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-white py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold   text-blue-950  mb-4">
              Nossa História
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 relative group">
            <img
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

      <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <BiTargetLock className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950">Missão</h3>
          <p className="text-gray-600">
            Empoderar os jovens excluídos e marginalizados, para que estes
            possam se engajar ativamente na construção de uma sociedade mais
            justa, igualitária e que respeite as diferenças.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaEye className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950">Visão</h3>
          <p className="text-gray-600">
            Uma sociedade onde os jovens mais vulneráveis possam exercer a sua
            cidadania e engajar-se ativamente na promoção e proteção dos seus
            direitos livres do estigma e da discriminação de qualquer espécie.  
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaHandshake className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950">Valores</h3>
          <p className="text-gray-600">
            Respeito e dignidade, Igualdade, Comunidade, Abertura, competências
            dos nosso membros.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;
