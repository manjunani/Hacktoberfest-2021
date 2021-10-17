#include<bits/stdc++.h>
using namespace std;

int solve(int arr[], int n){
    sort(arr, arr+n);

    vector<int> v;
    int i=0, j = n-1;
    while(i < j){
        v.push_back(arr[i]);
        v.push_back(arr[j]);
        i++;j--;
    }

    int ans = 0;

    for(int i=0; i<n-1; i++){
        ans += abs(v[i] - v[i+1]);
    }
    ans += abs(v[0] - v[v.size()-1]);

    return ans;
}

int main(){
    int arr[] = {4, 2, 1, 8};
    cout<<solve(arr, 4)<<endl;
}