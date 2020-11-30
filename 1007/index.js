var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let d = Number(lines[3]);

let result = (a*b)-(c*d);

console.log(`DIFERENCA = ${result}`);
