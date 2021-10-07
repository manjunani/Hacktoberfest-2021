/*        	**********
		  	****  ****
			***    ***
			**      **
			*        *
			*        *
			**      **
			***    ***
			****  ****
			**********      */

#include<iostream>
using namespace std;
int main()
{
	int i,j,k,m;
	int n;
	cin>>n;
	k=m=n;
	for(i=1;i<=n;i++)
	{
		for(j=1;j<=k;j++)
		{
			cout<<"*";
		}
		for(j=k;j<m;j++)
		{
			cout<<" ";
		}
		for(j=m;j<=2*n-1;j++)
		{
			cout<<"*";
		}
		m++;k--;
		cout<<endl;
	}
	m--,k++;
	for(i=1;i<=n;i++)
	{
		for(j=k;j>=1;j--)
	    {
		cout<<"*";
		}
		for(j=m;j>k;j--)
		{
			cout<<" ";
		}
		for(j=2*n-1;j>=m;j--)
		{
			cout<<"*";
		}
		m--,k++;
		cout<<endl;
	}
	
}
