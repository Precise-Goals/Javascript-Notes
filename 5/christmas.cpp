#include <iostream>

using namespace std;
int main()
{
    int n;
    cin >> n;
    int med = (n / 2);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            cout << " ";
        }
        for (int j = 0; j <= i; j++) {
            if ((i > (med * 1.25)) && ((j == i) && (i != 0))) {
                cout << "#";
            } else if ((j == i) && (i != 0)) {
                cout << ":";
            } else if (j == i) {
                cout << "*";
            } else if (i == (n - 1) && (j > 0)) {
                cout << "_";
            } else if ((j == 0)) {
                cout << "/";
            } else {
                cout << ".";
            }
        }
        for (int j = 0; j < i; j++) {
            if (j == (i - 1)) {
                cout << "\\";
            } else if ((i == (n - 1)) && (j < (n - 1))) {
                cout << "_";
            } else {
                cout << ".";
            }
        }

        cout << endl;
    }
    for (int k = 0; k < (med * 0.5); k++) {
        for (int i = 0; i < n; i++) {
            if ((i == (n - 1))) {
                cout << "#";
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }

    return 0;
}