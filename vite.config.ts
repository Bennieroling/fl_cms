import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor';
          }
          // Router
          if (id.includes('react-router-dom')) {
            return 'router';
          }
          // Forms
          if (id.includes('react-hook-form') || id.includes('@hookform')) {
            return 'forms';
          }
          // Charts (only loaded when needed)
          if (id.includes('recharts')) {
            return 'charts';
          }
          // Carousel (only loaded when needed) 
          if (id.includes('embla-carousel')) {
            return 'carousel';
          }
          // Core UI components (commonly used)
          if (id.includes('@radix-ui/react-slot') || 
              id.includes('@radix-ui/react-toast') ||
              id.includes('@radix-ui/react-label') ||
              id.includes('@radix-ui/react-dialog')) {
            return 'ui-core';
          }
          // Other UI components (loaded on demand)
          if (id.includes('@radix-ui')) {
            return 'ui-extended';
          }
          // Icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          // Helmet for SEO
          if (id.includes('react-helmet-async')) {
            return 'helmet';
          }
          // Large utilities
          if (id.includes('date-fns') || id.includes('zod')) {
            return 'utils';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Add cache headers for static assets
  preview: {
    historyApiFallback: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
}));
