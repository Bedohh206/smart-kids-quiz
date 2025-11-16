import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/smart-kids-quiz/",
  server: {
    port: 3005,
    open: true
  }
});
