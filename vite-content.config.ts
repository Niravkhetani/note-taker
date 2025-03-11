import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                popup: "./public/popup.html",
                content: "./content_script/content.ts",
                inject: "./content_script/inject.tsx"
            },
            output: {
                entryFileNames: "[name].js"
            }
        }
    },
    publicDir: "public"
});
