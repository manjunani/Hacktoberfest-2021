#include <bits/stdc++.h>

using namespace std;

typedef pair<int, int> pi;

class Solution
{
public:
  
    //Function to find the shortest distance of all the vertices
    //from the source vertex S.
    void shortest(int src, vector<vector<int>> adj[], int V, vector<int> &dist)
    {
        priority_queue<pi, vector<pi>, greater<pi>> que;
        que.push(make_pair(0, src));

        dist[src] = 0;
        while (que.size() > 0)
        {
            int rem = que.top().second;
            que.pop();

            for (vector<int> v : adj[rem])
            {
                if (dist[v[0]] > dist[rem] + v[1])
                {
                    dist[v[0]] = dist[rem] + v[1];
                    que.push(make_pair(dist[v[0]], v[0]));
                }
            }
        }
    }

    vector<int> dijkstra(int V, vector<vector<int>> adj[], int S)
    {
        vector<int> dist(V, INT_MAX);

        shortest(S, adj, V, dist);

        return dist;
    }
};

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int V, E;
        cin >> V >> E;
        vector<vector<int>> adj[V];
        int i = 0;
        while (i++ < E)
        {
            int u, v, w;
            cin >> u >> v >> w;
            vector<int> t1, t2;
            t1.push_back(v);
            t1.push_back(w);
            adj[u].push_back(t1);
            t2.push_back(u);
            t2.push_back(w);
            adj[v].push_back(t2);
        }
        int S;
        cin >> S;

        Solution obj;
        vector<int> res = obj.dijkstra(V, adj, S);

        for (int i = 0; i < V; i++)
            cout << res[i] << " ";
        cout << endl;
    }

    return 0;
}
