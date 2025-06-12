import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonialData from "../data/testimonialData";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

function TestimonialSlider() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Título animado */}
      <div className="text-center mb-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-4xl font-semibold text-blue-950"
        >
          Assista{" "}
          <span className="text-blue-900 font-bold">algumas atividades</span> da{" "}
          <span className="text-blue-900 font-bold">Kutchindja</span>.
        </motion.h2>
      </div>

      {/* Swiper com vídeos */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all flex flex-col h-full"
            >
              {/* Container de vídeo com thumbnail personalizada */}
              <div className="relative w-full aspect-video">
                <ReactPlayer
                  url={item.url}
                  controls
                  muted
                  playing
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              </div>

              {/* Conteúdo do card */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-600">{item.autor}</p>
                <p className="text-sm text-gray-500 flex-grow mt-2">
                  {item.descricao}
                </p>

                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {item.plataforma}
                  </span>
                  <span>⏳ {item.duracao}</span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Botões customizados */}
        {/* <div className="flex justify-center gap-4 mt-8 md:mt-4 md:absolute md:top-1/2 md:-translate-y-1/2 md:flex-col md:right-0 md:mr-2 z-10">
          <button
            className="custom-prev bg-blue-800 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition"
            aria-label="Anterior"
          >
            ◀
          </button>
          <button
            className="custom-next bg-blue-800 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition"
            aria-label="Próximo"
          >
            ▶
          </button>
        </div> */}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
