var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.reverse().map((item, index) => console.log(`N[${index}] = ${item}`))