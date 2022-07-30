#include <bits/stdc++.h>
using namespace std;


// cout << "******" <<endl;
// cout << "++++++" <<endl;
// a = 123;
//
void cout_star(int a,int b){
    // a = 100;
    a= 100;
    b= 200;
}


int main(int argc,char * argv[]){
    int b = 1; // ?

    int* a = &b; // & 取地址符号
    
    std::cout << &b << std::endl;
    std::cout << a << std::endl;
    
    *a = 2; //*解引用,解指针
    // 可以通过指针来修改对应的变量
    return 0;
}
