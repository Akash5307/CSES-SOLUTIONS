// Scan left to right. Whenever a[i] < a[i-1], we must increase a[i] to a[i-1].
// The cost is the difference, and we update a[i] for subsequent comparisons.
// This is greedy — increasing is always cheaper than decreasing neighbours.

#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<long long> a(n);
    for (auto& x : a) cin >> x;

    long long moves = 0;
    for (int i = 1; i < n; i++) {
        if (a[i] < a[i - 1]) {
            moves += a[i - 1] - a[i];
            a[i] = a[i - 1];
        }
    }
    cout << moves << "\n";
    return 0;
}
