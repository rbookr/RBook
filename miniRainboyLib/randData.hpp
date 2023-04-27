#pragma once
#include <iostream>
#include <random>
#include <set>

//全局随机数据生成器
struct Random {
    using ll = long long;
    // std::random_device rd;
    std::mt19937 engine;
    std::uniform_int_distribution<long long> dis; // in [0,0x7fffffffffffffff]
    Random() : engine{std::random_device{}()}
    {}

    //指定生成的随机数的范围
    Random(ll l,ll r) :Random()
    { dis = std::uniform_int_distribution<long long> (l,r); }

    ll operator()(){ return dis(engine); }
    ll operator()(ll l,ll r){ return l == r ? l : dis(engine) % ( r-l+1 ) + l; }

} _rnd;

// >>> 1 随机数生成

inline int rand_int() { return _rnd(0,1<<30);}

inline int rand_int(int limit) { return _rnd(limit > 0 ? 0 : limit,limit > 0 ? limit : 0);}

inline int rand_int(int l,int r) {
    if(l > r ) std::swap(l,r);
    return _rnd(l,r);
}

// >>> 2 随机字符生成

const char char_sets[] = "abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ";

inline char rand_char() { 
    return char_sets[_rnd(0,sizeof(char_sets) /sizeof(char_sets[0]))];
}

inline char rand_char(int l,int r) { 
    // r = std::max(r,sizeof(char_sets) /sizeof(char_sets[0]));
    return char_sets[_rnd(l,r)];
}

inline char rand_lowchar() {
    return rand_char(0,26-1);
}

inline char rand_upchar() {
    return rand_char(26,52-1);
}

const auto print_one = [](int n,bool nl= false){ 
    std::cout << n <<" " ;
    if(nl) std::cout << "\n";
};
const auto print_two = [](int l,int r){ std::cout << l <<" " << r << "\n";};

//输出两个点的同时,还输出一个随机的w
struct print_two_w {
    int l,r;
    print_two_w(): l(1),r(10) {}
    
    print_two_w(int _l,int _r): l(_l),r(_r) {
        if( l > r) std::swap(l,r);
    }

    void operator()(int _l,int _r){
        std::cout << _l << " " << _r << " "
            << _rnd(l,r)
            << "\n";
    }
};

//>>> 随机序列的生成

//生成n个[l,r]内的随机数
template<typename F>
void rand_seq(int n,int l,int r,F&& f){
    for(int i=1;i<=n;++i){
        f(_rnd(l,r));
    }
}

void rand_seq(int n=10,int l=1,int r=10){
    rand_seq(n,l,r,print_one);
}

//>>> 随机区间的生成
//生成n个区间[l,r]内的随机数
template<typename F>
void rand_range(int n,int l,int r,F&& f){
    for(int i=1;i<=n;++i){
        int a = _rnd(l,r);
        int b = _rnd(l,r);
        if(a>b) std::swap(a,b);
        f(a,b);
    }
}

void rand_range(int n=10,int l=1,int r=10){
    rand_range(n,l,r,print_two);
}

// >>> 随机生成一个树
template<typename F>
void rand_tree(int n,F && f){
    for(int i = 2 ;i<=n;i++ ){
        f(_rnd(1,i-1),i);
    }
}

void rand_tree(int n = 10){
    rand_tree(n,print_two);
}

//TODO rand_tree_linkList()
//生成的数据存入linkList里
//TODO rand_tree_linkList()

// >>> 随机二叉树
template<typename F>
void rand_binary_tree(int n,F&& f){
    std::set<int> left{1},right{1};
    std::vector<int> v(n+1); //v的初始有n个元素
    auto pic = [](std::set<int> & sets){
        auto b  = sets.begin();
        std::advance(b, _rnd(0,sets.size()-1));
        int ret = *b;
        sets.erase(b);
        return ret;
    };
    for(int i =2;i<=n;++i){
        int chance = _rnd(1,100);
        if( chance <= 50 && left.size() > 0 )
            v[i] = pic(left);
        else if( right.size() > 0)
            v[i] = pic(right);
        else 
            v[i] = pic(left);
        left.insert(i);
        right.insert(i);
    }
    for(int i=2;i<=n;i++)
        f(v[i],i);
}

void rand_binary_tree(int n=10){
    return rand_binary_tree(n,print_two);
}


// >>> 随机图


// n个点m条边的随机图
template<typename F>
void rand_graph(int n,int m,F&& f){
    std::set< std::pair<int,int> > _set; //防止重边
    rand_tree(n, [&](int u,int v) {
        f(u,v);
        _set.emplace(u,v);
        _set.emplace(v,u);
    });

    for(int i = n+1;i<=m;++i){
        int u,v;
        do {
            u = _rnd(1,n), v = _rnd(1,n);
        }while(u == v || _set.find(std::make_pair(u, v)) != _set.end());
        _set.emplace(u,v);
        _set.emplace(v,u);
        f(u,v);
    }
}
void rand_graph(int n=5,int m=10){
    rand_graph(n,m,print_two);
}
