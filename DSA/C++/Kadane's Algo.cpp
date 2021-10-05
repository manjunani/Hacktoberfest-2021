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
