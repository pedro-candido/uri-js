
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let firstValue = Number(lines[0]);
let secondValue = Number(lines[1]);

console.log(`PROD = ${firstValue * secondValue}`);