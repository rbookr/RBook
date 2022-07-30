# linux 的简单使用

## 切换桌面

| 功能     | 快捷键           |
|----------|------------------|
| 向右切换 | `ctrl-alt-right` |
| 向左切换 | `ctrl-alt-left`  |
| 打开终端 | `ctrl-alt-t`     |

## 文件系统

Windows的文件结构是多个并列的树状结构，最顶部的是不同的磁盘（分区），如：C，D，E，F等。
Linux的文件结构是单个的树状结构,其中`/`是**根目录**,家目录为`~`,本质上在`/home/<用户名>`下.

```
/
├── boot
├── data
├── dev
├── etc
├── home
├── mnt
├── opt
├── proc
├── root
├── run
├── srv
├── sys
├── tmp
├── usr
└── var
```

| 功能         | 命令 |
|--------------|------|
| 显示当前目录 | pwd  |


```bash
➜  ~ pwd
/home/noilinux
```

## 路径的切换

路径分为:

 - 相对路径,如:我家在小明家的旁边
 - 绝对路径,如:小明家在公园路13号

| 功能     | 命令       |
|----------|------------|
| 进入目录 | cd dirname |


```bash
cd ~ #进入家目录
mkdir code     #创建code文件夹
cd code        #进入code,相对
cd ..          #进入code的上一层
cd ~/code      #进入code,绝对
cd /home/noilinux/code #进入code,绝对
cd /           #进入根目录,绝对
```
## 其它命令

| 功能             | 命令               |
|------------------|--------------------|
| 创建一个空的文件 | touch filename     |
| 删除一个文件     | rm filename        |
| 创建一个文件夹   | mkdir dirname      |
| 删除一个文件夹   | rm -r dirname      |
| 复制一个文件     | cp srcfile cpfile  |
| 复制一个文件夹   | cp -r srcdir cpdir |
| 移动一个文件/夹  | mv src dst         |

## 编译命令

g++是编译器，gdb是调试工具。我们使用的GUIDE就是建立在这两个工具上面的,GUIDE支持直接操作gdb，但是很不好用

在Linux中，可以使用“终端”直接调用g++和gdb.

如果手动编译程序，输入:`g++ -g -o test test.cpp`

以下是g++常用的编译参数：

 -o：指定编译之后的程序名。如果不输入，程序就叫“a.exe”。
 -Wall：输出警告。
 -DDEBUG：编译时定义一个叫“DEBUG”的符号。
 -O1、-O2、-O3：优化。从1到3速度由慢到快。但“-O3”容易误解程序员意思。
 -g：产生调试符号。加入“-g”之后就可以用gdb直接调试程序。
 -lm：自动链接数学库。

