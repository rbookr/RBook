# 常用脚本

下面的脚本都是在Linux下使用

下面的脚本如果保存

如果说明是`alias`
TODO

## 1. ❗限制程序运行的时间

保存下面的程序为`1.cpp`

```cpp
#include <iostream>
#include <chrono>
#include <thread>
using namespace std;

# 函数的作用是 100ms 输出一名话
# 一共运行 1.5s
int main(){
    int i=0;
    while ( 1 ) {
        using namespace std::chrono_literals;
        std::this_thread::sleep_for(100ms);
        std::cout << "sleep " << ++i << " ms" << std::endl;
        if( i == 15 ) break;
    }
    return 0;
}
```
  
编译这个程序
```bash
g++ -g -o 1.out 1.cpp
```

限制一个程序运行的时间

```bash
# 限制1.out运行的时间1s
timeout 1s 1.out
```

根据[对拍](../compare/index.md)的对于`||`的讲解,
加上一个输出,当超时时显示提示.

```bash
# 限制1.out运行的时间1s
timeout 1s 1.out || echo timeout
```

当然你如果想偷懒,不想写后面的`echo timeout`, 你可以这样写,加上一个`-v`参数

```bash
timeout -v 1s 1.out
```
如果超时,会出现最后一行

```plaintext{11}
sleep 1 ms
sleep 2 ms
sleep 3 ms
sleep 4 ms
sleep 5 ms
sleep 6 ms
sleep 7 ms
sleep 8 ms
sleep 9 ms
sleep 10 ms
timeout: 正在发送信号 TERM 至命令 "1.out"
```
如果把限制被改成`2s`,就不会有提示

```bash
timeout -v 2s 1.out
```

## !!自己测试数据

如果你在写一个题目,你也有这个题目的测试数据(多个),如何测试自己的题目是否能通过呢

假如,你在做题目,[a+b问题](https://github.com/rainboyOJ/problems/blob/master/problems/1000/content.md),
[数据位置](https://github.com/rainboyOJ/problems/tree/master/problems/1000/data)

你写了一个代码如下

```cpp
#include <cstdio>
#include <cstring>

int a,b;

int main(){
    scanf("%d %d",&a,&b);
    printf("%d\n",a+b);
    return 0;
}
```

复制下面的命令到终端里,下载数据

```bash
mkdir data
prefix="https://ghproxy.com/"
for i in {1..10}; do
    wget -O data/problem${i}.in ${prefix}https://github.com/rainboyOJ/problems/blob/master/problems/1000/data/problem${i}.in
    wget -O data/problem${i}.out ${prefix}https://github.com/rainboyOJ/problems/blob/master/problems/1000/data/problem${i}.out
done
```

你现在有一个`data`文件夹,里面有数据如下

```
data
├── problem10.in
├── problem10.out
├── problem1.in
├── problem1.out
├── problem2.in
├── problem2.out
├── problem3.in
├── problem3.out
├── problem4.in
├── problem4.out
├── problem5.in
├── problem5.out
├── problem6.in
├── problem6.out
├── problem7.in
├── problem7.out
├── problem8.in
├── problem8.out
├── problem9.in
└── problem9.out

0 directories, 20 files
```


## 快速创建in文件

通过我们写的代码时,会把样例数据创建成一个`in`文件,这样每次执行代码时
使用重定向`./1 < in` 就不会每次都输入数据了

怎么快速把剪切板的数据复制成文件呢

```bash
#!/bin/env bash
# 如果参数不存在那就是in
xsel -o -b > ${1-"in"}
```

`${1-"in"}`意思,如果你传递一个参数,例如`ci myin`,那么会创建一个`myin`文件,
然后把剪切板里的写入到`myin`里,如果不提供一个参数,默认写入到`in`里

把这个脚本存成`ci`,因为`ci == create in`,


```
chmod +x ci
sudo mv ci /usr/bin
```
或者用这个命令安装

```bash
sudo wget -O /usr/bin/ci https://gitee.com/Rainboy/RBook/raw/master/appendix/utils/scripts/ci.sh
sudo chmod +x /usr/bin/ci
```

也可以在`~/.bashrc`,当然哪果你用的是zsh,那修改`~/.zshrc`


```bash
ci() {
  xsel -o -b > ${1-"in"}
}
```
使用效果是一样的

## 复制文件内容

`co == copy ouput`

```bash
#!/bin/env bash
# 如果参数不存在那就是in
cat ${1-"1.cpp"} | xsel -i -b
```

```bash
sudo wget -O /usr/bin/co https://gitee.com/Rainboy/RBook/raw/master/appendix/utils/scripts/co.sh
sudo chmod +x /usr/bin/co
```

同理,也可以创建一个函数

```bash
co() {
  cat ${1-"1.cpp"} | xsel -i -b
}
```

## 快速编译

每一次编译都输入`g++ -g -o 1 1.cpp`,有没有快速的脚本呢?

极简脚本,可以比赛时用(如果你能记住)

```bash
<%- include("./simple_b.sh") _%>
```

复杂一点

```bash
<%- include("./b.sh") _%>
```


可以复制一个脚本安装到,`/usr/bin`

```
# 复制第一个脚本后

xsel -o -b > b
chmod + x b
sudo mv b /usr/bin

# 复制第一个脚本后
xsel -o -b > bb
chmod + x bb
sudo mv bb /usr/bin
```

使用

```
b a
# 相关于 g++ -g -o a a.cpp
# a可以替换成你的代码的名字

# 没有参数,默认编译1.cpp
bb

# 带不带后缀都可以
bb a
bb a.cpp
```

参考: [使用shell脚本判断文件后缀的方法实例\_LINUX\_操作系统 - 编程客栈](http://www.cppcns.com/os/linux/464280.html)


有没有更强大的编译脚本呢?

我平常用的脚本

https://github.com/RainboyNoip/algorithms/blob/master/bin/b

如何打不开,用这个链接 

https://ghroxy.com/https://github.com/RainboyNoip/algorithms/blob/master/bin/b

怎么用:TODO

## 说明

我常用的脚本在这里

https://github.com/RainboyNoip/algorithms/tree/master/bin

## dot2png

TODO

## in2dot

输入数据(图或树)转成可视化图
TODO

## oi-show.py

展示输入文件INPUT 的内容 并输出 程序1 说程序2 的运行结果

TODO


