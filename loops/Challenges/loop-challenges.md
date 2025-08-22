# JavaScript Loop Challenges: Beginner to Advanced

*70 Progressive Challenges to Master All Types of Loops*

## Table of Contents

- [Loop Types Overview](#loop-types-overview)
- [Loop Best Practices](#loop-best-practices)
- [Common Loop Patterns](#common-loop-patterns)
- [Beginner Challenges (1-20)](#beginner-challenges)
- [Intermediate Challenges (21-45)](#intermediate-challenges)
- [Advanced Challenges (46-70)](#advanced-challenges)

---

## Loop Types Overview

### 1. For Loop
The most common loop type, ideal when you know the number of iterations.
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

### 2. While Loop
Best when the number of iterations is unknown and depends on a condition.
```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

### 3. Do-While Loop
Executes at least once, then continues while condition is true.
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

### 4. For-In Loop
Iterates over enumerable properties of an object.
```javascript
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key, obj[key]);
}
```

### 5. For-Of Loop
Iterates over iterable objects (arrays, strings, etc.).
```javascript
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}
```

### 6. Array Methods (Functional Loops)
Modern JavaScript provides array methods that act as loops:
- `forEach()` - Execute function for each element
- `map()` - Transform each element
- `filter()` - Select elements based on condition
- `reduce()` - Accumulate values
- `find()` - Find first matching element
- `some()` - Test if any element matches
- `every()` - Test if all elements match

---

## Loop Best Practices

### Performance Tips
1. **Cache array length** in for loops: `for (let i = 0, len = arr.length; i < len; i++)`
2. **Use appropriate loop type** for the task
3. **Avoid nested loops** when possible (O(n²) complexity)
4. **Break early** when condition is met
5. **Use continue** to skip unnecessary iterations

### Code Quality
1. **Use descriptive variable names** instead of `i, j, k`
2. **Keep loop bodies small** and focused
3. **Extract complex logic** into functions
4. **Avoid modifying loop variables** inside the loop body
5. **Use const/let** instead of var for loop variables

### Common Pitfalls
1. **Off-by-one errors** (starting at 1 instead of 0)
2. **Infinite loops** (forgetting to update loop variable)
3. **Modifying arrays** while iterating over them
4. **Closure issues** with var in loops (use let instead)

---

## Common Loop Patterns

### 1. Accumulator Pattern
```javascript
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
```

### 2. Counter Pattern
```javascript
let count = 0;
for (let item of items) {
    if (condition(item)) count++;
}
```

### 3. Search Pattern
```javascript
let found = false;
for (let i = 0; i < arr.length && !found; i++) {
    if (arr[i] === target) found = true;
}
```

### 4. Transformation Pattern
```javascript
const result = [];
for (let item of items) {
    result.push(transform(item));
}
```

### 5. Nested Loop Pattern (2D Arrays)
```javascript
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

### 6. Reverse Iteration Pattern
```javascript
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
```

---

## Loop Complexity and Performance

### Time Complexity of Common Loop Patterns

| Pattern | Time Complexity | Example |
|---------|----------------|---------|
| Single Loop | O(n) | Iterating through array |
| Nested Loops | O(n²) | Bubble sort, matrix operations |
| Triple Nested | O(n³) | 3D matrix operations |
| Logarithmic Loop | O(log n) | Binary search |
| Linear Search | O(n) | Finding element in unsorted array |

### Loop Optimization Techniques

1. **Loop Unrolling**: Reduce loop overhead by processing multiple items per iteration
2. **Loop Fusion**: Combine multiple loops that iterate over same data
3. **Loop Invariant Code Motion**: Move calculations outside the loop when possible
4. **Early Termination**: Use break/continue to exit loops early
5. **Choose Right Data Structure**: Use appropriate data structures to minimize loop complexity

### Memory Considerations
- **Avoid creating objects** inside loops when possible
- **Reuse variables** instead of declaring new ones in each iteration
- **Be careful with closures** in loops (memory leaks)
- **Use iterators** for large datasets to avoid loading everything into memory

---

## Beginner Challenges

### Challenge 1: Count to 10

**Instructions:** Write a for loop that prints numbers from 1 to 10.
**Expected Output:** 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
**Reference:
** [MDN For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
**Hint:**
```javascript
for () {
}
```

### Challenge 2: Count Backwards

**Instructions:** Write a for loop that prints numbers from 10 to 1.
**Expected Output:** 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
**Reference:
** [MDN For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
**Hint:**
```javascript
for () {
}
```

### Challenge 3: Even Numbers

**Instructions:** Print all even numbers from 2 to 20.
**Expected Output:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
**Reference:** [Even and Odd Numbers](https://www.mathsisfun.com/definitions/even-number.html)
**Hint:**
```javascript
for () {
  if () {
  }
}
```

### Challenge 4: Odd Numbers

**Instructions:** Print all odd numbers from 1 to 19.
**Expected Output:** 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
**Reference:** [Even and Odd Numbers](https://www.mathsisfun.com/definitions/odd-number.html)
**Hint:**
```javascript
for () {
  if () {
  }
}
```

### Challenge 5: Sum of Numbers

**Instructions:** Calculate the sum of numbers from 1 to 100.
**Expected Output:** 5050
**Reference:
** [Arithmetic Series](https://www.mathsisfun.com/algebra/sequences-sums-arithmetic.html)
**Hint:**
```javascript
let sum = 0;
for () {
}
```

### Challenge 6: Array Iteration

**Instructions:** Given an array `[1, 2, 3, 4, 5]`, print each element using a for loop.
**Reference:
** [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
**Hint:**
```javascript
const arr = [1, 2, 3, 4, 5];
for () {
}
```

### Challenge 7: String Characters

**Instructions:** Print each character of the string "Hello" on a new line.
**Expected Output:** H, e, l, l, o
**Reference:
** [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
**Hint:**
```javascript
const str = "Hello";
for () {
}
```

### Challenge 8: Multiplication Table

**Instructions:** Print the multiplication table for 5 (5 x 1 through 5 x 10).
**Expected Output:** 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
**Reference:** [Multiplication Tables](https://www.mathsisfun.com/tables.html)
**Hint:**
```javascript
for () {
}
```

### Challenge 9: While Loop Counter

**Instructions:** Use a while loop to count from 1 to 5.
**Reference:
** [MDN While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
**Hint:**
```javascript
let i = 1;
while () {
}
```

### Challenge 10: Do-While Example

**Instructions:** Use a do-while loop to print "Hello" 3 times.
**Reference:
** [MDN Do-While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
**Hint:**
```javascript
let i = 0;
do {
} while ();
```

### Challenge 11: Array Sum

**Instructions:** Calculate the sum of all elements in array `[10, 20, 30, 40, 50]`.
**Expected Output:** 150
**Reference:
** [Array Reduce Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
**Hint:**
```javascript
const arr = [10, 20, 30, 40, 50];
let sum = 0;
for () {
}
```

### Challenge 12: Find Maximum

**Instructions:** Find the largest number in array `[3, 7, 2, 9, 1]`.
**Expected Output:** 9
**Reference:
** [Math.max() Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
**Hint:**
```javascript
const arr = [3, 7, 2, 9, 1];
let max = arr[0];
for () {
}
```

### Challenge 13: Count Vowels

**Instructions:** Count the number of vowels in the string "programming".
**Expected Output:** 3
**Reference:
** [String charAt Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
**Hint:**
```javascript
const str = "programming";
let count = 0;
for () {
}
```

### Challenge 14: Reverse String

**Instructions:** Reverse the string "hello" using a loop.
**Expected Output:** "olleh"
**Reference:
** [String Reversal Techniques](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)
**Hint:**
```javascript
const str = "hello";
let reversed = "";
for () {
}
```

### Challenge 15: Skip Numbers

**Instructions:** Print numbers 1 to 10, but skip 5 using continue.
**Expected Output:** 1, 2, 3, 4, 6, 7, 8, 9, 10
**Reference:
** [MDN Continue Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
**Hint:**
```javascript
for () {
  if () {
    continue;
  }
}
```

### Challenge 16: Break on Condition

**Instructions:** Print numbers 1 to 10, but stop when you reach 7 using break.
**Expected Output:** 1, 2, 3, 4, 5, 6
**Reference:
** [MDN Break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
**Hint:**
```javascript
for () {
  if () {
    break;
  }
}
```

### Challenge 17: Nested Loop Pattern

**Instructions:** Create a 3x3 grid of asterisks (*) using nested loops.

```
***
***
***
```

**Reference:** [Nested Loops Tutorial](https://www.programiz.com/javascript/nested-for-loop)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 18: Count Down Timer

**Instructions:** Create a countdown from 5 to 0 using a while loop.
**Expected Output:** 5, 4, 3, 2, 1, 0
**Reference:** [JavaScript Timers](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
**Hint:**
```javascript
let i = 5;
while () {
}
```

### Challenge 19: For-In Loop

**Instructions:** Use a for-in loop to iterate over object properties:
`{name: "John", age: 30, city: "NYC"}`.
**Reference:
** [MDN For-In Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
**Hint:**
```javascript
const obj = {name: "John", age: 30, city: "NYC"};
for ( in ) {
}
```

### Challenge 20: For-Of Loop

**Instructions:** Use a for-of loop to iterate over array `["apple", "banana", "cherry"]`.
**Reference:
** [MDN For-Of Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
**Hint:**
```javascript
const arr = ["apple", "banana", "cherry"];
for ( of ) {
}
```

---

## Intermediate Challenges

### Challenge 21: Factorial Calculator

**Instructions:** Calculate the factorial of 5 using a loop (5! = 5 × 4 × 3 × 2 × 1).
**Expected Output:** 120
**Reference:** [Wikipedia Factorial](https://en.wikipedia.org/wiki/Factorial)
**Hint:**
```javascript
let factorial = 1;
for () {
}
```

### Challenge 22: Fibonacci Sequence

**Instructions:** Generate the first 10 numbers of the Fibonacci sequence.
**Expected Output:** 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
**Reference:** [Wikipedia Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)
**Hint:**
```javascript
let a = 0, b = 1;
for () {
}
```

### Challenge 23: Prime Number Checker

**Instructions:** Check if a number (e.g., 17) is prime using a loop.
**Expected Output:** true (for 17)
**Reference:** [Wikipedia Prime Numbers](https://en.wikipedia.org/wiki/Prime_number)
**Hint:**
```javascript
let isPrime = true;
for () {
}
```

### Challenge 24: Array Filter

**Instructions:** Create a new array with only even numbers from `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.
**Expected Output:** [2, 4, 6, 8, 10]
**Reference:**
 [Array Filter Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
**Hint:**
```javascript
const evenNumbers = [];
for () {
}
```

### Challenge 25: String Palindrome

**Instructions:** Check if "racecar" is a palindrome using loops.
**Expected Output:** true
**Reference:**
 [Palindrome Algorithm](https://www.geeksforgeeks.org/check-if-a-string-is-palindrome/)
**Hint:**
```javascript
let isPalindrome = true;
for () {
}
```

### Challenge 26: Number Guessing Game

**Instructions:** Simulate a number guessing game where the computer "guesses" numbers 1-10 until it
finds the target (7).
**Expected Output:** Guessed 1, Guessed 2, ... Guessed 7, Found it!
**Reference:**
 [Random Number Generation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
**Hint:**
```javascript
let target = 7;
let guess;
while () {
}
```

### Challenge 27: Matrix Addition

**Instructions:** Add two 2x2 matrices using nested loops.

```javascript
matrix1 = [[1, 2], [3, 4]]
matrix2 = [[5, 6], [7, 8]]
// Result: [[6, 8], [10, 12]]
```

**Reference:** [Matrix Operations](https://www.mathsisfun.com/algebra/matrix-introduction.html)
**Hint:**
```javascript
const result = [];
for () {
  for () {
  }
}
```

### Challenge 28: Word Counter

**Instructions:** Count occurrences of each word in "the quick brown fox jumps over the lazy dog".
**Expected Output:** {the: 2, quick: 1, brown: 1, ...}
**Reference:**
 [String Split Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
**Hint:**
```javascript
const wordCount = {};
for ( of ) {
}
```

### Challenge 29: Binary Converter

**Instructions:** Convert decimal number 10 to binary using loops.
**Expected Output:** "1010"
**Reference:** [Binary Number System](https://en.wikipedia.org/wiki/Binary_number)
**Hint:**
```javascript
let binary = "";
while () {
}
```

### Challenge 30: Caesar Cipher

**Instructions:** Implement a Caesar cipher with shift of 3 for "hello".
**Expected Output:** "khoor"
**Reference:** [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
**Hint:**
```javascript
let result = "";
for ( of ) {
}
```

### Challenge 31: Array Rotation

**Instructions:** Rotate array `[1, 2, 3, 4, 5]` to the right by 2 positions.
**Expected Output:** [4, 5, 1, 2, 3]
**Reference:** [Array Rotation Algorithms](https://www.geeksforgeeks.org/array-rotation/)
**Hint:**
```javascript
for () {
}
```

### Challenge 32: Bubble Sort

**Instructions:** Implement bubble sort for array `[64, 34, 25, 12, 22, 11, 90]`.
**Expected Output:** [11, 12, 22, 25, 34, 64, 90]
**Reference:** [Bubble Sort Algorithm](https://en.wikipedia.org/wiki/Bubble_sort)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 33: Pascal's Triangle

**Instructions:** Generate the first 5 rows of Pascal's triangle.

```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

**Reference:** [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle)
**Hint:**
```javascript
const triangle = [];
for () {
}
```

### Challenge 34: Anagram Checker

**Instructions:** Check if "listen" and "silent" are anagrams using loops.
**Expected Output:** true
**Reference:**
 [Anagram Algorithms](https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/)
**Hint:**
```javascript
if (str1.length !== str2.length) {
} else {
}
```

### Challenge 35: Digital Root

**Instructions:** Find the digital root of 9875 (9+8+7+5=29, 2+9=11, 1+1=2).
**Expected Output:** 2
**Reference:** [Digital Root](https://en.wikipedia.org/wiki/Digital_root)
**Hint:**
```javascript
while () {
}
```

### Challenge 36: Spiral Matrix

**Instructions:** Create a 3x3 spiral matrix starting from 1.

```
1 2 3
8 9 4
7 6 5
```

**Reference:**
 [Spiral Matrix Algorithm](https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/)
**Hint:**
```javascript
while () {
}
```

### Challenge 37: Longest Common Subsequence

**Instructions:** Find the length of LCS between "ABCDGH" and "AEDFHR".
**Expected Output:** 3 (ADH)
**Reference:**
 [Longest Common Subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 38: Roman Numeral Converter

**Instructions:** Convert 1994 to Roman numerals using loops.
**Expected Output:** "MCMXCIV"
**Reference:** [Roman Numeral Converter](https://en.wikipedia.org/wiki/Roman_numerals)
**Hint:**
```javascript
let result = "";
for () {
}
```

### Challenge 39: Sieve of Eratosthenes

**Instructions:** Find all prime numbers up to 30 using the Sieve of Eratosthenes.
**Expected Output:** [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
**Reference:** [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 40: Maze Path Finder

**Instructions:** Find a path through a simple 3x3 maze using loops.

```
S . #
. . #
# . E
```

Where S=Start, E=End, #=Wall, .=Path
**Reference:**
 [Maze Solving Algorithms](https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/)
**Hint:**
```javascript
function findPath() {
}
```

### Challenge 41: Josephus Problem

**Instructions:** Solve the Josephus problem for 7 people with k=3.
**Expected Output:** Position 4 survives
**Reference:** [Josephus Problem](https://en.wikipedia.org/wiki/Josephus_problem)
**Hint:**
```javascript
while () {
}
```

### Challenge 42: Knapsack Problem (0/1)

**Instructions:** Solve 0/1 knapsack with weights [1,3,4,5] and values [1,4,5,7], capacity 7.
**Expected Output:** Maximum value = 9
**Reference:** [Knapsack Problem](https://en.wikipedia.org/wiki/Knapsack_problem)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 43: Levenshtein Distance

**Instructions:** Calculate edit distance between "kitten" and "sitting".
**Expected Output:** 3
**Reference:** [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 44: Sudoku Validator

**Instructions:** Validate if a 9x9 Sudoku grid is valid using loops.
**Reference:** [Sudoku Rules](https://en.wikipedia.org/wiki/Sudoku)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 45: Tower of Hanoi

**Instructions:** Solve Tower of Hanoi for 3 disks using iterative approach.
**Expected Output:** List of moves
**Reference:** [Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
**Hint:**
```javascript
function hanoi() {
}
```

---

## Advanced Challenges

### Challenge 46: N-Queens Problem

**Instructions:** Solve the N-Queens problem for N=4 using backtracking with loops.
**Expected Output:** All valid board configurations
**Reference:** [N-Queens Problem](https://en.wikipedia.org/wiki/Eight_queens_puzzle)
**Hint:**
```javascript
function solveNQueens() {
}
```

### Challenge 47: Graph Traversal (DFS)

**Instructions:** Implement iterative Depth-First Search using a stack and loops.
**Reference:** [Depth-First Search](https://en.wikipedia.org/wiki/Depth-first_search)
**Hint:**
```javascript
function dfs() {
}
```

### Challenge 48: Graph Traversal (BFS)

**Instructions:** Implement Breadth-First Search using a queue and loops.
**Reference:** [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
**Hint:**
```javascript
function bfs() {
}
```

### Challenge 49: Dijkstra's Algorithm

**Instructions:** Find shortest path in a weighted graph using Dijkstra's algorithm.
**Reference:** [Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
**Hint:**
```javascript
while () {
}
```

### Challenge 50: Convex Hull (Graham Scan)

**Instructions:** Find convex hull of a set of points using Graham scan algorithm.
**Reference:** [Graham Scan](https://en.wikipedia.org/wiki/Graham_scan)
**Hint:**
```javascript
while () {
}
```

### Challenge 51: Fast Fourier Transform

**Instructions:** Implement iterative FFT algorithm using loops.
**Reference:** [Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform)
**Hint:**
```javascript
for () {
}
```

### Challenge 52: Manacher's Algorithm

**Instructions:** Find all palindromic substrings in linear time using Manacher's algorithm.
**Reference:** [Manacher's Algorithm](https://en.wikipedia.org/wiki/Longest_palindromic_substring)
**Hint:**
```javascript
while () {
}
```

### Challenge 53: KMP String Matching

**Instructions:** Implement Knuth-Morris-Pratt string matching algorithm.
**Reference:**
 [KMP Algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
**Hint:**
```javascript
while () {
}
```

### Challenge 54: Rabin-Karp Algorithm

**Instructions:** Implement Rabin-Karp string matching using rolling hash.
**Reference:** [Rabin-Karp Algorithm](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)
**Hint:**
```javascript
for () {
}
```

### Challenge 55: Topological Sort

**Instructions:** Implement topological sorting using Kahn's algorithm with loops.
**Reference:** [Topological Sorting](https://en.wikipedia.org/wiki/Topological_sorting)
**Hint:**
```javascript
while () {
}
```

### Challenge 56: Union-Find (Disjoint Set)

**Instructions:** Implement Union-Find data structure with path compression.
**Reference:** [Disjoint Set Union](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
**Hint:**
```javascript
function find() {
}
function union() {
}
```

### Challenge 57: Segment Tree

**Instructions:** Build and query a segment tree for range sum queries.
**Reference:** [Segment Tree](https://en.wikipedia.org/wiki/Segment_tree)
**Hint:**
```javascript
function build() {
}
function query() {
}
```

### Challenge 58: Fenwick Tree (Binary Indexed Tree)

**Instructions:** Implement Fenwick tree for efficient prefix sum queries.
**Reference:** [Fenwick Tree](https://en.wikipedia.org/wiki/Fenwick_tree)
**Hint:**
```javascript
function update() {
}
function query() {
}
```

### Challenge 59: Trie Implementation

**Instructions:** Build a trie (prefix tree) and implement search operations.
**Reference:** [Trie Data Structure](https://en.wikipedia.org/wiki/Trie)
**Hint:**
```javascript
class TrieNode {
}
class Trie {
}
```

### Challenge 60: Suffix Array

**Instructions:** Build suffix array using counting sort approach.
**Reference:** [Suffix Array](https://en.wikipedia.org/wiki/Suffix_array)
**Hint:**
```javascript
for () {
}
```

### Challenge 61: Minimum Spanning Tree (Kruskal's)

**Instructions:** Find MST using Kruskal's algorithm with Union-Find.
**Reference:** [Kruskal's Algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
**Hint:**
```javascript
for ( of ) {
}
```

### Challenge 62: Maximum Flow (Ford-Fulkerson)

**Instructions:** Find maximum flow in a network using Ford-Fulkerson method.
**Reference:**
 [Ford-Fulkerson Algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm)
**Hint:**
```javascript
while () {
}
```

### Challenge 63: Traveling Salesman (Dynamic Programming)

**Instructions:** Solve TSP using dynamic programming with bitmasks.
**Reference:**
 [Traveling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 64: Edit Distance with Operations

**Instructions:** Find minimum edit distance with custom operation costs.
**Reference:** [Edit Distance](https://en.wikipedia.org/wiki/Edit_distance)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 65: Longest Increasing Subsequence

**Instructions:** Find LIS using dynamic programming in O(n log n) time.
**Reference:**
 [Longest Increasing Subsequence](https://en.wikipedia.org/wiki/Longest_increasing_subsequence)
**Hint:**
```javascript
for () {
}
```

### Challenge 66: Matrix Chain Multiplication

**Instructions:** Find optimal parenthesization for matrix chain multiplication.
**Reference:**
 [Matrix Chain Multiplication](https://en.wikipedia.org/wiki/Matrix_chain_multiplication)
**Hint:**
```javascript
for () {
  for () {
  }
}
```

### Challenge 67: Palindrome Partitioning

**Instructions:** Find minimum cuts needed to partition string into palindromes.
**Reference:** [Palindrome Partitioning](https://en.wikipedia.org/wiki/Palindrome_partitioning)
**Hint:**
```javascript
for () {
}
```

### Challenge 68: Heavy-Light Decomposition

**Instructions:** Implement heavy-light decomposition for tree path queries.
**Reference:** [Heavy-Light Decomposition](https://cp-algorithms.com/graph/hld.html)
**Hint:**
```javascript
function dfs() {
}
function decompose() {
}
```

### Challenge 69: Persistent Segment Tree

**Instructions:** Implement persistent segment tree for historical queries.
**Reference:** [Persistent Data Structures](https://en.wikipedia.org/wiki/Persistent_data_structure)
**Hint:**
```javascript
function update() {
}
function query() {
}
```

### Challenge 70: Aho-Corasick Algorithm

**Instructions:** Implement multi-pattern string matching using Aho-Corasick.
**Reference:**
 [Aho-Corasick Algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm)
**Hint:**
```javascript
while () {
}
```

---

## Additional Resources

### General Programming Resources

- [MDN JavaScript Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [JavaScript.info Loops](https://javascript.info/while-for)
- [W3Schools JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp)

### Algorithm Resources

- [GeeksforGeeks Algorithms](https://www.geeksforgeeks.org/fundamentals-of-algorithms/)
- [LeetCode Practice Problems](https://leetcode.com/)
- [HackerRank Algorithms](https://www.hackerrank.com/domains/algorithms)
- [Coursera Algorithms Specialization](https://www.coursera.org/specializations/algorithms)

### Advanced Topics

- [CP-Algorithms](https://cp-algorithms.com/)
- [CLRS Introduction to Algorithms](https://mitpress.mit.edu/books/introduction-algorithms-third-edition)
- [Competitive Programming Handbook](https://cses.fi/book/book.pdf)

---

## Tips for Mastering Loops

### Loop Selection Guide
1. **Use for loops** when you know the exact number of iterations
2. **Use while loops** when the number of iterations depends on a condition
3. **Use for-of loops** for iterating over arrays and strings
4. **Use for-in loops** for iterating over object properties
5. **Use array methods** (forEach, map, filter) for functional programming style
6. **Use do-while loops** when you need to execute at least once

### Debugging Loop Issues
1. **Add console.log()** to track loop variable values
2. **Check loop conditions** carefully (< vs <=, > vs >=)
3. **Verify loop variable updates** to avoid infinite loops
4. **Test with edge cases** (empty arrays, single elements)
5. **Use debugger** or browser dev tools to step through iterations
6. **Validate array bounds** to prevent index out of range errors

### Loop Performance Tips
1. **Cache array length**: `for (let i = 0, len = arr.length; i < len; i++)`
2. **Use appropriate loop type** for the specific task
3. **Minimize work inside loops** - move calculations outside when possible
4. **Use break/continue** strategically to skip unnecessary iterations
5. **Consider using array methods** for cleaner, more readable code
6. **Avoid nested loops** when a single loop with better algorithm would work

### Common Loop Mistakes to Avoid
1. **Off-by-one errors**: Starting at 1 instead of 0, or using <= instead of <
2. **Infinite loops**: Forgetting to update the loop variable
3. **Modifying arrays while iterating**: Can cause skipped elements or errors
4. **Using var instead of let**: Can cause closure issues in loops
5. **Not handling empty collections**: Always check if array/object is empty
6. **Nested loop complexity**: Be aware of O(n²) performance implications

Happy coding! 🚀
