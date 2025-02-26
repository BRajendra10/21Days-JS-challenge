// Write a function that takes an array of numbers and a callback function. The function should return a new array where each element is the square of the corresponding element in the original array. Use the callback to perform the squaring.

let numbers = [1, 2, 3, 4, 5, 6];

let squareNumbers = numbers.map((val) => {
    
  return val * val;
});

// square of array: 1, 4, 9, 16, 25, 36
console.log(squareNumbers);
