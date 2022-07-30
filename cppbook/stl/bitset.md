# bitset讲解

## bitset作用

快速的对一个变量的二进制的位集进行操作,类似`vector`,`bitset`是一种类模板.
bitset类型对象的区别在其长度不在其类型.在定义bitset的时候要明确含有多少位,给出长度值

样例代码


```c
#include <iostream>
#include <bitset>
#include <cstring>
using namespace std;

int main(){
    string s1 = "0101";
    bitset<10> b1(s1);
    cout << b1 << endl;
    b1.set(2)
    cout << b1 << endl;
    return 0;
}
```


## bitset的相关操作

### 定义与初始化

| 操作                 | 含义                              |
|----------------------|-----------------------------------|
| `bitset<n> b;`         | b有n位,每位为0                    |
| `bitset<n> b(u);`      | b是unsigned long 型u的一个副本    |
| `bitset<n> b(s);`      | b是string对象中含有位串的副本     |
| `bitset<n> b(s,pos,n)` | b是s中的从位置pos开始的n个位的副本 |
| `bitset<n> b1(b)`     | 用b初始化b1                       |

### bitset 对象上的操作

| 操作         | 含义                             |
|--------------|----------------------------------|
| `b.any()`      | b中是否存在为1的位               |
| `b.none()`     | b中是否不存为1的位               |
| `b.count()`    | b中1的个数                       |
| `b.size()`     | b的长度                          |
| `b[pos]`       | b中第pos位                       |
| `b.test(pos)`  | b中第pos位是否为1                |
| `b.set()`      | b全置1                           |
| `b.set(pos)`   | b中pos位置1                      |
| `b.reset()`    | b全置0                           |
| `b.reset(pos)` | b中pos位置0                      |
| `b.flip()`     | b中所有位取反                    |
| `b.flip(pos)`  | b中pos位取反                     |
| `b.to_ulong()` | b中位转化成一个usigned long 类型 |
| `os << b`      | 输出                             |

### bitset 支持位操作符号

```c
    bitset<4> foo (string("1001"));
    bitset<4> bar (string("0011"));

    cout << (foo^=bar) << endl;       // 1010 (foo对bar按位异或后赋值给foo)
    cout << (foo&=bar) << endl;       // 0010 (按位与后赋值给foo)
    cout << (foo|=bar) << endl;       // 0011 (按位或后赋值给foo)

    cout << (foo<<=2) << endl;        // 1100 (左移２位，低位补０，有自身赋值)
    cout << (foo>>=1) << endl;        // 0110 (右移１位，高位补０，有自身赋值)

    cout << (~bar) << endl;           // 1100 (按位取反)
    cout << (bar<<1) << endl;         // 0110 (左移，不赋值)
    cout << (bar>>1) << endl;         // 0001 (右移，不赋值)

    cout << (foo==bar) << endl;       // false (0110==0011为false)
    cout << (foo!=bar) << endl;       // true  (0110!=0011为true)

    cout << (foo&bar) << endl;        // 0010 (按位与，不赋值)
    cout << (foo|bar) << endl;        // 0111 (按位或，不赋值)
    cout << (foo^bar) << endl;        // 0101 (按位异或，不赋值)
```



## 通过代码学习bitset

### unsigned 初始化bitset

```cpp
#include <iostream>
#include <string>
#include <bitset>
using namespace std;

int main(){
    //正好
    bitset<16> b1(0xffff);
    cout << b1 << endl;//1111111111111111
    
    //超过 取低位
    bitset<16> b2(0x0000ffff);
    cout << b2 << endl;//1111111111111111

    //高位没有的取0
    bitset<32> b3(0xffff);
    cout << b3 << endl;
    //bit0-15 set 1; bit 16-31 set 0
    
    //可以设很大
    bitset<128> b4(0xffff);
    cout << b4 << endl;
    //bit 32-127 set 0
    
    int i = 123;
    bitset<32> b5(i);
    cout << b5 << endl;
    
    // 注意这里,为什么-1对应32个1
    i = -1;
    bitset<32> b6(i);
    cout << b6 << endl;
    return 0;
}
```


