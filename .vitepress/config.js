import {markdownEjs} from 'rbookr-theme'
import cppbookSiderBar from '../cppbook/siderbar'
//import anchor from 'markdown-it-anchor'


export default {

  lang: 'zh-CN',
  title: 'RBook',
  description: 'CppBook -- online book of C++',
  appearance: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/rbookIcon/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/rbookIcon/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/rbookIcon/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/rbookIcon/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/rbookIcon/favicon.ico"}],
  ],

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,

    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#permalinks
    //anchor: {
      //permalink: anchor.permalink.headerLink()
    //},

    // options for markdown-it-toc-done-right
    toc: { level: [1, 2,3] },
    config: (md) => {
      md.use(markdownEjs)
    }
  },


  themeConfig: {
    logo:'/rbookIcon/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbookr/cpp_for_beginners' }
    ],

    nav: [
      { text: 'CppBook', link: '/cppbook/' },
      { text: 'Rbook', link: '/rbook/' },
      { text: 'Tools', link: '/tools/' }
    ],

    sidebar: {
      '/cppbook/' : cppbookSiderBar
      //{
        //text:'竞赛路线',
        //collapsible: true,
        //collapsed: false,
        //items:[
          //{ text: '路线', link: '/竞赛路线.md' }
        //]
      //}
    }
  }
}
