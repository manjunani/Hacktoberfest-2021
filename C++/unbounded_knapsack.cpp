// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends
// User function Template for C++

class Solution{
public:
    int unboundedKnapsack(int val[],int wt[],int n,int w,vector<vector<int>>&dp){
        if(n==0||w==0){
            return 0;
        }
        if(dp[n][w]!=-1){
            return dp[n][w];
        }
        if(wt[n-1]<=w){
            dp[n][w]=max(val[n-1]+unboundedKnapsack(val,wt,n,w-wt[n-1],dp),unboundedKnapsack(val,wt,n-1,w,dp));
        }
        else{
            dp[n][w]=unboundedKnapsack(val,wt,n-1,w,dp);
        }
        return dp[n][w];
    }
    int knapSack(int N, int W, int val[], int wt[])
    {
        // code here
        int i,j;
        vector<vector<int>>dp(N+1);
        for(i=0;i<=N;i++){
            for(j=0;j<=W;j++){
                dp[i].push_back(-1);
            }
        }
        int ans=unboundedKnapsack(val,wt,N,W,dp);
        return ans;
    }
};

// { Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N, W;
        cin>>N>>W;
        int val[N], wt[N];
        for(int i = 0;i < N;i++)
            cin>>val[i];
        for(int i = 0;i < N;i++)
            cin>>wt[i];
        
        Solution ob;
        cout<<ob.knapSack(N, W, val, wt)<<endl;
    }
    return 0;
}  // } Driver Code Ends
