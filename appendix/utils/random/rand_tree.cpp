
template<typename R>
void rand_seq(int n,int l = 1,int r = 10,const R & r = rnd){
    std::vector<int> v(n); //v的初始有n个元素
    for(int i = 2 ;i<=n;i++ ){
        v[i] = rnd(1,i-1);
    }
    for(int i=2;i<=n;i++){
        std::cout << v[i] << " " << i ;
        // std::cout << rnd(1,10); //生成边权
        cout << "\n";
    }
}
