// const newLetters = [['A', 'B'],
//     ['C', 'D']];
// console.log(newLetters);
// newLetters.push(['Hello', 'abc', 1]); // Adds elements to the end of the array
// console.log(newLetters);
// console.log(newLetters[1][0]);
//
// // Object, not an array. Looks similar but functions differently.
// let ourNames = {
//     firstName: ['Karl', 'Amy', 'Sawyer', 'Hello'],
//     lastName: ['Jung', 'Piedra', 'Noah', 'World']
// };
// console.log(ourNames.firstName[0] + ' ' + ourNames.lastName[0]);
// console.log(ourNames.lastName[0]);
//
//
// function getNames() {
//     const fullNames = ourNames.firstName.map((first, index) =>
//         `${first} ${ourNames.lastName[index]}`
//     );
//     console.log(fullNames);
// }
//
// getNames();
//
// /*
//  Add the total prices together with an array
// function getPrices() {
//     const prices = [2.99, 5.49, 1.25, 10.00];
//     let total = 0;
//     for (let i = 0; i < prices.length; i++) {
//         total += prices[i];
//     }
//     console.log('Total cost: $' + total.toFixed(2));
// }
//
// getPrices();
//
//  Both are the same output, but this is more concise
// function samePrices() {
//     const prices = [2.99, 5.49, 1.25, 10.00];
//     const total = prices.reduce((sum, price) => sum + price, 0);
//     console.log('Total cost: $' + total.toFixed(2));
// }
//
// samePrices();
//
//  */
//
// const items = [
//     {itemName: 'Bike', price: 100},
//     {itemName: 'TV', price: 120},
//     {itemName: 'Book', price: 10},
//     {itemName: 'Phone', price: 200},
//     {itemName: 'Headphones', price: 20},
//     {itemName: 'Watch', price: 95}
// ];
// // returns items with a price equal to or less than 100
// const filterItems = items.filter((items) => {
//     return items.price <= 100;
// });
// console.log(filterItems);
//
// console.log('\n');
// let newArr = ['KJ', 'Amy', 'Sawyer'];
// newArr.push('Hi'); // Adds a new element to the end of the array
// console.log(newArr);
// console.log('\n');
// newArr.pop(); // Removes the last element in the array
// console.log(newArr);
// let testArr = newArr [newArr.length - 1]; // Logs the last element in the array
// console.log(testArr);
// console.log(newArr.at(-1)); // Logs the last element in the array
// newArr.unshift('Karl'); // Adds an element to the start of the array
// newArr.shift(); // Removes the first element at the start of the array
// console.log(newArr);
// /*
// // Stacks work as LIFO, Last In First Out
// let stack = [];
// stack.push('A');
// stack.push('B');
// console.log(stack);
// stack.pop(); // Removes 'B'
// console.log(stack);
// stack.unshift('Hello'); // Adds Hello to the start
// stack.push('Hi'); // Adds Hi to the end
// console.log(stack);
// stack.pop(); // Removes Hi from the end
// console.log(stack);
// stack.unshift('Hi');
// console.log(stack);
// stack.pop(); // Removes A from the end
// console.log(stack);
// */
// // Display all elements in the array with a loop
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//     // console.log(items[i].itemName); // Display only itemName elements
//     // console.log(items[i].price); // Display only price elements
// }
//
// console.log(items.at(-1)); // quick way to grab the last element in the array
//
// let fruits = ['Apple', 'Pear', 'Banana'];
// // Most modern syntax for creating a for loop with array items
// for (let fruit of fruits) {
//     console.log(fruit);
// }
//
// let testingArr = items.pop();
// console.log(testingArr);
// console.log(items);
//
// for (let newArrs of newArr) {
//     console.log(newArrs);
// }
// console.log(newArr.splice(0, 2));
//
// const colors = ['red', 'blue', 'green'];
//
// // Add elements at index 1 without removing anything
// colors.splice(0, 0, 'yellow', 'purple', 'violet');
// console.log(colors); // ['red', 'yellow', 'purple', 'blue', 'green']
//

function sumOfTripledEvens() {
    let sumOfNum = 0;
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numArray.length; i++) {
        // Step 1: if the element is an even number
        if (numArray[i] % 2 === 0) {
            // Step 2: Multiply this number by 3
            const tripledEvenNumber = numArray[i] * 3;
            // Step 3: Add the new number to the total
            sumOfNum += tripledEvenNumber;
        }
    }
    return sumOfNum;
}

console.log(sumOfTripledEvens());
/*
function addOne(num) {
    return num += 1;
    }
*/

const arr = [1, 2, 3, 4, 5,];
const mappedArr = arr.map((num) => num + 1);
console.log(arr);
console.log(mappedArr);
// return odd numbers only
function isOdd(num) {
    return num % 2 !== 0;
}

const oddNums = arr.filter(isOdd);
console.log(oddNums);
console.log(arr);

function isEven(num) {
    return num % 2 === 0;
}

const evenNums = arr.filter(isEven);
console.log(evenNums);
console.log(arr);
