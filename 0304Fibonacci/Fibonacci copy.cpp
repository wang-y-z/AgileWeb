#include <iostream> 
#include<ctime>

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
    clock_t start,finish;
	start=clock();

    int k;
    for (k=0; k<200; k++){
        Fibonacci Fibonacci;
        if (Fibonacci.of(k)<200)
            cout<<"No."<< k <<"   "<<Fibonacci.of(k)<<endl;
        else
            break;
    }
    
    finish=clock();
	cout<<(double)(finish-start)/CLOCKS_PER_SEC<<"(s)"<<endl;

    return 0;
}