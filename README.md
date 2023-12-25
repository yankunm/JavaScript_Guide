# Yankun's Javascript Guide

Javascript is the **action** of a webpage. In this guide, we will:

1. Learn JavaScript on its own
2. Use JavaScript to manipulate HTML/CSS

## Connecting Javascript with HTML

In order to run a javascript script, you have to attach it to an html file:

* `<script src="">` - tag that contains a path to javascript script and should be put at the end of `<body>` and inside it

## Javascript Basics

The 7 primitive types in JavaScript, with the first 5 being the most common:
1. `number` (the binary operators are +, -, *, /, %, **; `NaN`="not a number is also a `number`")
2. `string` (Could use `''` or `""` or back-ticks `` `${}` `` for template literals - embed expressions inside strings)
3. Boolean (`true` or `false`)
4. Null (Intentionally empty and programmer assigned)
5. Undefined (same as "don't know", lack of value, not assigned)
6. Symbol
7. BigInt

You can use "typeof" to see the type of a variable. You can use `let` to declare a variable. (e.g. `let x = 5;`)

### The Math Object

You can also use the `Math` object for math methods, such as `Math.floor()` or `Math.ceil()`, or constants like `Math.PI`. A useful combination to get a range of numbers from start to end is `Math.floor(Math.random() * num_options) + start`, where start is the number you start at and num_options is how many numbers there are, `Math.random()` return a number between 0 to 1.

Note: to check if a number is a number you can use `!Number.isNaN(x)`.

### String Manipulation 

Some common properties and methods for string manipulation are:

* `str.length` - length field of a string
* `toUpperCase()` or `toLowerCase()`
* `trim()` - remove extra space at beginning/end
* `repeat(num)` - repeat number of times
* `indexOf(str)` - index of a string (-1 if d.n.e.)
* `replace(x, y)` - replace first instance of x 
with y
* `parseInt(str)` - to convert a string number to an integer

### Equality Operators

* `==` - equality ignoring type (automatic type coercion) (Inequality is `!=`)
* `===` - equality in both value and type (Inequality is `!==`)

### let, const, var

Always use `let` and `const` just because it's more specific.

* `let x = 5` - define a variable
* `const x = 5` - define a constant that cannot change value 

### Console, alert, prompt

* `console.log(str1[, str2, ...])` - used to log a message (or space separated messages) to the  console
* `alert("message")` - a pop-up
* `let userInput = prompt("prompt")` - take user input in browser 

### Logcal Operators and Conditional logic

The three logical operators are:

* `&&` - Logical AND
* `||` - Logical OR
* `!` - Logical NOT

The Syntax for if-statements is:
```
if(1 + 1 === 2){
    // do some stuff
} else if(1 + 2 === 3){
    // do some other stuff
} else {
    // do some other stuff
}
```

The Syntax for switch-case statement is:

```
switch(variable) {
    case val1:
        // do something
        break;
    case val2:
        // do some other things
        break;
    case val3:
    case val4:
        // do things when val3 or val4
        break;
    default:
        // do some other things
}
```

### Truthy and Falsy Values

All JS values have inherent truthyness or falsyness. Every value are `true` except these six values:

* `false` - boolean false
* `0` - the number 0
* `""` - empty string
* `null` - intentionally empty
* `undefined` - lack of value
* `NaN` - not a number (number is undefined)

### Javascript Arrays


### Loops

When you don't need the **index**, you can use the For...Of Loop:

```
for (let element of iterable){
    // do something to each element
}
```

Note: *iterables* in JS are like arrays and strings, NOT object literal objects

For object literals, you can use the For...In loop:

```
for(let key in object){
    // do something with that key-value property
}
```
Note: *Object.keys(obj)* or *Object.values(obj)* or *Object.entries(obj)* will give you everything you want in an object. Objects work like maps in other languages.

### Scope

* **Block Scope** is for variables declared inside some {} (e.g. functions, for-loops, if-statements, etc.) that only exist within those brackets
* **Lexical Scope** is that nested inner functions have access to variables declared in parent functions but not child functions

### Try/Catch

You can use a try/catch statement to wrap around code blocks that you might anticipate resulting in error. This allows you to **handle error**, or just make sure the code continues to run.

```
try{
    // try something dangerous
} catch (e){
    // do something when error
    // e is optional, it is the error you caught
}
```

### Functions

Function Definition:
```
function funcName(x, y){
    // do something
}
```

#### Methods

Every method is a function, but not all functions are methods. **Methods** are functions as **property values of objects**. Every function that can be called with the *dot syntax* (e.g. `str.toUpperCase()`) is a method.


An example of defining methods :
```
const math = {
    multiply : function(x, y){
        return x * y;
    },
    divide : function(x, y){
        return x / y;
    },
    square : function(x){
        return x * x;
    }
};
```

The short-hand for this is:

```
const math = {
    multiply(x, y){
        return x * y;
    },
    divide(x, y){
        return x / y;
    },
    square(x){
        return x * x;
    }
};
```

