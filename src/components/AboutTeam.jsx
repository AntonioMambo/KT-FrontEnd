import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
import teamData from "../data/teamData";
import { motion } from "framer-motion";

function AboutTeam() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mt-10 tracking-wide relative">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
          Nossa Equipe Técnica
        </h2>
      </motion.div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index} className="px-4 py-10">
            <div className="bg-white rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col items-center p-6">
              <img
                src={member.imagem}
                alt={member.nome}
                className="h-30 w-30 rounded-full object-cover border-4 border-blue-200"
              />
              <h6 className="text-lg font-semibold text-blue-950 mt-4">
                {member.nome}
              </h6>
              <p className="text-sm text-gray-600">{member.cargo}</p>
              <p className="text-gray-600 italic text-xs mt-2 text-center">
                "{member.frase_motivacional}"
              </p>

              {member.biografia && (
                <>
                  <p
                    className={`text-sm text-gray-500 mt-4 text-justify transition-all duration-300 ${
                      expandedItems[index] ? "" : "line-clamp-3"
                    }`}
                  >
                    {member.biografia}
                  </p>

                  {member.biografia.length > 100 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 my-2 rounded-full text-sm font-semibold hover:scale-105 transition"
                    >
                      {expandedItems[index] ? "Ler menos" : "Ler mais"}
                    </button>
                  )}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition"
        onClick={handlePrev}
        aria-label="Anterior"
      >
        <FaChevronLeft className="text-black" />
      </button>
      <button
        className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition"
        onClick={handleNext}
        aria-label="Próximo"
      >
        <FaChevronRight className="text-black" />
      </button>
    </div>
  );
}

export default AboutTeam;
