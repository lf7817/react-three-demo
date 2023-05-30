import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // 兼容 css-loader 加载path alias格式 https://github.com/webpack-contrib/css-loader#url
      "~@": path.resolve(__dirname, "src"),
      images: path.resolve(__dirname, "src/assets/images"),
      "~images": path.resolve(__dirname, "src/assets/images"),
      styles: path.resolve(__dirname, "src/assets/styles"),
      "~styles": path.resolve(__dirname, "src/assets/styles"),
    },
  },
});
