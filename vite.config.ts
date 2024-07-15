import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9798
  },
  resolve: {
    alias: {
      process: "process/browser",
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@helpers": path.resolve(__dirname, "./src/helpers")
    }
  }
})
