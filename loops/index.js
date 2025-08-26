// let i = 3;
// while (i < 3) {
//     console.log(i);
//     i++;
// }
// while (i) console.log(i--);

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

/*

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...

 */

console.log('\n');
for (let i = 0; i < 3; i++) {
    console.log(i);
}


// Putting for loop in a function
console.log('\n');

function countDown() {
    let num = 1;
    for (; num <= 3; num++) {
        console.log(num);
    }
}

countDown();


function enterNum() {
    let sum = 0;
    while (true) {
        let value = +prompt('Enter a number', '');
        if (!value) {
            break;
        }
        sum += value;
    }
    console.log(`Sum: ${sum}`);
}

// enterNum();

console.log('\n');

function oddNumCounter() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) continue;
        console.log(i);
    }
}

oddNumCounter();
let numb;
(numb < 5) ? console.log(numb) : console.log('not numb');



