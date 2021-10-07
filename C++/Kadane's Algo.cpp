//Problem Statement:
//Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum.

//Explanation:
//The simple idea of Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this). And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this). Each time we get a positive-sum compare it with max_so_far and update max_so_far if it is greater than max_so_far

#include<bits/stdc++.h>
using namespace std;
// TC - O( N )
int main()
{
	int a[] = { -5, 4, 6, -3, 4, -1 };
	int n = sizeof(a) / sizeof(int);
	int maxSum = a[0], curSum = 0;
	for(int i=0; i<n; i++)
	{
		curSum += a[i];
		maxSum = max(maxSum, curSum);
		if(curSum < 0)
			curSum = 0;
	}
	cout << maxSum;
}
