import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryItem from '../components/GalleryItem'
import G from '../components/G'


function Galeria() {
  return (
    <>
        <Navbar/>
        <GalleryItem/>      
        {/* <G/> */}
        <Footer/>
    </>
    
  )
}

export default Galeria