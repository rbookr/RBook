//求部分排列的一个演示代码
//
// 求 1 2 3 4 5 中的选3个的排列

#include <iostream>
#include <algorithm>

constexpr int n = 5;
constexpr int m = 3;

int choosed[m+1];

//1. 检查是否有相同的数字
int check() {
    for(int i = m; i >=1 ;--i){
        for(int j = 1;j < i;j++)
            if( choosed[i] == choosed[j])
                return i;
    }
    return -1;
}
//2. 检查是否有超过最大数字的数
int check_overlimit(){
    for(int i=m;i>=1;--i){
        if( choosed[i] > n)
            return i;
    }
    return -1;
}

//是否到达边界
bool is_bouned(){
    if( choosed[1] != n)
        return 0;
    for(int i = 2;i<=m;++i)
        if( choosed[i] != choosed[i-1]-1)
            return 0;
    return 1;
}
//执行下一个排列

//状态机
void fix_common();
void fix_overlimit();

void fix_common(){
    bool flag = 0;
    for( int pos = check(); pos != -1 ; pos = check()) {
        flag = 1;
        int & last = choosed[pos];
        if(++last == n+1) {
            last = 1;
            ++choosed[pos-1];
        }
    }
    if (flag) fix_overlimit();
}

void fix_overlimit() {
    if( int pos = check_overlimit(); pos !=-1){
        int & last = choosed[pos];
        last = 1;
        ++choosed[pos-1];
        fix_common();
    }
}

bool next(){
    if( is_bouned() ) return false;

    //1. 最后一个位置 +1
    int & last = choosed[m];
    if(++last == n+1) {
        last = 1;
        ++choosed[m-1];
    }
    fix_common();
    return true;

}

void init(){
    for(int i=1;i<=m;++i){
        choosed[i] = i;
    }
}

int main(){
    init();
    do {
        for(int i=1;i<=m;++i){
            std::cout << choosed[i] << " " ;
        }
        std::cout << "\n" ;
    }while(next());
    return 0;
}
