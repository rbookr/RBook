# 仿函数 functional

```c
struct myclass {
  int operator()(int a) {return a;}
} myobject;
int x = myobject (0);           // function-like syntax with object myobject 
```

作为stl中算法模板函数的参数.

## 基础类模板

| 类型 | 含义 |
|------|------|
| unary_function |
| binary_function|

## operator类模板

### 计算操作

| 类型       | 含义 |
|------------|------|
| plus       | 加   |
| minus      | 减   |
| multiplies | 乘   |
| divides    | 除   |
| modulus    | 取模 |
| negate     | 取反 |


### 比较操作

| 类型 | 含义 |
|------|------|


### 逻辑操作

| 类型 | 含义 |
|------|------|


## 修改与转变函数


### 否认器

| 类型 | 含义 |
|------|------|
### 参数绑定器

### 转换器

| 类型 | 含义 |
|------|------|
## 有用的类型
| 类型 | 含义 |
|------|------|



## STL 中预定义好的仿函数


greater 的定义

```
#include <iostream>
#include <string>
#include <bitset>
#include <vector>
using namespace std;


template <class T> struct mygreater {
  bool operator() (const T& x, const T& y) const {return x>y;}
  typedef T first_argument_type;
  typedef T second_argument_type;
  typedef bool result_type;
};


int main(){
    mygreater<int> gr;
    bool ys = gr(1,2);
    cout << ys << endl;
    return 0;
}
```

常规使用`greater<>`

```
#include <iostream>
#include <string>
#include <bitset>
#include <vector>
#include <algorithm>
using namespace std;

int a[] = {1,2,3,3,2,1};

struct _s {
    int a;
}s[100];

void print(vector<int> xx){
    vector<int>::iterator iter;
    for(iter = xx.begin();iter != xx.end();iter++){
        cout << *iter << " ";
    }
    cout << endl;
}
int main(){
    
    vector<int> b1(a,a+sizeof(a)/sizeof(a[0]));
    print(b1);
    
    sort(b1.begin(),b1.end());
    print(b1);
    greater<int> t;
    sort(b1.begin(),b1.end(),t);
    //sort(b1.begin(),b1.end(),greater<int>());
    //sort(s,s+100); 报错
    //sort(s,s+100,t); 报错
    
    print(b1);
    return 0;
}
```


### 算术类

除了否定为一元，其他都为二元仿函数。

| 名字 | 实现            |
|------|-----------------|
| 加法 | `plus<T>`       |
| 减法 | `minus<T>`      |
| 乘法 | `multiplies<T>` |
| 除法 | `divides<T>`    |
| 求余 | `modulus<T>`    |
| 否定 | `negate<T>`     |

### 关系运算类

都是二元仿函数。

| 名字     | 实现               |
|----------|--------------------|
| 等于     | `equal_to<T>`      |
| 不等于   | `not_equal_to<T>`  |
| 大于     | `greater<T>`       |
| 大于等于 | `greater_equal<T>` |
| 小于     | `less<T>`          |
| 小于等于 | `less_equal<T>`    |

### 逻辑运算类

与和或为二元仿函数，否为一元仿函数。


| 名字 | 实现             |
|------|------------------|
| 与   | `logical_and<T>` |
| 或   | `logical_or<T>`  |
| 否   | `logical_not<T>` |

