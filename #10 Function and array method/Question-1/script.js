// Filter even from array of numbers using a calback and the function should return a new array contaning only even numbers from orignal array.

let numbers = [1, 2, 3, 4, 5, 6, 4, 8, 9, 10];

let evenNumbers =  numbers.filter((val) => {
    
    return val%2==0;
});

// even numbers from array : 2, 4, 6, 8, 10
console.log(evenNumbers);