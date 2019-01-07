const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};
console.log(tokenize("This is a test"));

const reverse = str => {
  // TODO - write a function which reverses the string
  strArr = str.split("");
  strArr.reverse();
  return strArr.join("");
};

console.log(reverse("Hello"));

const uniqueOnes = arr => {
  // TODO - write a function which removes all non-unique elemenets from an array
  const uniArr = [];
  arrLen = arr.length;
  for(let i = 0; i < arrLen, i++) {
    if(uniArr.includes(arr[i]) <= 0 ){
      uniArr.push(arr[i]);
    }
  }
};

console.log([1,3,5,1,3])

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if(num < 0) {
    return("must be a positive integer");
  }
  else if (num === 0) {
    return 1;
  }
  else {
    return num * factorial(num-1);
  }
};

console.log(factorial(5));

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  const zipArr = [];
  if(arr1.length !== arr2.length) {
    return -1;
  }
  for(let i = 0; i < arr1.length; i++){
    zipArr.push([arr1[i], arr2[i]]);
  }
  return zipArr;
};

console.log(zip[1,2,3], [1,2,3]);

const unzip = (arr1, arr2) => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
