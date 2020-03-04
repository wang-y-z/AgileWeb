#include <iostream> 
using namespace std;

class Fibonacci{
public:
    int of(int n){
        if (n==0 || n==1)
        return 1;
    else
        return of(n-1)+of(n-2);
    }
};

int main()
{
    int k;
    for (k=0; k<200; k++){
        Fibonacci Fibonacci;
        if (Fibonacci.of(k)<200)
            cout<<Fibonacci.of(k)<<endl;
        else
            break;
    }
    
    return 0;
}