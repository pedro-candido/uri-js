var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let intValues = lines[0].split(' ');
let a = intValues[0];
let b = intValues[1];
let c = intValues[2];
let d = intValues[3];

if(b > c && d > a && c+d > a+b && c > 0 && d > 0 && a % 2 === 0 ) console.log('Valores aceitos')
else console.log('Valores nao aceitos')