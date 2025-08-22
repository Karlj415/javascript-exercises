'use strict';

function favoriteAnimal(animal) {
    return animal + ' is my favorite animal!';
}

console.log(favoriteAnimal('Pengy'));

function sum(param1, param2) {
    param1 = 1;
    param2 = 5;
    return param1 * param2;
}

// console.log(sum(2, 2));
console.log(sum());

const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);

const myNumber = Math.random();
console.log(myNumber);


// Method
let person = {
    greet: function() {
        console.log('Method man!')
    }
};

person.greet();

let fullName = 'Karl Jung';
let newName = fullName.replace('Karl', 'Humphrey');
console.log(newName);

