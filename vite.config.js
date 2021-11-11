import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
// INFO: In Vite 2.6.x, need to set build.minify to 'terser' for drop_console to work

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        // remove console in production
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
