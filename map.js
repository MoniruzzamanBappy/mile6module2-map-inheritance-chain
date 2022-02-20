const numbers = [232, 323, 23, 2, 3, 4, 45, 56, 7, 876, 8, 79];
const output = [];

const doubleIt = Number => Number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
// console.log(output);

// const output2 = numbers.map(doubleIt);
const output2 = numbers.map(Number => Number * 2);
console.log(output2);