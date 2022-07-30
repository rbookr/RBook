# STL概述

## 什么是STL

STL = Standard Template Library，标准模板库,是C++的标准库,我们可以使用它来进行快速的代码编写,简单高效.但是在运行速度上STL没有直接自己写的算法快.

从根本上说，STL是一些“容器”的集合，这些“容器”有list,vector,set,map等，STL也是算法和其他一些组件的集合。

## 好用的工具: cpp refrence

 - http://zh.cppreference.com/w/cpp 中文
 - http://www.cplusplus.com/reference/ 英文

## STL容器

作为STL的最主要组成部分－－容器，分为向量（vector），双端队列(deque)，表(list)，队列（queue），堆栈(stack)，集合(set)，多重集合(multiset)，映射(map)，多重映射(multimap)。


### 向量vector

可以用常数时间访问和修改任意元素，在序列尾部进行插入和删除时，具有常数时间复杂度，对任意项的插入和删除就有的时间复杂度与到末尾的距离成正比，尤其对向量头的添加和删除的代价是惊人的高的    

头文件`<vector>`

### 双端队列deque

基本上与向量相同，唯一的不同是，其在序列头部插入和删除操作也具有常量时间复杂度    

头文件`<deque>`

### 表list

对任意元素的访问与对两端的距离成正比，但对某个位置上插入和删除一个项的花费为常数时间。    

头文件:`<list>`

### 队列queue

插入只可以在尾部进行，删除、检索和修改只允许从头部进行。按照先进先出的原则。    

头文件`<queue>`


### 堆栈stack

堆栈是项的有限序列，并满足序列中被删除、检索和修改的项只能是最近插入序列的项。即按照后进先出的原则    

头文件`<stack>`

### 集合set

由节点组成的红黑树，每个节点都包含着一个元素，节点之间以某种作用于元素对的谓词排列，没有两个不同的元素能够拥有相同的次序，具有快速查找的功能。但是它是以牺牲插入删除操作的效率为代价的    

头文件:`<set>`

### 多重集合multiset

和集合基本相同，但可以支持重复元素具有快速查找能力    

头文件:`<set>`

### 映射map

由{键，值}对组成的集合，以某种作用于键对上的谓词排列。具有快速查找能力    

头文件:`<map>`

### 多重集合multimap

比起映射，一个键可以对应多了值。具有快速查找能力

头文件:`<map>`



## STL中的算法

算法部分主要由头文件`<algorithm>`，`<numeric>`和`<functional>`组成。`< algorithm>`是所有STL头文件中最大的一个，它是由一大堆模版函数组成的，可以认为每个函数在很大程度上都是独立的，其中常用到的功能范 围涉及到比较、交换、查找、遍历操作、复制、修改、移除、反转、排序、合并等等。`<numeric>`体积很小，只包括几个在序列上面进行简单数学运算的模板函数，包括加法和乘法在序列上的一些操作。`<functional>`中则定义了一些模板类，用以声明函数对象。
STL的算法也是非常优秀的，它们大部分都是类属的，基本上都用到了C＋＋的模板来实现，这样，很多相似的函数就不用自己写了，只要用函数模板就可以了。
我们使用算法的时候，要针对不同的容器，比如：对集合的查找，最好不要用通用函数find（），它对集合使用的时候，性能非常的差，最好用集合自带的find（）函数，它针对了集合进行了优化，性能非常的高。


## STL中的迭代器

它的具体实现在`<itertator>`中，我们完全可以不管迭代器类是怎么实现的，大多数的时候，把它理解为指针是没有问题的（指针是迭代器的一个特例，它也属于迭代器），但是，决不能完全这么做。

| 迭代器                            | 功能                                              | 样列                           |
|-----------------------------------|---------------------------------------------------|--------------------------------|
| 输入迭代器 Input iterator         | 向前读  Reads forward                             | istream                        |
| 输出迭代器 Output iterator        | 向前写 Writes forward                             | ostream,inserter               |
| 前向迭代器 Forward iterator       | 向前读写 Read and Writes forward                  |                                |
| 双向迭代器 Bidirectional iterator | 向前向后读写 Read and Writes forward and backward | list,set,multiset,map,multimap |
| 随机迭代器 Random access iterator | 随机读写 Read and Write with random access        | vector,deque,array,string      |
 
