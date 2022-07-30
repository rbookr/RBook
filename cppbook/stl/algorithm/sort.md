# sort


stl算法中的sort内部有三种排序`快速排序`,`插入排序`,`堆排序`.当数据量大时采用Quick Sort，分段递归排序，一旦分段后的数据量小于某个门槛，为避免Quick Sort的递归调用带来过大的额外负荷，就改用Insertion Sort。如果递归层次过深，还会改用Heap Sort

stl中的sort对三种排序算法进行综合,形成---Introspective Sorting(内省式排序)。

一般而言sort要比我们手写的qsort要快上很多

如果要对`list`进行排序,用`list`自带的`sort`,`list.sort`


## sort的原型

默认:
```c
template <class RandomAccessIterator>
  void sort (RandomAccessIterator first, RandomAccessIterator last);
```

带比较函数:
```c
template <class RandomAccessIterator, class Compare>
  void sort (RandomAccessIterator first, RandomAccessIterator last, Compare comp);
```

## sort样列

```c
#include <iostream>     // cout
#include <algorithm>    // sort
#include <vector>       // vector
using namespace std;

bool myfunction (int i,int j) { return (i<j); }

struct myclass {
  bool operator() (int i,int j) { return (i<j);}
} myobject;

int main () {
  int myints[] = {32,71,12,45,26,80,53,33};
  vector<int> myvector (myints, myints+8);               // 32 71 12 45 26 80 53 33

  // 使用默认 (operator <):
  sort (myvector.begin(), myvector.begin()+4);           //(12 32 45 71)26 80 53 33

  // 使用函数
  sort (myvector.begin()+4, myvector.end(), myfunction); // 12 32 45 71(26 33 53 80)

  // 使用对象
  sort (myvector.begin(), myvector.end(), myobject);     //(12 26 32 33 45 53 71 80)


  // 对数组进行排序
  sort(myints,myints+8);     //(12 26 32 33 45 53 71 80)

  // 输出
  cout << "myvector contains:";
  for (vector<int>::iterator it=myvector.begin(); it!=myvector.end(); ++it)
    cout << ' ' << *it;
  cout << '\n';

  return 0;
}
```

## sort的参数原理

当函数名作为`typename`里传递的是函数指针类型.

```c
#include <iostream>
using namespace std;

template<typename _Compare>
void __sort__(_Compare __com){
    int a;
    int b;
    a =1;
    b=2;
    bool res = __com(a,b);
    cout << "res:" << res << endl;
}

bool comp(const int &a,const int &b){
    return a<b;
}

int main(){
    bool (*comp_point)(const int &,const int &) = comp;
    int x=1,y=2;
    bool res11 = comp_point(x,y);
    __sort__(comp);
    return 0;
}
```

我们再看看仿函数作为参数:

```c
#include <iostream>
using namespace std;

template<typename _Compare>
void __sort__(_Compare __com){
    int a;
    int b;
    a =1;
    b=2;
    bool res = __com(a,b);//调用重载的()
    cout << "res:" << res << endl;
}

struct comp{
    bool operator()(const int &a,const int &b)const{
        return a<b;
    }
};

int main(){
    int x=1,y=2;
    comp xxx; //定义一comp类型的xxx,并调用构造函数
    __sort__(comp()); //comp():声明一个匿名的comp类型数据
    __sort__(xxx); // 本质和上面的一样
    return 0;
}
```


## 引用

 - [STL sort源码剖析](http://www.cnblogs.com/imAkaka/articles/2407877.html)
