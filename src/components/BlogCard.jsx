import { motion } from "framer-motion";

export default function BlogCard() {
  return (
    <div className="bg-white min-h-screen px-4 md:px-12 py-10 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-6 text-center text-red-600"
      >
        Workshop e Sarau Cultural
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-center mb-10 text-gray-600"
      >
        Papel da Mídia na Visibilização de Negócios Inclusivos
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <img
          src="https://drive.google.com/file/d/1Nyv7sDJy1Eg2tDhg60xdOzkM98YB2Rrx/view?usp=drive_link" // Substituir pela URL real ou importar localmente
          alt="Workshop e Sarau Cultural"
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-md"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {textos.map((paragrafo, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-justify text-base md:text-lg leading-relaxed"
          >
            {paragrafo}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

const textos = [
  "A Kutchindja, uma Associação de Jovens para Diversidade e Inclusão, realizou recentemente, na cidade de Maputo, um workshop e sarau cultural para promover uma reflexão sobre a importância da Mídia na promoção de negócios inclusivos e na defesa dos direitos desta comunidade.",
  "Com o tema ‘Direitos Socioeconómicos LGBTQIA+ e o Papel da Mídia na Visibilização de Negócios Inclusivos’, o evento contou com a participação de influenciadores digitais, empreendedores LGBTQIA+ e representantes da Mídia.",
  "Durante o workshop foram levantados os desafios enfrentados por empreendedores da comunidade LGBTQIA+ no uso de plataformas digitais para promover seus negócios, reconhecendo que, embora as ferramentas online ofereçam grande potencial de visibilidade, também impõem barreiras significativas.",
  "A utilização de estratégias eficazes para aumentar a presença digital desses empreendimentos foi um dos principais temas discutidos, com foco em como os influenciadores digitais podem contribuir para dar voz a esses negócios.",
  "Entre os objetivos do evento estavam a discussão das condições mediáticas e dos direitos que garantem uma vida digna e igualitária para as pessoas LGBTQIA+, além de identificar e partilhar boas práticas para a promoção de negócios inclusivos.",
  "Os participantes também tiveram a oportunidade de estabelecer novas conexões e parcerias, com representantes da Mídia e empreendedores trocando experiências e ideias sobre como melhorar a visibilidade dos seus negócios e empreendimentos.",
  "Com os resultados esperados de aumentar a compreensão sobre os direitos socioeconómicos das pessoas LGBTQIA+ e criar estratégias concretas para promover negócios inclusivos, o evento foi uma importante etapa na busca por um ambiente mais inclusivo, onde empreendedores LGBTQIA+ possam prosperar sem enfrentar discriminação.",
];
