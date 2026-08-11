// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   // base: "/vite-react-gallery/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          icons: ["react-icons", "lucide-react"],
        },
      },
    },
  },
});
