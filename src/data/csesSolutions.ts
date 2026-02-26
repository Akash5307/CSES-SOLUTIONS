import type { ProblemSet } from '../types';

// ─── Introductory Problems ────────────────────────────────────────────────────
import weirdAlgorithm    from '../solutions/introductory-problems/weird-algorithm.cpp?raw';
import missingNumber     from '../solutions/introductory-problems/missing-number.cpp?raw';
import numberSpiral      from '../solutions/introductory-problems/number-spiral.cpp?raw';
import increasingArray   from '../solutions/introductory-problems/increasing-array.cpp?raw';
import permutations      from '../solutions/introductory-problems/permutations.cpp?raw';
import towerOfHanoi      from '../solutions/introductory-problems/tower-of-hanoi.cpp?raw';
import palindromeReorder from '../solutions/introductory-problems/palindrome-reorder.cpp?raw';

// ─── Sorting and Searching ────────────────────────────────────────────────────
import distinctNumbers      from '../solutions/sorting-and-searching/distinct-numbers.cpp?raw';
import apartments           from '../solutions/sorting-and-searching/apartments.cpp?raw';
import ferrisWheel          from '../solutions/sorting-and-searching/ferris-wheel.cpp?raw';
import restaurantCustomers  from '../solutions/sorting-and-searching/restaurant-customers.cpp?raw';
import maximumSubarraySum   from '../solutions/sorting-and-searching/maximum-subarray-sum.cpp?raw';
import stickLengths         from '../solutions/sorting-and-searching/stick-lengths.cpp?raw';
import sumOfTwoValues       from '../solutions/sorting-and-searching/sum-of-two-values.cpp?raw';
import movieFestival        from '../solutions/sorting-and-searching/movie-festival.cpp?raw';
import josephusProblemII    from '../solutions/sorting-and-searching/josephus-problem-ii.cpp?raw';

// ─── Dynamic Programming ─────────────────────────────────────────────────────
import diceCombinations           from '../solutions/dynamic-programming/dice-combinations.cpp?raw';
import minimizingCoins            from '../solutions/dynamic-programming/minimizing-coins.cpp?raw';
import coinCombinationsI          from '../solutions/dynamic-programming/coin-combinations-i.cpp?raw';
import coinCombinationsII         from '../solutions/dynamic-programming/coin-combinations-ii.cpp?raw';
import removingDigits             from '../solutions/dynamic-programming/removing-digits.cpp?raw';
import gridPaths                  from '../solutions/dynamic-programming/grid-paths.cpp?raw';
import longestIncreasingSubseq    from '../solutions/dynamic-programming/longest-increasing-subsequence.cpp?raw';

