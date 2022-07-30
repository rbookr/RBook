#include <bits/stdc++.h>
using namespace std;


void change(int &a,int &b){
    // int &a = a;
    a = 100;
    b = 100;
}

int main(int argc,char * argv[]){
    int a = 300;
    int b = 300;
    change(a,b);
    std::cout << a <<" "<< b << std::endl;
    return 0;
}
