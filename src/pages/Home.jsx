import React, { memo, lazy, Suspense, useEffect, useCallback, useMemo, useRef } from "react";
import Navbar from "../components/Navbar";
import ProjectSlider from "../components/ProjectSlider";
import { useDocumentHead } from '../hooks/useDocumentTitle';
import { statsData } from "../data/statsData";

// Lazy loading para componentes below the fold
const HeroSection = lazy(() => import("../components/HeroSection"));
const TeamSlider = lazy(() => import("../components/TeamSlider"));
const TestimonialSlider = lazy(() => import("../components/TestemonialSlider"));
const Footer = lazy(() => import("../components/Footer"));
const ImpactStats = lazy(() => import("../components/ImpactStats").then(m => ({ default: m.ImpactStats })));

// Skeleton genérico
const Skeleton = memo(({ height = "h-48", width = "w-full" }) => (
  <div className={`${height} ${width} bg-gray-200 animate-pulse rounded-lg`} />
));

// ErrorBoundary simples
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

// Wrapper Lazy + Suspense + ErrorBoundary
const LazyWrapper = memo(({ children, fallback }) => (
  <Suspense fallback={fallback || <Skeleton height="h-64" />}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
));

function Home() {
  const containerRef = useRef(null);

  // SEO completo
  const seoConfig = useMemo(() => ({
    title: 'Kutchindja - Jovens pela Diversidade e Inclusão | Moçambique',
    metaTags: {
      description: 'A KUTCHINDJA promove inclusão de jovens em Moçambique.',
      robots: 'index, follow',
      keywords: 'kutchindja, jovens, moçambique, inclusão, diversidade, empoderamento, sociedade justa',
      author: 'Kutchindja',
      viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      themeColor: '#3B82F6',
      'og:title': 'Kutchindja - Jovens pela Diversidade e Inclusão',
      'og:description': 'Associação promovendo inclusão e diversidade.',
      'og:url': 'https://www.kutchindja.org.mz/',
      'og:type': 'website',
      'og:image': 'https://www.kutchindja.org.mz/images/og-image.jpg',
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Kutchindja - Jovens pela Diversidade e Inclusão',
      'twitter:description': 'Promovendo empoderamento de jovens.',
      'twitter:image': 'https://www.kutchindja.org.mz/images/twitter-image.jpg'
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

  // Preload fonts e imagens críticas
  useEffect(() => {
    ['/fonts/inter-var.woff2'].forEach(f => {
      const link = document.createElement('link');
      link.rel = 'preload'; link.as = 'font'; link.href = f; link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    ['/images/hero-banner.webp', '/images/logo.webp', '/images/project-1.webp'].forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload'; link.as = 'image'; link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  // Intersection Observer para lazy load apenas quando entra no viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('animate-in', 'fade-in', 'duration-700');
        }
      });
    }, { threshold: 0.1, rootMargin: '100px' });

    const sections = containerRef.current?.querySelectorAll('[data-lazy]');
    sections?.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-4', 'transition-all');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Web Vitals simples
  useEffect(() => {
    if ('performance' in window && process.env.NODE_ENV === 'production') {
      performance.mark('home-start');
      requestIdleCallback(() => {
        performance.mark('home-end');
        performance.measure('home-load', 'home-start', 'home-end');
        const measure = performance.getEntriesByName('home-load')[0];
        if (measure) console.log(`⚡ Home carregada em ${measure.duration.toFixed(2)}ms`);
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200 min-h-screen antialiased transform-gpu will-change-auto" style={{ transform: 'translateZ(0)', contain: 'layout style paint' }}>
      <header className="sticky top-0 z-50 backdrop-blur-sm  shadow-sm"><Navbar /></header>

      <main role="main" className="relative">
        <section aria-label="Projetos em destaque" className="relative transform-gpu">
          <ProjectSlider />
        </section>

        <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 space-y-16">

          <section data-lazy aria-label="Seção principal">
            <LazyWrapper fallback={<Skeleton height="h-96" />}><HeroSection /></LazyWrapper>
          </section>

          <section data-lazy aria-label="Depoimentos de impacto">
            <LazyWrapper fallback={<Skeleton height="h-72" />}><TestimonialSlider /></LazyWrapper>
          </section>

          <section data-lazy aria-label="Nossa equipe">
            <LazyWrapper fallback={<Skeleton height="h-80" />}><TeamSlider /></LazyWrapper>
          </section>

          <section data-lazy aria-label="Estatísticas de impacto">
            <LazyWrapper fallback={<Skeleton height="h-64" />}><ImpactStats title="Nosso Impacto em Números" stats={statsData} /></LazyWrapper>
          </section>

        </div>
      </main>

      <footer role="contentinfo" className="mt-20">
        <LazyWrapper fallback={<Skeleton height="h-48" />}><Footer /></LazyWrapper>
      </footer>
    </div>
  );
}

export default memo(Home);
