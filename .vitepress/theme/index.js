import './app.scss'

import gallery from 'COM/gallery.vue'

import DefaultTheme from 'vitepress/theme'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('gallery', gallery)
  }
}
