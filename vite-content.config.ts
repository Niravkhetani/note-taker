import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path-browserify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
    // Add this to deduplicate packages
    dedupe: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled']
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: true, // Helps with debugging
    rollupOptions: {
      input: {
        content: './content_script/content.ts',
        inject: './content_script/inject.tsx',
        styles: './content_script/styles.css'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name.includes('styles') ? '[name].css' : '[name].js';
        },
        assetFileNames: 'assets/[name].[ext]',
        // Properly chunk libraries to avoid duplication
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled'
          ],
          // Other dependencies as needed
        }
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  publicDir: 'public',
});
