// Count frequency of each letter.
// At most one letter may have an odd frequency (it goes in the middle).
// Build the left half using floor(freq/2) of each letter,
// place the odd-frequency letter in the middle, mirror the left half for the right.

#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s;
    cin >> s;
    int freq[26] = {};
    for (char c : s) freq[c - 'A']++;

    string left = "", mid = "";
    for (int i = 0; i < 26; i++) {
        if (freq[i] % 2 == 1) mid += char('A' + i);
        left += string(freq[i] / 2, 'A' + i);
    }
    if (mid.size() > 1) {
        cout << "NO SOLUTION\n";
        return 0;
    }
    string right = left;
    reverse(right.begin(), right.end());
    cout << left + mid + right << "\n";
    return 0;
}
