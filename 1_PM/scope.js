// Part 1:
//  - What will print and why? 
/* Sol: 1, 2, undefined. This is because a is first defined as 1, so then "1" is printed. 
Then y is called, where a is defined as 2, and so "2" is printed. 
Finally, y calls x, but a is reinitialized without a value within the function x, so "undefined" is printed. */
//  - What will change if we delete line 5? Why?
/* Sol: The program prints "1, 2, 1". This is because a is only defined as 2 within the scope of the function y. 
If we don't reinitialize a in x, then it retains its original value of 1 as defined before at the bottom. */

// Part 2:
// - change to ES6 syntax
// Sol: changed all the "var" to "let"

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x() {
  let a = 2;
  console.log(a);
}

function y() {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
