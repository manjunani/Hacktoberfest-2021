
#include <iostream>
#include <stack>

using namespace std;

bool isValid(string s){
    int l = s.size();
    bool ans = true;
    stack<char> st;
    
    for (int i=0; i<l; i++){
        if (s[i] == '{' or s[i] == '(' or s[i] == '['){
            st.push(s[i]);
        }
        else if (!st.empty() and s[i] == '}'){
               if (st.top() == '{'){
                   st.pop();
               } 
               else{
                   ans = false;
                   break;
               }
            }
        else if (!st.empty() and s[i] == ')'){
               if (st.top() == '('){
                   st.pop();
               } 
               else{
                   ans = false;
                   break;
               }
            }
        else if (!st.empty() and s[i] == ']'){
               if (st.top() == '['){
                   st.pop();
               } 
               else{
                   ans = false;
                   break;
               }
            }
    }
    
    if (!st.empty()){
        return false;
    }
    return ans;
}


int main()
{
    string s = "{[()}]";
    if(isValid(s)){
        cout << "Valid String" << endl;
    }
    else{
        cout << "Invalid" << endl;
    }
    
    
    return 0;
}