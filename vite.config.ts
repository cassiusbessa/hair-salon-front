import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@store": path.resolve(__dirname, './src/redux/store'),
      "@states": path.resolve(__dirname, './src/redux/states'),
      "@components": path.resolve(__dirname, './src/components'),
      "@screens": path.resolve(__dirname, './src/screens'),
      "@assets": path.resolve(__dirname, './src/assets'),
      "@styles": path.resolve(__dirname, './src/styles'),
      "@custom-hooks": path.resolve(__dirname, './src/custom-hooks'),
    }
  }
})
