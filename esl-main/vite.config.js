// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000 // Change this to the port you want to use
  },
  plugins: [react()]
});
