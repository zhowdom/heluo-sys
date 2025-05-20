import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path' // need install @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    assetsInlineLimit: 4096 // < 4KB的文件转base64
  },
  base: "./", // 相对路径[打包后空白]
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
});
