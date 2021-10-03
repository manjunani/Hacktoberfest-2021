// Count number of bits to be flipped to convert A into B
// Time Complexity: O(logn).
// Space Complexity: O(1).
#include <iostream>
using namespace std;

// Function that count set bits in a number.
int countSetBits(int n)
{
	int count = 0;
	while (n > 0)
	{
		count++;
		n &= (n-1);
	}
	return count;
}

// Function that return count of flipped number of bits
int FlippedCount(int A, int B)
{
	// Return count of set bits in A XOR B
	return countSetBits(A^B);
}

// main function
int main()
{
	int a,b;
	cout<<"enter initial number:";
	cin>>a;
	cout<<endl;
	cout<<"enter destination number:";
	cin>>b;
	cout<<endl;
	cout<<"Number of bits to be flipped in A to convert to B is:";
	cout << FlippedCount(a,b)<<endl;
	return 0;
}
