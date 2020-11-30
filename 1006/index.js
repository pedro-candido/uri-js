var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let firstValue = (Number(lines[0]))*2;
let secondValue = (Number(lines[1]))*3;
let thirdValue = (Number(lines[2]))*5;

let media = (firstValue + secondValue + thirdValue)/10

console.log(`MEDIA = ${media.toFixed(1)}`)