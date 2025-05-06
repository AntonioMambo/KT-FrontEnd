import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";


const imagens = Object.values(
  import.meta.glob("../assets/ABImages/*.{png,jpg,jpeg,svg,gif}", {
    eager: true,
    as: "url",
  })
);

function BannerSlider() {
  return (
    <div className="w-full h-[300px] sm:h-[200px] md:h-[400px] lg:h-[550px] overflow-hidden relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {imagens.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Imagem com escurecimento */}
              <img
                src={image}
                alt={image.alt}
                className="w-full h-full object-cover brightness-30"
                loading="lazy"
              />

              {/* Texto "Sobre Nos" no canto inferior direito */}
              <div className="absolute bottom-4 left-4 p-3 text-2xl sm:text-4xl md:text-6xl lg:text-9xl font-semibold text-gray-800 shadow-lg">
                <Link
                  to="/sobre"
                  className="bg-gradient-to-r from-orange-400 to-green-400 text-transparent bg-clip-text"
                >
                  Sobre Nós
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
