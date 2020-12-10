var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(' ');
let a = parseFloat(values[0]);
let b = parseFloat(values[1]);
let c = parseFloat(values[2]);

let arrSorted = [a, b, c].sort((a, b) => {
    return b - a;
});

a = arrSorted[0];
b = arrSorted[1];
c = arrSorted[2];

let aPow2 = Math.pow(a, 2);
let bPow2 = Math.pow(b, 2);
let cPow2 = Math.pow(c, 2);

if (a >= b + c) console.log('NAO FORMA TRIANGULO');
else {
    if (aPow2 === bPow2 + cPow2) console.log('TRIANGULO RETANGULO');
    if (aPow2 > bPow2 + cPow2) console.log('TRIANGULO OBTUSANGULO');
    if (aPow2 < bPow2 + cPow2) console.log('TRIANGULO ACUTANGULO');
    if (a === b && b === c) console.log('TRIANGULO EQUILATERO');
    else if (a === b || a === c || b === c) console.log('TRIANGULO ISOSCELES');
}
