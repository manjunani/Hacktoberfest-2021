//at a time we can go 1, 2 or 3 stairs at a time
//so there are how many ways we can climb stairs
//e.g - 
// n = 5
//ans - 1 1 1 1 1, 2 1 1 1, 2 2 1, 

#include<bits/stdc++.h>
using namespace std;

int solve(int n, int arr[]){
    //base case
    
    if(n == 0){
        return 1;
    }
    else if(n < 0)
        return 0;
        
    if(arr[n] != 0)
            return arr[n];

    int ans1 = solve(n-1, arr);
    int ans2 = solve(n-2, arr);
    int ans3 = solve(n-3, arr);

    arr[n] = ans1+ans2+ans3;
    return ans1+ans2+ans3;
}

int solve_tabular(int n){
    int arr[n+1];
    arr[0] = 1;
    for(int i=1; i<=n; i++){
        if(i == 1){
            arr[i] = arr[i-1];
        }else if(i == 2){
            arr[i] = arr[i-1] + arr[i-2];
        }else{
            arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
        }
    }

    for(auto i:arr)
        cout<<i<<" ";
    cout<<endl;

    return arr[n];
}


int main(){
    int n = 31;
    vector<int> v;
    int arr[n+1];
    for(int i=0; i<n+1; i++)
        arr[i] = 0;
    cout<<solve_tabular(n)<<endl;
}