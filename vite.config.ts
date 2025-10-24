import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Désactive la génération de source maps en production (gain de temps significatif)
    sourcemap: false,
    
    // Augmente la limite de chunk warning (évite les warnings inutiles)
    chunkSizeWarningLimit: 1000,
    
    // Optimise le minification
    minify: 'esbuild', // Plus rapide que terser
    
    // Réduit le nombre de chunks pour accélérer le build
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@mui/material', '@mui/icons-material', 'lucide-react'],
        }
      }
    },
    
    // Optimise les dépendances
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  
  // Optimise les dépendances pré-bundlées
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
