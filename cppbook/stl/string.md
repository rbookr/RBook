---
_id: "0143129a8d"
title: string
date: 2020-11-27 15:03
update: 2020-11-27 15:03
author: Rainboy
video: ""
titleEmojiTag: ":tv:"
---


# string的使用

## string版的hello world

```cpp
#include <iostream>
#include <string>
using namespace std;

int main(){
    string s1("hello world 1");
    cout << s1 <<endl;
    string s2 = "hello world 2";
    cout << s2 <<endl;
    string s3;
    s3 = "hello world 3";
    cout << s3 <<endl;
    s3 = "hello world 4";
    cout << s3 <<endl;
    return 0;
}
```

## string对象的定义与初始化



| 操作               | 含义                     |
|--------------------|--------------------------|
| string s1          | 一个空的对象，长度为0    |
| string s2(s1)      | 将s2初始化为s1的副本     |
| string s3("value") | 将s3初始化为字面值的副本 |
| string s4(n,'c')   | s4为n个'c'的副本         |

## string的读入

每一次读到一个空格停止

```cpp
#include <string>
#include <iostream>
using namespace std;

int main(){
    string s1;
    cin >> s1;
    cout << s1 << endl;
}
```

## string的操作


### 常用操作

| 操作         | 含义                     |
|--------------|--------------------------|
| s.empty()    | 是否为空                 |
| s.size()     | 字符个数                 |
| s1+s2        | 拼接，返回一个新的字符串 |
| s1=s2        | 赋值                     |
| s1 == s2     | 是否相等                 |
| !=,<,<=,>,>= | 字典序比较               |


### 代码1

```cpp
#include <string>
#include <iostream>
using namespace std;

int main(){
    
    string s1;
    if( s1.empty())
        cout << "yes,empty"<<endl;
    //s1[1] ='c'; //下标操作：不能赋值给不存在的地方
    s1 = "new string str";//可以
    s1[1] ='c';//下标操作，ok
    return 0;
}
```

### 代码2

```cpp
#include <string>
#include <iostream>
using namespace std;

int main(){
    
    string s1(100,0);//初始化100个字符数值为0的字符串
    
    int i;
    for(i=0;i<100;i++)
        s1[i]= 'c';
    cout <<  s1 <<endl;
    
    string::size_type x;
    for(x=0;x<s1.size();x++)
        s1[x]='d';
    cout <<  s1 <<endl;

    return 0;
}
```

## ps

### string::size_type

表示的是一种无论string有多长,都能存个其长度的类型.

```c
#include <string>
#include <iostream>
using namespace std;

int main(){
    string::size_type len;
    string s1 = "hello world!";
    for(len=0;len<s1.size();len++)
        cout << s1[len] << endl;
    return 0;
}
```
