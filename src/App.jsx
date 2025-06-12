import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Blogs from "./pages/Blogs";
import Galeria from "./pages/Galeria";
import ProjetoDetalhes from "./pages/ProjetoDetalhes";
import BlogDetalhes from "./pages/BlogDetalhes";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
      <Route path="/blog/:id" element={<BlogDetalhes />} />
      <Route path="/blog" element={<Blogs />} />
      
    </Routes>
  );
}

export default App;
