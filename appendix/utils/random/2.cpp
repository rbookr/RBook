
struct myRnd {
    myRnd() {
        srand( std::random_device ());
    }

    int operator(int l,int r)
    {
        return rand() % (r-l+1) +l;

    }
    int operator()(int r) {
        return rand(0,r);
    }

}

int main() {

}
