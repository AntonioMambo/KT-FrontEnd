import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import ProjectsComponent from "../components/ProjectsComponent";
import { Helmet } from "react-helmet";

function Projetos() {
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
        <ProjectsComponent />
        <Footer />
      </div>
    </>
  );
}

export default Projetos;
