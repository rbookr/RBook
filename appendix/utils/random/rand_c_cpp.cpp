#include <iostream>
#include <random>
#include <ctime>
#include <cstdlib>

struct random {
    random() {
        srand(std::random_device()());
    }
    int operator()(int l,int r){
        return rand() % (r-l+1) +l;
    }
    int operator()(){ return rand();}
} _rnd;

int main(){
    for(int i=1;i<=10;++i){
        std::cout << _rnd(5,10) << " ";
    }
    std::cout << "\n";
    return 0;
}
