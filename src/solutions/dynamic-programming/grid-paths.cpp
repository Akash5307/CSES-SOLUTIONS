// Count paths from top-left to bottom-right moving only right or down.
// Blocked cells ('*') contribute 0 paths through them.
// dp[i][j] = number of ways to reach cell (i, j).
// dp[i][j] = dp[i-1][j] + dp[i][j-1]  (if cell is not blocked)
// Answer is dp[n-1][n-1].

#include <iostream>
#include <vector>
#include <string>
using namespace std;

const int MOD = 1e9 + 7;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> grid(n);
    for (auto& row : grid) cin >> row;

    vector<vector<long long>> dp(n, vector<long long>(n, 0));
    if (grid[0][0] == '.') dp[0][0] = 1;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == 0 && j == 0) continue;
            if (grid[i][j] == '*') continue;
            if (i > 0) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
            if (j > 0) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
        }
    }
    cout << dp[n - 1][n - 1] << "\n";
    return 0;
}
