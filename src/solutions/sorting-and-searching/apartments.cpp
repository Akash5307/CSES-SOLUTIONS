#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    int n, m, k;
    std::cin >> n >> m >> k;
    std::vector<int> desired_sizes(n);
    std::vector<int> apartment_sizes(m);

    for (int i = 0; i < n; ++i) std::cin >> desired_sizes[i];
    for (int i = 0; i < m; ++i) std::cin >> apartment_sizes[i];

    std::sort(desired_sizes.begin(), desired_sizes.end());
    std::sort(apartment_sizes.begin(), apartment_sizes.end());

    int count = 0;
    int i = 0, j = 0;
    while (i < n && j < m) {
        if (std::abs(desired_sizes[i] - apartment_sizes[j]) <= k) {
            count++;
            i++;
            j++;
        } else if (desired_sizes[i] < apartment_sizes[j] - k) {
            i++;
        } else {
            j++;
        }
    }
    std::cout << count << std::endl;
    return 0;
}
