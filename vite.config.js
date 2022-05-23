import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    
  ],
  base: "./",
  esbuild: {
    jsxInject: `import '@mediapipe/hands'; import '@tensorflow-models/hand-pose-detection' `,
  }
})
