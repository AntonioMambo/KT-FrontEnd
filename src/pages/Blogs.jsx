import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blog from '../components/BlogCard'



function Blogs() {
  return (

    <div className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200">
        <Navbar/>
        <Blog/>
        <Footer/>
    </div>
    
  )
}

export default Blogs