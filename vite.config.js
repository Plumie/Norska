import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['three']
    },
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'Norska',
      formats: ['es'],
      fileName: 'norska'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
  },
});
