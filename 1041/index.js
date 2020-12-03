var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let coord = lines[0].split(' ');
let x = parseFloat(coord[0]).toFixed(1);
let y = parseFloat(coord[1]).toFixed(1);

if (x == 0.0 && y == 0.0) return console.log('Origem');
if (x != 0 && y == 0) return console.log('Eixo X');
if (x == 0 && y != 0) return console.log('Eixo Y');

if (x > 0 && y > 0) return console.log('Q1');
if (x < 0 && y > 0) return console.log('Q2');
if (x < 0.0 && y < 0) return console.log('Q3');
if (x > 0 && y < 0) return console.log('Q4');


