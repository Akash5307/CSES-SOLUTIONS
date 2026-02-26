#include <iostream>
#include <vector>

const int MOD = 1e9 + 7;

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    int n;
    std::cin >> n;

    std::vector<long long> dp(n + 1, 0);
    dp[0] = 1; // Base case: one way to make sum 0 (by not rolling)

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= 6; ++j) {
            if (i - j >= 0) {
                dp[i] = (dp[i] + dp[i - j]) % MOD;
            }
        }
    }
    std::cout << dp[n] << std::endl;
    return 0;
}
