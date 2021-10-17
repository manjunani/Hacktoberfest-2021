/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;
#define n 100


class stack{
    int* arr;
    int top;
    
    public:
    stack(){
        arr = new int[n];
        top = -1;
    }
    
    void push(int x){
        if (arr[top] == n-1){
            cout << "Stack overflow!" << endl;
            return;
        }
        top ++;
        arr[top] = x;
    }
    
    void pop(){
        if (arr[top] == -1){
            cout << "No element to pop!" << endl;
            return;
        }
        top --;
    }
    
    int Top(){
        if (top == -1){
            cout << "No element in stack!" << endl;
            return -1;
        }
        return arr[top];
    }
    
    bool empty(){
        if (top == -1){
            return true;
        }
        return false;
    }
};


int main()
{
    stack st;
    st.push(1);
    st.push(2);
    st.push(3);
    cout << st.Top() << endl;
    st.pop();
    cout << st.Top() << endl;
    st.pop();
    st.pop();
    cout << st.Top() << endl;
    
    return 0;
}
