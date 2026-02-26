// The target length that minimises the sum of absolute differences is the median.
// Proof: moving the target away from the median always increases the total cost.
// After sorting, the median is p[n/2] (0-indexed). Compute sum |p[i] - median|.

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
    vector<ll> p(n);
    for (auto& x : p) cin >> x;
    sort(p.begin(), p.end());

    ll median = p[n / 2];
    ll cost = 0;
    for (ll x : p) cost += abs(x - median);
    cout << cost << "\n";
    return 0;
}
