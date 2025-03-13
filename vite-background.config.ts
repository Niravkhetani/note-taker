import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '.', // Ensure "@" resolves correctly
    },
  },
  build: {
    emptyOutDir: false, // So that popup and content build files don't get deleted
    target: 'node16',
    rollupOptions: {
      input: {
        background: './background/background.ts', // Entry Point
      },
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
