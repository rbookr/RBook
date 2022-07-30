---
_id: "d5a7558560"
title: map
date: 2019-11-20 22:31
update: 2019-11-20 22:31
author: Rainboy
---



## map/multimap

 - map通常理解成**关联数组**
 - 使用平衡二叉树(红黑树)管理元素
 - 元素组成(key,value)
 - `#include <map>`
 - 根据元素的key自动对元素排序,根据key时行定位很快,根据value很慢
 - 不能直接改变key,可以使用 [] 存取元素
 - map中key不能相同,multimap中key可以相同

**注意:**map


## 操作

###  基本类型
| 操作                                                                     | 解释                                         |
|--------------------------------------------------------------------------|----------------------------------------------|
| map<T1,T2>::key_type                                                     | map容器中,用做索引的键类型                   |
| map<T1,T2>::mapped_type                                                  | map容器中,键所关联值的类型                   |
| map<T1,T2>::value_type                                                   | pair类型,first是key_type,second是mapped_type |


###  创建map

| 操作              | 解释                                  |
|-------------------|---------------------------------------|
| map c             | 空的map                               |
| map c1(c2)        |                                       |
| map c(op)         | 以op为排序准则产生一个空的map         |
| map c(beg,end)    | 用[beg,end)创建一个map                |
| map c(beg,end,op) | 以op为准则,以区间[beg,end)产生一个map |
| ～map()           | 删除并销毁元素                        |

###  基本操作

| 操作            | 解释                   |
|-----------------|------------------------|
| c.size()        | 返回元素的个数         |
| c.empty()       | 是否为空               |
| c.max_size()    | 返回元素的最大可能数量 |
| ==,!=,<,<=,>,>= | 逻辑运算               |

###  赋值

| 操作                                                                     | 解释                            |
|--------------------------------------------------------------------------|---------------------------------|
| c1 = c2                                                                  | 将c2里的元素给c1                |
| c1.swap(c2)                                                              | 交换                            |
| swap(c1,c2)                                                              | 交换                            |

###  特殊操作

| 操作                                                                     | 解释                            |
|--------------------------------------------------------------------------|---------------------------------|
| count(key)                                                               | 返回等键值=key的元素个数        |
| find(key)                                                                | 键=key的第一个元素,要不返回end  |
| lower_bound(key)                                                         | 键>=key的第一个元素,要不end     |
| upper_bound(key)                                                         | 键>key的第一个元素,要不end      |
| equal_range(key)                                                         | 键=key的元素区间                |

###  迭代器相关

| 操作                                                                     | 解释                            |
|--------------------------------------------------------------------------|---------------------------------|
| begin()                                                                  | 第一个元素                      |
| end()                                                                    | 最后一个元素的后面              |
| rbegin()                                                                 | 逆向第一个元素                  |
| rend()                                                                   | 逆向最后一个元素的后面          |

###  插入

| 操作                                                                     | 解释                            |
|--------------------------------------------------------------------------|---------------------------------|
| c.insert(pos,e)                                                          | 在pos前插入e的拷贝,返回新的位置 |
| c.insert(e)                                                              | 插入e,返回新的位置              |
| c.insert(beg,end)                                                        | 插入[beg,end)内的所有元素       |

###  删除

| 操作             | 解释 |
|------------------|------|
| c.erase(pos)     |      |
| c.erase(val)     |      |
| c.erase(beg,end) |      |
| c.clear()        |      |


## map对象的定义

```c
#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main(){
    map<string,int> m;
    m["Tom"] = 16;
    map<string,int> m1(m);
    int i;
    vector<pair<string,int> > vec;
    for(i=0;i<10;i++){
        string s;
        s[0] = i;
        vec.push_back(make_pair(s,i));
    }

    map<string,int> m2(vec.begin(),vec.end());

    return 0;
}
```

### 键类型约束

使用关联容器的时候,它的键不仅要有一个类型,且这种类型比较函数,默认的情况下,标准库使用`<`做来实现键的比较.

**键类型必须定义`<`操作符**

## map容器的迭代器的解引用

 - 学会解引用map迭代器
 - 知道不能修改key的值
 - 学会使用typedef

```c
#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main(){
    map<string,int> m;
    m["Tom"] = 16;
    cout << "m[\"Tom\"]:" << m["Tom"] << endl;

    typedef map<string,int> mt;
    mt::iterator map_it = m.begin();
    // 相当于 map<string,int>::iterator map_it = m.begin();

    cout << "map_it->first:" << map_it->first << endl;
    cout << "map_it->second:" << map_it->second << endl;

    //改变值
    //map_it->first = "new key"; //error ,key is const
                                 // 不能改变下标的值
    ++(map_it->second); //ok
    cout << "map_it->second:" << map_it->second << endl;
    return 0;
}
```

## 给map添加元素:下标法

我们可以使用两种方法给map容器添加元素:**(1.)**:使用map的`insert`成员函数.**(2.)**使用下标操作符.但注意:一个键只能对应一个元素


**样列**

