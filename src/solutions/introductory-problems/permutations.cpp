// Place all even numbers first, then all odd numbers.
// Adjacent elements in each half differ by 2, and the gap at the join is odd >= 3.
// n=1 is trivially [1]. n=2 and n=3 have no valid arrangement → NO SOLUTION.

#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n == 1) {
        cout << 1 << "\n";
    } else if (n <= 3) {
        cout << "NO SOLUTION\n";
    } else {
        for (int i = 2; i <= n; i += 2) cout << i << " ";
        for (int i = 1; i <= n; i += 2) cout << i << " ";
        cout << "\n";
    }
    return 0;
}
