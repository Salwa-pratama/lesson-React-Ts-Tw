import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],

  // Ini untuk multi pages
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
      },
    },
  },
});
