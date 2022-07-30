# STL 中算法

## 概述

STL中提供能在各种容器中通用的算法，比如插入，删除，查找，排序等。大约有70种标准算法。

算法就是一个个函数模板。

算法通过迭代器来操纵容器中的元素。许多算法需要两个参数，一个是起始元素的迭代器，一个是终止元素的后面一个元素的迭代器。比如，排序和查找

有的算法返回一个迭代器。比如 find() 算法，在容器中查找一个元素，并返回一个指向该元素的迭代器。

算法可以处理容器，也可以处理C语言的数组

## 特点

### 算法永不执行容器提供的操作

算法只依赖**迭代器**和**迭代器的操作**来实现.

## 算法分类

### 变化序列算法


> copy,remove,fill,replace,random_shuffle,swap等等会改变容器的算法

### 非变化序列算法：

adjacent-find, equal, mismatch,find ,count, search, count_if, for_each, search_n

以上函数模板都在`<algorithm>` 中定义

此外还有其他算法，比如`<numeric>`中的算法


copy ,remove,fill,replace,random_shuffle,swap, …..

会改变容器
非变化序列算法：
adjacent-find, equal, mismatch,find ,count, search, count_if, for_each, search_n
以上函数模板都在`<algorithm>` 中定义

此外还有其他算法，比如`<numeric>`中的算法


## 常用算法

## 排序

- sort
- stable_sort
- partial_sort
- is_sorted

## 二分查找

- binary_search
- lower_bound
- upper_bound


## 最大/最小值

- min
- max
- min_element
- max_element
- minmax_element

## 堆

- make_heap
- push_heap
- pop_heap
- sort_heap

- swap
- fill
- find
- copy
- for_each
- count
