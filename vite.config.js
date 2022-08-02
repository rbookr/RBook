//export default {
  //// config options
  //resolve :{

  //}
//}
const path = require('path')
import { defineConfig } from 'vite'

export default defineConfig({
  resolve:{
    alias:{
      'COM' : path.resolve(__dirname, '.vitepress/components')
    },
  }
})

