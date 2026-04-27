import React, { useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonialData from "../data/testimonialData";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

function TestimonialSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Título animado */}
      <div className="text-center mb-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="relative"
      >
        {testimonialData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-md overflow-hidden transition-all flex flex-col h-full">
              {/* Container de vídeo — só carrega quando visível */}
              <div className="relative w-full aspect-video bg-gray-900">
                {Math.abs(index - activeSlide) <= 1 ? (
                  <ReactPlayer
                    url={item.url}
                    controls
                    muted
                    playing={false}
                    light={true}
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                    ▶️
                  </div>
                )}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(TestimonialSlider);
