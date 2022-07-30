
## 什么是STL

> STL = Standard Template Library，标准模板库，惠普实验室开发的一系列软件的统称。它是由Alexander Stepanov、Meng Lee和David R Musser在惠普实验室工作时所开发出来的。从根本上说，STL是一些“容器”的集合，这些“容器”有list,vector,set,map等，STL也是算法和其他一些组件的集合。这里的“容器”和算法的集合指的是世界上很多聪明人很多年的杰作。STL的目的是标准化组件，这样就不用重新开发，可以使用现成的组件。STL现在是C++的一部分，因此不用额外安装什么。  -- 百度百科


## Alexander Stepanov STL之父

Alexander Stepanov博士是adobe公司的首席科学家，也是标准模板库（STL）的创建者，在1995年获得了第一届Dr. Dobb程序设计杰出奖。

## 一个简答的使用STL的代码

```
/*
    最简单的STL的代码
*/
#include <cstdio>
#include <vector>
using namespace std;

int main(){

	//定义
	vector<int> vec;

	int i;
	for(i=0;i<1000;i++)//赋值 
		vec.push_back(i);
	
	vector<int>::iterator  ite;

	//输出1 STL风格
	for(ite=vec.begin();ite!=vec.end();ite++)
		printf("%d ",*ite);
	
	//输出2 我们常用风格
	for(i=0;i<1000;i++)
		printf("%d",vec[i]);
	
	return 0;
}

```


## STL六大组件

 - 容器（Container）
 - 算法（Algorithm）
 - 迭代器（Iterator）
 - 仿函数（Function object）
 - 适配器（Adaptor）
 - 空间配置器（allocator）


## STL常用算法：

```
accumulate() 元素累加
adjacent_difference() 相邻元素的差额
adjacent_find() 搜寻相邻的重复元素
binary_search() 二元搜寻
copy() 复制
copy_backward() 逆向复制
count() 计数
count_if() 在特定条件下计数
equal() 判断相等与否
equal_range() 判断相等与否（传回一个上下限区间范围）
fill() 改填元素值
fill_n() 改填元素值，n 次
find() 搜寻
find_if() 在特定条件下搜寻
find_end() 搜寻某个子序列的最后一次出现地点
find_first_of() 搜寻某些元素的首次出现地点
for_each() 对范围内的每一个元素施行某动作
generate() 以指定动作的运算结果充填特定范围内的元素
generate_n() 以指定动作的运算结果充填 n 个元素内容
includes() 涵盖於
inner_product() 内积
inplace_merge() 合并并取代（覆写）
iter_swap() 元素互换
lexicographical_compare() 以字典排列方式做比较
lower_bound() 下限
max() 最大值
max_element() 最大值所在位置
min() 最小值
min_element() 最小值所在位置
merge() 合并两个序列
mismatch() 找出不吻合点
next_permutation() 获得下一个排列组合
泛型演算法（Generic Algorithms）与 Function Obje4 cts
nth_element() 重新安排序列中第n个元素的左右两端
partial_sort() 局部排序
partial_sort_copy() 局部排序并复制到它处
partial_sum() 局部总和
partition() 切割
prev_permutation() 获得前一个排列组合
random_shuffle() 随机重排
remove() 移除某种元素（但不删除）
remove_copy() 移除某种元素并将结果复制到另一个 container
remove_if() 有条件地移除某种元素
remove_copy_if() 有条件地移除某种元素并将结果复制到另一个 container
replace() 取代某种元素
replace_copy() 取代某种元素，并将结果复制到另一个 container
replace_if() 有条件地取代
replace_copy_if() 有条件地取代，并将结果复制到另一个 container
reverse() 颠倒元素次序
reverse_copy() 颠倒元素次序并将结果复制到另一个 container
rotate() 旋转
rotate_copy() 旋转，并将结果复制到另一个 container
search() 搜寻某个子序列
search_n() 搜寻「连续发生 n 次」的子序列
set_difference() 差集
set_intersection() 交集
set_symmetric_difference() 对称差集
set_union() 联集
sort() 排序
stable_partition() 切割并保持元素相对次序
stable_sort() 排序并保持等值元素的相对次序
swap() 置换（对调）
swap_range() 置换（指定范围）
transform() 以两个序列为基础，交互作用产生第三个序列
unique() 将重复的元素摺叠缩编，使成唯一
unique_copy() 将重复的元素摺叠缩编，使成唯一，并复制到他处
upper_bound() 上限
```
