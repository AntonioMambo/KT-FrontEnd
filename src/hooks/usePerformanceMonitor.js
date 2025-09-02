import { useEffect, useCallback, useRef } from 'react';

// Hook para monitoramento de performance
export const usePerformanceMonitor = (componentName) => {
  const renderCount = useRef(0);
  const mountTime = useRef(null);

  useEffect(() => {
    renderCount.current += 1;
    
    if (renderCount.current === 1) {
      mountTime.current = performance.now();
      
      // Marca o início da renderização
      performance.mark(`${componentName}-mount-start`);
      
      // Agenda medição após render completo
      requestIdleCallback(() => {
        performance.mark(`${componentName}-mount-end`);
        performance.measure(
          `${componentName}-mount-duration`,
          `${componentName}-mount-start`,
          `${componentName}-mount-end`
        );
        
        // Log apenas em desenvolvimento
        if (process.env.NODE_ENV === 'development') {
          const measure = performance.getEntriesByName(`${componentName}-mount-duration`)[0];
          console.log(`🚀 ${componentName} mounted in ${measure.duration.toFixed(2)}ms`);
        }
      });
    }
  });

  // Cleanup das medições
  useEffect(() => {
    return () => {
      performance.clearMarks(`${componentName}-mount-start`);
      performance.clearMarks(`${componentName}-mount-end`);
      performance.clearMeasures(`${componentName}-mount-duration`);
    };
  }, [componentName]);

  return { renderCount: renderCount.current, mountTime: mountTime.current };
};

// Hook para otimização de imagens lazy loading
export const useImageOptimization = () => {
  const imageObserver = useRef(null);

  const observeImage = useCallback((img) => {
    if (!imageObserver.current) {
      imageObserver.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // Lazy load da imagem
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            
            // Lazy load do srcset
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }
            
            // Remove loading placeholder
            img.classList.add('loaded');
            imageObserver.current.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });
    }

    if (img) {
      imageObserver.current.observe(img);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (imageObserver.current) {
        imageObserver.current.disconnect();
      }
    };
  }, []);

  return { observeImage };
};

// Hook para preload de recursos
export const useResourcePreload = (resources) => {
  useEffect(() => {
    const preloadedResources = [];

    resources.forEach(({ href, as, type, crossorigin }) => {
      // Verifica se já foi precarregado
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        
        if (type) link.type = type;
        if (crossorigin) link.crossOrigin = crossorigin;
        
        // Adiciona listener para erro
        link.onerror = () => {
          console.warn(`Failed to preload resource: ${href}`);
        };
        
        document.head.appendChild(link);
        preloadedResources.push(link);
      }
    });

    // Cleanup
    return () => {
      preloadedResources.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [resources]);
};

// Hook para Web Vitals monitoring
export const useWebVitals = () => {
  useEffect(() => {
    // Só carrega em produção
    if (process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }).catch(() => {
        // Falha silenciosa se web-vitals não estiver disponível
      });
    }
  }, []);
};

// Hook para otimização de scroll
export const useScrollOptimization = () => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Lógica de scroll otimizada aqui
          ticking = false;
        });
        ticking = true;
      }
    };

    // Usa passive listener para melhor performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

// Hook para critical CSS loading
export const useCriticalCSS = (criticalCssPath) => {
  useEffect(() => {
    // Carrega CSS crítico inline
    const criticalStyle = document.createElement('style');
    
    fetch(criticalCssPath)
      .then(response => response.text())
      .then(css => {
        criticalStyle.textContent = css;
        document.head.insertBefore(criticalStyle, document.head.firstChild);
      })
      .catch(() => {
        // Falha silenciosa
      });

    return () => {
      if (criticalStyle.parentNode) {
        criticalStyle.parentNode.removeChild(criticalStyle);
      }
    };
  }, [criticalCssPath]);
};

// Utility function para detectar conexão lenta
export const useConnectionAware = () => {
  const getConnectionSpeed = () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        saveData: connection.saveData
      };
    }
    return { effectiveType: '4g', downlink: 10, saveData: false };
  };

  const isSlowConnection = () => {
    const { effectiveType, saveData } = getConnectionSpeed();
    return saveData || effectiveType === 'slow-2g' || effectiveType === '2g';
  };

  return { getConnectionSpeed, isSlowConnection };
};