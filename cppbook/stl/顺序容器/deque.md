---
_id: "1127252145"
title: deque
date: 2019-11-20 22:37
update: 2019-11-20 22:37
author: Rainboy
---

## deque的使用讲解

deque容器是STL中的一部分,和vector类似,支持随机访问和快速插入删除,它在容器中的某一个位置上的操作所花费的时间是线性的。 
与vector不同,deque还支持从开始插入数据:push_front() 
**可以高效的在头部和尾部快速插入和删除**,但是在中间插入和删除效率比较低 
不支持capacity和reserve操作

## deque 特点

 - deque模拟动态数组
 - deque的元素可以是任意类型T，但必须具备赋值和拷贝能力（具有public拷贝构造函数和重载的赋值操作符）
 - 必须包含的头文件`#include <deque>`
 - deque支持随机存取
 - deque支持在头部和尾部存储数据
 - deque不支持capacity和reserve操作

## deque 操作

```
|---------------------+----------------------------------------------------------|
| deque               |                                                          |
|---------------------+----------------------------------------------------------|
| 支持的迭代器类型    | 随机访问                                                 |
|---------------------+----------------------------------------------------------|
| 创建deque           |                                                          |
|---------------------+----------------------------------------------------------|
| deque<T> c          | 创建一个空的deque                                        |
| deque<T> c1(c2)     | 复制c2创建一个c1 deque                                   |
| deque<T> c(n)       | 创建n个元素,值是T类型的默认构造函数产生的                |
| deque<T> c(n,e)     | 创建n个元素,值是e                                        |
| deque<T> c(beg,end) | 创建n个元素,以区间[beg,end)为初值                        |
| ~deque<T>()         | 销毁所有元素,释放内存                                    |
|---------------------+----------------------------------------------------------|
| 基本操作            |                                                          |
|---------------------+----------------------------------------------------------|
| c.size()            | 返回元素的个数                                           |
| c.empty()           | 是否为空                                                 |
| c.max_size()        | 返回元素的最大可能数量                                   |
| ==,!=,<,<=,>,>=     | 逻辑运算                                                 |
|---------------------+----------------------------------------------------------|
| 赋值操作            |                                                          |
|---------------------+----------------------------------------------------------|
| c1 = c2             | c2赋值给c1                                               |
| c.assign(n,e)       | 将元素e的n个拷贝赋值给c                                  |
| c.assign(beg,end)   | 将[beg,end)内的值赋给c                                   |
| c1.swap(c2)         | 交换                                                     |
| swap(c1,c2)         | 交换                                                     |
|---------------------+----------------------------------------------------------|
| 存入读取            |                                                          |
|---------------------+----------------------------------------------------------|
| at(idx)             | 返回idx的元素的引用,进行越界检查                         |
| c[idx]              | 返回idx的元素的引用,不进行越界检查                       |
| front()             | 第一个元素的引用,不检查元素是否存在                      |
| back()              | 最后一个元素的引用,不检查元素是否存在                    |
|---------------------+----------------------------------------------------------|
| 迭代器[2]           |                                                          |
|---------------------+----------------------------------------------------------|
| c.begin()           | 指向第一个元素的迭代器                                   |
| c.end()             | 指向最后一个元素后面一个位置的迭代器                     |
| rbegin()            | 逆向迭代器,反向的第一个元素(也就是最后一个)迭代器        |
| rend()              | 逆向迭代器,反向在最后一个元素后面一个位置的迭代器        |
|---------------------+----------------------------------------------------------|
| 插入操作            |                                                          |
|---------------------+----------------------------------------------------------|
| c.insert(pos,e)     | pos位置(迭代器)前插入e的拷贝,返回新元素的位置的迭代串成  |
| c.insert(pos,n,e)   | pos位置(迭代器)前插入e的n个拷贝                          |
| c.push_back(e)      | 在尾部压入元素e的拷贝                                    |
| c.push_front(e)     | 在头部压入元素e的拷贝                                    |
|---------------------+----------------------------------------------------------|
| 删除操作            |                                                          |
|---------------------+----------------------------------------------------------|
| c.pop_back()        | 删除最后一个元素,不会返回元素的引用                      |
| c.pop_front()       | 删除第一个元素,不会返回元素的引用                        |
| c.erase(pos)        | 删除pos(迭代器)位置的元素,返回下一个元素的位置           |
| c.erase(beg,end)    | 删除[beg,end)位置内的元素,返回下一个元素的位置           |
| c.clear()           | 删除所有元素,并清空容器所占的内存                        |
| c.resize(num)       | 将元素数量改为num,多佘的删除,多出的用default构造函数产生 |
| c.resize(num,e)     | 将元素数量改为num,多佘的元素为e的拷贝                    |
|---------------------+----------------------------------------------------------|
```

