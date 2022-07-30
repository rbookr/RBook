---
_id: "7848a03522"
title: queue
date: 2019-11-20 22:36
update: 2019-11-20 22:36
author: Rainboy
---

## 适配器 queue

queue单向队列与栈有点类似，一个是在同一端存取数据，另一个是在一端存入数据，另一端取出数据。单向队列中的数据是先进先出（First In First Out,FIFO）。在STL中，单向队列也是以别的容器作为底部结构，再将接口改变，使之符合单向队列的特性就可以了。因此实现也是非常方便的。下面就给出单向队列的函数列表和VS2008中单向队列的源代码。单向队列一共6个常用函数（front()、back()、push()、pop()、empty()、size()），与栈的常用函数较为相似

原型：

```c
template <class T, class Container = deque<T> > class queue;
```

## queue

|操作|含义|
|--|--|
|front()||
|back()| |
|push()| |
|pop()|  |
|empty()||
|size()| |

```c
#include <queue>
#include <vector>
#include <list>
#include <cstdio>
using namespace std;

int main()
{
	//可以使用list作为单向队列的容器，默认是使用deque的。
	queue<int, list<int>> a;
	queue<int>        b;
	int i;

	//压入数据
	for (i = 0; i < 10; i++)
	{
		a.push(i);
		b.push(i);
	}

	//单向队列的大小
	printf("%d %d\n", a.size(), b.size());

	//队列头和队列尾
	printf("%d %d\n", a.front(), a.back());
	printf("%d %d\n", b.front(), b.back());

	//取单向队列项数据并将数据移出单向队列
	while (!a.empty())
	{
		printf("%d ", a.front());
		a.pop();
	}
	putchar('\n');

	while (!b.empty())
	{
		printf("%d ", b.front());
		b.pop();
	}
	putchar('\n');
	return 0;
}
```
