# Yankun's Javascript Guide

Javascript is the **action** of a webpage. In this guide, we will:

1. Learn JavaScript on its own
2. Use JavaScript to manipulate HTML/CSS

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

## Connecting Javascript with HTML

In order to run a javascript script, you have to attach it to an html file:

* `<script src="">` - tag that contains a path to javascript script and should be put at the end of `<body>` and inside it






