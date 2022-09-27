struct Random {
    std::random_device rd;
    mt19937 engine{rd()};
    uniform_int_distribution<long long> dis; // in [0,0x7fffffffffffffff]
    Random(){}
    Random(int l,int r){ dis = uniform_int_distribution<long long> (l,r); }

    int operator()(){ return dis(engine); }
    template<typename U> //产生一定范围内的随机数
    U operator()(U l,U r){ return dis(engine) % ( r-l+1 ) + l; }

    Random create(int l,int r){ return Random(l,r); } //工厂模式
} rnd;

