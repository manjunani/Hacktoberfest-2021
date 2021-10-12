#include <bits/stdc++.h>
using namespace std;
  
int Prime(int n)
{
   if (n <= 1) //cornercase
        return 0;
    for (int i = 2; i < n; i++)
        if (n % i == 0)
            return 0;
  
    return 1;
}
  
int main()
{
    int n;
    cout<<"Enter the Number";
    cin>>n;
    if(Prime(n))
      cout<<"The Entered number is Prime.";
     else
       cout<<"The Entered number is not Prime.";
  
    return 0;
}
