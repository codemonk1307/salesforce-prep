Recently interviewed at a CRM tech giant for the MTS (SDE-II) role. Did not convert this time, but sharing the round-wise gist and approaches, might help someone preparing!

Format: Online assessment (2 problems) -> 2 virtual rounds -> 2 face-to-face rounds -> Hiring manager round. 10 problems in total (9 DSA + 1 SQL).

Online Assessment
1. Shift-cipher decryption on a wrap-around alphabet wheel.
Approach: reduce the shift modulo 26 first, then one pass with ord/chr. TC: O(n) | SC: O(1)

2. Binary string where every "01" flips to "10" simultaneously each second; return the number of seconds until it stops changing.
Approach: do not simulate. Each '1' must cross all zeros before it, but cannot overtake the '1' ahead, so finish_time = max(prev_finish + 1, zeros_before). TC: O(n) | SC: O(1)

Round 1 (virtual)
3. Sort a string by decreasing character frequency.
Approach: count once, then order the distinct characters by count (bucket by frequency if they ask for no comparison sort). TC: O(n)

Round 2 (virtual)
4. Remove duplicate letters so each appears once, result lexicographically smallest, relative order kept.
Approach: greedy monotonic stack; pop a larger top only if that letter appears again later. TC: O(n)

5. Sum of the minimum of every contiguous subarray.
Approach: contribution technique, count for how many subarrays each element is the minimum using previous-smaller / next-smaller from a monotonic stack (strict on one side, non-strict on the other for duplicates). TC: O(n)
Follow-up: sum of all subarray sums, element i contributes (i+1)*(n-i) times, no stack needed.

Round 3 (face to face, 2 DSA + 1 SQL)
6. Maximum-length palindrome you can form using two given strings.
Approach: interval DP (longest palindromic subsequence) on the concatenation, only accepting an outer matched pair that straddles the two strings. TC: O((m+n)^2)

7. Directed graph containing cycles: for every node, distance to the nearest node that lies on a cycle.
Approach: find cycle nodes (peel in-degree-0 nodes, or SCC for the general case), then a single multi-source BFS on the reversed graph. TC: O(V+E)

8. SQL: number of times each student attempted a given exam across two tables.
Approach: LEFT JOIN with the filter in the ON clause, COUNT(column) not COUNT(*), GROUP BY student.

Round 4 (face to face, 2 DSA)
9. Array of task durations; each operation reduces one task by 1 and a task at 0 is removed. Minimum operations so that all remaining tasks are equal.
Approach: sort + prefix sums, try every value as the final target. Exchange argument: anything below the target must be removed, anything above is cheaper to reduce than to remove. TC: O(n log n)

10. Construct a binary tree from its inorder and level-order traversals.
Approach: first of level-order is the root; split inorder around it; filter level-order into left/right keeping relative order; recurse. TC: O(n log n) balanced, O(n^2) skewed. Follow-up: O(n) with a queue of inorder ranges.

Themes that repeated: frequency counting, monotonic stack (twice), a counting insight instead of simulation, interval DP, cycle detection + BFS, prefix sums with a greedy proof, tree construction, and basic SQL. Saying the invariant and complexity out loud, testing your own edge cases, and clean code mattered as much as the solution itself.

Hope this helps! Feel free to drop your approach or suggestions.

You can follow/ connect with Sachin Mishra for more such informative content. Thank you everyone for your time. Apologies for any mistake.

#DSA #Salesforce #Python #SQL #Graphs #DynamicProgramming #CodingInterview
