#include<bits/stdc++.h>
using namespace std;
int ternary_search(const vector<int> &arr, int l, int r, int x)
{
    if (r >= l)
    {
        int mid1 = l + (r - l) / 3;
        int mid2 = r - (r - l) / 3;
        if (arr[mid1] == x)
            return mid1;
        if (arr[mid2] == x)
            return mid2;
        if (x < arr[mid1])
            return ternary_search(arr,l, mid1 - 1, x);
        else if (x > arr[mid2])
            return ternary_search(arr,mid2 + 1, r, x);
        else
            return ternary_search(arr,mid1 + 1, mid2 - 1, x);
    }
    return -1;
}
int main()
{
    vector<int> v={12,34,45,56,78,89,122,234,456,567};
  
    cout<<"78 is present in index "<<ternary_search(v,0,9,78);
    return 0;
}