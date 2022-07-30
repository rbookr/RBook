#include <iostream>
using namespace std;

int mymax(int a,int b){
    if( a > b) return a;
    return b;
}

int main(){
    int n,m;
    std::cin >> n;
    for(int i=1;i<=n;++i){
        int a,b;
        std::cin >> a >> b;
        std::cout << mymax(a, b) <<endl;
    }
    for(int i=1;i<=m;++i){
        int a,b,c;
        std::cin >> a >> b >> c;
        std::cout << mymax(mymax(a, b),c) << std::endl;
    }
    return 0;
}
