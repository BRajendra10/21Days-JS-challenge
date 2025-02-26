// Use filter to create a new array containing only the strings from an array that have a length greater than 5.

let fruts = ["apple", "banana", "orange", "cherry", "grape"];

let newFruts =  fruts.filter((val) => {

    return val.length > 5;
});

// string length that are greater then 5: banana, orange, cherry
console.log(newFruts);