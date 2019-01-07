// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for(let property in obj) {
    if(property){
      return !(hasFalsyValue(property));
    }
  }
  return property;
};

obj1 = {
  "test": true,
  "test2": 1,
  "test3": {
    "test4": true,
    "test5": 1,
  },
  "test6": 1,
}

console.log(hasFalsyValue(obj1));