//cppbook/cppbook sidebar config

module.exports = [
  {
    text:'工具',
    collapsible: true,
    collapsed: false,
    items:[
      {text: '随机数的用法', link: '/appendix/utils/random/随机数的用法.md'},
      {text: '随机数据生成', link: '/appendix/utils/random/随机数据生成.md'},
      {text: '对拍脚本', link: '/appendix/utils/compare/' },
      {text: '常用脚本', link: '/appendix/utils/scripts/index.md' },
    ]
  },
  {
    text:'软件',
    collapsible: true,
    collapsed: false,
    items:[
      {text: 'vim', link: '/appendix/software/vim_todo.md'},
      {text: 'vscode', link: '/appendix/software/vscode.md'},
      {text: 'graphviz', link: '/appendix/software/graphviz_todo.md'},
      {text: 'python', link: '/appendix/software/python_learning.md'},
      {text: 'edge', link: '/appendix/software/edge.md'},
      {text: '坚果云', link: '/appendix/software/nutstore.md'},
    ]
  },
  {
    text:'技巧',
    collapsible: true,
    collapsed: false,
    items:[
      {text: '如何写题目', link: '/appendix/tricks/如何写题目.md'},
      {text: '代码模板', link: '/appendix/tricks/template.md'},
    ]
  },
  {
    text:'其它',
    collapsible: true,
    collapsed: false,
    items:[
      {text: '竞赛路线', link: '/appendix/竞赛路线.md' },
      {text: '2022csp初赛线上测试NoiLinux2.0系统环境的搭建', link: '/appendix/2022csp初赛线上测试NoiLinux2.0系统环境的搭建.md' },
      {text: '有用的在线资源',link:'/appendix/urls.md'}
    ]
  }
]
