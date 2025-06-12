import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TeamSlider from "../components/TeamSlider";
import TestimonialSlider from "../components/TestemonialSlider";
import Footer from "../components/Footer";
import ProjectSlider from "../components/ProjectSlider";
import { ImpactStats } from "../components/ImpactStats";
import { statsData } from "../data/statsData";

function Home() {
  return (
    < >
      <Navbar />
      <ProjectSlider /> 
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection />
        <TestimonialSlider />
        <TeamSlider />
        <ImpactStats title="Nosso Impacto em Números" stats={statsData} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
