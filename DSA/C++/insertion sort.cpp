//Algorithm named -> "Insertion Sort" for sorting an Array
#include <iostream>
using namespace std;

int main()
{
  int n;
  cin>>n; //taking input to declare size of array
  int arr[n]; //declaring array;

  for(int i =0;i<n;i++)//taking input of array
  {
    cin>>arr[i];
  }


//INSERTION SORT 
  for(int i = 0;i<n;i++)
  {
    int temp = arr[i];  //storing value of arr[i] in temp
    int j = i-1;        //declaring  int j as i-1;
    while(j>=0 && arr[j]>temp)    //running nested loop till arr[j] value is less greater than temp variable
    {
      arr[j+1] = arr[j];      //shifting the elements
      j--;
    }
    arr[j+1] = temp;    //inserting temp at right place in array;
  }

for(int i =0;i<n;i++) // displaying array
{ 
  cout<<arr[i]<<" ";
}


  return 0;
}


//input->3,5,79,6,43
//output->3,5,6,43,79(after insertion sort)