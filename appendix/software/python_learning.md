---
_id: "e1f1364ada"
title: python_learning
date: 2022-09-26 23:24
update: 2022-09-26 23:24
author: Yuzume
---

# Python学习笔记

学学python,对写题目是极好的

本文件作者是: [Yuzume学长](yuzume.moe)

## 一.Python代码基础

### 1.输入输出

#### (1).输入

在Python3.X中，输入方式有如下两种:

```python
n=input()
import sys
n=sys.stdin.readline()
```

其中,input()可以接收任意值，在没有条件约束的情况下，默认将读入的值按照字符串处理，并储存为string类型

```
n=input()
print(type(n))

'''
Input:
1
Output:
<class 'str'>
'''
```

要想修改读入的数据的类型，可以在其读入时通过类型转换改变其类型，例如

```python
eval(input()) #默认改变，数值为float类型
int(input()) #读入整型
float(input()) #读入浮点型
input().split(["[chra]"]) #接收多个输入值。其中，可以根据读入字符串中的特定元素进行切分

#eg1：a b c d
n=input().split()
print(n)

'''
Input:
a b c d
Output:
['a', 'b', 'c', 'd']
'''

#eg2：a,b,c,d
n=input().split(",")
print(n)

'''
Input:
a,b,c,d
Output:
['a', 'b', 'c', 'd']
'''
```

#### (2).输出

不同于c++中scanf()繁杂的输出格式，python中的输出函数同cout，较为简单，无需考虑变量的类型。

```python
print("xxxx",a,sep="",end="")
```

其中，字符及字符串用引号包含，输出数据间连接符用sep填充。默认结尾为``"\n"``，可通过修改end来变换结尾符。

当然，也可以根据实际需求来进行格式化输出，其中格式化有如下两种方法.

##### ①基于数据类型利用 `%` 操作符输出

```python
print("%d" % 114514)
print("%04d %.3f" %(114514,11451.4))
'''
Output:
0000114514 11451.400
'''
```

##### ②基于format函数输出

```python
>>> print("{name} is {:b}".format(5, name="binary of 5"))
binary of 5 is 101
```

### 2.代码格式

Python的代码块不使用大括号{}来控制类，函数以及其他逻辑判断。其特点的就是用缩进来写模块。
即：**①没有严格的代码格式** 和 **②缩进行严格对齐**

#### 单行语句

同c++相比，python实现压行的效果较为复杂，其中可以用&;&将代码分开写在一行中

```python
if(True):print("啊对对对!");print("ahaihaihai!")
for i in range(1,10):print("啊对对对!");print("ahaihaihai!")
a=1;b=1;c=4 #结尾无字符
```

#### 多行语句

Python语句中一般以新行作为语句的结束符。但是可以使用斜杠（\）将一行的语句分为多行显示，如下所示：

```python
total = one + \
        two + \
        three
```

语句中包含 [], {} 或 () 括号就不需要使用多行连接符。如下实例：

```python
days = ['Monday','Tuesday',
        'Wednesday','Thursday',
        'Friday']
```

#### (2).代码注释

