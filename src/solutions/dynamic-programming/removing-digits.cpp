// At each step you subtract any non-zero digit of the current number.
// dp[i] = minimum steps to reduce i to 0.
// For each value i, extract its digits and try subtracting each one:
//   dp[i] = min over all non-zero digits d of (dp[i - d] + 1)

#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;

    vector<int> dp(n + 1, INT_MAX);
    dp[0] = 0;
    for (int i = 1; i <= n; i++) {
        int x = i;
        while (x > 0) {
            int d = x % 10;
            x /= 10;
            if (d > 0 && dp[i - d] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - d] + 1);
            }
        }
    }
    cout << dp[n] << "\n";
    return 0;
}