Note: The keyword `this` can be used in a method to refer to properties of the same object. If you type `this` in the console you will get the `Window` object, the object that all objects live under.

#### Functions Expressions

**Function Expressions** can be used to store functions inside variables:
```
const add = function (x, y){
    return x + y;
}
add(x, y);
```
Note: Functions are *values* in JS, where you can store them, pass them around, or return them like a number or an array.

#### Higher Order Functions

**Higher order functions** are functions that takes in or returns functions. They operate on/with other functions.

Functions that takes in other functions as arguments:
```
// rolls the die twice
function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie); // Only pass the name (value) of the function
```

Functions that returns other functions:
```
// A factory function
function makeBetweenFunc(min, max) {
    // the returned function
    return function (num) {
        return num >= min && num <= max;
    }
}
```

#### Arrow Functions

Arrow functions are just *syntactic sugars* for defining functions:

```
// regular function definition
function isEven(x){
    return x % 2 === 0;
}

// function expression assigned to a variable
const isEven = function(x){
    return x % 2 === 0;
}

// arrow function (replace 'function' with '=>')
const isEven = (x) => {
    return x % 2 === 0;
}

```

If and only if it's just one argument, we can remove the parenthesis around the argument:

```
// iff one variable, we can remove parenthesis
const isEven = x => {
    return x % 2 === 0;
}
```

We can also remove the "return" keyword using **implicit returns** by replacing the `{}` with `()` (this only works with one-liner functions):

```
const isEven = (x) => (
    x % 2 === 0;
)
```

If the function is one line, and is short enough to be put on one line, we can use implicit return to write it like this:

```
const isEven = x => x % 2 === 0;
```

#### Callbacks & Array Methods

Functions can be passed as values to other functions, these functions are often called **callbacks**, because you don't call these functions right away but go back and call them at a later time.

Some common **array methods** often take callbacks:

* **forEach** - run a function on every element in the array

e.g. print each element
```
const arr = [1, 2, 3, 4, 5]
arr.forEach(x => console.log(x));
```

Note that:
```
x => console.log(x);
// this is syntactic sugar for:

(x) => {
    console.log(x);
}

function print(x){
    console.log(x);
}
```

* **map** - run a function on every element in the array to make a new array 

e.g. get all titles of an array of movie objects
```
const movies = [
    {
        title: "Titanic",
        score: 97
    },
    {
        title: "Transformers",
        score: 95
    },
    {
        title: "Aladdin",
        score: 93
    }
]

const movieTitles = movies.map(movie => movie.title); // this uses implict return
```

* **filter** - takes in a boolean callback and make a new subset of array that passes the test 

e.g. get all even numbers in an array
```
const arr = [1, 2, 3, 4, 5]

const evens = arr.filter(x => x % 2 === 0);
```

* **reduce** - takes in a function with two arguments to get a single value out of the array 

e.g. sum, max, min

```
const arr = [1, 2, 3, 4, 5];

// total is the prefix sum at each iteration
const sum = arr.reduce((total, curr) => total + curr); // 15

// return maximum at each iteration
const max = arr.reduce((max, curr) => {
    if(curr > max){
        return curr;
    }
    return max;
}); 5

// return minimum at each iteration
const min = arr.reduce((min, curr) => {
    if(curr < min){
        return curr;
    }
    return min;
}); 1
```

For reduce, you can also pass in an initial value for your *accumulator*, it doesn't have to start empty.
```
const arr = [1, 2, 3, 4, 5];

// total initalized at 10 not 0
const sumPlusTen = arr.reduce((total, curr) => total + curr, 10); // 25
```

* **some** - takes in one boolean test callback and return true if *at least one element* returns true

e.g. does 3 exist in an array?
```
const arr = [1, 2, 3, 4, 5];

const doesThreeExist = arr.some(x => x === 3);
```

* **every** - takes in one boolean test callback and return true iff *every element* returns true

e.g. are all elements greater than zero?
```
const arr = [1, 2, 3, 4, 5];

const positive = arr.every(x => x > 0);
```

#### setTimeout and setInterval

Some common functions that takes callbacks and are not array methods are:
```
// calls callback after some number of ms
setTimeout(callback, ms);

// calls call back every ms
setInterval(callback, ms);
```
To stop interval from executing, you can use:
```
clearInterval();
```

#### Behavior of 'this' in arrow functions is different

Consider this object:
```
const person = {
    firstName: "Alex",
    lastName: "Meng",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
// "Alex Meng"
```

The keyword this refers to the person object. It is said to "bind to the person object". However, in an arrow function, the keyword 'this' does not bind by design.

```
const person = {
    firstName: "Alex",
    lastName: "Meng",
    fullName: () => {
        return this.firstName + " " + this.lastName;
    }
}
// "undefined undefined"
```
The keyword 'this' here refers to the `Window` object. This could be very useful in functions like `setTimeout`, where you want to refer to the `Window` object.






