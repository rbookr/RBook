import {markdownEjs}from 'rbookr-theme'
//import anchor from 'markdown-it-anchor'


export default {

  lang: 'zh-CN',
  title: 'CppBook',
  description: 'CppBook -- online book of C++',
  appearance: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
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
    logo:'/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbookr/cpp_for_beginners' }
    ],

    sidebar: [
      {
        text:'快速入门',
        collapsible: true,
        collapsed: false,
        items:[
          { text: '1.第一个程序', link: '/cpp_quick_guide/1-第一个程序.md' },
          { text: '2.注释', link: '/cpp_quick_guide/2-注释.md' },
          {text:'3.数据类型',link:'/cpp_quick_guide/3-数据类型.md' },
          {text:'4.输入输出',link:'/cpp_quick_guide/4-输入输出.md' },
          {text:'5.变量',link:'/cpp_quick_guide/5-变量.md'     },
          {text:'6.运算符',link:'/cpp_quick_guide/6-运算符.md'   },
          {text:'7.控制结构',link:'/cpp_quick_guide/7-控制结构.md' },
          {text:'8.循环结构',link:'/cpp_quick_guide/8-循环结构.md' },
          {text:'9.数组',link:'/cpp_quick_guide/9-数组.md'     },
          {text:'10.字符串',link:'/cpp_quick_guide/10-字符串.md'  },
          {text:'11.函数',link:'/cpp_quick_guide/11-函数.md'    },
          {text:'12.递归',link:'/cpp_quick_guide/12-递归.md'    },
          {text:'13.总结',link:'/cpp_quick_guide/13-总结.md'     }
        ]
      },
      {
        text:'竞赛路线',
        collapsible: true,
        collapsed: false,
        items:[
          { text: '路线', link: '/竞赛路线.md' }
        ]
      }
    ]
  }
}
