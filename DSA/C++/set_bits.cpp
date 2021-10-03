// C++ program to Count set bits in an integer
// this program is used to count number of set bits in n.
// Time Complexity: O(k). where k is number of set bits in number n.
// Space Complexity: O(1).
#include <iostream>
using namespace std;
// this function count the number of set bits in n 
int countSetBits(int n){
	int count = 0;
	// this loop runs only k times, where k is no. of set bits in n.
	while (n) {
		n &= (n - 1);
		count++;
	}
	return count;
}

// main function
int main()
{
	
	int n;
	cout<<"enter number whose set bits you want to count:";
	cin>>n;
	cout<<endl;
	cout <<"set bits in number is: "<< countSetBits(n);
	return 0;
}
