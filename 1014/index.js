var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let distance = Number(lines[0]);
let km = Number(lines[1]);

console.log(`${(distance / km).toFixed(3)} km/l`);
