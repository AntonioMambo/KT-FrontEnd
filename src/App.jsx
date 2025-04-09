import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Blog from './pages/Blog';  
import Galeria from './pages/Galeria'
import './App.css'


function App() {
  return (
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
  
  );
}

export default App;
