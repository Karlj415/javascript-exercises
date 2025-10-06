// Arrays are used to store multiple values in a single variable
let scores = [10, 1, 2, 3, 4, 5, , , , 12].fill(1, 1, 3);
console.log(scores);

let userNames = [{firstName: 'Karl', lastName: 'Jung'}, {firstName: 'Joe', lastName: 'Doe'}];
console.log(userNames);
console.log(userNames[0].lastName);
let arr = ['I', 'Love', 'JavaScript'];
arr.splice(0, 1);
console.log(arr);
let removedItems = arr.splice(0, 1, 'I', 'Totally', 'Hate'); // Removes the first element at index 0 and adds new
// ones to the end
console.log(arr);
console.log(removedItems);
removedItems.splice(0, 0, 'I'); // Start at index 0, remove 0 items, add 'I' at index 0
removedItems.splice(1, 0, 'Really'); // Start at index 1, remove 0 items
removedItems.splice(3, 0, 'JavaScript'); // Start at index 3, remove 0 items
removedItems.splice(1, 1); // Start at index 1, remove 1 item
console.log(removedItems);

let numArr = [1, 2, 3, 4, 5];
numArr.splice(-1, 1); // Allows for negative indexing. -1 will target the last element to splice
console.log(numArr);

let numberArr = [1, 2, 3, 4, 5];
console.log(numberArr.slice(0, 3)); // Start and end value to return for slice

let concatArr = [1, 2];
console.log(concatArr.concat([3, 4]));
console.log(concatArr);

console.log(concatArr.concat(numberArr, numArr)); // Returns all the values from the arrays inserted as arguments and
// the value of concatArr

let smallArr = [1, 2];
let arrayLike = {
    0: 'Something', 1: 'Else', [Symbol.isConcatSpreadable]: true, length: 2
};

console.log(smallArr.concat(arrayLike));

['Karl', 'Amy', 'Sawyer'].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
}); // forEach is heavily used, make sure i go back to this

let arrIncludes = [1, 2, 3, 'hello'];
console.log(arrIncludes.includes('hello')); // Checks if the array includes a specific item gives either true or false
console.log(arrIncludes.indexOf('hello')); // checks the index number of the item

console.log('\n');
for (let i = 0; i < arrIncludes.length; i++) {
    console.log(arrIncludes[i]);
}

console.log('\n');
for (let arrInclude of arrIncludes) {
    console.log(arrInclude);
}

let someFruits = ['Apple', 'Orange', 'Apple'];

console.log(someFruits.indexOf('Apple')); // returns 0 the first apple
console.log(someFruits.lastIndexOf('Apple')); // returns 2 the last apple
// find looks for and stops once true if false it returns undefined
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers.find(function (item) {
    return item > 9;
});
console.log(result); // returns 10

let users = [{id: 1, name: 'John'}, {id: 2, name: 'Pete'}, {id: 3, name: 'Mary'}, {id: 4, name: 'John'},];

let user = users.find(item => item.id === 1);
console.log(user.name); // returns John
console.log(users.findIndex(user => user.name === 'John')); // returns index 0
console.log(users.findLastIndex(user => user.name === 'John')); // returns index 3--searches right to left
console.log('\n');
let someUsers = users.filter(item => item.id < 3); // returns all items up to the 3rd index
console.log(someUsers.length); // returns 2, for the 0 and 1 indexes

/*
Method      Use-case              Returns       Modifies?
push/pop    add/remove end        new len/item  yes
shift/unshift add/remove start    new len/item  yes
slice       copy portion          new array     no
splice      add/remove/replace    removed       yes
forEach     run function          undefined     no
map         transform values      new array     no
filter      select values         new array     no
find        find value            value         no
reduce      combine values        any value     no
sort        reorder               arr           yes
*/

console.log('\n');
let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
console.log(lengths);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

let newArr = [2, 1, 15, 3, 19, 5, 20];
newArr.sort(compareNumeric); // with our function this will arrange the numbers correctly
console.log(newArr);

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + ' ' + b);
    return a - b;
});

let countries = ['United States', 'Andorra', 'Vietnam'];
console.log(countries.sort(compareNumeric));
let anotherArr = [1, 2, 3, 4, 5];
console.log(anotherArr.reverse());
console.log(users.reverse());

let names = 'Karl, Amy, Sawyer';
let nameArr = names.split(', ');
for (let name of nameArr) {
    console.log(`A message to ${name}`);
}

//console.log(typeof nameArr);

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnOdds(arr) {
    return arr.filter(num => num % 2 !== 0);
}


console.log(returnOdds(testArr));

