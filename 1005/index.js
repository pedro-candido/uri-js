var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let firstValue = parseFloat(lines[0]);
let secondValue = parseFloat(lines[1]);
let media = ((firstValue*3.5) + secondValue * 7.5)/(3.5+7.5);

console.log(`MEDIA = ${media.toFixed(5)}`);
