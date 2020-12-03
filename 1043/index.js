var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');

let a = parseFloat(values[0]);
let b = parseFloat(values[1]);
let c = parseFloat(values[2]);

if ((a < b + c) && 
    (b < a + c) && 
    (c < b + a))
    console.log(`Perimetro = ${(a+b+c).toFixed(1)}`);
else console.log(`Area = ${(((a + b) * c) / 2).toFixed(1)}`);