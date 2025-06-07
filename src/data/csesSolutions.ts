
import type { ProblemSet } from '../types';

export const csesProblemSet: ProblemSet = [
  {
    name: 'Introductory Problems',
    problems: [
      {
        id: 'weird-algorithm',
        title: 'Weird Algorithm',
        csesLink: 'https://cses.fi/problemset/task/1068',
        difficulty: 'Easy',
        cppCode: `
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
        `,
        notes: 'A straightforward simulation problem. Be careful with potential overflow if n is large, use long long.'
      },
      {
        id: 'missing-number',
        title: 'Missing Number',
        csesLink: 'https://cses.fi/problemset/task/1083',
        difficulty: 'Easy',
        cppCode: `
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
        `,
        notes: 'The sum of numbers from 1 to n is n*(n+1)/2. Subtract the sum of given numbers from this total to find the missing one.'
      },
    ],
  },
  {
    name: 'Sorting and Searching',
    problems: [
      {
        id: 'distinct-numbers',
        title: 'Distinct Numbers',
        csesLink: 'https://cses.fi/problemset/task/1621',
        difficulty: 'Easy',
        cppCode: `
#include <iostream>
#include <vector>
#include <algorithm>
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
        `,
        notes: 'Using a set is the most straightforward way to count distinct elements. Sorting and then iterating also works.'
      },
      {
        id: 'apartments',
        title: 'Apartments',
        csesLink: 'https://cses.fi/problemset/task/1084',
        difficulty: 'Medium',
        cppCode: `
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
            // Applicant's desired size is too small for current apartment
            // even with tolerance. Move to next applicant.
            i++;
        } else {
            // Apartment size is too small for current applicant's desired size
            // even with tolerance. Move to next apartment.
            j++;
        }
    }
    std::cout << count << std::endl;
    return 0;
}
        `,
        notes: 'A greedy approach using two pointers after sorting both applicant desired sizes and apartment sizes.'
      },
    ],
  },
  {
    name: 'Dynamic Programming',
    problems: [
      {
        id: 'dice-combinations',
        title: 'Dice Combinations',
        csesLink: 'https://cses.fi/problemset/task/1633',
        difficulty: 'Medium',
        cppCode: `
#include <iostream>
#include <vector>

const int MOD = 1e9 + 7;

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    int n;
    std::cin >> n;

    std::vector<long long> dp(n + 1, 0);
    dp[0] = 1; // Base case: one way to make sum 0 (by not rolling)

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= 6; ++j) {
            if (i - j >= 0) {
                dp[i] = (dp[i] + dp[i - j]) % MOD;
            }
        }
    }
    std::cout << dp[n] << std::endl;
    return 0;
}
        `,
        notes: 'Classic DP problem. dp[i] is the number of ways to get sum i. Iterate through possible dice rolls (1-6).'
      },
    ],
  },
];
    