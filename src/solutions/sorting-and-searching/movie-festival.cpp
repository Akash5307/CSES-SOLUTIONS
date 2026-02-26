// Classic interval scheduling: maximise the number of non-overlapping intervals.
// Greedy strategy: always pick the movie that ends earliest and doesn't overlap
// the last chosen movie. Sorting by end time guarantees this is optimal.

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<pair<int, int>> movies(n);
    for (auto& [a, b] : movies) cin >> a >> b;

    // Sort by end time
    sort(movies.begin(), movies.end(), [](const auto& x, const auto& y) {
        return x.second < y.second;
    });

    int count = 0, last_end = 0;
    for (auto [a, b] : movies) {
        if (a >= last_end) {
            count++;
            last_end = b;
        }
    }
    cout << count << "\n";
    return 0;
}
