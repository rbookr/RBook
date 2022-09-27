
template<typename R>
void rand_seq(int n,int l = 1,int r = 10,const R & r = rnd){
    for(int i=1;i<=n;++i){
        std::cout << rnd(l,r) << " ";
    }
}
