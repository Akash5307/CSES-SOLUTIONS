// Count unordered multisets (order does NOT matter) of coins that sum to x.
// This is the classic unbounded knapsack counting variant.
// Key difference from Coin Combinations I: outer loop is over coins, inner over sums.
// This ensures each combination is counted exactly once regardless of order.
// e.g. {1,2} and {2,1} are the SAME combination → counted once.

#include <iostream>
#include <vector>
using namespace std;

const int MOD = 1e9 + 7;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, x;
    cin >> n >> x;
    vector<int> c(n);
    for (auto& ci : c) cin >> ci;

    vector<long long> dp(x + 1, 0);
    dp[0] = 1;
    for (int ci : c) {           // outer: coins
        for (int i = ci; i <= x; i++) {  // inner: sums
            dp[i] = (dp[i] + dp[i - ci]) % MOD;
        }
    }
    cout << dp[x] << "\n";
    return 0;
}
