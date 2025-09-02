import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

// Lazy loading das páginas - CRÍTICO para performance
const Home = lazy(() => import("./pages/Home"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Projetos = lazy(() => import("./pages/Projetos"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Galeria = lazy(() => import("./pages/Galeria"));
const ProjetoDetalhes = lazy(() => import("./pages/ProjetoDetalhes"));
const BlogDetalhes = lazy(() => import("./pages/BlogDetalhes"));

// Componente de loading otimizado
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200 bg-opacity-80 z-50">
    <div className="bg-white p-4 rounded-full shadow-lg">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200">
      <div className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
            <Route path="/blog/:id" element={<BlogDetalhes />} />
            <Route path="/blog" element={<Blogs />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;