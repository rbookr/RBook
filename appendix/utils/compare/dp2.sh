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
