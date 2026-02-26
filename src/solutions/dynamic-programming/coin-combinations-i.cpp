// Count ordered sequences (order matters) of coins that sum to x.
// dp[i] = number of ordered ways to reach sum i.
// Inner loop over all coins for each sum → different orderings are counted separately.
// e.g. {1,2} and {2,1} are two different ways to make 3.

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
    for (int i = 1; i <= x; i++) {
        for (int ci : c) {
            if (ci <= i) {
                dp[i] = (dp[i] + dp[i - ci]) % MOD;
            }
        }
    }
    cout << dp[x] << "\n";
    return 0;
}
