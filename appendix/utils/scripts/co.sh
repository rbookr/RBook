#!/bin/env bash
# 如果参数不存在那就是in
cat ${1-"1.cpp"} | xsel -i -b
