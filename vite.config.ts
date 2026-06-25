import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Required for GitHub Pages subdirectory deployment:
  // https://gustavo-mrts.github.io/Emilly/
  base: '/Emilly/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
