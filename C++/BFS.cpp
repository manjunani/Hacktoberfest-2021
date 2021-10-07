/*BFS stands for Breadth Firts Search .
It is a technique to travel graphs level order wise.
It uses queue data structure for traversal .It picks up a node,then pushed its content in it.
The process continues till queue is not empty;
We use a visited array to make sure we visit all the nodes.
Time complexity is O(N) whiere N is number of nodes.*/

#include<bits/stdc++.h>
 
using namespace std;
const int N=1e4;

int main()
{
  bool vis[N];
  vector<int> adj[N];

  for(int i=0;i<N;i++)
  {
      vis[i]=0;
  }

  int n,m;cin>>n>>m;
  for(int i=0;i<m;i++)
  {
      int x,y;
      cin>>x>>y;
      adj[x].push_back(y);
      adj[y].push_back(x);  
  }

  queue<int>q;

  q.push(1);
  vis[1]=true;

  while(!q.empty())
  {
      int node=q.front();
      q.pop();
      cout<<node<<"\n";

      vector<int>:: iterator it;

      for(it=adj[node].begin();it!=adj[node].end();it++)
      {
          if(!vis[*it])
          {
              vis[*it]=true;
              q.push(*it);
          }
      }
  }
}
/*
7 7
1 2
1 3
2 4
2 5
2 6
2 7
7 3
*/
