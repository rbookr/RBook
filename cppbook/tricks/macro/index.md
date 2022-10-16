
下面`macro`的意思代表宏

可以得到预处理后的结果

```bash
g++ -E 1.cpp
```

```cpp
#define _N_ARG_(_1,_2,_3,_4,_5,_6,N,...) N

// get 7
_N_ARG_(1, 2, 3, 4, 5, 6, 7, 8)
// get RAINBOY
_N_ARG_(1, 2, 3, 4, 5, 6, RAINBOY, 8)
```

可以用这个技巧得到macro参数的个数

`#` 表示：对应变量字符串化  

`##` 表示：把宏参数名与宏定义代码序列中的标识符连接在一起，形成一个新的标识符

```plaintext
##__VA_ARGS__ 会宏的参数原样摆放

#define EACH(F,...) (dumy,##__VA_ARGS__)


EACH(1,2,3,4,5,6)
```

宏的递归
