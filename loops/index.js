for (let i = 3; i >= 0; i--) {
    let stars = '';
    for (let j = 3; j >= i; j--) {
        stars += '*';
    }
    console.log(stars);
}

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
console.log('\n');
let j = 3;
while (j) {
    console.log(j);
    j--;
}
console.log('\n');
let k = 3;
while (k) console.log(k--);

console.log('\n');


// Will run ONCE even though boolean is false
let nums = 3;
do {
    console.log(nums);
    nums++;
} while (nums < 3);

// Same loop as do...while but this doesnt run as the boolean is false
for (let i = 3; i < 3; i++) {
    console.log(i);
}

