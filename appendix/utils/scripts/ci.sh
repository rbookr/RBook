#!/bin/env bash
# 如果参数不存在那就是in
xsel -o -b > ${1-"in"}
