var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let x1 = Number(lines[0]);
let x2 = Number(lines[1]);
let sum = x1 + x2;

console.log(`X = ${sum}`);
