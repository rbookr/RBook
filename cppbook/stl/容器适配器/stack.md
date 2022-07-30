---
_id: "df528bc2a0"
title: stack
date: 2019-11-20 22:36
update: 2019-11-20 22:36
author: Rainboy
---

# 适配器 stack

C++ STL 的堆栈泛化是直接通过现有的序列容器来实现的，默认使用双端队列deque的数据结构，当然，可以采用其他线性结构（vector 或 list等），只要提供堆栈的入栈、出栈、栈顶元素访问和判断是否为空的操作即可。由于堆栈的底层使用的是其他容器，因此，堆栈可看做是一种适配器，将一种容器转换为另一种容器(堆栈容器)。

为了严格遵循堆栈的数据后进先出原则，stack 不提供元素的任何迭代器操作，因此，stack 容器也就不会向外部提供可用的前向或反向迭代器类型。
    stack堆栈容器的C++标准头文件为 stack ，必须用宏语句 `"#include <stack>"` 包含进来，才可对 stack 堆栈的程序进行编译。

原型：

```c
template <class T, class Container = deque<T> > class stack;
```




|操作|含义|
|--|--|
|empty()| stack是否为空 |
|size()| stack元素个数|
|top()| 栈顶元素的引用|
|push(val)| 压入元素 val|
|pop()| 弹出元素 |

## 创建

```c
//容器 适配器
//stack 适配器 可以使用任
#include <iostream>
#include <stack>
#include <vector>
#include <deque>
#include <list>
using namespace std;
int a[] = {1,2,3,4,5};
int main(){
	//创建一个空的默认的stack
	stack<int> stk;
	stack<int> stk3(stk);
	
	//使用其他容器
	stack<int,vector<int> > stk_vec;
	stack<int,deque<int> > stk_deq;
	stack<int,list<int> > stk_lis;
	
	return 0;
}
```

## 操作

```c
#include <iostream>
#include <stack>
#include <vector>
#include <deque>
#include <list>
using namespace std;
int a[] = {1,2,3,4,5};
int main(){
    //创建一个空的默认的stack
    stack<int> stk;

	int i;
	for(i=0;i<5;i++)
		stk.push(a[i]);
	while( !stk.empty()){
		cout << stk.top() << endl;
		stk.pop();
	}
	return 0;
}
```




