

## 原型

```c
template <class InputIterator, class T>
   InputIterator find (InputIterator first, InputIterator last, const T& val);
```

**作用:**
查找范围内的值,返回[first,last)内的第一个值和val相等的迭代器.如果没有找到反回last迭代器

find的行为等同于下面的代码

```c
template<class InputIterator, class T>
  InputIterator find (InputIterator first, InputIterator last, const T& val)
{
  while (first!=last) {
    if (*first==val) return first;
    ++first;
  }
  return last;
}
```

## 特点

 - 可以运行在前面学习的所有容器上面
 - 依赖`==`操作符来判断元素是否相等


## 样列代码

```c
// find example
#include <iostream>     // std::cout
#include <algorithm>    // std::find
#include <vector>       // std::vector

int main () {
  // using std::find with array and pointer:
  int myints[] = { 10, 20, 30, 40 };
  int * p;

  p = std::find (myints, myints+4, 30);
  if (p != myints+4)
    std::cout << "Element found in myints: " << *p << '\n';
  else
    std::cout << "Element not found in myints\n";

  // using std::find with vector and iterator:
  std::vector<int> myvector (myints,myints+4);
  std::vector<int>::iterator it;

  it = find (myvector.begin(), myvector.end(), 30);
  if (it != myvector.end())
    std::cout << "Element found in myvector: " << *it << '\n';
  else
    std::cout << "Element not found in myvector\n";

  return 0;
}
```

输出:

```
Element found in myints: 30
Element found in myvector: 30
```

## 重载==
