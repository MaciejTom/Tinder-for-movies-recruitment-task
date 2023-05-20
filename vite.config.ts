import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Tinder-for-movies-recruitment-task",
  plugins: [react()],
})
