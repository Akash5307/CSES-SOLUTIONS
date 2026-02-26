// For each element a[i], check if (target - a[i]) was seen earlier.
// Store value → 1-based index in a hash map as we scan left to right.
// This avoids using the same element twice and finds the pair in O(n) average.

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto& ai : a) cin >> ai;

    unordered_map<int, int> seen; // value → 1-based index
    for (int i = 0; i < n; i++) {
        int need = x - a[i];
        if (seen.count(need)) {
            cout << seen[need] << " " << i + 1 << "\n";
            return 0;
        }
        seen[a[i]] = i + 1;
    }
    cout << "IMPOSSIBLE\n";
    return 0;
}
