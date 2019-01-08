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
  for(let i = 0; i < arrLen; i++) {
    if(uniArr.includes(arr[i]) <= 0 ){
      uniArr.push(arr[i]);
    }
  }
  return uniArr;
};

console.log(uniqueOnes([1,3,5,1,3]));

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

console.log(zip([1,2,3], [1,2,3]));

const unzip = (arr) => {
  // TODO - Write a function which does the opposite of `zip()`
  const arr1 = [], arr2 = [];
  for(let i = 0 ; i < arr.length; i++) {
    arr1.push(arr[i][0]);
    arr2.push(arr[i][1]);
  }
  return([arr1, arr2]);
};

console.log(unzip([ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]));

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let counter = num - 1;
  const strArr = [];
  for(let i = 0; i < str.length; i++){
    strArr.push(str[counter]);
    counter++;
    if(counter === str.length) {
      counter = 0;
    }
  }
  return strArr.join("");  
};

console.log(shiftRight("Hello",3));

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let months = [ "January", "February", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];
  function triConvert(num){
    var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
    var hundred = ' hundred';
    var output = '';
    var numString = num.toString();

    if (num == 0) {
        return 'dontAddBigSufix';
    }
    //the case of 10, 11, 12 ,13, .... 19 
    if (num < 20) {
        output = ones[num];
        return output;
    }

    //100 and more
    if (numString.length == 3) {
        output = ones[parseInt(numString.charAt(0))] + hundred;
        output += tens[parseInt(numString.charAt(1))];
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }

    output += tens[parseInt(numString.charAt(0))];
    output += ones[parseInt(numString.charAt(1))];

    return output;
}   

  let today = new Date();
  let date = today.toLocaleDateString().split("/"); 
  let time = today.toLocaleTimeString();
  let timeSplit = time.split(":");
  month = months[date[0]-1],
  day = date[1],
  year = date[2],
  hour = triConvert(timeSplit[0]);
  minute = triConvert(timeSplit[1]);
  if(time.includes("AM")) {
    let daytime = "morning";
  } else { 
    daytime = "evening";
  };
  return(`Today's date is ${month} ${day}, ${year}. It is${hour}${minute} in the ${daytime}.`);
};

console.log(announceDate());

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
