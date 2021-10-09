/*
PROBLEM STATEMENT:
Given an n x m binary matrix grid. 
An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.
EXAMPLE:
n=3
m=3
grid:
1 0 0
1 1 1
0 0 0
MAXIMUM AREA OF ISLAND IS:4
*/
#include<bits/stdc++.h>
using namespace std;
void solve(vector<vector<int>>& grid,vector<int>&comp,int i,int j){
        if(i<0 || j<0 || i>=grid.size() || j>=grid[0].size() || grid[i][j]==0)
            return;
        comp.push_back(grid[i][j]);
        grid[i][j]=0;
        //exploring all the paths
        solve(grid,comp,i-1,j);
        solve(grid,comp,i+1,j);
        solve(grid,comp,i,j-1);
        solve(grid,comp,i,j+1);
    }
int maxAreaOfIsland(vector<vector<int>>& grid) {
        vector<vector<int>>v;
        for(int i=0;i!=grid.size();i++){
            for(int j=0;j!=grid[0].size();j++){
                if(grid[i][j]==1)
                {vector<int>comp;
                solve(grid,comp,i,j);
                v.push_back(comp);}
            }
        }
        int ans=0;
        for(int i=0;i!=v.size();i++){
            int n=v[i].size();
            ans=max(ans,n);
        }
        return ans;
    }
int main(){
    int n,m;
    cin>>n>>m;
    vector<vector<int>>grid(n,vector<int>(m));
    for(int i=0;i!=n;i++){
        for(int j=0;j!=m;j++){
            cin>>grid[i][j];
        }
    }
    cout<<"MAXIMUM AREA OF ISLAND IS:"<<maxAreaOfIsland(grid)<<endl;
}