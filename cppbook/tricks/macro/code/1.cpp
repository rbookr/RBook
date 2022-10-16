#define _N_ARG_(_1,_2,_3,_4,_5,_6,N,...) N

_N_ARG_(1, 2, 3, 4, 5, 6, RAINBOY, 8)

#define EACH(F,...) \
    _N_ARG_(dumy,##__VA_ARGS__)


EACH(1,2,3,4,5,6,7,8,9)
