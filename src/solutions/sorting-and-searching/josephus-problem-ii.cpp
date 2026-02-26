#include <bits/stdc++.h>
using namespace std;
#define ll long long int
const int Mod = 1e9 + 7;
using vi = vector<int>;
using vvi = vector<vi>;

#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;
template<typename T>
using ordered_set = tree<T, null_type, less<T>, rb_tree_tag, tree_order_statistics_node_update>;
// find_by_order(k) -> iterator to k-th element (0-indexed)
// order_of_key(x)  -> count of elements strictly less than x

void solve() {
    ll n, k;
    cin >> n >> k;
    ordered_set<int> T;
    for (int i = 1; i <= n; i++) {
        T.insert(i);
    }
    int indx = k;
    while (T.size() > 0) {
        indx %= T.size();
        int x = *T.find_by_order(indx);
        T.erase(x);
        cout << x << " ";
        indx += k;
    }
}

int main() {
    int t = 1;
    while (t--) {
        solve();
    }
    return 0;
}
