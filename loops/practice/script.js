/*
1. COUNTING UP
   Write a for loop that prints numbers from 1 to 10.
 */

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
2. COUNTING DOWN
   Write a for loop that prints numbers from 10 to 1.
 */
console.log('\n');
for (let j = 10; j >= 1; j--) {
    console.log(j);
}

/*
3. EVEN NUMBERS
   Print all even numbers from 2 to 20.
 */
console.log('\n');
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*
4. ODD NUMBERS
   Print all odd numbers from 1 to 15.
 */

console.log('\n');
for (let i = 1; i <= 15; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

/*
5. MULTIPLICATION TABLE
   Prints the multiplication table for 5 (5x1, 5x2, 5x3... up to 5x10).
 */

console.log('\n');
let x = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${x} x ${i} = ${i * x}`);
}

/*
6. SUM CALCULATOR
   Uses a for loop to calculate the sum of numbers from 1 to 100.
 */
console.log('\n');
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

/*
7. SQUARE NUMBERS
   Print the square of numbers from 1 to 10 (1², 2², 3²...).
 */
console.log('\n');
for (let i = 1; i <= 10; i++) {
    console.log(`${i}² = ${i * i}`);
}

/*
### 8. ALPHABET LOOP
**Goal:** Print each letter A through Z
*/

console.log('\n');
for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i).toLowerCase());
}

/*
### 9. COUNTDOWN TIMER
**Goal:** Count from 10 to 0, then print "Blast off!"
 */

console.log('\n');
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log('Blast off!');

/*
### 10. REPEATED MESSAGE
**Goal:** Print "I love programming!" exactly 7 times
 */

console.log('\n');
for (let i = 1; i <= 7; i++) {
    console.log('I love programming!');
}

for (let i = 20; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(`${i} is even!`);
    } else {
        console.log(`${i} is odd!`);
    }
}
