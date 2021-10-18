//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//Back-end complete function Template for C++

class Solution {
  public:
      int subset(vector<int>& nums,int m,int n,vector<vector<int>>&dp){
        if(m==0){
            return 1;
        }
        if(n==0){
            return 0;
        }
        if(dp[n][m]!=-1){
            return dp[n][m];
        }
        if(nums[n-1]<=m){
            dp[n][m]=subset(nums,m-nums[n-1],n-1,dp)+subset(nums,m,n-1,dp);
        }
        else{
            dp[n][m]=subset(nums,m,n-1,dp);
        }
        return dp[n][m];
    }
    int findTargetSumWays(vector<int>&A ,int target) {
        //Your code here
        int i,j,n=A.size(),sum=0;
        for(i=0;i<n;i++){
            sum+=A[i];
        }
        if((sum+target)%2==1){
            return 0;
        }
        int m=(sum+target)/2;
        vector<vector<int>>dp(n+1);
        for(i=0;i<=n;i++){
            for(j=0;j<=m;j++){
                dp[i].push_back(-1);
            }
        }
        int ans=subset(A,m,n,dp);
        return ans;
    }
};

// { Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N;
        
        cin>>N;
        vector<int>arr(N);
        
        for(int i=0 ; i<N ; i++){
            cin>>arr[i];
        }
        int target;
        cin >> target;

        Solution ob;
        cout<<ob.findTargetSumWays(arr,target);
        cout<<"\n";
    }
    return 0;
}  // } Driver Code Ends
