#include <iostream>
#include <set>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    int n;
    std::cin >> n;
    std::set<int> distinct_elements;
    for (int i = 0; i < n; ++i) {
        int x;
        std::cin >> x;
        distinct_elements.insert(x);
    }
    std::cout << distinct_elements.size() << std::endl;
    return 0;
}
