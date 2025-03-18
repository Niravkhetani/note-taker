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
      '@': path.resolve(__dirname), // Ensure alias is set correctly
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: './public/popup.html',
        content: './content_script/content.ts',
        inject: './content_script/inject.tsx',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  publicDir: 'public',
});
