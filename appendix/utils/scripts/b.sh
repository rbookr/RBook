#!/bin/env bash

# 如果参数不存在那就是1.cpp
code=${1-"1.cpp"}
echo $code

ext="${code##*.}"
if [ $ext == $code ]; then
    echo "没有后缀,后缀: ${code}.cpp" 
    code="${code}.cpp"
fi
ext="${code##*.}"

if [ $ext != "cpp" ]; then
    echo "不是cpp文件,不能编译,文件: ${code}"
    exit 1
fi

echo "=== 开始编译 ==="
g++ -g -o "${code%.*}" $code

# 取消下面的注释可以编译后并运行
# "{code%.*}" < in
