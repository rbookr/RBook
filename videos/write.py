#!/usr/bin/env python
from functools import reduce
from itertools import chain
from random import randint
import subprocess
import os

# 读入所有的数据
#data = [ list(map(int,line.split())) for line in sys.stdin ]
# 读取所有内容
file_context = open("./1.txt").read().splitlines() 
txt2_file = open("./2.txt","a+")
txt2 = txt2_file.read().splitlines()


for i in file_context[len(txt2):]:
    print(i)
    response = subprocess.check_output(i, shell=True)
    out = response.decode('utf-8')
    print(out)
    txt2_file.write(out+'\n');


