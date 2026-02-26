// O(n log n) patience sorting approach.
// Maintain `tails`: tails[i] is the smallest possible tail element of
// any increasing subsequence of length i+1 found so far.
//
// For each element x:
//   - Find the first position in tails where tails[pos] >= x (lower_bound).
//   - Replace tails[pos] with x (or append x if pos == tails.size()).
//
// The length of tails at the end equals the length of the LIS.
// Uses lower_bound → strictly increasing. Use upper_bound for non-decreasing.

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto& x : a) cin >> x;

    vector<int> tails; // tails[i] = smallest tail of all IS with length i+1
    for (int x : a) {
        auto it = lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end()) tails.push_back(x);
        else *it = x;
    }
    cout << tails.size() << "\n";
    return 0;
}
