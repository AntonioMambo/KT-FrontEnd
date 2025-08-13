import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryItem from "../components/GalleryItem";
import G from "../components/G";
import { Helmet } from "react-helmet";

function Galeria() {
  return (
    <>
      <Helmet>
        <title>Kutchindja</title>
        <meta
          name="description"
          content="A KUTCHINDJA (AK) é uma associação moçambicana de jovens pela
                      diversidade e inclusão,que busca, por meio de suas ações, promover
                      o empoderamento de jovens excluídos e marginalizados para que
                      estes possam se engajar activamente na luta por uma sociedade
                      justa,igualitária e que respeite as diferenças."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kutchindja.org.mz/" />
      </Helmet>
      <div className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200">
        <Navbar />
        <GalleryItem />
        {/* <G/> */}
        <Footer />
      </div>
    </>
  );
}

export default Galeria;
