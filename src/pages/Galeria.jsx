import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryItem from '../components/GalleryItem'
import G from '../components/G'


function Galeria() {
  return (
    <div className='bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200'>
        <Navbar/>
        <GalleryItem/>      
        {/* <G/> */}
        <Footer/>
    </div>
    
  )
}

export default Galeria