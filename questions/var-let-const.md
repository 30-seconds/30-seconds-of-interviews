### What are the differences between `var`, `let`, `const` and no keyword statements?

#### Answer

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

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
