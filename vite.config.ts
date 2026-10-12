import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths let this work on both username.github.io and username.github.io/repo-name/
  base: './',
})
