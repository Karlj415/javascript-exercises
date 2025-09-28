// //! - Using let in the for initializer creates a loop-scoped j; omitting let reuses (and mutates) an outer j, or
// //! creates an implicit global in sloppy mode.

// console.log('\n');
// let j = 30;
// for (let j = 1; j < 10; j++) {
//     console.log(j);
// }
// console.log('\n');
// console.log(j);
// console.log('\n');
// let i = 3;
// while (i) {
//     console.log(i--);
// }


// console.log('\n');
// let k = 0;
// while (++k < 5) console.log(k);
// // Pre-increment: increments k first, then uses new value for comparison (prints 1, 2, 3, 4)
// while (k++ < 5) console.log(k);
// // Post-increment: uses current k value for comparison, then increments (won't run since k is already 5)
// console.log('\n');

let playerNames = [
    'Karl',
    'Amy',
    'Sawyer'
]

console.log(playerNames)

let scores = Array(10).fill(0);
console.log(scores)

