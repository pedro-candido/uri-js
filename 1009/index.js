var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = Number(lines[1]);
let sales = Number(lines[2]) * 0.15;

console.log(`TOTAL = R$ ${(salary + sales).toFixed(2)}`);
