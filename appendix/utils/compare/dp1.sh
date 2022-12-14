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
