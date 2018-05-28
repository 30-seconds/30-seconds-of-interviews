<a href="https://30secondsofinterviews.org"><img src="logo.jpg" alt="30 Seconds of Interviews logo"></a>

<h1 align="center">
  30 Seconds of Interviews
</h1>

<h4 align="center">A curated collection of common interview questions to help you prepare for your next interview.</h4>

<br>

<p align="center">
  <a href="https://gitter.im/30-seconds-of-interviews/Lobby"><img src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg" alt="gitter"></a>
    <a href="https://github.com/fejes713/30-seconds-of-interviews/blob/master/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome"></a>
  <a href="https://travis-ci.com/fejes713/30-seconds-of-interviews"><img src="https://travis-ci.com/fejes713/30-seconds-of-interviews.svg?token=uZrzJhwCxqfwx7TdXzc4&branch=master" alt="travis"></a>
  <a href=""><img src="https://img.shields.io/badge/producthunt-vote-orange.svg" alt="producthunt"></a>
  <a href="https://github.com/fejes713/30-seconds-of-interviews/blob/master/LICENSE"><img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="licence"></a>
</p>

<br>

## Foreword

Interviews are daunting and can make even the most seasoned expert forget things under pressure. Review and learn what questions are commonly encountered in interviews curated by the community that's answered them and go prepared for anything they'll ask. By bringing together experience and real-world examples, you can go from being nervous to being prepared for that next big opportunity.

## View online

<a href="https://30secondsofinterviews.org"><img src="promo.jpg" alt="30 Seconds of Interviews promo"></a>

## Contributing

> 30 seconds of interviews is a community effort, so feel free to contribute in any way you can. Every contribution helps!

Do you have an excellent idea or know some cool questions that aren't on the list? Read the [contribution guidelines](https://github.com/fejes713/30-seconds-of-interviews/blob/master/CONTRIBUTING.md) and submit a pull request.

