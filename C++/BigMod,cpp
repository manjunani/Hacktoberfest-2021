/// Modular exponentiation is a type of exponentiation performed over a modulus.

#include<bits/stdc++.h>
using namespace std;
#define ll long long int

ll M=1000000007;
ll BigMod(ll n, ll r)
{
    if(r==0) return 1;
    if(r==1) return n;
    if(r%2==0)
    {
        ll ret = BigMod(n, r/2);
        return ((ret%M) * (ret%M)) % M;
    }
    else return ((n%M) * (BigMod(n,r-1)%M)) % M;
}
int main()
{
    ll x = 222222;
    ll y = 555555;

    /// for (x^y)%M
    cout<<BigMod(x,y)<<endl;
    /// Output 138648421

    return 0;
}
