import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Production lives at https://aideazz.xyz/ops/ (static files copied into aideazz/public/ops).
// Local dev keeps base "/" so npm run dev works at http://localhost:5173/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/ops/' : '/',
  plugins: [react()],
}))
