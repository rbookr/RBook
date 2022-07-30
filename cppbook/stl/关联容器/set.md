---
_id: "d48ec05a7e"
title: set
date: 2019-11-20 22:36
update: 2019-11-20 22:36
author: Rainboy
---




## set 容器

## set的操作

| 操作             | 含义                                         |
|------------------|----------------------------------------------|
| `set<T> s1`      | 定义空的s1                                   |
| `set<T> s2(s1)`  | 用s2初始化s1                                 |
| `set<T> s1<b,e)` | 使用迭代器来初始化s1                         |
| `s1.insert(val)` | 插入val,返回一个pair对象                     |
| `s1.count(Val)`  | 计算s1中值val的个数,0或1                     |
| `s1.find(val)`   | 查找val,返回指向val的迭代器,否则返回s1.end() |

## set的定义

```c
#include <iostream>
#include <string>
#include <vector>
#include <set>
using namespace std;

int main(){
    //定义一个空的set
    set<int> s1;

    //使用迭代器
    vector<int> ivec;
    int i;
    for(i=0;i<10;i++)
        ivec.push_back(i);
    set<int> s2(ivec.begin(),ivec.end());

    //s3是s2的副本
    set<int> s3(s2);
    return 0;
}
```

## set的使用

```c
#include <iostream>
#include <string>
#include <vector>
#include <set>
using namespace std;

int main(){
    //--- 插入
    set<string> set1; //空set
    set1.insert("the");
    set1.insert("name");

    //--- 获取
    //存在
    cout << "set1.find(\"the\"):" << (set1.find("the") != set1.end() )<< endl; 
    //不存在
    cout << "set1.find(\"thee\"):" << (set1.find("thee") != set1.end() )<< endl;

    //存在
    cout<< "set1.count(\"the\"):" << set1.count("the") << endl;
    //不存在
    cout<< "set1.count(\"thee\"):" << set1.count("thee") << endl;
    return 0;
}
```

set的insert操作

```c
```


## 样列题目

[描述]

输入要排除的单词,然后输入要记数的单词,不对排除单词记数


[代码]

```c
#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <set>
using namespace std;

int main(){

    set<string> excluted;
    map<string,int> word_count;
    string rm_word;

    //将排除的word 放入set中
    while(cin >> rm_word){
        if(rm_word == "stop")
            break;
        excluted.insert(rm_word);
    }

    string word;
    while(cin >> word){
        if( !excluted.count(word)){ //不在排除集合内
            ++word_count[word];
        }
    }

    //输出
    map<string,int>::iterator miter = word_count.begin();
    for(;miter != word_count.end();miter++){
        cout << miter->first<<":";
        cout << miter->second<< endl;
    }
    return 0;
}
```

```
1 2 3 stop
4 5 1
ctrl+z(手动输入)
```

输出

```
4:1
5:1
```

