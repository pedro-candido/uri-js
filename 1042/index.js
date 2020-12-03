var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let valuesUnsorted = lines[0].split(' ');
let valuesToSort = lines[0].split(' ');

let valuesSorted = valuesToSort.sort((a, b) => {
    return a - b;
});

valuesSorted.map((item) => console.log(item));
console.log('');
valuesUnsorted.map((item) => console.log(item));
