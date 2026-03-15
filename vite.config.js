import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use relative asset paths in production so the same build works on:
  // - Netlify root domain
  // - GitHub Pages subfolder
  // - static hosting previews
  base: command === 'serve' ? '/' : './',
}))
