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
import BlueGradientBackground from "./components/BlueGradientBackground";

// function App() {
//   return (
//     <BlueGradientBackground>
//       <h1 className="text-white text-4xl font-bold text-center pt-20">
//         Bem-vindo ao site Kutchindja
//       </h1>
//       {/* ...outros componentes aqui */}
//     </BlueGradientBackground>
//   );
// }


function App() {
  return (
    <Routes className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200">
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
