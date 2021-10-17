// Skyline Real Estate Developers is planning to demolish a number of old, unoccupied buildings and construct a shopping mall in their place. Your task is to find the largest solid area in which the mall can be constructed.

// There are a number of buildings in a certain two-dimensional landscape. Each building has a height, given by h[i] where i∈[1,n] . If you join  adjacent buildings, they will form a solid rectangle of area k*min(h[i],h[i+1],h[i+2],.....,h[i+k-1])Find the area of the largest rectangle that can be formed within the bounds of consecutive buildings.

// Input Format
// The first line contains , the number of buildings.
// The second line contains  space-separated integers, each the height of a building.


#include<bits/stdc++.h>
using namespace std;
int main()
{
  int n;
  cin>>n;
  int a[n],w[n],m=0;
  stack<pair<int,int>> sl,sr;
  vector<int> l,r;
  for(int i=0;i<n;i++)
     cin>>a[i];
  for(int i=0;i<n;i++)
  {
    if(sl.size()==0)
      l.push_back(-1);
    else if(sl.top().first<a[i])
      l.push_back(sl.top().second);
    else
    {
      while(sl.size()!=0 && sl.top().first>=a[i])
        sl.pop();
      if(sl.size()==0)
        l.push_back(-1);
      else
        l.push_back(sl.top().second);
    }
  sl.push({a[i],i});
  }
  for(int i=n-1;i>=0;i--)
  {
    if(sr.size()==0)
      r.push_back(n);
    else if(sr.top().first<a[i])
      r.push_back(sr.top().second);
    else
    {
      while(sr.size()!=0 && sr.top().first>=a[i])
        sr.pop();
      if(sr.size()==0)
        r.push_back(n);
      else
        r.push_back(sr.top().second);
    }
    sr.push({a[i],i});
  }
   reverse(r.begin(),r.end());
   for(int i=0;i<n;i++)
   {
       w[i]=r[i]-l[i]-1;
   }
  for(int i=0;i<n;i++)
  {
    if(w[i]*a[i]>m)
      m=w[i]*a[i];
  }
  cout<<m<<endl;
}
