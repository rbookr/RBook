## 说明

下面的脚本如果保存

如果说明是`alias`
TODO

## 快速创建in文件

通过我们写的代码时,会把样例数据创建成一个`in`文件,这样每次执行代码时
使用重定向`./1 < in` 就不会每次都输入数据了

怎么快速把剪切板的数据复制成文件呢

```bash
#!/bin/env bash
# 如果参数不存在那就是in
xsel -o -b > ${1-"in"}
```
把这个脚本存成`ci`

`ci == create in`

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

