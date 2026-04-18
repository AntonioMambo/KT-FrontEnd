import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentHead } from "../hooks/useDocumentTitle";

// Lazy load do GalleryItem para otimização
const GalleryItem = lazy(() => import("../components/GalleryItem"));

function Galeria() {
  // SEO e meta tags com hook
  useDocumentHead("Kutchindja - Galeria", {
    description: "A KUTCHINDJA (AK) é uma associação moçambicana de jovens pela diversidade e inclusão, que busca, por meio de suas ações, promover o empoderamento de jovens excluídos e marginalizados para que estes possam se engajar ativamente na luta por uma sociedade justa, igualitária e que respeite as diferenças.",
    robots: "index, follow",
    keywords: "kutchindja, jovens, moçambique, inclusão, diversidade, empoderamento, sociedade justa, galeria",
    author: "Kutchindja",
    "og:title": "Kutchindja - Galeria",
    "og:description": "Galeria de fotos e vídeos promovendo diversidade e inclusão em Moçambique.",
    "og:url": window.location.href,
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": "Kutchindja - Galeria",
    "twitter:description": "Galeria de fotos e vídeos promovendo diversidade e inclusão em Moçambique."
  });

  return (
    <div className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200 min-h-screen">
      <Navbar />

      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          Carregando Galeria...
        </div>
      }>
        <GalleryItem />
      </Suspense>

      {/* <G /> */}
      <Footer />
    </div>
  );
}

export default Galeria;
