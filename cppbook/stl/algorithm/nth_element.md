---
title: nth_element
date: 2019-12-05 00:11
update: 2019-12-05 00:11
author: Rainboy
---

## 用法

```c
nth_element(first,kth,end)
```

first,end 第一个和最后一个迭代器
kth 要定位的第k个元素,能对它进行随机访问

将第kth元素放到它该放的位置,左边元素都小于等于它,右边的元素都大于等于它

空间复杂度O(1),
时间复杂度O(n)


```c
#include <cstdio>
#include <algorithm>
using namespace std;

int main(){
    int a[15] = { 0,1,2,5,7,3,4,1};
    nth_element(a+1,a+4,a+8);
    int i;
    printf("nth_element 4th:\n");
    for(i=1;i<=7;i++){
        printf("%d ",a[i]);
    }
    printf("\n");
    printf("4th element: %d\n",a[4]);
    sort(a+1,a+8);
    printf("sorted:\n");
    for(i=1;i<=7;i++){
        printf("%d ",a[i]);
    }
    printf("\n");
    return 0;
}


```
