#include <iostream>
#include <vector>
#include <numeric>

int main() {
    long long n;
    std::cin >> n;
    long long sum_n = n * (n + 1) / 2;
    long long current_sum = 0;
    for (int i = 0; i < n - 1; ++i) {
        long long x;
        std::cin >> x;
        current_sum += x;
    }
    std::cout << sum_n - current_sum << std::endl;
    return 0;
}
