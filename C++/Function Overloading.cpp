#include <iostream>
using namespace std;

void print(int s) {
cout << " Area of square is " << s*s<< endl;
}
void print(int l,int b) {
cout << " Area of Rectangle is " << l*b << endl;
}
void print(double r) {
cout << "Area of a circle is " << 3.14*r*r<< endl;
}

int main() {
print(20);
print(10,20);
print(2.5);
return 0;
}
