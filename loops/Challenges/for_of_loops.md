
# Learning `for...of` Loops

Hello KJ! Here is a guide to help you understand and use `for...of` loops in JavaScript.

## What are `for...of` loops?

The `for...of` loop is a modern iteration statement introduced in ES6. It provides a simpler and more concise way to loop over **iterable objects**. An iterable object is any data structure that can make its elements accessible, such as an Array, a String, a Map, a Set, etc.

Think of it as a more readable version of a standard `for` loop when you just need to access each item in a collection from beginning to end.

## `for...of` vs. a classic `for` loop

You're already familiar with the classic `for` loop. Let's see how it compares to a `for...of` loop when iterating over an array.

**Classic `for` loop:**

```javascript
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(fruit);
}
```

**`for...of` loop:**

```javascript
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

As you can see, the `for...of` loop is cleaner. You don't have to worry about managing an index variable (`i`), checking the length of the array, or accessing the element at that index.

## Syntax

The syntax is straightforward:

```javascript
for (const variable of iterable) {
  // code to execute for each item
}
```

-   `variable`: A variable that will be assigned the value of the current item in the iterable on each iteration. Using `const` is a good practice if you don't intend to reassign the variable within the loop.
-   `iterable`: The object you want to loop over (e.g., an array, a string).

## Code Demonstration

Let's say you have an array of numbers and you want to create a new array containing the double of each number.

Here's how you might approach it without giving away the full solution:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

for (const num of numbers) {
  // Inside this loop, 'num' will be 1, then 2, then 3, and so on.
  // What operation would you perform on 'num' here?
  // How would you add the result to the 'doubledNumbers' array?
}

console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]
```

This example demonstrates how the loop gives you each element one by one. Your task in a challenge would be to figure out the logic that goes inside the loop.

## Challenge

Here is a link to a freeCodeCamp challenge that will let you practice using `for...of` loops:

[freeCodeCamp: Iterate Through All an Array's Items Using For...Of Loops](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/iterate-through-all-an-arrays-items-using-for...of-loops)

Good luck, and have fun coding!