迭代器持续有效,除非是发生了下面的情况 

 - 删除或插入元素 
 - 容量变化引起的内存重新分配

## 建立deque

```c
#include <iostream>
#include <deque>
using namespace std;

int a[] = {1,2,3,4,5};

void printDeque(deque<int> t){
    deque<int>::iterator iter = t.begin();
    for(;iter != t.end();iter++)
        cout << *iter <<" ";
    cout << endl;
}
int main(){
    //建立一个空的deque
    deque<int> c;
    cout <<"c:";
    printDeque(c);

    //大小为10
    deque<int> c1(10);
    cout <<"c1:";
    printDeque(c1);
    //大小为10,每个值为1
    deque<int> c1_1(10,1);
    cout <<"c1_1:";
    printDeque(c1_1);

    //c1 的副本
    deque<int> c2(c1);
    cout <<"c2:";
    printDeque(c2);

    //利用迭代器 初始化
    deque<int> c3(c1.begin(),c1.begin()+2);
    cout <<"c3:";
    printDeque(c3);
    
    //利用数组来初始化
    deque<int> c4(a,a+sizeof(a)/sizeof(a[0]));
    cout <<"c4:";
    printDeque(c4);
    
    return 0;
}
```

## 基本操作

```c
#include <iostream>
#include <deque>
using namespace std;
int a[] = {1,2,3,4,5};

void printDeque(deque<int> t){
    deque<int>::iterator iter = t.begin();
    for(;iter != t.end();iter++)
        cout << *iter <<" ";
    cout << endl;
}

int main(){
    deque<int> c(a,a+sizeof(a)/sizeof(a[0]));

    cout << "c.size():" << c.size() <<endl;
    cout << "c.empty():" << c.empty() <<endl;
    cout << "c.max_size():" << c.max_size() <<endl;

    //====赋值
    deque<int> c1 = c;
    cout << "c1:";
    printDeque(c1);

    //下标操作
    cout <<"c[1]:" << c[1] <<endl;
    c[1] = 100;
    cout <<"c[1]:" << c[1] <<endl;
    cout <<"c.at(1):" << c.at(1) <<endl;
    cout <<"c.front():" << c.front() <<endl;
    cout <<"c.back():" << c.back() <<endl;

    //交换
    c.swap(c1);
    
    //插入
    cout << "insert operation:" << endl;
    cout << "c1:";
    printDeque(c1);
    c1.insert(c1.begin(),123);
    cout << "c1:";
    printDeque(c1);

    c1.insert(c1.begin(),2,321);
    cout << "c1:";
    printDeque(c1);

    c1.push_back(222);
    cout << "c1:";
    printDeque(c1);

    c1.push_front(222);
    cout << "c1:";
    printDeque(c1);

    //删除操作

    c1.pop_back();
    cout << "c1:";
    printDeque(c1);

    c1.pop_front();
    cout << "c1:";
    printDeque(c1);
    return 0;
}


```





## deque 来完成BFS

去看`图的遍历-广度优先搜索`这个章节

```C
#include <deque>
#include <iostream>
#include <vector>
using namespace std;

#define N 100

deque<int> que; //队列
bool vis[N]= {0};
//vector 模拟实现 邻接表

struct node {
    int tail;
    int w;
};

typedef vector<node> VNODE;

vector<VNODE> head(N);
//vector< vector<node> > head(N); //这样写也可以


void bfs(int s){
    //起点加入队列
    que.push_back(s);
	vis[s]=1;
    while(!que.empty()){ //队列非空
        int  _s = que.front(); que.pop_front();//取第一个数字
		cout << _s << " "; 
		int i;
		for(i=0;i<head[_s].size();i++){
			int tmp  = head[_s][i].tail;
			if(!vis[tmp]){
				vis[tmp] = 1;
				que.push_back(tmp);
			}
		}
    }
}
int main(){
    int n,m;
    cin >> n >> m;//读入
    int s,t,w;
    int i;
    for(i=1;i<=m;i++){
        cin >> s >> t >>w;
        node tmp = {t,w};
        head[s].push_back(tmp);
    }
    bfs(1);
    return 0;
}

```


## 用`<deque>`来写SPFA
