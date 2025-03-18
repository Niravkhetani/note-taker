import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';
import path from 'path-browserify';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname), // Ensure alias is set correctly
    },
  },
  build:{
    target:"esnext",
    rollupOptions:{
      input:{
        popup: "./popup/index.html",
      },
      output:{
        entryFileNames: "assets/[name].js"
      }
    },
  },
})
