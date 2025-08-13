import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TeamSlider from "../components/TeamSlider";
import TestimonialSlider from "../components/TestemonialSlider";
import Footer from "../components/Footer";
import ProjectSlider from "../components/ProjectSlider";
import { ImpactStats } from "../components/ImpactStats";
import { statsData } from "../data/statsData";
import { Helmet } from "react-helmet";

function Home() {
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
        <ProjectSlider />
        <div className=" max-w-7xl mx-auto pt-10 px-6">
          <HeroSection />
          <TestimonialSlider />
          <TeamSlider />
          <ImpactStats title="Nosso Impacto em Números" stats={statsData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
