// Use reduce to calculate the average of numbers in an array.

const marks = [87, 95, 63, 77, 32, 45, 54];

let sumOfMarks =  marks.reduce((pre, curr) => {

    return pre + curr;
});


let average = sumOfMarks / marks.length;

// average of marks array is 64.71
console.log(average);