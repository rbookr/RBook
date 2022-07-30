#include <iostream>

// jc(n) = n*jc(n-1)
int jc(int n){
    if(n == 0) return 1;
    return n*jc(n-1);
}

int main(){
    int n;
    std::cin >> n;

    return 0;
}
