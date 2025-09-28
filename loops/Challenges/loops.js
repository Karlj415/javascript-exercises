// ### Challenge 1: Count to 10
// This loop counts from 1 to 10 and prints each number.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ### Challenge 2: Count Backwards
// This loop counts backwards from 10 to 1 and prints each number.
console.log('\n');
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// ### Challenge 3: Even Numbers
// This loop prints all even numbers from 2 to 20.
console.log('\n');
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// ### Challenge 4: Odd Numbers
// This loop prints all odd numbers from 1 to 20.
console.log('\n');
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// ### Challenge 5: Sum of Numbers
// This loop calculates the sum of all numbers from 1 to 100.
console.log('\n');
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// ### Challenge 6: Array Iteration
// This loop iterates over an array and prints each element.
console.log('\n');
const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// ### Challenge 7: String Characters
// This loop iterates over a string and prints each character.
console.log('\n');
const str = 'Hello';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// ### Challenge 8: Multiplication Table
// This loop prints the multiplication table for the number 5.
console.log('\n');
const base = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
}

// ### Challenge 9: While Loop Counter
// This while loop counts from 1 to 5.
console.log('\n');
let numbs = 1;
while (numbs <= 5) {
    console.log(numbs);
    numbs++;
}

// ### Challenge 10: Do-While Example
// This do-while loop prints a message 3 times.
console.log('\n');
let counter = 1;
const message = 'Hello';
do {
    console.log(message);
    counter++;
} while (counter <= 3);

// ### Challenge 11: Array Sum
// This loop calculates the sum of all numbers in an array.
console.log('\n');
const numbersForSum = [10, 20, 30, 40, 50];
let arraySum = 0;
for (const n of numbersForSum) {
    arraySum += n;
}
console.log(arraySum);


// ### Challenge 12: Find Maximum
// This loop finds the maximum number in an array.
console.log('\n');
const largeNumArr = [3, 7, 2, 9, 1];
let maxNum = 0;

for (var i = largeNumArr.length; i <= 10; i++) {
    i = largeNumArr
    console.log(i)
}
console.log(i)