python中单行注释为( # )，多行注释为( ''' or """ )

```python
# 单行注释

'''
多行注释，使用单引号。
多行注释，使用单引号。
'''

"""
多行注释，使用双引号。
多行注释，使用双引号。
"""
```

### 3.数据类型

精度：整型->浮点数->复数 依次升高

#### (1)整型

#### (2)浮点型

#### (3)字符&字符串

Python 可以使用引号( ' )、双引号( " )、三引号( ''' or """ )来表示字符串，引号的开始与结束必须是相同类型的。

##### ①.给定一串英文字符串，按字典序排序

```python
s="asjdlakjdlsd"
l=list(s)
l.sort(reverse=True)#reverse=True表示逆序 默认为False
s="".join(l)
print(s)

'''
Output:
ssllkjjdddaa
'''
```

#### (4).类型转换

```python
int(x)                  #将x转换为一个整数  
int("x",[base])         #将[base]进制下的x转换为一个十进制整数 
long(x,[base])          #将x转换为一个长整数  
float(x)               #将x转换到一个浮点数  
complex(real [,imag])  #创建一个复数  
str(x)                 #将对象 x 转换为字符串  
repr(x)                #将对象 x 转换为表达式字符串  
eval(str)               #用来计算在字符串中的有效Python表达式,并返回一个对象  
tuple(s)               #将序列 s 转换为一个元组  
list(s)                #将序列 s 转换为一个列表  
chr(x)                 #将一个整数转换为一个字符  
ord(x)                 #将一个字符转换为它的整数值  
hex(x)                 #将一个整数转换为一个十六进制字符串  
oct(x)                 #将一个整数转换为一个八进制字符串  
```

##### ①.ASCii码与字符转化

1、将数字转化为字符：

```python
c=chr([num])#此处[num]为任意ASCii码表中数字
```

2、将字符转化为ASCii对应数字

```python
a=ord([char])#此处[char]为任意字符
```

## 二.常用函数库

众所周知，python是一个拥有众多函数库及拓展的高级程序设计语言，以其的简易性、通用性为人所知。而在c++中，一些需要手动编写的函数，在python中可以很简单被运用，例如：高精度 ~~(待补充~~

库的使用方式：

```python
import math #全部调用
from math * 
from math sqrt,cos #部分调用
from math as m #将math用m来表示，类似struct
```

### 1.math库

数学常量

```python
math().pi #圆周率π
math().e  #自然常数
math().inf #无穷大
```

常用数学函数

```python
abs(x) #负实数求绝对值 复数求模
max(x1,x2,...xn)
min(x1,x2,...xn)
round(x,[n]) #求x四舍五入的值，n为小数点后n位
pow(x,y,[mod]) #求x^y%mod
math.ceil(x)  #向上取整，如math.ceil(4.1) 返回 5
floor(x) #向下取整，如math.ceil(4.1) 返回 4
log(x) #以e为底的求对数 如math.log(math.e)返回1.0
log2(x) #以2为底
log10(x) #以10为底
sqrt(x) #返回x的平方根
modf(x) #返回x的整数部分与小数部分,两部分的数值符号与x相同，整数部分以浮点型表示。

```

随机数函数

```python
choice(seq) #从序列的元素中随机挑选一个元素，比如random.choice(range(10))，从0到9中随机挑选一个整数。
randrange([start,] stop[,step]) #从指定范围内，按指定基数递增的集合中获取一个随机数，基数默认值为 1
random()  #随机生成下一个实数，它在[0,1)范围内。
seed([x]) #改变随机数生成器的种子seed。如果你不了解其原理，你不必特别去设定seed，Python会帮你选择seed。
shuffle(lst) #将序列的所有元素随机排序
uniform(x, y) #随机生成下一个实数，它在[x,y]范围内。
```

### 2.random库

```python
import random

print(random.randint(1,10))         #产生一个[1,10]间的int型随机数
print(random.random())              #产生一个[0,1]间的float型随机数
print(random.uniform(1.14,5.14))   #产生一个[1.14,5.14]间的float型随机数，区间可以不是整数
print(random.choice('nmsl'))    #从序列中随机选取一个元素
print(random.randrange(1,100,2) )   #生成从1到100的间隔为2的随机整数
```

### 3.turtle库

turtle库是Python语言中一个较为常用的绘制图像的函数库
turtle常用动作方法有:
`forward()/fd()`  forward(100) 前进100个像素
`backward()/back()` backward(100) 后退100个像素
`right()/rt()` right(90) 表示向右旋转90°
`left()/lt()` left(90) 表示向左旋转90°
`goto()/setpos()/setposition()` goto(x,y) 表示改变当前位置到(x,y)
`circle()` circle(100) 画半径为100圆, circle(100,180)画半径为100的半圆
`speed()` 表示画笔的移动速度, 参数取值范围为1~10

`pendown()/pd()/down()` pd()表示放下笔
`penup()/pu()/up()` pu()表示抬起笔
`pensize()` pensize(10)表示画出像素宽度
`color()` color("black")表示画出黑色的轨迹
`begin_fill()` begin_fill()表示填充色开始
`end_fill()` end_fill()表示填充色结束
`sillcolor()` fillcolor("red")表示填充为红色

```python
from turtle import *
from random import *
from math import *

def tree(n,l):
    pd()#下笔
    #阴影效果
    t = cos(radians(heading()+45))/8+0.25
    pencolor(t,t,t)
    pensize(n/3)
    forward(l)#画树枝
    if n>0:
        b = random()*15+10 
        c = random()*15+10 
        d = l*(random()*0.25+0.7) 
        right(b)
        tree(n-1,d)
        left(b+c)
        tree(n-1,d)
        right(c)
    else:
        right(90)
        n=cos(radians(heading()-45))/4+0.5
        ran=random()
        if(ran>0.7):
            begin_fill()
            circle(3)
            fillcolor('pink')
        pencolor("pink")
        circle(3)
        if(ran>0.7):
            end_fill()
        left(90)
        if(random()>0.7):
            pu()
            t = heading()
            an = -40 +random()*40
            setheading(an)
            dis = int(800*random()*0.5 + 400*random()*0.3 + 200*random()*0.2)
            forward(dis)
            setheading(t)
            pd()
            right(90)
            n = cos(radians(heading()-45))/4+0.5
            pencolor(n*0.5+0.5,0.4+n*0.4,0.4+n*0.4)
            circle(2)
            left(90)
            pu()
            t=heading()
            setheading(an)
            backward(dis)
            setheading(t)
    pu()
    backward(l)#退回
    
bgcolor(0.956,0.9255,0.9882)#设置背景色（把灰色换成淡紫色）
ht()#隐藏turtle
speed(0)#速度 1-10渐进，0 最快
tracer(0,0)
pu()#抬笔
backward(50)
left(90)#左转90度
pu()#抬笔
backward(300)#后退300
tree(12,100)#递归7层
```

## 三.数据结构

在学习python语法下的数据结构前，先了解python中的容器数据类型与使用方法，将会为学习数据结构带来很大的便利性。

### 1.数据类型

#### 1.1.序列

首先是序列。在数学上，序列是指被排成一列的对象。在Python中，序列是按照先后顺序将一组元素组织在一起。其中，序列中的每个元素都有一个和位置相关的序号，成为**索引（index）**。索引将提供指向存储在表的指定列中的数据值的指针，通过索引可以访问序列中的元素，进行相关处理。其中索引值从0开始!
在Python中，常见的序列类型有字符串、列表、元组，其中前两者较为常用。

##### 1.1.1.字符串

字符串是最简单但非常重要的数据类型，其**由0个或多个字符组成的有序字符序列**。

###### (1).字符串的创建

在Python中，可以通过预先创建空串或直接给字符串一个值来创建一个新的字符串(包含单个字符)；也可以通过str()函数来创建字符串，即把括号中的数据类型转为"string"类型。

```python
a="nm$l"
s="" #空串的创建
print(s) 
s1=a #相当于字符串赋值 把a="nm$l"的字符赋给s1
print(s1)
s2=a[0] #字符串可以看做成一个只由字符构成的数组/列表，每个字符在总串中都对应一个下标(即"索引"，记为index)，可以直接通过索引来选取字符
print(s2)
s+=a #字符串的直接相加，结果仍为字符串，这一点和c++中如出一辙
print(s)
s3=s
s4+=a[0] #字符串可以在末尾拼接上字符串也可以拼接上单个字符
print(s4)
s5=str(114514)
print(type(s5))
```

###### (2).字符串的操作

|   操作符   |   说明   |
| :--: | :--: |
|   s[i]    |  索引    |
| s[n1: n2:[x] ] | 切片([x]为步长) |
| s*n | 重复 |
| s1+s2 | 连接 |
| x (not) in s | 判断元素x是否在字符串中 |

①.索引
   对于字符串中的元素，可以通过索引来进行访问，在获取元素值的时候，只需要知道其索引(或称下标/index)即可。
   正向索引下标值为：0, 1, ... len(s)-1
   负向索引下标值为：-len(s), -(len(s)-1), ... -1

###### (3).字符串的应用

①字符串逆输出

```python
s="123"
print(s[::-1])
print(s[-1::-1])
```

②字符串翻转

```python
s="123"
s1="".join(list(reversed(s)))
print(s1)

'''
Output:321
'''
```

##### 1.1.2.列表

**列表** 是一个线性的表格数据结构, 在python中, list具有非常强大的功能, 它可以同时存储整型(int), 浮点型(float), 字符串(str) 三种类型的数据, 因此列表使用起来非常灵活

###### (1).列表的创建

```python
a1=[] # 创建一个空列表, 
a2=list() 

b=[114514,'nehaaaa',11.4514]
for i in b:
    print(type(i))
'''
Output:
<class 'int'>
<class 'str'>
<class 'float'>
'''
```

###### (2).列表的操作

列表是一个线性表, 可以通过`a.append(x)`在列表的尾部插入x, 此时`len(a)`的值增加 1

```python
a=[]
for i in range(10):
    a.append(i)
print(a)
b=a.copy() # 通过复制操作, 生成一个和 a 中元素完全一致的列表 b
print(b)
'''
Output:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
'''
```

更多的操作:

```python
a=[]
a.count(x) # 计算列表中 x 的数量, 可以当做计数器用
a.clear() # 清除列表中的所有元素
a.index(x[,i[,j]]) # 返回 x 在列表中的下标(idx), 查找范围为 [i,j)
a.insert(i,x) # 在列表下标为i的地方, 插入x
a.pop(i) # 删除列表下标为i的元素, a.pop() 默认删除列表最后一个元素
a.reverse # 列表翻转
a.sort(key=None,reverse=False) # 对列表中的元素进行排序, key是排序的规则, 默认为递增, 当reverse=True时为递减 
```

###### (3).列表的应用

列表可以模拟大多数线性表, 例如数组, 队列, 栈, 向量(vector) 等数据结构

**数组(array)/矩阵(matrix)**:
在c++/c/java中, 可以下面代码来创建一个数组(array)或矩阵(matrix)

```cpp
int a=[10];
```

而在python中, 不能直接进行创建, 但可以通过对列表的运用, 来模拟数组的使用

```python
a=[0 for i in range(11)] # 创建一个容量为[0-11], 大小为11, 且每个元素都是0的数组
# a[i] 表示数组中第i个元素

a2=[[0 for i in range(11)] for j in range(11)] # 创建一个二维数组
# a[i][j] 表示数组中位于[i,j]的元素

a3=[[[0 for i in range(11)] for j in range(11)] for k in range(11)] # 同样的道理, 可以创建三维数组
# a[i][j][k] 表示数组中位于[i,j,k]的元素
```

**队列(queue)**:
首先, 在我们了解到**队列(queue)**是一个先进先出的线性数据结构后, 可以得知, 第i个进入的元素, 将在第i次弹出操作后才能出队,
而在学习过python list的操作时, 我们发现可以通过`a.pop()` 与 `a.append()` 来模拟并维护队列
队列的操作有4个,分别为:
在队尾插入一个元素 `q.append(x)`
在队首删除一个元素 `q.pop(0)`
队列中元素的个数 `len(q)`
判断队列是够为空 `if(len(q)!=0)`

```python
q=[] # 创建一个空列表, 作为队列的基础容器
q.append(x) # 在队尾压入一个x, 模拟入队操作
size=q.len(a) # 可以用len(a)来表示队列中元素的数量
q.pop(0) # 因为队列是先进先出的数据结构, 同时q.pop()默认弹出尾部的元素, 所以这里使用q.pop(0)以弹出队首元素来模拟出队操作
```

**双端队列(deque)**
**双端队列(deque)**, 顾名思义为一个可以在队首/队尾插入或删除元素的队列。相当于是栈与队列功能的结合
双端队列的操作有6个,分别为:
在队尾插入一个元素 `dq.append(x)`
在队首删除一个元素 `dq.pop(0)`
在队首插入一个元素 `dq.insert(0,x)`
在队尾删除一个元素 `dq.pop()`
双端队列中元素的个数 `len(dq)`
判断双端队列是够为空 `if(len(dq)!=0)`
上面, 我们已经学习过队列的使用操作, 而双端队列仅仅在队列的操作上复杂了一点点

```python
dq=[] # 创建一个空列表, 作为双端队列的基础容器
dq.append(1) # 在队尾压入一个元素, 模拟入队操作
dq.append(2)
dq.insert(0,3) # 在队首添加一个元素
print(q)
'''
Output:
[3, 1, 2]
'''
```

**栈(stack)**
**栈(stack)**与队列相反, 是一个后进先出的线性数据结构, 又称LIFO表
栈的操作有4个,分别为:
在队尾插入一个元素 `st.append(x)`
在队尾删除一个元素 `st.pop()`
栈中元素的个数 `len(st)`
判断栈是够为空 `if(len(st)!=0)`

```python
st=[] # 创建一个空列表, 作为栈的基础容器
st.append(x) # 在队尾压入一个元素, 模拟入栈操作
st.pop()
```

通过对上面三种list模拟数据结构的观察, 可以发现栈的用法最简单接近c/c++ STL中的操作

##### 1.1.3.元组(turple)

元组与列表类似, 不同之处在于元组的元素不能修改; 元组使用小括号, 列表使用方括号
元组创建很简单, 只需要在括号中添加元素, 并使用逗号隔开即可

```python
tp=() # 创建空元组
tp1=(1,) # 当元组中只包含一个元素时，需要在元素后面添加逗号
```

同样, 作为一个线性表, 元组也可以通过"索引"来访问元组中的元素

```python
tp2 = (1, 2, 3, 4, 5, 6, 7)
print(tp2[0])
print(tp2[1:5])
'''
Output:
1
(2, 3, 4, 5)
'''
```

#### 1.2.映射-字典

字典是另一种可变的关联性容器, 可存储任意类型对象, 其储存模型与c++中map类似
字典的每个键值对包含 key:value (用冒号`:`分割)，每个键值对之间用逗号 `,` 分割
需要注意的是, 字典中的键是不可改变的, 但其对应的值是可以修改的
字典的创建

```python
d1={} # 创建空字典
d2=dict()
```

访问字典中的值:
对于一个字典, 可以直接通过`d.keys()`, `d.values()`, `d.items()`来输出字典中的元素

```python
a=[("Jan",31),("Feb",28),("Mar",31),("Apr",30),("May",31),("Jun",30),("Jul",31),("Aug",31),("Sep",30),("Oct",31),("Nov",30),("Dec",31)]
b=dict(a) # 将 a 转化成字典
c=b.keys()
d=b.values()
e=b.items()
print(c)
print(d)
print(e)
print(b['Jan'])
'''
Output:
dict_keys(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
dict_values([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
dict_items([('Jan', 31), ('Feb', 28), ('Mar', 31), ('Apr', 30), ('May', 31), ('Jun', 30), ('Jul', 31), ('Aug', 31), ('Sep', 30), ('Oct', 31), ('Nov', 30), ('Dec', 31)])
31
'''
```

修改字典中的值:
对于字典中任意键的元素, 可以通过修改 或 删除来达到更新其值的目的

```python
d={'name':'Tadokoro','age':'25'}
d['age']=24
d['sound']=114514 # 对于字典中没有的键值对, 会自动在后方添加一个新的键值对
print(d)
'''
Output:
{'name': 'Tadokoro', 'age': 24, 'sound': 114514}
'''
```

同样的, 也可以通过`del d['sound']`来删除 keys='sound'的键值对

```python
d={'name':'Tadokoro','age':'25','sound': 114514}
del d['sound'] # 若不指定删除的键 则会删除d整体 
print(d)
d.clear() # 清除字典中的所有元素
print(d)
'''
Output:
{'name': 'Tadokoro', 'age': '25'}
{}
'''
```

字典的排序

```python
a={"han":65,"wang":97,"ma":73,"xu":85,"yang":92}
b=sorted(a.items(),key=lambda a:a[1],reverse=True) # 通过选择key值对 keys() 或 values() 来进行排序, 其中a[0]表示keys() a[1]表示values()
c=dict(b)
print(c.keys())
'''
Output:
dict_keys(['wang', 'yang', 'xu', 'ma', 'han'])
'''
```

#### 1.3.集合

集合(set)是一个无序的不重复元素序列。
可以使用大括号`{ }`或者 `set()` 函数创建集合,
ps: 创建一个空集合必须用 `set()` 而不是 `{ }`, 因为`{ }`是用来创建一个空字典。

集合的基础操作
`len(st)` 获取集合中元素个数
`st.add(x)` 将元素x插入到集合中
`st.update(x)` 将list/turple/dict插入到集合中
`st.remove(x)` 将元素x从集合中删除 若元素不存在会进行报错!
`st.discard(x)` 而此删除操作不会报错

集合的创建

```python
st=set() # 创建一个空集
```

对于给定一个无序序列, 判断其中出现了多少个不同的数

```python
a=input().split(",")
st=set()
for i in a:
    if(not(i in st)):
        st.add(i)
print(len(st))
'''
Input : 
1,1,4,5,1,4,1,9,1,9,8,1,0
Output:
6
'''
```

#### lambda函数应用

```python
m=lambda x,y:x+y
```

$lambda$ 函数在排序中的应用

```python
a={"han":65,"wang":97,"ma":73,"xu":85,"yang":92}
b=sorted(a.items(),key=lambda a:a[1],reverse=True) # 通过选择key值对 keys() 或 values() 来进行排序, 其中a[0]表示keys() a[1]表示values()
```
