#include <iostream>

#include "../randData.hpp"

void log(const char * name){
    std::cout 
        << "\n========= " 
        << name
        << " =========" 
        << "\n";

}

int main(){
    std::cout << 
        sizeof(char_sets)
        << "\n";
    for(int i=1;i<=100;++i){
        std::cout << rand_char() << " " ;
    }
    std::cout  << "\n";

    log("rand_seq");
    rand_seq(20);
    
    log("rand_range");
    rand_range(5,10,100);

    log("rand_dom tree");
    int tree_size = rand_int(5,10);
    std::cout << "tree_size: " << tree_size  << "\n";
    rand_tree(tree_size);

    std::cout << "rand_binary_tree 5\n";
    rand_binary_tree(5);

    log("rand graph");
    rand_graph(5, 8);

    log("rand graph with w");
    rand_graph(5, 8,print_two_w(10,100));

    return 0;

}
