#include <iostream>

int main() {
    long long n;
    std::cin >> n;
    while (true) {
        std::cout << n << " ";
        if (n == 1) break;
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }
    }
    std::cout << std::endl;
    return 0;
}