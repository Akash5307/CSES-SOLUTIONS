// Sort weights. Use two pointers: try to pair the lightest (l) with the heaviest (r).
// If they fit together (sum <= x), both board one gondola → l++, r--.
// Otherwise the heaviest must ride alone → r--.
// Either way one gondola is used per iteration.

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, x;
    cin >> n >> x;
    vector<int> w(n);
    for (auto& wi : w) cin >> wi;
    sort(w.begin(), w.end());

    int gondolas = 0, l = 0, r = n - 1;
    while (l <= r) {
        if (w[l] + w[r] <= x) l++;
        r--;
        gondolas++;
    }
    cout << gondolas << "\n";
    return 0;
}
