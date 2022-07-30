/* author: Rainboy email: rainboylvx@qq.com  time: 2021年 12月 05日 星期日 09:04:10 CST */
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn = 1e6+5,maxe = 1e6+5; //点与边的数量

int n,m;

void change(int * a,int * b){
    // a =&a
    *a = 100;
    *b = 100;
}
int main(int argc,char * argv[]){
    int a = 300;
    int b = 300;
    change(&a, &b);
    std::cout << a <<" "<< b << std::endl;
    return 0;
}
