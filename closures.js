//JavaScript Closures
// -- where the inner function can access the variables of the outer function

const calculate = (a) => {
  const add = (b) => {
    return a + b;
  };
  // return the inner function
  return add;
};

const addition = calculate(23444);
// a = 23444
console.log(addition(456));
// b = 456
