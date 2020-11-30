var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let timeWaste = Number(lines[0]);
let speed = Number(lines[1]);

console.log(`${((timeWaste*speed)/12).toFixed(3)}`);