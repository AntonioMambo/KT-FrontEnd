import React, { memo, lazy, Suspense, useEffect, useMemo, useRef } from "react";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import ProjectsComponent from "../components/ProjectsComponent";
import { useDocumentHead } from "../hooks/useDocumentTitle";

// Lazy load Footer para performance
const Footer = lazy(() => import("../components/Footer"));

// Skeleton genérico para fallback
const Skeleton = ({ height = "h-48", width = "w-full" }) => (
  <div className={`${height} ${width} animate-pulse rounded-lg`} />
);

// Wrapper Lazy + Suspense com ErrorBoundary
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, errorInfo) { console.error(error, errorInfo); }
  render() {
    if (this.state.hasError) return (
      <div className="p-6 text-center text-gray-600 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <p className="font-medium">Algo deu errado</p>
        <button onClick={() => window.location.reload()} className="text-blue-600 underline mt-2">Recarregar</button>
      </div>
    );
    return this.props.children;
  }
}

const LazyWrapper = ({ children, fallback }) => (
  <Suspense fallback={fallback || <Skeleton height="h-64" />}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
);

const Projetos = () => {
  const containerRef = useRef(null);

  // SEO dinâmico
  const seoConfig = useMemo(() => ({
    title: 'Kutchindja - Projetos | Jovens pela Diversidade e Inclusão',
    metaTags: {
      description: "A KUTCHINDJA (AK) é uma associação moçambicana de jovens pela diversidade e inclusão, que busca, por meio de suas ações, promover o empoderamento de jovens excluídos e marginalizados para que estes possam se engajar activamente na luta por uma sociedade justa, igualitária e que respeite as diferenças.",
      robots: "index, follow",
      keywords: "kutchindja, jovens, moçambique, inclusão, diversidade, empoderamento, projetos",
      author: "Kutchindja",
      viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      themeColor: "#3B82F6",
      "og:title": "Kutchindja - Projetos",
      "og:description": "Associação moçambicana promovendo inclusão e diversidade.",
      "og:url": window.location.href,
      "og:type": "website",
      "twitter:card": "summary_large_image",
      "twitter:title": "Kutchindja - Projetos",
      "twitter:description": "A KUTCHINDJA promove empoderamento de jovens.",
    }
  }), []);

  useDocumentHead(seoConfig.title, seoConfig.metaTags);

  // Link canônico
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://www.kutchindja.org.mz/';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  // Preload imagens críticas
  useEffect(() => {
    ['/images/banner.webp', '/images/project-1.webp'].forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200 min-h-screen antialiased transform-gpu will-change-auto"
      style={{ transform: 'translateZ(0)', contain: 'layout style paint' }}
    >
      <header className="sticky top-0 z-50 backdrop-blur-sm shadow-sm">
        <Navbar />
      </header>

      <main role="main">
        {/* Banner Slider */}
        <section aria-label="Banner Slider">
          <BannerSlider />
        </section>

        {/* Projetos */}
        <section aria-label="Projetos em destaque" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ProjectsComponent />
        </section>
      </main>

      <footer role="contentinfo">
        <LazyWrapper fallback={<Skeleton height="h-48" />}>
          <Footer />
        </LazyWrapper>
      </footer>
    </div>
  );
};

export default memo(Projetos);
