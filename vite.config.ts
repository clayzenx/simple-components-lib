import { defineConfig } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'scl',
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/,
      plugins: [nodeResolve({
        exportConditions: ['production']
      })]
    }
  }
})
