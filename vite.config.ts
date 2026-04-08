import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Belle Delphine Official',
        short_name: 'Belle Delphine',
        description: 'Official website of Belle Delphine - Creative cosplayer, content creator, and internet personality',
        theme_color: '#FEB3CE',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/android-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,webp}'],
        globIgnores: ['**/assets/logo-*.svg'], // Exclude large logo from cache
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      }
    })
  ],
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
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'react-vendor'
          }

          if (id.includes('node_modules/@mui/material/')) {
            return 'ui-vendor'
          }

          return undefined
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
