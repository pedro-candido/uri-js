var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = Number(lines[0]);
let piUri = 3.14159;
let volume = (4 / 3) * piUri * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);