export const csesProblemSet: ProblemSet = [
  {
    name: 'Introductory Problems',
    problems: [
      {
        id: 'weird-algorithm',
        title: 'Weird Algorithm',
        csesLink: 'https://cses.fi/problemset/task/1068',
        difficulty: 'Easy',
        cppCode: weirdAlgorithm,
        notes: 'A straightforward simulation. Use long long to avoid overflow when n is large.',
      },
      {
        id: 'missing-number',
        title: 'Missing Number',
        csesLink: 'https://cses.fi/problemset/task/1083',
        difficulty: 'Easy',
        cppCode: missingNumber,
        notes: 'The sum of 1..n is n*(n+1)/2. Subtract the sum of the given numbers to find the missing one.',
      },
      {
        id: 'number-spiral',
        title: 'Number Spiral',
        csesLink: 'https://cses.fi/problemset/task/1071',
        difficulty: 'Easy',
        cppCode: numberSpiral,
        notes: 'Observe that the spiral is built in "layers" where layer d = max(row, col). The value at (d,d) is always d². Odd and even layers fill in opposite directions — derive a closed-form formula from this pattern.',
      },
      {
        id: 'increasing-array',
        title: 'Increasing Array',
        csesLink: 'https://cses.fi/problemset/task/1094',
        difficulty: 'Easy',
        cppCode: increasingArray,
        notes: 'Scan left to right. Whenever a[i] < a[i-1], raise a[i] to a[i-1] and add the difference to the move count. Decreasing elements is never beneficial.',
      },
      {
        id: 'permutations',
        title: 'Permutations',
        csesLink: 'https://cses.fi/problemset/task/1070',
        difficulty: 'Easy',
        cppCode: permutations,
        notes: 'Place all even numbers first, then all odd numbers. Adjacent elements in each half differ by 2, and the join gap is ≥ 3. n=2 and n=3 are impossible.',
      },
      {
        id: 'tower-of-hanoi',
        title: 'Tower of Hanoi',
        csesLink: 'https://cses.fi/problemset/task/2165',
        difficulty: 'Easy',
        cppCode: towerOfHanoi,
        notes: 'Classic recursion: to move n disks from A to C, move n-1 disks to B, move the largest to C, then move n-1 disks from B to C. Total moves = 2ⁿ - 1.',
      },
      {
        id: 'palindrome-reorder',
        title: 'Palindrome Reorder',
        csesLink: 'https://cses.fi/problemset/task/1755',
        difficulty: 'Easy',
        cppCode: palindromeReorder,
        notes: 'A palindrome can be formed if and only if at most one character has an odd frequency. Place floor(freq/2) of each letter on the left half, the single odd-count letter in the middle, then mirror.',
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
        cppCode: distinctNumbers,
        notes: 'Insert all numbers into a std::set — its size equals the count of distinct elements.',
      },
      {
        id: 'apartments',
        title: 'Apartments',
        csesLink: 'https://cses.fi/problemset/task/1084',
        difficulty: 'Medium',
        cppCode: apartments,
        notes: 'Sort both arrays, then use two pointers to greedily match applicants to apartments within tolerance k.',
      },
      {
        id: 'ferris-wheel',
        title: 'Ferris Wheel',
        csesLink: 'https://cses.fi/problemset/task/1090',
        difficulty: 'Easy',
        cppCode: ferrisWheel,
        notes: 'Sort by weight. Use two pointers: try to pair the lightest child with the heaviest. If they fit (sum ≤ x), both board together; otherwise the heavy child goes alone.',
      },
      {
        id: 'restaurant-customers',
        title: 'Restaurant Customers',
        csesLink: 'https://cses.fi/problemset/task/1619',
        difficulty: 'Easy',
        cppCode: restaurantCustomers,
        notes: 'Sweep line with events: +1 for each arrival, -1 for each departure. Sort by time (arrivals before departures at the same time). Track running count and record the maximum.',
      },
      {
        id: 'maximum-subarray-sum',
        title: 'Maximum Subarray Sum',
        csesLink: 'https://cses.fi/problemset/task/1643',
        difficulty: 'Easy',
        cppCode: maximumSubarraySum,
        notes: "Kadane's algorithm: maintain the best sum ending at the current position. Either extend the previous subarray or start fresh. Works correctly when all elements are negative.",
      },
      {
        id: 'stick-lengths',
        title: 'Stick Lengths',
        csesLink: 'https://cses.fi/problemset/task/1074',
        difficulty: 'Easy',
        cppCode: stickLengths,
        notes: 'The target length minimising the total absolute difference is the median of the array. Sorting and picking p[n/2] gives the optimal answer.',
      },
      {
        id: 'sum-of-two-values',
        title: 'Sum of Two Values',
        csesLink: 'https://cses.fi/problemset/task/1640',
        difficulty: 'Easy',
        cppCode: sumOfTwoValues,
        notes: 'Hash-map lookup: for each element a[i], check whether (target - a[i]) was seen earlier. Store value → index as you scan left to right to avoid reusing the same element.',
      },
      {
        id: 'movie-festival',
        title: 'Movie Festival',
        csesLink: 'https://cses.fi/problemset/task/1629',
        difficulty: 'Medium',
        cppCode: movieFestival,
        notes: 'Classic interval scheduling / activity selection. Sort movies by end time. Greedily pick each movie that starts no earlier than the last chosen end time.',
      },
      {
        id: 'josephus-problem-II',
        title: 'Josephus Problem II',
        csesLink: 'https://cses.fi/problemset/task/2163',
        difficulty: 'Hard',
        cppCode: josephusProblemII,
        notes: 'Use a policy-based ordered set (pb_ds tree) that supports O(log n) find-by-order and order-of-key. At each step, compute the index modulo the current size, retrieve and erase that element.',
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
        difficulty: 'Easy',
        cppCode: diceCombinations,
        notes: 'dp[i] = number of ordered ways to reach sum i with a 6-sided die. For each i, add dp[i-j] for j = 1..6. Base case dp[0] = 1.',
      },
      {
        id: 'minimizing-coins',
        title: 'Minimizing Coins',
        csesLink: 'https://cses.fi/problemset/task/1634',
        difficulty: 'Easy',
        cppCode: minimizingCoins,
        notes: 'Classic coin change (minimum coins). dp[i] = min coins for sum i. For each sum, try every denomination. dp[0] = 0, rest start at ∞. Output -1 if unreachable.',
      },
      {
        id: 'coin-combinations-i',
        title: 'Coin Combinations I',
        csesLink: 'https://cses.fi/problemset/task/1635',
        difficulty: 'Easy',
        cppCode: coinCombinationsI,
        notes: 'Count ordered sequences that sum to x (order matters). Inner loop iterates over all coins for each sum, so {1,2} and {2,1} are counted as separate ways.',
      },
      {
        id: 'coin-combinations-ii',
        title: 'Coin Combinations II',
        csesLink: 'https://cses.fi/problemset/task/1636',
        difficulty: 'Medium',
        cppCode: coinCombinationsII,
        notes: 'Count unordered multisets that sum to x (order does NOT matter). Outer loop iterates over coins, inner over sums — this is the key structural difference from Coin Combinations I.',
      },
      {
        id: 'removing-digits',
        title: 'Removing Digits',
        csesLink: 'https://cses.fi/problemset/task/1637',
        difficulty: 'Easy',
        cppCode: removingDigits,
        notes: 'dp[i] = minimum steps to reduce i to 0. For each value i, extract its digits and update dp[i] = min(dp[i], dp[i-d]+1) for each non-zero digit d.',
      },
      {
        id: 'grid-paths',
        title: 'Grid Paths',
        csesLink: 'https://cses.fi/problemset/task/1638',
        difficulty: 'Easy',
        cppCode: gridPaths,
        notes: 'Count paths from (0,0) to (n-1,n-1) moving only right or down. dp[i][j] = dp[i-1][j] + dp[i][j-1]. Blocked cells (*) are set to 0 and stop propagation.',
      },
      {
        id: 'longest-increasing-subsequence',
        title: 'Longest Increasing Subsequence',
        csesLink: 'https://cses.fi/problemset/task/1145',
        difficulty: 'Medium',
        cppCode: longestIncreasingSubseq,
        notes: "O(n log n) patience sorting. Maintain `tails` where tails[i] is the smallest tail of any IS of length i+1. For each element, binary search (lower_bound) to find where it replaces or extends tails. The size of tails is the LIS length.",
      },
    ],
  },
];