### string 初始化bitset

 - 从`string`对象读入位集的时候**从右到左**
 - string长度小于bitset位数时,biset高位为0
 - string长度大于bitset位数时,取string左边的一部分
 - 只用string的子串
    - 使用三个参数
    - 省略第三个参数
 
```cpp
#include <iostream>
#include <string>
#include <bitset>
using namespace std;

int main(){
    //从右向左读
    string s1("10");
    bitset<4> b1(s1);
    cout << b1 << endl;//0010
    
    //string长度小于biset位数时,biset高位为0
    string s2("11");
    bitset<4> b2(s2);
    cout << b2 << endl;//0011
    	
    //string长度大于biset位数时,取string左边的一部分
    string s3("01110101");
    bitset<4> b3(s3);
    cout << b3 << endl;//0111
    
    //只用string的子串
    string s4("11110101");
    //str[0] 开始的4个字符,包括str[0]
    bitset<8> b4(s4,0,4);
    cout << b4 << endl;//00001111
    
    //省略每三个参数,表示一直取到最后一个字符
    //s4[3]到s4[s4.size()-1]
    bitset<8> b5(s4,3);
    cout << b5 << endl;//00010101
    
    //取s4最后4位
    bitset<8> b6(s4,s4.size()-4);//
    cout << b6 << endl;//00000101
    return 0;
}
```



### 使用函数

```cpp
#include <iostream>
#include <string>
#include <bitset>
using namespace std;

int main(){
    
    bitset<32> b1;//32个0
    
    if( b1.any()) //是否有1,any:任何一个1 any 1
    	cout <<"exit 1"<< endl;
    else 
    	cout <<"all 0"<< endl;
    
    if( b1.none())//none:没有任何1
    	cout <<"all 0"<< endl;
    else 
    	cout <<"exit 1"<< endl;
    
    
    bitset<32> b2(0xf0);//32个0
    if( b2.any()) //any:任何一个1 any 1
    	cout <<"exit 1"<< endl;
    else 
    	cout <<"all 0"<< endl;
    
    if( b2.none())//none:没有任何1
    	cout <<"all 0"<< endl;
    else 
    	cout <<"exit 1"<< endl;
    
    cout <<"numbers of 1 in b2:" << b2.count() << endl;
    
    string s3("1100");
    bitset<4> b3(s3);
    bitset<4> b4(b3);//创建b3的副本
    
    cout << "b4" << b4 << endl;
    
    cout << "b3 is:" << b3 << endl;
    
    cout << "set():"<< b3.set() << endl;
    cout << "reset():"<< b3.reset() << endl;
    b3 = b4;
    cout << "now b3: "<< b3 << endl;
    cout << "b3.set(0): " << b3.set(0) << endl;
    cout << "b3.resset(3): " << b3.reset(3) << endl;
    cout << "b3.flip(): " << b3.flip() << endl;
    cout << "b3.flip(1): " << b3.flip(1) << endl;
    cout << "b3.to_ulong(): " << b3.to_ulong()<<endl;
    
    cout << "b3[0]: " << b3[0] << endl;
    cout << "b3[3]: " << b3[3] << endl;
    //下标操作
    b3[3] = 0;
    cout << "b3[3]: " << b3[3] << endl;
    
    //位操作符
    cout << "b3: " << b3 << endl;
    cout << "b4: " << b4 << endl;
    cout << "b3|b4: " << (b3 | b4) <<endl;
    cout << "b3 & b4: " << (b3 & b4) <<endl;
    cout << "b4 << 1: " << ( b4 << 1) << endl;
    cout << "b4: " << b4 << endl;
    bitset<4> b5(b4 << 1);
    cout << "b5: " << b5 << endl;
    
    cout << "b4 >> 1: " << ( b4 >> 1) << endl;
    cout << "b4.size(): "<< b4.size()<<endl;
    return 0;
}
```

## 参考/引用

 - [cppreference.com bitset](https://zh.cppreference.com/w/cpp/utility/bitset)
