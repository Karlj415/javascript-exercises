# 🚀 Enhanced JavaScript Learning Challenge Guide
*Your comprehensive roadmap from beginner to confident JavaScript developer - with examples and resources*

## 📍 Current Level: Learning Loops
Since you're diving into loops, this guide provides 100+ challenges across all fundamental JavaScript concepts with practical examples and helpful resources for each challenge.

---

## 🎯 Challenge Categories Overview
- **Variables & Data Types**: 15 challenges
- **Operators & Expressions**: 12 challenges  
- **Conditionals & Logic**: 18 challenges
- **Loops (Your Focus!)**: 25 challenges
- **Functions**: 20 challenges
- **Arrays**: 22 challenges
- **Objects**: 15 challenges
- **String Manipulation**: 18 challenges
- **Problem Solving**: 20 challenges

---

## 📚 Essential Learning Resources

### 🌟 Primary Learning Platforms
- **[JavaScript.info](https://javascript.info/)** - Most comprehensive free tutorial
- **[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Official documentation
- **[FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)** - Interactive lessons
- **[Codecademy JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)** - Structured course
- **[The Odin Project](https://www.theodinproject.com/paths/foundations/courses/foundations)** - Full-stack focused

### 🎮 Practice Platforms
- **[Codewars](https://www.codewars.com/)** - Kata challenges (start 8kyu → 7kyu)
- **[HackerRank](https://www.hackerrank.com/domains/javascript)** - Algorithm practice
- **[LeetCode](https://leetcode.com/problemset/all/?difficulty=Easy)** - Technical interview prep
- **[Exercism](https://exercism.org/tracks/javascript)** - Mentored practice
- **[CodeSignal](https://codesignal.com/)** - Skill assessment

### 📖 Books & References
- **[Eloquent JavaScript](https://eloquentjavascript.net/)** - Free online book
- **[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)** - Deep dive series
- **[JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)** - Classic reference

---

## 🔧 Section 1: Variables & Data Types (15 Challenges)

### Basic Variable Declaration

**Challenge 1.1**: Create variables using all three declaration types
**Instructions**: 
- Create the same variable (like `userName`) using `var`, `let`, and `const`
- Try to reassign each one and observe what happens
- Create a function and test how each behaves when accessed before declaration
- Write comments explaining when you'd use each type
- Document the differences you observe between the three declaration types

**Example Structure**:
```javascript
// Example of what you should explore (don't copy this exactly):
var userName1 = "Alice";
let userName2 = "Bob";
const userName3 = "Charlie";

// Try reassigning each:
userName1 = "Alice Updated"; // What happens?
userName2 = "Bob Updated";   // What happens?
userName3 = "Charlie Updated"; // What happens?

// Test hoisting behavior:
function testHoisting() {
    console.log(varVariable);   // What prints?
    console.log(letVariable);   // What happens?
    console.log(constVariable); // What happens?
    
    var varVariable = "I'm var";
    let letVariable = "I'm let";
    const constVariable = "I'm const";
}
```

**Helpful Links**:
- [MDN Variables Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
- [JavaScript.info var vs let vs const](https://javascript.info/var)
- [Hoisting Explained](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [When to use const vs let](https://kentcdodds.com/blog/use-const)

---

**Challenge 1.2**: Variable naming conventions
**Instructions**:
- Create 10 variables representing different data (age, firstName, isLoggedIn, etc.)
- Use proper camelCase for multi-word variables
- Create examples of what NOT to do (reserved words, numbers first, etc.) and comment them out
- Write a comment explaining why good naming matters
- Practice descriptive variable names that clearly indicate their purpose

**Example Structure**:
```javascript
// Good naming examples to build upon:
let userAge = 25;
let firstName = "John";
let isLoggedIn = true;
let shoppingCartTotal = 99.99;

// Bad naming examples (comment these out and explain why they're bad):
// let 2names = "bad";     // Why is this wrong?
// let class = "reserved"; // Why is this wrong?
// let a = "unclear";      // Why is this wrong?

// Your task: Create 7 more well-named variables
// representing different types of data
```

**Helpful Links**:
- [JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions/)
- [Clean Code Variable Names](https://blog.logrocket.com/javascript-naming-conventions/)
- [Reserved Words List](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
- [camelCase vs snake_case](https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)

---

**Challenge 1.3**: Hoisting exploration
**Instructions**:
- Create a function that tries to use variables before they're declared
- Test with `var`, `let`, and `const` - document what happens with each
- Create examples showing temporal dead zone with `let` and `const`
- Write a function declaration and call it before it's defined
- Document your observations about how JavaScript handles hoisting differently for each declaration type

**Example Structure**:
```javascript
// Test this function - what happens when you call it?
function hoistingTest() {
    console.log("Testing var:", varTest);     // What prints?
    console.log("Testing let:", letTest);     // What happens?
    console.log("Testing const:", constTest); // What happens?
    
    var varTest = "I'm hoisted";
    let letTest = "I'm in TDZ";
    const constTest = "I'm also in TDZ";
}

// Try calling this function before it's declared:
// callMeEarly(); // Does this work?

function callMeEarly() {
    return "I was called before I was declared!";
}

// Now try with a function expression:
// callMeLate(); // Does this work?

var callMeLate = function() {
    return "I'm a function expression";
};
```

**Helpful Links**:
- [JavaScript.info Hoisting Deep Dive](https://javascript.info/var#var-hoisting)
- [Temporal Dead Zone Explained](https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda)
- [Function Hoisting vs Variable Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Understanding the Temporal Dead Zone](https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/)

---

### Data Type Mastery

**Challenge 1.4**: Primitive data types identification
**Instructions**:
- Create one variable for each primitive type: string, number, boolean, undefined, null, symbol, bigint
- Use `typeof` operator on each and log the results
- Create a function that takes any value and returns its type
- Test edge cases like `typeof null` and document the quirks you discover
- Experiment with different ways to create each data type

**Example Structure**:
```javascript
// Create one variable for each primitive type:
let stringExample = "Hello World";
let numberExample = 42;
let booleanExample = true;
// Continue with undefined, null, symbol, bigint...

// Test typeof on each:
console.log(typeof stringExample);  // What does this print?
console.log(typeof numberExample);  // What does this print?
// Continue testing all types...

// Create a type identifier function:
function identifyType(value) {
    // Your implementation here
    // Handle the typeof null quirk
    // Return a descriptive string about the type
}

// Test your function:
console.log(identifyType("hello"));    // Should return info about string
console.log(identifyType(null));       // Handle the null quirk
console.log(identifyType(undefined));  // What's the difference from null?
```

**Helpful Links**:
- [MDN Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript.info Data Types](https://javascript.info/types)
- [typeof Operator Quirks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [Primitive vs Reference Types](https://blog.logrocket.com/primitive-vs-reference-data-types-javascript/)

---

**Challenge 1.5**: Type coercion experiments
**Instructions**:
- Create examples of implicit coercion (like `"5" + 3` vs `"5" - 3`)
- Use explicit conversion methods: `String()`, `Number()`, `Boolean()`
- Create a list of all falsy values and test them with `Boolean()`
- Build a function that demonstrates truthy/falsy behavior with different inputs
- Document which operations cause type coercion and which don't

**Example Structure**:
```javascript
// Implicit coercion examples:
console.log("5" + 3);    // What does this equal?
console.log("5" - 3);    // What does this equal?
console.log("5" * 3);    // What does this equal?
console.log(true + 1);   // What does this equal?

// Explicit conversion examples:
let stringToNumber = Number("123");
let numberToString = String(456);
let valueToBoolean = Boolean("hello");

// Test all falsy values:
let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(value => {
    console.log(`Boolean(${value}) = ${Boolean(value)}`);
});

// Create a function that tests truthy/falsy:
function testTruthiness(value) {
    // Your implementation here
    // Return whether the value is truthy or falsy
    // Explain why it's truthy or falsy
}
```

**Helpful Links**:
- [JavaScript.info Type Conversions](https://javascript.info/type-conversions)
- [Type Coercion Explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
- [Truthy and Falsy Values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---
**Challenge 1.6**: Number operations and edge cases
**Instructions**:
- Create variables with integers, floats, scientific notation (like `1e10`)
- Test operations that result in `Infinity`, `-Infinity`, and `NaN`
- Use `Number.isNaN()`, `Number.isFinite()`, `Number.isInteger()` to test different values
- Explore `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER`
- Use Math object methods: `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.random()`
- Test what happens when you exceed JavaScript's number limits

**Example Structure**:
```javascript
// Different number formats:
let integer = 42;
let float = 3.14159;
let scientific = 1e10;        // What does this equal?
let negative = -273.15;

// Create Infinity and NaN:
let positiveInfinity = 1 / 0;  // What does this create?
let negativeInfinity = -1 / 0; // What does this create?
let notANumber = 0 / 0;        // What does this create?

// Test number checking methods:
console.log(Number.isNaN(notANumber));      // What does this return?
console.log(Number.isFinite(positiveInfinity)); // What does this return?
console.log(Number.isInteger(3.14));       // What does this return?

// Explore safe integer limits:
console.log(Number.MAX_SAFE_INTEGER);      // What's the largest safe integer?
console.log(Number.MAX_SAFE_INTEGER + 1);  // What happens here?
console.log(Number.MAX_SAFE_INTEGER + 2);  // And here?

// Math object exploration:
let randomNum = Math.random();             // What range does this give?
let roundedUp = Math.ceil(3.1);           // What does this equal?
let roundedDown = Math.floor(3.9);        // What does this equal?
```

**Helpful Links**:
- [MDN Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [JavaScript Number Precision](https://javascript.info/number#imprecise-calculations)
- [Math Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Safe Integers in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)

---

**Challenge 1.7**: String manipulation basics
**Instructions**:
- Create strings using single quotes, double quotes, and backticks
- Practice concatenation with `+` operator and template literals
- Use escape characters: `\n`, `\t`, `\"`, `\\`
- Create multiline strings using both `\n` and template literals
- Build a function that formats a person's full name from first/last name inputs
- Experiment with string length property and basic string methods

**Example Structure**:
```javascript
// Different string creation methods:
let singleQuotes = 'Hello World';
let doubleQuotes = "Hello World";
let templateLiteral = `Hello World`;

// String concatenation:
let firstName = "John";
let lastName = "Doe";
let fullName1 = firstName + " " + lastName;        // Traditional way
let fullName2 = `${firstName} ${lastName}`;        // Template literal way

// Escape characters:
let withNewline = "Line 1\nLine 2";               // What does \n do?
let withTab = "Column1\tColumn2";                  // What does \t do?
let withQuotes = "She said \"Hello\"";            // How to include quotes?
let withBackslash = "Path: C:\\Users\\Name";      // How to include backslashes?

// Multiline strings:
let multiline1 = "Line 1\nLine 2\nLine 3";
let multiline2 = `Line 1
Line 2
Line 3`;

// Create a name formatter function:
function formatFullName(first, last, title = "") {
    // Your implementation here
    // Handle cases where title might be empty
    // Return a properly formatted full name
}

// Test your function:
console.log(formatFullName("John", "Doe"));           // "John Doe"
console.log(formatFullName("Jane", "Smith", "Dr."));  // "Dr. Jane Smith"
```

**Helpful Links**:
- [MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Template Literals Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Escape Characters in JavaScript](https://javascript.info/string#quotes)
- [String Concatenation Best Practices](https://blog.logrocket.com/javascript-string-concatenation/)

---

**Challenge 1.8**: Boolean logic fundamentals
**Instructions**:
- Create complex boolean expressions using `&&`, `||`, `!`
- Test operator precedence: what happens with `true || false && false`?
- Create a function that validates user input using multiple boolean conditions
- Practice short-circuit evaluation with `&&` and `||`
- Build examples showing when logical operators return non-boolean values

**Example Structure**:
```javascript
// Basic boolean operations:
let isAdult = true;
let hasLicense = false;
let canDrive = isAdult && hasLicense;  // What does this equal?

// Operator precedence test:
let result1 = true || false && false;   // What does this equal?
let result2 = (true || false) && false; // What about with parentheses?

// Short-circuit evaluation:
let user = { name: "John" };
let userName = user && user.name;       // What happens if user is null?

let defaultName = userName || "Guest";  // What happens if userName is empty?

// Create a validation function:
function validateUser(age, email, hasAgreed) {
    // Your implementation here
    // Check if age is 18+, email contains @, and hasAgreed is true
    // Return true only if ALL conditions are met
}

// Non-boolean return values:
let value1 = "hello" && "world";        // What does this return?
let value2 = "" || "default";           // What does this return?
let value3 = null && "won't reach";     // What does this return?

// Test these examples and document what you observe
```

**Helpful Links**:
- [MDN Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [JavaScript.info Logical Operators](https://javascript.info/logical-operators)
- [Short-Circuit Evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)
- [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---

**Challenge 1.9**: Undefined vs null understanding
**Instructions**:
- Create variables that are `undefined` (declared but not assigned)
- Explicitly assign `null` to variables to represent "no value"
- Create a function that returns `undefined` vs one that returns `null`
- Test equality: compare `null == undefined` vs `null === undefined`
- Build a utility function to check if a value is "empty" (null, undefined, or empty string)
- Document when you should use null vs when undefined naturally occurs

**Example Structure**:
```javascript
// Undefined examples:
let declaredButNotAssigned;             // What is the value?
let obj = {};
console.log(obj.nonExistentProperty);   // What does this return?

function noReturnStatement() {
    // No return statement
}
let result = noReturnStatement();       // What does result equal?

// Null examples:
let intentionallyEmpty = null;          // Explicitly "no value"
let user = null;                        // User not logged in

// Equality testing:
console.log(null == undefined);         // What does this return?
console.log(null === undefined);        // What does this return?

// Create an "isEmpty" utility function:
function isEmpty(value) {
    // Your implementation here
    // Return true if value is null, undefined, or empty string
    // Return false otherwise
}

// Test your function:
console.log(isEmpty(null));             // Should return true
console.log(isEmpty(undefined));        // Should return true
console.log(isEmpty(""));               // Should return true
console.log(isEmpty("hello"));          // Should return false
console.log(isEmpty(0));                // Should return false (0 is not "empty")

// When to use null vs undefined:
// undefined: Variable declared but not assigned, missing object properties, functions with no return
// null: Intentionally empty value, "reset" a variable, API responses indicating "no data"
```

**Helpful Links**:
- [JavaScript.info null vs undefined](https://javascript.info/types#the-null-value)
- [MDN null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [MDN undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- [When to use null vs undefined](https://blog.logrocket.com/javascript-null-vs-undefined/)

---

**Challenge 1.10**: Symbol data type exploration
**Instructions**:
- Create symbols using `Symbol()` and `Symbol.for()`
- Use symbols as object property keys
- Create a symbol with a description and access it
- Demonstrate that symbols are always unique, even with same description
- Use symbols to create "private" object properties that won't conflict with other properties
- Explore how symbols behave in loops and Object.keys()

**Example Structure**:
```javascript
// Basic symbol creation:
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 === symbol2);       // What does this return?

let symbol3 = Symbol("description");
let symbol4 = Symbol("description");
console.log(symbol3 === symbol4);       // What does this return?

// Global symbol registry:
let globalSymbol1 = Symbol.for("shared");
let globalSymbol2 = Symbol.for("shared");
console.log(globalSymbol1 === globalSymbol2); // What does this return?

// Symbols as object keys:
let obj = {};
let mySymbol = Symbol("myKey");
obj[mySymbol] = "secret value";
obj.regularKey = "regular value";

console.log(obj[mySymbol]);              // How do you access symbol properties?
console.log(Object.keys(obj));           // Do symbols appear in Object.keys()?

// "Private" properties with symbols:
let user = {
    name: "John",
    age: 30
};

let privateId = Symbol("id");
user[privateId] = "secret-123";

// How would someone access the privateId without knowing the symbol?
// Test what happens when you try to iterate over the object properties
```

**Helpful Links**:
- [MDN Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [JavaScript.info Symbols](https://javascript.info/symbol)
- [Symbol Use Cases](https://blog.logrocket.com/understanding-javascript-symbols/)
- [Well-known Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols)

---

**Challenge 1.11**: BigInt for large numbers
**Instructions**:
- Create BigInt values using `n` suffix and `BigInt()` constructor
- Perform arithmetic operations with BigInts
- Try mixing BigInt with regular numbers (observe what happens)
- Create a function that safely converts between Number and BigInt
- Calculate factorial of large numbers (like 50!) using BigInt
- Test the limits of regular numbers vs BigInt capabilities

**Example Structure**:
```javascript
// Creating BigInts:
let bigInt1 = 123n;                      // Using 'n' suffix
let bigInt2 = BigInt(456);               // Using constructor
let bigInt3 = BigInt("789012345678901234567890"); // From string

// Arithmetic with BigInts:
let sum = bigInt1 + bigInt2;             // What type is the result?
let product = bigInt1 * bigInt2;         // BigInt operations

// Mixing BigInt and Number (this will cause errors):
// let mixed = bigInt1 + 123;            // What happens here?
// let mixed2 = bigInt1 * 3.14;          // What about with decimals?

// Safe conversion function:
function safeConvert(value, targetType) {
    // Your implementation here
    // Convert between Number and BigInt safely
    // Handle edge cases and potential errors
}

// Large number calculations:
function factorial(n) {
    // Your implementation here using BigInt
    // Calculate n! for large numbers like 50
    // Regular numbers can't handle 50! accurately
}

// Test the limits:
console.log(Number.MAX_SAFE_INTEGER);    // Largest safe regular number
console.log(Number.MAX_SAFE_INTEGER + 1); // What happens here?
console.log(Number.MAX_SAFE_INTEGER + 2); // And here?

// Now try with BigInt:
let bigSafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigSafe + 1n);               // What happens with BigInt?
console.log(bigSafe + 2n);               // More precise?
```

**Helpful Links**:
- [MDN BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [JavaScript.info BigInt](https://javascript.info/bigint)
- [When to use BigInt](https://blog.logrocket.com/understanding-bigint-javascript/)
- [BigInt vs Number Performance](https://v8.dev/features/bigint)

---

**Challenge 1.12**: Variable scope exploration
**Instructions**:
- Create global variables and access them from functions
- Create function-scoped variables using `var`
- Create block-scoped variables using `let` and `const` in if statements and loops
- Demonstrate scope chain by accessing outer variables from inner functions
- Create examples of variable shadowing (same name in different scopes)
- Test what happens when you try to access variables outside their scope

**Example Structure**:
```javascript
// Global scope:
var globalVar = "I'm global";
let globalLet = "I'm also global";

function testGlobalAccess() {
    console.log(globalVar);              // Can functions access global variables?
    console.log(globalLet);              // What about let variables?
}

// Function scope:
function functionScopeTest() {
    var functionScoped = "I'm function scoped";
    let alsoFunctionScoped = "Me too";
    
    if (true) {
        var stillFunctionScoped = "I'm still function scoped";
        let blockScoped = "I'm block scoped";
        const alsoBlockScoped = "Me too";
        
        console.log(blockScoped);        // Accessible here?
    }
    
    console.log(stillFunctionScoped);    // Accessible here?
    // console.log(blockScoped);         // What happens if you uncomment this?
}

// Scope chain example:
function outerFunction() {
    let outerVariable = "I'm outer";
    
    function innerFunction() {
        let innerVariable = "I'm inner";
        console.log(outerVariable);      // Can inner access outer?
        console.log(innerVariable);      // Can inner access its own?
    }
    
    innerFunction();
    // console.log(innerVariable);       // Can outer access inner?
}

// Variable shadowing:
let name = "Global Name";

function shadowingExample() {
    let name = "Function Name";          // This shadows the global name
    console.log(name);                   // Which name gets printed?
    
    if (true) {
        let name = "Block Name";         // This shadows the function name
        console.log(name);               // Which name gets printed?
    }
    
    console.log(name);                   // Which name gets printed?
}
```

**Helpful Links**:
- [JavaScript.info Variable Scope](https://javascript.info/closure#lexical-environment)
- [MDN Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Understanding Scope Chain](https://blog.logrocket.com/understanding-scope-and-scope-chain-javascript/)
- [Block Scope vs Function Scope](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

---
**Challenge 1.13**: Const with objects and arrays
**Instructions**:
- Create a `const` array and try to push/pop elements
- Create a `const` object and try to modify its properties
- Try to reassign the entire `const` variable (document what happens)
- Use `Object.freeze()` to make objects truly immutable
- Create a function that deep-clones objects to avoid mutation
- Test the difference between `const` with primitives vs reference types

**Example Structure**:
```javascript
// Const with primitives:
const number = 42;
// number = 43;                         // What happens if you uncomment this?

// Const with arrays:
const myArray = [1, 2, 3];
myArray.push(4);                        // Does this work?
myArray[0] = 10;                        // What about this?
console.log(myArray);                   // What does the array look like now?

// myArray = [5, 6, 7];                 // What happens if you uncomment this?

// Const with objects:
const myObject = { name: "John", age: 30 };
myObject.age = 31;                      // Does this work?
myObject.city = "New York";             // Can you add new properties?
console.log(myObject);                  // What does the object look like now?

// myObject = { name: "Jane" };         // What happens if you uncomment this?

// Making objects truly immutable:
const frozenObject = Object.freeze({ name: "Jane", age: 25 });
frozenObject.age = 26;                  // Does this work?
frozenObject.city = "Boston";           // What about adding properties?
console.log(frozenObject);              // Did anything change?

// Deep cloning function:
function deepClone(obj) {
    // Your implementation here
    // Create a completely independent copy of the object
    // Handle nested objects and arrays
    // Consider using JSON.parse(JSON.stringify()) as a simple approach
}

// Test your deep clone:
const original = { 
    name: "John", 
    address: { city: "NYC", zip: "10001" },
    hobbies: ["reading", "coding"]
};

const cloned = deepClone(original);
cloned.address.city = "LA";             // Change the clone
console.log(original.address.city);     // Did the original change?
```

**Helpful Links**:
- [MDN const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Object.freeze() explained](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [Shallow vs Deep Copy](https://javascript.info/object-copy#cloning-and-merging-object-assign)
- [Immutability in JavaScript](https://blog.logrocket.com/immutability-in-react-ebe55253a1cc/)

---

**Challenge 1.14**: Destructuring assignment basics
**Instructions**:
- Destructure arrays: extract first, second elements and use rest operator
- Destructure objects: extract specific properties and rename them
- Use default values in destructuring for missing properties
- Destructure nested objects and arrays
- Create a function that returns multiple values and destructure the result
- Practice swapping variables using destructuring

**Example Structure**:
```javascript
// Array destructuring:
const colors = ["red", "green", "blue", "yellow"];
const [first, second] = colors;         // Extract first two elements
console.log(first, second);             // What gets printed?

const [primary, , tertiary] = colors;   // Skip the second element
console.log(primary, tertiary);         // What gets printed?

const [main, ...others] = colors;       // Use rest operator
console.log(main);                      // What is main?
console.log(others);                    // What is others?

// Object destructuring:
const person = { name: "John", age: 30, city: "NYC" };
const { name, age } = person;           // Extract specific properties
console.log(name, age);                 // What gets printed?

const { name: fullName, age: years } = person; // Rename while destructuring
console.log(fullName, years);           // What gets printed?

// Default values:
const { name: personName, country = "USA" } = person; // Default for missing property
console.log(personName, country);       // What gets printed?

// Nested destructuring:
const user = {
    id: 1,
    profile: {
        name: "Jane",
        contact: {
            email: "jane@email.com",
            phone: "123-456-7890"
        }
    }
};

// Extract email from nested structure:
const { profile: { contact: { email } } } = user;
console.log(email);                     // What gets printed?

// Function returning multiple values:
function getCoordinates() {
    return [40.7128, -74.0060];         // NYC coordinates
}

const [latitude, longitude] = getCoordinates();
console.log(`Lat: ${latitude}, Lng: ${longitude}`);

// Variable swapping:
let a = 1;
let b = 2;
[a, b] = [b, a];                        // Swap using destructuring
console.log(a, b);                      // What are the values now?
```

**Helpful Links**:
- [JavaScript.info Destructuring Assignment](https://javascript.info/destructuring-assignment)
- [MDN Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Destructuring Best Practices](https://blog.logrocket.com/javascript-destructuring-best-practices/)
- [Advanced Destructuring Patterns](https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/)

---

**Challenge 1.15**: Template literal advanced features
**Instructions**:
- Create multi-line strings using template literals
- Embed expressions inside template literals using `${expression}`
- Create a tagged template function that processes template literals
- Build a simple HTML template generator using template literals
- Create a function that formats currency using template literals
- Experiment with nested template literals and complex expressions

**Example Structure**:
```javascript
// Multi-line strings:
const multiLineString = `
    This is line 1
    This is line 2
    This is line 3
`;
console.log(multiLineString);

// Embedding expressions:
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Complex expressions:
const price = 19.99;
const tax = 0.08;
const total = `Total: $${(price * (1 + tax)).toFixed(2)}`;
console.log(total);

// Tagged template function:
function highlight(strings, ...values) {
    // Your implementation here
    // Process the template literal and highlight the interpolated values
    // strings: array of string parts
    // values: array of interpolated values
    // Return a processed string
}

// Test your tagged template:
const product = "laptop";
const cost = 999;
const result = highlight`The ${product} costs $${cost}`;
console.log(result); // Should highlight the interpolated values

// HTML template generator:
function createCard(title, content, author) {
    return `
        <div class="card">
            <h2>${title}</h2>
            <p>${content}</p>
            <small>By: ${author}</small>
        </div>
    `;
}

// Test your HTML generator:
const htmlCard = createCard("My Blog Post", "This is the content...", "John Doe");
console.log(htmlCard);

// Currency formatter:
function formatCurrency(amount, currency = "USD") {
    // Your implementation here
    // Use template literals to format currency nicely
    // Handle different currencies and amounts
}

// Test your currency formatter:
console.log(formatCurrency(1234.56));      // Should format as $1,234.56
console.log(formatCurrency(999.99, "EUR")); // Should format as €999.99

// Nested template literals:
const users = ["Alice", "Bob", "Charlie"];
const userList = `
    <ul>
        ${users.map(user => `<li>${user}</li>`).join('')}
    </ul>
`;
console.log(userList);
```

**Helpful Links**:
- [MDN Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Tagged Templates Explained](https://javascript.info/template-literals#tagged-templates)
- [Template Literal Use Cases](https://blog.logrocket.com/javascript-template-literals/)
- [Advanced Template Literal Techniques](https://www.freecodecamp.org/news/javascript-template-literals/)

---

## ⚡ Section 2: Operators & Expressions (12 Challenges)

### Arithmetic Operations

**Challenge 2.1**: Calculator creation
**Instructions**:
- Build a function that takes two numbers and an operator (+, -, *, /, %)
- Handle edge cases: division by zero, invalid operators, non-numeric inputs
- Add input validation and return appropriate error messages
- Create a simple interface that prompts user for input
- Test with various number types (integers, floats, negative numbers)
- Make sure your function handles all possible error scenarios gracefully

**Example Structure**:
```javascript
// Basic calculator function:
function calculate(num1, operator, num2) {
    // Input validation first:
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Error: Both inputs must be numbers";
    }
    
    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Invalid number provided";
    }
    
    // Handle operations:
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        case '%':
            if (num2 === 0) {
                return "Error: Cannot modulo by zero";
            }
            return num1 % num2;
        default:
            return "Error: Invalid operator. Use +, -, *, /, or %";
    }
}

// Test your calculator:
console.log(calculate(10, '+', 5));     // Should return 15
console.log(calculate(10, '/', 0));     // Should return error message
console.log(calculate("10", '+', 5));   // Should return error message
console.log(calculate(10, '^', 5));     // Should return error message

// Advanced calculator with more operations:
function advancedCalculate(num1, operator, num2 = null) {
    // Your implementation here
    // Add support for: ** (power), sqrt (square root), abs (absolute value)
    // Handle single-number operations (sqrt, abs) where num2 might be null
}

// Simple calculator interface (optional):
function calculatorInterface() {
    // Your implementation here
    // Use prompt() to get user input
    // Keep asking for calculations until user wants to quit
    // Display results and handle errors gracefully
}
```

**Helpful Links**:
- [MDN Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- [JavaScript Calculator Tutorial](https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/)
- [Error Handling Best Practices](https://blog.logrocket.com/javascript-error-handling-best-practices/)
- [Input Validation Techniques](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

---

**Challenge 2.2**: Modulo operator mastery
**Instructions**:
- Create a function to check if a number is even or odd using %
- Build a function that cycles through array indices using modulo
- Create a "wrap-around" counter that resets after reaching a maximum
- Use modulo to extract individual digits from a number
- Build a function that determines if a year is divisible by 4, 100, or 400 (leap year logic)
- Experiment with modulo on negative numbers and document the behavior

**Example Structure**:
```javascript
// Even/odd checker:
function isEven(number) {
    // Your implementation using modulo
    // Return true if even, false if odd
}

function isOdd(number) {
    // Your implementation using modulo
    // Return true if odd, false if even
}

// Test your functions:
console.log(isEven(4));    // Should return true
console.log(isOdd(7));     // Should return true

// Array index cycling:
function getCircularIndex(index, arrayLength) {
    // Your implementation here
    // Use modulo to wrap around when index exceeds array length
    // Handle negative indices too
}

// Test circular indexing:
const colors = ["red", "green", "blue"];
console.log(colors[getCircularIndex(5, colors.length)]);  // What color?
console.log(colors[getCircularIndex(-1, colors.length)]); // What color?

// Wrap-around counter:
function createCounter(max) {
    let count = 0;
    return function() {
        // Your implementation here
        // Increment count and wrap around at max using modulo
        // Return the current count
    };
}

// Test your counter:
const counter = createCounter(3);
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 0 (wraps around)

// Extract digits from number:
function getDigits(number) {
    // Your implementation here
    // Use modulo and division to extract each digit
    // Return an array of digits
}

// Test digit extraction:
console.log(getDigits(12345)); // Should return [1, 2, 3, 4, 5]

// Leap year checker:
function isLeapYear(year) {
    // Your implementation here
    // A year is leap if: divisible by 4 AND (not divisible by 100 OR divisible by 400)
    // Use modulo to check divisibility
}

// Test leap year:
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true

// Negative number modulo behavior:
console.log(5 % 3);    // What does this return?
console.log(-5 % 3);   // What does this return?
console.log(5 % -3);   // What does this return?
console.log(-5 % -3);  // What does this return?
// Document the patterns you observe
```

**Helpful Links**:
- [JavaScript.info Operators](https://javascript.info/operators#remainder)
- [Modulo Operator Explained](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Practical Uses of Modulo](https://blog.logrocket.com/javascript-modulo-operator/)
- [Leap Year Algorithm](https://en.wikipedia.org/wiki/Leap_year#Algorithm)

---
---

## 🔄 Section 4: LOOPS - Your Current Focus! (25 Challenges)

### For Loop Fundamentals

**Challenge 4.1**: Basic counting loops
**Instructions**:
- Create a loop that counts from 1 to 100 and prints each number
- Create another loop that counts backwards from 100 to 1
- Modify the first loop to only print every 5th number (5, 10, 15, etc.)
- Create a loop that counts from any start number to any end number
- Add input validation to handle negative numbers and ensure start < end
- Test your loops with different ranges and step sizes

**Example Structure**:
```javascript
// Basic counting up:
console.log("Counting from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Your turn: Create a loop that counts from 1 to 100

// Counting backwards:
console.log("Counting backwards from 10 to 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Your turn: Create a loop that counts backwards from 100 to 1

// Skip counting (every 5th number):
console.log("Every 5th number from 5 to 50:");
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}

// Your turn: Create a loop that prints every 5th number from 5 to 100

// Flexible range function:
function countRange(start, end, step = 1) {
    // Your implementation here
    // Validate inputs: start and end should be numbers
    // Handle case where start > end
    // Use the step parameter to increment by different amounts
    // Print each number in the range
}

// Test your function:
countRange(1, 10);        // Should count 1, 2, 3, ..., 10
countRange(10, 1, -1);    // Should count 10, 9, 8, ..., 1
countRange(0, 20, 2);     // Should count 0, 2, 4, ..., 20
countRange(5, 2);         // Should handle invalid range gracefully
```

**Helpful Links**:
- [MDN for Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [JavaScript.info Loops](https://javascript.info/while-for)
- [For Loop Examples](https://www.w3schools.com/js/js_loop_for.asp)
- [Loop Best Practices](https://blog.logrocket.com/javascript-loops-performance-comparison/)

---

**Challenge 4.2**: Skip counting patterns
**Instructions**:
- Create loops that count by 2s, 3s, 5s, and 10s up to 100
- Build a multiplication table generator for any number (1-12)
- Create a function that generates the times tables from 1x1 to 12x12
- Add formatting to make the multiplication table readable
- Create a skip-counting function that works with any increment
- Test your multiplication table with different numbers and verify accuracy

**Example Structure**:
```javascript
// Count by 2s:
console.log("Counting by 2s up to 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Your turn: Create loops for counting by 3s, 5s, and 10s up to 100

// Multiplication table for one number:
function multiplicationTable(number) {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 12; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

// Test your function:
multiplicationTable(7);

// Complete times tables (1x1 to 12x12):
function completeTimesTable() {
    // Your implementation here
    // Use nested loops: outer loop for the first number (1-12)
    // Inner loop for the second number (1-12)
    // Format the output nicely, maybe in a grid format
}

// Formatted multiplication table:
function formattedTable(number) {
    // Your implementation here
    // Create a nicely formatted table
    // Align numbers properly (hint: use padStart() or similar)
    // Maybe add borders or separators
}

// Skip counting function:
function skipCount(start, end, increment) {
    // Your implementation here
    // Count from start to end by increment
    // Handle negative increments for counting backwards
    // Validate inputs
}

// Test your skip counting:
skipCount(0, 50, 5);      // Should print 0, 5, 10, 15, ..., 50
skipCount(100, 0, -10);   // Should print 100, 90, 80, ..., 0
skipCount(1, 20, 3);      // Should print 1, 4, 7, 10, 13, 16, 19

// Challenge: Create a visual multiplication grid
function multiplicationGrid() {
    // Your implementation here
    // Create a 12x12 grid showing all multiplication results
    // Format it so it looks like a proper table
    // Example output:
    //     1   2   3   4   5
    // 1   1   2   3   4   5
    // 2   2   4   6   8  10
    // 3   3   6   9  12  15
    // etc.
}
```

**Helpful Links**:
- [Multiplication Tables Algorithm](https://www.geeksforgeeks.org/program-to-print-multiplication-table-of-a-given-number/)
- [String Formatting in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [Nested Loops Tutorial](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)
- [JavaScript Number Formatting](https://blog.logrocket.com/javascript-number-format/)

---

**Challenge 4.3**: Sum and product calculations
**Instructions**:
- Calculate the sum of all numbers from 1 to 100 using a loop
- Calculate the factorial of any number (n! = n × (n-1) × ... × 1)
- Create a function that finds the sum of all even numbers in a range
- Build a function that calculates the product of all odd numbers in a range
- Add error handling for negative numbers and large factorials
- Verify your sum calculation: 1+2+...+100 should equal 5050

**Example Structure**:
```javascript
// Sum of numbers 1 to 100:
function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

// Test your function:
console.log(sumRange(1, 100)); // Should equal 5050

// Factorial calculation:
function factorial(n) {
    // Your implementation here
    // Handle edge cases: n = 0 (should return 1), negative numbers
    // Use a loop to calculate n! = n × (n-1) × (n-2) × ... × 1
    // Consider using BigInt for large numbers
}

// Test your factorial:
console.log(factorial(5));  // Should equal 120 (5 × 4 × 3 × 2 × 1)
console.log(factorial(0));  // Should equal 1 (by definition)
console.log(factorial(10)); // Should equal 3628800

// Sum of even numbers in range:
function sumEvenNumbers(start, end) {
    // Your implementation here
    // Loop through the range and add only even numbers
    // Use modulo operator to check if number is even
}

// Test your function:
console.log(sumEvenNumbers(1, 10)); // Should equal 30 (2+4+6+8+10)

// Product of odd numbers in range:
function productOddNumbers(start, end) {
    // Your implementation here
    // Loop through the range and multiply only odd numbers
    // Start with product = 1, not 0
    // Handle case where there are no odd numbers in range
}

// Test your function:
console.log(productOddNumbers(1, 5)); // Should equal 15 (1×3×5)

// Advanced: Sum of squares
function sumOfSquares(n) {
    // Your implementation here
    // Calculate 1² + 2² + 3² + ... + n²
}

// Advanced: Sum of cubes
function sumOfCubes(n) {
    // Your implementation here
    // Calculate 1³ + 2³ + 3³ + ... + n³
}

// Verification function:
function verifyCalculations() {
    // Test known results:
    console.log("Sum 1-100:", sumRange(1, 100) === 5050 ? "✓" : "✗");
    console.log("5!:", factorial(5) === 120 ? "✓" : "✗");
    console.log("Sum evens 1-10:", sumEvenNumbers(1, 10) === 30 ? "✓" : "✗");
    // Add more verification tests
}
```

**Helpful Links**:
- [Sum Formula Verification](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
- [Factorial Algorithm](https://www.mathsisfun.com/definitions/factorial.html)
- [Mathematical Series](https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:series)
- [BigInt for Large Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

---

**Challenge 4.4**: Even and odd number filtering
**Instructions**:
- Print only even numbers from 1 to 50
- Count how many odd numbers exist between 1 and 100
- Create a function that separates an array of numbers into even and odd arrays
- Build a function that finds the largest even and largest odd number in a range
- Create a pattern that alternates between printing "even" and "odd" for each number
- Test your functions with different ranges and verify the counts are correct

**Example Structure**:
```javascript
// Print only even numbers from 1 to 50:
console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Your turn: Print only odd numbers from 1 to 50

// Count odd numbers between 1 and 100:
function countOddNumbers(start, end) {
    // Your implementation here
    // Loop through range and count odd numbers
    // Return the count, don't just print
}

// Test your function:
console.log(`Odd numbers between 1-100: ${countOddNumbers(1, 100)}`); // Should be 50

// Separate array into even and odd:
function separateEvenOdd(numbers) {
    // Your implementation here
    // Take an array of numbers as input
    // Return an object with 'even' and 'odd' arrays
    // Example: {even: [2, 4, 6], odd: [1, 3, 5]}
}

// Test your function:
const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const separated = separateEvenOdd(testNumbers);
console.log("Even:", separated.even);
console.log("Odd:", separated.odd);

// Find largest even and odd in range:
function findLargestEvenOdd(start, end) {
    // Your implementation here
    // Find the largest even number in the range
    // Find the largest odd number in the range
    // Return an object with both values
    // Handle cases where no even or odd numbers exist in range
}

// Test your function:
console.log(findLargestEvenOdd(1, 20)); // Should find even: 20, odd: 19

// Alternating pattern:
function alternatingPattern(start, end) {
    // Your implementation here
    // For each number in range, print the number and whether it's "even" or "odd"
    // Example output: "1 is odd", "2 is even", "3 is odd", etc.
}

// Test your pattern:
alternatingPattern(1, 10);

// Advanced: Even/odd statistics
function evenOddStats(start, end) {
    // Your implementation here
    // Calculate statistics about even and odd numbers in range
    // Return object with: count of each, sum of each, average of each
    // Example: {even: {count: 5, sum: 30, average: 6}, odd: {count: 5, sum: 25, average: 5}}
}

// Challenge: Create a visual pattern
function createEvenOddPattern(rows) {
    // Your implementation here
    // Create a visual pattern where even numbers are represented by one symbol
    // and odd numbers by another symbol
    // Example for rows = 5:
    // O X O X O  (1=O, 2=X, 3=O, 4=X, 5=O)
    // X O X O X  (6=X, 7=O, 8=X, 9=O, 10=X)
    // etc.
}
```

**Helpful Links**:
- [Even and Odd Numbers](https://www.mathsisfun.com/definitions/even-number.html)
- [Modulo for Even/Odd Testing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Array Methods for Filtering](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Mathematical Patterns](https://www.khanacademy.org/math/algebra-basics/alg-basics-expressions-and-variables/alg-basics-patterns/a/patterns-review)

---

**Challenge 4.5**: Nested loop patterns
**Instructions**:
- Create a complete multiplication table (1-12) using nested loops
- Generate all coordinate pairs (x,y) for a 5x5 grid
- Create a function that prints a rectangle of stars (*) with given width and height
- Build a nested loop that finds all pairs of numbers that sum to a target value
- Create a pattern that prints numbers in a grid format
- Format your output so it's easy to read and understand

**Example Structure**:
```javascript
// Complete multiplication table using nested loops:
function multiplicationTable() {
    console.log("Complete Multiplication Table (1-12):");
    
    // Print header row
    process.stdout.write("   ");  // Space for row labels
    for (let j = 1; j <= 12; j++) {
        process.stdout.write(j.toString().padStart(4));
    }
    console.log(); // New line
    
    // Print each row
    for (let i = 1; i <= 12; i++) {
        process.stdout.write(i.toString().padStart(3)); // Row label
        for (let j = 1; j <= 12; j++) {
            let product = i * j;
            process.stdout.write(product.toString().padStart(4));
        }
        console.log(); // New line after each row
    }
}

// Test your table:
multiplicationTable();

// Generate coordinate pairs for 5x5 grid:
function generateCoordinates(size) {
    // Your implementation here
    // Use nested loops to generate all (x,y) pairs
    // For a 5x5 grid: (0,0), (0,1), (0,2), ..., (4,4)
    // Store in an array or print them out
}

// Test your function:
generateCoordinates(5);

// Rectangle of stars:
function drawRectangle(width, height) {
    // Your implementation here
    // Use nested loops: outer loop for rows, inner loop for columns
    // Print '*' for each position
    // Add newlines at the end of each row
}

// Test your rectangle:
drawRectangle(5, 3);
// Should output:
// *****
// *****
// *****

// Find pairs that sum to target:
function findSumPairs(numbers, target) {
    // Your implementation here
    // Use nested loops to check all pairs
    // Outer loop: first number, inner loop: second number
    // Avoid duplicate pairs like (3,5) and (5,3)
    // Return array of pairs that sum to target
}

// Test your function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findSumPairs(numbers, 10)); // Should find pairs like [1,9], [2,8], [3,7], [4,6]

// Number grid pattern:
function numberGrid(rows, cols) {
    // Your implementation here
    // Create a grid where each cell contains a sequential number
    // Format numbers so they align properly
    // Example 3x4 grid:
    //  1  2  3  4
    //  5  6  7  8
    //  9 10 11 12
}

// Test your grid:
numberGrid(3, 4);

// Advanced: Hollow rectangle
function drawHollowRectangle(width, height) {
    // Your implementation here
    // Draw a rectangle that's hollow inside
    // Only the border should have stars
    // Example 5x3:
    // *****
    // *   *
    // *****
}

// Advanced: Diamond pattern
function drawDiamond(size) {
    // Your implementation here
    // Create a diamond pattern using nested loops
    // Size determines the width of the middle row
    // Example size 5:
    //   *
    //  ***
    // *****
    //  ***
    //   *
}
```

**Helpful Links**:
- [Nested Loops Tutorial](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)
- [Pattern Programming](https://www.programiz.com/javascript/examples/pyramid-pattern)
- [String Padding Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [Console Output Formatting](https://nodejs.org/api/process.html#process_process_stdout)

---

### While Loop Mastery

**Challenge 4.6**: Condition-based loops
**Instructions**:
- Find the first number greater than 50 that's divisible by 7
- Generate random numbers between 1-100 until you get a number divisible by both 3 and 5
- Create a countdown timer that decrements from any starting number to 0
- Build a function that keeps doubling a number until it exceeds 1000
- Create a password strength checker that keeps asking until requirements are met
- Track how many iterations each loop takes and display the results

**Example Structure**:
```javascript
// Find first number > 50 divisible by 7:
function findFirstDivisible() {
    let number = 51; // Start checking from 51
    while (number % 7 !== 0) {
        number++;
    }
    console.log(`First number > 50 divisible by 7: ${number}`);
    return number;
}

// Test your function:
findFirstDivisible(); // Should find 56

// Generate random numbers until condition met:
function findRandomDivisibleBy15() {
    // Your implementation here
    // Use Math.random() to generate numbers 1-100
    // Keep generating until you find one divisible by both 3 and 5 (i.e., by 15)
    // Track how many attempts it took
    // Return both the number found and the attempt count
}

// Test your function:
const result = findRandomDivisibleBy15();
console.log(`Found ${result.number} after ${result.attempts} attempts`);

// Countdown timer:
function countdown(start) {
    // Your implementation here
    // Start from the given number and count down to 0
    // Print each number with a small delay (optional: use setTimeout)
    // Print "Blast off!" when reaching 0
}

// Test your countdown:
countdown(10);

// Keep doubling until exceeds 1000:
function doubleUntilExceeds(start, limit) {
    // Your implementation here
    // Start with the given number
    // Keep doubling it until it exceeds the limit
    // Track how many doublings it took
    // Return the final number and iteration count
}

// Test your function:
const doubleResult = doubleUntilExceeds(1, 1000);
console.log(`${doubleResult.finalNumber} reached after ${doubleResult.iterations} doublings`);

// Password strength checker:
function checkPasswordStrength(password) {
    // Helper function to check if password meets requirements
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && isLongEnough;
}

function passwordValidator() {
    // Your implementation here
    // Keep asking for password input until requirements are met
    // Use the checkPasswordStrength function above
    // Provide helpful feedback about what's missing
    // Count how many attempts it took
}

// Advanced: Collatz Conjecture
function collatzSequence(n) {
    // Your implementation here
    // Start with number n
    // If even: divide by 2
    // If odd: multiply by 3 and add 1
    // Continue until reaching 1
    // Track the sequence and count steps
    // Example: 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
}

// Test Collatz sequence:
collatzSequence(7);
```

**Helpful Links**:
- [MDN while Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [Math.random() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Regular Expressions for Password Validation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)

---

**Challenge 4.7**: User input validation loops
**Instructions**:
- Create a number guessing game where the user keeps guessing until correct
- Build a function that keeps asking for a valid email until one is provided
- Create an age validator that won't accept negative numbers or numbers over 150
- Build a menu system that keeps showing options until user chooses to exit
- Create a password validator that checks multiple criteria
- Make sure your validation provides helpful error messages for each type of invalid input

**Example Structure**:
```javascript
// Number guessing game:
function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1; // 1-100
    let attempts = 0;
    let guess;
    
    console.log("I'm thinking of a number between 1 and 100!");
    
    while (guess !== secretNumber) {
        // Your implementation here
        // Get user input (you can simulate this or use prompt in browser)
        // Validate that input is a number
        // Provide hints: "too high" or "too low"
        // Count attempts
        // Handle invalid input gracefully
    }
    
    console.log(`Congratulations! You guessed ${secretNumber} in ${attempts} attempts!`);
}

// Email validator:
function validateEmail(email) {
    // Simple email validation - contains @ and a dot after @
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function getValidEmail() {
    // Your implementation here
    // Keep asking for email input until valid
    // Use validateEmail function above
    // Provide specific error messages
    // Return the valid email when found
}

// Age validator:
function getValidAge() {
    // Your implementation here
    // Keep asking for age until valid (0-150)
    // Handle non-numeric input
    // Handle negative numbers
    // Handle unrealistic ages
    // Provide helpful error messages for each case
}

// Menu system:
function menuSystem() {
    let choice;
    
    while (choice !== 'quit') {
        console.log("\n=== MAIN MENU ===");
        console.log("1. Option 1");
        console.log("2. Option 2");
        console.log("3. Option 3");
        console.log("Type 'quit' to exit");
        
        // Your implementation here
        // Get user choice
        // Handle each menu option
        // Handle invalid choices
        // Keep showing menu until user quits
    }
    
    console.log("Goodbye!");
}

// Advanced password validator:
function getValidPassword() {
    let password;
    let isValid = false;
    
    console.log("Password requirements:");
    console.log("- At least 8 characters long");
    console.log("- Contains uppercase letter");
    console.log("- Contains lowercase letter");
    console.log("- Contains at least one number");
    console.log("- Contains at least one special character (!@#$%^&*)");
    
    while (!isValid) {
        // Your implementation here
        // Get password input
        // Check each requirement individually
        // Provide specific feedback about what's missing
        // Only exit loop when all requirements are met
    }
    
    return password;
}

// Input sanitizer:
function sanitizeInput(input, type) {
    // Your implementation here
    // Clean up user input based on type
    // Remove extra whitespace
    // Convert to appropriate type (number, string, etc.)
    // Handle edge cases
}

// Retry mechanism:
function withRetry(validationFunction, maxAttempts = 3) {
    // Your implementation here
    // Generic retry mechanism for any validation function
    // Allow up to maxAttempts tries
    // Return result if successful, or throw error if all attempts fail
}
```

**Helpful Links**:
- [Input Validation Best Practices](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Email Validation Patterns](https://emailregex.com/)
- [User Interface Design Patterns](https://ui-patterns.com/patterns/InputPrompt)
- [Error Handling in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

---
**Challenge 4.8**: Mathematical sequences
**Instructions**:
- Generate the Fibonacci sequence up to n terms using a while loop
- Calculate the first 20 prime numbers using a while loop
- Create a function that generates the sequence: 1, 1, 2, 3, 5, 8, 13... (Fibonacci)
- Build a prime number checker that uses a while loop for testing divisibility
- Create a function that finds the nth term of any arithmetic sequence
- Verify your Fibonacci sequence: the 10th term should be 55

**Example Structure**:
```javascript
// Fibonacci sequence using while loop:
function fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [1];
    
    let sequence = [1, 1];
    let count = 2;
    
    while (count < n) {
        // Your implementation here
        // Calculate next Fibonacci number
        // Add it to the sequence
        // Increment count
    }
    
    return sequence;
}

// Test your Fibonacci:
console.log(fibonacciSequence(10)); // Should be [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log("10th Fibonacci number:", fibonacciSequence(10)[9]); // Should be 55

// Prime number checker:
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    let divisor = 3;
    while (divisor * divisor <= num) {
        // Your implementation here
        // Check if num is divisible by divisor
        // If yes, it's not prime
        // Increment divisor by 2 (only check odd numbers)
    }
    
    return true;
}

// Test your prime checker:
console.log(isPrime(17)); // Should be true
console.log(isPrime(18)); // Should be false

// Generate first n prime numbers:
function generatePrimes(n) {
    // Your implementation here
    // Use while loop to find first n prime numbers
    // Use isPrime function above
    // Start checking from 2 and increment
    // Stop when you have n primes
}

// Test your prime generator:
console.log(generatePrimes(10)); // Should be [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// Arithmetic sequence generator:
function arithmeticSequence(firstTerm, commonDifference, n) {
    // Your implementation here
    // Generate n terms of arithmetic sequence
    // Formula: a_n = a_1 + (n-1) * d
    // Use while loop to generate terms
}

// Test arithmetic sequence:
console.log(arithmeticSequence(2, 3, 5)); // Should be [2, 5, 8, 11, 14]

// Geometric sequence generator:
function geometricSequence(firstTerm, commonRatio, n) {
    // Your implementation here
    // Generate n terms of geometric sequence
    // Formula: a_n = a_1 * r^(n-1)
    // Use while loop to generate terms
}

// Test geometric sequence:
console.log(geometricSequence(2, 3, 5)); // Should be [2, 6, 18, 54, 162]

// Advanced: Perfect numbers
function isPerfectNumber(num) {
    // Your implementation here
    // A perfect number equals the sum of its proper divisors
    // Example: 6 = 1 + 2 + 3 (proper divisors of 6)
    // Use while loop to find all divisors
}

// Test perfect numbers:
console.log(isPerfectNumber(6));   // Should be true
console.log(isPerfectNumber(28));  // Should be true
console.log(isPerfectNumber(12));  // Should be false

// Advanced: Triangular numbers
function generateTriangularNumbers(n) {
    // Your implementation here
    // Triangular numbers: 1, 3, 6, 10, 15, 21, ...
    // Formula: T_n = n(n+1)/2
    // Generate first n triangular numbers using while loop
}
```

**Helpful Links**:
- [Fibonacci Sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html)
- [Prime Numbers Algorithm](https://www.geeksforgeeks.org/sieve-of-eratosthenes/)
- [Arithmetic Sequences](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences/x2f8bb11595b61c86:arithmetic-sequences/a/arithmetic-sequences-review)
- [Perfect Numbers](https://en.wikipedia.org/wiki/Perfect_number)

---

### Do-While Loop Applications

**Challenge 4.10**: Menu-driven programs
**Instructions**:
- Create a calculator that runs until the user chooses to exit
- Build an interactive menu system with multiple options
- Create a simple banking system with deposit/withdraw/check balance options
- Build a to-do list manager with add/remove/view options
- Create a simple inventory management system
- Make sure your menus handle invalid input gracefully and keep running until the user explicitly exits

**Example Structure**:
```javascript
// Simple calculator with do-while:
function calculator() {
    let continueCalculating;
    
    do {
        console.log("\n=== CALCULATOR ===");
        console.log("Enter two numbers and an operation:");
        
        // Your implementation here
        // Get first number, operator, second number
        // Perform calculation
        // Display result
        // Ask if user wants to continue
        
        continueCalculating = confirm("Do another calculation?"); // In browser
        // For Node.js, you might simulate this differently
        
    } while (continueCalculating);
    
    console.log("Calculator closed. Goodbye!");
}

// Interactive menu system:
function interactiveMenu() {
    let choice;
    
    do {
        console.log("\n=== MAIN MENU ===");
        console.log("1. View Profile");
        console.log("2. Edit Settings");
        console.log("3. View Reports");
        console.log("4. Help");
        console.log("0. Exit");
        console.log("Enter your choice:");
        
        // Your implementation here
        // Get user choice
        // Use switch statement to handle each option
        // Implement each menu function
        // Handle invalid choices
        
    } while (choice !== '0');
    
    console.log("Goodbye!");
}

// Banking system:
function bankingSystem() {
    let balance = 1000; // Starting balance
    let choice;
    
    do {
        console.log("\n=== BANKING SYSTEM ===");
        console.log(`Current Balance: $${balance.toFixed(2)}`);
        console.log("1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Check Balance");
        console.log("4. Transaction History");
        console.log("0. Exit");
        
        // Your implementation here
        // Handle each banking operation
        // Validate amounts (positive numbers, sufficient funds for withdrawal)
        // Keep transaction history
        // Update balance appropriately
        
    } while (choice !== '0');
}

// To-do list manager:
function todoManager() {
    let todos = [];
    let choice;
    
    do {
        console.log("\n=== TO-DO LIST MANAGER ===");
        console.log(`You have ${todos.length} tasks`);
        console.log("1. Add Task");
        console.log("2. View Tasks");
        console.log("3. Mark Task Complete");
        console.log("4. Remove Task");
        console.log("5. Clear All Tasks");
        console.log("0. Exit");
        
        // Your implementation here
        // Implement each todo operation
        // Handle task IDs for marking complete/removing
        // Display tasks with numbers/status
        // Validate user input
        
    } while (choice !== '0');
}

// Inventory management system:
function inventoryManager() {
    let inventory = [
        { id: 1, name: "Widget A", quantity: 50, price: 9.99 },
        { id: 2, name: "Widget B", quantity: 30, price: 14.99 },
        { id: 3, name: "Widget C", quantity: 20, price: 19.99 }
    ];
    
    let choice;
    
    do {
        console.log("\n=== INVENTORY MANAGER ===");
        console.log("1. View Inventory");
        console.log("2. Add Item");
        console.log("3. Update Quantity");
        console.log("4. Remove Item");
        console.log("5. Search Items");
        console.log("6. Low Stock Report");
        console.log("0. Exit");
        
        // Your implementation here
        // Implement each inventory operation
        // Handle item IDs and validation
        // Calculate total inventory value
        // Generate reports
        
    } while (choice !== '0');
}

// Game menu system:
function gameMenu() {
    let playerStats = {
        name: "Player",
        level: 1,
        health: 100,
        experience: 0
    };
    
    let choice;
    
    do {
        console.log("\n=== GAME MENU ===");
        console.log(`${playerStats.name} - Level ${playerStats.level}`);
        console.log(`Health: ${playerStats.health}/100 | XP: ${playerStats.experience}`);
        console.log("1. Go on Adventure");
        console.log("2. Visit Shop");
        console.log("3. View Stats");
        console.log("4. Save Game");
        console.log("5. Load Game");
        console.log("0. Quit Game");
        
        // Your implementation here
        // Implement each game feature
        // Handle player progression
        // Save/load functionality (simulate with objects)
        
    } while (choice !== '0');
}
```

**Helpful Links**:
- [MDN do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [Menu-Driven Programming](https://www.geeksforgeeks.org/menu-driven-program-using-switch-case-in-c/)
- [User Interface Design](https://www.interaction-design.org/literature/topics/user-interface-design)
- [Input Validation Techniques](https://blog.logrocket.com/javascript-input-validation/)

---

### Advanced Loop Techniques

**Challenge 4.12**: Break and continue statements
**Instructions**:
- Find first prime number after 100 (use break)
- Skip multiples of 3 when counting (use continue)
- Create a search function that stops at first match (break)
- Build a data processor that skips invalid entries (continue)
- Implement early exit conditions in nested loops
- Practice loop control for optimization

**Example Structure**:
```javascript
// Find first prime after 100:
function firstPrimeAfter100() {
    for (let num = 101; ; num++) { // Infinite loop with break
        let isPrime = true;
        
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break; // Exit inner loop early
            }
        }
        
        if (isPrime) {
            console.log(`First prime after 100: ${num}`);
            break; // Exit outer loop
        }
    }
}

// Test your function:
firstPrimeAfter100(); // Should find 101

// Skip multiples of 3:
function countSkippingMultiplesOf3(start, end) {
    console.log(`Numbers from ${start} to ${end}, skipping multiples of 3:`);
    
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            continue; // Skip this iteration
        }
        console.log(i);
    }
}

// Test your function:
countSkippingMultiplesOf3(1, 20);

// Search with early exit:
function findInArray(array, target) {
    // Your implementation here
    // Search through array for target value
    // Return index when found (use break)
    // Return -1 if not found after checking all elements
}

// Test your search:
const numbers = [5, 2, 8, 1, 9, 3];
console.log(findInArray(numbers, 8)); // Should return 2
console.log(findInArray(numbers, 7)); // Should return -1

// Data processor with continue:
function processValidNumbers(data) {
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < data.length; i++) {
        // Your implementation here
        // Skip non-numeric values (use continue)
        // Skip negative numbers (use continue)
        // Skip numbers greater than 1000 (use continue)
        // Process valid numbers (add to sum, increment count)
    }
    
    return count > 0 ? sum / count : 0; // Return average
}

// Test your processor:
const testData = [10, "invalid", -5, 25, 1500, 30, null, 15];
console.log(processValidNumbers(testData)); // Should average valid numbers only

// Nested loop with labeled break:
function findPairSum(matrix, target) {
    outerLoop: for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            for (let k = j + 1; k < matrix[i].length; k++) {
                if (matrix[i][j] + matrix[i][k] === target) {
                    console.log(`Found pair: ${matrix[i][j]} + ${matrix[i][k]} = ${target}`);
                    break outerLoop; // Break out of all loops
                }
            }
        }
    }
}

// Test nested loop break:
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
findPairSum(matrix, 13);

// Performance optimization with break:
function optimizedSearch(sortedArray, target) {
    // Your implementation here
    // Since array is sorted, you can break early
    // If current element > target, no need to continue
    // Use break for optimization
}

// Advanced: Pattern matching with continue:
function extractPattern(text, pattern) {
    // Your implementation here
    // Extract all occurrences of pattern from text
    // Skip characters that don't match pattern start
    // Use continue to skip non-matching positions
    // Use break when pattern is found
}
```

**Helpful Links**:
- [MDN break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [MDN continue Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [Labeled Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
- [Loop Optimization Techniques](https://blog.logrocket.com/javascript-loops-performance-comparison/)

---

### Pattern Generation Challenges

**Challenge 4.15**: Star pattern pyramids
**Instructions**:
- Create right triangle, isosceles triangle patterns
- Generate diamond and hollow patterns
- Build a function that creates patterns of any size
- Create patterns with numbers instead of stars
- Generate inverted patterns
- Make patterns with different characters

**Example Structure**:
```javascript
// Right triangle pattern:
function rightTriangle(height) {
    console.log(`Right Triangle (height: ${height}):`);
    
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}

// Test your right triangle:
rightTriangle(5);
// Should output:
// *
// **
// ***
// ****
// *****

// Isosceles triangle (pyramid):
function isoscelesTriangle(height) {
    // Your implementation here
    // Create a centered triangle
    // Use spaces for alignment
    // Example for height 5:
    //     *
    //    ***
    //   *****
    //  *******
    // *********
}

// Test your isosceles triangle:
isoscelesTriangle(5);

// Diamond pattern:
function diamond(size) {
    // Your implementation here
    // Create upper half (increasing)
    // Create lower half (decreasing)
    // Size determines the width of the middle row
    // Example for size 5:
    //   *
    //  ***
    // *****
    //  ***
    //   *
}

// Test your diamond:
diamond(5);

// Hollow rectangle:
function hollowRectangle(width, height) {
    // Your implementation here
    // First and last rows: all stars
    // Middle rows: stars only at edges
    // Example 5x3:
    // *****
    // *   *
    // *****
}

// Test your hollow rectangle:
hollowRectangle(5, 3);

// Number triangle:
function numberTriangle(height) {
    // Your implementation here
    // Use numbers instead of stars
    // Example for height 4:
    // 1
    // 12
    // 123
    // 1234
}

// Test your number triangle:
numberTriangle(4);

// Inverted triangle:
function invertedTriangle(height) {
    // Your implementation here
    // Start with full width, decrease each row
    // Example for height 5:
    // *****
    // ****
    // ***
    // **
    // *
}

// Test your inverted triangle:
invertedTriangle(5);

// Pascal's triangle:
function pascalsTriangle(rows) {
    // Your implementation here
    // Each number is sum of two numbers above it
    // Start with 1 at top
    // Example for 5 rows:
    //     1
    //    1 1
    //   1 2 1
    //  1 3 3 1
    // 1 4 6 4 1
}

// Test Pascal's triangle:
pascalsTriangle(5);

// Custom pattern generator:
function customPattern(height, character, patternType) {
    // Your implementation here
    // Allow different characters and pattern types
    // patternType: 'right', 'isosceles', 'diamond', 'hollow'
    // Use switch statement to handle different types
}

// Test custom patterns:
customPattern(4, '#', 'right');
customPattern(3, '@', 'diamond');

// Advanced: Spiral pattern
function spiralPattern(size) {
    // Your implementation here
    // Create a spiral of numbers in a square grid
    // Start from outside and spiral inward
    // Example 4x4:
    //  1  2  3  4
    // 12 13 14  5
    // 11 16 15  6
    // 10  9  8  7
}
```

**Helpful Links**:
- [Pattern Programming Guide](https://www.programiz.com/javascript/examples/pyramid-pattern)
- [ASCII Art Patterns](https://www.asciiart.eu/)
- [Pascal's Triangle Algorithm](https://www.mathsisfun.com/pascals-triangle.html)
- [Spiral Matrix Algorithm](https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/)

---

### Real-World Loop Applications

**Challenge 4.21**: Data processing simulations
**Instructions**:
- Process sales data to find trends
- Calculate running averages
- Find maximum and minimum values in datasets
- Group data by categories
- Generate summary statistics
- Handle missing or invalid data points

**Example Structure**:
```javascript
// Sales data processing:
const salesData = [
    { month: 'Jan', sales: 15000, region: 'North' },
    { month: 'Feb', sales: 18000, region: 'North' },
    { month: 'Mar', sales: 22000, region: 'North' },
    { month: 'Jan', sales: 12000, region: 'South' },
    { month: 'Feb', sales: 14000, region: 'South' },
    { month: 'Mar', sales: 16000, region: 'South' }
];

function processSalesData(data) {
    // Your implementation here
    // Calculate total sales
    // Find best and worst performing months
    // Calculate average sales by region
    // Identify growth trends
}

// Test your sales processor:
const salesSummary = processSalesData(salesData);
console.log(salesSummary);

// Running average calculator:
function calculateRunningAverage(numbers) {
    // Your implementation here
    // Calculate running average at each point
    // Return array of running averages
    // Example: [10, 20, 30] → [10, 15, 20]
}

// Test running average:
const numbers = [10, 20, 30, 40, 50];
console.log(calculateRunningAverage(numbers)); // [10, 15, 20, 25, 30]

// Data trend analyzer:
function analyzeTrends(data) {
    // Your implementation here
    // Identify increasing/decreasing trends
    // Find peaks and valleys
    // Calculate rate of change
    // Return trend analysis object
}

// Temperature data processor:
const temperatureData = [
    { day: 1, temp: 72, humidity: 45 },
    { day: 2, temp: 75, temp: null }, // Missing humidity
    { day: 3, temp: 78, humidity: 52 },
    { day: 4, temp: null, humidity: 48 }, // Missing temperature
    { day: 5, temp: 73, humidity: 41 }
];

function processWeatherData(data) {
    // Your implementation here
    // Handle missing data gracefully
    // Calculate averages (excluding null values)
    // Find temperature ranges
    // Identify patterns
}

// Advanced: Time series analysis
function timeSeriesAnalysis(data, windowSize) {
    // Your implementation here
    // Calculate moving averages with given window size
    // Detect seasonal patterns
    // Smooth out noise in data
    // Return analyzed data with trends
}

// Stock price simulator:
function simulateStockPrices(days, startPrice, volatility) {
    // Your implementation here
    // Generate realistic stock price movements
    // Use random walk with volatility
    // Track daily changes and cumulative returns
    // Return array of price data
}
```

**Helpful Links**:
- [Data Processing in JavaScript](https://www.freecodecamp.org/news/how-to-process-data-in-javascript/)
- [Statistical Calculations](https://www.mathjs.org/docs/datatypes/statistics.html)
- [Time Series Analysis](https://en.wikipedia.org/wiki/Time_series)
- [Moving Averages](https://www.investopedia.com/terms/m/movingaverage.asp)

---

## 🎯 Practice Platforms & Next Steps

### 🏆 Coding Challenge Websites for Loops
**Beginner Level (Perfect for Loop Practice!):**
- **[Codewars Loop Katas](https://www.codewars.com/kata/search/javascript?q=loop&beta=false)** - Search for "loop" challenges
- **[HackerRank Loops](https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=implementation)** - Implementation challenges
- **[LeetCode Easy Array Problems](https://leetcode.com/tag/array/)** - Many require loops
- **[Exercism JavaScript Loops](https://exercism.org/tracks/javascript/concepts/loops)** - Guided practice

**Specific Loop Practice Sites:**
- **[Loop Practice Problems](https://www.w3resource.com/javascript-exercises/javascript-loops-exercises.php)** - Dedicated loop exercises
- **[Programming Exercises](https://www.programmr.com/javascript-challenges)** - Interactive challenges
- **[Code Golf](https://code.golf/)** - Write shortest loop solutions
- **[Rosetta Code](https://rosettacode.org/wiki/Category:JavaScript)** - Algorithm implementations

### 📚 Loop-Specific Learning Resources

**Interactive Tutorials:**
- **[JavaScript.info Loops Chapter](https://javascript.info/while-for)** - Comprehensive loop guide
- **[MDN Loop Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)** - Official reference
- **[FreeCodeCamp Loop Challenges](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)** - Hands-on practice
- **[Codecademy Loops Course](https://www.codecademy.com/learn/introduction-to-javascript)** - Structured learning

**Video Resources:**
- **[JavaScript Loops Explained](https://www.youtube.com/results?search_query=javascript+loops+tutorial)** - YouTube tutorials
- **[Loop Patterns and Algorithms](https://www.youtube.com/results?search_query=javascript+loop+patterns)** - Advanced techniques
- **[Nested Loops Visualization](https://pythontutor.com/javascript.html)** - Step-through debugger

### 🛠️ Tools for Loop Practice

**Online Editors with Loop Support:**
- **[CodePen](https://codepen.io/)** - Great for visual loop patterns
- **[JSFiddle](https://jsfiddle.net/)** - Quick loop testing
- **[Repl.it](https://replit.com/)** - Full JavaScript environment
- **[Python Tutor for JavaScript](https://pythontutor.com/javascript.html)** - Visualize loop execution

**Debugging Tools:**
- **Browser DevTools** - Step through loops with debugger
- **Console.log Strategies** - Track loop variables
- **Performance Profiling** - Measure loop efficiency
- **Visualization Tools** - See loop patterns graphically

### 🎯 Your Loop Learning Path (Next 2 Weeks)

**Week 1: Master the Basics**
- **Days 1-2**: Complete Challenges 4.1-4.5 (For loop fundamentals)
- **Days 3-4**: Complete Challenges 4.6-4.9 (While loop mastery)
- **Days 5-7**: Complete Challenges 4.10-4.12 (Do-while and advanced techniques)
- **Daily Practice**: 2-3 Codewars loop problems (8kyu level)

**Week 2: Advanced Applications**
- **Days 8-10**: Complete Challenges 4.13-4.17 (Pattern generation and optimization)
- **Days 11-12**: Complete Challenges 4.18-4.22 (Array processing and algorithms)
- **Days 13-14**: Complete Challenges 4.23-4.25 (Real-world applications)
- **Daily Practice**: 1-2 HackerRank loop problems

**Daily Loop Practice Routine:**
1. **Morning (15 mins)**: Review one loop concept from the guide
2. **Afternoon (30 mins)**: Complete 1-2 challenges from current section
3. **Evening (15 mins)**: Solve one Codewars problem using loops

**Weekly Goals:**
- **Week 1**: Master for, while, and do-while loop syntax
- **Week 2**: Apply loops to solve real programming problems
- **Both Weeks**: Build 2-3 small projects that heavily use loops

### 🏅 Loop Mastery Projects

**Beginner Projects (Week 1):**
1. **Multiplication Table Generator** - Practice nested loops
2. **Number Pattern Creator** - Visual loop applications
3. **Simple Calculator** - Menu-driven programming with loops
4. **Guessing Game** - User input validation loops

**Intermediate Projects (Week 2):**
1. **Text-Based Adventure Game** - Complex loop logic
2. **Data Analysis Tool** - Process arrays with loops
3. **ASCII Art Generator** - Pattern generation algorithms
4. **Simple Sorting Visualizer** - Algorithm implementation

### 📈 Progress Tracking for Loops

**Daily Checklist:**
- [ ] Completed assigned challenges for the day
- [ ] Solved at least 1 external loop problem
- [ ] Reviewed and understood all code written
- [ ] Tested edge cases and error conditions

**Weekly Review Questions:**
- Can I write for, while, and do-while loops from memory?
- Do I understand when to use each type of loop?
- Can I create nested loops for 2D problems?
- Am I comfortable with break and continue statements?
- Can I optimize loops for better performance?

**Mastery Indicators:**
- ✅ Write any loop type without looking up syntax
- ✅ Choose the most appropriate loop for each problem
- ✅ Debug loop issues quickly and effectively
- ✅ Create complex nested loop patterns
- ✅ Optimize loops for performance when needed

---

**Remember**: Loops are fundamental to programming! Master them now and you'll have a solid foundation for everything that comes next. Focus on understanding the logic, not just memorizing syntax. Practice daily, even if just for 15 minutes.

**Your Loop Journey Starts Now! 🚀**

*Keep this guide handy and check off challenges as you complete them. You've got this!*

---
