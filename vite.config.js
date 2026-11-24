import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // "./" membuat semua aset (termasuk cv.pdf) memakai path relatif,
  // sehingga aman di domain utama maupun subpath GitHub Pages.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
