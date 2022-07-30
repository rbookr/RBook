---
_id: "8bf09d19ac"
title: pair
date: 2019-11-20 22:36
update: 2019-11-20 22:36
author: Rainboy
---




## pair类型

在学习关联容器之前,我们先学习一个简单的标准库类型:pair类型

## pair类型的操作


| 操作                    | 含义                                                                                   |
|-------------------------|----------------------------------------------------------------------------------------|
| `pair<T1,T2> p1`        | 创建一个空的pair对象,两个元素的类型是T1,T2,默认初始化                                  |
| `pair<T1,T2> p1(v1,v2)` | 创建一个pair对象,其中first初始化为v1,其中second初始化为v2                              |
| `make_pair(v1,v2)`      | 用v1,v2创建一个pair对象                                                                |
| `p1 < p2`               | 字典序比较:`p1.first<p2.first`或者`!(p2.first<p1.first)&&p1.second <p2.second`时为true |
| `p1 == p2`              | p1,p2的first 和second 都相等                                                           |
| `p1.first`              | 返回p1.first                                                                           |
| `p1.second`             | 返回p2.first                                                                           |


## pair创建与初始化

```c
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main(){
    //只定义,不初始化
    pair<string,string> foo;
    pair<string,int> anon;
    pair<string,vector<int> > bar;

    //初始化
    pair<string,int> anon1("xx",123);
    cout << "anon1:" << anon1.first<<" " << anon1.second << endl;
    pair<string,string> author("harry poter","JK.");
    cout << "author:" << author.first<<" " << author.second << endl;

    return 0;
}
```

## pair对象的操作

```c
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main(){
    //只定义,不初始化
    pair<string,string> foo;
    pair<string,int> anon;
    pair<string,vector<int> > bar;

    //操作
    // 1. 赋值
    foo = make_pair("123","456");
    pair<string,string> foo1 = foo;

    cout << " foo == foo1 :"<<(foo == foo1) << endl;
    cout << " foo < foo1 :"<<(foo < foo1) << endl;
    
    pair<int,int> p1(1,2);
    pair<int,int> p2(2,3);
    cout << " p1< p2:"<<(p1< p2) << endl; // true
    
    p2.first = 1;
    cout << "!(p2.first < p1.first) && p1.second < p2.second:"<< (!(p2.first < p1.first) && p1.second < p2.second) << endl; // true 想一想这代表什么意思
    cout << " p1< p2:"<<(p1< p2) << endl; // true

    return 0;
}
```

## 生成新的pair对象

```c
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int a[] = {1,2,3,4,5};

int main(){
    //只定义,不初始化
    pair<string,string> foo;
    pair<string,int> anon;
    pair<string,vector<int> > bar;

    //初始化
    pair<string,int> anon1("xx",123);

    pair<string,string> author("harry poter","JK.");

    //操作
    cout << author.first << endl;
    author.first = "bkb";
    cout << author.first << endl;

    //生成 pair对象
    typedef pair<string,string> bookAuthor;
    bookAuthor b1 = make_pair("jk","jk2");
    cout << b1.first <<" "<< b1.second <<endl;
    return 0;
}
```

## 小练习

### 练习1

编写程序读入一系列的string和int型数据,将每一组的数据存储在pair对象中,然后将这些pair对象存储在vector容器里

```c
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int a[] = {1,2,3,4,5};

int main(){
    typedef  pair<string,int> pt;

    vector<pt> vec;
    string s;
    int i;

    cout <<"ctrl + z stop input" << endl;
    while(cin >> s>> i){
        vec.push_back(make_pair(s,i));
    }

    vector<pt>::iterator iter = vec.begin();
    for(;iter != vec.end();iter++)
        cout << (*iter).first<< " " << (*iter).second << endl;
    return 0;
}
```

### 练习2

在前一个题目中,至少可以使用三种方法创建pair对象,编写三个版本的程序来创建pair对象.你认为哪一种方法更易于编写和理解,为什么?

