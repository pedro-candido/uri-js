var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = Number(lines[0]);
let ir = 0;
if(salary < 2000.00) console.log('Isento')
else if(salary < 3000.00);