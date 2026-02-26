// Kadane's algorithm.
// Maintain `cur` = maximum subarray sum ending at the current position.
// At each element, either extend the previous subarray or start a new one.
// `best` tracks the global maximum seen so far.
// Works correctly even when all elements are negative (subarray must be non-empty).

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef long long ll;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<ll> a(n);
    for (auto& x : a) cin >> x;

    ll best = a[0], cur = a[0];
    for (int i = 1; i < n; i++) {
        cur = max(a[i], cur + a[i]);
        best = max(best, cur);
    }
    cout << best << "\n";
    return 0;
}
