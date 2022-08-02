//export default {
  //// config options
  //resolve :{

  //}
//}
const {resolve}= require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/components/gallery.html'),
      }
    }
  },
  resolve:{
    alias:{
      'COM' : resolve(__dirname, '.vitepress/components')
    },
  }
})

