import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path-browserify';
import { viteStaticCopy } from 'vite-plugin-static-copy';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      {
        src: 'content_script/assets/**/*', // Source directory
        dest: 'assets', // Destination inside dist folder
      },
    ],
  })],
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
