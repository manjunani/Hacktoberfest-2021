#include<bits/stdc++.h>
 
using namespace std;
 
int dp[10^3+2][10^3+2];

int coinchange(vector<int>&a,int n,int x)
{
    if(x==0)
    return 1;
    if(x<0)
    return 0;
    if(n<=0)
    return 0;
    return coinchange(a,n,x-a[n-1])+coinchange(a,n-1,x);
}

//MEMOIZATION

int coinchange1(vector<int>&a,int n,int x)
{
    if(x==0)
    return 1;
    if(x<0)
    return 0;
    if(n<=0)
    return 0;

    if(dp[n][x]!=-1)
    return dp[n][x];

    dp[n][x]=coinchange(a,n,x-a[n-1])+coinchange(a,n-1,x);

    return dp[n][x];
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  int n;cin>>n;

  vector<int> a(n);

  for(int i=0;i<n;i++)
  {
      cin>>a[i];
  }

  int x;cin>>x;

  //cout<<coinchange(a,n,x);


  for(int i=0;i<n;i++)
  {
      for(int j=0;j<n;i++)
      {
         dp[i][j]=-1;
      }
  }


  cout<<coinchange1(a,n,x);
}

  