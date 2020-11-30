var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let piUri = 3.14159;
let raioAoQuadrado = parseFloat(lines[0]);
let area = piUri * Math.pow(raioAoQuadrado,2);

console.log(`A=${area.toFixed(4)}`);
