### What is the implication of JavaScript being a dynamically typed language?

#### Answer

Unlike C or C++, JavaScript is a dynamically typed language. This means that all type checking is performed at runtime as opposed to at compile time. A construct’s actual data type is determined by its context, which can produce confusing or unwanted results. Thus, a JavaScript program may compile without error, but result in unanticipated behavior.  

Consider the following expressions that use the same operands but different operators (`-` vs `+`):

```js
"3" - 1 // 2
"3" + 1 // "31"
```

What’s happened here is type coercion. The string `"3"` is coerced to the number `3` in the first expression, while the number `1` is coerced to the string `"1"` in the second expression. JavaScript converts values to types it deems “useful” according to specific rules, like a preference for trying concatenation before addition when encountering the `+` operator. As a consequence, this can lead to confusing errors.

#### Good to hear

- Dynamically typed means constructs are assigned a type at runtime instead of compile time.
- Sometimes JavaScript interprets constructs in a way that differs from the developer’s intent, which can lead to time-consuming bugs.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Eloquent JavaScript: Values, Types, and Operators](http://eloquentjavascript.net/01_values.html)
* [Why Use Static Types in JavaScript](https://medium.freecodecamp.org/why-use-static-types-in-javascript-part-1-8382da1e0adb)

<!-- tags: (javascript) -->

<!-- expertise: (2) -->
