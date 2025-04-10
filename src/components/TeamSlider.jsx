import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useRef } from "react";
import teamData from "../data/teamData";
import { motion } from "framer-motion";

function TeamSlider() {
  // Referência para a instância do Swiper
  const swiperRef = useRef(null);

  // Funções para controle manual
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="mt-10 tracking-wide relative">
      <div className="text-center mb-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 2.5 }}
          className="text-2xl md:text-3xl font-medium text-blue-950"
        >
          <span className="text-orange-500">Frases motivacionais</span> de
          profissionais que se aliaram à causa que defendemos.
        </motion.h2>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {teamData.map((card, index) => (
          <SwiperSlide
            key={index}
            m
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105">
              <div className="rounded-md p-6 text-md w-full sm:text-5xl ">
                <p className=" text-gray-600 text-sm italic mt-2">
                  "{card.frase_motivacional}"
                </p>

                <div className="flex mt-8 items-start">
                  <img
                    src={card.imagem}
                    alt={card.nome}
                    className="h-12 w-12 mr-6 rounded-full object-cover object-top"
                  />
                  <div>
                    <h6 className="flex text-lg font-bold text-blue-950">
                      {card.nome}
                    </h6>

                    <p className=" text-gray-600 text-sm">{card.cargo}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões personalizados */}
      <button
        className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        onClick={handlePrev}
      >
        <FaChevronLeft className="text-black" />
      </button>
      <button
        className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        onClick={handleNext}
      >
        <FaChevronRight className="text-black" />
      </button>
    </div>
  );
}

export default TeamSlider;
