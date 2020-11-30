var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let x1 = Number(lines[0].split(' ')[0]);
let y1 = Number(lines[0].split(' ')[1]);

let x2 = Number(lines[1].split(' ')[0]);
let y2 = Number(lines[1].split(' ')[1]);

let distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1, 2))

console.log(distance.toFixed(4));