## STL仿函数(functor)

仿函数，又或叫做函数对象，是STL六大组件之一；仿函数虽然小，但却极大的拓展了算法的功能，几乎所有的算法都有仿函数版本。例如，查找算法find_if就是对find算法的扩展，标准的查找是两个元素相等就找到了，但是什么是相等在不同情况下却需要不同的定义，如地址相等，地址和邮编都相等，虽然这些相等的定义在变，但算法本身却不需要改变，这都多亏了仿函数。仿函数(functor)又称之为函数对象（function object），其实就是重载了()操作符的struct，没有什么特别的地方。
如以下代码定义了一个二元判断式functor：

```c
struct IntLess
{
    bool operator()(int left, int right) const {
        return (left < right);
    };
};
```

### 为什么要使用仿函数呢？

 - 1).仿函数比一般的函数灵活。
 - 2).仿函数有类型识别，可以作为模板参数。
 - 3).执行速度上仿函数比函数和指针要更快的。

### 怎么使用仿函数？

除了在STL里，别的地方你很少会看到仿函数的身影。而在STL里仿函数最常用的就是作为函数的参数，或者模板的参数。
在STL里有自己预定义的仿函数，比如所有的运算符，=，-，*，、比如`<`号的仿函数是less

```c
template <class _Ty>
struct less   : public binary_function<_Ty, _Ty, bool>
{ // functor for operator<
        bool operator()(const _Ty& _Left, const _Ty& _Right) const
                   { // apply operator< to operands
                              return (_Left < _Right);
                   }
};
```
从上面的定义可以看出，less从`binary_function<...>`继承来的，那么binary_function又是什么的？

```c
template<class _Arg1, class _Arg2, class _Result>
struct binary_function
{ // base class for binary functions        typedef _Arg1 first_argument_type;
        typedef _Arg2 second_argument_type;
      typedef _Result result_type;
};
```

其实`binary_function`只是做一些类型声明而已，别的什么也没做，但是在STL里为什么要做这些呢？如果你要阅读过STL的源码，你就会发现，这样的用法很多，其实没有别的目的，就是为了方便，安全，可复用性等。但是既然STL里面内定如此了，所以作为程序员你必须要遵循这个规则,否则就别想安全的使用STL。
比如我们自己定一个仿函数。可以这样：

```c
template <typename type1,typename type2>
class func_equal :public binary_function`<type1,type2,bool>`
{
        inline bool operator()(type1 t1,type2 t2) const//这里的const不能少
            {
                 return t1 == t2;//当然这里要overload==
             }
}
```

我们看这一行： `inline bool operator()(type1 t1,type2 t2) const//这里的const不能少`

inline是声明为内联函数，我想这里应该不用多说什么什么了，关键是为什么要声明为const的？要想找到原因还是看源码，加入如果我们这里写一行代码，find_if(s.begin(),s.end(),bind2nd(func_equal(),temp)),在bind2nd函数里面的参数是const类型的，const类型的对象，只能访问cosnt修饰的函数！
与binary_function(二元函数)相对的是unary_function(一元函数),其用法同binary_function

```c
struct unary_function { 
    typedef _A argument_type; 
    typedef _R result_type; 
};
```

注：仿函数就是重载()的class，并且重载函数要为const的，如果要自定义仿函数，并且用于STL接配器，那么一定要从binary_function或者，unary_function继承。
 
## STL适配器

适配器是用来修改其他组件接口的STL组件，是带有一个参数的类模板（这个参数是操作的值的数据类型）。STL定义了3种形式的适配器：容器适配器，迭代器适配器，函数适配器。

容器适配器：包括栈（stack）、队列(queue)、优先(priority_queue)。使用容器适配器，stack就可以被实现为基本容器类型（vector,dequeue,list）的适配。可以把stack看作是某种特殊的vctor,deque或者list容器，只是其操作仍然受到stack本身属性的限制。queue和priority_queue与之类似。容器适配器的接口更为简单，只是受限比一般容器要多。

迭代器适配器：修改为某些基本容器定义的迭代器的接口的一种STL组件。反向迭代器和插入迭代器都属于迭代器适配器，迭代器适配器扩展了迭代器的功能。

