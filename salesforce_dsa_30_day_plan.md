# Salesforce DSA Mastery: 30-Day Pattern Recognition Program

**Language:** Python
**Target skill:** Read an unfamiliar problem, name the pattern in under 60 seconds, derive the algorithm, code it clean, defend it.
**Non-goal:** Problem count.

---

## 0. Ground rules

1. Every problem is served **without a topic label**. You classify first, code second.
2. Before writing any code you answer the Eight Questions (Section 3).
3. Hints are released in stages, never all at once. Ask for "hint 1" if stuck for more than 10 minutes.
4. Every mistake goes in the Error Log with a **category**, not a description.
5. A problem is not done when it passes. It is done when you can re-derive it cold a week later.

---

## 1. Weekly arc

### Week 1, Days 1 to 7: Core pattern vocabulary
Arrays, hashing, frequency maps, prefix sums, difference arrays, two pointers, sliding window (fixed and variable), Kadane, in-place manipulation, matrix traversal, strings, linked lists, stack, queue, monotonic stack, monotonic deque.

Goal: build the trigger reflexes. By Day 7 the words "contiguous", "next greater", "at most K", "sorted", "in-place" should fire an instant hypothesis.

### Week 2, Days 8 to 14: Search, trees, heaps, intervals, greedy
Binary search boundaries, rotated arrays, first/last occurrence, **binary search on answer** (highest ROI topic of the week), tree DFS/BFS, recursive return-value design, BST invariants, LCA, path problems, tree construction, heaps (top K, K-way merge, two heaps, streaming median), interval merge/overlap/sweep line, greedy with exchange argument.

Goal: patterns that are one layer beneath the surface. The problem no longer says what it is.

### Week 3, Days 15 to 21: Graphs, backtracking, DP
Grid graphs, multi-source BFS, cycle detection (directed vs undirected), topological sort, Union-Find with path compression, Dijkstra, backtracking with pruning, then DP: 1D, 2D, grid, knapsack (0/1 and unbounded), subsequence DP, string DP, state-machine DP, memo to tab to space-optimized.

Goal: derivation over recall. You should be able to invent the recurrence, not remember it.

### Week 4, Days 22 to 30: Interview mode
No labels, no warnings, mixed difficulty, timed. Pattern-combination problems. Follow-ups that change constraints mid-solve. Full mocks with pushback. Spaced-repetition re-solves of anything you got wrong in Weeks 1 to 3.

Goal: instinct under pressure.

---

## 2. Daily loop (roughly 3 to 4 hours, scalable)

| Block | Time | What |
|---|---|---|
| Speed drill | 15 min | 8 to 10 problem *statements only*. Say the pattern out loud. No solving. |
| Pattern learning | 30 min | One pattern, its invariant, its failure modes. |
| Guided problems | 60 min | 2 problems where the pattern is visible. Full template. |
| Blind problems | 60 min | 1 to 2 problems, no topic given, timed. |
| Implementation drill | 20 min | Code a known algorithm from scratch, fast, no reference. |
| Error log + retrieval | 20 min | Log failures. Re-solve one problem from 3+ days ago. |

If a day gets compressed: keep **speed drill + blind problems**. Drop the rest.

---

## 3. The Eight Questions (answer before coding, every time)

1. What are the constraints? N, value range, negatives, duplicates, sortedness.
2. What observations does the structure give me?
3. What is the brute force?
4. Why is brute force too slow? (state the exact complexity)
5. What pattern or data structure removes the redundant work?
6. What invariant do I maintain?
7. What is the time and auxiliary space complexity, and why?
8. What breaks it? (empty, single element, all equal, negatives, overflow, cycles)

---

## 4. Trigger table (memorize the left column, not the right)

| Signal in the statement | First hypothesis |
|---|---|
| contiguous subarray/substring + constraint | Sliding window |
| contiguous + sum equals K + **negatives present** | Prefix sum + hashmap (window is invalid) |
| sorted array + pair/triplet/target | Two pointers |
| opposite ends, palindrome, partition | Two pointers |
| next/previous greater or smaller, histogram, span | Monotonic stack |
| max/min in every window of size K | Monotonic deque |
| minimize the maximum / maximize the minimum | Binary search on answer |
| "minimum capacity/speed/days to achieve X" | Binary search on answer + feasibility fn |
| rotated sorted array | Modified binary search |
| top K, K largest/smallest, streaming | Heap |
| merge K sorted things | Heap (K-way merge) |
| running median | Two heaps |
| overlapping intervals, meeting rooms, scheduling | Sort + sweep line or heap |
| shortest path, unweighted, fewest moves, levels | BFS |
| shortest path, weighted, non-negative | Dijkstra |
| all regions / islands / connected components | DFS or BFS or DSU |
| dynamic connectivity, "are these connected", redundant edge | Union-Find |
| prerequisites, dependency, ordering, DAG | Topological sort |
| all subsets/permutations/combinations, constraint search | Backtracking + pruning |
| count the ways / optimal with overlapping subproblems | DP |
| choose or skip at each index | 0/1 knapsack shape |
| two strings compared position by position | 2D string DP |
| buy/sell, hold/not-hold, cooldown | State-machine DP |
| prefix matching, autocomplete, word dictionary | Trie |
| N <= 20, subsets of a set | Bitmask |
| cycle in linked list, middle node, Kth from end | Fast/slow pointers |

