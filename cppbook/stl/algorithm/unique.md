## unique

`unique()`是$C++$标准库函数里面的函数，其功能是去除相邻的重复元素（只保留一个），所以使用前需要对数组进行排序.

`unique()`的参数:$[l,r)$,返回值:**最后一个不重复元素后面一个位置的指针**  
对于长度为n数组a，unique(a,a+n) - a返回的是去重后的数组长度


不是，它并没有将重复的元素删除，而是把重复的元素放到数组的最后面藏起来了

当把原长度的数组整个输出来就会发现：


```c
todo
```

输入:

```plaintext
10
1 2 9 1 2 9 8 7 6 8
```



