//cppbook/cppbook sidebar config

module.exports = [
  {
    text:'快速入门',
    collapsible: true,
    collapsed: false,
    items:[
      {text: '1.第一个程序', link: '/cppbook/cpp_quick_guide/1-第一个程序.md' },
      {text: '2.注释', link: '/cppbook/cpp_quick_guide/2-注释.md' },
      {text:'3.数据类型',link:'/cppbook/cpp_quick_guide/3-数据类型.md' },
      {text:'4.输入输出',link:'/cppbook/cpp_quick_guide/4-输入输出.md' },
      {text:'5.变量',link:'/cppbook/cpp_quick_guide/5-变量.md'     },
      {text:'6.运算符',link:'/cppbook/cpp_quick_guide/6-运算符.md'   },
      {text:'7.控制结构',link:'/cppbook/cpp_quick_guide/7-控制结构.md' },
      {text:'8.循环结构',link:'/cppbook/cpp_quick_guide/8-循环结构.md' },
      {text:'9.数组',link:'/cppbook/cpp_quick_guide/9-数组.md'     },
      {text:'10-1.简单指针',link:'/cppbook/cpp_quick_guide/10-1-简单指针.md'     },
      {text:'10-2.引用',link:'/cppbook/cpp_quick_guide/10-2-引用.md'     },
      {text:'11-1 字符串',link:'/cppbook/cpp_quick_guide/11-字符数组与字符串/index.md'  },
      {text:'11-2 字符数组',link:'/cppbook/cpp_quick_guide/11-字符数组与字符串/CString.md'  },
      {text:'11-3 c++ string',link:'/cppbook/cpp_quick_guide/11-字符数组与字符串/CPPString.md'  },
      {text:'11-4 字符串练习题目',link:'/cppbook/cpp_quick_guide/11-字符数组与字符串/练习题目.md'  },
      {text:'12-1 函数入门📺 ',link:'/cppbook/cpp_quick_guide/12-函数/index.md'    },
      {text:'12-2 函数定义📺 ',link:'/cppbook/cpp_quick_guide/12-函数/定义.md'    },
      {text:'12-3 进一步理解参数📺 ',link:'/cppbook/cpp_quick_guide/12-函数/进一步理解参数.md'    },
      {text:'12-4 理解函数的调用📺 ',link:'/cppbook/cpp_quick_guide/12-函数/函数理解.md'    },
      {text:'12-5 函数练习题目',link:'/cppbook/cpp_quick_guide/12-函数/题目.md'    },
      {text:'13-1 递归定义',link:'/cppbook/cpp_quick_guide/13-递归/index.md'    },
      {text:'13-2 递归入门',link:'/cppbook/cpp_quick_guide/13-递归/求阶乘.md'    },
      {text:'13-3 前进与回溯',link:'/cppbook/cpp_quick_guide/13-递归/前进与回溯.md'    },
      {text:'13-4 递归练习',link:'/cppbook/cpp_quick_guide/13-递归/题目练习.md'    },
      {text:'13-5 递归的应用：枚举',link:'/cppbook/cpp_quick_guide/13-递归/递归的应用_枚举.md'    },
      {text:'14.结构体',link:'/cppbook/cpp_quick_guide/结构体.md'     },
      {text:'15.文件操作',link:'/cppbook/cpp_quick_guide/14-文件操作.md'     },
      {text:'16.总结',link:'/cppbook/cpp_quick_guide/14-总结.md'     }
    ]
  },
  {
    text:'STL标准库',
    collapsible: true,
    collapsed: true,
    items: [
      {text:'什么是STL',link:'/cppbook/stl/index.md'     },
      {text:'string📺',link:'/cppbook/stl/string.md'     },
      {text:'顺序容器-vector',link:'/cppbook/stl/顺序容器/vector.md'     },
      {text:'顺序容器-deque',link:'/cppbook/stl/顺序容器/deque.md'     },
      {text:'顺序容器-list',link:'/cppbook/stl/顺序容器/list.md'     },
      {text:'容器适配器-stack',link:'/cppbook/stl/容器适配器/stack.md'     },
      {text:'容器适配器-queue',link:'/cppbook/stl/容器适配器/queue.md'     },
      {text:'容器适配器-priority_queue',link:'/cppbook/stl/容器适配器/priority_queue.md'     },
      {text:'关联容器-pair',link:'/cppbook/stl/关联容器/pair.md'     },
      {text:'关联容器-map',link:'/cppbook/stl/关联容器/map.md'     },
      {text:'关联容器-set',link:'/cppbook/stl/关联容器/set.md'     },
      {text:'关联容器-multimap',link:'/cppbook/stl/关联容器/multimap.md'     },
      {text:'STL中的算法',link:'/cppbook/stl/algorithm/index.md'     },
      {text:'sort📺',link:'/cppbook/stl/algorithm/sort.md'     },
      {text:'unique',link:'/cppbook/stl/algorithm/unique.md'     },
      {text:'nth_element',link:'/cppbook/stl/algorithm/nth_element.md'     },
      {text:'find',link:'/cppbook/stl/algorithm/find.md'     },
      {text:'binary_search',link:'/cppbook/stl/algorithm/binary_search.md'     },
    ]
  },
  {
    text:'其它',
    collapsible: true,
    collapsed: true,
    items: [
      {text:'类的初识',link:'/cppbook/other/类与对象/类的初识.md'     },
      {text:'运算符重载',link:'/cppbook/other/类与对象/运算符重载.md'     },
      {text:'仿函数',link:'/cppbook/other/类与对象/仿函数.md'     },
      {text:'template模板📺',link:'/cppbook/other/模板.md'     },
      {text:'现代C++11,14,17,20',link:'/cppbook/other/modern_cpp.md'     },
      {text:'linux简单使用',link:'/cppbook/other/linux简单使用.md'     },
      {text:'计算机原理',link:'/cppbook/other/计算机原理.md'     },
    ]
  }
]
