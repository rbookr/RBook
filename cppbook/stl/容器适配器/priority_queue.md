---
_id: "fd48ff6607"
title: priority_queue
date: 2019-11-20 22:36
update: 2019-11-20 22:36
author: Rainboy
---


https://blog.csdn.net/yuanjilai/article/details/8043157 很好

在默认的情况下,priority_queue 使用的是`<(less仿函数)`,来比较,但是默认实现的是大根堆: 也就是

```
1 < 2  ==> true
```

这个是比较


结论**当用于比较的仿函数返回true时,后面的优先级高,会在堆的上部**


sort 默认的情况下,使用的是`<(less仿函数)`,

结论**当用于比较的仿函数返回true时,前面的优先级高,会在排序的前部**

## priority_queue

### 代码1:默认

```c
#include <iostream>
#include <vector>
#include <string>
#include <queue>

using namespace std;
int a[] = {1,2,3,4,5};

int main(){
    priority_queue<int> pq;
    int i;
    for(i=0;i<sizeof(a)/sizeof(a[0]);i++){
        pq.push(a[i]);
    }
    // 1 < 2 true 
    // 返回值为 true 时 后面的权值高  
    while(!pq.empty()){
        cout << pq.top() << endl;
        pq.pop();
    }
    return 0;
}
```
### 代码2:使用仿函数

```c
#include <iostream>
#include <vector>
#include <string>
#include <queue>
using namespace std;

int a[] = {1,2,3,4,5};
struct myfunctional{
    bool operator()(const int &a,const int &b)const {
        return a > b;
    }
};


int main(){
    // 使用默认的functional
    //priority_queue<int,vector<int>,greater<int> > pq;
    // 使用自己编写的functional
    priority_queue<int,vector<int>,myfunctional > pq;
    int i;
    for(i=0;i<sizeof(a)/sizeof(a[0]);i++){
        pq.push(a[i]);
    }
    // 1 < 2 true 
    // 返回值为 true 时 后面的权值高  
    while(!pq.empty()){
        cout << pq.top() << endl;
        pq.pop();
    }
    return 0;
}
```



