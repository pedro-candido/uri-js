var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = Number(lines[0]); i < Number(lines[0]) + 12; i++){
    i % 2 === 1 ? console.log(i) : null
}