Join our [Gitter channel](https://gitter.im/30-seconds-of-interviews/Lobby) to help with the development of the project.

## Table of Contents


### JavaScript

<details>
<summary>View contents</summary>

* [How can you avoid callback hells?](#how-can-you-avoid-callback-hells-js-get-data-function-a-get-more-data-a-function-b-get-more-data-b-function-c-get-more-data-c-function-d-get-more-data-d-function-e)
* [What is a callback?](#what-is-a-callback)
* [How do you clone an object in JavaScript?](#how-do-you-clone-an-object-in-java-script)
* [What is a closure?](#what-is-a-closure)
* [How do you compare two objects in JavaScript?](#how-do-you-compare-two-objects-in-java-script)
* [What is the DOM?](#what-is-the-dom)
* [What is the difference between the equality operators `==` and `===`?](#what-is-the-difference-between-the-equality-operators-and)
* [What is event-driven programming?](#what-is-event-driven-programming)
* [Generate an array, containing the Fibonacci sequence, up until the nth term.](#generate-an-array-containing-the-fibonacci-sequence-up-until-the-nth-term)
* [What does `0.1 + 0.2 === 0.3` evaluate to?](#what-does-0-1-0-2-0-3-evaluate-to)
* [What is the difference between the array methods `map()` and `forEach()`?](#what-is-the-difference-between-the-array-methods-map-and-for-each)
* [What is functional programming?](#what-is-functional-programming)
* [What will the console log in this example?](#what-will-the-console-log-in-this-example-js-var-foo-1-var-foobar-function-console-log-foo-var-foo-2-foobar)
* [How does hoisting work in JavaScript?](#how-does-hoisting-work-in-java-script)
* [Create a function that masks a string of characters with `#` except for the last four (4) characters.](#create-a-function-that-masks-a-string-of-characters-with-except-for-the-last-four-4-characters-js-mask-123456789-6789)
* [Explain the difference between mutability and immutability, and mutating vs non-mutating methods.](#explain-the-difference-between-mutability-and-immutability-and-mutating-vs-non-mutating-methods)
* [What is the only value not equal to itself in JavaScript?](#what-is-the-only-value-not-equal-to-itself-in-java-script)
* [NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?](#node-js-uses-a-callback-pattern-in-many-instances-where-if-an-error-were-returned-it-will-pass-it-as-the-first-argument-to-the-callback-what-are-the-advantages-of-this-pattern-js-fs-read-file-file-path-function-err-data-if-err-handle-the-error-the-return-is-important-here-so-execution-stops-here-return-console-log-err-use-the-data-object-console-log-data)
* [What is the event loop in Node.js?](#what-is-the-event-loop-in-node-js)
* [What are the differences between `null` and `undefined`?](#what-are-the-differences-between-null-and-undefined)
* [Describe the different ways to create an object. When should certain ways be preferred over others?](#describe-the-different-ways-to-create-an-object-when-should-certain-ways-be-preferred-over-others)
* [What is the difference between a parameter and an argument?](#what-is-the-difference-between-a-parameter-and-an-argument)
* [Does JavaScript pass by value or by reference?](#does-java-script-pass-by-value-or-by-reference)
* [Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.](#create-a-function-pipe-that-performs-left-to-right-function-composition-by-returning-a-function-that-accepts-one-argument-js-const-square-v-v-v-const-double-v-v-2-const-add-one-v-v-1-const-res-pipe-square-double-add-one-res-3-19-add-one-double-square-3)
* [In which states can a Promise be?](#in-which-states-can-a-promise-be)
* [What are Promises?](#what-are-promises)
* [How does prototypal inheritance differ from classical inheritance?](#how-does-prototypal-inheritance-differ-from-classical-inheritance)
* [What is the output of the following code?](#what-is-the-output-of-the-following-code-js-const-a-1-2-3-const-b-1-2-3-const-c-1-2-3-eslint-eqeqeq-0-console-log-a-c-console-log-a-b)
* [What does the following function return?](#what-does-the-following-function-return-js-function-greet-return-message-hello)
* [Explain the difference between a static method and an instance method.](#explain-the-difference-between-a-static-method-and-an-instance-method)
* [What is the difference between synchronous and asynchronous code in JavaScript?](#what-is-the-difference-between-synchronous-and-asynchronous-code-in-java-script)
* [How does `this` work?](#how-does-this-work)
* [What does the following code evaluate to?](#what-does-the-following-code-evaluate-to-js-typeof-typeof-0)
* [What are JavaScript data types?](#what-are-java-script-data-types)
* [What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?](#what-is-the-purpose-of-java-script-ui-libraries-frameworks-like-react-vue-angular-hyperapp-etc)
* [What does `'use strict'` do and what are some of the key benefits to using it?](#what-does-use-strict-do-and-what-are-some-of-the-key-benefits-to-using-it)
* [What are the differences between `var`, `let`, `const` and no keyword statements?](#what-are-the-differences-between-var-let-const-and-no-keyword-statements)
* [What is the reason for wrapping the entire contents of a JavaScript source file in a function?](#what-is-the-reason-for-wrapping-the-entire-contents-of-a-java-script-source-file-in-a-function)
</details>


### CSS

<details>
<summary>View contents</summary>

* [What is CSS BEM?](#what-is-css-bem)
* [What are the advantages of using CSS preprocessors?](#what-are-the-advantages-of-using-css-preprocessors)
* [Can you describe how CSS specificity works?](#can-you-describe-how-css-specificity-works)
* [Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.](#using-flexbox-create-a-3-column-layout-where-each-column-takes-up-a-col-n-12-ratio-of-the-container-html-div-class-row-div-class-col-2-div-div-class-col-7-div-div-class-col-3-div-div)
* [What is a focus ring? What is the correct solution to handle them?](#what-is-a-focus-ring-what-is-the-correct-solution-to-handle-them)
* [Can you name the four types of `@media` properties?](#can-you-name-the-four-types-of-media-properties)
* [What are the advantages of using CSS sprites and how would one utilize them?](#what-are-the-advantages-of-using-css-sprites-and-how-would-one-utilize-them)
* [How does Z index function?](#how-does-z-index-function)
</details>


### HTML

<details>
<summary>View contents</summary>

* [What are `defer` and `async` attributes on a `<script>` tag?](#what-are-defer-and-async-attributes-on-a-script-tag)
* [What is the DOM?](#what-is-the-dom)
* [What are some differences that XHTML has compared to HTML?](#what-are-some-differences-that-xhtml-has-compared-to-html)
* [What is the purpose of `alt` attribute on images?](#what-is-the-purpose-of-alt-attribute-on-images)
* [Where and why is the `rel="noopener"` attribute used?](#where-and-why-is-the-rel-noopener-attribute-used)
</details>


### Node

<details>
<summary>View contents</summary>

* [How can you avoid callback hells?](#how-can-you-avoid-callback-hells-js-get-data-function-a-get-more-data-a-function-b-get-more-data-b-function-c-get-more-data-c-function-d-get-more-data-d-function-e)
* [NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?](#node-js-uses-a-callback-pattern-in-many-instances-where-if-an-error-were-returned-it-will-pass-it-as-the-first-argument-to-the-callback-what-are-the-advantages-of-this-pattern-js-fs-read-file-file-path-function-err-data-if-err-handle-the-error-the-return-is-important-here-so-execution-stops-here-return-console-log-err-use-the-data-object-console-log-data)
* [What is the event loop in Node.js?](#what-is-the-event-loop-in-node-js)
</details>


---

## JavaScript
### What is the difference between the equality operators `==` and `===`?

<details>
<summary>View answer</summary>

Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.


#### Good to hear


* Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results
* Type coercion means the values are converted into the same type
* Mention of falsy values and their comparison


##### Additional links


* [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
</details>



<br>[⬆ Back to top](#table-of-contents)


### In which states can a Promise be?

<details>
<summary>View answer</summary>

A `Promise` is in one of these states:

* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). 
When either of these options happens, the associated handlers queued up by a promise's then method are called.


#### Good to hear





##### Additional links


* [Official Web Docs - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are Promises?

<details>
<summary>View answer</summary>

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
An example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result")
  }, 100)
})
  .then(console.log)
  .catch(console.error)
```


#### Good to hear


* Take a look into the other questions regarding `Promise`s!


##### Additional links


* [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e772618)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are the differences between `null` and `undefined`?

<details>
<summary>View answer</summary>

In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.


#### Good to hear


* `typeof undefined` returns `undefined`
* `typeof null` returns `object`. However, it is still a primitive value
* `undefined == null` equals to `true`


##### Additional links


* [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How do you compare two objects in JavaScript?

<details>
<summary>View answer</summary>

Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===`. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value.

In order to test if two objects are equal in structure, a helper function is required. It will
iterate through the own properties of each object to test if they have the same values, including nested objects.
Optionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument.

Note: this technique does not attempt to test equivalence of data structures other than
plain objects, arrays, functions, dates and primitive values.

```js
function isDeepEqual(obj1, obj2, testPrototypes = false) {
  if (obj1 === obj2) {
    return true
  }

  if (typeof obj1 === "function" && typeof obj2 === "function") {
    return obj1.toString() === obj2.toString()
  }

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime()
  }

  const prototypesAreEqual = testPrototypes
    ? isDeepEqual(
      Object.getPrototypeOf(obj1),
      Object.getPrototypeOf(obj2),
      true
    )
    : true

  const obj1Props = Object.getOwnPropertyNames(obj1)
  const obj2Props = Object.getOwnPropertyNames(obj2)

  return (
    obj1Props.length === obj2Props.length &&
    prototypesAreEqual &&
    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
  )
}
```


#### Good to hear


* Primitives like strings and numbers are compared by their value
* Objects on the other hand are compared by their reference (location in memory)


##### Additional links


* [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
* [Deep comparison between two values](https://30secondsofcode.org/object#equals)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the DOM?

<details>
<summary>View answer</summary>

The DOM (Document Object Model) is an API that represents the structure of HTML and XML documents. The document
is represented by a node tree (such as elements, text nodes, comments), where each node is an object that can be manipulated via JavaScript to change their styles, contents, placement in the tree, or interacted with through event listeners.


#### Good to hear


* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API
* The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.


##### Additional links


* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the reason for wrapping the entire contents of a JavaScript source file in a function?

<details>
<summary>View answer</summary>

This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is usually immediately invoked so that the namespace (library name) is assigned the return value of the function.

```js
const myLibrary = function () {
  var privateVariable = 2
  return {
    publicMethod: () => privateVariable
  }
}()
privateVariable // ReferenceError
myLibrary.publicMethod() // 2
```


#### Good to hear


* Used among many popular JavaScript libraries
* Creates a private namespace


##### Additional links


* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are JavaScript data types?

<details>
<summary>View answer</summary>

The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.


#### Good to hear


* Mention of newly added `Symbol` data type
* `Array`, `Date` and `function` are all of type `object`
* Functions in JavaScript are objects with the capability of being callable


##### Additional links


* [MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Generate an array, containing the Fibonacci sequence, up until the nth term.

<details>
<summary>View answer</summary>

Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

```js
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
```


#### Good to hear





##### Additional links


* [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What does `0.1 + 0.2 === 0.3` evaluate to?

<details>
<summary>View answer</summary>

It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

```js
0.1 + 0.2 // 0.30000000000000004
```

A solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.

```js
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
```


#### Good to hear


* A simple solution to this problem


##### Additional links


* [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
* [Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the difference between the array methods `map()` and `forEach()`?

<details>
<summary>View answer</summary>

Both methods iterate through the elements of an array. `map()` maps each element to new element by invoking the callback function on each element and returns a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.


#### Good to hear


* Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
* `map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array.


##### Additional links


* [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What does the following code evaluate to?

```js
typeof typeof 0
```

<details>
<summary>View answer</summary>

It evaluates to `"string"`.

`typeof 0` evaluates to the string `"number"` and therefore `typeof "number"` evaluates to `"string"`.


#### Good to hear





##### Additional links


* [MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What will the console log in this example?

```js
var foo = 1
var foobar = function() {
  console.log(foo)
  var foo = 2
}
foobar()
```

<details>
<summary>View answer</summary>

Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.


#### Good to hear


* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Mention of `strict` mode


##### Additional links


* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How does hoisting work in JavaScript?

<details>
<summary>View answer</summary>

Hoisting is a JavaScript mechanism where variables and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

```js
console.log(hoist) // Output: undefined
var hoist = "The variable has been hoisted."
```


#### Good to hear


* Hoisting is JavaScript’s default behavior of moving declarations to the top
* Functions are hoisted before variables
* Mention of `strict` mode
* `const` variables must be both declared and initialised before use
* `let` variables must be declared before use


##### Additional links


* [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
* [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Create a function that masks a string of characters with `#` except for the last four (4) characters.

```js
mask("123456789") // "#####6789"
```

<details>
<summary>View answer</summary>

> There are many ways to solve this problem, this is just one one of them.

Using `String.prototype.slice()`, we can grab a portion of the string from index `0` (first character) to index `-4` (5th last character) and calculate the resulting length, using `String.prototype.repeat()` to repeat the mask character that many times. Then, using `String.prototype.slice()` once more, we can concatenate the last 4 characters by passing `-4` as an argument.

```js
const mask = (str, maskChar = "#") =>
  maskChar.repeat(str.slice(0, -4).length) + str.slice(-4)
```


#### Good to hear


* Short, one-line functional solutions to problems should be preferred provided they are efficient


##### Additional links



</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the difference between synchronous and asynchronous code in JavaScript?

<details>
<summary>View answer</summary>

Synchronous means each operation must wait for the previous one to complete.

Asynchronous means an operation can occur while another operation is still being processed.

In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.


#### Good to hear


* JavaScript has a concurrency model based on an "event loop".
* Functions like `alert` block the main thread so that no user input is registered until the user closes it.


##### Additional links



</details>



<br>[⬆ Back to top](#table-of-contents)


### What does the following function return?

```js
function greet() {
  return
  {
    message: "hello"
  }
}
```

<details>
<summary>View answer</summary>

Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.


#### Good to hear


* Automatic semicolon placement can lead to time-consuming bugs


##### Additional links


* [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)
</details>



<br>[⬆ Back to top](#table-of-contents)


### NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?

```js
fs.readFile(filePath, function(err, data) {  
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
```

<details>
<summary>View answer</summary>

Advantages include:

* Not needing to process data if there is no need to even reference it
* Having a consistent API leads to more adoption
* Ability to easily adapt a callback pattern that will lead to more maintainable code

As you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback's only parameter. The callback function allows a user to easily know whether or not an error occurred. 

This practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.

```js
var isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.")
  } else {
    callback(new Error("Value is not true!"))
  }
}

var callback = function (error, retval) {
  if (error) {
    console.log(error)
    return
  }
  console.log(retval)
}

isTrue(false, callback)
isTrue(true,  callback)

/*
  { stack: [Getter/Setter],
    arguments: undefined,
    type: undefined,
    message: 'Value is not true!' }
  Value was true.
*/
```


#### Good to hear


* This is just a convention. However, you should stick to it.


##### Additional links


* [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the output of the following code?

```js
const a = [1, 2, 3]
const b = [1, 2, 3]
const c = "1,2,3"

/* eslint eqeqeq: 0 */
console.log(a == c)
console.log(a == b)
```

<details>
<summary>View answer</summary>

The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.


#### Good to hear


* JavaScript performs automatic type conversion
* Objects are compared by reference
* Primitives are compared by value


##### Additional links


* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a callback?

<details>
<summary>View answer</summary>

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.

Event listeners are callbacks that are only executed when a specific event occurs.

```js
function onClick() {
  console.log("The user clicked on the page.")
}
document.addEventListener("click", onClick)
```


#### Good to hear


* Functions are first-class objects in JavaScript
* Callbacks vs Promises


##### Additional links


* [MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Describe the different ways to create an object. When should certain ways be preferred over others?

<details>
<summary>View answer</summary>

##### Object literal

Often used to store one occurrence of data.

```js
const person = {
  name: "John",
  age: 50,
  birthday() {
    this.age++
  }
}
person.birthday() // person.age === 51
```

##### Constructor

Often used when you need to create multiple instances of an object, each with their own data that other instances of the class cannot affect. The `new` operator must be used before invoking the constructor or the global object will be mutated.

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.birthday = function() {
  this.age++
}
const person1 = new Person("John", 50)
const person2 = new Person("Sally", 20)
person1.birthday() // person1.age === 51
person2.birthday() // person2.age === 21
```

##### Factory function

Creates a new object similar to a constructor, but can store private data using a closure. There is also no need to use `new` before invoking the function or the `this` keyword. Factory functions usually discard the idea of prototypes and keep all properties and methods as own properties of the object.

```js
const createPerson = (name, age) => {
  const birthday = () => person.age++
  const person = { name, age, birthday }
  return person
}
const person = createPerson("John", 50)
person.birthday() // person.age === 51
```

##### `Object.create()`

Sets the prototype of the newly created object.

```js
const personProto = {
  birthday() {
    this.age++
  }
}
const person = Object.create(personProto)
person.age = 50
person.birthday() // person.age === 51
```

A second argument can also be supplied to `Object.create()` which acts as a descriptor for the new properties to be defined.

```js
Object.create(personProto, {
  age: {
    value: 50,
    writable: true,
    enumerable: true
  }
})
```


#### Good to hear


* Prototypes are objects that other objects inherit properties and methods from.
* Factory functions offer private properties and methods through a closure but increase memory usage as a tradeoff, while classes do not have private properties or methods but reduce memory impact by reusing a single prototype object.


##### Additional links


* [Factory functions vs constructor functions vs classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the difference between a parameter and an argument?

<details>
<summary>View answer</summary>

Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.

```js
function myFunction(parameter1, parameter2) {
  console.log(arguments[0]) // "argument1"
}
myFunction("argument1", "argument2")
```


#### Good to hear


* `arguments` is an array-like object containing information about the arguments supplied to an invoked function.
* `myFunction.length` describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied).


##### Additional links



</details>



<br>[⬆ Back to top](#table-of-contents)


### Does JavaScript pass by value or by reference?

<details>
<summary>View answer</summary>

JavaScript always passes by value. However, with objects, the value is a reference to the object.


#### Good to hear


* Difference between pass-by-value and pass-by-reference


##### Additional links


* [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How does prototypal inheritance differ from classical inheritance?

<details>
<summary>View answer</summary>

In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword.

In the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`. Finally, object instances can be composed from many different objects, allowing for selective inheritance.


#### Good to hear


* Classes create hierarches and taxonomies.
* Prototypal inheritance allows for a flat prototype delegation hierarchy.


##### Additional links


* [MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [Differences between class and prototypal inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How do you clone an object in JavaScript?

<details>
<summary>View answer</summary>

Using the object spread operator `...`, the object's own enumerable properties can be copied
into the new object. This creates a shallow clone of the object.

```js
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }
```

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.

Other alternatives include:

* `JSON.parse(JSON.stringify(obj))` can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).
* `Object.assign({}, obj)` is another alternative.
* `Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})` is another more verbose alternative that shows the concept in greater depth.


#### Good to hear


* JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
* The same method can be used to merge two objects.


##### Additional links


* [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are the differences between `var`, `let`, `const` and no keyword statements?

<details>
<summary>View answer</summary>

##### No keyword prefix

When no keyword is prefixed before a variable declaration, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, it will assign the variable as a property of the global object `this` (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.

##### var

`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.

Below, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.

```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i) // logs `10` ten times
  })
}

/* ==================== Solutions with `var` ==================== */
for (var i = 0; i < 10; i++) {
  // Passed as an argument will use the value as-is in that point in time
  setTimeout(console.log, 0, i)
}

for (var i = 0; i < 10; i++) {
  // Create a new function scope that will use the value as-is in that point in time
  ;(i => {
    setTimeout(() => {
      console.log(i)
    })
  })(i)
}
```

##### let

`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

```js
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i) // logs 0, 1, 2, 3, ...
  })
}
```

##### const

`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won't be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.

```js
const myObject = {}
myObject.prop = "hello!" // No error
myObject = "hello" // Error
```


#### Good to hear


* All declarations are hoisted to the top of their scope
* Show a common issue with using `var` and how `let` can solve it, as well as a solution that keeps `var`.
* `var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so.


##### Additional links


* [`let` vs `const`](https://wesbos.com/let-vs-const/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is functional programming?

<details>
<summary>View answer</summary>

Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.


#### Good to hear


* Cleaner, more concise development experience
* Simple function composition
* Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)
* JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)


##### Additional links


* [Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)
* [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.

```js
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3)))
```

<details>
<summary>View answer</summary>

Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.

```js
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
```


#### Good to hear


* Function composition is the process of combining two or more functions to produce a new function.


##### Additional links


* [What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the only value not equal to itself in JavaScript?

<details>
<summary>View answer</summary>

`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal.


#### Good to hear


* The difference between `isNaN()` and `Number.isNaN()`
* `const isNaN = x => x !== x`


##### Additional links


* [MDN docs for `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Explain the difference between a static method and an instance method.

<details>
<summary>View answer</summary>

Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.

```js
Array.isArray // static method of Array
Array.prototype.push // instance method of Array
```

In this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.

Instance methods could technically work as static methods, but provide terser syntax:

```js
const arr = [1, 2, 3]
arr.push(4)
Array.push(arr, 4)
```


#### Good to hear


* How to create static and instance methods with ES2015 class syntax


##### Additional links


* [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Explain the difference between mutability and immutability, and mutating vs non-mutating methods.

<details>
<summary>View answer</summary>

"Mutability" means a value is subject to change. "Immutability" means a value cannot change.

Objects are mutable, while primitive values (strings, numbers, etc) are immutable. This means any operation performed on a primitive value does not change the original value.

All `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.

```js
const myString = "hello!"
myString.replace("!", "") // returns a new string, cannot mutate the original value

const originalArray = [1, 2, 3]
originalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]
originalArray.concat(4) // returns a new array, does not mutate the original
```


#### Good to hear


* List of mutating and non-mutating array methods


##### Additional links


* [Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How does `this` work?

<details>
<summary>View answer</summary>

The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with `.call`, `.apply` and `.bind`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call`.

Here are some common examples of `this`:

```js
// Object literals
var myObject = {
  regularFunction: function() {
    return this
  },
  arrowFunction: () => {
    return this
  }
}
myObject.regularFunction() // myObject
myObject.arrowFunction() // NOT myObject
const withoutContextFunction = myObject.regularFunction
withoutContextFunction() // NOT myObject

// Event listeners
document.body.addEventListener("click", function() {
  console.log(this) // document.body
})

// Classes
class myClass {
  constructor() {
    console.log(this) // myClassInstance
  }
}
var myClassInstance = new myClass()

// Manual
var myFunction = function() {
  return this
}
myFunction.call({ customThis: true }) // { customThis: true }

// Unwanted `this`
var obj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(function(value) {
      // this === this.arr
      return this.double(value)
    })
  },
  double() {
    return value * 2
  }
}
obj.doubleArr() // Uncaught TypeError: this.double is not a function
```


#### Good to hear


* In non-strict mode, global `this` is the global object (`window` in browsers), while in non-strict mode global `this` is `undefined`.
* `Function.prototype.call` and `Function.prototype.apply` set the `this` context of an executing function as the first argument, with `call` accepting a variadic number of arguments thereafter, and `apply` accepting an array as the second argument which are fed to the function in a variadic manner.
* `Function.prototype.bind` returns a new function that enforces the `this` context as the first argument which cannot be changed by other functions.
* If a function requires its `this` context to be changed based on how it is called, you must use the `function` keyword. Use arrow functions when you want `this` to be the surrounding (lexical) context.


##### Additional links


* [`this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the event loop in Node.js?

<details>
<summary>View answer</summary>

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.


#### Good to hear


* The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded


##### Additional links


* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is event-driven programming?

<details>
<summary>View answer</summary>

Event-driven programming is building an application that is based on and responds to events. Whenever an event occurs, the application responds by running a callback function, which is registered to that event and context.


#### Good to hear


* Responds to events that occur by running a callback function
* Follows a publish-subscribe pattern


##### Additional links


* [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
* [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?

<details>
<summary>View answer</summary>

The main purpose is to avoid manipulating the DOM directly and keep the state of an application
in sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.

When working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load, i.e. saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of manually updating the UI to reflect the new state (imperative).


#### Good to hear


* The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.
* JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals.


##### Additional links


* [Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What does `'use strict'` do and what are some of the key benefits to using it?

<details>
<summary>View answer</summary>

Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enfores more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:

* Easier debugging due to eliminating silent errors.
* Disallows variable redefinition.
* Prevents accidental global variables.
* Oftentimes provides increased performance over identical code that is not running in strict mode.
* Simplifies `eval()` and `arguments`.
* Helps make JavaScript more secure.


#### Good to hear


* Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.
* Throws an error on invalid usage of `delete`.
* Prohibits some syntax likely to be defined in future versions of ECMAScript


##### Additional links


* [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a closure?

<details>
<summary>View answer</summary>

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

* Variables declared in its own scope
* Variables declared in the scope of the parent function
* Variables declared in the global scope


#### Good to hear


* Closures are useful because they let you associate data with a function that operates on that data.
* A closure can substitute an object with only a single method.
* Closures can be used to emulate private methods.


##### Additional links


* [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How can you avoid callback hells?

```js
getData(function(a){  
  getMoreData(a, function(b){
    getMoreData(b, function(c){ 
      getMoreData(c, function(d){ 
        getMoreData(d, function(e){ 
          //  ...
        })
      })
    })
  })
})
```

<details>
<summary>View answer</summary>

There are lots of ways to solve the issue of callback hells:

* modularization: break callbacks into independent functions
* use a control flow library, like async
* use generators with Promises
* use async/await (from v7 on)


#### Good to hear


* As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.


##### Additional links


* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)
</details>



<br>[⬆ Back to top](#table-of-contents)


## CSS
### What is CSS BEM?

<details>
<summary>View answer</summary>

The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

```css
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
```

Here is an example with the class names on markup:

```html
<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
```

In this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.

Since Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.

```html
<a href="/" class="navbar__link is-active"></a>
```

These must be chained to the Element and never alone however, or there will be scope issues.

```css
.navbar__link.is-active {
}
```


#### Good to hear


* Alternative solutions to scope issues like CSS-in-JS


##### Additional links


* [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are the advantages of using CSS preprocessors?

<details>
<summary>View answer</summary>

CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), variables, mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.


#### Good to hear


* They allow us to write more maintainable and scalable CSS
* Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)


##### Additional links


* [CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.

```html
<div class="row">
  <div class="col-2"></div>
  <div class="col-7"></div>
  <div class="col-3"></div>
</div>
```

<details>
<summary>View answer</summary>

Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.

```css
.row {
  display: flex;
}

.col-2 {
  flex: 2;
}

.col-7 {
  flex: 7;
}

.col-3 {
  flex: 3;
}
```


#### Good to hear





##### Additional links


* [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Can you name the four types of `@media` properties?

<details>
<summary>View answer</summary>

* `all`, which applies to all media type devices
* `print`, which only applies to printers
* `screen`, which only applies to screens (desktops, tablets, mobile etc.)
* `speech`, which only applies to screenreaders


#### Good to hear





##### Additional links


* [MDN docs for `@media` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
* [MDN docs for using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How does Z index function?

<details>
<summary>View answer</summary>

When elements overlap, z-order determines which one covers the other.


#### Good to hear


* `z-index` only applies to positioned elements (except `static`)
* How to organize z-indexes on large scale projects


##### Additional links


* [MDN docs for z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
* [Understanding CSS z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
* [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Can you describe how CSS specificity works?

<details>
<summary>View answer</summary>

Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:

* Inline rules (binary - 1 or 0)
* Number of id selectors
* Number of class, pseudo-class and attribute selectors
* Number of tags and pseudo-element selectors

When two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page's style sheet is deemed more specific and therefore applied to the element.


#### Good to hear


* Specificity matrix: [inline, id, class/pseudo-class/attribute, tag/pseudo-element]
* In cases of equal specificity, last rule is applied


##### Additional links


* [CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are the advantages of using CSS sprites and how would one utilize them?

<details>
<summary>View answer</summary>

CSS sprites combine multiple images into one image, limiting the amount of HTTP requests a browser has to make, thus improving load times.

To utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of a CSS selector or an element.


#### Good to hear


* CSS sprites combine multiple images into one, which improves page load times by limiting requests
* `background-image`, `background-position` and `background-size` can be used to utilize a spritesheet


##### Additional links


* [CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is a focus ring? What is the correct solution to handle them?

<details>
<summary>View answer</summary>

A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused.

In the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element.

In recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users.

The best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.


#### Good to hear





##### Additional links


* [:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)
</details>



<br>[⬆ Back to top](#table-of-contents)


## HTML
### What is the purpose of `alt` attribute on images?

<details>
<summary>View answer</summary>

The `alt` attribute provides alternative information for an image if a user cannot view it. If the image is for decorative purposes only, the `alt` attribute should be empty. On the other hand, if image contains information the `alt` attribute should describe image.


#### Good to hear


* Decorative images should have empty `alt` tag


##### Additional links


* [A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are `defer` and `async` attributes on a `<script>` tag?

<details>
<summary>View answer</summary>

If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order
they are encountered.

The `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order.

The `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order.

Note: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).

```html
<script src="myscript.js"></script>
<script src="myscript.js" defer></script>
<script src="myscript.js" async></script>
```


#### Good to hear


* Placing a `defer` script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.
* If the scripts rely on each other, use `defer`.
* If the script is independent, use `async`.
* Use `defer` if the DOM must be ready and the contents are not placed within a `DOMContentLoaded` listener.


##### Additional links


* [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the DOM?

<details>
<summary>View answer</summary>

The DOM (Document Object Model) is an API that represents the structure of HTML and XML documents. The document
is represented by a node tree (such as elements, text nodes, comments), where each node is an object that can be manipulated via JavaScript to change their styles, contents, placement in the tree, or interacted with through event listeners.


#### Good to hear


* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API
* The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.


##### Additional links


* [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What are some differences that XHTML has compared to HTML?

<details>
<summary>View answer</summary>

Some of the key differences are:

* An XHTML element must have an XHTML `<DOCTYPE>`
* Attributes values must be enclosed in quotes
* Attribute minimization is forbidden (e.g. one has to use `checked="checked"` instead of `checked`)
* Elements must always be properly nested
* Elements must always be closed
* Special characters must be escaped


#### Good to hear


* Any element can be self-closed
* Tags ands attributes are case-sensitive, usually lowercase


##### Additional links


* [W3Schools docs for HTML and XHTML](https://www.w3schools.com/html/html_xhtml.asp)
</details>



<br>[⬆ Back to top](#table-of-contents)


### Where and why is the `rel="noopener"` attribute used?

<details>
<summary>View answer</summary>

The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.


#### Good to hear


* `rel="noopener"` is applied to hyperlinks.
* `rel="noopener"` prevents opened links from manipulating the source page.


##### Additional links


* [Open external anchors using rel="noopener"](https://developers.google.com/web/tools/lighthouse/audits/noopener)
* [About rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)
</details>



<br>[⬆ Back to top](#table-of-contents)


## Node
### NodeJS uses a callback pattern in many instances where if an error were returned it will pass it as the first argument to the callback. What are the advantages of this pattern?

```js
fs.readFile(filePath, function(err, data) {  
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})
```

<details>
<summary>View answer</summary>

Advantages include:

* Not needing to process data if there is no need to even reference it
* Having a consistent API leads to more adoption
* Ability to easily adapt a callback pattern that will lead to more maintainable code

As you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback's only parameter. The callback function allows a user to easily know whether or not an error occurred. 

This practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.

```js
var isTrue = function(value, callback) {
  if (value === true) {
    callback(null, "Value was true.")
  } else {
    callback(new Error("Value is not true!"))
  }
}

var callback = function (error, retval) {
  if (error) {
    console.log(error)
    return
  }
  console.log(retval)
}

isTrue(false, callback)
isTrue(true,  callback)

/*
  { stack: [Getter/Setter],
    arguments: undefined,
    type: undefined,
    message: 'Value is not true!' }
  Value was true.
*/
```


#### Good to hear


* This is just a convention. However, you should stick to it.


##### Additional links


* [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)
</details>



<br>[⬆ Back to top](#table-of-contents)


### How can you avoid callback hells?

```js
getData(function(a){  
  getMoreData(a, function(b){
    getMoreData(b, function(c){ 
      getMoreData(c, function(d){ 
        getMoreData(d, function(e){ 
          //  ...
        })
      })
    })
  })
})
```

<details>
<summary>View answer</summary>

There are lots of ways to solve the issue of callback hells:

* modularization: break callbacks into independent functions
* use a control flow library, like async
* use generators with Promises
* use async/await (from v7 on)


#### Good to hear


* As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.


##### Additional links


* [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
* [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)
</details>



<br>[⬆ Back to top](#table-of-contents)


### What is the event loop in Node.js?

<details>
<summary>View answer</summary>

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.


#### Good to hear


* The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded


##### Additional links


* [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
</details>



<br>[⬆ Back to top](#table-of-contents)


## License

[MIT](LICENSE). Copyright (c) [Stefan Feješ](https://stefanfejes.com/).
