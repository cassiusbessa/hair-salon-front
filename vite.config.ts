import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Store": path.resolve(__dirname, './src/Redux/Store'),
      "@States": path.resolve(__dirname, './src/Redux/States'),
    }
  }
})
