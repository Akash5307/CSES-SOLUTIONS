// Convert each customer [arrival, departure] into two events:
//   +1 at arrival time, -1 at departure time.
// Sort events by time; break ties by processing arrivals (+1) before departures (-1)
// so that customers present at the same moment are counted together.
// Track running count and record the maximum.

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<pair<int, int>> events;
    events.reserve(2 * n);
    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        events.push_back({a, +1});
        events.push_back({b, -1});
    }
    // At the same timestamp: arrival (+1) before departure (-1)
    sort(events.begin(), events.end(), [](const auto& x, const auto& y) {
        return x.first != y.first ? x.first < y.first : x.second > y.second;
    });

    int cur = 0, ans = 0;
    for (auto [t, d] : events) {
        cur += d;
        ans = max(ans, cur);
    }
    cout << ans << "\n";
    return 0;
}
