// C++ program for implementation of Bubble sort
// this program modifies the origianl array, and donot consume any extra space.
// Time Complexity: O(n^2).
// Space Complexity: O(1).
#include <bits/stdc++.h>
using namespace std;

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

// A function to implement bubble sort
// this function modifies the original array and not use any extra space.
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n-1; i++)	
	
	// Last i elements are already in place
	for (j = 0; j < n-i-1; j++)
		if (arr[j] > arr[j+1])
			swap(&arr[j], &arr[j+1]);
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// main function
int main()
{
	int n;
	cout<<"enter size of array to sort:";
	cin>>n;
	int arr[n];
	for(int i=0;i<n;i++){
		cin>>arr[i];
	}
	// calling bubble sort function defined above.
	bubbleSort(arr, n);
	cout<<"Sorted array: \n";
	// printing the modified arr array using function defined above.
	printArray(arr, n);
	return 0;
}


