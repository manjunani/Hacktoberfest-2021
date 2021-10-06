#include <bits/stdc++.h>
using namespace std;
#define MOD 1000000007
typedef long long ll;

class Graph{
public:
	ll v;
	list<pair<ll, ll>> e;
	Graph(vector<pair<ll, ll>> a, int n){
		v = n;
		for(int i=0;i<a.size();i++){
			e.push_back(a[i]);
		}
	}
	void addEdge(pair<ll, ll> p){
		v++;
		e.push_back(p);
	}
	ll find_node(ll i, vector<ll>& parent){
		if(parent[i] == -1){
			return i;
		}
		return parent[i] = find_node(parent[i], parent);
	}

	void union_sets(ll i, ll j, vector<ll>& parent, vector<ll>& rank){
		ll s1 = find_node(i, parent);
		ll s2 = find_node(j, parent);
		if(s1 != s2){
			if(rank[s1] < rank[s2]){
				parent[s1] = s2;
				rank[s2] += rank[s1];
			}
			else {
				parent[s2] = s1;
				rank[s1] += rank[s2];
			}
		}
	}

	bool containsCycle(){
		vector<ll> parent(v, -1), rank(v, 1);
		for(auto i:e){
			int s1 = find_node(i.first, parent);
			int s2 = find_node(i.second, parent);
			if(s1 != s2){
				union_sets(s1, s2, parent, rank);
			}
			else{
				cout << s1 << " " << i.first << "          " << s2 << " " << i.second << endl; 
				return true;
			}
		}
		for(auto i:parent){
			cout << i << " ";
		}
		cout << endl;
		return false;
	}
};


void solve(){
	vector<pair<ll, ll>> v = {{0, 1}, {1, 2}, {2, 3}};
	Graph g(v, 4);
	g.addEdge({3, 0});
	cout << g.containsCycle() << endl;
}

int main(){
	int t=1;
	// cin >> t;
	while(t--){
		solve();
	}
}
