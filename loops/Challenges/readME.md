<|channel|>analysis<|message|>Create markdown content with challenges, example snippets but not full solution. Provide research links. Let's produce .md text.<|end|>

<|start|>assistant<|channel|>final<|message|>```markdown
# 📚 JavaScript Loop & Function Challenges

> **Goal:** Strengthen your understanding of *functions* and *loops* (for, while, do‑while, forEach, map, filter, reduce).  
> **How to Use:**  
> 1. Read the challenge description.  
> 2. Look at the starter code – it’s a skeleton, not the final solution.  
> 3. Write your own function/loop.  
> 4. Test with the provided console logs or unit tests (if you have a test runner).  
> 5. When stuck, check the **Research Links** below for concepts & examples.

---

## Table of Contents

| Level | Challenge | Difficulty |
|-------|-----------|------------|
| Beginner | [Sum of Numbers](#1-sum-of-numbers) | 🔹 |
| Beginner | [Print Multiplication Table](#2-print-multiplication-table) | 🔹 |
| Intermediate | [Factorial Calculator](#3-factorial-calculator) | 🔸 |
| Intermediate | [FizzBuzz](#4-fizzbuzz) | 🔸 |
| Advanced | [Anagram Checker](#5-anagram-checker) | 🔺 |
| Advanced | [Prime Number Finder](#6-prime-number-finder) | 🔺 |

---

## 1. Sum of Numbers  
**Goal:** Write a function `sumUpTo(n)` that returns the sum of all integers from `1` to `n`.

```js
function sumUpTo(n) {
  // Your code here
}

console.log(sumUpTo(10)); // ➜ 55
```

> **Research Links**
> - [MDN: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
> - [MDN: For…of Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

## 2. Print Multiplication Table  
**Goal:** Create a function `printTable(num, limit)` that prints the multiplication table of `num` up to `limit`.

```js
function printTable(num, limit) {
  // Your code here
}

printTable(5, 10);
// ➜ 5 x 1 = 5
// ➜ 5 x 2 = 10
// ...
```

> **Research Links**
> - [MDN: console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
> - [JavaScript: Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)

---

## 3. Factorial Calculator  
**Goal:** Implement `factorial(n)` that returns the factorial of a non‑negative integer using a loop (iterative version).

```js
function factorial(n) {
  // Your code here
}

console.log(factorial(6)); // ➜ 720
```

> **Research Links**
> - [MDN: Looping Constructs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
> - [Math – Factorial Definition](https://en.wikipedia.org/wiki/Factorial)

---

## 4. FizzBuzz  
**Goal:** Write `fizzBuzz(max)` that logs numbers from 1 to `max`. Replace multiples of 3 with `"Fizz"`, multiples of 5 with `"Buzz"`, and multiples of both with `"FizzBuzz"`.

```js
function fizzBuzz(max) {
  // Your code here
}

fizzBuzz(15);
// 1
// 2
// Fizz
// 4
// Buzz
// ...
```

> **Research Links**
> - [MDN: Conditional Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
> - [FizzBuzz on Rosetta Code](https://rosettacode.org/wiki/Fizz_buzz)

---

## 5. Anagram Checker  
**Goal:** Create `areAnagrams(str1, str2)` that returns `true` if the two strings are anagrams (ignoring spaces and case).

```js
function areAnagrams(str1, str2) {
  // Your code here
}

console.log(areAnagrams("Listen", "Silent")); // ➜ true
```

> **Research Links**
> - [MDN: String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
> - [Sorting Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

---

## 6. Prime Number Finder  
**Goal:** Write `findPrimes(limit)` that returns an array of all prime numbers up to `limit` using loops.

```js
function findPrimes(limit) {
  // Your code here
}

console.log(findPrimes(20)); // ➜ [2,3,5,7,11,13,17,19]
```

> **Research Links**
> - [MDN: Prime Numbers](https://en.wikipedia.org/wiki/Prime_number)
> - [Sieve of Eratosthenes (Concept)](https://www.geeksforgeeks.org/sieve-of-eratosthenes/)

---

### Tips & Tricks

| Tip | Why it helps |
|-----|--------------|
| **Start with a clear plan** – write pseudo‑code or comments before coding. | Reduces bugs and clarifies logic. |
| **Test incrementally** – log intermediate values inside loops to see what's happening. | Easier to spot off‑by‑one errors. |
| **Use helper functions** when a piece of logic repeats. | Keeps code DRY (Don’t Repeat Yourself). |
| **Read MDN docs** for any method you’re unsure about. | MDN is the most reliable JavaScript reference. |

---

### Next Steps

- Once comfortable, try combining loops and functions in more complex projects: e.g., build a small calculator, or parse CSV data.
- Explore **array methods** (`map`, `filter`, `reduce`) as they often replace manual loops.

Happy coding! 🚀
