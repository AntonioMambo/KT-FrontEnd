import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import AboutUsCard from "../components/AboutUsCard";
import AboutTeam from "../components/AboutTeam";

function Sobre() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <AboutUsCard />
        <AboutTeam />
      </div>
      <Footer />
    </>
  );
}

export default Sobre;
