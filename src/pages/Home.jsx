import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";



function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection/>
      </div>
    </>
  );
}

export default Home;
