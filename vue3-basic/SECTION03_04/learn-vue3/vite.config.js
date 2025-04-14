import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      //@ 기호를 통하여 './src' 디렉토리에 절대경로로 쉽게 접근가능.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
