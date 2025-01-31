import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'kit': path.resolve(__dirname, './src/components/kit'),
      'block': path.resolve(__dirname, './src/components/block'),
      'template': path.resolve(__dirname, './src/components/template'),
      'doc': path.resolve(__dirname, './src/components/doc'),
      'utility': path.resolve(__dirname, './src/components/utility'),
    },
  },
})
