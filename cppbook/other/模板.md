---
_id: "e03bed56cc"
title: 模板
date: 2020-10-30 21:00
update: 2020-10-30 21:00
author: Rainboy
video: "https://www.bilibili.com/video/BV1854y1672t/"
titleEmojiTag: ":tv:"
---

@[toc]

## 函数模板
想一想`std:max`为什么可以接受不同类型的参数？我们自也可以利用函数重载来实现多个类型的Max。

```c
#include <bits/stdc++.h>
using namespace std;


int Max(int a,int b){
    return a> b? a :b;
}

double Max(double a,double b){
    return a> b? a :b;
}

long long Max(long long a,long long b){
    return a> b? a :b;
}

int main(){
    return 0;
}
```

可以使用模板函数来避免写多次

## 定义

```c
template <typename type> ret-type func_name(parameter list use type)
{
   // 函数的主体
}
```

例子：

```c
#include <bits/stdc++.h>
using namespace std;

template <typename T>
T Max(T a,T b){
    return a >b ? a :b;
}

int main(){
    //告诉c++编译器哪个类型
    cout << Max<char>('a','b') << endl;
    //c++编译器自动推断类型
    cout << Max(1,2) << endl;
    cout << Max(1.0,2.2) << endl;
    return 0;
}
```

模板不仅可以指定类型，还可以指定数值

```c
/* author: Rainboy  email: rainboylvx@qq.com  time: 2020年 11月 25日 星期三 14:21:30 CST */
#include <bits/stdc++.h>
using namespace std;

template<int m=5>
int foo(){  //重载无法实现
    return m;
}

int main(){
    int a = foo(); // 默认是5
    printf("%d\n",a);
    int b = foo<6>(); //指定是6
    printf("%d\n",b);

    return 0;
}
```

## 类模板

如果你学过`vector`，那么你很熟悉这种定义`vector<int> v`。变量`v`本质是一个类，我们可以自己实现一个类似的。

```c
/* author: Rainboy  email: rainboylvx@qq.com  time: 2020年 11月 25日 星期三 14:21:30 CST */
#include <bits/stdc++.h>
using namespace std;
template<typename T>
struct myvector {
    T a[100];
    size_t idx=0;
    void push_back(T v){
        a[idx++] = v;
    }
    T operator[](size_t i){
        return a[i];
    }
};

myvector<int>    v1;
myvector<double> v2;

int main(){
    for(int i=1;i<=10;++i){
        v1.push_back(i);
        v2.push_back(i*1.1);
    }
    for(int i=0;i<=v1.idx-1;++i){
        cout << v1[i] << " ";
    }
    cout << endl;

    for(int i=0;i<=v1.idx-1;++i){
        cout << v2[i] << " ";
        //printf("%lf ",v2[i]);
    }
    cout << endl;

    return 0;
}
```

也可以利用带值的模板参数，来指定数组的大小，但指定的大小只能是常量表达示。


```c
/* author: Rainboy  email: rainboylvx@qq.com  time: 2020年 11月 25日 星期三 14:21:30 CST */
#include <bits/stdc++.h>
using namespace std;
template<typename T,int size>
struct myvector {
    T a[size > 0 ? size : 1];
    size_t idx=0;
    void push_back(T v){
        a[idx++] = v;
    }
    T operator[](size_t i){
        return a[i];
    }
};

myvector<int,100>    v1;
myvector<double,20> v2;

int main(){
    for(int i=1;i<=10;++i){
        v1.push_back(i);
        v2.push_back(i*1.1);
    }
    for(int i=0;i<=v1.idx-1;++i){
        cout << v1[i] << " ";
    }
    cout << endl;

    for(int i=0;i<=v1.idx-1;++i){
        cout << v2[i] << " ";
        //printf("%lf ",v2[i]);
    }
    cout << endl;

    return 0;
}
```
