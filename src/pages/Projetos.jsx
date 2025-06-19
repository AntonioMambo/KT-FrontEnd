import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';
import ProjectsComponent from '../components/ProjectsComponent';


function Projetos() {
  return (
    <div className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200">
        <Navbar/>
        <ProjectsComponent/>  
        <Footer/>

    </div>
      );
};


export default Projetos