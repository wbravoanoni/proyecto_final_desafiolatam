import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: "0.0.0.0", // Permite accesos desde cualquier IP
  },
  build: {
    outDir: "dist",
  },
  preview: {
    port: 8080,
    host: "0.0.0.0",
    allowedHosts: ["proyecto-final-desafiolatam.onrender.com"] // Agrega tu dominio aquí
  }
});
