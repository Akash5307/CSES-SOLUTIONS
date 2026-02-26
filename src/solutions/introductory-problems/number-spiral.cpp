// The spiral is built in "layers". Layer d = max(row, col).
// The value at (d, d) is always d^2.
// Odd layers grow right along the bottom row, then up along the right column.
// Even layers grow down along the right column, then left along the bottom row.
//
// Formula:
//   base = (d-1)^2
//   odd d:  if r == d → base + c       (bottom row, left to right)
//           else      → base + d + (d-r)  (right column, top to bottom... going up)
//   even d: if c == d → base + r       (right column, top to bottom)
//           else      → base + d + (d-c)  (bottom row, right to left)

#include <iostream>
using namespace std;
typedef long long ll;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    cin >> t;
    while (t--) {
        ll r, c;
        cin >> r >> c;
        ll d = max(r, c);
        ll base = (d - 1) * (d - 1);
        ll ans;
        if (d % 2 == 1) {
            if (r == d) ans = base + c;
            else        ans = base + d + (d - r);
        } else {
            if (c == d) ans = base + r;
            else        ans = base + d + (d - c);
        }
        cout << ans << "\n";
    }
    return 0;
}
