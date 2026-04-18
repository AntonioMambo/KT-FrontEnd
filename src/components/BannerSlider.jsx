import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

// Importação dinâmica com a sintaxe atualizada do Vite
const imagensOriginais = Object.entries(
  import.meta.glob("../assets/ABImages/*.{png,jpg,jpeg,svg,gif}", {
    eager: true,
    query: "?url",
    import: "default",
  })
).map(([path, url]) => {
  const alt = path.split("/").pop().split(".")[0].replace(/[-_]/g, " ");
  return { url, alt };
});

// Se houver menos de 2 imagens, duplicamos para evitar erro no loop
const imagens =
  imagensOriginais.length < 2
    ? [...imagensOriginais, ...imagensOriginais]
    : imagensOriginais;

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
        loop={imagensOriginais.length > 1} // só ativa o loop se houver mais de 1 imagem original
        className="w-full h-full"
      >
        {imagens.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover brightness-30"
                loading="lazy"
              />
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
