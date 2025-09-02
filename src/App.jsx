import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, memo, useEffect } from "react";
import "./App.css";

// Lazy loading das páginas
const Home = lazy(() => import("./pages/Home"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Projetos = lazy(() => import("./pages/Projetos"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Galeria = lazy(() => import("./pages/Galeria"));
const ProjetoDetalhes = lazy(() => import("./pages/ProjetoDetalhes"));
const BlogDetalhes = lazy(() => import("./pages/BlogDetalhes"));

// PageLoader otimizado com memo
const PageLoader = memo(() => (
  <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200 bg-opacity-80 z-50">
    <div className="bg-white p-4 rounded-full shadow-lg">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  </div>
));

function App() {

  // Preload de fontes e imagens críticas para performance
  useEffect(() => {
    const fonts = ['/fonts/inter-var.woff2'];
    const images = ['/images/logo.webp', '/images/hero-banner.webp'];

    fonts.forEach(f => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = f;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    images.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    return () => {
      // Limpeza dos links adicionados
      document.head.querySelectorAll('link[rel="preload"]').forEach(l => l.remove());
    };
  }, []);

  // Web Vitals simples
  useEffect(() => {
    if ('performance' in window && process.env.NODE_ENV === 'production') {
      performance.mark('app-start');
      requestIdleCallback(() => {
        performance.mark('app-end');
        performance.measure('app-load', 'app-start', 'app-end');
        const measure = performance.getEntriesByName('app-load')[0];
        if (measure) console.log(`⚡ App carregado em ${measure.duration.toFixed(2)}ms`);
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200 min-h-screen antialiased">
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
  );
}

export default memo(App);
