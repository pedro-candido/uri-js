var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let limit = Number(lines[0])

for(let i = 1; i <= limit; i++){
    i % 2 === 1 ? console.log(i) : null
}