// Classic unbounded knapsack / coin change (minimum coins).
// dp[i] = minimum number of coins to make sum i.
// For each sum i, try every coin denomination c:
//   dp[i] = min(dp[i], dp[i - c] + 1)
// Answer is dp[x], or -1 if unreachable.

#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, x;
    cin >> n >> x;
    vector<int> c(n);
    for (auto& ci : c) cin >> ci;

    vector<int> dp(x + 1, INT_MAX);
    dp[0] = 0;
    for (int i = 1; i <= x; i++) {
        for (int ci : c) {
            if (ci <= i && dp[i - ci] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - ci] + 1);
            }
        }
    }
    cout << (dp[x] == INT_MAX ? -1 : dp[x]) << "\n";
    return 0;
}
