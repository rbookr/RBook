# 对拍

## 1. 背景

做题目的时候,如果这个题目的只有样例通过,或只拿到部分的时候,我们需要一个数据,这个数据可以过标程或暴力但不能过过我们的代码,以此来找到我们代码中错误

## 2. 基础知识

`diff`命令的使用

`diff`命令的是linux自带的命令,它可以比较两个文本文件的不同

首先创建两个文件`1.txt`,`2.txt`,内容如下

::: class code_line
```{3}
1
2
3
4
5
```

```{3}
1
2
2
4
5
```
:::


[[ctrl]] + [[alt]] + [[t]],打开termial,输入下面的内容

```bash
diff 1.txt 2.txt
```

那么这个输出格式是什么意思呢

得到结果

```plaintext
3c3
< 3
---
> 2
```

`c`表示`change`,`3c3`表示`1.txt`的第3行和`2.txt`的第3行对比,有**改变**

具体解释见 [diff命令输出格式解读\_车子 chezi的博客-CSDN博客\_diff 输出](https://blog.csdn.net/longintchar/article/details/51174332#:~:text=%E7%94%B1%E4%BA%8E%E5%8E%86%E5%8F%B2%E5%8E%9F%E5%9B%A0%EF%BC%8Cdiff%E6%9C%89%E4%B8%89,%EF%BC%89%EF%BC%8C%E9%9C%80%E8%A6%81%E5%8A%A0%20%2Du%20%E9%80%89%E9%A1%B9)


你再尝试一下其它命令

```bash
# q -> quiet,安静模式,相同,什么也不输出
diff -q 1.txt 1.txt

# q -> quiet,安静模式,不相同,输出指明不同
diff -q 1.txt 2.txt

# y -> side by slide,并排输出

diff -y 1.txt 2.txt

# 指定宽度为30
diff -W 30 -y 1.txt 2.txt

# 只输出不同的行
diff --suppress-common-lines -y 1.txt 2.txt
```

终极杀招`vimdiff`

```bash
vimdiff 1.txt 2.txt
```

`vimdiff`具有下面的优点

- 命令简单
- 显示完美
  - 相同的行会折叠
  - 不相同的行会高亮

## 3. diff 返回的值

我们知道,我们写的c++代表的main函数都会return一个整数,同样diff命令在运行结束
后也会返回一个值. 那么怎么得到这个值呢?

```bash{2}
diff 1.txt 1.txt
echo $?
```

会输出`0`,表示diff的两个文件一样

----------------------

## 4. diff 命令的与`||`的拼接

```bash
diff -q 1.txt 1.txt || echo "yes"
```
我们知道 在c++,里`||`是逻辑或运行符号,那么这里是什么意思呢?

比较反直觉的是bash是如何判断一个程序运行的是否正确,如下

- 一个命令运行的返回值是0,bash认为是true,这个程序运行正确
- 一个命令运行的返回值是非0,bash认为是false,这个程序运行不正确

`||`的运算规则和c++里一样,`A || B`

---------------------

试一试下面的命令

```bash
# 不会输出yes
true || echo "yes"  

# 会输出yes
false || echo "yes"
```
- 如果A是true,不会执行B,因为整体`A || B`一定是true
- 如果A是false,会执行B

> The right side of && will only be evaluated if the exit status of the left side is zero (i.e. true). || is the opposite: it will evaluate the right side only if the left side exit status is non-zero (i.e. false).
>
> 参考: https://unix.stackexchange.com/a/24685

结论 只有diff执行失败时才会执行,`echo yes`



## 5. 创建shell对拍脚本

```bash
#!/bin/env bash
rand=myrand #假如你的数据生成的程序名 : myrand
my=1        #假如你的写的程序名 : 1
right=2     #假如一个一定正确的程序名 : 2
for i in {1..1000};do # 循环1000次
    echo $i #输出执行的次数
    ./$rand > rand.in            # 生成数据
    ./$my < rand.in > my.out     # 生成你的答案
    ./$right < rand.in > right.out # 正确的答案
    diff -q my.out right.out || exit 1 # 如果出错就退出
done
echo "all right"
```

```bash

# 复制后,下面的命令快速创建一个文件:

xsel -o -b > 1.sh

# 运行权限

chmod +x 1.sh

# 运行

./1.sh
```


**改进1**: 能不能不要每一次写个代码就创建一次`1.sh`呢?

那你要做到:

1. 把脚本放到`PATH`目录里,可以全局使用这个命令
2. 使用脚本可以得到参数


```bash
#!/bin/env bash
my=$1       # 第一个参数指明: 你的程序的名字
right=$2    # 第二个参数指明: 对的程序的名字
rand=$3     # 第三个参数指明: 随机数据生成程序
for i in {1..1000};do
    echo $i
    ./$rand > rand.in
    ./$my < rand.in > my.out
    ./$right < rand.in > right.out
    diff -q my.out right.out || exit 1
done
echo "all right"
```


```bash
# 复制到文件里
xsel -o -b > dp.sh

# 给运行的权限
chmod +x dp.sh

# 放入到这个目录就可以执行了
sudo mv dp.sh /usr/bin
```

## 6 c++对拍程序

Q:因为我不熟悉`bash`脚本的编写,
,我比赛时无法记住上面的脚本,怎么办呢?

A:使用如下的c++代码

```cpp
#include <iostream>
using namespace std;

int main(){
    for(int i=1;i<=1000;++i){
        cout << i << "\n";
        // system 相当于手动执行一条命令
        system("./rand > rand.out");
        system("./my < rand.out > my.out");
        system("./right < rand.out > right.out");
        if( system("diff -q my.out right.out") != 0){
            cout << "error \n";
            return 1;
        }
    }
    cout << "all right\n";

    return 0;
}
```
