#include <iostream> 
#include <vector>
#include<ctime>

using namespace std;

int fib(int N) {
    vector<int> dp(N + 1, 0);
    // base case
    dp[1] = dp[2] = 1;
    for (int i = 3; i <= N; i++)
        dp[i] = dp[i - 1] + dp[i - 2];
    return dp[N];
}

int main()
{
    clock_t start,finish;
	start=clock();

    int k;
    for (k=0; k<200; k++){
        //Fibonacci Fibonacci;
        if (fib(k)<100)
            cout<<"No."<< k <<"   "<<fib(k)<<endl;
        else
            break;
    }
    
    finish=clock();
	cout<<(double)(finish-start)/CLOCKS_PER_SEC<<"(s)"<<endl;

    return 0;
}