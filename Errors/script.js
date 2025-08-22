// const a = 'Hello ';
// const b = 'Me';
//
//
// function add(text, more) {
//     console.log(text, more);
// }
//
//
// function print(text, more) {
//     let a = 'what is it?';
//     let b = 'who is it?';
//     add(a, b);
// }
//
//
// const str1 = 'Hello ';
// const str2 = 'World';
// const message = str1.concat(str2).slice(1);
// console.log(message);
// add('yo', 'boy');
// print();


try {
    let a = undefinedVariable;
} catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message); // "undefinedVariable is not defined"
    console.log(e.name); // "ReferenceError"
    console.log(e.stack); // Stack of the error
}