```c
#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main(){
    map<string,int> m;
    m["Tom"] = 16;      // 添加元素1
    cout << "m[\"Tom\"]:" << m["Tom"] << endl;

    return 0;
}
```
下标添加元素的过程:

 - 在m中查找键为Tom的元素,没有找到
 - 将一个新的`键-值`对插入到m中,
     - 它的键是`const string`类型
     - 它的值使用值(0)初始化
 - 读取新插入的元素,将它的值赋为16

**统计单词个数**

使用下标添加元素,可以使程序非常简洁

```c
#include <iostream>
#include <string>
#include <map>
using namespace std;
int main(){
    map<string,int> word_count;
    string word;
    while(cin >> word)
        ++word_count[word];
    return 0;
}
```

程序含义:如果word在word_cout中不存在,那么就在map中添加这个元素,同时它的值初始化为1(int型默认),然后立刻+1

## 给map添加元素:insert

```c
#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main(){
    map<string,int> m;
    m.insert(map<string,int>::value_type("Tome",16));

    //相当于
    m.insert(pair<string,int>("Tom2",16));

    //简化一点
    m.insert(make_pair("Jerry",16));

    //使用typedef

    typedef map<string,int>::value_type valType;
    m.insert(valType("penpen",16));
    return 0;
}
```

### insert 的返回值

map中一个给定的键只对应一个元素,

如果要插入的元素的键值已经在容器中,则`insert`不做任何操作.

带有键-值pair形参的insert版本将返回一个值:包含一个迭代器(指向map中的相应元素)和一个bool值(是否插入该元素)的pair对象.

例子:

```c
#include <iostream>
#include <map>
using namespace std;

int main(){
    map<string,int> word_count;

    //先插入一个
    word_count.insert(make_pair("Tom",16));

    //重复插入一个键已经存在的元素
    pair<map<string,int>::iterator,bool> ret = word_count.insert(make_pair("Tom",17));
    cout << "ret.second:" << ret.second << endl; // false 表示没有插入进去

    //迭代器指向map容器中的元素
    cout << "ret.first->first:" << (ret.first->first)  << endl; // false 表示没有插入进去
    cout << "ret.first->second:" << (ret.first->second)  << endl; // false 表示没有插入进去

    cout << endl;
    //插入一个键不存在的元素
    pair<map<string,int>::iterator,bool> ret1 = word_count.insert(make_pair("Jerry",17));
    cout << "ret1.second:" << ret1.second << endl; // true 表示插入进去

    //迭代器指向map容器中的元素
    cout << "ret1.first->first:" << (ret1.first->first)  << endl; // false 表示没有插入进去
    cout << "ret1.first->second:" << (ret1.first->second)  << endl; // false 表示没有插入进去
    return 0;
}

```

**改进后的word_count程序:**

```c
#include <iostream>
#include <string>
#include <map>
using namespace std;

int main(){
    map<string,int> word_count;
    string word;

    while(cin >> word){
        pair<map<string,int>::iterator,bool> ret =
            word_count.insert(make_pair(word,1));
        if(!ret.second) //已经存在
            ++ret.first->second;
    }
    return 0;
}
```
## 查找并读取map中的元素

我们可以使用下标操作来取值.

```c
int occ = word_count["foobar"]
```
但是这里有一个很大副作用:如果这个键不在map中,就会插入一个新的元素.


我们可以使用`map.count`,`map.find`来查检某个健是不是存在.

```c
#include <iostream>
#include <string>
#include <map>
using namespace std;

int main(){
    map<string,int> word_count;
    word_count.insert(make_pair("Tom",16));
    word_count["Jerry"] = 17;

    //返回数量
    cout << "word_count.count(\"Tom\"): " << word_count.count("Tom") <<endl;
    //返回迭代器
    cout << "word_count.find(\"Jerry\"): " << word_count.find("Jerry")->second <<endl;
    return 0;
}
```

## 删除map的元素

```c
#include <iostream>
#include <string>
#include <map>
using namespace std;

int main(){
    map<string,int> word_count;
    word_count.insert(make_pair("Tom",16));
    word_count["Jerry"] = 17;

    //使用键来删除
    cout << "word_count.erase(\"Tom\"): " << endl;
    word_count.erase("Tom");
    cout << "word_count.count(\"Tom\"): " << word_count.count("Tom") <<endl;

    //使用迭代器来删除
    map<string,int>::iterator ite =  word_count.find("Jerry");
    cout << "word_count.erase(ite): " << endl;
    word_count.erase(ite);
    cout << "word_count.count(\"Jerry\"): " << word_count.count("Jerry") <<endl;
    //没有找到,迭代器 为 end
    cout << "word_count.find(\"Jerry\"): " << (word_count.find("Jerry") == word_count.end() )<<endl;
    return 0;
}
```

## map中元素遍历

```c
#include <iostream>
#include <string>
#include <map>
using namespace std;

int main(){
    map<string,int> word_count;
    word_count.insert(make_pair("Tom",16));
    word_count["Jerry"] = 17;

    //遍历
    map<string,int>::iterator ite = word_count.begin();
    for(;ite != word_count.end();ite++){
        cout << "first: " << ite ->first << endl;
        cout << "second: " << ite ->second << endl;
        cout << endl;
    }
    return 0;
}
```
