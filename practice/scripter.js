// let userName = 'Karl';
//
// function showMessage() {
//     userName = "Bob"; // (1) changed the outer variable
//
//     let message = 'Hello, ' + userName;
//     console.log(message);
// }
//
// console.log(userName); // John before the function call
//
// showMessage();
//
// console.log(userName); // Bob, the value was modified by the function
//
// const firstName = 'Karl';
// const lastName = 'Jung';
// const newName = firstName.slice(0, 1) + lastName.slice(0, 1); // Gives KJ
// const modifiedName = newName.replace('KJ', 'Karl Jung');
//
// console.log(newName);
// console.log(modifiedName);
// let from = 'Amy';
//
// function greetMessage(from, text) {
//     from = '*' + from + '*';
//     from = from.replace('Amy', 'KJ')
//     console.log(from + ': ' + text);
// }
//
// greetMessage('Amy', 'Amy')
//
// /*
//
// // This is for a browser to prompt the user for their name, and it reads it back with a msg in the console
// // Here we have nested a function inside a parameter
//
// function newerMessage(canIHaveYourName, nameReceived) {
//     canIHaveYourName = prompt('Whats your name?')
//     console.log(`Thank you, ${canIHaveYourName}! Anytime this page refreshes you will again be prompted to enter
// your name again. Thank you for participating, ${canIHaveYourName}!`) } */ // newerMessage('', '') // You can use a
// couple different ways to check for passed parameters   function showNames(names) {  if (names === undefined) {
// someText = 'Empty Message' } console.log(someText) }  showNames()  // using the OR operator  function
// datMessage(newlyText) { newlyText = newlyText || 'Empty Value' console.log(newlyText) }  datMessage()  function
// sum(a, b) { return a + b; }  let result = sum(2, 2); console.log(result)

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }
//
// let age = prompt('How old are you?')
//
// if (checkAge(age)) {
//     console.log('Granted')
// } else {
//     console.log('Denied')
// }

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < 1; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i)
    }
}

// function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//     }
// }

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % 1 == 0) return false;
    }
    return true;
}

// Function declarations look like this
function name(parameters, delimited, by, commas) {
    // code
}

let sayHello = function (text) {
    return ('Hello');
};

console.log(sayHello())
console.log(typeof sayHello)

let sayHi = () => 'Hiii'

// console.log(sayHi())

// Function Declarations can be called before they've been defined bc of hoisting
greetMessage('Amy', 'Amy')

let func = sayHi;
console.log(sayHi())

function greetMessage(from, text) {
    from = '*' + from + '*';
    from = from.replace('Amy', 'KJ')
    console.log(from + ': ' + text);
}

// arrow functions

let sum = (a, b) => a + b;
console.log(sum(3, 1));

let double = n => n * 2;
console.log(double(2))

let sayHola = () => console.log('Helloski');
sayHola();

// Only works in browser. Cant use prompt in console.


// let userAge = prompt('What is your age?');
// let welcomeMsg = (userAge < 18) ?
//     () => console.log('Goodbye, You are underage.') :
//     () => console.log('Welcome, your age has been verified.');
// welcomeMsg()

// This creates a stack overflow, which means maximum call stack exceeded
/*
function fn() {
    fn()
}
fn()
 */

function countDown(fromNumber) {
    console.log(fromNumber)

    const nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

countDown(3)

function add7(nums1) {
    return nums1 + 7;
}

console.log(add7(1))

function multiply(mult1, mult2) {
    return mult1 * mult2
}

console.log(multiply(2, 5));

function cappy(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

console.log(cappy('karl'))

let helpName;

function lastLetter(someText) {
    return someText.charAt(3)

}

console.log(lastLetter("Karl"))


// When user inputs a number
// Initialize a counter variable and set its value to 0
// While counter is smaller than user inputted number increment counter
// Print the value of the counter


// let userNumbers = 0;
let n = 10
for (let i = 1; i <= n; i++) {
    console.log(i);
}

console.log('test of user input counter')

const userNumbers = parseInt(prompt('What is your number?')) // Prompts user for a number
if (userNumbers > 10) {
    alert('Error please select a number between 1-10')
    location.reload() // Reloads page IF number is greater than 10
} else {
    let countDown;
    for (let j = userNumbers; j >= 1; j--) {  // Asks user for a number and then counts down from that number to 1
        alert(j)
    } 
}
