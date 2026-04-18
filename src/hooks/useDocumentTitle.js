import { useEffect } from 'react';

// Hook para gerenciar o título da página
export const useDocumentTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

// Hook para gerenciar meta tags
export const useDocumentMeta = (metaTags) => {
  useEffect(() => {
    const addedElements = [];
    
    Object.entries(metaTags).forEach(([key, value]) => {
      let element = document.querySelector(`meta[name="${key}"]`) || 
                   document.querySelector(`meta[property="${key}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        if (key.startsWith('og:') || key.startsWith('twitter:')) {
          element.setAttribute('property', key);
        } else {
          element.setAttribute('name', key);
        }
        document.head.appendChild(element);
        addedElements.push(element);
      }
      
      element.setAttribute('content', value);
    });
    
    return () => {
      addedElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [metaTags]);
};

// Hook combinado para facilitar o uso
export const useDocumentHead = (title, metaTags = {}) => {
  useDocumentTitle(title);
  useDocumentMeta(metaTags);
};