**Discipline:** a trigger produces a *hypothesis*, not an answer. Always test it against the constraints before committing. Half of interview traps are a problem that looks like pattern A and is actually pattern B.

---

## 5. Constraints to complexity

| N | Acceptable complexity | Candidate techniques |
|---|---|---|
| <= 12 | O(N!) | permutation backtracking |
| <= 20 | O(2^N) | subsets, bitmask DP |
| <= 100 | O(N^3) | Floyd-Warshall, interval DP |
| <= 1,000 | O(N^2) | 2D DP, pairwise scans |
| <= 10^5 | O(N log N) | sorting, heap, binary search, monotonic stack |
| <= 10^6 | O(N) | hashing, two pointers, sliding window, prefix sums |
| <= 10^9 as a *value* | O(log N) | binary search on the answer space |

Read N first. Always. It eliminates entire families of solutions before you have thought about the problem at all.

---

## 6. Python fluency checklist

Must be reflex-level, zero syntax hesitation:

```python
from collections import Counter, defaultdict, deque
import heapq, bisect
from functools import lru_cache, cache

heapq.heappush(h, (dist, node))      # min-heap; negate for max-heap
heapq.nlargest(k, arr)
bisect.bisect_left(arr, x)           # first index >= x
bisect.bisect_right(arr, x)          # first index > x
arr.sort(key=lambda x: (x[0], -x[1]))
dq = deque(); dq.append(x); dq.popleft(); dq.pop()
d = defaultdict(list); d[k].append(v)
for i, val in enumerate(arr): ...
for a, b in zip(arr, arr[1:]): ...
@cache
def solve(i, j): ...
```

Also drill: recursion limit awareness (`sys.setrecursionlimit`), converting recursion to an explicit stack, tuple keys in dicts, `float('inf')`, integer division `//` on negatives, string building with `''.join`.

---

## 7. Error log (keep this file, one line per mistake)

Format: `date | problem | category | one-sentence root cause`

Categories:
- Pattern not recognized
- Wrong pattern chosen (trigger misfired)
- Constraint misread
- Wrong invariant
- Wrong data structure
- Brute force trap (settled too early)
- Off-by-one
- Edge case missed
- Complexity stated wrong
- Python implementation slip
- DP state wrong
- Greedy assumption unproven
- Graph traversal bug (visited set, direction, revisiting)

Any category appearing 3+ times becomes a dedicated drill day in Week 4.

---

## 8. Spaced repetition ladder

Each important problem moves through:

**Learn → Solve → Recall (24h) → Modify (state a variation) → Solve variation → Blind re-solve (7 days)**

A problem only exits the queue after a clean blind re-solve.

---

## 9. Mastery definition

A pattern is mastered when you can, without notes:

1. Recognize it in a new problem
2. Explain why it applies
3. State the invariant
4. Derive the algorithm from scratch
5. Implement it in clean Python
6. Analyze time and space and justify both
7. Enumerate the edge cases
8. Solve a variation
9. Explain the whole thing out loud while typing

Nine out of nine, or it is not mastered.

---

## 10. Timeline note

Openings are expected mid-to-late September, so the interview could land sooner than 30 days. The plan is front-loaded on purpose: Weeks 1 to 3 cover everything with the highest Salesforce hit rate. If the call comes early, the sequence still holds, just compressed, and Week 4 mocks get interleaved rather than saved for the end.

---

## 11. Highest-priority topics for a Salesforce-style loop

If time collapses, defend these first:

1. Hashing and frequency maps (appears everywhere)
2. Sliding window and prefix sums (and knowing which one, given negatives)
3. Two pointers
4. Monotonic stack
5. Binary search on answer
6. Trees: DFS with a designed return value, BFS by level, LCA
7. Heaps: top K, K-way merge
8. Intervals: merge, overlap, meeting rooms
9. Graphs: grid BFS/DFS, topological sort, Union-Find
10. DP: 1D, grid, 0/1 knapsack, string DP

Everything else is upside.
