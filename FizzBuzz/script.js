'use strict';

let answer = parseInt(prompt('Please enter a number you would like to FizzBuzz up to: 25'));
// This is a game Fizz Buzz
for (let i = 1; i <= answer; i++) { // Creates a counter to count from 1 up to users inputted number
    if (i % 3 === 0 && i % 5 === 0) { // If number is divisible by 3 AND 5 without a remainder FIZZBUZZ alert
        console.log('FizzBuzz!!');
        alert('FizzBuzz!!');
    } else if (i % 3 === 0) { // if number divided by 3 has no remainder FIZZ will be consoled
        console.log('FIZZ');
    } else if (i % 5 === 0) { // if number divided by 5 has no remainder BUZZ will be consoled
        console.log('BUZZ');
    } else {
        console.log(i);
    }
}


