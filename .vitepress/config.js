import cppbookSiderBar from './cppbook_siderbar'

//markdown-it plugin
import mathjax3 from 'markdown-it-mathjax3';
import markdownEjs from './markdown-plugin/ejs'
import extend_fence from './markdown-plugin/extend_fenc'

//import anchor from 'markdown-it-anchor'
//


const customElements = ['mjx-container'];

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

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

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
      md.use(markdownEjs);
      md.use(extend_fence);
      md.use(mathjax3);
    }
  },


  themeConfig: {
    logo:'/rbookIcon/favicon.ico',

    editLink: {
      pattern: 'https://github.com/rbookr/RBook/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbookr/cpp_for_beginners' }
    ],

    nav: [
      { text: 'Rbook', link: '/rbook/' },
      { text: 'CppBook', link: '/cppbook/' },
      { text: 'Appendix', link: '/appendix/' }
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
