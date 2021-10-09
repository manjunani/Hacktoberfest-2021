/*
PROBLEM STATEMENT:-
Given two strings let's say s and t
return the number of distinct subsequences of s which equals t
for example:
s= babgbag ,t= bag
we can extract t from s by following ways

index: 0 1 2 3 4 5 6
string:b a b g b a g
postions (0,1,3) (0,1,6) (0,5,6) (2,5,6) (4,5,6)
hence answer=5
*/
#include<bits/stdc++.h>
using namespace std;
int distinct(string x,string y,int n,int m){
vector<vector<unsigned long long>> dp(n+1,vector<unsigned long long>(m+1,0));
if (m > n)
        return 0;
//initialising dp 2D-vector
for (int i = 0; i <= n; i++)
        dp[i][0] = 1;//t is empty
for (int j = 1; j <= m; j++)
        dp[0][j] = 0;//s is empty
for(int i=1;i!=n+1;i++){
for(int j=1;j!=m+1;j++)
    {if(x[i-1]==y[j-1])
        dp[i][j]=dp[i-1][j-1]+dp[i-1][j];//if matches then two cases it may be part of that subsequence or may not be.
        //hence adding both cases also i for string s and j for t
    else
        dp[i][j]=dp[i-1][j];//if dosen't match then ignore that char of s
    }
}
    return dp[n][m];
}
int main(){
    string s,t;
    cin>>s>>t;
    cout<<distinct(s,t,s.size(),t.size())<<endl;
}
//TIME COMPLEXITY: O(N^2)