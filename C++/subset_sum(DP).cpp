//Sampad Patra
//hacktober fest
//subset sum dp top-down approach


#include<bits/stdc++.h>
using namespace std;



int subsetsum(int arr[],int n,int target)
{
	int dp[n+1][target+1];
	
	//Initialisation of the dp matrix
	
	
	for(int i=0;i<=n;i++)       	// i denotes the number of elements
		dp[i][0] = 1;
	for(int j=1;j<=target;j++)      // j denotes the target sum required.
		dp[0][j] = 0;
	
	/*Dynamic programming divides a problem into a subproblem and finds
	a solution for the subproblem. It keeps solving bigger problems using the smaller subproblems
	and finally reaches to a solution*/
	
	
	for(int i=1;i<=n;i++)     		// when number of elements is i
	{
		for(int j=1;j<=target;j++)	// when sum required is j
		{
			if(arr[i-1]<=j)
				dp[i][j] =  dp[i-1][j-arr[i-1]] + dp[i-1][j];
			else
				dp[i][j] = dp[i-1][j];
			
		}
		
	}
	return dp[n][target]; // solution to required problem
	
}

//driver function.
int main()
{
	int arr[4] = {2,3,8,7};
	int target = 10;
	cout<<(subsetsum(arr,4,target));
	return 0;
}