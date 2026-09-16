# Salesforce Beast Prep

A single-file, offline, mobile-friendly interview prep page for a Salesforce MTS / SDE-2 loop (Python).

**Open:** [`salesforce_beast_prep.html`](salesforce_beast_prep.html) — no build, no dependencies. Works on any screen width.

## What is inside

| Section | Contents |
|---|---|
| 1. Loop | Round-by-round format and what each round scores; the 8-step talk-through script |
| 2. 30-day plan | Ground rules, weekly arc, daily loop, priority topics |
| 3. Eight Questions | Answer before writing code, every time |
| 4. Triggers | Statement signal → first hypothesis; constraints → complexity |
| 5. Python shortcuts | collections / heapq / bisect / itertools / bits, built-in complexities, pitfalls |
| 6. DS templates | Linked list, stacks, monotonic stack/deque, heaps, trie, DSU, LRU/LFU, Fenwick/segment tree, BST, graph representation, topological sort, design classes |
| 7. Algo templates | Sliding window, prefix sums, two pointers, binary search (incl. on answer), sorting, matrix, trees, graphs, backtracking, DP, intervals, greedy, string parsing, bits/math, iterators |
| 8. My loop ★ | The 10 problems from the actual loop (OA + 4 rounds), each with the optimal solution and the reason it is optimal |
| 9. Asked at Salesforce | ~190 community-reported problems grouped by pattern, with hints and progress checkboxes |
| 10. Follow-ups | Constraint changes interviewers throw mid-solve, and the new answer |
| 11. LLD / HLD | Parking lot code, design skeletons, HLD one-pagers, concurrency, OOP/DB/OS rapid-fire |
| 12. Behavioral | Values, STAR story bank, expected questions |
| 13. Process | Error log categories, spaced repetition, mastery definition, speed drill deck |
| Lazy mode ▶ | Full-screen swipe deck: 59 concepts, each as pain → trick → feel it → snippet → trigger words → self-check, with Got it / Again and a streak |

Progress (checkboxes, Lazy-mode cards, error log, theme) is stored in the browser's localStorage only.

## Files

- `salesforce_beast_prep.html` — the page (generated)
- `src/parts/*.html` — source sections; `src/build.js` — concatenates them and HTML-escapes code blocks
- `salesforce_dsa_30_day_plan.md` — the original plan this was built from

## Rebuild after editing a part

```bash
node src/build.js salesforce_beast_prep.html
```

Code inside `<pre>` blocks in `src/parts` is written raw (no HTML escaping); the build step escapes it.
