// Classic recursive solution.
// To move n disks from peg `from` to peg `to` using `aux` as helper:
//   1. Move n-1 disks from `from` to `aux` (using `to` as helper).
//   2. Move the largest disk from `from` to `to`.
//   3. Move n-1 disks from `aux` to `to` (using `from` as helper).
// Total moves = 2^n - 1.

#include <iostream>
using namespace std;

void hanoi(int n, int from, int to, int aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    cout << from << " " << to << "\n";
    hanoi(n - 1, aux, to, from);
}

int main() {
    int n;
    cin >> n;
    cout << (1LL << n) - 1 << "\n";
    hanoi(n, 1, 3, 2);
    return 0;
}
