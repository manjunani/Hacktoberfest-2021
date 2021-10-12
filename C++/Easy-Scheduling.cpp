// This is a sample code to this codeforces problem 
// https://codeforces.com/contest/1578/problem/E

#include<bits/stdc++.h>
#include<sstream>
#include<algorithm>  
#include<unordered_map>
using namespace std; 
typedef long long int ll;
typedef unsigned long long int ull;
typedef priority_queue<ll> pqmax;
typedef priority_queue<ll, vector<ll>,greater<int> > pqmin;
typedef vector <ll> vll;
typedef vector <ull> vull;
typedef vector <string> vs;
typedef unordered_map <ll,ll> mll;
typedef unordered_map <ull,ull> mull;
typedef unordered_map <ll,string> mls;
typedef unordered_map <ull,string> muls;
typedef unordered_map <string,ll> msl;
typedef unordered_map <string,ull> msul;
#define SSTR( x ) static_cast< std::ostringstream & >( std::ostringstream() << std::dec << x ).str()
#define pob pop_back();
#define pub push_back();
#define mp make_pair();

bool sortbysec(const pair<int,int> &a,const pair<int,int> &b)
{return (a.second < b.second);}

template <typename C>
void print(const C &data){for(typename C::const_iterator it=data.begin();it!= data.end();++it){cout<<*it<<(char)32;}cout<<endl;}

template <typename C>
C maxe(vector <C> &data){return *max_element(data.begin(),data.end());}

template <typename C>
C mine(vector <C> &data){return *min_element(data.begin(),data.end());}

template <typename C>
void sortA(vector <C> &data){sort(data.begin(),data.end());}

template <typename C>
void sortD(vector <C> &data){sort(data.rbegin(),data.rend());}

template <typename C,typename D>
void sortp1D(vector <pair <C,D> > &data){sort(data.rbegin(),data.rend());}

template <typename C,typename D>
void sortp1A(vector <pair <C,D> > &data){sort(data.begin(),data.end());}

template <typename C,typename D>
void sortp2D(vector <pair <C,D> > &data){sort(data.rbegin(),data.rend(),sortbysec);}

template <typename C,typename D>
void sortp2A(vector <pair <C,D> > &data){sort(data.begin(),data.end(),sortbysec);}

mull StorePrime;
void SieveOfEratosthenes(ull n){
  bool prime[n + 1];
  memset(prime, 1, sizeof(prime));
  for (ull p = 2; p * p <= n; p++){
    if (prime[p] == true){
    for (ull i = p * p; i <= n; i += p)
      prime[i] = false;
    }
  }
  for (ull p = 2; p <= n; p++)
    if (prime[p])
      StorePrime[p]++;
}

int main()
{
    ios_base::sync_with_stdio(0); cin.tie(NULL); cout.tie(NULL);
    ll TestCases;
    cin>>TestCases;
    mll Powers; ll temp=1;

    // Firstly preprocessing all the powers of 2
    Powers[0]=temp;
    for(ll i=0;i<=50;i++){
        temp*=2;
        Powers[i+1]=temp;
    }

    while(TestCases--){
        ll a,b; cin>>a>>b;
        ll count=0,carry=0,tempSum=0;
        for(ll i=0;i<a;i++){
            // Checking if the power of 2 is less than the b 
            if(Powers[i]<=b){count++;}
            else{
                // Implementing a carry system that if the total 
                // set of children of the same level is not covered in a single
                // go then the childs of the covered parents will be also counted in the next iteration
                count+=(Powers[i]-carry)/b;
                if((Powers[i]-carry)%b==0){carry=0;}
                else{
                    count++;
                    carry=b-((Powers[i]-carry)%b);
                }
            }
        }
        cout<<count<<endl;
    }
    return 0;
}
