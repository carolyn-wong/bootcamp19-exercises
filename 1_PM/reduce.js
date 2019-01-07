// complete the implementation of sum and reduce such that reducing an array
// returns the product of its values
// [0,4,3,6,9].fold(sum, 0) === 22

const arr = [0, 1, 2, 3, 4];

const sum = function(total, el) {
    return total + el;
};

Array.prototype.reduce = function(fun, init) {
    totalVal = init;
    this.forEach(el => {
        totalVal = sum(totalVal, el);
    });
    return totalVal;
};

const total = arr.reduce(sum, 0);
console.log(total);
