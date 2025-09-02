import React, { memo, lazy, Suspense, useEffect, useMemo, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentHead } from '../hooks/useDocumentTitle';

// Lazy loading do BlogCard
const Blog = lazy(() => import("../components/BlogCard"));

// Skeleton para fallback
const Skeleton = ({ height = "h-64" }) => (
  <div className={`${height} w-full bg-gray-200 animate-pulse rounded-lg`} />
);

// Wrapper Lazy + Suspense
const LazyWrapper = ({ children, fallback }) => (
  <Suspense fallback={fallback || <Skeleton />}>
    {children}
  </Suspense>
);

function Blogs() {
  const containerRef = useRef(null);

  // SEO otimizado
  const seoConfig = useMemo(() => ({
    title: 'Kutchindja - Blog | Jovens pela Diversidade e Inclusão',
    metaTags: {
      description: 'A KUTCHINDJA promove inclusão e empoderamento de jovens em Moçambique.',
      robots: 'index, follow',
      keywords: 'kutchindja, jovens, moçambique, inclusão, diversidade, empoderamento, sociedade justa',
      author: 'Kutchindja',
      viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      themeColor: '#3B82F6',
      'og:title': 'Kutchindja - Blog de Inclusão e Diversidade',
      'og:description': 'A KUTCHINDJA promove inclusão e empoderamento de jovens em Moçambique.',
      'og:url': 'https://www.kutchindja.org.mz/blogs',
      'og:type': 'website',
      'og:image': 'https://www.kutchindja.org.mz/images/og-image.jpg',
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Kutchindja - Blog de Inclusão e Diversidade',
      'twitter:description': 'Promovendo empoderamento e inclusão de jovens em Moçambique.',
      'twitter:image': 'https://www.kutchindja.org.mz/images/twitter-image.jpg'
    }
  }), []);

  useDocumentHead(seoConfig.title, seoConfig.metaTags);

  // Link canônico
  useEffect(() => {
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://www.kutchindja.org.mz/blogs';
    document.head.appendChild(canonical);
    return () => {
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.remove();
    };
  }, []);

  // Preload de recursos críticos
  useEffect(() => {
    ['/fonts/inter-var.woff2'].forEach(f => {
      const link = document.createElement('link');
      link.rel = 'preload'; link.as = 'font'; link.href = f; link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    ['/images/logo.webp'].forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload'; link.as = 'image'; link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  // Intersection Observer para lazy load baseado em viewport
  const [loadBlog, setLoadBlog] = React.useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLoadBlog(true);
          observer.disconnect(); // desconecta após carregar
        }
      });
    }, { rootMargin: "200px" });

    const target = containerRef.current;
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-blue-80 via-blue-120 to-blue-200 min-h-screen antialiased transform-gpu will-change-auto"
      style={{ transform: 'translateZ(0)', contain: 'layout style paint' }}
    >
      <header className="sticky top-0 z-50 backdrop-blur-sm shadow-sm">
        <Navbar />
      </header>

      <main ref={containerRef} role="main" className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {loadBlog ? <LazyWrapper fallback={<Skeleton />}><Blog /></LazyWrapper> : <Skeleton />}
      </main>

      <footer className="mt-20">
        <LazyWrapper fallback={<Skeleton height="h-48" />}><Footer /></LazyWrapper>
      </footer>
    </div>
  );
}

export default memo(Blogs);
