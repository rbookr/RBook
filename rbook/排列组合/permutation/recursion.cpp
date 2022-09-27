#include <iostream>
#include <cstring>
#include <algorithm>
#include <iomanip>

int a[6] = {0,1,2,3,4,5};
constexpr auto n = 5;

int choosed[n+1];
int steps_ = 0; //第几个排列
void dfs(int dep,int m){
    if( dep == m+1){
        std::cout << "[" 
            << std::setw(2)
            << ++steps_
            << "]: ";
        for(int i= 1;i<= m;i++)
            std::cout << choosed[i] << " " ;
        std::cout << "\n" ;
        return;
    }
    for(int i =1 ; i<= n;i++){
        if( std::find(choosed+1, choosed+m+1, a[i]) != choosed+m+1)
            continue;
        choosed[dep] = a[i];
        dfs(dep+1,m);
        choosed[dep] = -1;
    }
}

int main(){
    memset(choosed,-1,sizeof(choosed));
    dfs(1,3);
    return 0;
}
