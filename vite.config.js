import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.JPG'], // <- mantém a configuração para .JPG
  
  build: {
    // Chunk splitting otimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Bibliotecas do React em chunk separado
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Bibliotecas de UI pesadas em chunks separados
          'ui-vendor': ['framer-motion'],
          'swiper-vendor': ['swiper'], // Swiper separado por ser muito pesado
          'icons-vendor': ['lucide-react', 'react-icons'],
          // Outros utilitários
          'utils': ['react-helmet', 'react-intersection-observer', 'react-player']
        }
      }
    },
    // Otimizações de build mais agressivas
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove logs específicos
        dead_code: true, // Remove código morto
        unused: true // Remove variáveis não utilizadas
      }
    },
    // Otimizar assets
    assetsInlineLimit: 2048, // Inline apenas assets muito pequenos
    cssCodeSplit: true, // Split CSS por chunks
    // Compressão de assets
    reportCompressedSize: false, // Acelera build
    chunkSizeWarningLimit: 1000 // Avisa sobre chunks grandes
  },
  
  // Otimizações de desenvolvimento
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-icons',
      'react-helmet',
      'react-player'
    ]
  },
  
  // Cache de dependências
  server: {
    fs: {
      cachedChecks: false
    }
  }
})