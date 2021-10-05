#include <iostream>
#include <climits>     
using namespace std;

int main(){
    int n;
    cout<<"Enter the length of Array :";
    cin>>n;

    int arr[n];
    cout<<"Enter the Elements of Array :";
    for (int  i = 0; i < n; i++)
    {
        cin>>arr[i];
    }

    int cunsum[n+1];
    cunsum[0]=0;
    for (int  i = 1; i <=n; i++){
        cunsum[i] = cunsum[i-1] + arr[i - 1];
    }
    
    int maxSum = INT_MIN;
    for (int i = 1; i <=n; i++)
    {
        int sum =0;
        maxSum = max(maxSum, cunsum[i]);
        for(int j=1; j<=i; j++){
            sum = cunsum[i] - cunsum[j-1];
            maxSum = max(maxSum, sum);
        }
    }
    cout<<"Sum of Araay is ";
    cout<<maxSum<<endl;
    
    
    return 0;

    
    
}