#include<bits/stdc++.h>
using namespace std;

int solve(vector<int> v, int k, int index){
	if(v.size() == 1){
		// cout<<v[0]<<endl;
		return v[0];
	}
	index = (index+k)%v.size();
	cout<<v[index]<<" man is killed\n";
	v.erase(v.begin()+index);
	solve(v, k, index);
}

int main(){
	int n, k;
	cin>>n>>k;
	k = k - 1;
	vector<int> v;
	for(int i=1; i<=n; i++)
			v.push_back(i);
	int index = 0;
	int ans = solve(v, k, index);
	cout<<ans;
}