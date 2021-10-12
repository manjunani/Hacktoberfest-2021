#include <iostream>
#include <math.h>
#include <algorithm>
using namespace std;

bool check(int num1, int num2, int num3)
{
    int a = max(num1, max(num2, num3));
    int b, c;
    if (a == num1)
    {
        b = num2;
        c = num3;
    }
    else if (a == num2)
    {
        b = num1;
        c = num3;
    }
    else if (a == num3)
    {
        b = num2;
        c = num1;
    }

    if (pow(a, 2) == pow(b, 2) + pow(c, 2))
    {
        return true;
    }
    else
    {
        return false;
    }
}

int main()
{
    int x, y, z;
    cin >> x >> y >> z;
    if (check(x, y, z))
    {
        cout << "Pythagorean Triplet" << endl;
    }
    else
    {
        cout << "not a Pythagorean Triplet" << endl;
    }

    return 0;
}