函数适配器：通过转换或者修改其他函数对象使其功能得到扩展。这一类适配器有否定器（相当于"非"操作）、绑定器、函数指针适配器。函数对象适配器的作用就是使函数转化为函数对象，或是将多参数的函数对象转化为少参数的函数对象。

例如：

在STL程序里，有的算法需要一个一元函数作参数，就可以用一个适配器把一个二元函数和一个数值，绑在一起作为一个一元函数传给算法。 例如：

```c
find_if(coll.begin(), coll.end(), bind2nd(greater `<int>`(), 42)); 
```

这句话就是找coll中第一个大于42的元素。 

`greater <int>()`，其实就是`>`号，是一个2元函数 

bind2nd的两个参数，要求一个是2元函数，一个是数值，结果是一个1元函数。

bind2nd就是个函数适配器。
 
## STL空间配置器

STL的内存配置器在我们的实际应用中几乎不用涉及，但它却在STL的各种容器背后默默做了大量的工作，STL内存配置器为容器分配并管理内存。统一的内存管理使得STL库的可用性、可移植行、以及效率都有了很大的提升。

SGI-STL的空间配置器有2种，一种仅仅对c语言的malloc和free进行了简单的封装，而另一个设计到小块内存的管理等，运用了内存池技术等。在SGI-STL中默认的空间配置器是第二级的配置器。

SGI使用时`std::alloc`作为默认的配置器。

 - A).alloc把内存配置和对象构造的操作分开，分别由alloc::allocate()和::construct()负责，同样内存释放和对象析够操作也被分开分别由alloc::deallocate()和::destroy()负责。这样可以保证高效，因为对于内存分配释放和构造析够可以根据具体类型(type traits)进行优化。比如一些类型可以直接使用高效的memset来初始化或者忽略一些析构函数。对于内存分配alloc也提供了2级分配器来应对不同情况的内存分配。
 - B).第一级配置器直接使用malloc()和free()来分配和释放内存。第二级视情况采用不同的策略：当需求内存超过128bytes的时候，视为足够大，便调用第一级配置器；当需求内存小于等于128bytes的时候便采用比较复杂的memeory pool的方式管理内存。
 - C).无论allocal被定义为第一级配置器还是第二级，SGI还为它包装一个接口，使得配置的接口能够符合标准即把配置单位从bytes转到了元素的大小：


```c
template<class T, class Alloc>
class simple_alloc
{
public:
     static T* allocate(size_t n)
     {
         return 0 == n ? 0 : (T*)Alloc::allocate(n * sizeof(T));
     }
 
     static T* allocate(void)
     {
         return (T*) Alloc::allocate(sizeof(T));
     }
 
     static void deallocate(T* p, size_t n)
     {
         if (0 != n) Alloc::deallocate(p, n * sizeof(T));
     }
 
     static void deallocate(T* p)
     {
         Alloc::deallocate(p, sizeof(T));
     }
}
```c
 
d）．内存的基本处理工具，它们均具有commt or rollback能力。

```c
template`<class InputIterator, class ForwardIterator>`
ForwardIterator
uninitialized_copy(InputIterator first, InputIterator last, ForwardIterator result);
 
template`<class ForwardIterator, class T>`
void uninitialized_fill(ForwardIterator first, ForwardIterator last, const T& x);
 
template`<class ForwardIterator, class Size, class T>`
ForwardIterator
uninitialized_fill_n(ForwardIterator first, ForwardIterator last, const T& x)
```


## STL实现原理:模板


## STL通用准则

所有容器中存放的都是值而非引用，即容器进行安插操作时内部实施的是拷贝操作。因此容器的每个元素必须能够被拷贝。如果希望存放的不是副本，容器元素只能是指针。
所有元素都形成一个次序（order），可以按相同的次序一次或多次遍历每个元素
各项操作并非绝对安全，调用者必须确保传给操作函数的参数符合需求，否则会导致未定义的行为


必须能够通过拷贝构造函数进行复制
必须可以通过赋值运算符完成赋值操作
必须可以通过析构函数完称销毁动作
序列式容器元素的默认构造函数必须可用
某些动作必须定义operator ==，例如搜寻操作
关联式容器必须定义出排序准则，默认情况是重载operator `<`

