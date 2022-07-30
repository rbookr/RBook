//引用 reference
//别名
//王爱国 小a

#include <iostream>
using namespace std;

int main(){
    int a = 100;
    int & b = a; // 引用,本质
    int c;
    // -> int * xb = &a;
    //

    b = 200;
    // *xb = 200;
    std::cout << a ;

    return 0;
}
